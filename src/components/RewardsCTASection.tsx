import Image from "next/image";
import SmartLink from "@/components/SmartLink";

export default function RewardsCTASection() {
  return (
    <section
      className="rewards-cta metals-regulatory"
      style={{
        background: "#050208",
        width: "100%",
        maxWidth: 1440,
        margin: "0 auto",
        padding: "24px 64px 96px",
        boxSizing: "border-box",
      }}
    >
      <div
        className="rewards-cta-box metals-regulatory-box"
        style={{
          position: "relative",
          width: 1194,
          maxWidth: "100%",
          height: 437,
          margin: "0 auto",
          borderRadius: 30,
          border: "1px solid #056FB4",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <Image
          src="/rewards-page/hero/rewards_v3.jpeg"
          alt=""
          fill
          sizes="(max-width: 1440px) 100vw, 1194px"
          style={{ objectFit: "cover", objectPosition: "center" }}
          aria-hidden
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(5,2,8,0.82) 0%, rgba(5,2,8,0.45) 55%, rgba(5,2,8,0.25) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: "100%",
            padding: "48px 24px",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              margin: "0 0 12px",
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 700,
              fontSize: "clamp(22px, 2.4vw, 32px)",
              color: "#FFFFFF",
            }}
          >
            Get Rewarded for Trading
          </h2>
          <p
            style={{
              margin: "0 0 28px",
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: 15,
              color: "#FFFFFF",
            }}
          >
            Enjoy a range of perks and benefits designed to reward your activity on the
            platform.
          </p>
          <SmartLink
            href="#rewards-ib"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              padding: "12px 28px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "var(--font-inter, Inter)",
              fontSize: 15,
              fontWeight: 600,
            }}
          >
            Explore Rewards
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
