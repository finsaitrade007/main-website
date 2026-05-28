type FeatureKey = "charts" | "data" | "ai" | "alerts";

type Feature = {
  iconKey: FeatureKey;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    iconKey: "charts",
    title: "Professional Analysis",
    description: "Deep dive into market dynamics with institutional tools.",
  },
  {
    iconKey: "data",
    title: "Live Market Data",
    description: "Real-time quotes and lightning-fast execution speed.",
  },
  {
    iconKey: "ai",
    title: "Risk Management",
    description: "Advanced calculators and margin alerts to stay safe.",
  },
  {
    iconKey: "alerts",
    title: "Strategy Support",
    description: "Backtesting engines to refine your trading edge.",
  },
];

function FeatureIcon({ iconKey }: { iconKey: FeatureKey }) {
  const id = `bf-${iconKey}`;
  const stroke = `url(#${id})`;
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const grad = (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="24" y2="24">
        <stop stopColor="#7DB9D6" />
        <stop offset="1" stopColor="#2EA8FF" />
      </linearGradient>
    </defs>
  );
  switch (iconKey) {
    case "charts":
      return (
        <svg {...common}>
          {grad}
          <path d="M4 19V5" />
          <path d="M20 19H4" />
          <path d="M7 15l3-4 3 3 5-7" />
        </svg>
      );
    case "data":
      return (
        <svg {...common}>
          {grad}
          <path d="M3 20V8" />
          <path d="M9 20V4" />
          <path d="M15 20v-9" />
          <path d="M21 20v-5" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          {grad}
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
        </svg>
      );
    case "alerts":
      return (
        <svg {...common}>
          {grad}
          <path d="M6 18h12l-1.5-2V11a4.5 4.5 0 0 0-9 0v5L6 18z" />
          <path d="M10 21h4" />
        </svg>
      );
  }
}

export default function ToolsBuiltForSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "1440px",
        maxWidth: "100%",
        height: "420px",
        margin: "0 auto",
        padding: "80px",
        boxSizing: "border-box",
        background: "#050208",
        opacity: 1,
      }}
    >
      <div
        style={{
          width: "1280px",
          maxWidth: "1280px",
          height: "260px",
          paddingLeft: "24px",
          paddingRight: "24px",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: "1fr 778.66px",
          gap: "64px",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "440px" }}>
          <h2
            style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 400,
              fontSize: "36px",
              lineHeight: "40px",
              letterSpacing: 0,
              color: "#F8FAFC",
              margin: 0,
            }}
          >
            Built for
            <br />
            Smarter Trading
          </h2>
          <p
            style={{
              width: "389.33px",
              height: "96px",
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: 0,
              color: "#FFFFFFBF",
              margin: "20px 0 0",
            }}
          >
            Our suite of trading tools is designed to empower
you at every step—from deep market analysis and
strategy development to precise execution and
robust risk control.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 377.33px)",
            gridTemplateRows: "repeat(2, 118px)",
            columnGap: "24px",
            rowGap: "24px",
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                width: "377.33px",
                height: "118px",
                padding: "1px",
                borderRadius: "12px",
                background:
                  "linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%)",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "11px",
                  background:
                    "linear-gradient(157.26deg, #050208 -0.93%, #056FB4 444.35%)",
                  padding: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(5,111,180,0.18)",
                    border: "1px solid rgba(125,185,214,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FeatureIcon iconKey={f.iconKey} />
                </div>
                <div
                  style={{
                    width: "275.03px",
                    minWidth: "275.03px",
                    height: "68px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-sora, Sora)",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "24px",
                      letterSpacing: "0.0049em",
                      color: "#FFFFFF",
                    }}
                  >
                    {f.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter, Inter)",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "20px",
                      letterSpacing: "0.001em",
                      color: "#94A3B8",
                    }}
                  >
                    {f.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
