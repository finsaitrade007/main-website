import Link from "next/link";
import Image from "next/image";

export default function IBHeroSection() {
  return (
    <section style={{
      position: "relative",
      background: "#050208",
      width: "100%",
      minHeight: "clamp(480px, 54vw, 777px)",
      overflow: "hidden",
    }}>
      {/* Hero image — right side */}
      <Image
        src="/blogs/hero.svg"
        alt=""
        width={1442}
        height={865}
        className="hero-image"
        style={{
          position: "absolute",
          top: "58px",
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
          height: "44px",
          display: "inline-flex",
          alignSelf: "flex-start",
          alignItems: "center",
          justifyContent: "center",
          gap: "8.4px",
          padding: "9.6px 22px",
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
            Trader Knowledge Hub
          </span>
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 600,
          fontSize: "clamp(32px, 4.4vw, 56px)",
          lineHeight: "110%",
          letterSpacing: "-0.01em",
          color: "#FFFFFF",
          margin: 0,
        }}>
          Market Insights & Education
        </h1>

        {/* Description */}
        <p className="hero-desc-text" style={{
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "24px",
          color: "#94A3B8",
          maxWidth: "540px",
          margin: 0,
        }}>
          Sharp market insights, real trading education, and analysis you can actually act on.
        </p>

        {/* CTA */}
        <Link href="/blogs" className="btn-text" style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "flex-start",
          borderRadius: "8px",
          padding: "clamp(9px, 0.8vw, 11px) clamp(16px, 1.7vw, 24px)",
          gap: "16px",
          background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}>
          Explore Insights
        </Link>
      </div>
    </section>
  );
}
