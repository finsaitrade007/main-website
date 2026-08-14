import Link from "@/components/SmartLink";
import { getHomepage, type StrapiHomepage } from "@/lib/strapi";

/**
 * The secondary CTA renders a real arrow icon. Existing CMS copy still ends in
 * a typed "->" (and the old fallback did too), which would render twice — once
 * as characters, once as the icon. Strip any trailing arrow the editor typed.
 */
function stripTrailingArrow(label: string): string {
  return label.replace(/\s*(->|-->|→|›|»)\s*$/, "").trim();
}

function ArrowRight() {
  return (
    <svg
      className="hero-cta__arrow"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 8h11m0 0L9.5 4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
  heroTitle: "Trade Global Markets on an MT5 Multi Asset Trading Platform",
  heroSubtitle:
    "Finsai Trade is a secure trading platform that gives modern traders access to forex, stocks, commodities, and indices through one advanced global trading platform ecosystem with up to 500x leverage.",
  heroTaglines: [
    { id: 1, label: "Fast Execution" },
    { id: 2, label: "Advanced Trading Tools" },
    { id: 3, label: "Secure & FSC Regulated Forex Broker Infrastructure" },
  ],
  heroCtaPrimaryLabel: "Start Trading Now",
  heroCtaPrimaryHref: "https://fx.finsaitrade.com/auth/register",
  heroCtaSecondaryLabel: "Try Demo",
  heroCtaSecondaryHref: "/contactus",
};

export default async function HeroSection() {
  const cms = await getHomepage();
  // `?? FALLBACK` only covers a fully-null response. Strapi can also return a
  // homepage document with individual fields unset (an editor clearing them, or
  // a populate that didn't resolve), so each field falls back independently —
  // otherwise `heroTaglines.map` below would throw and 500 the homepage.
  const data = {
    heroTitle: cms?.heroTitle || FALLBACK.heroTitle,
    heroSubtitle: cms?.heroSubtitle || FALLBACK.heroSubtitle,
    heroTaglines: cms?.heroTaglines?.length
      ? cms.heroTaglines
      : FALLBACK.heroTaglines,
    heroCtaPrimaryLabel:
      cms?.heroCtaPrimaryLabel || FALLBACK.heroCtaPrimaryLabel,
    heroCtaPrimaryHref: cms?.heroCtaPrimaryHref || FALLBACK.heroCtaPrimaryHref,
    heroCtaSecondaryLabel:
      cms?.heroCtaSecondaryLabel || FALLBACK.heroCtaSecondaryLabel,
    heroCtaSecondaryHref:
      cms?.heroCtaSecondaryHref || FALLBACK.heroCtaSecondaryHref,
  };

  return (
    <section className="hero">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/video_001.jpg"
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

          <p className="hero__subtitle">{data.heroSubtitle}</p>

          <p className="hero__taglines">
            {data.heroTaglines.map((t, i) => (
              <span key={t.id} style={{ display: "contents" }}>
                {i > 0 ? (
                  <span className="hero__tagline-sep" aria-hidden="true">
                    |
                  </span>
                ) : null}
                <span>{t.label}</span>
              </span>
            ))}
          </p>

          <div className="hero__ctas">
            <Link
              href={data.heroCtaPrimaryHref}
              className="hero-cta hero-cta--primary"
            >
              {stripTrailingArrow(data.heroCtaPrimaryLabel)}
            </Link>
            <Link
              href={data.heroCtaSecondaryHref}
              className="hero-cta hero-cta--secondary"
            >
              {stripTrailingArrow(data.heroCtaSecondaryLabel)}
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
