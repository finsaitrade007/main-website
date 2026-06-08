import { NextResponse, type NextRequest } from "next/server";
import {
  CONTACT_FROM_EMAIL,
  CONTACT_TO_EMAIL,
  formatHtmlBody,
  formatPlainTextBody,
  getTransporter,
} from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4 MB — matches the FE upload hint

type FormType = "contact" | "careers";

function pickString(form: FormData, key: string): string | undefined {
  const v = form.get(key);
  return typeof v === "string" && v.trim().length > 0 ? v.trim() : undefined;
}

export async function POST(req: NextRequest) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid form payload" },
      { status: 400 },
    );
  }

  const formType = (pickString(form, "formType") ?? "contact") as FormType;
  const fullName = pickString(form, "fullName");
  const email = pickString(form, "email");

  if (!fullName || !email) {
    return NextResponse.json(
      { ok: false, error: "Full name and email are required." },
      { status: 400 },
    );
  }

  const mobile = pickString(form, "mobile");
  const dialCode = pickString(form, "dialCode");
  const fullMobile = mobile ? `${dialCode ?? ""} ${mobile}`.trim() : undefined;

  // Optional file attachment (CV) — accepted by both forms.
  const file = form.get("cv");
  let attachment:
    | { filename: string; content: Buffer; contentType: string }
    | undefined;

  if (file && typeof file === "object" && "arrayBuffer" in file) {
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { ok: false, error: "File too large. Max 4 MB." },
        { status: 413 },
      );
    }
    if (file.size > 0) {
      attachment = {
        filename: file.name || "attachment.pdf",
        content: Buffer.from(await file.arrayBuffer()),
        contentType: file.type || "application/octet-stream",
      };
    }
  }

  let subject: string;
  let title: string;
  let rows: Record<string, string | undefined>;

  if (formType === "careers") {
    const linkedin = pickString(form, "linkedin");
    const position = pickString(form, "position");
    const fit = pickString(form, "fit");

    title = "New Careers Application — Finsai Trade";
    subject = `[Careers] ${fullName}${position ? ` — ${position}` : ""}`;
    rows = {
      "Full Name": fullName,
      Email: email,
      Mobile: fullMobile,
      LinkedIn: linkedin,
      "Applying for": position,
      "Why a good fit": fit,
      "CV attached": attachment ? attachment.filename : "—",
    };
  } else {
    const queryType = pickString(form, "queryType");
    const message = pickString(form, "message");

    title = "New Support Inquiry — Finsai Trade";
    subject = `[Contact] ${fullName}${queryType ? ` — ${queryType}` : ""}`;
    rows = {
      "Full Name": fullName,
      Email: email,
      Mobile: fullMobile,
      "Query Type": queryType,
      Message: message,
      "Attachment": attachment ? attachment.filename : "—",
    };
  }

  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject,
      text: formatPlainTextBody(rows),
      html: formatHtmlBody(title, rows),
      attachments: attachment ? [attachment] : undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[/api/contact] sendMail failed:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't send your message right now. Please try again or email " +
          CONTACT_TO_EMAIL +
          " directly.",
      },
      { status: 500 },
    );
  }
}
