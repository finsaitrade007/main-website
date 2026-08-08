import Link from "@/components/SmartLink";
import { withFallback } from "@/lib/cms";
import { getRegulationsPage } from "@/lib/strapi";

const FALLBACK = {
  commitmentTitle: "Our Regulatory Commitment",
  commitmentDescription:
    "Finsai Trade (Mauritius) Ltd operates under strict international financial standards. We hold a valid investment dealer license issued by the Financial Services Commission Mauritius.\n\nThis regulatory oversight promotes transparent trade execution, regular capital adequacy audits, and compliance with global anti-money laundering standards.",
  commitmentCtaLabel: "Review Legal Documents →",
  commitmentCtaHref: "/client-agreement",
};

export default async function RegulationsCommitmentSection() {
  const cms = await getRegulationsPage();
  const data = withFallback(FALLBACK, cms);

  const paragraphs = data.commitmentDescription
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section
      className="reg-commitment"
      style={{
        position: "relative",
        width: "100%",
        background: "#171717",
        padding: "clamp(48px, 5vw, 72px) clamp(20px, 5.5vw, 80px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "clamp(24px, 2.6vw, 38px)",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 600,
          fontSize: "clamp(24px, 2.5vw, 36px)",
          lineHeight: "138%",
          color: "#FFFFFF",
          margin: 0,
          textAlign: "center",
        }}
      >
        {data.commitmentTitle}
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(16px, 1.6vw, 24px)",
          maxWidth: "687px",
          width: "100%",
        }}
      >
        {paragraphs.map((text, i) => (
          <p
            key={i}
            className="reg-commitment-text"
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.11vw, 16px)",
              lineHeight: "200%",
              color: "rgba(255,255,255,0.75)",
              textAlign: "center",
              margin: 0,
            }}
          >
            {text}
          </p>
        ))}
      </div>

      <Link
        href={data.commitmentCtaHref}
        className="reg-btn-outline"
        style={{
          boxSizing: "border-box",
          width: "288px",
          maxWidth: "100%",
          padding: "10px 24px",
          borderRadius: "8px",
          border: "1px solid #94A3B8",
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
          {data.commitmentCtaLabel}
        </span>
      </Link>
    </section>
  );
}
