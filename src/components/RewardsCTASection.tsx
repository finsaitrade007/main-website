import Link from "next/link";
import { getRewardsPage, type StrapiRewardsPage } from "@/lib/strapi";

const FALLBACK: Pick<
  StrapiRewardsPage,
  "ctaTitle" | "ctaDescription" | "ctaPrimaryLabel" | "ctaPrimaryHref"
> = {
  ctaTitle: "Trade With the right tools at your side",
  ctaDescription:
    "Unlock cashbacks, exclusive promotions and partner payouts that scale with every trade you make on Finsai.",
  ctaPrimaryLabel: "Open Live Account",
  ctaPrimaryHref: "/register",
};

export default async function RewardsCTASection() {
  const data = (await getRewardsPage()) ?? FALLBACK;
  return (
    <section style={{ background: "#050208", padding: "40px 0 100px" }}>
      <div
        style={{
          width: "1280px",
          maxWidth: "calc(100% - 80px)",
          margin: "0 auto",
          position: "relative",
          padding: "72px 80px",
          borderRadius: "20px",
          border: "1px solid rgba(125,185,214,0.25)",
          background:
            "linear-gradient(137.88deg, rgba(10,18,32,0.85) 1.04%, rgba(5,111,180,0.32) 100%)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "20px",
        }}
      >
        {/* Decorative coin/treasure glyphs on either side */}
        <CoinStack style={{ left: "40px" }} />
        <CoinStack style={{ right: "40px" }} flip />

        <h2
          style={{
            margin: 0,
            maxWidth: "640px",
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "32px",
            lineHeight: "40px",
            color: "#FFFFFF",
            position: "relative",
            zIndex: 1,
          }}
        >
          {data.ctaTitle}
        </h2>

        <p
          style={{
            margin: 0,
            maxWidth: "560px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "22px",
            color: "rgba(255,255,255,0.65)",
            position: "relative",
            zIndex: 1,
          }}
        >
          {data.ctaDescription}
        </p>

        <Link
          href={data.ctaPrimaryHref}
          className="btn-text"
          style={{
            position: "relative",
            zIndex: 1,
            padding: "14px 32px",
            borderRadius: "8px",
            background:
              "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 500,
            marginTop: "8px",
          }}
        >
          {data.ctaPrimaryLabel}
        </Link>
      </div>
    </section>
  );
}

function CoinStack({
  style,
  flip = false,
}: {
  style?: React.CSSProperties;
  flip?: boolean;
}) {
  return (
    <svg
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
      style={{
        position: "absolute",
        top: "50%",
        transform: `translateY(-50%) ${flip ? "scaleX(-1)" : ""}`,
        opacity: 0.85,
        pointerEvents: "none",
        ...style,
      }}
      aria-hidden
    >
      <defs>
        <linearGradient id={`cs-grad-${flip ? "r" : "l"}`} x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#7DB9D6" />
          <stop offset="1" stopColor="#056FB4" />
        </linearGradient>
      </defs>
      {/* Coin stack */}
      <g transform="translate(40 80)">
        <ellipse cx="40" cy="58" rx="40" ry="10" fill="#0B1726" stroke={`url(#cs-grad-${flip ? "r" : "l"})`} strokeWidth="1.2" />
        <ellipse cx="40" cy="46" rx="40" ry="10" fill="#0B1726" stroke={`url(#cs-grad-${flip ? "r" : "l"})`} strokeWidth="1.2" />
        <ellipse cx="40" cy="34" rx="40" ry="10" fill="#0B1726" stroke={`url(#cs-grad-${flip ? "r" : "l"})`} strokeWidth="1.2" />
        <ellipse cx="40" cy="22" rx="40" ry="10" fill="#0B1726" stroke={`url(#cs-grad-${flip ? "r" : "l"})`} strokeWidth="1.2" />
        <text
          x="40"
          y="28"
          textAnchor="middle"
          fontFamily="Inter"
          fontSize="14"
          fontWeight="700"
          fill={`url(#cs-grad-${flip ? "r" : "l"})`}
        >
          $
        </text>
      </g>
      {/* Treasure cube */}
      <g transform="translate(20 10)">
        <rect
          x="0"
          y="0"
          width="60"
          height="50"
          rx="8"
          fill="#0B1726"
          stroke={`url(#cs-grad-${flip ? "r" : "l"})`}
          strokeWidth="1.2"
        />
        <path
          d="M0 18h60"
          stroke={`url(#cs-grad-${flip ? "r" : "l"})`}
          strokeWidth="1.2"
        />
        <circle
          cx="30"
          cy="18"
          r="3"
          fill={`url(#cs-grad-${flip ? "r" : "l"})`}
        />
      </g>
    </svg>
  );
}
