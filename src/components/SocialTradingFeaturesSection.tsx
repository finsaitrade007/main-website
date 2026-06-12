const cards = [
  {
    title: "Real-Time Copy Trading",
    description:
      "Copy trades automatically as your chosen experts open positions.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 6C12.268 6 6 12.268 6 20s6.268 14 14 14 14-6.268 14-14"
          stroke="#056FB4"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M34 6l-4 4m4-4l-4-4"
          stroke="#056FB4"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 34C27.732 34 34 27.732 34 20S27.732 6 20 6"
          stroke="#056FB4"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="0.1 4"
        />
        <path
          d="M6 34l4-4m-4 4l4 4"
          stroke="#056FB4"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Complete Transparency",
    description:
      "View verified results, win rates, risk levels, and drawdowns before following.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse
          cx="20"
          cy="20"
          rx="14"
          ry="9"
          stroke="#056FB4"
          strokeWidth="2.5"
        />
        <circle cx="20" cy="20" r="4" stroke="#056FB4" strokeWidth="2.5" />
        <path
          d="M10 28l4-5 4 3 4-6 4 3"
          stroke="#056FB4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Built-In Risk Controls",
    description:
      "Set limits and stop-loss levels to manage risk with control.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 5L7 10v10c0 8.284 5.596 15.647 13 18 7.404-2.353 13-9.716 13-18V10L20 5z"
          stroke="#056FB4"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M14 20l4 4 8-8"
          stroke="#056FB4"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Become a Strategy Provider",
    description:
      "Share your strategy, gain followers, and earn performance-based rewards.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 5l3.09 9.513H33l-8.09 5.879 3.09 9.513L20 24.026l-8 5.879 3.09-9.513L7 14.513h9.91L20 5z"
          stroke="#056FB4"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 33h16M16 37h8"
          stroke="#056FB4"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function SocialTradingFeaturesSection() {
  return (
    <section
      style={{
        background: "#050208",
        padding:
          "clamp(60px, 6vw, 100px) clamp(20px, 5.5vw, 80px)",
      }}
    >
      <h2
        style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 600,
          fontSize: "36px",
          color: "#ffffff",
          textAlign: "center",
          margin: "0 0 16px",
          lineHeight: 1.2,
        }}
      >
        Goodbye Complexity. Hello Easy Trading
      </h2>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          color: "#94A3B8",
          textAlign: "center",
          maxWidth: "840px",
          margin: "0 auto 48px",
          lineHeight: 1.6,
        }}
      >
        Social Trading in Finsai Trade helps you trade with more confidence,
        control, and transparency.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              width: "302px",
              height: "280px",
              borderRadius: "32px",
              border: "1px solid transparent",
              background:
                "linear-gradient(137.88deg, #050208 1.04%, #056FB4 536.19%) padding-box, linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%) border-box",
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              boxSizing: "border-box",
            }}
          >
            <div style={{ marginBottom: "20px" }}>{card.icon}</div>

            <h3
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "24px",
                fontWeight: 600,
                color: "#ffffff",
                margin: "0 0 12px",
                lineHeight: "32px",
              }}
            >
              {card.title}
            </h3>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                color: "background: #FFFFFF99",
                margin: 0,
                lineHeight: "24px",
              }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
