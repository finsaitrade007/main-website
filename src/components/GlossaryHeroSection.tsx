export default function GlossaryHeroSection() {
  return (
    <section
      className="page-section"
      style={{
        position: "relative",
        background: "#050208",
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        paddingTop: "120px",
        paddingBottom: "80px",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Subtle background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(5,111,180,0.25) 0%, rgba(5,111,180,0) 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 22px",
            background: "#000",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "60px",
          }}
        >
          <span className="badge-text">Trading Dictionary</span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 700,
            fontSize: "clamp(36px, 4.4vw, 64px)",
            lineHeight: "110%",
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
            margin: 0,
            maxWidth: "900px",
          }}
        >
          Trading Terms, <br />
          <span
            style={{
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Explained Clearly
          </span>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "28px",
            color: "rgba(255,255,255,0.7)",
            margin: 0,
            maxWidth: "720px",
          }}
        >
          Your A-Z guide to every term in trading, forex, CFDs, indices,
          commodities, and crypto - written for traders who want clarity, not
          jargon.
        </p>
      </div>
    </section>
  );
}
