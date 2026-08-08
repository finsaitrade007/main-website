import Image from "next/image";

const ASSET = "/forex/Why%20Choose%20Finsai%20Trade%20for%20Forex%20Trading%3F";

const featureCards = [
  {
    title: "Low Spreads",
    description: "Trade with spreads starting from 0.0 pips to help keep your trading costs low",
    // Figma pairs this card with the toolbox artwork; the two JPGs were
    // authored under the opposite names, so the paths are crossed here.
    image: `${ASSET}/Free%20Trading%20Tools_v1.jpg`,
  },
  {
    title: "Fast Trade Execution",
    description: "Place your trades quickly with reliable execution designed to reduce delays.",
    image: `${ASSET}/Fast_execution_v1.jpg`,
  },
  {
    title: "Flexible Leverage",
    description: "Choose leverage of up to 1:500 based on your trading style and risk preference.",
    image: `${ASSET}/Flexible%20Leverage_v1.jpg`,
  },
  {
    title: "Free Trading Tools",
    description: "Access market insights and trading tools in one place.",
    image: `${ASSET}/Low%20Spreads_v1.jpg`,
  },
  {
    title: "Transparent Pricing",
    description: "Know exactly what you pay with clear pricing and no hidden fees.",
    image: `${ASSET}/Transparent%20Pricing_v1.jpg`,
  },
  {
    title: "Online Customer Support",
    description: "Get help whenever the forex market is open with our dedicated support team.",
    image: `${ASSET}/Online%20Customer%20Support_v1.jpg`,
  },
];

const miniCards = [
  {
    title: "EUR/USD",
    descriptionLines: ["The world's most traded currency pair"],
    image: `${ASSET}/euro_dollar.jpg`,
    imageWidth: 79,
    imageHeight: 81,
    imageTop: 30,
    imageLeft: 11,
    textLeft: 102,
    textWidth: 182,
  },
  {
    title: "GBP/USD",
    descriptionLines: ["Known for high volatility and liquidity."],
    image: `${ASSET}/GBP%3AUSD.jpg`,
    imageWidth: 80,
    imageHeight: 81,
    imageTop: 30,
    imageLeft: 314,
    textLeft: 406,
    textWidth: 162,
  },
  {
    title: "USD/JPY",
    descriptionLines: ["A key pair for Asian market trading. "],
    image: `${ASSET}/USD%3AJPY.jpg`,
    imageWidth: 80,
    imageHeight: 81,
    imageTop: 30,
    imageLeft: 598,
    textLeft: 690,
    textWidth: 258,
  },
  {
    title: "AUD/USD",
    descriptionLines: ["Influenced by commodity and risk trends."],
    image: `${ASSET}/AUD%3AUSD.jpg`,
    imageWidth: 79,
    imageHeight: 80,
    imageTop: 30,
    imageLeft: 978,
    textLeft: 1069,
    textWidth: 194,
  },
];

const miniPartitions = [292, 576, 956];

export default function ForexFeaturesSection() {
  return (
    <section
      className="forex-features commodities-features"
      style={{
        background: "#050208",
        width: "100%",
        maxWidth: 1440,
        margin: "0 auto",
        padding: "64px 64px 48px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          margin: "0 0 12px",
          textAlign: "center",
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 700,
          fontSize: "clamp(24px, 2.6vw, 36px)",
          color: "#FFFFFF",
        }}
      >
        Why Choose Finsai Trade for Forex Trading?
      </h2>
      <p
        style={{
          margin: "0 auto 48px",
          maxWidth: 760,
          textAlign: "center",
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.6,
          color: "#94A3B8",
        }}
      >
        Everything you need to trade the forex market with confidence.
      </p>

      <div
        className="forex-features-grid commodities-features-grid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          rowGap: 16,
          width: "100%",
          maxWidth: 1271,
          margin: "0 auto 18px",
        }}
      >
        {featureCards.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>

      <div
        className="forex-mini-wrap commodities-mini-wrap"
        style={{
          width: "100%",
          maxWidth: 1271,
          margin: "0 auto",
          borderRadius: 12,
          padding: 1,
          boxSizing: "border-box",
          background:
            "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
        }}
      >
        <div
          className="forex-mini-grid commodities-mini-grid"
          style={{
            position: "relative",
            width: "100%",
            height: 152,
            borderRadius: 11,
            background: "#050208",
            overflow: "hidden",
          }}
        >
          {miniPartitions.map((left) => (
            <div
              key={left}
              aria-hidden
              style={{
                position: "absolute",
                top: 33,
                left,
                width: 0.5,
                height: 79,
                background: "#056FB4",
              }}
            />
          ))}

          {miniCards.map((item) => (
            <div key={item.title}>
              <div
                className="forex-mini-image commodities-mini-image"
                style={{
                  position: "absolute",
                  top: item.imageTop,
                  left: item.imageLeft,
                  width: item.imageWidth,
                  height: item.imageHeight,
                }}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes={`${item.imageWidth}px`}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 36,
                  left: item.textLeft,
                  width: item.textWidth,
                }}
              >
                <h3
                  style={{
                    margin: "0 0 6px",
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 400,
                    fontSize: 21,
                    lineHeight: "100%",
                    color: "#036FE3",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "24.77px",
                    color: "#7F8D9E",
                    minHeight: "49.54px",
                  }}
                >
                  {item.descriptionLines[0]}
                  <br />
                  {item.descriptionLines[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div
      className="forex-feature-card commodities-feature-card"
      style={{
        width: 395,
        height: 274,
        borderRadius: 15,
        padding: 1,
        boxSizing: "border-box",
        background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 14,
          background: "#050208",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <div
          className="forex-feature-image commodities-feature-image"
          style={{
            position: "absolute",
            top: 15,
            left: 29,
            width: 118,
            height: 97,
            opacity: 0.9,
          }}
        >
          <Image src={image} alt="" fill sizes="118px" style={{ objectFit: "contain" }} />
        </div>

        <h3
          style={{
            position: "absolute",
            top: 130,
            left: 29,
            width: 341,
            height: 29,
            margin: 0,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 600,
            fontSize: 24,
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#D2D3D5",
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </h3>

        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 168,
            left: 29,
            width: 42.81,
            height: 2.68,
            borderRadius: 999,
            background: "#056FB4",
          }}
        />

        <p
          style={{
            position: "absolute",
            top: 186,
            left: 29,
            width: 341,
            height: 57,
            margin: 0,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: 17,
            lineHeight: "25.5px",
            letterSpacing: "0%",
            color: "#8D94A0",
            textAlign: "left",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
