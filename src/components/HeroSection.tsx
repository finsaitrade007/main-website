import Link from "@/components/SmartLink";
import { getHomepage, type StrapiHomepage } from "@/lib/strapi";

const FALLBACK: Pick<
  StrapiHomepage,
  | "heroTitle"
  | "heroSubtitle"
  | "heroTaglines"
  | "heroCtaPrimaryLabel"
  | "heroCtaPrimaryHref"
  | "heroCtaSecondaryLabel"
  | "heroCtaSecondaryHref"
> = {
  heroTitle: "Trade Global Markets on a Powerful Multi-Asset Trading Platform",
  heroSubtitle:
    "Finsai Trade is a secure trading platform that gives modern traders access to forex, stocks, commodities, and indices through one advanced trading ecosystem.",
  heroTaglines: [
    { id: 1, label: "Fast Execution" },
    { id: 2, label: "Advanced Trading Tools" },
    { id: 3, label: "Secure & Regulated Infrastructure" },
  ],
  heroCtaPrimaryLabel: "Start Trading Now",
  heroCtaPrimaryHref: "https://fx.finsaitrade.com/auth/register",
  heroCtaSecondaryLabel: "Try Demo ->",
  heroCtaSecondaryHref: "/contactus",
};

export default async function HeroSection() {
  const data = (await getHomepage()) ?? FALLBACK;

  return (
    <section className="hero">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/video_001.png"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          zIndex: 0,
        }}
      >
        <source src="/video_001.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "103px",
          left: 0,
          bottom: 0,
          background: "#050208",
          filter: "blur(22px)",
          zIndex: 1,
        }}
      />

      <div className="hero__content">
        <div className="hero__text-wrap">
          <h1 className="hero__title">{data.heroTitle}</h1>

          <p className="hero__subtitle">
            {data.heroSubtitle}
            <br />
            {data.heroTaglines.map((t, i) => (
              <span key={t.id}>
                {i > 0 ? " | " : ""}
                <span style={{ color: "#7DD5FF" }}>{t.label}</span>
              </span>
            ))}
          </p>

          <div className="hero__ctas">
            <Link
              href={data.heroCtaPrimaryHref}
              className="btn-text"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "clamp(9px, 0.8vw, 11px) clamp(16px, 1.7vw, 24px)",
                borderRadius: "8px",
                background:
                  "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {data.heroCtaPrimaryLabel}
            </Link>
            <Link
              href={data.heroCtaSecondaryHref}
              className="btn-secondary btn-text hero-try-demo-btn"
            >
              {data.heroCtaSecondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
