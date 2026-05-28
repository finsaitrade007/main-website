type Stat = {
  value: string;
  label: string;
};

const STATS: Stat[] = [
  { value: "4.8k", label: "Trustpilot Rating" },
  { value: "12+", label: "Years of Operation" },
  { value: "2.5k+", label: "Markets Available" },
  { value: "120+", label: "Countries Served" },
];

export default function AboutFinancialGrowthSection() {
  return (
    <section style={{ background: "#050208", padding: "80px 0" }}>
      <div
        style={{
          width: "1280px",
          maxWidth: "calc(100% - 80px)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 0.95fr",
          gap: "64px",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "44px",
              color: "#FFFFFF",
            }}
          >
            We drive financial growth
            <br />
            in the digital era.
          </h2>
          <p
            style={{
              margin: 0,
              maxWidth: "520px",
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "22px",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Our infrastructure powers traders, partners and institutions
            worldwide with deep liquidity, transparent pricing and engineering
            built for scale. Every quarter we double down on speed, security
            and global coverage so you can trade confidently in any market.
          </p>
          <p
            style={{
              margin: 0,
              maxWidth: "520px",
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "22px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            From a four-person desk to a global brand — the numbers speak for
            themselves.
          </p>

          <div
            style={{
              marginTop: "16px",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "12px",
            }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 700,
                    fontSize: "32px",
                    lineHeight: "36px",
                    backgroundImage:
                      "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 400,
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <QuadrantGraphic />
      </div>
    </section>
  );
}

function QuadrantGraphic() {
  return (
    <div
      style={{
        position: "relative",
        width: "440px",
        height: "320px",
        margin: "0 auto",
      }}
    >
      <svg
        viewBox="0 0 440 320"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="q-grad" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#7DB9D6" stopOpacity="0.6" />
            <stop offset="1" stopColor="#056FB4" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        {/* 4 tilted panels */}
        <g transform="translate(220 160) rotate(-12)">
          <rect
            x="-180"
            y="-130"
            width="160"
            height="120"
            rx="14"
            fill="url(#q-grad)"
            opacity="0.25"
            stroke="url(#q-grad)"
            strokeWidth="1.2"
          />
          <rect
            x="20"
            y="-130"
            width="160"
            height="120"
            rx="14"
            fill="url(#q-grad)"
            opacity="0.4"
            stroke="url(#q-grad)"
            strokeWidth="1.2"
          />
          <rect
            x="-180"
            y="10"
            width="160"
            height="120"
            rx="14"
            fill="url(#q-grad)"
            opacity="0.35"
            stroke="url(#q-grad)"
            strokeWidth="1.2"
          />
          <rect
            x="20"
            y="10"
            width="160"
            height="120"
            rx="14"
            fill="url(#q-grad)"
            opacity="0.25"
            stroke="url(#q-grad)"
            strokeWidth="1.2"
          />
        </g>
      </svg>
    </div>
  );
}
