import Image from "next/image";
import Link from "next/link";

export default function RewardsHeroSection() {
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
      {/* Subtle radial glow behind the artwork */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 75% 50%, rgba(5,111,180,0.22) 0%, rgba(0,0,0,0) 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Hero artwork */}
      <Image
        src="/rewards/hero.png"
        alt="Trading rewards illustration"
        width={1029}
        height={599}
        priority
        style={{
          position: "absolute",
          top: "111px",
          left: "391px",
          width: "1029px",
          height: "599px",
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 1,
        }}
      />

      {/* Left copy block */}
      <div
        style={{
          position: "absolute",
          top: "171.4px",
          left: "80px",
          width: "598px",
          height: "441.2px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          zIndex: 2,
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            width: "270.6px",
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
            Trading Rewards Hub
          </span>
        </div>

        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "56px",
            lineHeight: "110%",
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
          }}
        >
          Rewards Built for
          <br />
          Active Traders &amp;
          <br />
          Partners
        </h1>

        <p
          style={{
            margin: 0,
            width: "560px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#94A3B8",
          }}
        >
          Earn more for trading and partnering with Finsai — across promotions,
          loyalty tiers and our global affiliate network.
        </p>

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Link
            href="#promotions"
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
            Explore Rewards
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
              href="/partnerships"
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
              Become an Affiliate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
