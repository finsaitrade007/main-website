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
          alignItems: "stretch",
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
            minHeight: 152,
            borderRadius: 11,
            background: "#050208",
            overflow: "hidden",
            boxSizing: "border-box",
            // Was four cards absolutely positioned at hand-tuned offsets
            // (imageLeft 11 / 314 / 598 / 978) with divider lines at
            // 292 / 576 / 956 — spacings of 303, 284 and 380px. That uneven
            // rhythm is the imbalance flagged in review. Four equal grid
            // columns with CSS dividers make the spacing identical by
            // construction, whatever the copy length.
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            alignItems: "center",
          }}
        >
          {miniCards.map((item, i) => (
            <div
              key={item.title}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                minWidth: 0,
                padding: "26px 20px",
                boxSizing: "border-box",
                borderLeft: i === 0 ? "none" : "0.5px solid #056FB4",
              }}
            >
              <div
                className="commodities-mini-image"
                style={{
                  position: "relative",
                  width: 80,
                  height: 81,
                  flexShrink: 0,
                }}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="80px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div style={{ minWidth: 0 }}>
                <h3
                  style={{
                    margin: "0 0 6px",
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 400,
                    fontSize: 21,
                    lineHeight: "125%",
                    color: "#036FE3",
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
                  }}
                >
                  {item.descriptionLines.join(" ")}
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
        // Was a fixed 274px with every child absolutely positioned and the
        // heading/paragraph pinned to fixed heights. Any variance in copy
        // length therefore broke the alignment between cards, which is the
        // unevenness flagged in review. Now a flex column: one set of spacing
        // rules, cards grow instead of clipping, and the row stretches so they
        // all finish level.
        minHeight: 274,
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
          minHeight: 272,
          borderRadius: 14,
          background: "#050208",
          overflow: "hidden",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          padding: "15px 29px 24px",
        }}
      >
        <div
          className="commodities-feature-image"
          style={{
            position: "relative",
            width: 118,
            height: 97,
            opacity: 0.9,
            flexShrink: 0,
          }}
        >
          <Image src={image} alt="" fill sizes="118px" style={{ objectFit: "contain" }} />
        </div>

        <h3
          style={{
            margin: "18px 0 0",
            minHeight: 29,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 600,
            fontSize: 24,
            lineHeight: "29px",
            letterSpacing: "0%",
            color: "#D2D3D5",
            textAlign: "left",
          }}
        >
          {title}
        </h3>

        <div
          aria-hidden
          style={{
            marginTop: 9,
            width: 42.81,
            height: 2.68,
            borderRadius: 999,
            background: "#056FB4",
            flexShrink: 0,
          }}
        />

        <p
          style={{
            margin: "16px 0 0",
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
