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
        src="/blogs/hero.png"
        alt=""
        width={990}
        height={777}
        style={{
          position: "absolute",
          top: "30px",
          right: 0,
          height: "90%",
          width: "auto",
          objectFit: "cover",
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
          display: "inline-flex",
          alignSelf: "flex-start",
          alignItems: "center",
          gap: "8.4px",
          paddingTop: "9.6px",
          paddingBottom: "9.6px",
          paddingLeft: "16.8px",
          paddingRight: "16.8px",
          borderRadius: "60px",
          border: "1.2px solid #FFFFFF26",
          background: "#000000",
          boxSizing: "border-box",
        }}>
          <span style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "19.2px",
            lineHeight: "31.2px",
            letterSpacing: "-0.01%",
            textTransform: "uppercase",
            background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            whiteSpace: "nowrap",
          }}>
            Trader Knowledge Hub
          </span>
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 700,
          fontSize: "clamp(32px, 4.4vw, 64px)",
          lineHeight: "110%",
          letterSpacing: "-0.01em",
          color: "#FFFFFF",
          margin: 0,
        }}>
          Market Insights & Education
        </h1>

        {/* Description */}
        <p style={{
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "155%",
          color: "rgba(255,255,255,0.7)",
          maxWidth: "590px",
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
