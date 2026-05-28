import Link from "next/link";
import type { ReactNode } from "react";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: "Multi Asset",
    description:
      "Refer clients trading FX, crypto, indices, metals and stocks — earn on all volumes.",
    icon: <AssetIcon />,
  },
  {
    title: "Personalized Dashboard",
    description:
      "Real-time commission tracking, sub-IB hierarchy and payout history at a glance.",
    icon: <DashboardIcon />,
  },
  {
    title: "Performance Bonus",
    description:
      "Hit monthly volume tiers and unlock booster commissions on top of base CPA.",
    icon: <TrophyIcon />,
  },
  {
    title: "Strategy Support",
    description:
      "Dedicated success manager, co-branded creatives and conversion playbooks included.",
    icon: <SupportIcon />,
  },
];

export default function RewardsIBProgramSection() {
  return (
    <section style={{ background: "#050208", padding: "40px 0 80px" }}>
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
          gridTemplateColumns: "1.05fr 1fr",
          gap: "48px",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 600,
              fontSize: "32px",
              lineHeight: "40px",
              color: "#FFFFFF",
            }}
          >
            IB Program
          </h2>
          <p
            style={{
              margin: 0,
              maxWidth: "440px",
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "22px",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Grow a global trading network with industry-leading payouts, deep
            sub-IB tools and a partner team that&apos;s actually responsive.
          </p>

          <Link
            href="/partnerships"
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

          <div
            style={{
              marginTop: "8px",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            }}
          >
            {FEATURES.map((f) => (
              <div
                key={f.title}
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid rgba(125,185,214,0.18)",
                  background:
                    "linear-gradient(157.26deg, #050208 -0.93%, #056FB4 444.35%)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background:
                      "linear-gradient(180deg, rgba(125,185,214,0.18) 0%, rgba(5,111,180,0.08) 100%)",
                    border: "1px solid rgba(125,185,214,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {f.icon}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#FFFFFF",
                  }}
                >
                  {f.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {f.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side — network diagram + stat tiles */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <NetworkDiagram />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
          >
            <StatTile label="Total IB Partner" value="268" />
            <StatTile label="Total IB Earnings" value="$36,702.35" />
            <StatTile label="Active Network" value="136" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        padding: "14px 16px",
        borderRadius: "12px",
        border: "1px solid rgba(125,185,214,0.18)",
        background:
          "linear-gradient(180deg, rgba(15,21,35,0.85) 0%, rgba(5,111,180,0.08) 100%)",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "11px",
          color: "rgba(255,255,255,0.55)",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 600,
          fontSize: "20px",
          color: "#FFFFFF",
        }}
      >
        {value}
      </span>
    </div>
  );
}

function NetworkDiagram() {
  return (
    <div
      style={{
        position: "relative",
        height: "260px",
        borderRadius: "16px",
        border: "1px solid rgba(125,185,214,0.18)",
        background:
          "radial-gradient(circle at 50% 50%, rgba(5,111,180,0.18) 0%, rgba(0,0,0,0) 60%), #060B14",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 540 260"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="ib-grad" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#7DB9D6" />
            <stop offset="1" stopColor="#056FB4" />
          </linearGradient>
        </defs>

        {/* Connecting lines */}
        <g stroke="rgba(125,185,214,0.4)" strokeWidth="1">
          <line x1="270" y1="130" x2="80" y2="50" />
          <line x1="270" y1="130" x2="80" y2="210" />
          <line x1="270" y1="130" x2="460" y2="50" />
          <line x1="270" y1="130" x2="460" y2="210" />
          <line x1="270" y1="130" x2="540" y2="130" />
          <line x1="270" y1="130" x2="0" y2="130" />
        </g>

        {/* Satellite avatars */}
        {[
          [80, 50],
          [80, 210],
          [460, 50],
          [460, 210],
          [20, 130],
          [520, 130],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="22" fill="#0B1726" stroke="url(#ib-grad)" strokeWidth="1.4" />
            <circle cx={x} cy={y - 6} r="6" fill="url(#ib-grad)" />
            <path
              d={`M${x - 10} ${y + 12} a10 10 0 0 1 20 0`}
              fill="url(#ib-grad)"
            />
          </g>
        ))}

        {/* Central avatar */}
        <circle cx="270" cy="130" r="36" fill="#0B1726" stroke="url(#ib-grad)" strokeWidth="1.6" />
        <circle cx="270" cy="120" r="10" fill="url(#ib-grad)" />
        <path d="M255 145a15 15 0 0 1 30 0" fill="url(#ib-grad)" />
      </svg>
    </div>
  );
}

function AssetIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="6.5" stroke="#7DB9D6" strokeWidth="1.5" />
      <path d="M9 2.5v13M2.5 9h13" stroke="#7DB9D6" strokeWidth="1.5" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="2.5" y="2.5" width="13" height="13" rx="2" stroke="#7DB9D6" strokeWidth="1.5" />
      <path d="M2.5 7h13" stroke="#7DB9D6" strokeWidth="1.5" />
      <path d="M7 7v8.5" stroke="#7DB9D6" strokeWidth="1.5" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M5 2.5h8v3a4 4 0 0 1-8 0v-3Z"
        stroke="#7DB9D6"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 9.5v3" stroke="#7DB9D6" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 15.5h6" stroke="#7DB9D6" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 4h-2v2a2 2 0 0 0 2 2M13 4h2v2a2 2 0 0 1-2 2" stroke="#7DB9D6" strokeWidth="1.5" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="6.5" stroke="#7DB9D6" strokeWidth="1.5" />
      <path
        d="M9 6.5a1.6 1.6 0 0 1 1.4 2.4c-.3.6-1.4.8-1.4 1.6"
        stroke="#7DB9D6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="9" cy="12.5" r="0.7" fill="#7DB9D6" />
    </svg>
  );
}
