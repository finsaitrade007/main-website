import Link from "@/components/SmartLink";
import Image from "next/image";
import { getPartnershipsPage, type StrapiPartnershipsPage } from "@/lib/strapi";

const FALLBACK: Pick<
  StrapiPartnershipsPage,
  | "heroTitle"
  | "heroDescription"
  | "heroPrimaryCtaLabel"
  | "heroPrimaryCtaHref"
> = {
  heroTitle: "Join Finsai Trade as an Introducing Broker",
  heroDescription:
    "Earn attractive commissions from every client trade with higher conversions and stronger client retention.",
  heroPrimaryCtaLabel: "Become an IB",
  heroPrimaryCtaHref: "https://portal.finsaitrade.com/partner/register",
};

export default async function IBHeroSection() {
  const data = (await getPartnershipsPage()) ?? FALLBACK;
  return (
    <section style={{
      position: "relative",
      background: "#050208",
      width: "100%",
      minHeight: "clamp(480px, 49vw, 707px)",
      overflow: "hidden",
    }}>
      {/* Hero image — right side */}
      <Image
        src="/partners/ib-hero.jpg"
        alt=""
        width={1130}
        height={678}
        className="hero-image"
        style={{
          position: "absolute",
          top: "53px",
          left: "clamp(150px, 21.5vw, 310px)",
          width: "clamp(600px, 78.5vw, 1130px)",
          height: "auto",
          objectFit: "contain",
        }}
        priority
      />

      {/* Content */}
      <div style={{
        position: "absolute",
        top: "clamp(120px, 13.9vw, 200px)",
        left: "clamp(20px, 5.5vw, 80px)",
        width: "clamp(280px, 45.8vw, 660px)",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        zIndex: 3,
      }}>
        <h1 style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 600,
          fontSize: "clamp(28px, 3.9vw, 56px)",
          lineHeight: "110%",
          letterSpacing: "-0.01em",
          color: "#FFFFFF",
          margin: 0,
          whiteSpace: "pre-line",
        }}>
          {data.heroTitle}
        </h1>

        <p style={{
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "155%",
          color: "rgba(255,255,255,0.7)",
          maxWidth: "560px",
          margin: 0,
        }}>
          {data.heroDescription}
        </p>

        <Link href={data.heroPrimaryCtaHref} className="btn-text" style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "flex-start",
          borderRadius: "8px",
          padding: "clamp(9px, 0.8vw, 11px) clamp(16px, 1.7vw, 24px)",
          background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}>
          {data.heroPrimaryCtaLabel}
        </Link>
      </div>
    </section>
  );
}
