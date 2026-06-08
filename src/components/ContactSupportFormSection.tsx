"use client";

import {
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
  type FormEvent,
} from "react";
import { useRecaptcha } from "@/lib/useRecaptcha";

type IconKey = "quick" | "transparency" | "dedicated" | "multilang";

type Benefit = {
  icon: IconKey;
  title: string;
  description?: string;
};

const BENEFITS: Benefit[] = [
  {
    icon: "quick",
    title: "Quick Response",
    description: "We respond fast and value your time.",
  },
  {
    icon: "transparency",
    title: "Transparency",
    description: "Clear communication at every step.",
  },
  {
    icon: "dedicated",
    title: "Dedicated Resolution",
    description: "We are committed to resolving your issues.",
  },
  {
    icon: "multilang",
    title: "Multi- Language Support",
  },
];

const QUERY_OPTIONS = [
  "General inquiry",
  "Account support",
  "Trading & platform",
  "Deposits & withdrawals",
  "Partnerships / IB",
  "Other",
];

const COUNTRY_CODES: { flag: string; code: string; name: string }[] = [
  { flag: "🇮🇳", code: "+91", name: "India" },
  { flag: "🇺🇸", code: "+1", name: "United States" },
  { flag: "🇬🇧", code: "+44", name: "United Kingdom" },
  { flag: "🇨🇦", code: "+1", name: "Canada" },
  { flag: "🇦🇺", code: "+61", name: "Australia" },
  { flag: "🇸🇬", code: "+65", name: "Singapore" },
  { flag: "🇲🇾", code: "+60", name: "Malaysia" },
  { flag: "🇮🇩", code: "+62", name: "Indonesia" },
  { flag: "🇵🇭", code: "+63", name: "Philippines" },
  { flag: "🇹🇭", code: "+66", name: "Thailand" },
  { flag: "🇻🇳", code: "+84", name: "Vietnam" },
  { flag: "🇭🇰", code: "+852", name: "Hong Kong" },
  { flag: "🇨🇳", code: "+86", name: "China" },
  { flag: "🇯🇵", code: "+81", name: "Japan" },
  { flag: "🇰🇷", code: "+82", name: "South Korea" },
  { flag: "🇦🇪", code: "+971", name: "United Arab Emirates" },
  { flag: "🇸🇦", code: "+966", name: "Saudi Arabia" },
  { flag: "🇵🇰", code: "+92", name: "Pakistan" },
  { flag: "🇧🇩", code: "+880", name: "Bangladesh" },
  { flag: "🇩🇪", code: "+49", name: "Germany" },
  { flag: "🇫🇷", code: "+33", name: "France" },
  { flag: "🇮🇹", code: "+39", name: "Italy" },
  { flag: "🇪🇸", code: "+34", name: "Spain" },
  { flag: "🇳🇱", code: "+31", name: "Netherlands" },
  { flag: "🇧🇷", code: "+55", name: "Brazil" },
  { flag: "🇿🇦", code: "+27", name: "South Africa" },
];

function BenefitIcon({ icon }: { icon: IconKey }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 22 22",
    fill: "none",
    stroke: "url(#contact-icon-grad)",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  const grad = (id: string) => (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="22" y2="22">
        <stop stopColor="#7DB9D6" />
        <stop offset="1" stopColor="#056FB4" />
      </linearGradient>
    </defs>
  );

  switch (icon) {
    case "quick":
      return (
        <svg {...common} stroke="url(#cig-quick)">
          {grad("cig-quick")}
          <path d="M12 2 4 13h7l-1 7 8-11h-7l1-7Z" />
        </svg>
      );
    case "transparency":
      return (
        <svg {...common} stroke="url(#cig-trans)">
          {grad("cig-trans")}
          <path d="M11 2 3 5v6c0 5 3.4 9 8 10 4.6-1 8-5 8-10V5l-8-3Z" />
          <path d="m8 11 2 2 4-4" />
        </svg>
      );
    case "dedicated":
      return (
        <svg {...common} stroke="url(#cig-ded)">
          {grad("cig-ded")}
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="9" r="2.5" />
          <path d="M2 19c0-3 2.5-5 6-5s6 2 6 5" />
          <path d="M14 19c0-2.2 1.5-4 4-4s4 1.8 4 4" />
        </svg>
      );
    case "multilang":
    default:
      return (
        <svg {...common} stroke="url(#cig-ml)">
          {grad("cig-ml")}
          <path d="M3 5h8" />
          <path d="M7 3v2c0 4-2 6-4 7" />
          <path d="M3 9c0 3 4 5 7 6" />
          <path d="M21 21h-7l4-9 3 9" />
          <path d="M15.5 17h5" />
        </svg>
      );
  }
}

const labelStyle = {
  display: "block",
  fontFamily: "var(--font-inter, Inter)",
  fontWeight: 500,
  fontSize: "13px",
  color: "rgba(255,255,255,0.85)",
  marginBottom: "8px",
} as const;

const inputStyle = {
  boxSizing: "border-box" as const,
  width: "100%",
  height: "44px",
  padding: "0 14px",
  borderRadius: "8px",
  border: "1px solid rgba(125,185,214,0.18)",
  background: "rgba(15,22,38,0.85)",
  color: "#FFFFFF",
  fontFamily: "var(--font-inter, Inter)",
  fontSize: "13px",
  outline: "none",
};

export default function ContactSupportFormSection() {
  return (
    <section
      id="contact-form"
      style={{
        position: "relative",
        background: "#050208",
        width: "1440px",
        maxWidth: "100%",
        margin: "0 auto",
        padding: "100px 0",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "1280px",
          maxWidth: "calc(100% - 160px)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
          gap: "64px",
          alignItems: "flex-start",
        }}
      >
        <LeftPanel />
        <ContactForm />
      </div>
    </section>
  );
}

function LeftPanel() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "32px",
            lineHeight: "40px",
            color: "#FFFFFF",
          }}
        >
          Global Support Availability
        </h2>
        <p
          style={{
            margin: 0,
            maxWidth: "560px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "22px",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          Join a workplace focused on growth, flexibility, ownership, and
          meaningful impact across global fintech and trading markets.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "318.37px 318.37px",
          columnGap: "13.63px",
          rowGap: "14px",
        }}
      >
        {BENEFITS.map((b) => (
          <div
            key={b.title}
            style={{
              width: "318.37px",
              height: "99.56px",
              padding: "0.84px",
              borderRadius: "10.12px",
              background:
                "linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%)",
              boxSizing: "border-box",
            }}
          >
            <article
              style={{
                width: "100%",
                height: "100%",
                padding: "16px 18px",
                borderRadius: "9.28px",
                background:
                  "linear-gradient(157.26deg, #050208 -0.93%, #056FB4 444.35%)",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <span
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(5,111,180,0.18)",
                  border: "1px solid rgba(125,185,214,0.25)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <BenefitIcon icon={b.icon} />
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  minWidth: 0,
                  flex: 1,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#FFFFFF",
                  }}
                >
                  {b.title}
                </div>
                {b.description ? (
                  <div
                    style={{
                      fontFamily: "var(--font-inter, Inter)",
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "18px",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {b.description}
                  </div>
                ) : (
                  <div style={{ display: "flex", gap: "8px" }}>
                    {["English", "Hindi"].map((lng) => (
                      <span
                        key={lng}
                        style={{
                          padding: "4px 12px",
                          borderRadius: "12px",
                          background: "rgba(255,255,255,0.08)",
                          border: "1px solid rgba(125,185,214,0.25)",
                          fontFamily: "var(--font-inter, Inter)",
                          fontWeight: 500,
                          fontSize: "11px",
                          color: "#FFFFFF",
                        }}
                      >
                        {lng}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactForm() {
  const [accepted, setAccepted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [dialIndex, setDialIndex] = useState("0");
  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "submitting" }
    | { kind: "success" }
    | { kind: "error"; message: string }
  >({ kind: "idle" });
  const inputRef = useRef<HTMLInputElement>(null);
  const recaptcha = useRecaptcha();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!accepted || status.kind === "submitting") return;

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    fd.set("formType", "contact");
    fd.set("dialCode", COUNTRY_CODES[Number(dialIndex)].code);
    if (file) fd.set("cv", file);

    setStatus({ kind: "submitting" });
    try {
      if (recaptcha.enabled) {
        const token = await recaptcha.execute("contact_submit");
        if (!token) {
          throw new Error(
            "Couldn't verify you're human — please refresh and try again.",
          );
        }
        fd.set("recaptchaToken", token);
      }

      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Could not send your message.");
      }
      formEl.reset();
      setFile(null);
      setAccepted(false);
      setStatus({ kind: "success" });
    } catch (err) {
      setStatus({
        kind: "error",
        message:
          err instanceof Error ? err.message : "Something went wrong.",
      });
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) setFile(f);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setFile(f);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "32px",
        borderRadius: "20px",
        border: "1px solid rgba(125,185,214,0.2)",
        background:
          "linear-gradient(157.26deg, rgba(10,18,32,0.9) 0%, rgba(5,111,180,0.14) 100%)",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div>
        <label htmlFor="cu-fullName" style={labelStyle}>
          Full Name<span style={{ color: "#FF6B6B" }}>*</span>
        </label>
        <input id="cu-fullName" name="fullName" required style={inputStyle} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
        }}
      >
        <div>
          <label htmlFor="cu-email" style={labelStyle}>
            Email<span style={{ color: "#FF6B6B" }}>*</span>
          </label>
          <input
            id="cu-email"
            name="email"
            type="email"
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="cu-mobile" style={labelStyle}>
            Mobile number
          </label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              ...inputStyle,
              padding: "0 12px",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#FFFFFF",
                fontFamily: "var(--font-inter, Inter)",
                fontSize: "13px",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ pointerEvents: "none" }}>
                {COUNTRY_CODES[Number(dialIndex)].flag}{" "}
                {COUNTRY_CODES[Number(dialIndex)].code}
              </span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                aria-hidden
                style={{ pointerEvents: "none" }}
              >
                <path
                  d="M1 1l4 4 4-4"
                  stroke="#7DB9D6"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <select
                aria-label="Country dial code"
                value={dialIndex}
                onChange={(e) => setDialIndex(e.target.value)}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  cursor: "pointer",
                  border: "none",
                  outline: "none",
                  appearance: "none",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                }}
              >
                {COUNTRY_CODES.map((c, i) => (
                  <option
                    key={`${c.name}-${c.code}-${i}`}
                    value={String(i)}
                    style={{ background: "#0F1626", color: "#FFFFFF" }}
                  >
                    {c.flag} {c.code} {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div
              style={{
                width: "1px",
                height: "20px",
                background: "rgba(125,185,214,0.25)",
              }}
              aria-hidden
            />
            <input
              id="cu-mobile"
              name="mobile"
              type="tel"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                color: "#FFFFFF",
                fontFamily: "var(--font-inter, Inter)",
                fontSize: "13px",
              }}
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="cu-query-type" style={labelStyle}>
          Select your query<span style={{ color: "#FF6B6B" }}>*</span>
        </label>
        <select
          id="cu-query-type"
          name="queryType"
          required
          defaultValue=""
          style={{
            ...inputStyle,
            appearance: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'><path d='M1 1l4 4 4-4' stroke='%237DB9D6' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 14px center",
            paddingRight: "36px",
          }}
        >
          <option value="" disabled style={{ background: "#0F1626" }}>
            Choose a topic
          </option>
          {QUERY_OPTIONS.map((q) => (
            <option key={q} value={q} style={{ background: "#0F1626" }}>
              {q}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cu-message" style={labelStyle}>
          Message/query<span style={{ color: "#FF6B6B" }}>*</span>
        </label>
        <textarea
          id="cu-message"
          name="message"
          rows={4}
          required
          style={{
            ...inputStyle,
            height: "auto",
            padding: "12px 14px",
            resize: "vertical",
            minHeight: "100px",
          }}
        />
      </div>

      <div>
        <label
          style={{
            ...labelStyle,
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <span>
            Upload CV<span style={{ color: "#FF6B6B" }}>*</span>
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.45)",
              fontWeight: 400,
              fontSize: "11px",
            }}
          >
            PDF files only (Max. 4Mb)
          </span>
        </label>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          role="button"
          tabIndex={0}
          style={{
            cursor: "pointer",
            padding: "32px",
            borderRadius: "12px",
            border: `1px dashed ${
              dragOver ? "rgba(125,185,214,0.6)" : "rgba(125,185,214,0.25)"
            }`,
            background: dragOver
              ? "rgba(5,111,180,0.18)"
              : "rgba(15,22,38,0.65)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            color: "rgba(255,255,255,0.6)",
            fontFamily: "var(--font-inter, Inter)",
            fontSize: "13px",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="rgba(125,185,214,0.7)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M11 3v12" />
            <path d="M6 8l5-5 5 5" />
            <path d="M3 19h16" />
          </svg>
          <span>{file ? file.name : "Upload Or Drag File"}</span>
          <input
            ref={inputRef}
            type="file"
            accept="application/pdf"
            hidden
            onChange={handleFileChange}
          />
        </div>
      </div>

      <label
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "10px",
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "18px",
          color: "rgba(255,255,255,0.65)",
        }}
      >
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          style={{
            accentColor: "#056FB4",
            marginTop: "2px",
            flexShrink: 0,
          }}
        />
        <span>
          I have read and accepted the terms and conditions specified in the{" "}
          <a
            href="/privacy"
            style={{ color: "#7DB9D6", textDecoration: "none" }}
          >
            Privacy Policy
          </a>{" "}
          and do here by consent to the collecting, processing and/or
          disclosing of the personal data provided by me to fulfil the
          above-said purposes.
        </span>
      </label>

      <button
        type="submit"
        disabled={!accepted || status.kind === "submitting"}
        className="btn-text"
        style={{
          alignSelf: "flex-start",
          padding: "12px 32px",
          borderRadius: "60px",
          border: "none",
          background:
            "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
          cursor:
            accepted && status.kind !== "submitting"
              ? "pointer"
              : "not-allowed",
          opacity: accepted && status.kind !== "submitting" ? 1 : 0.6,
          fontWeight: 600,
          fontSize: "13px",
          letterSpacing: "0.5px",
          color: "#FFFFFF",
        }}
      >
        {status.kind === "submitting" ? "Sending..." : "MESSAGE US"}
      </button>

      {status.kind === "success" ? (
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-inter, Inter)",
            fontSize: "13px",
            color: "#7DB9D6",
          }}
        >
          Thanks — your message has been sent. Our support team will be in
          touch shortly.
        </p>
      ) : null}
      {status.kind === "error" ? (
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-inter, Inter)",
            fontSize: "13px",
            color: "#FF6B6B",
          }}
        >
          {status.message}
        </p>
      ) : null}

      {recaptcha.enabled ? (
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-inter, Inter)",
            fontSize: "11px",
            lineHeight: "16px",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#7DB9D6", textDecoration: "none" }}
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#7DB9D6", textDecoration: "none" }}
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>
      ) : null}
    </form>
  );
}
