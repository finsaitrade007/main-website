import Link from "next/link";
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
  heroTitle: "Trade Global Markets Without Limits",
  heroSubtitle:
    "The powerful multi-asset trading platform for modern traders — all in one unified ecosystem.",
  heroTaglines: [
    { id: 1, label: "Regulated Broker" },
    { id: 2, label: "MT5 Platform" },
    { id: 3, label: "Swap Free" },
    { id: 4, label: "Reliable Support" },
  ],
  heroCtaPrimaryLabel: "Start Trading Now",
  heroCtaPrimaryHref: "/register",
  heroCtaSecondaryLabel: "Try Demo",
  heroCtaSecondaryHref: "/demo",
};

export default async function HeroSection() {
  const data = (await getHomepage()) ?? FALLBACK;

  return (
    <section className="hero">
      <div
        style={{
          position: "absolute",
          width: "1481px",
          height: "833px",
          left: "calc(50% - 740.5px - 0.5px)",
          top: "-6px",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/video_001.png"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        >
          <source src="/video_001.mp4" type="video/mp4" />
        </video>
      </div>

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
                width: "195px",
                height: "48px",
                borderRadius: "8px",
                background:
                  "linear-gradient(90deg, #496DAB 0%, #496DAB 50%, #41ABE7 75%, #48C3F4 100%)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {data.heroCtaPrimaryLabel}
            </Link>
            <Link href={data.heroCtaSecondaryHref} className="btn-secondary">
              {data.heroCtaSecondaryLabel} &nbsp;→
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
