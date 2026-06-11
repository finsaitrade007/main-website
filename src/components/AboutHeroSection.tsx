import Link from "@/components/SmartLink";
import Image from "next/image";
import { getAboutPage, type StrapiAboutPage } from "@/lib/strapi";

const FALLBACK: Pick<
  StrapiAboutPage,
  | "heroBadge"
  | "heroTitle"
  | "heroDescription"
  | "heroPrimaryCtaLabel"
  | "heroPrimaryCtaHref"
  | "heroSecondaryCtaLabel"
  | "heroSecondaryCtaHref"
> = {
  heroBadge: "About Finsai Trade Ltd",
  heroTitle: "Our Mission, Our Markets, Our Edge",
  heroDescription:
    "Helping traders access multiple asset classes while benefiting from educational resources, loyalty rewards, and partnership opportunities. ",
  heroPrimaryCtaLabel: "Open Live Account",
  heroPrimaryCtaHref: "/accounts",
  heroSecondaryCtaLabel: "Explore Our Services",
  heroSecondaryCtaHref: "/services",
};

export default async function AboutHeroSection() {
  const data = (await getAboutPage()) ?? FALLBACK;

  return (
    <section
      style={{
        position: "relative",
        background: "#050208",
        width: "100%",
        minHeight: "clamp(480px, 54vw, 777px)",
        overflow: "hidden",
      }}
    >
      <Image
        src="/about/hero-bg.png"
        alt=""
        fill
        priority
        sizes="1440px"
        className="hero-image"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(5,2,8,0.85) 0%, rgba(5,2,8,0.55) 35%, rgba(5,2,8,0) 60%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "clamp(100px, 12.6vw, 182px)",
          left: "clamp(20px, 5.5vw, 80px)",
          width: "clamp(280px, 41.5vw, 598px)",
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
            {data.heroBadge}
          </span>
        </div>

        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "clamp(26px, 3.6vw, 52px)",
            lineHeight: "110%",
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
            whiteSpace: "pre-line",
          }}
        >
          {data.heroTitle}
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
          {data.heroDescription}
        </p>

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Link
            href={data.heroPrimaryCtaHref}
            className="btn-text"
            style={{
              gap: "16px",
              borderRadius: "8px",
              padding: "clamp(9px, 0.8vw, 11px) clamp(16px, 1.7vw, 24px)",
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
            {data.heroPrimaryCtaLabel}
          </Link>
          <Link
            href={data.heroSecondaryCtaHref}
            className="btn-text"
            style={{
              gap: "16px",
              borderRadius: "8px",
              padding: "clamp(9px, 0.8vw, 11px) clamp(16px, 1.7vw, 24px)",
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
            {data.heroSecondaryCtaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
