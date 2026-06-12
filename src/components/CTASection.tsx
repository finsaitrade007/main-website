import Link from "@/components/SmartLink";
import { getHomepage, type StrapiHomepage } from "@/lib/strapi";

const BTN_TYPOGRAPHY = {
  fontFamily: "var(--font-inter, Inter)",
  fontWeight: 600,
  fontSize: "clamp(14px, 1.3vw, 18.45px)",
  lineHeight: "1.5",
  letterSpacing: 0,
  color: "#FFFFFF",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
} as const;

const FALLBACK: Pick<
  StrapiHomepage,
  | "ctaBadge"
  | "ctaTitle"
  | "ctaDescription"
  | "ctaFooterText"
  | "ctaButton1Label"
  | "ctaButton1Href"
  | "ctaButton2Label"
  | "ctaButton2Href"
  | "ctaButton3Label"
  | "ctaButton3Href"
> = {
  ctaBadge: "Get Started",
  ctaTitle: "Ready to Start Trading with Finsai?",
  ctaDescription:
    "Open a live account or start with a demo account and explore global markets with Finsai Trade — at\nyour pace, on your terms.",
  ctaFooterText:
    "Trading Forex and CFDs involves significant risk and may not be suitable for all investors. Please\nensure you fully understand the risks involved.",
  ctaButton1Label: "Start Trading",
  ctaButton1Href: "https://fx.finsaitrade.com/auth/register",
  ctaButton2Label: "Try Demo",
  ctaButton2Href: "https://fx.finsaitrade.com/auth/register",
  ctaButton3Label: "Contact Us",
  ctaButton3Href: "/contactus",
};

export default async function CTASection() {
  const data = (await getHomepage()) ?? FALLBACK;
  const buttons = [
    { label: data.ctaButton1Label, href: data.ctaButton1Href },
    { label: data.ctaButton2Label, href: data.ctaButton2Href },
    { label: data.ctaButton3Label, href: data.ctaButton3Href },
  ].filter((b) => b.label && b.href);

  return (
    <section
      className="page-section"
      style={{
        background: "#050208",
        paddingBottom: "80px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1194px",
          minHeight: "437px",
          borderRadius: "30px",
          border: "1px solid #056FB4",
          background: "#000000",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 0",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "300px",
            background: "rgba(5,111,180,0.15)",
            borderRadius: "50%",
            filter: "blur(100px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            textAlign: "center",
            width: "100%",
            padding: "0 clamp(20px, 5%, 80px)",
            boxSizing: "border-box",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "8px 22px",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "60px",
              }}
            >
              <span className="badge-text">{data.ctaBadge}</span>
            </span>
          </div>

          <h2 className="section-title" style={{ marginBottom: "24px" }}>
            {data.ctaTitle}
          </h2>

          <p
            className="section-desc"
            style={{
              textAlign: "center",
              maxWidth: "900px",
              margin: "0 auto 40px",
              whiteSpace: "pre-line",
            }}
          >
            {data.ctaDescription}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            {buttons.map((b) => (
              <Link
                key={b.label}
                href={b.href}
                className="cta-btn"
                style={{
                  ...BTN_TYPOGRAPHY,
                  padding: "12px 32px",
                  border: "1px solid #056FB4",
                  borderRadius: "60px",
                }}
              >
                <span style={{ position: "relative", zIndex: 1 }}>{b.label}</span>
              </Link>
            ))}
          </div>

          <p
            className="body-text"
            style={{ marginTop: "24px", whiteSpace: "pre-line" }}
          >
            {data.ctaFooterText}
          </p>
        </div>
      </div>
    </section>
  );
}
