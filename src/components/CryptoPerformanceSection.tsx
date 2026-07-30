import Image from "next/image";

const PERF = "/crypto-page/Real-Time%20Crypto%20Performance";

const performanceItems = [
  {
    title: "Wide Selection of Cryptos",
    description: "Choose from over 100+ popular digital assets.",
    image: `${PERF}/Wide%20Selection%20of%20Cryptos.jpg`,
    height: 105,
    borderRadius: 9,
  },
  {
    title: "Transparent Pricing",
    description: "Clear spread and pricing for every asset traded.",
    image: `${PERF}/Transparent%20Pricing%20copy.jpg`,
    height: 105,
    borderRadius: 12,
  },
  {
    title: "Secure Trading Environment",
    description: "Advanced security protocols and asset protection.",
    image: `${PERF}/Secure%20Trading%20Environment.jpg`,
    height: 104,
    borderRadius: 7,
  },
  {
    title: "Fast Withdrawals",
    description: "Quickly access your funds whenever you need them.",
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
          left: 64,
          width: 577,
          zIndex: 2,
        }}
      >
        <h2
          style={{
            margin: "0 0 12px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 700,
            fontSize: "clamp(24px, 2.6vw, 36px)",
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
            fontSize: 16,
            lineHeight: 1.6,
            color: "#94A3B8",
            maxWidth: 520,
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
                gap: 16,
                width: 577,
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
                  width: 56,
                  height: 56,
                  flexShrink: 0,
                }}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="56px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    margin: "0 0 4px",
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 600,
                    fontSize: 16,
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
                    fontSize: 14,
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
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: "#011327",
                  color: "#036FE3",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                →
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="crypto-performance-visual"
        style={{
          position: "absolute",
          top: 66,
          left: 597,
          width: 790,
          height: 648.62,
          zIndex: 1,
        }}
      >
        <Image
          src={`${PERF}/Why%20Choose%20Finsai%20Trade%20for%20Crypto%20Trading_v1.jpeg`}
          alt=""
          width={635}
          height={564}
          className="crypto-performance-visual-img"
          style={{
            position: "absolute",
            top: 23,
            left: 111,
            width: 635,
            height: 564,
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}
