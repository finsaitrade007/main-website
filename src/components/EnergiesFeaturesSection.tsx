import Image from "next/image";

const ASSET =
  "/energies/Why%20Choose%20Finsai%20Trade%20for%20Energies%20Trading%3F";

const featureCards = [
  {
    title: "Major Energy Assets",
    description: "Access crude oil, natural gas, and other leading global energy markets.",
    image: `${ASSET}/Major%20Energy%20Assets.jpg`,
  },
  {
    title: "Volatility Opportunities",
    description:
      "Capture short-term price movements driven by supply, demand, and market sentiment.",
    image: `${ASSET}/Volatility%20Opportunities.jpg`,
  },
  {
    title: "Geopolitical Exposure",
    description: "Energy markets are shaped by global events and policies.",
    image: `${ASSET}/Geopolitical%20Exposure.jpg`,
  },
  {
    title: "Fast Order Execution",
    description:
      "Execute energy trades quickly to respond to fast-changing market conditions.",
    image: `${ASSET}/Fast%20Order%20Execution.jpg`,
  },
  {
    title: "Flexible Trade Sizes",
    description: "Choose position sizes that match your trading strategy and risk appetite.",
    image: `${ASSET}/Flexible%20Trade%20Sizes.jpg`,
  },
  {
    title: "Round-the-Clock Access",
    description: "Access global energy markets nearly 24 hours a day, five days weekly.",
    image: `${ASSET}/Round-the-Clock%20Access.jpg`,
  },
];

const miniCards = [
  {
    title: "Brent & WTI",
    descriptionLines: ["Trade global benchmark crude oil markets."],
    image: `${ASSET}/Brent%20%26%20WTI.jpg`,
    imageWidth: 79,
    imageHeight: 81,
    imageTop: 30,
    imageLeft: 11,
    textLeft: 102,
    textWidth: 182,
  },
  {
    title: "Natural Gas",
    descriptionLines: ["One of the world's most traded commodities."],
    image: `${ASSET}/Natural%20Gas.jpg`,
    imageWidth: 80,
    imageHeight: 81,
    imageTop: 30,
    imageLeft: 314,
    textLeft: 406,
    textWidth: 162,
  },
  {
    title: "High Volatility",
    descriptionLines: ["Trade energy markets with competitive pricing."],
    image: `${ASSET}/High%20Liquidity.jpg`,
    imageWidth: 80,
    imageHeight: 81,
    imageTop: 30,
    imageLeft: 598,
    textLeft: 690,
    textWidth: 258,
  },
  {
    title: "Market Access",
    descriptionLines: ["Trade energy markets on one platform."],
    image: `${ASSET}/Global%20Market%20Access.jpg`,
    imageWidth: 79,
    imageHeight: 80,
    imageTop: 30,
    imageLeft: 978,
    textLeft: 1069,
    textWidth: 194,
  },
];

export default function EnergiesFeaturesSection() {
  return (
    <section
      className="energies-features commodities-features"
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
        Why Choose Finsai Trade for Energies Trading?
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
        Trading energy assets can be both challenging and rewarding with our platform.
      </p>

      <div
        className="energies-features-grid commodities-features-grid"
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
        className="energies-mini-wrap commodities-mini-wrap"
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
          className="energies-mini-grid commodities-mini-grid"
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
                className="energies-mini-image commodities-mini-image"
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
                  style={{ objectFit: "contain", mixBlendMode: "screen" }}
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
      className="energies-feature-card commodities-feature-card"
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
          alignItems: "flex-start",
          padding: "15px 29px 24px",
        }}
      >
        <div
          className="energies-feature-image commodities-feature-image"
          style={{
            position: "relative",
            width: 118,
            height: 97,
            // No opacity here: any value below 1 creates a stacking context,
            // which would isolate the image and stop mixBlendMode:"screen"
            // from reaching the card background — leaving the icon's black
            // JPEG square visible, which is the boxed look being fixed.
            flexShrink: 0,
          }}
        >
          <Image src={image} alt="" fill sizes="118px" style={{ objectFit: "contain", mixBlendMode: "screen" }} />
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
