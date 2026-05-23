import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="hero">

      {/* ── Background media (video_001) ── */}
      <div style={{
        position: "absolute",
        width: "1481px",
        height: "833px",
        left: "calc(50% - 740.5px - 0.5px)",
        top: "-6px",
        overflow: "hidden",
        zIndex: 0,
      }}>
        {/* Try video first; falls back to poster image */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/video_001.png"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        >
          <source src="/video_001.mp4" type="video/mp4" />
          {/* If no video, the poster image shows */}
        </video>
      </div>

      {/* ── Bottom fade (Rectangle 10934) ── */}
      <div style={{
        position: "absolute",
        width: "100%",
        height: "103px",
        left: 0,
        bottom: 0,
        background: "#050208",
        filter: "blur(22px)",
        zIndex: 1,
      }} />

      {/* ── Main text content ── */}
      <div className="hero__content">
        <div className="hero__text-wrap">

          <h1 className="hero__title">
            Trade Global Markets Without Limits
          </h1>

          <p className="hero__subtitle">
            The powerful multi-asset trading platform for modern traders — all in one unified ecosystem.
            <br />
            <span style={{ color: "#7DD5FF" }}>Regulated Broker</span>
            {" | "}
            <span style={{ color: "#7DD5FF" }}>MT5 Platform</span>
            {" | "}
            <span style={{ color: "#7DD5FF" }}>Swap Free</span>
            {" | "}
            <span style={{ color: "#7DD5FF" }}>Reliable Support</span>
          </p>

          <div className="hero__ctas">
            <Link href="/register" className="btn-text" style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "195px",
              height: "48px",
              borderRadius: "8px",
              background: "linear-gradient(90deg, #496DAB 0%, #496DAB 50%, #41ABE7 75%, #48C3F4 100%)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}>
              Start Trading Now
            </Link>
            <Link href="/demo" className="btn-secondary">Try Demo &nbsp;→</Link>
          </div>

        </div>
      </div>

    </section>
  );
}

