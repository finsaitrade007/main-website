import Link from "next/link";
import Image from "next/image";

const HERO = {
  badge: "CAREERS AT FINSAI TRADE",
  title: "We Are  Here to help\nyou",
  description:
    "Join a vibrant global team focused on fintech, trading technology, global markets, and customer growth.",
  primaryCtaLabel: "View Open Roles",
  primaryCtaHref: "#open-roles",
  secondaryCtaLabel: "Join Our Team  →",
  secondaryCtaHref: "#contact-form",
};

export default function ContactUsHeroSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "#050208",
        width: "1440px",
        maxWidth: "100%",
        height: "806px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <Image
        src="/contact/hero.png"
        alt=""
        width={744}
        height={744}
        priority
        style={{
          position: "absolute",
          top: "31px",
          left: "650px",
          width: "744px",
          height: "744px",
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
          opacity: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "213px",
          left: "80px",
          width: "598px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          zIndex: 2,
        }}
      >
        <div
          style={{
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
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "15px",
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
            {HERO.badge}
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
            whiteSpace: "pre-line",
          }}
        >
          {HERO.title}
        </h1>

        <p
          style={{
            margin: 0,
            maxWidth: "540px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "24px",
            color: "#94A3B8",
          }}
        >
          {HERO.description}
        </p>

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Link
            href={HERO.primaryCtaHref}
            className="btn-text"
            style={{
              boxSizing: "border-box",
              width: "233px",
              height: "48px",
              gap: "16px",
              borderRadius: "8px",
              paddingTop: "11px",
              paddingRight: "24px",
              paddingBottom: "11px",
              paddingLeft: "24px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              color: "#FFFFFF",
              whiteSpace: "nowrap",
            }}
          >
            {HERO.primaryCtaLabel}
          </Link>
          <Link
            href={HERO.secondaryCtaHref}
            className="btn-text"
            style={{
              boxSizing: "border-box",
              width: "233px",
              height: "48px",
              gap: "16px",
              borderRadius: "8px",
              paddingTop: "11px",
              paddingRight: "24px",
              paddingBottom: "11px",
              paddingLeft: "24px",
              border: "1px solid transparent",
              background:
                "linear-gradient(#050208, #050208) padding-box, linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%) border-box",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              color: "#FFFFFF",
              whiteSpace: "nowrap",
            }}
          >
            {HERO.secondaryCtaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
