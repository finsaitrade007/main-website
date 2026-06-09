import Link from "@/components/SmartLink";
import Image from "next/image";
import { getCareersPage, type StrapiCareersPage } from "@/lib/strapi";

const FALLBACK: Pick<
  StrapiCareersPage,
  | "heroBadge"
  | "heroTitle"
  | "heroDescription"
  | "heroPrimaryCtaLabel"
  | "heroPrimaryCtaHref"
  | "heroSecondaryCtaLabel"
  | "heroSecondaryCtaHref"
> = {
  heroBadge: "Careers at Finsai Trade",
  heroTitle: "Build the Future of\nMulti-Asset Trading",
  heroDescription:
    "Join a vibrant global team focused on fintech, trading technology, global markets, and customer growth.",
  heroPrimaryCtaLabel: "View Open Roles →",
  heroPrimaryCtaHref: "#open-roles",
  heroSecondaryCtaLabel: "Join Our Team →",
  heroSecondaryCtaHref: "#apply",
};

export default async function CareersHeroSection() {
  const data = (await getCareersPage()) ?? FALLBACK;
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
      {/* Right-side hero artwork — Finsaix 3D illustration with floating
          trading widgets.  Spec: 1360 × 736 anchored at top:70, left:50. */}
      <Image
        src="/careers/hero.png"
        alt=""
        width={1360}
        height={736}
        priority
        style={{
          position: "absolute",
          top: "70px",
          left: "50px",
          width: "1360px",
          height: "736px",
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
          height: "351.2px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          zIndex: 2,
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            width: "240px",
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
            fontSize: "52px",
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
            href={data.heroSecondaryCtaHref}
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
            {data.heroSecondaryCtaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

