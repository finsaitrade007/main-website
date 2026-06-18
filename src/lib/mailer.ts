import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

/**
 * Contact-form email delivery.
 *
 * Preferred (works on Railway / serverless — no outbound SMTP ports):
 *   RESEND_API_KEY     – https://resend.com API key
 *   CONTACT_FROM_EMAIL – verified sender on your Resend domain
 *
 * Alternative (Zoho / Gmail / etc. via SMTP):
 *   SMTP_HOST, SMTP_USER, SMTP_PASS
 *   SMTP_PORT          – default 587
 *   SMTP_SECURE        – "true" for port 465
 *
 * Shared:
 *   CONTACT_TO_EMAIL   – recipient inbox (default support@finsaitrade.com)
 */

export const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL?.trim() || "support@finsaitrade.com";

const DEFAULT_FROM = "no-reply@finsaitrade.com";

export type ContactMailAttachment = {
  filename: string;
  content: Buffer;
  contentType: string;
};

export type ContactMailPayload = {
  replyTo: string;
  subject: string;
  title: string;
  rows: Record<string, string | undefined>;
  attachment?: ContactMailAttachment;
};

let cached: Transporter | null = null;

function getResendApiKey(): string | undefined {
  const direct = process.env.RESEND_API_KEY?.trim();
  if (direct) return direct;

  const host = process.env.SMTP_HOST?.trim().toLowerCase() ?? "";
  const pass = process.env.SMTP_PASS?.trim() ?? "";
  if (host.includes("resend.com") && pass.startsWith("re_")) {
    return pass;
  }

  return undefined;
}

function smtpConfigured(): boolean {
  if (getResendApiKey()) return false;

  return !!(
    process.env.SMTP_HOST?.trim() &&
    process.env.SMTP_USER?.trim() &&
    process.env.SMTP_PASS
  );
}

function resendConfigured(): boolean {
  return !!getResendApiKey();
}

export function isMailerConfigured(): boolean {
  return resendConfigured() || smtpConfigured();
}

/** Envelope From — Zoho rejects sends when From ≠ authenticated mailbox. */
export function getEnvelopeFrom(): string {
  const smtpUser = process.env.SMTP_USER?.trim();
  const configured =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    process.env.RESEND_FROM_EMAIL?.trim() ||
    smtpUser ||
    DEFAULT_FROM;

  if (smtpUser && !resendConfigured()) {
    const sameMailbox =
      configured.toLowerCase() === smtpUser.toLowerCase();
    if (!sameMailbox) return smtpUser;
  }

  return configured;
}

export const CONTACT_FROM_EMAIL = getEnvelopeFrom();

export function getTransporter(): Transporter {
  if (cached) return cached;

  if (!smtpConfigured()) {
    throw new Error(
      "SMTP is not configured — set SMTP_HOST / SMTP_USER / SMTP_PASS (or use RESEND_API_KEY)",
    );
  }

  const host = process.env.SMTP_HOST!.trim();
  const user = process.env.SMTP_USER!.trim();
  const pass = process.env.SMTP_PASS!;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure =
    typeof process.env.SMTP_SECURE === "string"
      ? process.env.SMTP_SECURE.toLowerCase() === "true"
      : port === 465;

  cached = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    requireTLS: !secure && port === 587,
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 20_000,
  });

  return cached;
}

async function sendViaResend(payload: ContactMailPayload): Promise<void> {
  const apiKey = getResendApiKey();
  if (!apiKey) {
    throw new Error("Resend API key is not configured");
  }
  const text = formatPlainTextBody(payload.rows);
  const html = formatHtmlBody(payload.title, payload.rows);

  const body: Record<string, unknown> = {
    from: getEnvelopeFrom(),
    to: [CONTACT_TO_EMAIL],
    reply_to: payload.replyTo,
    subject: payload.subject,
    text,
    html,
  };

  if (payload.attachment) {
    body.attachments = [
      {
        filename: payload.attachment.filename,
        content: payload.attachment.content.toString("base64"),
      },
    ];
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(
      `Resend API error (${res.status})${detail ? `: ${detail}` : ""}`,
    );
  }
}

async function sendViaSmtp(payload: ContactMailPayload): Promise<void> {
  const transporter = getTransporter();
  const text = formatPlainTextBody(payload.rows);
  const html = formatHtmlBody(payload.title, payload.rows);

  await transporter.sendMail({
    from: getEnvelopeFrom(),
    to: CONTACT_TO_EMAIL,
    replyTo: payload.replyTo,
    subject: payload.subject,
    text,
    html,
    attachments: payload.attachment
      ? [
          {
            filename: payload.attachment.filename,
            content: payload.attachment.content,
            contentType: payload.attachment.contentType,
          },
        ]
      : undefined,
  });
}

export async function sendContactMail(payload: ContactMailPayload): Promise<void> {
  if (!isMailerConfigured()) {
    throw new Error(
      "Mailer is not configured — set RESEND_API_KEY or SMTP_HOST / SMTP_USER / SMTP_PASS on the server",
    );
  }

  if (resendConfigured()) {
    await sendViaResend(payload);
    return;
  }

  await sendViaSmtp(payload);
}

/** Format a `key: value` block for plain-text email bodies. */
export function formatPlainTextBody(rows: Record<string, string | undefined>) {
  return Object.entries(rows)
    .filter(([, v]) => v !== undefined && v !== null && String(v).length > 0)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}

/** Format a styled HTML table for HTML email bodies. */
export function formatHtmlBody(
  title: string,
  rows: Record<string, string | undefined>,
) {
  const escape = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/\n/g, "<br/>");

  const trs = Object.entries(rows)
    .filter(([, v]) => v !== undefined && v !== null && String(v).length > 0)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f8fafc;font-weight:600;color:#0f172a;width:200px;">${escape(
          k,
        )}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;color:#0f172a;">${escape(
          String(v ?? ""),
        )}</td></tr>`,
    )
    .join("");

  return `<!doctype html>
<html><body style="font-family:Inter,Arial,sans-serif;background:#f1f5f9;padding:24px;">
  <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.06);">
    <div style="background:linear-gradient(269deg,#7DB9D6 -35%,#056FB4 100%);padding:20px 24px;color:#fff;font-size:18px;font-weight:600;">
      ${escape(title)}
    </div>
    <div style="padding:24px;">
      <table style="width:100%;border-collapse:collapse;font-size:14px;">${trs}</table>
      <p style="font-size:12px;color:#64748b;margin-top:24px;">Submitted via finsaitrade.com</p>
    </div>
  </div>
</body></html>`;
}
