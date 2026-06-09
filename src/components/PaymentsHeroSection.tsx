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
  heroBadge: "SECURE DEPOSITS & WITHDRAWALS",
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
        width: "1440px",
        height: "777px",
        overflow: "hidden",
      }}
    >
      <Image
        src="/accounts/hero.png"
        alt=""
        width={634}
        height={634}
        style={{
          position: "absolute",
          top: "93px",
          left: "806px",
          objectFit: "contain",
        }}
        priority
      />

      <div
        style={{
          position: "absolute",
          top: "168px",
          left: "80px",
          width: "702px",
          height: "441.2px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          zIndex: 3,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            alignItems: "center",
            justifyContent: "center",
            gap: "8.4px",
            width: "342.6px",
            height: "51.2px",
            paddingTop: "9.6px",
            paddingBottom: "9.6px",
            paddingLeft: "16.8px",
            paddingRight: "16.8px",
            borderRadius: "60px",
            border: "1.2px solid #FFFFFF26",
            background: "#000000",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "19.2px",
              lineHeight: "31.2px",
              letterSpacing: "-0.01%",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              whiteSpace: "nowrap",
            }}
          >
            Flexible Payment Solutions
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "56px",
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
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "155%",
            color: "rgba(255,255,255,0.7)",
            maxWidth: "560px",
            margin: 0,
          }}
        >
          {data.heroDescription}
        </p>

        <Link
          href={data.heroPrimaryCtaHref}
          className="btn-text"
          style={{
            width: "195px",
            height: "48px",
            paddingTop: "11px",
            paddingBottom: "11px",
            paddingLeft: "24px",
            paddingRight: "24px",
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
        style={{
          position: "absolute",
          top: "650px",
          left: "782px",
          width: "658px",
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
