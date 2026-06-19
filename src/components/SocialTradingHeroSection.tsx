import SmartLink from "@/components/SmartLink";
import Image from "next/image";

const STATS = [
  { value: "10,000+", label: "Active Investors" },
  { value: "150+",    label: "Strategy Providers" },
  { value: "$2.4M+",  label: "Volume Copied" },
];

export default async function SocialTradingHeroSection() {
  return (
    <section style={{
      position: "relative",
      background: "#050208",
      width: "100%",
      minHeight: "clamp(480px, 54vw, 800px)",
      overflow: "hidden",
    }}>
      {/* Hero image */}
      <Image
        src="/social-trading/hero.png"
        alt=""
        width={941}
        height={530}
        className="hero-image"
        style={{
          position: "absolute",
          top: "clamp(100px, 12vw, 175px)",
          right: 0,
          width: "clamp(280px, 65vw, 941px)",
          height: "auto",
        }}
        priority
      />

      {/* Content */}
      <div style={{
        position: "absolute",
        top: "clamp(120px, 13.9vw, 200px)",
        left: "clamp(20px, 5.5vw, 80px)",
        width: "clamp(280px, 45.8vw, 660px)",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        zIndex: 3,
      }}>
        {/* Badge */}
        <div style={{
          boxSizing: "border-box",
          display: "inline-flex",
          alignSelf: "flex-start",
          alignItems: "center",
          gap: "8px",
          padding: "8px 20px",
          borderRadius: "60px",
          border: "1.2px solid #FFFFFF26",
          background: "#000000",
          whiteSpace: "nowrap",
        }}>
          <span className="hero-badge-text" style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "24px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Social Trading · Now Live
          </span>
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 600,
          fontSize: "clamp(28px, 4.4vw, 56px)",
          lineHeight: "112%",
          letterSpacing: "-0.01em",
          color: "#FFFFFF",
          margin: 0,
        }}>
          Copy, Trade, or Earn{" "}
          <br />
          with{" "}
          <span style={{
            background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Social Trading
          </span>
        </h1>

        {/* Description */}
        <p className="hero-desc-text" style={{
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "clamp(13px, 1.04vw, 15px)",
          lineHeight: "24px",
          color: "#94A3B8",
          maxWidth: "540px",
          margin: 0,
        }}>
          Follow experienced traders or become a strategy provider. Copy traders
          live, share your strategy, and earn rewards.
        </p>

        {/* CTAs */}
        <div className="social-trading-hero-ctas" style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
          <SmartLink
            href="https://social.finsaitrade.com/portal/registration/subscription?redirectUrl=%2F"
            className="btn-text"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              padding: "clamp(9px, 0.8vw, 11px) clamp(16px, 1.7vw, 28px)",
              background: "linear-gradient(90deg, #496DAB 0%, #496DAB 50%, #41ABE7 75%, #48C3F4 100%)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Become a Follower
          </SmartLink>
          <SmartLink
            href="https://social.finsaitrade.com/portal/registration/provider?redirectUrl=%2F"
            className="btn-secondary btn-text social-trading-hero-provider-btn"
          >
            Become a Provider
          </SmartLink>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 0", marginTop: "8px" }}>
          {STATS.map((stat, i) => (
            <div key={stat.value} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && (
                <span aria-hidden style={{
                  display: "inline-block",
                  margin: "0 10px",
                  color: "rgba(255,255,255,0.2)",
                  fontSize: "14px",
                  lineHeight: 1,
                  userSelect: "none",
                }}>|</span>
              )}
              <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline", gap: "5px" }}>
                <span style={{
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1.39vw, 20px)",
                  lineHeight: "155%",
                  color: "#E0E0E0",
                  whiteSpace: "nowrap",
                }}>
                  {stat.value}
                </span>
                <span style={{
                  fontFamily: "var(--font-inter, Inter)",
                  fontWeight: 400,
                  fontSize: "clamp(12px, 1.11vw, 16px)",
                  lineHeight: "155%",
                  color: "#E0E0E0",
                  whiteSpace: "nowrap",
                }}>
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
