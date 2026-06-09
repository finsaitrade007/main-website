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
  | "growthCtaLabel"
  | "growthCtaHref"
> & { growthStats: StrapiStat[] };

const FALLBACK: Fallback = {
  growthBadge: "Our Principal",
  growthTitle: "Your Trading Journey,\nStructured for Success.",
  growthCtaLabel: "Contact Us",
  growthCtaHref: "/contactus",
  growthStats: [
    { id: 1, value: "50,000+", label: "Traders" },
    { id: 2, value: "20+", label: "Industry Experience" },
    { id: 3, value: "120+", label: "World wide clients" },
    { id: 4, value: "15+", label: "Industry Recognitions" },
  ],
};

const FEATURES: { title: string; description: string }[] = [
  {
    title: "Transparent Trading",
    description: "Clear pricing and straightforward trading conditions.",
  },
  {
    title: "Trader-First Experience",
    description: "Built to make trading simple, smooth, and accessible.",
  },
  {
    title: "Reliable Technology",
    description: "Fast execution with dependable platform performance.",
  },
  {
    title: "Learn & Grow",
    description: "Educational resources to help traders improve continuously.",
  },
];

export default async function AboutFinancialGrowthSection() {
  const data = await getAboutPage();
  const badge = data?.growthBadge ?? FALLBACK.growthBadge;
  const title = data?.growthTitle ?? FALLBACK.growthTitle;
  const ctaLabel = data?.growthCtaLabel ?? FALLBACK.growthCtaLabel;
  const ctaHref = data?.growthCtaHref ?? FALLBACK.growthCtaHref;
  const stats =
    data?.growthStats && data.growthStats.length > 0
      ? data.growthStats
      : FALLBACK.growthStats;

  return (
    <section
      className="page-section"
      style={{
        position: "relative",
        background: "#050208",
        width: "100%",
        maxWidth: "1440px",
        minHeight: "919px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      {/* Left content column */}
      <div
        style={{
          position: "absolute",
          top: "89px",
          left: "80px",
          width: "540px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
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
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#57A1CB",
          }}
        >
          {badge}
        </span>

        <h2
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "52px",
            color: "#FFFFFF",
            whiteSpace: "pre-line",
          }}
        >
          {title}
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "8px",
          }}
        >
          {FEATURES.map((f) => (
            <div
              key={f.title}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 600,
                  fontStyle: "normal",
                  fontSize: "24px",
                  lineHeight: "30px",
                  letterSpacing: 0,
                  color: "#FFFFFF",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-raleway, Raleway)",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "18px",
                  lineHeight: "30px",
                  letterSpacing: 0,
                  color: "#E0E5F3",
                }}
              >
                {f.description}
              </p>
            </div>
          ))}
        </div>

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
            color: "#FFFFFF",
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

      {/* Right illustration */}
      <Image
        src="/about/trading-journey.png"
        alt=""
        width={666}
        height={666}
        style={{
          position: "absolute",
          top: "89px",
          left: "653px",
          width: "666px",
          height: "666px",
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 1,
        }}
      />

      {/* Stats row */}
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
              gap: "6px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 700,
                fontStyle: "normal",
                fontSize: "48px",
                lineHeight: "100%",
                letterSpacing: 0,
                textAlign: "center",
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
                fontStyle: "normal",
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: 0,
                textAlign: "center",
                color: "#E0E5F3",
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
