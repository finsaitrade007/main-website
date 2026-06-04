import Link from "next/link";
import {
  getHomepage,
  getJourneyCards,
  type StrapiJourneyCard,
} from "@/lib/strapi";

const CARD_BG = "#0B1221";
const RADIUS = "21.32px";
const CARD_BORDER_GRADIENT =
  "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)";
const CARD_BACKGROUND = `linear-gradient(${CARD_BG}, ${CARD_BG}) padding-box, ${CARD_BORDER_GRADIENT} border-box`;
const GAP = "20px";

const FALLBACK_HEADER = {
  journeyBadge: "Learn And Grow",
  journeyTitle: "Your Trading Journey Starts Here",
  journeyDescription:
    "Trade seamlessly on the go or from your desktop with our cutting-edge platforms.",
};

const FALLBACK_CARDS: StrapiJourneyCard[] = [
  { id: 1, documentId: "fb-1", label: "Blogs", description: "Explore professional insights on trading strategies, psychology, platform guides, and market trends.", linkLabel: "Read Latest Articles", linkHref: "/blogs", row: "row1", size: "small", order: 1 },
  { id: 2, documentId: "fb-2", label: "Finsai Academy", description: "Master trading with beginner-friendly lessons, advanced courses, and practical market education.", linkLabel: "Start Learning Free", linkHref: "/academy", row: "row1", size: "large", order: 2 },
  { id: 3, documentId: "fb-3", label: "News & Analysis", description: "Stay updated with real-time market news, economic events, and expert commentary.", linkLabel: "Explore Now", linkHref: "/news", row: "row2", size: "equal", order: 3 },
  { id: 4, documentId: "fb-4", label: "Webinar", description: "Join live sessions with market experts covering strategies, platform tips, and real-time market analysis.", linkLabel: "Browse Webinars", linkHref: "https://lms.finsaitrade.com/#webinars", row: "row2", size: "equal", order: 4 },
  { id: 5, documentId: "fb-5", label: "Glossary", description: "Master trading terms and concepts with our comprehensive glossary built to help you trade with clarity and confidence.", linkLabel: "Explore Glossary", linkHref: "/glossary", row: "row2", size: "equal", order: 5 },
];

function Card({ card, height }: { card: StrapiJourneyCard; height: string }) {
  const isLarge = card.size === "large";
  const imageTopPx = isLarge ? 12 : 22;
  const imageBottomPx = imageTopPx + 128;

  return (
    <div
      style={{
        background: CARD_BACKGROUND,
        border: isLarge ? "2px solid transparent" : "1px solid transparent",
        borderRadius: RADIUS,
        height,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: `${imageTopPx}px`,
          left: "13px",
          right: "13px",
          height: "128px",
          borderRadius: "16px",
          background: "#B6B6B633",
        }}
      />

      <span
        style={{
          position: "absolute",
          top: isLarge ? "18px" : "28px",
          left: "13px",
          height: "34px",
          padding: "7px 18px",
          borderRadius: "5px",
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(34px)",
          WebkitBackdropFilter: "blur(34px)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          fontFamily: "var(--font-inter, Inter)",
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "0.01em",
          color: "#FFFFFF",
          boxSizing: "border-box",
          whiteSpace: "nowrap",
          zIndex: 2,
        }}
      >
        {card.label}
      </span>

      <p
        style={{
          position: "absolute",
          top: `${imageBottomPx + 20}px`,
          left: "24px",
          right: "24px",
          margin: 0,
          fontFamily: "var(--font-inter, Inter)",
          fontSize: "14px",
          lineHeight: "24px",
          color: "rgba(255,255,255,0.75)",
        }}
      >
        {card.description}
      </p>

      <Link
        href={card.linkHref}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "24px",
          fontFamily: "var(--font-inter, Inter)",
          fontSize: "14px",
          color: "#056FB4",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        {card.linkLabel} &nbsp;→
      </Link>
    </div>
  );
}

export default async function JourneySection() {
  const [home, fetched] = await Promise.all([getHomepage(), getJourneyCards()]);
  const header = home ?? FALLBACK_HEADER;
  const cards = fetched && fetched.length > 0 ? fetched : FALLBACK_CARDS;

  const row1 = cards.filter((c) => c.row === "row1");
  const row2 = cards.filter((c) => c.row === "row2");

  return (
    <section style={{ background: "#050208", width: "1440px", height: "811px", paddingTop: "50px", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 22px",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "60px",
            }}
          >
            <span className="badge-text">{header.journeyBadge}</span>
          </span>
        </div>

        <h2
          className="section-title"
          style={{ textAlign: "center", marginBottom: "16px" }}
        >
          {header.journeyTitle}
        </h2>

        <p
          className="section-desc"
          style={{
            textAlign: "center",
            maxWidth: "520px",
            margin: "0 auto 48px",
          }}
        >
          {header.journeyDescription}
        </p>

        <div style={{ display: "flex", gap: GAP, marginBottom: GAP }}>
          {row1.map((c) => (
            <div
              key={c.id}
              style={{
                width: c.size === "small" ? "500px" : undefined,
                flex: c.size === "large" ? 1 : "none",
                flexShrink: c.size === "large" ? 1 : 0,
              }}
            >
              <Card card={c} height="264px" />
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${row2.length || 3}, 1fr)`,
            gap: GAP,
          }}
        >
          {row2.map((c) => (
            <Card key={c.id} card={c} height="285px" />
          ))}
        </div>
      </div>
    </section>
  );
}
