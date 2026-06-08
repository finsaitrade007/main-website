import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { getRewardsPage, type StrapiRewardsPage } from "@/lib/strapi";

type FallbackData = Pick<
  StrapiRewardsPage,
  "ibTitle" | "ibDescription" | "ibCtaLabel" | "ibCtaHref"
>;

const FALLBACK: FallbackData = {
  ibTitle: "IB Program",
  ibDescription:
    "Finsai Trade platforms are engineered to deliver seamless execution, institutional-level tools, and reliable uptime — so you stay in control, wherever you trade. Whether you're a beginner or a pro, our platforms help you trade smarter and faster.",
  ibCtaLabel: "View All Promotions",
  ibCtaHref: "/partnerships",
};

const FEATURE_CARD_BG =
  "linear-gradient(157.26deg, #050208 -0.93%, #056FB4 444.35%) padding-box, linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%) border-box";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
  top: number;
  left: number;
};

function CommissionsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="#56A4E0" strokeWidth="1.6" />
      <path d="M3 11h18" stroke="#56A4E0" strokeWidth="1.6" />
      <path
        d="M8 7V5a4 4 0 0 1 8 0v2"
        stroke="#56A4E0"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 19V11" stroke="#56A4E0" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 19V5" stroke="#56A4E0" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M19 19v-6" stroke="#56A4E0" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 21h18" stroke="#56A4E0" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PromoToolsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z"
        stroke="#56A4E0"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-4"
        stroke="#56A4E0"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 20V7m8 13V4m8 16v-9"
        stroke="#56A4E0"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="4" cy="7" r="1.6" fill="#56A4E0" />
      <circle cx="12" cy="4" r="1.6" fill="#56A4E0" />
      <circle cx="20" cy="11" r="1.6" fill="#56A4E0" />
    </svg>
  );
}

const FEATURES_TOP = 382.31;
const FEATURES_LEFT = 98;
const CARD_W = 318.37;
const CARD_H = 99.56;
const CARD_GAP = 20.25;

const FEATURES: Feature[] = [
  {
    title: "Multi-tier Commissions",
    description: "Deep dive into market dynamics with institutional tools.",
    icon: <CommissionsIcon />,
    top: FEATURES_TOP,
    left: FEATURES_LEFT,
  },
  {
    title: "Live Dashboard",
    description: "Real-time quotes and lightning-fast execution speed.",
    icon: <DashboardIcon />,
    top: FEATURES_TOP,
    left: FEATURES_LEFT + CARD_W + CARD_GAP,
  },
  {
    title: "Promo code & Tools",
    description: "Advanced calculators and margin alerts to stay safe.",
    icon: <PromoToolsIcon />,
    top: FEATURES_TOP + CARD_H + CARD_GAP,
    left: FEATURES_LEFT,
  },
  {
    title: "Strategy Support",
    description: "Backtesting engines to refine your trading edge.",
    icon: <StrategyIcon />,
    top: FEATURES_TOP + CARD_H + CARD_GAP,
    left: FEATURES_LEFT + CARD_W + CARD_GAP,
  },
];

export default async function RewardsIBProgramSection() {
  const data = await getRewardsPage();
  const title = data?.ibTitle ?? FALLBACK.ibTitle;
  const description = data?.ibDescription ?? FALLBACK.ibDescription;
  const ctaLabel = data?.ibCtaLabel ?? FALLBACK.ibCtaLabel;
  const ctaHref = data?.ibCtaHref ?? FALLBACK.ibCtaHref;

  return (
    <section
      className="page-section"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1440px",
        minHeight: "740px",
        margin: "0 auto",
        background: "#050208",
      }}
    >
      {/* Left: title + description */}
      <div
        style={{
          position: "absolute",
          top: "130px",
          left: "104px",
          width: "664px",
          height: "139px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "36px",
            lineHeight: "40px",
            letterSpacing: "0%",
            verticalAlign: "middle",
            color: "#F8FAFC",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: "25px",
            letterSpacing: "0%",
            verticalAlign: "middle",
            color: "#FFFFFFBF",
          }}
        >
          {description}
        </p>
      </div>

      {/* View All Promotions button */}
      <Link
        href={ctaHref}
        className="btn-text"
        style={{
          position: "absolute",
          top: "298px",
          left: "98px",
          width: "277.108px",
          height: "56px",
          paddingTop: "14px",
          paddingBottom: "14px",
          paddingLeft: "33px",
          paddingRight: "33px",
          gap: "18px",
          borderRadius: "28.83px",
          background:
            "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "100%",
          boxSizing: "border-box",
          whiteSpace: "nowrap",
        }}
      >
        <span>{ctaLabel}</span>
        <ArrowRightIcon />
      </Link>

      {/* 2x2 feature cards */}
      {FEATURES.map((f) => (
        <FeatureCard key={f.title} feature={f} />
      ))}

      {/* Right-side image */}
      <div
        style={{
          position: "absolute",
          top: "113px",
          left: "803px",
          width: "558px",
          height: "506px",
        }}
      >
        <Image
          src="/rewards/ib-network.png"
          alt="IB Performance"
          fill
          sizes="558px"
          priority
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div
      style={{
        position: "absolute",
        top: `${feature.top}px`,
        left: `${feature.left}px`,
        width: "318.37px",
        height: "99.56px",
        borderRadius: "10.12px",
        border: "0.84px solid transparent",
        background: FEATURE_CARD_BG,
        backdropFilter: "blur(8.4375px)",
        WebkitBackdropFilter: "blur(8.4375px)",
        padding: "20.25px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "flex-start",
        gap: "13.5px",
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: "32px",
          height: "32px",
          borderRadius: "8px",
          background:
            "linear-gradient(180deg, rgba(125,185,214,0.18) 0%, rgba(5,111,180,0.08) 100%)",
          border: "1px solid rgba(125,185,214,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {feature.icon}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: 0 }}>
        <h3
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#FFFFFF",
          }}
        >
          {feature.title}
        </h3>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 12h14m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
