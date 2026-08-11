import Image from "next/image";

const features = [
  {
    number: "01.",
    title: "Blue-Chip Access",
    description: "Trade shares of top companies",
    image:
      "/wordstock/Why%20Choose%20Finsai%20Trade%20for%20Stocks%20Trading%3F/Blue-Chip%20Access.jpg",
  },
  {
    number: "02.",
    title: "No Ownership Needed",
    description: "Trade the price movement without owning the asset.",
    image:
      "/wordstock/Why%20Choose%20Finsai%20Trade%20for%20Stocks%20Trading%3F/No%20Ownership%20Needed%20.jpg",
  },
  {
    number: "03.",
    title: "Low Trading Costs",
    description: "Enjoy tight spreads and low commissions.",
    image:
      "/wordstock/Why%20Choose%20Finsai%20Trade%20for%20Stocks%20Trading%3F/Low%20Trading%20Costs.jpg",
  },
  {
    number: "04.",
    title: "Live Price Streaming",
    description: " Trade stocks without buying shares",
    image:
      "/wordstock/Why%20Choose%20Finsai%20Trade%20for%20Stocks%20Trading%3F/Live%20Price%20Streaming%20.jpg",
  },
  {
    number: "05.",
    title: "Long or Short",
    description: " Trade stocks without buying shares",
    image:
      "/wordstock/Why%20Choose%20Finsai%20Trade%20for%20Stocks%20Trading%3F/Long%20or%20Short.jpg",
  },
];

export default function WordstockFeaturesSection() {
  return (
    <section
      className="wordstock-features"
      style={{
        background: "#050208",
        width: "100%",
        maxWidth: 1440,
        margin: "0 auto",
        padding: "64px 64px 80px",
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
        Why Choose Finsai Trade for Stocks Trading?
      </h2>
      <p
        style={{
          margin: "0 auto 48px",
          maxWidth: 720,
          textAlign: "center",
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: 1.6,
          color: "#94A3B8",
        }}
      >
        Trade global stock CFDs with an online broker you can trust across every
        platform.
      </p>

      <div
        className="wordstock-features-grid"
        style={{
          alignItems: "stretch",
          display: "flex",
          justifyContent: "center",
          gap: 16,
          paddingLeft: 25,
          paddingTop: 5,
          flexWrap: "wrap",
        }}
      >
        {features.map((feature) => (
          <FeatureCard key={feature.number} {...feature} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  number,
  title,
  description,
  image,
}: {
  number: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    // Gradient border: 0.89px, radius 19.62 — linear-gradient(180deg, #056FB4 → #7DB9D6)
    <div
      className="wordstock-feature-card"
      style={{
        width: 238,
        minHeight: 447,
        borderRadius: 19.62,
        padding: 0.89,
        boxSizing: "border-box",
        background: "linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%)",
        flexShrink: 0,
      }}
    >
      {/*
        Was a stack of absolutely-positioned children in a fixed 447px box:
        image @35.68 (centred), divider @157.87, copy @170, number @377.23. The
        copy used minHeight, so a longer description grew downwards and ran
        straight through the decorative number.

        Now a flex column. The number is pushed to the bottom with
        margin-top:auto so it can never collide with the paragraph, and the card
        grows instead of clipping. The icon is left-aligned with the heading,
        divider and paragraph rather than centred on its own.
      */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: 445,
          borderRadius: 18.73,
          background: "#050208",
          overflow: "hidden",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "32px 20px 24px",
        }}
      >
        <div
          className="wordstock-feature-image"
          style={{
            position: "relative",
            width: 99,
            height: 100.79,
            flexShrink: 0,
          }}
        >
          <Image src={image} alt="" fill sizes="99px" style={{ objectFit: "contain" }} />
        </div>

        <div
          aria-hidden
          style={{
            marginTop: 21.4,
            width: 42.81,
            height: 2.68,
            borderRadius: 999,
            background: "#056FB4",
            flexShrink: 0,
          }}
        />

        <h3
          style={{
            minHeight: 60.65,
            margin: "12.13px 0 14px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 600,
            fontSize: 22,
            lineHeight: "30.21px",
            color: "#D2D3D5",
            textAlign: "left",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 300,
            fontSize: 16.05,
            lineHeight: "25.66px",
            color: "#7D7E85",
            textAlign: "left",
          }}
        >
          {description}
        </p>

        <span
          className="wordstock-feature-number"
          aria-hidden
          style={{
            marginTop: "auto",
            paddingTop: 24,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 700,
            fontSize: 42.81,
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#262D44",
            textAlign: "left",
          }}
        >
          {number}
        </span>
      </div>
    </div>
  );
}
