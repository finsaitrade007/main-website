import Image from "next/image";
import Link from "@/components/SmartLink";
import { withFallback } from "@/lib/cms";
import { getRegulationsPage } from "@/lib/strapi";

const FALLBACK = {
  heroBadge: "Secure Trading Environment",
  heroTitle: "Trade with An Regulated Broker",
  heroDescription:
    "Finsai Trade protects your funds through strict regulation, segregated accounts, and advanced security measures.",
  heroPrimaryCtaLabel: "Open Live Account",
  heroPrimaryCtaHref: "https://fx.finsaitrade.com/auth/register",
  heroImage: "/regulations-v2/image-74.png",
};

export default async function RegulationsHeroSection() {
  const cms = await getRegulationsPage();
  const data = withFallback(FALLBACK, cms);

  return (
    <section
      className="reg-hero"
      style={{
        position: "relative",
        background: "#050208",
        width: "100%",
        minHeight: "clamp(520px, 50vw, 720px)",
        overflow: "hidden",
      }}
    >
      <Image
        src={data.heroImage}
        alt=""
        quality={100}
        width={2896}
        height={2156}
        className="reg-hero-image"
        style={{
          position: "absolute",
          top: "clamp(70px, 9vw, 130px)",
          left: "49.7%",
          width: "clamp(320px, 51.7vw, 744px)",
          height: "auto",
          objectFit: "contain",
        }}
        priority
      />

      <div
        className="reg-hero-copy"
        style={{
          position: "absolute",
          top: "clamp(120px, 14.4vw, 208px)",
          left: "clamp(20px, 5.5vw, 80px)",
          width: "clamp(280px, 48.5vw, 699px)",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          zIndex: 3,
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            display: "inline-flex",
            alignSelf: "flex-start",
            alignItems: "center",
            gap: "8px",
            padding: "10px 16px",
            borderRadius: "60px",
            border: "1.2px solid #FFFFFF33",
            background: "#000000",
            whiteSpace: "nowrap",
          }}
        >
          <span
            className="reg-hero-badge-text"
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "clamp(13px, 1.39vw, 20px)",
              lineHeight: "32px",
              textTransform: "uppercase",
              color: "#94A3B8",
            }}
          >
            {data.heroBadge}
          </span>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          <h1
            style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 600,
              fontSize: "clamp(30px, 4.17vw, 60px)",
              lineHeight: "102.7%",
              color: "#FFFFFF",
              margin: 0,
              maxWidth: "673px",
            }}
          >
            {data.heroTitle}
          </h1>

          <p
            className="reg-hero-desc"
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.11vw, 16px)",
              lineHeight: "150%",
              color: "rgba(255,255,255,0.75)",
              margin: 0,
              maxWidth: "614px",
            }}
          >
            {data.heroDescription}
          </p>

          <Link
            href={data.heroPrimaryCtaHref}
            className="reg-btn-primary"
            style={{
              boxSizing: "border-box",
              width: "240px",
              maxWidth: "100%",
              padding: "10px 24px",
              borderRadius: "8px",
              background:
                "linear-gradient(174deg, #94A3B8 0%, #056FB4 100%)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-0.01em",
                color: "#FFFFFF",
              }}
            >
              {data.heroPrimaryCtaLabel}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
