import Image from "next/image";
import SmartLink from "@/components/SmartLink";

const REGISTER_HREF = "https://fx.finsaitrade.com/auth/register";

const trustItems = [
  {
    label: (
      <>
        Major Energy
        <br />
        Assets
      </>
    ),
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M10 3.5l1.2 3.6h3.8l-3 2.2 1.1 3.7L10 11.6 6.9 13l1.1-3.7-3-2.2h3.8L10 3.5z" stroke="#41ABE7" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: (
      <>
        Competitive
        <br />
        Spreads
      </>
    ),
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M4 14h12" stroke="#41ABE7" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M6 11V7M10 11V5M14 11V8" stroke="#41ABE7" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: (
      <>
        Lightning-fast
        <br />
        Execution
      </>
    ),
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M11 3L6 11h4l-1 6 5-8h-4l1-6z" stroke="#41ABE7" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function EnergiesHeroSection() {
  return (
    <section
      className="energies-hero commodities-hero"
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
        className="energies-hero-image-wrap commodities-hero-image-wrap"
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
          src="/energies/hero/Trade%20Oil%2C%20Gas%20%26%20Energy_v1.jpeg"
          alt="Trade oil, gas and energy markets with Finsai Trade"
          width={806}
          height={529}
          className="energies-hero-image commodities-hero-image"
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
        className="energies-hero-left commodities-hero-left"
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
          Trade Oil, Gas &amp; Energy
        </h1>

        <p
          style={{
            margin: 0,
            maxWidth: 480,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: 18,
            lineHeight: "31.11px",
            letterSpacing: "0%",
            color: "#FFFFFFBF",
          }}
        >
          Trade Crude Oil, Brent Oil, Natural Gas, and other energy CFDs on Finsai Trade.
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
          className="energies-hero-trust commodities-hero-trust"
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
