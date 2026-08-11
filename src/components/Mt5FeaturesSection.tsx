import Image from "next/image";

const featureCards = [
  {
    description:
      "Trade Forex, Stocks, Indices, Commodities, CFDs, and Precious Metals from one platform.",
    image: "/mt5-assets/features/cryptocurrencies.jpg",
  },
  {
    description:
      "Analyze markets using 80+ built-in technical indicators and advanced charting tools.",
    image: "/mt5-assets/features/secure-fund-storage.jpg",
  },
  {
    description: "Access 21 timeframes for detailed market analysis.",
    image: "/mt5-assets/features/high-leverage.jpg",
  },
  {
    description: "Build automated trading strategies using MQL5.",
    image: "/mt5-assets/features/long-or-short.jpg",
  },
];

const bottomFeatures = [
  {
    description:
      "Run Expert Advisors (EAs) and custom indicators for algorithmic trading.",
    image: "/mt5-assets/features/secure-trusted.jpg",
  },
  {
    description:
      "Use VPS hosting for uninterrupted automated Forex trading.",
    image: "/mt5-assets/features/expert-support.jpg",
  },
  {
    description:
      "Manage multiple trading accounts with Multi-Account Management (MAM).",
    image: "/mt5-assets/features/deep-liquidity.jpg",
  },
];

export default function Mt5FeaturesSection() {
  return (
    <section
      className="mt5-features"
      style={{
        position: "relative",
        background: "#050208",
        width: "100%",
        maxWidth: 1440,
        // minHeight, not height. The section carries overflow:hidden, so a
        // fixed 944px would clip the feature cards now that they grow with
        // their copy — the card fix would have been invisible without this.
        minHeight: 944,
        margin: "0 auto",
        padding: "56px 64px 48px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1312, margin: "0 auto", minHeight: "100%" }}>
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
          Key features
        </h2>
        <p
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "clamp(15px, 1.25vw, 18px)",
            color: "#FFFFFF",
            textAlign: "center",
            maxWidth: 820,
            margin: "0 auto clamp(40px, 5vw, 56px)",
            lineHeight: 1.6,
          }}
        >
          Equip your trading with institutional-grade technology, real-time
          market depth, and an expanded suite of analytical tools built for
          every strategy.
        </p>

        {/* Main: 2×2 cards left; image absolute on right */}
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
              alignItems: "stretch",
              gridTemplateColumns: "repeat(2, 310px)",
              gap: 16,
              justifyContent: "start",
            }}
          >
            {featureCards.map((card) => (
              <FeatureCard key={card.description} {...card} />
            ))}
          </div>
        </div>

        {/* Image — Figma: 586×556.85, top 195.27, left 760.56 */}
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
            src="/mt5-assets/features-center.jpeg"
            alt="MT5 multi-asset trading on Finsai Trade"
            width={586}
            height={557}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              mixBlendMode: "screen",
              display: "block",
            }}
          />
        </div>

        {/* Bottom bar — Figma: 1251×109, radius 10.94, bg #000610, gradient border */}
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
            className="mt5-features-bottom"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
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
                key={item.description}
                className="mt5-features-bottom-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "0 28px",
                  height: "100%",
                  borderLeft:
                    i > 0 ? "1px solid rgba(1, 100, 188, 0.35)" : undefined,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: 72,
                    height: 72,
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="72px"
                    style={{ objectFit: "contain", mixBlendMode: "screen" }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 400,
                    fontSize: 15.5,
                    color: "#94A3B8",
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  description,
  image,
}: {
  description: string;
  image: string;
}) {
  return (
    // Gradient border: outer pad 0.91px, inner fill #000713
    <div
      className="mt5-feature-card"
      style={{
        width: 310,
        // Was a fixed 264px with absolutely-positioned children and the
        // paragraph pinned to height:70 — six of the seven descriptions are
        // longer than that and were being clipped. Flex column + minHeight
        // lets the card grow; the grid stretches so cards stay level. The icon
        // now aligns left with the copy instead of sitting centred on its own.
        minHeight: 264,
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
          minHeight: 262,
          borderRadius: 11.09,
          background: "#000713",
          boxSizing: "border-box",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "20px 26.43px 24px",
        }}
      >
        <div
          className="mt5-feature-card-image"
          style={{
            position: "relative",
            width: 168,
            height: 118,
            flexShrink: 0,
          }}
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="168px"
            style={{ objectFit: "contain", mixBlendMode: "screen" }}
          />
        </div>
        <p
          className="mt5-feature-card-text"
          style={{
            margin: "18px 0 0",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "25px",
            letterSpacing: "0%",
            color: "#7C828B",
            textAlign: "left",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
