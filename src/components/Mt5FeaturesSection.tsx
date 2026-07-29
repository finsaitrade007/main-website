import Image from "next/image";

const featureCards = [
  {
    title: "120+ Cryptocurrencies",
    description:
      "Trade a wide range of crypto CFDs alongside forex, metals, and indices on MT5.",
    image: "/mt5-assets/features/cryptocurrencies.jpg",
  },
  {
    title: "High Leverage",
    description:
      "Amplify your market exposure with flexible leverage suited to your strategy.",
    image: "/mt5-assets/features/high-leverage.jpg",
  },
  {
    title: "Long or Short",
    description:
      "Go long or short with hedging support so you can trade either market direction.",
    image: "/mt5-assets/features/long-or-short.jpg",
  },
  {
    title: "Deep Liquidity",
    description:
      "Access deep liquidity and competitive pricing for smoother order fills.",
    image: "/mt5-assets/features/deep-liquidity.jpg",
  },
];

const featurePills = [
  {
    title: "Secure & Trusted",
    description: "Trade on a regulated platform with transparent conditions.",
    image: "/mt5-assets/features/secure-trusted.jpg",
  },
  {
    title: "Secure Fund Storage",
    description: "Client funds protected with industry-standard safeguards.",
    image: "/mt5-assets/features/secure-fund-storage.jpg",
  },
  {
    title: "24/7 Expert Support",
    description: "Get help whenever markets move — day or night.",
    image: "/mt5-assets/features/expert-support.jpg",
  },
];

export default function Mt5FeaturesSection() {
  return (
    <section
      style={{
        background: "#050208",
        padding: "clamp(48px, 6vw, 100px) clamp(20px, 5.5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "clamp(28px, 3.2vw, 40px)",
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
            fontSize: 16,
            color: "#94A3B8",
            textAlign: "center",
            maxWidth: 720,
            margin: "0 auto 48px",
            lineHeight: 1.6,
          }}
        >
          Experience a professional trading environment with flexibility and
          superior control over your trading strategy.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "minmax(0, 1fr) minmax(260px, 0.85fr) minmax(0, 1fr)",
            gap: 24,
            alignItems: "center",
          }}
          className="mt5-features-grid"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {featureCards.slice(0, 2).map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1 / 1",
              maxWidth: 420,
              margin: "0 auto",
            }}
          >
            <Image
              src="/mt5-assets/features-center.jpeg"
              alt="Why choose Finsai Trade for crypto trading on MT5"
              fill
              sizes="(max-width: 900px) 80vw, 360px"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {featureCards.slice(2).map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 20,
            marginTop: 48,
          }}
          className="mt5-feature-pills"
        >
          {featurePills.map((pill) => (
            <div
              key={pill.title}
              style={{
                textAlign: "center",
                padding: "24px 16px",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: 72,
                  height: 72,
                  margin: "0 auto 14px",
                }}
              >
                <Image
                  src={pill.image}
                  alt=""
                  fill
                  sizes="72px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-sora, Sora)",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  margin: "0 0 8px",
                }}
              >
                {pill.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter, Inter)",
                  fontSize: 14,
                  color: "#94A3B8",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {pill.description}
              </p>
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
      style={{
        borderRadius: 24,
        padding: 1,
        background:
          "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
      }}
    >
      <div
        style={{
          borderRadius: 23,
          background:
            "linear-gradient(119.3deg, rgba(0,0,0,0) 23.34%, rgba(73,109,171,0.28) 96.36%), #050208",
          padding: "22px 20px",
          minHeight: 150,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 56,
            height: 56,
            marginBottom: 14,
          }}
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="56px"
            style={{ objectFit: "contain" }}
          />
        </div>
        <h3
          style={{
            fontFamily: "var(--font-sora, Sora)",
            fontSize: 20,
            fontWeight: 600,
            color: "#FFFFFF",
            margin: "0 0 8px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontSize: 14,
            color: "rgba(255,255,255,0.6)",
            margin: 0,
            lineHeight: 1.55,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
