import Link from "next/link";
import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "#050208",
        width: "1440px",
        maxWidth: "100%",
        height: "777px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      {/* Soft glow behind the globe */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 75% 40%, rgba(5,111,180,0.22) 0%, rgba(0,0,0,0) 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Right artwork — illuminated dot world map.  Spec: 917 × 516
          anchored at top:178, left:584. */}
      <Image
        src="/about/hero-map.png"
        alt=""
        width={917}
        height={516}
        priority
        style={{
          position: "absolute",
          top: "178px",
          left: "584px",
          width: "917px",
          height: "516px",
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Left copy block — 598 × 413.2 anchored at top:182, left:80 with a
          uniform 24px gap between children (pill → headline → description →
          CTA row). */}
      <div
        style={{
          position: "absolute",
          top: "182px",
          left: "80px",
          width: "598px",
          height: "413.2px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          zIndex: 2,
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            width: "260px",
            height: "44px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8.4px",
            padding: "9.6px 16.8px",
            borderRadius: "60px",
            border: "1.2px solid #FFFFFF26",
            background: "#000000",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              backgroundImage:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            About Finsai Trade Ltd
          </span>
        </div>

        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "52px",
            lineHeight: "110%",
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
          }}
        >
          Making Global
          <br />
          Trading Accessible
          <br />
          and Rewarding
        </h1>

        <p
          style={{
            margin: 0,
            maxWidth: "560px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "26px",
            color: "#94A3B8",
          }}
        >
          Helping traders access multiple asset classes while benefiting from 
          educational resources, loyalty rewards, and partnership opportunities.
        </p>

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Link
            href="/register"
            className="btn-text"
            style={{
              boxSizing: "border-box",
              height: "48px",
              padding: "11px 24px",
              borderRadius: "8px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
            }}
          >
            Open Live Account
          </Link>
          <div
            style={{
              boxSizing: "border-box",
              height: "48px",
              padding: "1px",
              borderRadius: "8px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            }}
          >
            <Link
              href="/services"
              style={{
                boxSizing: "border-box",
                height: "100%",
                padding: "10px 23px",
                borderRadius: "7px",
                background: "#050208",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 500,
                fontSize: "14px",
                color: "#FFFFFF",
              }}
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

