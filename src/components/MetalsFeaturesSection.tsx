import Image from "next/image";

const features = [
  {
    number: "01.",
    title: "Diversification Options",
    description: "Trade multiple metals in one account.",
    image:
      "/spot%20metals/Why%20Choose%20Finsai%20Trade%20for%20Metals%20Trading/Diversification%20Options.jpg",
  },
  {
    number: "02.",
    title: "Intuitive Trading Platform",
    description: "Easy market access with a powerful interface.",
    image:
      "/spot%20metals/Why%20Choose%20Finsai%20Trade%20for%20Metals%20Trading/Intuitive%20Trading%20Platform.jpg",
  },
  {
    number: "03.",
    title: "Professional Tools",
    description: "Use real-time charts, market analysis, and trading tools.",
    image:
      "/spot%20metals/Why%20Choose%20Finsai%20Trade%20for%20Metals%20Trading/Professional%20Tools.jpg",
  },
  {
    number: "04.",
    title: "Fast Order Execution",
    description: "Execute metals trades with speed and precision.",
    image:
      "/spot%20metals/Why%20Choose%20Finsai%20Trade%20for%20Metals%20Trading/Fast%20Order%20Execution_v2.jpg",
  },
  {
    number: "05.",
    title: "Built-In Risk Controls",
    description: "Manage exposure using advanced protection tools.",
    image:
      "/spot%20metals/Why%20Choose%20Finsai%20Trade%20for%20Metals%20Trading/Built-In%20Risk%20Controls.jpg",
  },
];

export default function MetalsFeaturesSection() {
  return (
    <section
      className="metals-features"
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
        Why Choose Finsai Trade for Metals Trading
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
        Trade precious metals with an online broker providing flexible pricing, powerful tools, and multi-asset access.
      </p>

      <div
        className="metals-features-grid"
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
    <div
      className="metals-feature-card"
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
        <div
          className="metals-feature-image"
          style={{
            position: "absolute",
            top: 35.68,
            left: "50%",
            transform: "translateX(-50%)",
            width: 99,
            height: 100.79,
          }}
        >
          <Image src={image} alt="" fill sizes="99px" style={{ objectFit: "contain" }} />
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

        <span
          className="metals-feature-number"
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
