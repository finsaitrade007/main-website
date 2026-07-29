import Image from "next/image";
import { MT5_DOWNLOADS } from "@/lib/mt5";

const PLATFORM_LABELS = {
  windows: "Windows",
  mac: "Mac",
  linux: "Linux",
} as const;

function WindowsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 5.5l7.5-1.05V11H3V5.5zm8.5-1.2L21 3v8H11.5V4.3zM3 12.5h7.5V19.6L3 18.5v-6zm8.5 0H21V21l-9.5-1.35V12.5z" />
    </svg>
  );
}

function MacIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function LinuxIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.5 2c-.8 0-1.5.5-1.8 1.2-.4.9-.2 1.8.3 2.7.3.5.4 1 .3 1.6-.1.5-.4.9-.8 1.1-.9.5-1.5 1.4-1.5 2.5 0 .4.1.8.2 1.1-.7.4-1.2 1.1-1.2 2 0 .7.3 1.3.9 1.7-.2.5-.3 1-.3 1.6 0 1.7 1.1 3.1 2.7 3.6.2.9.9 1.6 1.8 1.8.4.1.8.1 1.1 0 .9-.2 1.6-.9 1.8-1.8 1.6-.5 2.7-1.9 2.7-3.6 0-.6-.1-1.1-.3-1.6.6-.4.9-1 .9-1.7 0-.9-.5-1.6-1.2-2 .1-.3.2-.7.2-1.1 0-1.1-.6-2-1.5-2.5-.4-.2-.7-.6-.8-1.1-.1-.6 0-1.1.3-1.6.5-.9.7-1.8.3-2.7C14 2.5 13.3 2 12.5 2z" />
    </svg>
  );
}

const PLATFORM_ICONS = {
  windows: <WindowsIcon />,
  mac: <MacIcon />,
  linux: <LinuxIcon />,
};

/** Figma title top was 144.64 — shifted down 50px. */
const LEFT_TOP = 144.64 + 50;

/**
 * Figma: 1440×720, background #000000
 */
export default function Mt5HeroSection() {
  return (
    <section
      className="mt5-hero"
      style={{
        position: "relative",
        background: "#000000",
        width: "100%",
        maxWidth: 1440,
        margin: "0 auto",
        minHeight: "clamp(480px, 50vw, 720px)",
        height: 720,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Image
        src="/mt5-assets/hero.jpeg"
        alt="MetaTrader 5 multi-asset trading visualization"
        width={770}
        height={571}
        className="mt5-hero-image"
        priority
        style={{
          position: "absolute",
          top: 95.88,
          left: 600.96,
          width: 880,
          height: 631,
          objectFit: "contain",
          zIndex: 1,
        }}
      />

      {/* Entire left column (title + desc + CTAs) — one offset control */}
      <div
        className="mt5-hero-left"
        style={{
          position: "absolute",
          top: LEFT_TOP,
          left: 64,
          width: 630,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          zIndex: 2,
        }}
      >
        <h1
          className="mt5-hero-title"
          style={{
            margin: 0,
            width: 630,
            minHeight: 112,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 700,
            top: 144.64,
            fontStyle: "normal",
            fontSize: 46.27,
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#E2E2E3",
          }}
        >
          Trade Global Markets with MetaTrader 5 (MT5)
        </h1>

        <p
          className="mt5-hero-desc"
          style={{
            margin: 0,
            maxWidth: 447,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: 13.8,
            lineHeight: "20.97px",
            letterSpacing: "0%",
            color: "#7D7F84",
          }}
        >
          Trade Forex, Stocks, Indices, Commodities, and Metals on the powerful
          MetaTrader 5 (MT5) trading platform.
        </p>

        <div
          className="mt5-hero-ctas"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          {MT5_DOWNLOADS.map((item) => (
            <a
              key={item.platform}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                boxSizing: "border-box",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 10,
                width: 179,
                height: 55,
                paddingLeft: 14,
                paddingRight: 12,
                borderRadius: 4.87,
                border: "0.81px solid #0164BC",
                background: "#000000",
                color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  width: 32,
                  height: 32,
                }}
              >
                {PLATFORM_ICONS[item.platform]}
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 2,
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 300,
                    fontSize: 13.61,
                    lineHeight: "100%",
                    color: "#FFFFFF",
                  }}
                >
                  Download for
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 500,
                    fontSize: 14.61,
                    lineHeight: "100%",
                    color: "#FFFFFF",
                  }}
                >
                  {PLATFORM_LABELS[item.platform]}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
