import Link from "@/components/SmartLink";
import Image from "next/image";
import { getServicesPage, type StrapiServicesPage } from "@/lib/strapi";

const FALLBACK: Pick<
  StrapiServicesPage,
  | "heroBadge"
  | "heroTitle"
  | "heroDescription"
  | "heroPrimaryCtaLabel"
  | "heroPrimaryCtaHref"
> = {
  heroBadge: "SIGN IN TO YOUR SECURE WALLET",
  heroTitle: "Powerful Trading Platforms for Every Trader ",
  heroDescription:
    "Discover three powerful trading environments built for ambitious beginners, active traders, and professional market participants.",
  heroPrimaryCtaLabel: "Start Trading →",
  heroPrimaryCtaHref: "https://fx.finsaitrade.com/auth/register",
};

export default async function ServicesHeroSection() {
  const data = (await getServicesPage()) ?? FALLBACK;
  return (
    <section style={{
      position: "relative",
      background: "#050208",
      width: "100%",
      minHeight: "clamp(480px, 54vw, 777px)",
      overflow: "hidden",
    }}>
      <div
        className="hero-image"
        style={{
          position: "absolute",
          top: "-40px",
          left: "167px",
          width: "1283px",
          height: "855px",
        }}>
        <Image
          src="/service/hero.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <div style={{
        position: "absolute",
        top: "clamp(120px, 13.9vw, 200px)",
        left: "clamp(20px, 5.5vw, 80px)",
        width: "clamp(300px, 75vw, 750px)",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        zIndex: 3,
      }}>
        <div style={{
          boxSizing: "border-box",
          height: "44px",
          display: "inline-flex",
          alignSelf: "flex-start",
          alignItems: "center",
          justifyContent: "center",
          gap: "8.4px",
          padding: "9.6px 22px",
          maxWidth: "calc(100vw - 40px)",
          borderRadius: "60px",
          border: "1.2px solid #FFFFFF26",
          background: "#000000",
          whiteSpace: "nowrap",
        }}>
          <span style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "24px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            {data.heroBadge}
          </span>
        </div>

        <h1 style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 600,
          fontSize: "clamp(28px, 3.9vw, 56px)",
          lineHeight: "110%",
          letterSpacing: "-0.01em",
          color: "#FFFFFF",
          margin: 0,
        }}>
          {data.heroTitle}
        </h1>

        <p style={{
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "24px",
          color: "#94A3B8",
          maxWidth: "540px",
          margin: 0,
        }}>
          {data.heroDescription}
        </p>

        <Link
          href={data.heroPrimaryCtaHref}
          className="btn-text"
          style={{
            borderRadius: "8px",
            padding: "clamp(9px, 0.8vw, 11px) clamp(16px, 1.7vw, 24px)",
            gap: "16px",
            background:
              "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-start",
            boxSizing: "border-box",
          }}
        >
          {data.heroPrimaryCtaLabel}
        </Link>
      </div>
    </section>
  );
}
