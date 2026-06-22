import Link from "@/components/SmartLink";
import Image from "next/image";
import { getPaymentsPage, type StrapiPaymentsPage } from "@/lib/strapi";

const FALLBACK: Pick<
  StrapiPaymentsPage,
  | "heroBadge"
  | "heroTitle"
  | "heroDescription"
  | "heroPrimaryCtaLabel"
  | "heroPrimaryCtaHref"
> = {
  heroBadge: "Payment Solutions",
  heroTitle: "Fund Your Trading Account with Secure Payments",
  heroDescription:
    "Deposit and withdraw funds seamlessly using trusted, fast and secure options.",
  heroPrimaryCtaLabel: "Deposit Funds",
  heroPrimaryCtaHref: "https://fx.finsaitrade.com/auth/register",
};

export default async function PaymentsHeroSection() {
  const data = (await getPaymentsPage()) ?? FALLBACK;
  return (
    <section
      style={{
        position: "relative",
        background: "#050208",
        width: "100%",
        minHeight: "clamp(480px, 54vw, 777px)",
        overflow: "hidden",
      }}
    >
      <Image
        src="/payments/payment-hero.png"
        alt=""
        width={634}
        height={634}
        className="hero-image"
        style={{
          position: "absolute",
          top: "93px",
          left: "clamp(380px, 56vw, 806px)",
          width: "clamp(320px, 44vw, 634px)",
          height: "auto",
          objectFit: "contain",
        }}
        priority
      />

      <div
        style={{
          position: "absolute",
          top: "clamp(120px, 11.7vw, 168px)",
          left: "clamp(20px, 5.5vw, 80px)",
          width: "clamp(280px, 58.8vw, 852px)",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          zIndex: 3,
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            height: "44px",
            display: "inline-flex",
            alignSelf: "flex-start",
            alignItems: "center",
            justifyContent: "center",
            gap: "8.4px",
            padding: "9.6px 22px",
            borderRadius: "60px",
            border: "1.2px solid #FFFFFF26",
            background: "#000000",
            whiteSpace: "nowrap",
          }}
        >
          <span
            className="hero-badge-text"
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "24px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {data.heroBadge}
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "clamp(28px, 3.9vw, 56px)",
            lineHeight: "110%",
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
            margin: 0,
            whiteSpace: "pre-line",
          }}
        >
          {data.heroTitle}
        </h1>

        <p
          className="hero-desc-text"
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "24px",
            color: "#94A3B8",
            maxWidth: "540px",
            margin: 0,
          }}
        >
          {data.heroDescription}
        </p>

        <Link
          href={data.heroPrimaryCtaHref}
          className="btn-text"
          style={{
            padding: "clamp(9px, 0.8vw, 11px) clamp(16px, 1.7vw, 24px)",
            gap: "16px",
            borderRadius: "8px",
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

      <div
        className="hero-image"
        style={{
          position: "absolute",
          bottom: 0,
          left: "clamp(380px, 54vw, 782px)",
          width: "clamp(320px, 45.7vw, 658px)",
          height: "127px",
          background:
            "linear-gradient(180deg, rgba(5,2,8,0) 0%, rgba(5,2,8,0.85) 60%, #050208 100%)",
          backdropFilter: "blur(54px)",
          WebkitBackdropFilter: "blur(54px)",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 100%)",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 100%)",
          pointerEvents: "none",
          zIndex: 4,
        }}
      />
    </section>
  );
}
