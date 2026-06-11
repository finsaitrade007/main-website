import Image from "next/image";
import Link from "@/components/SmartLink";
import { getRewardsPage, type StrapiRewardsPage } from "@/lib/strapi";

const FALLBACK: Pick<
  StrapiRewardsPage,
  | "heroBadge"
  | "heroTitle"
  | "heroDescription"
  | "heroPrimaryCtaLabel"
  | "heroPrimaryCtaHref"
  | "heroSecondaryCtaLabel"
  | "heroSecondaryCtaHref"
> = {
  heroBadge: "Trading Rewards Hub",
  heroTitle: "Rewards Built for\nActive Traders &\nPartners",
  heroDescription:
    "Earn more for trading and partnering with Finsai — across promotions, loyalty tiers and our global affiliate network.",
  heroPrimaryCtaLabel: "Explore Rewards",
  heroPrimaryCtaHref: "#promotions",
  heroSecondaryCtaLabel: "Become an Affiliate",
  heroSecondaryCtaHref: "/partnerships",
};

export default async function RewardsHeroSection() {
  const data = (await getRewardsPage()) ?? FALLBACK;
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
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 75% 50%, rgba(5,111,180,0.22) 0%, rgba(0,0,0,0) 60%)",
          pointerEvents: "none",
        }}
      />

      <Image
        src="/rewards/hero.png"
        alt="Trading rewards illustration"
        width={1029}
        height={599}
        priority
        style={{
          position: "absolute",
          top: "111px",
          left: "clamp(200px, 27.2vw, 391px)",
          width: "clamp(480px, 71.5vw, 1029px)",
          height: "auto",
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "clamp(120px, 11.9vw, 171px)",
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
              fontSize: "19.2px",
              lineHeight: "31.2px",
              letterSpacing: 0,
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
            fontSize: "clamp(28px, 3.9vw, 56px)",
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
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "16px",
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
            {data.heroPrimaryCtaLabel}
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
              href={data.heroSecondaryCtaHref}
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
              {data.heroSecondaryCtaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
