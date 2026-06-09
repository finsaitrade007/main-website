import Link from "next/link";

type IconKey = "rocket" | "target";

type Card = {
  icon: IconKey;
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

const CARDS: Card[] = [
  {
    icon: "rocket",
    title: "About Finsai Trade",
    subtitle: "Global Trading Access Built for Modern Market Participation",
    description:
      "Finsai Trade is a regulated multi-asset trading platform built for traders who demand more. We bring together Forex, Crypto, Indices, Stocks, Metals, and Energies under one roof, giving you seamless access to over 10,000 instruments from a single account. Beyond just execution, we are committed to long-term trader growth through Finsai Academy, structured IB partnerships, loyalty programs, and promotions designed to reward every level of participation. Whether you are just starting out or scaling a professional portfolio, Finsai Trade is built to grow with you.",
    ctaLabel: "Be Our Partner",
    ctaHref: "/partnerships",
  },
  {
    icon: "target",
    title: "Our Competitive Edge",
    subtitle: "An Integrated Ecosystem for Modern Traders",
    description:
      "What sets Finsai Trade apart is not just what we offer but how everything works together. Our platform combines multi-asset market access with the power of MetaTrader 5, real-time analytical tools, and a social trading environment, all within a single connected ecosystem. We go beyond the trade itself by offering Finsai Academy for continuous learning, a loyalty rewards program, cashback incentives, and one of the most competitive IB commission structures in the industry. At Finsai Trade, every feature is built with one purpose: to give our traders and partners a genuine edge in the market.",
    ctaLabel: "Be Our Partner",
    ctaHref: "/partnerships",
  },
];

function CardIcon({ icon }: { icon: IconKey }) {
  if (icon === "rocket") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#edge-grad)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        <defs>
          <linearGradient id="edge-grad" x1="0" y1="12" x2="24" y2="12">
            <stop stopColor="#7DB9D6" />
            <stop offset="1" stopColor="#056FB4" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="url(#edge-grad-2)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="url(#edge-grad-2)" />
      <path d="M12 3V1.5M12 22.5V21M3 12H1.5M22.5 12H21" />
      <defs>
        <linearGradient id="edge-grad-2" x1="0" y1="12" x2="24" y2="12">
          <stop stopColor="#7DB9D6" />
          <stop offset="1" stopColor="#056FB4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function AboutCompetitiveEdgeSection() {
  return (
    <section
      className="page-section"
      style={{ background: "#050208", paddingBottom: "80px" }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1288px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "stretch",
          gap: "32px",
        }}
      >
        {CARDS.map((card) => (
          <article
            key={card.title}
            style={{
              boxSizing: "border-box",
              width: "100%",
              minHeight: "461px",
              borderRadius: "20px",
              border: "2px solid transparent",
              background:
                "linear-gradient(157.26deg, #050208 -0.93%, #056FB4 444.35%) padding-box, linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%) border-box",
              paddingTop: "31px",
              paddingRight: "24px",
              paddingBottom: "31px",
              paddingLeft: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <span
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "#0A111E",
                  border: "1px solid rgba(125,185,214,0.25)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <CardIcon icon={card.icon} />
              </span>
              <h3
                style={{
                  margin: 0,
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "32px",
                  lineHeight: "100%",
                  letterSpacing: 0,
                  verticalAlign: "middle",
                  color: "#FFFFFF",
                }}
              >
                {card.title}
              </h3>
            </div>

            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: 0,
                verticalAlign: "middle",
                color: "#FFFFFFBF",
              }}
            >
              {card.subtitle}
            </p>

            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: 0,
                verticalAlign: "middle",
                color: "#FFFFFFBF",
                flexGrow: 1,
              }}
            >
              {card.description}
            </p>

            <Link
              href={card.ctaHref}
              className="btn-text"
              style={{
                alignSelf: "flex-start",
                padding: "11px 22px",
                borderRadius: "60px",
                background:
                  "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontWeight: 500,
                fontSize: "14px",
                color: "#FFFFFF",
              }}
            >
              {card.ctaLabel}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2.5 7h9M7.5 2.5l4.5 4.5-4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
