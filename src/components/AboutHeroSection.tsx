import Link from "next/link";

export default function AboutHeroSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "#050208",
        width: "1440px",
        maxWidth: "100%",
        height: "520px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      {/* Soft glow behind the globe */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 75% 40%, rgba(5,111,180,0.22) 0%, rgba(0,0,0,0) 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Right artwork — dotted world map */}
      <WorldMapDots />

      {/* Left copy block */}
      <div
        style={{
          position: "absolute",
          top: "120px",
          left: "80px",
          width: "598px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          zIndex: 2,
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            width: "260px",
            height: "44px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8.4px",
            padding: "9.6px 16.8px",
            borderRadius: "60px",
            border: "1.2px solid #FFFFFF26",
            background: "#000000",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              backgroundImage:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            About Finsai Trade Ltd
          </span>
        </div>

        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "52px",
            lineHeight: "110%",
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
          }}
        >
          Making Global
          <br />
          Trading Accessible
          <br />
          and Rewarding
        </h1>

        <p
          style={{
            margin: 0,
            maxWidth: "560px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "26px",
            color: "#94A3B8",
          }}
        >
          We build the tools, infrastructure and partnerships that let traders
          everywhere access institutional-grade markets — fast, secure and
          always on.
        </p>

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Link
            href="/register"
            className="btn-text"
            style={{
              boxSizing: "border-box",
              height: "48px",
              padding: "11px 24px",
              borderRadius: "8px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
            }}
          >
            Open Live Account
          </Link>
          <div
            style={{
              boxSizing: "border-box",
              height: "48px",
              padding: "1px",
              borderRadius: "8px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            }}
          >
            <Link
              href="/services"
              style={{
                boxSizing: "border-box",
                height: "100%",
                padding: "10px 23px",
                borderRadius: "7px",
                background: "#050208",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 500,
                fontSize: "14px",
                color: "#FFFFFF",
              }}
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorldMapDots() {
  // Dot pattern roughly outlining continents — handcrafted in a compact form
  // so we don't need an image asset.
  const dots = generateDotMap();
  return (
    <svg
      width="720"
      height="420"
      viewBox="0 0 720 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        right: "40px",
        top: "60px",
        pointerEvents: "none",
        userSelect: "none",
        opacity: 0.95,
      }}
      aria-hidden
    >
      <defs>
        <linearGradient id="wm-grad" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#7DB9D6" />
          <stop offset="1" stopColor="#056FB4" />
        </linearGradient>
      </defs>
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={1.6} fill="url(#wm-grad)" />
      ))}
    </svg>
  );
}

function generateDotMap() {
  // Stylised dot field — denser near the centre to suggest landmasses while
  // keeping the artwork purely procedural.
  const points: [number, number][] = [];
  for (let x = 0; x < 720; x += 10) {
    for (let y = 0; y < 420; y += 10) {
      const cx = 360;
      const cy = 200;
      const dx = (x - cx) / 360;
      const dy = (y - cy) / 200;
      const r = Math.sqrt(dx * dx + dy * dy);
      // simulate continents with sinusoidal modulation
      const noise =
        0.55 +
        0.3 * Math.sin(x * 0.018) * Math.cos(y * 0.022) +
        0.18 * Math.sin((x + y) * 0.012);
      if (r < 0.95 && noise > 0.65 + r * 0.25) {
        points.push([x, y]);
      }
    }
  }
  return points;
}
