import Link from "@/components/SmartLink";
import Image from "next/image";
import { getAccountsPage, type StrapiAccountsPage } from "@/lib/strapi";

const FALLBACK: Pick<
  StrapiAccountsPage,
  | "heroBadge"
  | "heroTitle"
  | "heroDescription"
  | "heroPrimaryCtaLabel"
  | "heroPrimaryCtaHref"
  | "heroSecondaryCtaLabel"
  | "heroSecondaryCtaHref"
> = {
  heroBadge: "Multi-Asset Trading Accounts",
  heroTitle: "Find the Right Account for Your Trading Style",
  heroDescription:
    "From first-time traders to advanced professionals, Finsai Trade offers flexible account types built for every stage of your trading journey.",
  heroPrimaryCtaLabel: "Open Live Account",
  heroPrimaryCtaHref: "https://fx.finsaitrade.com/auth/register",
  heroSecondaryCtaLabel: "Try Free Demo",
  heroSecondaryCtaHref: "https://fx.finsaitrade.com/auth/register",
};

export default async function AccountsHeroSection() {
  const data = (await getAccountsPage()) ?? FALLBACK;
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
        src="/accounts/account-hero.svg"
        alt=""
        width={744}
        height={564}
        className="hero-image"
        style={{
          position: "absolute",
          top: "128px",
          left: "clamp(380px, 52.9vw, 738px)",
          width: "clamp(380px, 51.7vw, 744px)",
          height: "clamp(380px, 45vw, 564px)",
          objectFit: "contain",
        }}
        priority
      />

      <div
        style={{
          position: "absolute",
          top: "clamp(120px, 15vw, 216px)",
          left: "clamp(20px, 5.5vw, 80px)",
          width: "clamp(280px, 48.8vw, 702px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "24px",
          zIndex: 3,
        }}
      >
        <div
          className="accounts-hero-badge"
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
            className="hero-badge-text"
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
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "clamp(28px, 3.9vw, 56px)",
            lineHeight: "110%",
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
            margin: 0,
            whiteSpace: "pre-line",
          }}
        >
          {data.heroTitle}
        </h1>

        <p
          className="hero-desc-text"
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "26px",
            color: "rgba(255,255,255,0.65)",
            maxWidth: "620px",
            margin: 0,
          }}
        >
          {data.heroDescription}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "flex-start",
          }}
        >
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
                whiteSpace: "nowrap",
              }}
            >
              {data.heroPrimaryCtaLabel}
            </Link>
            <Link
              href={data.heroSecondaryCtaHref}
              className="btn-text accounts-hero-demo-btn"
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

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#57A1CB",
              whiteSpace: "nowrap",
            }}
          >
            <span>From $100 Minimum Deposit</span>
            <span>Up to 1:500 Leverage</span>
            <span>MT5 Across All Devices</span>
            <span>No Swap Fee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
