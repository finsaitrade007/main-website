type Point = {
  title: string;
  description: string;
};

const POINTS: Point[] = [
  {
    title: "Our Mission",
    description:
      "Democratise access to global markets with technology and pricing that used to be reserved for institutions.",
  },
  {
    title: "Our Vision",
    description:
      "An ecosystem where every trader has the same edge as the world's top desks — wherever they live, whatever they trade.",
  },
  {
    title: "The Ecosystem",
    description:
      "From execution to insight, learning, automation and rewards — built end-to-end so nothing breaks at scale.",
  },
];

export default function AboutBuiltByTradersSection() {
  return (
    <section style={{ background: "#050208", padding: "60px 0" }}>
      <div
        style={{
          width: "1280px",
          maxWidth: "calc(100% - 80px)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.95fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
      >
        <OrbitGraphic />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
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
            Built by Traders,
            <br />
            Driven by Purpose
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
            We&apos;re a team of traders, engineers and partners who decided to
            build the platform we wished existed — opinionated about quality,
            obsessive about speed and committed to fairness.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginTop: "8px",
            }}
          >
            {POINTS.map((p) => (
              <div
                key={p.title}
                style={{
                  padding: "16px 18px",
                  borderRadius: "12px",
                  border: "1px solid rgba(125,185,214,0.18)",
                  background:
                    "linear-gradient(157.26deg, rgba(10,18,32,0.85) 0%, rgba(5,111,180,0.12) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#FFFFFF",
                  }}
                >
                  {p.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 400,
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {p.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OrbitGraphic() {
  const orbits = 8;
  const radius = 150;
  return (
    <div
      style={{
        position: "relative",
        width: "420px",
        height: "420px",
        margin: "0 auto",
      }}
    >
      <svg
        viewBox="-220 -220 440 440"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="orb-grad" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#7DB9D6" />
            <stop offset="1" stopColor="#056FB4" />
          </linearGradient>
          <radialGradient id="orb-core" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="rgba(5,111,180,0.55)" />
            <stop offset="1" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>

        {/* outer rings */}
        <circle r="190" stroke="rgba(125,185,214,0.16)" />
        <circle r="150" stroke="rgba(125,185,214,0.24)" />
        <circle r="110" stroke="rgba(125,185,214,0.32)" />

        {/* core */}
        <circle r="70" fill="url(#orb-core)" />
        <circle r="40" fill="#0B1726" stroke="url(#orb-grad)" strokeWidth="1.4" />
        <path
          d="M-16 0L0 -16L16 0L0 16Z"
          fill="url(#orb-grad)"
        />

        {/* satellites */}
        {Array.from({ length: orbits }).map((_, i) => {
          const a = (Math.PI * 2 * i) / orbits - Math.PI / 2;
          const x = Math.cos(a) * radius;
          const y = Math.sin(a) * radius;
          return (
            <g key={i}>
              <line
                x1="0"
                y1="0"
                x2={x}
                y2={y}
                stroke="rgba(125,185,214,0.18)"
                strokeWidth="1"
              />
              <circle
                cx={x}
                cy={y}
                r="20"
                fill="#0B1726"
                stroke="url(#orb-grad)"
                strokeWidth="1.4"
              />
              <SatelliteIcon x={x} y={y} index={i} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function SatelliteIcon({
  x,
  y,
  index,
}: {
  x: number;
  y: number;
  index: number;
}) {
  // A pool of tiny iconic glyphs (charts, candles, signals).
  const icons = [
    <path
      key="bar"
      d="M-7 4v-6M-2 4v-10M3 4v-4M8 4v-8"
      stroke="url(#orb-grad)"
      strokeWidth="1.4"
      strokeLinecap="round"
    />,
    <g key="candle">
      <path
        d="M0 -8v16"
        stroke="url(#orb-grad)"
        strokeWidth="1.2"
      />
      <rect x="-4" y="-4" width="8" height="8" fill="url(#orb-grad)" />
    </g>,
    <path
      key="line"
      d="M-8 4l4-6 4 3 4-7"
      stroke="url(#orb-grad)"
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <g key="dollar">
      <circle r="7" stroke="url(#orb-grad)" strokeWidth="1.2" fill="none" />
      <text
        textAnchor="middle"
        y="3"
        fontFamily="Inter"
        fontSize="10"
        fontWeight="700"
        fill="url(#orb-grad)"
      >
        $
      </text>
    </g>,
    <g key="globe">
      <circle r="7" stroke="url(#orb-grad)" strokeWidth="1.2" fill="none" />
      <path
        d="M-7 0h14M0 -7v14M-5 -4q5 8 10 0M-5 4q5 -8 10 0"
        stroke="url(#orb-grad)"
        strokeWidth="0.9"
        fill="none"
      />
    </g>,
    <path
      key="arrow"
      d="M-6 4l5 -6 4 3 4 -5"
      stroke="url(#orb-grad)"
      strokeWidth="1.4"
      strokeLinecap="round"
      fill="none"
    />,
    <g key="grid">
      <rect
        x="-7"
        y="-7"
        width="14"
        height="14"
        rx="2"
        stroke="url(#orb-grad)"
        strokeWidth="1.2"
        fill="none"
      />
      <path d="M0 -7v14M-7 0h14" stroke="url(#orb-grad)" strokeWidth="0.9" />
    </g>,
    <path
      key="lightning"
      d="M-3 -7l-3 8h4l-2 7 8 -10h-5l2 -5z"
      fill="url(#orb-grad)"
    />,
  ];
  return <g transform={`translate(${x} ${y})`}>{icons[index % icons.length]}</g>;
}
