import Image from "next/image";

const ASSET = "/indices/Why%20Choose%20Finsai%20Trade%20for%20Indices%20Trading%3F";

const featureCards = [
  {
    title: "Access Global Indices",
    description: "Trade major global indices from one account.",
    image: `${ASSET}/Access%20Global%20Indices.jpg`,
  },
  {
    title: "Trade Rising and Falling Markets",
    description: " Go long or short with index CFDs.",
    image: `${ASSET}/Trade%20Rising%20and%20Falling%20Markets.jpg`,
  },
  {
    title: "Flexible Trade Sizes",
    description: "Start with smaller trade sizes that suit your budget.",
    image: `${ASSET}/Flexible%20Trade%20Sizes_v2.jpg`,
  },
  {
    title: "Free Learning Resources",
    description: "Access trading guides, tutorials, and market insights.",
    image: `${ASSET}/Free%20Learning%20Resources.jpg`,
  },
];

export default function IndicesFeaturesSection() {
  return (
    <section
      className="indices-features"
      style={{
        background: "#050208",
        width: "100%",
        maxWidth: 1440,
        margin: "0 auto",
        padding: "64px 64px 56px",
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
        Why Choose Finsai Trade for Indices Trading?
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
        Trade major global indices with low spreads, flexible trade sizes, and tools designed to help you trade with confidence. 
      </p>

      <div
        className="indices-features-layout"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          maxWidth: 1271,
          margin: "0 auto",
        }}
      >
        <div
          className="indices-features-visual"
          style={{
            position: "relative",
            width: 560,
            height: 480,
            flexShrink: 0,
          }}
        >
          <Image
            src={`${ASSET}/Why%20Choose%20Finsai%20Trade%20for%20Indices%20Trading_v1.jpeg`}
            alt=""
            fill
            sizes="560px"
            style={{ objectFit: "contain", mixBlendMode: "screen" }}
          />
        </div>

        <div
          className="indices-features-grid"
          style={{
          alignItems: "stretch",
            display: "grid",
            gridTemplateColumns: "repeat(2, 274px)",
            gap: 16,
            flexShrink: 0,
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
      className="indices-feature-card"
      style={{
        width: 274,
        // Brought into the same structure as every other market card: flex
        // column, minHeight so a longer description grows the card instead of
        // being clipped, and the row stretched so cards finish level.
        minHeight: 238,
        borderRadius: 13.03,
        border: "0.87px solid #001E40",
        background: "#000817",
        boxSizing: "border-box",
        overflow: "hidden",
        padding: "22px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 72,
          height: 60,
          flexShrink: 0,
        }}
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="72px"
          style={{ objectFit: "contain", mixBlendMode: "screen" }}
        />
      </div>
      <h3
        style={{
          margin: "16px 0 0",
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 600,
          fontSize: 18,
          lineHeight: "120%",
          color: "#D2D3D5",
          textAlign: "left",
        }}
      >
        {title}
      </h3>
      {/* Divider: every other market card has one between heading and body.
          Indices was the only page missing it. */}
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
          margin: "14px 0 0",
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "21px",
          color: "#8D94A0",
          textAlign: "left",
        }}
      >
        {description}
      </p>
    </div>
  );
}
