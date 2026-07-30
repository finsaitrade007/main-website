import Image from "next/image";

const featureCards = [
  {
    title: "Diverse Asset Range",
    description: "Trade energy, agriculture, and raw materials",
    image:
      "/commodities/Why%20Choose%20Finsai%20Trade%20for%20Commodities%20Trading/Diverse%20Asset%20Range.jpg",
  },
  {
    title: "Supply-Demand Driven",
    description: "Capitalize on global commodity price shifts",
    image:
      "/commodities/Why%20Choose%20Finsai%20Trade%20for%20Commodities%20Trading/Supply-Demand%20Driven.jpg",
  },
  {
    title: "Seasonal Opportunities",
    description: "Trade patterns tied to production cycles",
    image:
      "/commodities/Why%20Choose%20Finsai%20Trade%20for%20Commodities%20Trading/Seasonal%20Opportunities.jpg",
  },
  {
    title: "Portfolio Diversification",
    description: "Balance risk beyond stocks and currencies",
    image:
      "/commodities/Why%20Choose%20Finsai%20Trade%20for%20Commodities%20Trading/Portfolio%20Diversification.jpg",
  },
  {
    title: "Transparent Pricing",
    description: "Benefit from competitive spreads and straightforward pricing with no hidden costs.",
    image:
      "/commodities/Why%20Choose%20Finsai%20Trade%20for%20Commodities%20Trading/Transparent%20Pricing.jpg",
  },
  {
    title: "Global Market Coverage",
    description: "Access commodities from markets worldwide",
    image:
      "/commodities/Why%20Choose%20Finsai%20Trade%20for%20Commodities%20Trading/Global%20Market%20Coverage.jpg",
  },
];

const miniCards = [
  {
    title: "Precious Metals",
    descriptionLines: ["Trade gold, silver, and", "precious metals."],
    image:
      "/commodities/Why%20Choose%20Finsai%20Trade%20for%20Commodities%20Trading/Precious%20Metals.jpg",
    imageWidth: 79,
    imageHeight: 81,
    imageTop: 30,
    imageLeft: 11,
    textLeft: 102,
    textWidth: 182,
  },
  {
    title: "Energy Markets",
    descriptionLines: ["Access oil, gas, and", "energy commodities."],
    image:
      "/commodities/Why%20Choose%20Finsai%20Trade%20for%20Commodities%20Trading/Energy%20Markets.jpg",
    imageWidth: 80,
    imageHeight: 81,
    imageTop: 30,
    imageLeft: 314,
    textLeft: 406,
    textWidth: 162,
  },
  {
    title: "Agricultural Commodities",
    descriptionLines: ["Trade coffee, sugar, wheat,", "corn, and soft commodities."],
    image:
      "/commodities/Why%20Choose%20Finsai%20Trade%20for%20Commodities%20Trading/Agricultural%20Commodities.jpg",
    imageWidth: 80,
    imageHeight: 81,
    imageTop: 30,
    imageLeft: 598,
    textLeft: 690,
    textWidth: 258,
  },
  {
    title: "Industrial Metals",
    descriptionLines: ["Get exposure to copper", "and aluminum markets."],
    image:
      "/commodities/Why%20Choose%20Finsai%20Trade%20for%20Commodities%20Trading/Industrial%20Metals.jpg",
    imageWidth: 79,
    imageHeight: 80,
    imageTop: 30,
    imageLeft: 978,
    textLeft: 1069,
    textWidth: 194,
  },
];

const miniPartitions = [292, 576, 956];

export default function CommoditiesFeaturesSection() {
  return (
    <section
      className="commodities-features"
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
        Why Choose Finsai Trade for Commodities Trading
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
        Trade global commodities with competitive pricing, flexible trading options, and tools to help you trade with confidence.
      </p>

      <div
        className="commodities-features-grid"
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
        className="commodities-mini-wrap"
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
          className="commodities-mini-grid"
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
                className="commodities-mini-image"
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
      className="commodities-feature-card"
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
        {/* Figma: 118×97 @ top 15, left 29, opacity 0.9 */}
        <div
          className="commodities-feature-image"
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

        {/* Heading — 341×29 @ top 130, left 29 — Inter 600 / 24 / #D2D3D5 */}
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

        {/* Blue line between heading and description */}
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

        {/* Desc — 341×57 @ top 186, left 29 — #8D94A0 */}
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
