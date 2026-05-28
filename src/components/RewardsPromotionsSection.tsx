import Link from "next/link";
import type { ReactNode } from "react";

type PromoCard = {
  title: string;
  description: string;
  icon: ReactNode;
};

const PROMOS: PromoCard[] = [
  {
    title: "Bonuses",
    description:
      "Unlock deposit bonuses, signup credits and seasonal boosts as soon as you fund your account.",
    icon: <PercentIcon />,
  },
  {
    title: "Risk-Free Trial Trades",
    description:
      "Test new strategies with protected positions — we cover the losses on qualifying trades.",
    icon: <ShieldIcon />,
  },
  {
    title: "Special Rewards",
    description:
      "Limited-time campaigns with cashback, free spreads and gear drops for active traders.",
    icon: <GiftIcon />,
  },
];

export default function RewardsPromotionsSection() {
  return (
    <section
      id="promotions"
      style={{
        background: "#050208",
        padding: "80px 0",
      }}
    >
      <div
        style={{
          width: "1280px",
          maxWidth: "calc(100% - 80px)",
          margin: "0 auto",
          padding: "40px",
          borderRadius: "20px",
          border: "1px solid rgba(125,185,214,0.2)",
          background:
            "linear-gradient(157.26deg, rgba(10,18,32,0.85) 0%, rgba(5,111,180,0.18) 100%)",
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "44px",
              color: "#FFFFFF",
            }}
          >
            Promotions
          </h2>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "22px",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Boost every deposit, every trade and every milestone. Browse all
            our live offers and grab the ones that fit your strategy.
          </p>
          <Link
            href="#"
            className="btn-text"
            style={{
              alignSelf: "flex-start",
              boxSizing: "border-box",
              padding: "11px 22px",
              borderRadius: "8px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            View All Promotions
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {PROMOS.map((p) => (
            <article
              key={p.title}
              style={{
                position: "relative",
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid rgba(125,185,214,0.18)",
                background:
                  "linear-gradient(157.26deg, #050208 -0.93%, #056FB4 444.35%)",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                minHeight: "220px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(180deg, rgba(125,185,214,0.18) 0%, rgba(5,111,180,0.08) 100%)",
                  border: "1px solid rgba(125,185,214,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {p.icon}
              </div>
              <h3
                style={{
                  margin: 0,
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "#FFFFFF",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  flex: 1,
                  fontFamily: "var(--font-inter, Inter)",
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "20px",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {p.description}
              </p>
              <Link
                href="#"
                style={{
                  marginTop: "auto",
                  fontFamily: "var(--font-inter, Inter)",
                  fontWeight: 500,
                  fontSize: "13px",
                  color: "#7DB9D6",
                  textDecoration: "none",
                }}
              >
                Learn more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PercentIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <circle cx="6.5" cy="6.5" r="2.5" stroke="#7DB9D6" strokeWidth="1.5" />
      <circle cx="15.5" cy="15.5" r="2.5" stroke="#7DB9D6" strokeWidth="1.5" />
      <path d="M17 5L5 17" stroke="#7DB9D6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M11 2.75 4 5.25v5c0 4.4 2.85 7.3 7 9 4.15-1.7 7-4.6 7-9v-5L11 2.75Z"
        stroke="#7DB9D6"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m7.5 11 2.5 2.5L15 9"
        stroke="#7DB9D6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <rect
        x="3"
        y="8"
        width="16"
        height="11"
        rx="1.5"
        stroke="#7DB9D6"
        strokeWidth="1.5"
      />
      <path d="M3 12h16" stroke="#7DB9D6" strokeWidth="1.5" />
      <path d="M11 8v11" stroke="#7DB9D6" strokeWidth="1.5" />
      <path
        d="M11 8c-2-3-6-2-5 0 .8 1.5 5 0 5 0Zm0 0c2-3 6-2 5 0-.8 1.5-5 0-5 0Z"
        stroke="#7DB9D6"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
