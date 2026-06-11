import Link from "@/components/SmartLink";
import Image from "next/image";

const BTN_GRADIENT =
  "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)";
const TITLE_GRADIENT =
  "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)";

type Platform = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  cta?: { label: string; href: string };
  showAppStores?: boolean;
  reverse?: boolean;
};

const platforms: Platform[] = [
  {
    id: "mt5",
    title: "MT5",
    subtitle: "The World's Most Powerful Trading Platform",
    description:
      "Experience MetaTrader 5 - the globally trusted trading platform known for lightning-fast execution, elite analysis tools, and unmatched flexibility.",
    features: [
      "44+ advanced charting tools",
      "38 built-in indicators",
      "2,000+ custom indicators",
      "Analyze markets across 21 timeframes",
      "Build and automate strategies with Expert Advisors (EAs)",
      "Advanced  Back-testing tools",
    ],
    image: "/service/mt5-platform.png",
    imageAlt: "MetaTrader 5 platform",
    cta: {
      label: "Learn More About MT5",
      href: "https://fx.finsaitrade.com/auth/register",
    },
    reverse: false,
  },
  {
    id: "social",
    title: "Social Trading",
    subtitle: "Copy, Trade, or Earn with Social Trading",
    description:
      "Follow experienced traders or become a strategy provider. Copy expert trades live, or share your strategy and earn rewards.",
    features: [
      "Auto-Copy Execution",
      "Strategy Monetization",
      "Integrated Risk Controls",
      "Verified Performance Metrics",
    ],
    image: "/service/social-trading.png",
    imageAlt: "Social trading network",
    cta: {
      label: "Learn More About Social Trading",
      href: "https://finsaitrade.com/services/social-trading/",
    },
    reverse: true,
  },
  {
    id: "app",
    title: "App (Coming Soon)",
    subtitle: "Powerful Mobile Trading On The Go",
    description:
      "The Finsai Trade App puts fast, seamless multi-asset trading directly in your hands - anytime, anywhere.",
    features: [
      "1,000+ Instruments, One Tap",
      "Live News & Market Insights",
      "Risk-Free Demo Trading",
      "Copy Trading & Expert Signals",
      "Multi-Currency, All-in-One",
    ],
    image: "/service/app-coming-soon.png",
    imageAlt: "Finsai Trade mobile app",
    showAppStores: true,
    reverse: false,
  },
];

function PlayStoreBadge() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#000000" stroke="#1F2A44" />
      <path
        d="M16.4 14.6c-.3.3-.4.7-.4 1.3v16.2c0 .6.1 1 .4 1.3l.1.1L25.5 24v-.2l-9-9.3-.1.1z"
        fill="#5BC9F4"
      />
      <path
        d="M28.5 27 25.5 24v-.2l3-3 .1.1 3.6 2c1 .6 1 1.5 0 2.1l-3.7 2z"
        fill="#FCD009"
      />
      <path
        d="M28.6 27 25.5 24l-9.1 9.1c.3.3.9.4 1.6 0L28.6 27z"
        fill="#E73730"
      />
      <path
        d="M28.6 21 17 14.4c-.7-.4-1.3-.3-1.6 0L24.5 24l4.1-3z"
        fill="#11C176"
      />
    </svg>
  );
}

function AppStoreBadge() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#000000" stroke="#1F2A44" />
      <path
        d="M30.6 25.4c0-3 2.4-4.4 2.5-4.5-1.4-2-3.5-2.3-4.3-2.3-1.8-.2-3.5 1.1-4.4 1.1-.9 0-2.3-1-3.8-1-2 0-3.8 1.1-4.8 2.9-2 3.6-.5 8.9 1.5 11.8 1 1.4 2.1 3 3.6 3 1.4-.1 2-.9 3.7-.9 1.7 0 2.2.9 3.7.9 1.5 0 2.5-1.4 3.4-2.9 1.1-1.6 1.5-3.2 1.6-3.3-.1 0-3-1.2-3-4.7zm-3-8.6c.8-1 1.3-2.3 1.2-3.6-1.1.1-2.5.8-3.3 1.7-.7.8-1.4 2.2-1.2 3.4 1.3.1 2.5-.6 3.3-1.5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function FeatureBullet({ text }: { text: string }) {
  return (
    <li
      style={{
        position: "relative",
        paddingLeft: "20px",
        fontFamily: "var(--font-inter, Inter)",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "28px",
        letterSpacing: 0,
        color: "#FFFFFF",
        listStyle: "none",
      }}
    >
      <span
        style={{
          position: "absolute",
          left: 0,
          top: "11px",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#FFFFFF",
        }}
      />
      {text}
    </li>
  );
}

function PlatformBlock({ platform }: { platform: Platform }) {
  const text = (
    <div className="platform-block-text">
      <h3
        style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 700,
          fontSize: "clamp(26px, 3.1vw, 44px)",
          lineHeight: "110%",
          letterSpacing: "-0.01em",
          margin: 0,
          background: "rgba(5, 111, 180, 1)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
        }}
      >
        {platform.title}
      </h3>

      <p
        style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 600,
          fontSize: "clamp(15px, 1.4vw, 20px)",
          lineHeight: "130%",
          letterSpacing: 0,
          color: "#FFFFFF",
          margin: 0,
        }}
      >
        {platform.subtitle}
      </p>

      <p
        style={{
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "26px",
          letterSpacing: 0,
          color: "rgba(255,255,255,0.85)",
          margin: 0,
          maxWidth: "520px",
        }}
      >
        {platform.description}
      </p>

      <ul
        style={{
          margin: "8px 0 0",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        {platform.features.map((f) => (
          <FeatureBullet key={f} text={f} />
        ))}
      </ul>

      {platform.cta && !platform.showAppStores && (
        <Link
          href={platform.cta.href}
          className="btn-text"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-start",
            marginTop: "16px",
            padding: "clamp(10px, 0.85vw, 12px) clamp(18px, 1.8vw, 26px)",
            borderRadius: "60px",
            background: BTN_GRADIENT,
            textDecoration: "none",
            color: "#FFFFFF",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 500,
            fontSize: "15px",
            lineHeight: "100%",
            whiteSpace: "nowrap",
            boxSizing: "border-box",
          }}
        >
          {platform.cta.label}
        </Link>
      )}

      {platform.showAppStores && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "16px",
          }}
        >
          <Link href="#" aria-label="Get it on Google Play" style={{ display: "inline-flex" }}>
            <PlayStoreBadge />
          </Link>
          <Link href="#" aria-label="Download on the App Store" style={{ display: "inline-flex" }}>
            <AppStoreBadge />
          </Link>
        </div>
      )}
    </div>
  );

  const visual = (
    <div className="platform-block-visual">
      <Image
        src={platform.image}
        alt={platform.imageAlt}
        fill
        sizes="557px"
        style={{ objectFit: "cover" }}
      />
    </div>
  );

  return (
    <div
      id={platform.id}
      className={`platform-block-row${platform.reverse ? " reverse" : ""}`}
      style={{ scrollMarginTop: "120px" }}
    >
      {text}
      {visual}
    </div>
  );
}

export default function ServicesPlatformsSection() {
  return (
    <section
      className="page-section"
      style={{
        background: "#050208",
        width: "100%",
        maxWidth: "1440px",
        minHeight: "2125px",
        paddingBottom: "75px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "96px",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            maxWidth: "780px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
              paddingTop: "8px",
              paddingBottom: "8px",
              paddingLeft: "20px",
              paddingRight: "20px",
              borderRadius: "60px",
              border: "1px solid #FFFFFF26",
              background: "#000000",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontSize: "19.2px",
                lineHeight: "31.2px",
                letterSpacing: 0,
                background: TITLE_GRADIENT,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                whiteSpace: "nowrap",
              }}
            >
              Choose Your Platform
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 700,
              fontSize: "44px",
              lineHeight: "118%",
              letterSpacing: "-0.01em",
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            Three Premium Platforms.
            <br />
            Unlimited Trading Potential.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "26px",
              letterSpacing: 0,
              color: "rgba(255,255,255,0.7)",
              margin: 0,
              maxWidth: "900px",
            }}
          >
            From advanced algorithmic trading to social copy trading, discover
            the ultimate platform for your trading style.
          </p>
        </div>

        {/* Three platform blocks */}
        <div
          style={{
            width: "100%",
            maxWidth: "1207px",
            display: "flex",
            flexDirection: "column",
            gap: "41px",
          }}
        >
          {platforms.map((platform) => (
            <PlatformBlock key={platform.id} platform={platform} />
          ))}
        </div>
      </div>
    </section>
  );
}
