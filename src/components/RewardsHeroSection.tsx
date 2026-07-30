import Image from "next/image";
import SmartLink from "@/components/SmartLink";

const PARTNERSHIPS_HREF = "/partnerships";

export default function RewardsHeroSection() {
  return (
    <section
      className="rewards-hero commodities-hero"
      style={{
        position: "relative",
        background: "#050208",
        width: "100%",
        maxWidth: 1440,
        margin: "0 auto",
        height: 777,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div
        className="rewards-hero-image-wrap commodities-hero-image-wrap"
        style={{
          position: "absolute",
          top: 147.24,
          left: 748.96,
          width: 806,
          height: 529,
          zIndex: 1,
        }}
      >
        <Image
          src="/rewards-page/hero/rewards_v3.jpeg"
          alt="Rewards for traders and partners with Finsai Trade"
          width={806}
          height={529}
          className="rewards-hero-image commodities-hero-image"
          priority
          style={{
            position: "absolute",
            top: -52.24,
            left: -114.96,
            width: 806,
            height: 529,
            objectFit: "contain",
            maxWidth: "none",
          }}
        />
      </div>

      <div
        className="rewards-hero-image-fade"
        aria-hidden
        style={{
          position: "absolute",
          top: 678,
          left: 612,
          width: 828,
          height: 90,
          background: "#050208",
          backdropFilter: "blur(54px)",
          WebkitBackdropFilter: "blur(54px)",
          opacity: 1,
          pointerEvents: "none",
          zIndex: 3,
        }}
      />

      <div
        className="rewards-hero-left commodities-hero-left"
        style={{
          position: "absolute",
          top: 164,
          left: 64,
          width: 560,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            alignSelf: "flex-start",
            border: "1px solid rgba(5, 111, 180, 0.55)",
            borderRadius: 6,
            padding: "6px 12px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 500,
            fontSize: 12,
            letterSpacing: "0.06em",
            color: "#7DB9D6",
            textTransform: "uppercase",
          }}
        >
          Trading Rewards Hub
        </div>

        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 700,
            fontSize: "clamp(32px, 3.6vw, 48px)",
            lineHeight: 1.15,
            color: "#FFFFFF",
          }}
        >
          Rewards for Traders &amp; Partners
        </h1>

        <p
          style={{
            margin: 0,
            maxWidth: 480,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: 18,
            lineHeight: "31.11px",
            letterSpacing: "0%",
            color: "#FFFFFFBF",
          }}
        >
          Earn through trading milestones, seasonal promotions, and high-converting partnership.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <SmartLink
            href="#rewards-ib"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 8,
              padding: "12px 24px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "var(--font-inter, Inter)",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            Explore Promotions
          </SmartLink>
          <SmartLink
            href={PARTNERSHIPS_HREF}
            style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: 8,
              padding: "12px 24px",
              border: "1px solid rgba(125, 185, 214, 0.55)",
              color: "#C8CDD5",
              textDecoration: "none",
              fontFamily: "var(--font-inter, Inter)",
              fontSize: 15,
              fontWeight: 500,
              background: "transparent",
            }}
          >
            Join As IB Partner
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
