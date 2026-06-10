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
      width: "1440px",
      height: "777px",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        top: "-40px",
        left: "167px",
        width: "1283px",
        height: "855px",
      }}>
        <Image
          src="/service-hero.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <div style={{
        position: "absolute",
        top: "200px",
        left: "80px",
        width: "650px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        zIndex: 3,
      }}>
        <div style={{
          display: "inline-flex",
          alignSelf: "flex-start",
          alignItems: "center",
          gap: "8.4px",
          paddingTop: "9.6px",
          paddingBottom: "9.6px",
          paddingLeft: "16.8px",
          paddingRight: "16.8px",
          width: "362.6px",
          height: "51.2px",
          borderRadius: "60px",
          border: "1.2px solid #FFFFFF26",
          background: "#000000",
          boxSizing: "border-box",
        }}>
          <span style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "19.2px",
            lineHeight: "31.2px",
            letterSpacing: "-0.01%",
            textTransform: "uppercase",
            background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            whiteSpace: "nowrap",
          }}>
            Sign in to your secure wallet!
          </span>
        </div>

        <h1 style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 600,
          fontSize: "56px",
          lineHeight: "110%",
          letterSpacing: "-0.01em",
          color: "#FFFFFF",
          margin: 0,
          width: "758px",
          height: "186px",
          overflow: "hidden",
        }}>
          Powerful Trading Platforms for Every Trader 
        </h1>

        <p style={{
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "155%",
          color: "rgba(255,255,255,0.7)",
          maxWidth: "560px",
          position: "relative",
          top: "-80px",
          margin: 0,
        }}>
          {data.heroDescription}
        </p>

        <Link
          href={data.heroPrimaryCtaHref}
          className="btn-text"
          style={{
            width: "236px",
            height: "48px",
            borderRadius: "8px",
            paddingTop: "11px",
            paddingBottom: "11px",
            paddingLeft: "24px",
            paddingRight: "24px",
            gap: "16px",
            top: "-80px",
            position: "relative",
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
