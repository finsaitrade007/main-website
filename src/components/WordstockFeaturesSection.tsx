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
        height: 447,
        borderRadius: 19.62,
        padding: 0.89,
        boxSizing: "border-box",
        background: "linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%)",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 18.73,
          background: "#050208",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* Figma: 99×100.79 @ top 35.68 — centered horizontally in box */}
        <div
          className="wordstock-feature-image"
          style={{
            position: "absolute",
            top: 35.68,
            left: "50%",
            transform: "translateX(-50%)",
            width: 99,
            height: 100.79,
          }}
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="99px"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 157.87,
            left: 20,
            width: 42.81,
            height: 2.68,
            borderRadius: 999,
            background: "#056FB4",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 170,
            left: 20,
            width: 176.6,
          }}
        >
          <h3
            style={{
              width: 156.98,
              minHeight: 60.65,
              margin: "0 0 14px",
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
              width: 176.6,
              minHeight: 52,
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
        </div>

        {/* Figma: 63.33×48.16 @ top 377.23, left 50.84 — Inter 700 / 42.81 / #262D44 */}
        <span
          className="wordstock-feature-number"
          aria-hidden
          style={{
            position: "absolute",
            top: 377.23,
            left: 20,
            width: 63.33,
            height: 48.16,
            margin: 0,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 700,
            fontSize: 42.81,
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#262D44",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {number}
        </span>
      </div>
    </div>
  );
}
