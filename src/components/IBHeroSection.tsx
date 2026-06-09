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
  heroPrimaryCtaHref: "https://fx.finsaitrade.com/auth/register",
};

export default async function IBHeroSection() {
  const data = (await getPartnershipsPage()) ?? FALLBACK;
  return (
    <section style={{
      position: "relative",
      background: "#050208",
      width: "1440px",
      height: "707px",
      overflow: "hidden",
    }}>
      {/* Hero image — right side */}
      <Image
        src="/partners-hero.png"
        alt=""
        width={1130}
        height={678}
        style={{
          position: "absolute",
          top: "53px",
          left: "310px",
          width: "1130px",
          height: "678px",
          objectFit: "contain",
        }}
        priority
      />

      {/* Content */}
      <div style={{
        position: "absolute",
        top: "200px",
        left: "80px",
        width: "660px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        zIndex: 3,
      }}>
        <h1 style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 600,
          fontSize: "56px",
          lineHeight: "110%",
          letterSpacing: "-0.01em",
          color: "#FFFFFF",
          margin: 0,
          whiteSpace: "pre-line",
          width: "670px",
          height: "124px",
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
          width: "195px",
          height: "48px",
          borderRadius: "8px",
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
