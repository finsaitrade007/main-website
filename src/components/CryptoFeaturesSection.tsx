import Image from "next/image";

const KF =
  "/crypto-page/Why%20Choose%20Finsai%20Trade%20for%20Crypto%20Trading%3F";

const featureCards = [
  {
    title: "100+ Crypto Markets",
    description: "Access a vast range of digital assets including Bitcoin, Ethereum, and more.",
    image: `${KF}/120%2B%20Cryptocurrencies.jpg`,
  },
  {
    title: "High Leverage",
    description: "Enjoy competitive leverage options for your crypto trading positions.",
    image: `${KF}/High%20Leverage.jpg`,
  },
  {
    title: "Long and Short",
    description: "Trade on both rising and falling markets for comprehensive opportunities.",
    image: `${KF}/long_short.jpg`,
  },
  {
    title: "Secure Fund Storage",
    description: "Your assets are stored in secure wallets with multi-layer security.",
    image: `${KF}/Secure%20Fund%20Storage.jpg`,
  },
];

const bottomFeatures = [
  {
    title: "Regulated Platform",
    description: "Licensed & trusted trading environment.",
    image: `${KF}/Secure%20%26%20Trusted.jpg`,
  },
  {
    title: "24/7 Expert Support",
    description: "Professional help available around the clock.",
    image: `${KF}/24%3A7%20Expert%20Support.jpg`,
  },
  {
    title: "Deep Liquidity",
    description: "Smooth fills across major crypto markets.",
    image: `${KF}/Deep%20Liquidity.jpg`,
  },
  {
    title: "Low Fees",
    description: "Competitive pricing with transparent costs.",
    image: `${KF}/Low%20fees.jpg`,
  },
];

export default function CryptoFeaturesSection() {
  return (
    <section
      className="crypto-features mt5-features"
      style={{
        position: "relative",
        background: "#050208",
        width: "100%",
        maxWidth: 1440,
        height: 944,
        margin: "0 auto",
        padding: "56px 64px 48px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1312, margin: "0 auto", height: "100%" }}>
        <h2
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 700,
            fontSize: "clamp(28px, 3vw, 36px)",
            color: "#FFFFFF",
            textAlign: "center",
            margin: "0 0 16px",
          }}
        >
          Why Choose Finsai Trade for Crypto Trading?
        </h2>
        <p
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "clamp(14px, 1.1vw, 16px)",
            color: "#94A3B8",
            textAlign: "center",
            maxWidth: 820,
            margin: "0 auto clamp(40px, 5vw, 56px)",
            lineHeight: 1.6,
          }}
        >
          Gain access to high leverage and advanced tools for trading a wide range of popular and
          innovative digital assets.
        </p>

        <div
          className="mt5-features-main"
          style={{
            position: "relative",
            width: "100%",
            left: 30,
            maxWidth: 636,
          }}
        >
          <div
            className="mt5-features-cards"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 310px)",
              gap: 16,
              justifyContent: "start",
            }}
          >
            {featureCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>

        <div
          className="mt5-features-hero"
          style={{
            position: "absolute",
            top: 195.27,
            left: 760.56,
            width: 586.01,
            height: 556.85,
            zIndex: 1,
          }}
        >
          <Image
            src={`${KF}/Why%20Choose%20Finsai%20Trade%20for%20Crypto%20Trading.jpeg`}
            alt="Why choose Finsai Trade for crypto trading"
            width={586}
            height={557}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        <div
          className="mt5-features-bottom-wrap"
          style={{
            marginTop: 24,
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
            maxWidth: 1251.32,
            borderRadius: 10.94,
            padding: 0.91,
            boxSizing: "border-box",
            background:
              "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
          }}
        >
          <div
            className="mt5-features-bottom crypto-features-bottom"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              width: "100%",
              height: 109.36,
              borderRadius: 10.03,
              background: "#000610",
              overflow: "hidden",
              boxSizing: "border-box",
            }}
          >
            {bottomFeatures.map((item, i) => (
              <div
                key={item.title}
                className="mt5-features-bottom-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "0 18px",
                  height: "100%",
                  borderLeft:
                    i > 0 ? "1px solid rgba(1, 100, 188, 0.35)" : undefined,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: 44,
                    height: 44,
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="44px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter, Inter)",
                      fontWeight: 600,
                      fontSize: 13,
                      color: "#D2D3D5",
                      marginBottom: 2,
                    }}
                  >
                    {item.title}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-inter, Inter)",
                      fontWeight: 400,
                      fontSize: 12,
                      color: "#94A3B8",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
      className="mt5-feature-card"
      style={{
        width: 310,
        height: 264,
        borderRadius: 12,
        padding: 0.91,
        boxSizing: "border-box",
        background:
          "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 11.09,
          background: "#000713",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <div
          className="mt5-feature-card-image"
          style={{
            position: "absolute",
            top: 18,
            left: 82.93,
            width: 125.77,
            height: 90,
          }}
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="126px"
            style={{ objectFit: "contain" }}
          />
        </div>
        <h3
          style={{
            position: "absolute",
            top: 118,
            left: 26.43,
            width: 260.65,
            margin: 0,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "100%",
            color: "#D2D3D5",
          }}
        >
          {title}
        </h3>
        <p
          className="mt5-feature-card-text"
          style={{
            position: "absolute",
            top: 146,
            left: 26.43,
            width: 260.65,
            height: 90,
            margin: 0,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "22px",
            color: "#7C828B",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
