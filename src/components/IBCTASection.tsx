import Link from "@/components/SmartLink";

const BTN_TYPOGRAPHY = {
  fontFamily: "var(--font-inter, Inter)",
  fontWeight: 600,
  fontSize: "18.45px",
  lineHeight: "27.68px",
  letterSpacing: 0,
  color: "#FFFFFF",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
} as const;

const FALLBACK = {
  ctaBadge: "Grow As An IB",
  ctaTitle: "Start Earning as an Introducing Broker",
  ctaDescription:
    "Build a thriving partner business with smarter tools, seamless onboarding, and growth-focused\nrewards.",
  ctaFooterText:
    "Trading Forex and CFDs involves significant risk and may not be suitable for all investors. Please\nensure you fully understand the risks involved.",
  ctaButton1Label: "Become an IB Partner",
  ctaButton1Href: "https://fx.finsaitrade.com/auth/register",
  ctaButton2Label: "Talk to Us",
  ctaButton2Href: "/contactus",
  ctaButton3Label: "Start a Demo Account",
  ctaButton3Href: "/demo",
};

export default function IBCTASection() {
  const data = FALLBACK;

  const primary = { label: data.ctaButton1Label, href: data.ctaButton1Href };
  const secondaryButtons = [
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
          boxSizing: "border-box",
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
          margin: "0 auto",
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
            padding: "40px clamp(20px, 5.5%, 80px)",
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
            <Link
              href={primary.href}
              style={{
                ...BTN_TYPOGRAPHY,
                padding: "12px 32px",
                borderRadius: "60px",
                border: "1px solid transparent",
                background:
                  "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ position: "relative", zIndex: 1 }}>
                {primary.label}
              </span>
            </Link>

            {secondaryButtons.map((b) => (
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
                <span style={{ position: "relative", zIndex: 1 }}>
                  {b.label}
                </span>
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
