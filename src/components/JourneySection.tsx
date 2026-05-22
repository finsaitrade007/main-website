import Link from "next/link";

const CARD_BG   = "#0B1221";
const RADIUS    = "21.32px";
const BORDER_SM = "1px solid rgba(5,111,180,0.35)";
const BORDER_LG = "2px solid rgba(5,111,180,0.5)";
const GAP       = "20px";

const row1 = [
  {
    label: "Blogs",
    desc: "Explore professional insights on trading strategies, psychology, platform guides, and market trends.",
    link: "Read Latest Articles",
    href: "/blogs",
    border: BORDER_SM,
    flex: "500px",
  },
  {
    label: "Finsai Academy",
    desc: "Master trading with beginner-friendly lessons, advanced courses, and practical market education.",
    link: "Start Learning Free",
    href: "/academy",
    border: BORDER_LG,
    flex: "1",
  },
];

const row2 = [
  {
    label: "News & Analysis",
    desc: "Stay updated with real-time market news, economic events, and expert commentary.",
    link: "Explore Now",
    href: "/news",
  },
  {
    label: "Webinar",
    desc: "Join live sessions with market experts covering strategies, platform tips, and real-time market analysis.",
    link: "Browse Webinars",
    href: "/webinars",
  },
  {
    label: "Glossary",
    desc: "Master trading terms and concepts with our comprehensive glossary built to help you trade with clarity and confidence.",
    link: "Explore Glossary",
    href: "/glossary",
  },
];

function Card({
  label, desc, link, href, border = BORDER_SM, height,
}: {
  label: string; desc: string; link: string; href: string; border?: string; height: string;
}) {
  return (
    <div style={{
      background: CARD_BG,
      border,
      borderRadius: RADIUS,
      height,
      padding: "20px 24px 24px",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}>
      {/* Label pill */}
      <div style={{ marginBottom: "16px" }}>
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "6px 14px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "8px",
          fontFamily: "var(--font-inter, Inter)",
          fontSize: "13px",
          fontWeight: 500,
          color: "#FFFFFF",
        }}>
          {label}
        </span>
      </div>

      {/* Preview area */}
      <div style={{
        flex: 1,
        background: "rgba(255,255,255,0.04)",
        borderRadius: "12px",
        marginBottom: "20px",
      }} />

      {/* Description */}
      <p style={{
        fontFamily: "var(--font-inter, Inter)",
        fontSize: "14px",
        lineHeight: "24px",
        color: "rgba(255,255,255,0.75)",
        margin: "0 0 14px",
      }}>
        {desc}
      </p>

      {/* Link */}
      <Link href={href} style={{
        fontFamily: "var(--font-inter, Inter)",
        fontSize: "14px",
        color: "#056FB4",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
      }}>
        {link} &nbsp;→
      </Link>
    </div>
  );
}

export default function JourneySection() {
  return (
    <section style={{ background: "#050208", padding: "100px 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>

        {/* Badge */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 22px",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "60px",
          }}>
            <span className="badge-text">Learn And Grow</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "16px" }}>
          Your Trading Journey Starts Here
        </h2>

        {/* Subtitle */}
        <p className="section-desc" style={{ textAlign: "center", maxWidth: "520px", margin: "0 auto 48px" }}>
          Trade seamlessly on the go or from your desktop with our cutting-edge platforms.
        </p>

        {/* Row 1: Blogs (500px) | Finsai Academy (flex 1) */}
        <div style={{ display: "flex", gap: GAP, marginBottom: GAP }}>
          {row1.map((item) => (
            <div key={item.label} style={{ width: item.flex, flexShrink: item.flex === "1" ? 1 : 0, flex: item.flex === "1" ? 1 : "none" }}>
              <Card {...item} height="264px" />
            </div>
          ))}
        </div>

        {/* Row 2: 3 equal cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: GAP }}>
          {row2.map((item) => (
            <Card key={item.label} {...item} height="285px" />
          ))}
        </div>

      </div>
    </section>
  );
}
