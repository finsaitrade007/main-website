import SmartLink from "@/components/SmartLink";

const REGISTER_HREF = "https://fx.finsaitrade.com/auth/register";

export default function SocialTradingCTASection() {
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
      {/* Card: Figma spec — 1194×350, 30px radius, blue gradient + blue border */}
      <div
        style={{
          width: "100%",
          maxWidth: "1194px",
          minHeight: "350px",
          borderRadius: "30px",
          border: "1px solid rgba(5, 111, 180, 1)",
          background:
            "linear-gradient(137.88deg, #050208 1.04%, #056FB4 536.19%)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px clamp(24px, 5%, 80px)",
          boxSizing: "border-box",
        }}
      >
        <div style={{ position: "relative", textAlign: "center", width: "100%" }}>
          {/* Badge */}
          <div style={{ marginBottom: "20px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "8px 22px",
                border: "1px solid rgba(5,111,180,0.4)",
                background: "#0A1B26",
                borderRadius: "60px",
              }}
            >
              <span className="badge-text">Join Finsai Trade Social Trading</span>
            </span>
          </div>

          {/* Title — uses the shared .section-title class so size matches other CTAs */}
          <h2 className="section-title" style={{ marginBottom: "20px" }}>
            Your Next Trade Is Already Being Made.
          </h2>

          {/* Description — uses the shared .section-desc class */}
          <p
            className="section-desc"
            style={{
              textAlign: "center",
              maxWidth: "720px",
              margin: "0 auto 32px",
            }}
          >
            Stop watching markets from the sidelines. Join thousands of traders
            who are already trading on proven strategies.
          </p>

          {/* CTA button */}
          <SmartLink
            href={REGISTER_HREF}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              padding: "14px 36px",
              background:
                "linear-gradient(90deg, #056FB4 0%, #41ABE7 100%)",
              textDecoration: "none",
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#FFFFFF",
              whiteSpace: "nowrap",
            }}
          >
            Open a Free Account
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
