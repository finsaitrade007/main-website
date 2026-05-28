import Link from "next/link";

export default function ToolsCTASection() {
  return (
    <section style={{ background: "#050208", padding: "60px 0 100px" }}>
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(5,111,180,0.45)",
            background:
              "linear-gradient(137.88deg, #050208 1.04%, rgba(5,111,180,0.35) 536.19%)",
            padding: "64px 80px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "20px",
          }}
        >
          {/* Decorative wallet/lock glyph above the headline */}
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 30% 30%, rgba(70,140,210,0.4) 0%, rgba(5,111,180,0.12) 60%, rgba(0,0,0,0.6) 100%)",
              border: "1px solid rgba(125,185,214,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#tcta-grad)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="tcta-grad" x1="0" y1="0" x2="24" y2="24">
                  <stop stopColor="#7DB9D6" />
                  <stop offset="1" stopColor="#2EA8FF" />
                </linearGradient>
              </defs>
              <path d="M9 5l-4 4 4 4" />
              <path d="M15 19l4-4-4-4" />
              <path d="M5 9h10" />
              <path d="M9 15h10" />
            </svg>
          </div>

          <h2
            className="section-title"
            style={{ margin: 0, maxWidth: "640px" }}
          >
            Trade with the right tools at your side
          </h2>

          <p
            className="section-desc"
            style={{
              maxWidth: "560px",
              margin: 0,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Open a free trial account and explore every Finsai tool — no
            commitment, no commitment, full access.
          </p>

          <Link
            href="/register"
            className="btn-text"
            style={{
              padding: "14px 32px",
              borderRadius: "8px",
              background:
                "linear-gradient(90deg, #496DAB 0%, #496DAB 50%, #41ABE7 75%, #48C3F4 100%)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              marginTop: "8px",
            }}
          >
            Start a Free Trial
          </Link>
        </div>
      </div>
    </section>
  );
}
