"use client";

import Image from "next/image";
import { useRef, useState, type ChangeEvent, type DragEvent, type FormEvent } from "react";

type Benefit = {
  title: string;
  description: string;
  icon: string;
};

const BENEFITS: Benefit[] = [
  {
    title: "Collaborate with top talents",
    description:
      "Deep dive into market dynamics with institutional tools.",
    icon: "/careers/benefit-1.png",
  },
  {
    title: "Innovate & Make an Impact",
    description:
      "Real-time quotes and lightning-fast execution speed.",
    icon: "/careers/benefit-2.png",
  },
  {
    title: "Growth & Development",
    description:
      "Advanced calculators and margin alerts to stay safe.",
    icon: "/careers/benefit-3.png",
  },
  {
    title: "Global & Inclusive Culture",
    description:
      "Backtesting engines to refine your trading edge.",
    icon: "/careers/benefit-4.png",
  },
];

export default function CareersWorkspaceFormSection() {
  return (
    <section
      id="apply"
      style={{
        position: "relative",
        background: "#050208",
        width: "1440px",
        maxWidth: "100%",
        height: "1103px",
        margin: "0 auto",
        padding: "139px 0 100px",
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
          gridTemplateColumns: "664px 1fr",
          gap: "64px",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* Heading + description block — 664 × 139 with a uniform 24px gap
              between the headline and the supporting paragraph. */}
          <div
            style={{
              width: "664px",
              height: "139px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
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
              More than just a work space
            </h2>
            <p
              style={{
                margin: 0,
                width: "664px",
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "22px",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              Finsai Trade is engineered to deliver seamless execution,
              institutional-grade tools and reliable uptime — so you can stay
              in control wherever you trade. Whether you&apos;re a beginner or
              a pro, our platform helps you trade smarter and faster.
            </p>
          </div>

          {/* 2 × 2 benefit grid — each card is 318.37 × 99.56 with a 0.84px
              gradient border (wrapper trick: outer div paints the gradient,
              inner article carries the rounded background). */}
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
                    padding: "20.25px",
                    borderRadius: "9.28px",
                    background:
                      "linear-gradient(157.26deg, #050208 -0.93%, #056FB4 444.35%)",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "13.5px",
                  }}
                >
                  <Image
                    src={b.icon}
                    alt=""
                    width={40}
                    height={40}
                    style={{
                      width: "40px",
                      height: "40px",
                      flexShrink: 0,
                      objectFit: "contain",
                    }}
                  />
                  {/* Text block — 231.02 × 58.37 with a 3.37px gap between
                      title and description, per Figma spec. */}
                  <div
                    style={{
                      width: "231.02px",
                      minWidth: "231.02px",
                      height: "58.37px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "3.37px",
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
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Trading-tools illustration anchored at top:575 / left:107
              relative to the section (the section left is at 0 of the 1440
              hero; the heading block sits at left:80, so the +27px nudges
              the artwork inward by 27px and the +28px margin-top is on top
              of the parent 28px flex gap → benefits end at 519 + 28 + 28 =
              575). */}
          <Image
            src="/careers/desk.png"
            alt=""
            width={613}
            height={409}
            style={{
              width: "613px",
              height: "409px",
              marginTop: "28px",
              marginLeft: "27px",
              objectFit: "contain",
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
        </div>

        <ApplicationForm />
      </div>
    </section>
  );
}

const labelStyle = {
  display: "block",
  fontFamily: "var(--font-inter, Inter)",
  fontWeight: 500,
  fontSize: "13px",
  color: "rgba(255,255,255,0.75)",
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

// ---------------------------------------------------------------------------
// Common dial-code list shown in the mobile-number country selector. Add
// more entries here as the recruiting footprint grows.
// ---------------------------------------------------------------------------
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
  { flag: "🇹🇼", code: "+886", name: "Taiwan" },
  { flag: "🇦🇪", code: "+971", name: "United Arab Emirates" },
  { flag: "🇸🇦", code: "+966", name: "Saudi Arabia" },
  { flag: "🇶🇦", code: "+974", name: "Qatar" },
  { flag: "🇰🇼", code: "+965", name: "Kuwait" },
  { flag: "🇧🇭", code: "+973", name: "Bahrain" },
  { flag: "🇴🇲", code: "+968", name: "Oman" },
  { flag: "🇵🇰", code: "+92", name: "Pakistan" },
  { flag: "🇧🇩", code: "+880", name: "Bangladesh" },
  { flag: "🇱🇰", code: "+94", name: "Sri Lanka" },
  { flag: "🇳🇵", code: "+977", name: "Nepal" },
  { flag: "🇩🇪", code: "+49", name: "Germany" },
  { flag: "🇫🇷", code: "+33", name: "France" },
  { flag: "🇮🇹", code: "+39", name: "Italy" },
  { flag: "🇪🇸", code: "+34", name: "Spain" },
  { flag: "🇳🇱", code: "+31", name: "Netherlands" },
  { flag: "🇨🇭", code: "+41", name: "Switzerland" },
  { flag: "🇸🇪", code: "+46", name: "Sweden" },
  { flag: "🇳🇴", code: "+47", name: "Norway" },
  { flag: "🇩🇰", code: "+45", name: "Denmark" },
  { flag: "🇫🇮", code: "+358", name: "Finland" },
  { flag: "🇵🇱", code: "+48", name: "Poland" },
  { flag: "🇮🇪", code: "+353", name: "Ireland" },
  { flag: "🇹🇷", code: "+90", name: "Turkey" },
  { flag: "🇷🇺", code: "+7", name: "Russia" },
  { flag: "🇧🇷", code: "+55", name: "Brazil" },
  { flag: "🇲🇽", code: "+52", name: "Mexico" },
  { flag: "🇦🇷", code: "+54", name: "Argentina" },
  { flag: "🇨🇱", code: "+56", name: "Chile" },
  { flag: "🇿🇦", code: "+27", name: "South Africa" },
  { flag: "🇳🇬", code: "+234", name: "Nigeria" },
  { flag: "🇰🇪", code: "+254", name: "Kenya" },
  { flag: "🇪🇬", code: "+20", name: "Egypt" },
  { flag: "🇳🇿", code: "+64", name: "New Zealand" },
];

function ApplicationForm() {
  const [accepted, setAccepted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [dialIndex, setDialIndex] = useState("0");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Frontend-only submit stub — wire up to an API route or Strapi later.
    // For now we just no-op so the button is interactive.
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
        <label htmlFor="fullName" style={labelStyle}>Full Name</label>
        <input id="fullName" name="fullName" required style={inputStyle} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
        }}
      >
        <div>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="mobile" style={labelStyle}>Mobile number</label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              ...inputStyle,
              padding: "0 12px",
            }}
          >
            {/* Country dial-code picker — a native <select> is overlaid on
                top of a custom display row.  In the collapsed state we only
                show flag + code; the native dropdown panel still opens with
                the full country names because the browser renders the
                option list from the underlying <select>. */}
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
              id="mobile"
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
        }}
      >
        <div>
          <label htmlFor="linkedin" style={labelStyle}>LinkedIn profile URL</label>
          <input id="linkedin" name="linkedin" type="url" style={inputStyle} />
        </div>
        <div>
          <label htmlFor="position" style={labelStyle}>Applying for position</label>
          <input id="position" name="position" style={inputStyle} />
        </div>
      </div>

      <div>
        <label htmlFor="fit" style={labelStyle}>Why are you a good fit for this role?</label>
        <textarea
          id="fit"
          name="fit"
          rows={4}
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
        <label style={labelStyle}>
          Upload CV
          <span
            style={{
              color: "rgba(255,255,255,0.45)",
              fontWeight: 400,
              marginLeft: "8px",
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
          <a href="#" style={{ color: "#7DB9D6" }}>
            Privacy Policy
          </a>{" "}
          and currently consent to the collecting, processing and disclosing
          of the personal data provided by me to fulfil the above-said
          purposes.
        </span>
      </label>

      <button
        type="submit"
        disabled={!accepted}
        className="btn-text"
        style={{
          height: "48px",
          borderRadius: "8px",
          border: "none",
          background:
            "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
          cursor: accepted ? "pointer" : "not-allowed",
          opacity: accepted ? 1 : 0.6,
          fontWeight: 600,
          fontSize: "13px",
          letterSpacing: "0.5px",
        }}
      >
        MESSAGE US
      </button>
    </form>
  );
}

