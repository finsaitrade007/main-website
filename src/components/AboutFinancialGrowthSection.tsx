import Image from "next/image";
import Link from "next/link";
import {
  getAboutPage,
  type StrapiAboutPage,
  type StrapiStat,
} from "@/lib/strapi";

type Fallback = Pick<
  StrapiAboutPage,
  | "growthBadge"
  | "growthTitle"
  | "growthDescription1"
  | "growthDescription2"
  | "growthCtaLabel"
  | "growthCtaHref"
> & { growthStats: StrapiStat[] };

const FALLBACK: Fallback = {
  growthBadge: "Our Principal",
  growthTitle: "We drive financial growth\nin the digital era.",
  growthDescription1:
    "By providing an integrated ecosystem that combines simplicity, innovation, and security, we aim to empower people to take charge of their financial future. Our goal is to create a financial environment where people can trade, invest, and bank with confidence by bridging the gap between conventional finance and technological breakthroughs.",
  growthDescription2:
    "By providing an integrated ecosystem that combines simplicity, innovation, and security, we aim to empower people to take charge of their financial future. Our goal is to create a financial environment where people can trade, invest, and bank with confidence by bridging the gap between conventional finance and technological breakthroughs.",
  growthCtaLabel: "Contact Us",
  growthCtaHref: "/contact",
  growthStats: [
    { id: 1, value: "4.8k", label: "Traders" },
    { id: 2, value: "12+", label: "Industry Experience" },
    { id: 3, value: "2.5k+", label: "World wide clients" },
    { id: 4, value: "120+", label: "Won Awards" },
  ],
};

type Tile = {
  width: number;
  height: number;
  top: number;
  left: number;
  rotate: number;
};

const TILES: Tile[] = [
  { width: 264.11, height: 264.11, top: 142, left: 743, rotate: 0 },
  { width: 253, height: 253, top: 173, left: 1034, rotate: 180 },
  { width: 220.09, height: 220.09, top: 432.53, left: 787.02, rotate: 90 },
  { width: 264.11, height: 264.11, top: 448.37, left: 1033.52, rotate: -180 },
];

function roundedCornerFor(rotate: number): React.CSSProperties {
  if (rotate === 0) return { borderTopLeftRadius: "50px" };
  if (rotate === 180) return { borderTopRightRadius: "50px" };
  if (rotate === 90) return { borderBottomLeftRadius: "50px" };
  if (rotate === -180) return { borderBottomRightRadius: "50px" };
  return { borderTopLeftRadius: "50px" };
}

export default async function AboutFinancialGrowthSection() {
  const data = await getAboutPage();
  const badge = data?.growthBadge ?? FALLBACK.growthBadge;
  const title = data?.growthTitle ?? FALLBACK.growthTitle;
  const description1 = data?.growthDescription1 ?? FALLBACK.growthDescription1;
  const description2 = data?.growthDescription2 ?? FALLBACK.growthDescription2;
  const ctaLabel = data?.growthCtaLabel ?? FALLBACK.growthCtaLabel;
  const ctaHref = data?.growthCtaHref ?? FALLBACK.growthCtaHref;
  const stats =
    data?.growthStats && data.growthStats.length > 0
      ? data.growthStats
      : FALLBACK.growthStats;

  return (
    <section
      style={{
        position: "relative",
        background: "#050208",
        width: "1440px",
        maxWidth: "100%",
        height: "919px",
        margin: "0 auto",
        padding: "80px 0",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "80px",
          width: "560px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          zIndex: 2,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            alignItems: "center",
            padding: "8px 18px",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "60px",
          }}
        >
          <span className="badge-text">{badge}</span>
        </span>

        <h2
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: "44px",
            color: "#FFFFFF",
            whiteSpace: "pre-line",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            margin: 0,
            maxWidth: "520px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "22px",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          {description1}
        </p>
        <p
          style={{
            margin: 0,
            maxWidth: "520px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "22px",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          {description2}
        </p>

        <Link
          href={ctaHref}
          className="btn-text"
          style={{
            alignSelf: "flex-start",
            marginTop: "12px",
            padding: "11px 22px",
            borderRadius: "60px",
            background:
              "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          {ctaLabel}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path
              d="M2.5 7h9M7.5 2.5l4.5 4.5-4.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {TILES.map((t, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${t.top}px`,
            left: `${t.left}px`,
            width: `${t.width}px`,
            height: `${t.height}px`,
            overflow: "hidden",
            zIndex: 1,
            ...roundedCornerFor(t.rotate),
          }}
        >
          <Image
            src="/about/growth-tile.png"
            alt=""
            fill
            sizes="265px"
            style={{
              objectFit: "cover",
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
        </div>
      ))}

      <div
        style={{
          position: "absolute",
          left: "80px",
          right: "80px",
          bottom: "80px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          zIndex: 2,
        }}
      >
        {stats.map((s) => (
          <div
            key={s.id ?? s.label}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "44px",
                backgroundImage:
                  "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              {s.value}
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontSize: "13px",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
