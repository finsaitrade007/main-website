import Link from "next/link";
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
  heroSecondaryCtaHref: "/demo",
};

export default async function AccountsHeroSection() {
  const data = (await getAccountsPage()) ?? FALLBACK;
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
      {/* Hero artwork: anchored per spec.  The right edge of the image
          (762 + 744 = 1506) extends ~66px past the 1440 frame and gets
          clipped by the section's overflow: hidden — matching the
          design's intentional bleed off the right edge. */}
      <Image
        src="/accounts/heroaccounts.png"
        alt=""
        width={744}
        height={564}
        style={{
          position: "absolute",
          top: "128px",
          left: "762px",
          width: "744px",
          height: "564px",
          opacity: 1,
          objectFit: "contain",
        }}
        priority
      />

      {/* Headline + sub + CTAs.  Fixed 702-wide block per spec, with
          24px gaps between children. */}
      <div
        style={{
          position: "absolute",
          top: "216.4px",
          left: "80px",
          width: "702px",
          height: "351.2px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "24px",
          zIndex: 3,
        }}
      >
        {/* Wallet pill: 362.6 × 51.2 black badge with a gradient-filled
            label.  Uses inline-flex + 8.4px gap so a leading icon can be
            slotted later without re-jiggling the layout. */}
        <div
          style={{
            boxSizing: "border-box",
            width: "362.6px",
            height: "51.2px",
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
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "56px",
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
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "26px",
            color: "rgba(255,255,255,0.65)",
            maxWidth: "520px",
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
                whiteSpace: "nowrap",
              }}
            >
              {data.heroPrimaryCtaLabel}
            </Link>
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
