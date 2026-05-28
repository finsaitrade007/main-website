export default function AboutRecognitionSection() {
  return (
    <section style={{ background: "#050208", padding: "60px 0 80px" }}>
      <div
        style={{
          width: "1280px",
          maxWidth: "calc(100% - 80px)",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          textAlign: "center",
        }}
      >
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
          Recognized for Elite Trading{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Excellence
          </span>
        </h2>
        <p
          style={{
            margin: 0,
            maxWidth: "720px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "22px",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          Independently rated as one of the most trusted and rewarding trading
          ecosystems on the market.
        </p>

        <div
          style={{
            marginTop: "40px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            justifyItems: "center",
            gap: "32px",
          }}
        >
          <AwardBlock label="World Forex Award" subtitle="Best Multi-Asset Broker 2024" />

          <div
            style={{
              padding: "32px 48px",
              borderRadius: "20px",
              border: "1px solid rgba(125,185,214,0.2)",
              background:
                "linear-gradient(157.26deg, rgba(10,18,32,0.85) 0%, rgba(5,111,180,0.18) 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              minWidth: "260px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 700,
                fontSize: "56px",
                lineHeight: "60px",
                color: "#FFFFFF",
              }}
            >
              168M+
            </div>
            <div
              style={{
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontSize: "13px",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              Monthly Deals
            </div>
            <div
              style={{
                marginTop: "16px",
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 600,
                fontSize: "20px",
                color: "#FFFFFF",
              }}
            >
              2M+
            </div>
            <div
              style={{
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontSize: "12px",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Yearly Trades
            </div>
          </div>

          <AwardBlock label="Iconic Finance Expo" subtitle="Industry Innovation 2023" mirror />
        </div>
      </div>
    </section>
  );
}

function AwardBlock({
  label,
  subtitle,
  mirror = false,
}: {
  label: string;
  subtitle: string;
  mirror?: boolean;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "240px",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      <LaurelWreath flip={mirror} />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 600,
          fontSize: "14px",
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        {label}
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "11px",
          color: "rgba(255,255,255,0.55)",
          textAlign: "center",
        }}
      >
        {subtitle}
      </div>
    </div>
  );
}

function LaurelWreath({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="240"
      height="200"
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        inset: 0,
        transform: flip ? "scaleX(-1)" : undefined,
      }}
      aria-hidden
    >
      <defs>
        <linearGradient id={`laurel-${flip ? "r" : "l"}`} x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#7DB9D6" />
          <stop offset="1" stopColor="#056FB4" />
        </linearGradient>
      </defs>
      {/* Left laurel */}
      <g
        stroke={`url(#laurel-${flip ? "r" : "l"})`}
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M70 30 C 50 70, 50 130, 70 170" />
        <path d="M60 50 q-10 5 -10 18" />
        <path d="M55 75 q-12 4 -14 18" />
        <path d="M52 105 q-13 0 -16 18" />
        <path d="M55 135 q-12 -2 -14 16" />
        <path d="M62 160 q-10 -3 -12 12" />

        <path d="M170 30 C 190 70, 190 130, 170 170" />
        <path d="M180 50 q10 5 10 18" />
        <path d="M185 75 q12 4 14 18" />
        <path d="M188 105 q13 0 16 18" />
        <path d="M185 135 q12 -2 14 16" />
        <path d="M178 160 q10 -3 12 12" />
      </g>
    </svg>
  );
}
