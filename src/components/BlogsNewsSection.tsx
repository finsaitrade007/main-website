import Link from "next/link";

const CARD_BG = "#0B1221";
const BORDER  = "1px solid rgba(5,111,180,0.3)";
const RADIUS  = "14px";

const categories = ["News & Analysis", "Webinar", "Glossary"];

const newsCards = [
  {
    category: "News & Analysis",
    desc: "Stay updated with real-time market news, economic events, and expert commentary.",
    href: "/news",
  },
  {
    category: "Webinar",
    desc: "Join live sessions with market experts covering strategies, platform tips, and real-time market analysis.",
    href: "/webinars",
  },
  {
    category: "Glossary",
    desc: "Master trading terms and concepts with our comprehensive glossary built to help you trade with clarity and confidence.",
    href: "/glossary",
  },
  {
    category: "News & Analysis",
    desc: "Stay updated with real-time market news, economic events, and expert commentary.",
    href: "/news",
  },
  {
    category: "Webinar",
    desc: "Join live sessions with market experts covering strategies, platform tips, and real-time market analysis.",
    href: "/webinars",
  },
  {
    category: "Glossary",
    desc: "Master trading terms and concepts with our comprehensive glossary built to help you trade with clarity and confidence.",
    href: "/glossary",
  },
];

const blogCards = [...newsCards];

function ArticleCard({ category, desc, href }: { category: string; desc: string; href: string }) {
  return (
    <div style={{
      background: CARD_BG,
      border: BORDER,
      borderRadius: RADIUS,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Image placeholder */}
      <div style={{
        width: "100%",
        height: "140px",
        background: "linear-gradient(135deg, #0D1927 0%, #0a1628 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid rgba(5,111,180,0.2)",
        flexShrink: 0,
      }}>
        <div style={{
          background: "rgba(5,111,180,0.15)",
          borderRadius: "8px",
          padding: "8px 16px",
          fontFamily: "var(--font-inter, Inter)",
          fontSize: "11px",
          fontWeight: 600,
          color: "rgba(255,255,255,0.4)",
          textAlign: "center",
        }}>
          BSE Holiday Calendar 2026
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* Category badge */}
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "4px 10px",
          background: "rgba(5,111,180,0.15)",
          borderRadius: "6px",
          fontFamily: "var(--font-inter, Inter)",
          fontSize: "11px",
          fontWeight: 500,
          color: "#7DB9D6",
          alignSelf: "flex-start",
        }}>
          {category}
        </span>

        <p style={{
          fontFamily: "var(--font-inter, Inter)",
          fontWeight: 400,
          fontSize: "13px",
          lineHeight: "22px",
          color: "rgba(255,255,255,0.65)",
          margin: 0,
          flex: 1,
        }}>
          {desc}
        </p>

        <Link href={href} className="market-link" style={{ fontSize: "13px" }}>
          Read More
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-inter, Inter)",
      fontSize: "13px",
      color: "rgba(255,255,255,0.4)",
      cursor: "pointer",
    }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
      Search for a Keyword
    </div>
  );
}

export default function BlogsNewsSection() {
  return (
    <section style={{ background: "#050208", padding: "80px 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>

        {/* Badge */}
        <div style={{ marginBottom: "24px" }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 22px",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "60px",
          }}>
            <span className="badge-text">Blogs & News</span>
          </span>
        </div>

        {/* ── Market News ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
          <h2 className="section-title">Market News</h2>
          <SearchBar />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginBottom: "64px",
        }}>
          {newsCards.map((card, i) => (
            <ArticleCard key={i} {...card} />
          ))}
        </div>

        {/* ── Blogs ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
          <h2 className="section-title">Blogs</h2>
          <SearchBar />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}>
          {blogCards.map((card, i) => (
            <ArticleCard key={i} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
}
