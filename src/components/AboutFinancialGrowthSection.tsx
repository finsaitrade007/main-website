import Image from "next/image";
import Link from "@/components/SmartLink";
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

const FALLBACK_FEATURES: { title: string; description: string }[] = [
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
  const features =
    data?.growthFeatures && data.growthFeatures.length > 0
      ? data.growthFeatures.map((f) => ({
          title: f.title,
          description: f.description ?? "",
        }))
      : FALLBACK_FEATURES;

  return (
    <section
      className="page-section about-growth-section"
      style={{ background: "#050208", paddingBottom: "96px" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Desktop / tablet (≥ 426px) */}
        <div className="about-growth-desktop">
          <div className="two-col-grid" style={{ marginBottom: "64px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
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
                  fontSize: "clamp(22px, 2.5vw, 36px)",
                  lineHeight: "50px",
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
                {features.map((f) => (
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
                        fontSize: "clamp(16px, 1.7vw, 24px)",
                        lineHeight: "30px",
                        color: "#FFFFFF",
                      }}
                    >
                      {f.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: "var(--font-inter, Inter)",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "30px",
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

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/about/our_principles.jpg"
                alt=""
                width={666}
                height={666}
                style={{
                  maxWidth: "666px",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          <div className="stats-grid">
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
                <span className="about-growth-stat-value">{s.value}</span>
                <span className="about-growth-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile (≤ 425px): vertical text, stats in one row */}
        <div className="about-growth-mobile">
          <div className="about-growth-mobile-header">
            <span className="about-growth-mobile-badge">{badge}</span>
            <h2 className="about-growth-mobile-title">{title}</h2>
          </div>

          <div className="about-growth-mobile-image">
            <Image
              src="/about/our_principles.jpg"
              alt=""
              width={666}
              height={666}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>

          <div className="about-growth-features-mobile">
            {features.map((f) => (
              <div key={f.title} className="about-growth-feature-item">
                <h3 className="about-growth-feature-title">{f.title}</h3>
                <p className="about-growth-feature-desc">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="about-growth-mobile-cta">
            <Link
              href={ctaHref}
              className="btn-text"
              style={{
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

          <div className="about-growth-stats-row">
            {stats.map((s) => (
              <div key={s.id ?? s.label} className="about-growth-stat-item">
                <span className="about-growth-stat-value">{s.value}</span>
                <span className="about-growth-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
