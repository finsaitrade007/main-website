"use client";

import { useRef, useState, type ChangeEvent, type DragEvent, type FormEvent } from "react";

type Benefit = {
  title: string;
  description: string;
};

const BENEFITS: Benefit[] = [
  {
    title: "Collaborate with top talents",
    description:
      "Work shoulder to shoulder with senior traders, engineers and designers shipping global products.",
  },
  {
    title: "Innovate & Make an Impact",
    description:
      "Watch the systems you build move millions of dollars in markets every single day.",
  },
  {
    title: "Growth & Development",
    description:
      "Learning budgets, mentorship and internal mobility so your career grows as fast as you do.",
  },
  {
    title: "Global & Inclusive Culture",
    description:
      "12+ countries, 30+ languages — a team built around the people, not the postcodes.",
  },
];

export default function CareersWorkspaceFormSection() {
  return (
    <section
      id="apply"
      style={{ background: "#050208", padding: "60px 0 100px" }}
    >
      <div
        style={{
          width: "1280px",
          maxWidth: "calc(100% - 80px)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
                maxWidth: "520px",
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            }}
          >
            {BENEFITS.map((b) => (
              <article
                key={b.title}
                style={{
                  padding: "20px",
                  borderRadius: "14px",
                  border: "1px solid rgba(125,185,214,0.18)",
                  background:
                    "linear-gradient(157.26deg, rgba(10,18,32,0.85) 0%, rgba(5,111,180,0.18) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
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
              </article>
            ))}
          </div>

          <TradingDeskArtwork />
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

function ApplicationForm() {
  const [accepted, setAccepted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
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
            <span style={{ fontSize: "14px" }}>🇮🇳 +91</span>
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
          style={{ accentColor: "#056FB4", marginTop: "2px" }}
        />
        I have read and accepted the terms and conditions specified in the{" "}
        <a href="#" style={{ color: "#7DB9D6" }}>
          Privacy Policy
        </a>{" "}
        and currently consent to the collecting, processing and disclosing of
        the personal data provided by me to fulfil the above-said purposes.
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

function TradingDeskArtwork() {
  return (
    <svg
      width="100%"
      height="200"
      viewBox="0 0 540 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="td-grad" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#7DB9D6" />
          <stop offset="1" stopColor="#056FB4" />
        </linearGradient>
        <radialGradient id="td-glow" cx="0.5" cy="0.6" r="0.5">
          <stop stopColor="rgba(5,111,180,0.35)" />
          <stop offset="1" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>

      <ellipse cx="270" cy="170" rx="240" ry="30" fill="url(#td-glow)" />

      {/* Desk monitor row */}
      <g transform="translate(60 30)">
        {[0, 120, 240, 360].map((x) => (
          <g key={x}>
            <rect
              x={x}
              y="0"
              width="100"
              height="80"
              rx="6"
              fill="#0B1726"
              stroke="url(#td-grad)"
              strokeWidth="1.2"
            />
            <path
              d={`M${x + 10} 60 L${x + 30} 40 L${x + 50} 50 L${x + 70} 25 L${x + 90} 35`}
              stroke="url(#td-grad)"
              strokeWidth="1.4"
              fill="none"
              strokeLinecap="round"
            />
            <rect
              x={x + 30}
              y="86"
              width="40"
              height="6"
              rx="2"
              fill="url(#td-grad)"
              opacity="0.5"
            />
          </g>
        ))}
      </g>

      {/* People silhouettes at the desk */}
      <g transform="translate(80 130)">
        {[0, 120, 240, 360].map((x) => (
          <g key={x}>
            <circle cx={x + 50} cy="14" r="10" fill="url(#td-grad)" opacity="0.55" />
            <path
              d={`M${x + 30} 50 a20 20 0 0 1 40 0Z`}
              fill="url(#td-grad)"
              opacity="0.55"
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
