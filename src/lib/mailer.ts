import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

/**
 * SMTP / mail configuration is sourced entirely from environment variables so
 * recipient addresses, credentials and host can be swapped per environment
 * without touching code.
 *
 * Required:
 *   SMTP_HOST        – e.g. smtp.gmail.com / smtp.office365.com / smtp.zoho.com
 *   SMTP_USER        – mailbox username
 *   SMTP_PASS        – mailbox password / app password
 *
 * Optional:
 *   SMTP_PORT        – default 587
 *   SMTP_SECURE      – "true" to force TLS (port 465). default: derived from port
 *   CONTACT_TO_EMAIL – recipient inbox. default: support@finsaitrade.com
 *   CONTACT_FROM_EMAIL – envelope From. default: SMTP_USER (or fallback)
 */

export const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL?.trim() || "support@finsaitrade.com";

export const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL?.trim() ||
  process.env.SMTP_USER?.trim() ||
  "no-reply@finsaitrade.com";

let cached: Transporter | null = null;

export function getTransporter(): Transporter {
  if (cached) return cached;

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "Mailer is not configured — set SMTP_HOST / SMTP_USER / SMTP_PASS in .env.local",
    );
  }

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
  });

  return cached;
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
