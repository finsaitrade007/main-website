import Image from "next/image";
import SmartLink from "@/components/SmartLink";

const CARD_BG =
  "linear-gradient(157.26deg, #050208 -0.93%, #056FB4 444.35%) padding-box, linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%) border-box";

const featureCards = [
  {
    title: "Multi-tier Commissions",
    description: "Earn ongoing commissions as your referred traders stay active.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 18h16M6 14h12M8 10h8M10 6h4" stroke="#41ABE7" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Live Dashboard",
    description: "Track referrals, commissions, and performance in real time.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 19V5M4 19h16" stroke="#41ABE7" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 15v-4M12 15V8M16 15v-6" stroke="#41ABE7" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Promo code & Tools",
    description: "Use promo codes and partner tools to grow your network faster.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z"
          stroke="#41ABE7"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 12l1.8 1.8L15 10"
          stroke="#41ABE7"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Strategy Support",
    description: "Get guidance and resources to refine your partner growth strategy.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M14.7 6.3a3 3 0 014 4L10 19l-4 1 1-4 7.7-9.7z"
          stroke="#41ABE7"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function RewardsIBSection() {
  return (
    <section
      id="rewards-ib"
      className="rewards-ib"
      style={{
        position: "relative",
        background: "#050208",
        width: "100%",
        maxWidth: 1440,
        height: 630,
        margin: "0 auto",
        boxSizing: "border-box",
        overflow: "hidden",
        opacity: 1,
      }}
    >
      <div
        className="rewards-ib-copy"
        style={{
          position: "absolute",
          top: 48,
          left: 98,
          width: 657,
          zIndex: 2,
        }}
      >
        <h2
          style={{
            margin: "0 0 14px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 700,
            fontSize: "clamp(24px, 2.6vw, 36px)",
            color: "#FFFFFF",
          }}
        >
          The Introducing Broker Program
        </h2>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.65,
            color: "#94A3B8",
            maxWidth: 540,
          }}
        >
          Turn your audience into income. Join the Finsai IB Program and earn ongoing commissions
          every time a trader you refer starts trading. Our ecosystem provides tools to expand your
          reach and increase earnings.
        </p>
      </div>

      <SmartLink
        href="/partnerships"
        className="rewards-ib-cta"
        style={{
          position: "absolute",
          top: 247,
          left: 98,
          boxSizing: "border-box",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 18,
          width: 277.11,
          height: 56,
          borderRadius: 28.83,
          padding: "14px 33px",
          background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
          color: "#FFFFFF",
          textDecoration: "none",
          fontFamily: "var(--font-inter, Inter)",
          fontSize: 15,
          fontWeight: 600,
          whiteSpace: "nowrap",
          opacity: 1,
          zIndex: 2,
        }}
      >
        View All Promotions
        <span aria-hidden>→</span>
      </SmartLink>

      <div
        className="rewards-ib-grid"
        style={{
          position: "absolute",
          top: 331.31,
          left: 98,
          width: 657,
          height: 219.37,
          display: "grid",
          gridTemplateColumns: "318.37px 318.38px",
          gridTemplateRows: "99.56px 99.56px",
          columnGap: 14,
          rowGap: 14.25,
          opacity: 1,
          zIndex: 2,
        }}
      >
        {featureCards.map((card) => (
          <div
            key={card.title}
            className="rewards-ib-card"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10.12,
              border: "0.84px solid transparent",
              background: CARD_BG,
              backdropFilter: "blur(8.44px)",
              WebkitBackdropFilter: "blur(8.44px)",
              padding: 20.25,
              boxSizing: "border-box",
              display: "flex",
              gap: 13.5,
              alignItems: "flex-start",
              opacity: 1,
            }}
          >
            <div style={{ flexShrink: 0, marginTop: 1 }}>{card.icon}</div>
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  margin: "0 0 4px",
                  fontFamily: "var(--font-inter, Inter)",
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "18px",
                  color: "#FFFFFF",
                }}
              >
                {card.title}
              </div>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-inter, Inter)",
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: "16px",
                  color: "#8D94A0",
                }}
              >
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="rewards-ib-visual"
        style={{
          position: "absolute",
          top: 40,
          right: 40,
          width: 620,
          height: 550,
          zIndex: 1,
        }}
      >
        <Image
          src="/rewards-page/The%20Introducing%20Broker%20Program/ib_v3.jpeg"
          alt=""
          fill
          sizes="620px"
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
}
