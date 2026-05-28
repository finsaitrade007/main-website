import Link from "next/link";
import Image from "next/image";

const PROOF_POINTS_LINE =
  "✔ Analyze markets with precision  ✔ Manage risk with confidenc ✔ Execute strategies with control";

export default function ToolsHeroSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "#050208",
        width: "1440px",
        maxWidth: "100%",
        height: "777px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      {/* Right-side hero artwork — trading dashboard with floating
          calculator, calendar, news, shield, gear and lightning props.
          Spec: 1153 × 737 anchored at top:42, left:295. */}
      <Image
        src="/tools/hero.png"
        alt=""
        width={1153}
        height={737}
        priority
        style={{
          position: "absolute",
          top: "42px",
          left: "295px",
          width: "1153px",
          height: "737px",
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
          opacity: 1,
        }}
      />

      {/* Left-aligned copy block — 598 × 465.2 column anchored at
          top:159.4, left:80 with a uniform 24px gap between children
          (pill → headline → description → CTAs → proof-points). */}
      <div
        style={{
          position: "absolute",
          top: "159.4px",
          left: "80px",
          width: "598px",
          height: "465.2px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "flex-start",
          zIndex: 2,
        }}
      >
        {/* Pill badge — 270.6 × 51.2 black pill with the brand gradient
            painted onto the text via background-clip. */}
        <div
          style={{
            boxSizing: "border-box",
            width: "270.6px",
            height: "51.2px",
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
              fontSize: "19.2px",
              lineHeight: "31.2px",
              letterSpacing: 0,
              textTransform: "uppercase",
              backgroundImage:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Your Trading Toolkit
          </span>
        </div>

        <h1
          style={{
            width: "640px",
            height: "186px",
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "56px",
            lineHeight: "110%",
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          Professional Trading
          <br />
          Tools that Give You
          <br />
          The Edge
        </h1>

        <p
          style={{
            width: "614px",
            height: "56px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "28px",
            letterSpacing: 0,
            color: "#94A3B8",
            margin: 0,
          }}
        >
          Analyze markets, manage risk, and execute strategies with powerful
          tools built for forex, crypto, commodities, and global markets.
        </p>

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Link
            href="/register"
            className="btn-text"
            style={{
              boxSizing: "border-box",
              width: "233px",
              height: "48px",
              padding: "11px 24px",
              gap: "16px",
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
          {/* Try Free Demo — same 233 × 48 footprint as the primary CTA,
              but rendered with a 1px gradient stroke (outer wrapper paints
              the gradient, inner div carries the transparent fill).  This
              is the same canonical workaround we use elsewhere to combine
              border-image with border-radius. */}
          <div
            style={{
              boxSizing: "border-box",
              width: "233px",
              height: "48px",
              padding: "1px",
              borderRadius: "8px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            }}
          >
            <Link
              href="/demo"
              style={{
                boxSizing: "border-box",
                width: "100%",
                height: "100%",
                padding: "10px 23px",
                gap: "16px",
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
              Try Free Demo
            </Link>
          </div>
        </div>

        {/* Proof-points — rendered as a single 614 × 28 text line with
            inline ✔ marks (treated as part of the text run, not as
            separate icon nodes). */}
        <div
          style={{
            width: "614px",
            height: "28px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "28px",
            letterSpacing: 0,
            color: "#FFFFFF",
            whiteSpace: "nowrap",
          }}
        >
          {PROOF_POINTS_LINE}
        </div>
      </div>
    </section>
  );
}
