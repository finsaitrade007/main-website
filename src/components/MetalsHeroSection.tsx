import Image from "next/image";
import SmartLink from "@/components/SmartLink";

const REGISTER_HREF = "https://fx.finsaitrade.com/auth/register";

const trustItems = [
  {
    label: (
      <>
        Diverse Metal
        <br />
        Exposure
      </>
    ),
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M6 6l2 3 2-3 2 3 2-3 2 9H4l2-9z" stroke="#41ABE7" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M4 15h12" stroke="#41ABE7" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: (
      <>
        Safe-Haven
        <br />
        Positioning
      </>
    ),
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M10 3l6 2v4c0 4-2.5 6.5-6 8-3.5-1.5-6-4-6-8V5l6-2z" stroke="#41ABE7" strokeWidth="1.3" />
        <path d="M7.5 10l1.7 1.7L12.8 8" stroke="#41ABE7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: (
      <>
        Precious Metal
        <br />
        Pricing
      </>
    ),
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="7.5" stroke="#41ABE7" strokeWidth="1.3" />
        <path d="M10 5.5v9M7.5 7.5L10 5.5l2.5 2M7.5 12.5L10 14.5l2.5-2" stroke="#41ABE7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function MetalsHeroSection() {
  return (
    <section
      className="metals-hero"
      style={{
        position: "relative",
        background: "#000000",
        width: "100%",
        maxWidth: 1440,
        margin: "0 auto",
        height: 720,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div
        className="metals-hero-image-wrap"
        style={{
          position: "absolute",
          top: 147.24,
          left: 748.96,
          width: 806,
          height: 529,
          zIndex: 1,
        }}
      >
        <Image
          src="/spot%20metals/hero/Trade%20Gold%2C%20Silver%20%26%20Platinum_v1.jpeg"
          alt="Trade gold, silver and platinum with Finsai Trade"
          width={806}
          height={529}
          className="metals-hero-image"
          priority
          style={{
            position: "absolute",
            top: -52.24,
            left: -114.96,
            width: 806,
            height: 529,
            objectFit: "contain",
            maxWidth: "none",
          }}
        />
      </div>

      <div
        className="metals-hero-left"
        style={{
          position: "absolute",
          top: 164,
          left: 64,
          width: 560,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          zIndex: 2,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 700,
            fontSize: "clamp(32px, 3.6vw, 48px)",
            lineHeight: 1.15,
            color: "#FFFFFF",
          }}
        >
          Trade Gold, Silver &amp; Platinum
        </h1>

        <p
          style={{
            margin: 0,
            maxWidth: 480,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: 13.8,
            lineHeight: "20.97px",
            color: "#7D7F84",
          }}
        >
          Trade energy, agricultural, and raw material commodities through our global multi-asset broker platform.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <SmartLink
            href={REGISTER_HREF}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 8,
              padding: "12px 24px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "var(--font-inter, Inter)",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            Open Live Account
            <span aria-hidden>→</span>
          </SmartLink>
          <SmartLink
            href={REGISTER_HREF}
            style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: 8,
              padding: "12px 24px",
              border: "1px solid rgba(125, 185, 214, 0.55)",
              color: "#C8CDD5",
              textDecoration: "none",
              fontFamily: "var(--font-inter, Inter)",
              fontSize: 15,
              fontWeight: 500,
              background: "transparent",
            }}
          >
            Try Free Demo
          </SmartLink>
        </div>

        <div
          className="metals-hero-trust"
          style={{
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
            gap: 0,
            marginTop: 12,
            width: 650,
            height: 40,
          }}
        >
          {trustItems.map((item, i) => (
            <div
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                width: 216.67,
                minWidth: 0,
                paddingRight: i < trustItems.length - 1 ? 16 : 0,
                marginRight: i < trustItems.length - 1 ? 16 : 0,
                borderRight:
                  i < trustItems.length - 1
                    ? "1px solid rgba(125, 130, 139, 0.45)"
                    : undefined,
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 300,
                fontSize: 14.91,
                lineHeight: "100%",
                color: "#797E89",
                whiteSpace: "normal",
                flexShrink: 0,
              }}
            >
              {item.icon}
              <span style={{ display: "inline-block" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
