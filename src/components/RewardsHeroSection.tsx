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
        height: 712,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/*
        Figma: the artwork is a filled rectangular panel flush to the right and
        bottom edges of the hero. Previously it sat at 806x529 with
        objectFit:contain — but the source is 2862x2146 (1.33), so a 1.52 box
        letterboxed it with ~50px of dead space on each side, and the panel
        stopped at y=624 inside a 777-tall section, leaving a 153px black band
        underneath. Now sized to the panel and cropped with objectFit:cover.
      */}
      <div
        className="rewards-hero-image-wrap commodities-hero-image-wrap"
        style={{
          position: "absolute",
          top: 142,
          left: 680,
          width: 760,
          height: 570,
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <Image
          src="/rewards-page/hero/rewards_v3.jpeg"
          alt="Rewards for traders and partners with Finsai Trade"
          fill
          sizes="(max-width: 900px) 100vw, 760px"
          className="rewards-hero-image commodities-hero-image"
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      <div
        className="rewards-hero-left commodities-hero-left"
        style={{
          position: "absolute",
          top: 168,
          left: 64,
          width: 660,
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
            borderRadius: 8,
            padding: "10px 20px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "18px",
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
            /* Figma dev spec: Sora / 600 SemiBold / 56px / 110% / -1% */
            maxWidth: 536,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "clamp(34px, 3.9vw, 56px)",
            lineHeight: "110%",
            letterSpacing: "-0.01em",
            color: "#E2E2E3",
          }}
        >
          Rewards for Traders &amp; Partners
        </h1>

        <p
          style={{
            margin: 0,
            maxWidth: 660,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "30px",
            letterSpacing: "0%",
            color: "#FFFFFFBF",
          }}
        >
          Earn through trading milestones, seasonal promotions, and high-converting partnership.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 8 }}>
          <SmartLink
            href="#rewards-ib"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 8,
              padding: "14px 40px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "var(--font-inter, Inter)",
              fontSize: 16,
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
              padding: "14px 40px",
              border: "1px solid rgba(125, 185, 214, 0.55)",
              color: "#C8CDD5",
              textDecoration: "none",
              fontFamily: "var(--font-inter, Inter)",
              fontSize: 16,
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
