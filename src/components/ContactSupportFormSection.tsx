"use client";

import {
  useState,
  type CSSProperties,
  type FormEvent,
} from "react";
import Image from "next/image";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useRecaptcha } from "@/lib/useRecaptcha";

type IconKey = "quick" | "transparency" | "dedicated" | "multilang";

type Benefit = {
  icon: IconKey;
  title: string;
  description?: string;
};

const BENEFIT_ICONS: IconKey[] = ["quick", "transparency", "dedicated", "multilang"];

const DEFAULT_BENEFITS: Benefit[] = [
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

// Dial-code data, flags, and country names are sourced from
// `react-international-phone`, which ships the full ITU list and stays in
// sync with libphonenumber metadata. Theming is handled via CSS variables on
// the wrapper below (see PHONE_INPUT_THEME) — shared with the careers form.
const PHONE_INPUT_THEME = {
  "--react-international-phone-background-color": "rgba(15,22,38,0.85)",
  "--react-international-phone-text-color": "#FFFFFF",
  "--react-international-phone-border-color": "rgba(125,185,214,0.18)",
  "--react-international-phone-border-radius": "8px",
  "--react-international-phone-font-size": "13px",
  "--react-international-phone-font-family": "var(--font-inter, Inter)",
  "--react-international-phone-height": "44px",
  "--react-international-phone-country-selector-background-color":
    "rgba(15,22,38,0.85)",
  "--react-international-phone-country-selector-background-color-hover":
    "rgba(125,185,214,0.08)",
  "--react-international-phone-country-selector-border-color":
    "rgba(125,185,214,0.18)",
  "--react-international-phone-country-selector-arrow-color": "#7DB9D6",
  "--react-international-phone-dropdown-background-color": "#0F1626",
  "--react-international-phone-dropdown-item-background-color": "#0F1626",
  "--react-international-phone-dropdown-item-background-color-hover":
    "rgba(125,185,214,0.12)",
  "--react-international-phone-dropdown-item-text-color": "#FFFFFF",
  "--react-international-phone-dropdown-item-dial-code-color":
    "rgba(255,255,255,0.6)",
  "--react-international-phone-dropdown-shadow":
    "0 12px 32px rgba(0,0,0,0.45)",
  "--react-international-phone-selected-dropdown-item-background-color":
    "rgba(125,185,214,0.18)",
  width: "100%",
} as CSSProperties;

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

export default function ContactSupportFormSection({
  supportTitle = "Global Support Availability",
  supportDescription = "Join a workplace focused on growth, flexibility, ownership, and meaningful impact across global fintech and trading markets.",
  benefits = DEFAULT_BENEFITS,
  submitLabel = "MESSAGE US",
}: {
  supportTitle?: string;
  supportDescription?: string;
  benefits?: Benefit[];
  submitLabel?: string;
}) {
  return (
    <section
      id="contact-form"
      className="page-section"
      style={{
        position: "relative",
        background: "#050208",
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        paddingBottom: "100px",
        overflow: "hidden",
      }}
    >
      <div
        className="two-col-grid contact-section-grid"
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(20px, 2.5vw, 40px)",
          boxSizing: "border-box",
          gap: "64px",
          alignItems: "flex-start",
        }}
      >
        <LeftPanel
          supportTitle={supportTitle}
          supportDescription={supportDescription}
          benefits={benefits}
        />
        <ContactForm submitLabel={submitLabel} />
      </div>
    </section>
  );
}

function LeftPanel({
  supportTitle,
  supportDescription,
  benefits,
}: {
  supportTitle: string;
  supportDescription: string;
  benefits: Benefit[];
}) {
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
            fontSize: "clamp(20px, 2.2vw, 32px)",
            lineHeight: "1.3",
            color: "#FFFFFF",
          }}
        >
          {supportTitle}
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
          {supportDescription}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))",
          gap: "14px",
        }}
      >
        {benefits.map((b) => (
          <div
            key={b.title}
            style={{
              width: "100%",
              minHeight: "99.56px",
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

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "440px",
          margin: "0 auto",
          aspectRatio: "1 / 1",
          marginTop: "8px",
        }}
      >
        <Image
          src="/contact/globe.png"
          alt="Global support across markets"
          fill
          sizes="(max-width: 768px) 90vw, 650px"
          style={{
            objectFit: "contain",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      </div>
    </div>
  );
}

function ContactForm({ submitLabel }: { submitLabel: string }) {
  const [accepted, setAccepted] = useState(false);
  const [phone, setPhone] = useState("");
  const [dialCode, setDialCode] = useState("91");
  const [status, setStatus] = useState<
    | { kind: "idle" }
    | { kind: "submitting" }
    | { kind: "success" }
    | { kind: "error"; message: string }
  >({ kind: "idle" });
  const recaptcha = useRecaptcha();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!accepted || status.kind === "submitting") return;

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    fd.set("formType", "contact");

    const nationalNumber = phone.replace(/\D/g, "").slice(dialCode.length);
    if (nationalNumber) {
      fd.set("dialCode", `+${dialCode}`);
      fd.set("mobile", nationalNumber);
      fd.set("phone", phone);
    } else {
      fd.delete("dialCode");
      fd.delete("mobile");
      fd.delete("phone");
    }

    setStatus({ kind: "submitting" });
    try {
      if (recaptcha.enabled) {
        try {
          const token = await recaptcha.execute("contact_submit");
          if (token) {
            fd.set("recaptchaToken", token);
          }
        } catch {
          // Captcha unavailable — proceed without token; the server treats
          // captcha as advisory and will still deliver the email.
        }
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
      setAccepted(false);
      setPhone("");
      setDialCode("91");
      setStatus({ kind: "success" });
    } catch (err) {
      setStatus({
        kind: "error",
        message:
          err instanceof Error ? err.message : "Something went wrong.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form-box"
      style={{
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

      <div className="contact-fields-row">
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
          <div className="careers-phone-input" style={PHONE_INPUT_THEME}>
            <PhoneInput
              defaultCountry="in"
              value={phone}
              onChange={(value, meta) => {
                setPhone(value);
                setDialCode(meta.country.dialCode);
              }}
              inputProps={{
                id: "cu-mobile",
                name: "mobile",
                "aria-label": "Mobile number",
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
          I have read and accepted the{" "}
          <a
            href="/terms-conditions"
            style={{ color: "#7DB9D6", textDecoration: "none" }}
          >
            Terms &amp; Conditions
          </a>{" "}
          specified in the{" "}
          <a
            href="/privacy-policy"
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
          padding: "clamp(10px, 0.85vw, 12px) clamp(20px, 2.2vw, 32px)",
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
        {status.kind === "submitting" ? "Sending..." : submitLabel}
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
          This site is protected by reCAPTCHA. Our{" "}
          <a
            href="/privacy-policy"
            style={{ color: "#7DB9D6", textDecoration: "none" }}
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="/terms-conditions"
            style={{ color: "#7DB9D6", textDecoration: "none" }}
          >
            Terms &amp; Conditions
          </a>{" "}
          apply.
        </p>
      ) : null}
    </form>
  );
}
