import Image from "next/image";
import Link from "@/components/SmartLink";
import { withFallback } from "@/lib/cms-fallback";
import { getRegulationsPage } from "@/lib/strapi";

const FALLBACK = {
  ctaTitle: "A Secure Foundation for Every Trade",
  ctaDescription:
    "Regulated, protected, and built for serious traders. Join Finsai Trade today.",
  ctaPrimaryLabel: "Start Trading",
  ctaPrimaryHref: "https://fx.finsaitrade.com/auth/register",
  ctaImage: "/regulations-v2/cta-bg.png",
};

export default async function RegulationsCTASection() {
  const cms = await getRegulationsPage();
  const data = withFallback(FALLBACK, cms);

  return (
    <section
      className="reg-cta"
      style={{
        position: "relative",
        width: "100%",
        background: "#050208",
        padding: "clamp(40px, 4vw, 57px) clamp(20px, 8.5vw, 123px)",
      }}
    >
      <div
        className="reg-cta-band"
        style={{
          position: "relative",
          maxWidth: "1194px",
          margin: "0 auto",
          aspectRatio: "1194 / 437",
          minHeight: "clamp(280px, 30vw, 437px)",
          borderRadius: "30px",
          border: "1px solid #056FB4",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "14px",
          padding: "clamp(24px, 3vw, 40px)",
          textAlign: "center",
        }}
      >
        <Image
          src={data.ctaImage}
          alt=""
          quality={100}
          fill
          sizes="(max-width: 1194px) 100vw, 1194px"
          style={{ objectFit: "cover", zIndex: 0 }}
        />

        <h2
          style={{
            position: "relative",
            zIndex: 1,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "clamp(22px, 2.5vw, 36px)",
            lineHeight: "138%",
            color: "#FFFFFF",
            margin: 0,
            maxWidth: "769px",
          }}
        >
          {data.ctaTitle}
        </h2>

        <p
          className="reg-cta-desc"
          style={{
            position: "relative",
            zIndex: 1,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "clamp(13px, 1.11vw, 16px)",
            lineHeight: "200%",
            color: "#FFFFFF",
            margin: 0,
            maxWidth: "773px",
          }}
        >
          {data.ctaDescription}
        </p>

        <Link
          href={data.ctaPrimaryHref}
          className="reg-btn-pill"
          style={{
            position: "relative",
            zIndex: 1,
            marginTop: "10px",
            padding: "14px 24px",
            borderRadius: "28.83px",
            background: "linear-gradient(174deg, #94A3B8 0%, #056FB4 100%)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 600,
              fontSize: "clamp(15px, 1.25vw, 18px)",
              lineHeight: "28px",
              color: "#FFFFFF",
            }}
          >
            {data.ctaPrimaryLabel}
          </span>
        </Link>
      </div>
    </section>
  );
}
