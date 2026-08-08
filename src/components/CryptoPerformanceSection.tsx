import Image from "next/image";

const PERF = "/crypto-page/Real-Time%20Crypto%20Performance";

const performanceItems = [
  {
    title: "Wide Selection of Cryptos",
    description: "Bitcoin, Ethereum, and popular altcoins.",
    image: `${PERF}/Wide%20Selection%20of%20Cryptos.jpg`,
    height: 105,
    borderRadius: 9,
  },
  {
    title: "Transparent Pricing",
    description: "Tight spreads and clear trading conditions.",
    image: `${PERF}/Transparent%20Pricing%20copy.jpg`,
    height: 105,
    borderRadius: 12,
  },
  {
    title: "Secure Trading Environment",
    description: "Advanced encryption and trusted protection.",
    image: `${PERF}/Secure%20Trading%20Environment.jpg`,
    height: 104,
    borderRadius: 7,
  },
  {
    title: "Fast Withdrawals",
    description: "Smooth funding and withdrawal experience.",
    image: `${PERF}/Fast%20Withdrawals.jpg`,
    height: 104,
    borderRadius: 7,
  },
];

export default function CryptoPerformanceSection() {
  return (
    <section
      className="crypto-performance"
      style={{
        position: "relative",
        background: "#050208",
        width: "100%",
        maxWidth: 1440,
        height: 755,
        margin: "0 auto",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div
        className="crypto-performance-copy"
        style={{
          position: "absolute",
          top: 64,
          left: 100,
          width: 640,
          zIndex: 2,
        }}
      >
        <h2
          style={{
            margin: "0 0 12px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 700,
            fontSize: "clamp(28px, 3vw, 40px)",
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
            color: "#FFFFFF",
          }}
        >
          Real-Time Crypto Performance
        </h2>
        <p
          style={{
            margin: "0 0 28px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: 1.6,
            color: "#94A3B8",
            maxWidth: 600,
          }}
        >
          Track live crypto prices and use our calculator to estimate your margin or potential
          outcomes before you place a trade.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {performanceItems.map((item) => (
            <div
              key={item.title}
              className="crypto-performance-item"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                width: 640,
                height: item.height,
                borderRadius: item.borderRadius,
                border: "2px solid #0C2238",
                background: "#000714",
                padding: "0 18px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: 88,
                  height: 57,
                  flexShrink: 0,
                }}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="88px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    margin: "0 0 4px",
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 600,
                    fontSize: 18,
                    color: "#D2D3D5",
                  }}
                >
                  {item.title}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: "20px",
                    color: "#8D94A0",
                  }}
                >
                  {item.description}
                </p>
              </div>
              <span
                aria-hidden
                style={{
                  width: 28,
                  height: 28,
                  color: "#3E9BE8",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="crypto-performance-visual"
        style={{
          position: "absolute",
          top: 88,
          left: 780,
          width: 660,
          height: 578,
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <Image
          src={`${PERF}/Why%20Choose%20Finsai%20Trade%20for%20Crypto%20Trading_v1.jpeg`}
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 660px"
          className="crypto-performance-visual-img"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
    </section>
  );
}
