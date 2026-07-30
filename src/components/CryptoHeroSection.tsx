import Image from "next/image";
import SmartLink from "@/components/SmartLink";

const REGISTER_HREF = "https://fx.finsaitrade.com/auth/register";

const trustItems = [
  {
    label: (
      <>
        100+ Crypto
        <br />
        Assets
      </>
    ),
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="7.5" stroke="#41ABE7" strokeWidth="1.3" />
        <path d="M7 10h6M10 7v6" stroke="#41ABE7" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: (
      <>
        Round-the-Clock 
        <br />
        Trading
      </>
    ),
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M11 3L6 11h4l-1 6 5-8h-4l1-6z" stroke="#41ABE7" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: (
      <>
        Instant Order 
        <br />
        Execution
      </>
    ),
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M4.5 9a5.5 5.5 0 0111 0v2.5a1.5 1.5 0 01-1.5 1.5h-.5v-4a4.5 4.5 0 10-9 0v4H4A1.5 1.5 0 012.5 11.5V11" stroke="#41ABE7" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M12.5 14.5c0 1.4-1.1 2.5-2.5 2.5" stroke="#41ABE7" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function CryptoHeroSection() {
  return (
    <section
      className="crypto-hero commodities-hero"
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
        className="crypto-hero-image-wrap commodities-hero-image-wrap"
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
          src="/crypto-page/hero/Trade%20Top%20Cryptocurrencies_v1.jpeg"
          alt="Trade top cryptocurrencies with Finsai Trade"
          width={806}
          height={529}
          className="crypto-hero-image commodities-hero-image"
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
        className="crypto-hero-left commodities-hero-left"
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
          Trade Top Cryptocurrencies
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
          Buy and sell Bitcoin, Ethereum, and other popular cryptocurrencies with secure, fast execution.
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
            Start Trading Now
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
            Try Demo Account
          </SmartLink>
        </div>

        <div
          className="crypto-hero-trust commodities-hero-trust"
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
