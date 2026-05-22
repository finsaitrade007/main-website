import Link from "next/link";

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
};

export default function CTASection() {
  return (
    <section style={{ background: "#050208", padding: "80px 0", display: "flex", justifyContent: "center" }}>

      {/* Card box */}
      <div style={{
        width: "1194px",
        height: "437px",
        borderRadius: "30px",
        border: "1px solid #056FB4",
        background: "#000000",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>

        {/* Glow blob */}
        <div style={{
          position: "absolute",
          width: "600px",
          height: "300px",
          background: "rgba(5,111,180,0.15)",
          borderRadius: "50%",
          filter: "blur(100px)",
          pointerEvents: "none",
        }} />

        {/* Content */}
        <div style={{ position: "relative", textAlign: "center", width: "100%", padding: "0 80px" }}>

          {/* Badge */}
          <div style={{ marginBottom: "16px" }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 22px",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "60px",
            }}>
              <span className="badge-text">Get Started</span>
            </span>
          </div>

          <h2 className="section-title" style={{ marginBottom: "24px" }}>
            Ready to Start Trading with Finsai?
          </h2>

          <p className="section-desc" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto 40px" }}>
            Open a live account or start with a demo account and explore global markets with Finsai Trade — at
            <br />
            your pace, on your terms.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "16px" }}>
            <Link href="/register" className="cta-btn" style={{ ...BTN_TYPOGRAPHY, padding: "12px 32px", border: "1px solid #056FB4", borderRadius: "60px" }}>
              <span style={{ position: "relative", zIndex: 1 }}>Start Trading</span>
            </Link>
            <Link href="/demo" className="cta-btn" style={{ ...BTN_TYPOGRAPHY, padding: "12px 32px", border: "1px solid #056FB4", borderRadius: "60px" }}>
              <span style={{ position: "relative", zIndex: 1 }}>Try Demo</span>
            </Link>
            <Link href="/contact" className="cta-btn" style={{ ...BTN_TYPOGRAPHY, padding: "12px 32px", border: "1px solid #056FB4", borderRadius: "60px" }}>
              <span style={{ position: "relative", zIndex: 1 }}>Contact Us</span>
            </Link>
          </div>

          <p className="body-text" style={{ marginTop: "24px" }}>
            Trading Forex and CFDs involves significant risk and may not be suitable for all investors. Please
            <br />
            ensure you fully understand the risks involved.
          </p>

        </div>
      </div>
    </section>
  );
}
