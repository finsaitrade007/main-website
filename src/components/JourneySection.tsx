import Link from "next/link";
import {
  getHomepage,
  getJourneyCards,
  type StrapiJourneyCard,
} from "@/lib/strapi";

const CARD_BG = "#0B1221";
const RADIUS = "21.32px";
const BORDER_SM = "1px solid rgba(5,111,180,0.35)";
const BORDER_LG = "2px solid rgba(5,111,180,0.5)";
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
  { id: 4, documentId: "fb-4", label: "Webinar", description: "Join live sessions with market experts covering strategies, platform tips, and real-time market analysis.", linkLabel: "Browse Webinars", linkHref: "/webinars", row: "row2", size: "equal", order: 4 },
  { id: 5, documentId: "fb-5", label: "Glossary", description: "Master trading terms and concepts with our comprehensive glossary built to help you trade with clarity and confidence.", linkLabel: "Explore Glossary", linkHref: "/glossary", row: "row2", size: "equal", order: 5 },
];

function Card({ card, height }: { card: StrapiJourneyCard; height: string }) {
  return (
    <div
      style={{
        background: CARD_BG,
        border: card.size === "large" ? BORDER_LG : BORDER_SM,
        borderRadius: RADIUS,
        height,
        padding: "20px 24px 24px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "6px 14px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "8px",
            fontFamily: "var(--font-inter, Inter)",
            fontSize: "13px",
            fontWeight: 500,
            color: "#FFFFFF",
          }}
        >
          {card.label}
        </span>
      </div>

      <div
        style={{
          flex: 1,
          background: "rgba(255,255,255,0.04)",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      />

      <p
        style={{
          fontFamily: "var(--font-inter, Inter)",
          fontSize: "14px",
          lineHeight: "24px",
          color: "rgba(255,255,255,0.75)",
          margin: "0 0 14px",
        }}
      >
        {card.description}
      </p>

      <Link
        href={card.linkHref}
        style={{
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
    <section style={{ background: "#050208", padding: "100px 0" }}>
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
