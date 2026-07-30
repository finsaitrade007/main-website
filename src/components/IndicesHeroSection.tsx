import Image from "next/image";
import SmartLink from "@/components/SmartLink";

const REGISTER_HREF = "https://fx.finsaitrade.com/auth/register";

const trustItems = [
  {
    label: (
      <>
        Diversified
        <br />
        Company Basket
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
        Flexible Leverage 
        <br />
        Options
      </>
    ),
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="7.5" stroke="#41ABE7" strokeWidth="1.3" />
        <path d="M10 10L14 7" stroke="#41ABE7" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: (
      <>
        Tight Spreads
        <br />
        Lowest Commission
      </>
    ),
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M10 3.5l1.2 3.6h3.8l-3 2.2 1.1 3.7L10 11.6 6.9 13l1.1-3.7-3-2.2h3.8L10 3.5z" stroke="#41ABE7" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function IndicesHeroSection() {
  return (
    <section
      className="indices-hero commodities-hero"
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
        className="indices-hero-image-wrap commodities-hero-image-wrap"
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
          src="/indices/hero/Trade%20Major%20Global%20Indices_v2.jpeg"
          alt="Trade major global indices with Finsai Trade"
          width={806}
          height={529}
          className="indices-hero-image commodities-hero-image"
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
        className="indices-hero-left commodities-hero-left"
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
          Trade Major Global Indices
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
          Take positions on the S&P 500, NASDAQ, FTSE 100, DAX, and more from one trading account.
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
            Open an Account
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
          className="indices-hero-trust commodities-hero-trust"
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
