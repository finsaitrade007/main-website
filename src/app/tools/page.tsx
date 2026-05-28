import ToolsHeroSection from "@/components/ToolsHeroSection";
import ToolsBuiltForSection from "@/components/ToolsBuiltForSection";
import ToolsCardGrid, { type ToolCard } from "@/components/ToolsCardGrid";
import ToolsCTASection from "@/components/ToolsCTASection";

export const metadata = {
  title: "Tools | Finsai Trade",
  description:
    "Professional trading tools, charting, market data, risk management, and automation — all in one place.",
};

// Section data lives here so it's easy to wire up Strapi later.
const chartingCards: ToolCard[] = [
  {
    title: "Multi Charts",
    description:
      "Tick-by-tick price action with customisable layouts and 80+ indicators.",
    image: "/tools/chart-1.png",
  },
  {
    title: "Go Charting",
    description:
      "RSI, MACD, Bollinger Bands and dozens more — combine and save your own setups.",
    image: "/tools/chart-2.png",
  },
  {
    title: "Trading View",
    description:
      "Curated signals across FX, indices, crypto and commodities, refreshed every minute.",
    image: "/tools/chart-3.png",
  },
];

// ---------------------------------------------------------------------------
// Market data card layouts — built in JSX to mirror the Figma reference
// pixel-for-pixel (no image assets).
// ---------------------------------------------------------------------------

type Impact = "HIGH" | "MED" | "LOW";

function ImpactBadge({ level }: { level: Impact }) {
  const palette: Record<Impact, { bg: string; color: string }> = {
    HIGH: { bg: "rgba(239,68,68,0.15)", color: "#F87171" },
    MED: { bg: "rgba(245,158,11,0.16)", color: "#FBBF24" },
    LOW: { bg: "rgba(59,130,246,0.18)", color: "#60A5FA" },
  };
  const c = palette[level];
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: "4px",
        background: c.bg,
        color: c.color,
        fontFamily: "var(--font-inter, Inter)",
        fontWeight: 600,
        fontSize: "10px",
        lineHeight: "14px",
        letterSpacing: "0.6px",
      }}
    >
      {level}
    </span>
  );
}

const headerCellStyle = {
  fontFamily: "var(--font-inter, Inter)",
  fontWeight: 600,
  fontSize: "10px",
  lineHeight: "14px",
  letterSpacing: "0.8px",
  color: "rgba(255,255,255,0.45)",
  textTransform: "uppercase" as const,
};

const bodyCellStyle = {
  fontFamily: "var(--font-inter, Inter)",
  fontWeight: 400,
  fontSize: "13px",
  lineHeight: "20px",
  color: "#FFFFFF",
};

const rowDivider = (
  <div
    style={{
      height: "1px",
      background:
        "linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.02) 100%)",
    }}
  />
);

const footerNoteStyle = {
  margin: 0,
  fontFamily: "var(--font-inter, Inter)",
  fontStyle: "italic" as const,
  fontSize: "12px",
  lineHeight: "18px",
  color: "rgba(255,255,255,0.55)",
};

const cardTitleStyle = {
  margin: 0,
  fontFamily: "var(--font-sora, Sora)",
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "24px",
  color: "#FFFFFF",
};

const CalendarIcon = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <rect
      x="2.75"
      y="4"
      width="16.5"
      height="15"
      rx="2"
      stroke="#7DB9D6"
      strokeWidth="1.5"
    />
    <path d="M2.75 8.25H19.25" stroke="#7DB9D6" strokeWidth="1.5" />
    <path
      d="M7 2.75V5.5M15 2.75V5.5"
      stroke="#7DB9D6"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const NewsIcon = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <rect
      x="3.5"
      y="3"
      width="15"
      height="16"
      rx="2"
      stroke="#7DB9D6"
      strokeWidth="1.5"
    />
    <path
      d="M7 8H15M7 11H15M7 14H12"
      stroke="#7DB9D6"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const calendarRows: { time: string; event: string; impact: Impact; forecast: string }[] = [
  { time: "08:30", event: "US Core CPI (MoM)", impact: "HIGH", forecast: "0.3%" },
  { time: "10:00", event: "US Retail Sales", impact: "MED", forecast: "0.7%" },
  { time: "12:30", event: "US Unemployment", impact: "LOW", forecast: "222K" },
];

const EconomicCalendarContent = (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      height: "100%",
      width: "100%",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      {CalendarIcon}
      <h3 style={cardTitleStyle}>Economic Calendar</h3>
    </div>

    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "center", paddingBottom: "10px" }}>
        <div style={{ width: "70px", ...headerCellStyle }}>TIME</div>
        <div style={{ flex: 1, ...headerCellStyle }}>EVENT</div>
        <div style={{ width: "70px", textAlign: "center", ...headerCellStyle }}>IMPACT</div>
        <div style={{ width: "70px", textAlign: "right", ...headerCellStyle }}>FORECAST</div>
      </div>
      {rowDivider}

      {calendarRows.map((r, i) => (
        <div key={`${r.time}-${r.event}`}>
          <div style={{ display: "flex", alignItems: "center", padding: "12px 0" }}>
            <div style={{ width: "70px", ...bodyCellStyle, color: "rgba(255,255,255,0.75)" }}>
              {r.time}
            </div>
            <div style={{ flex: 1, ...bodyCellStyle }}>{r.event}</div>
            <div style={{ width: "70px", textAlign: "center" }}>
              <ImpactBadge level={r.impact} />
            </div>
            <div style={{ width: "70px", textAlign: "right", ...bodyCellStyle }}>
              {r.forecast}
            </div>
          </div>
          {i < calendarRows.length - 1 ? rowDivider : null}
        </div>
      ))}
    </div>

    <p style={footerNoteStyle}>
      Stay ahead with a real-time economic calendar covering key global events
      and indicators that move the markets.
    </p>
  </div>
);

const newsItems = [
  {
    time: "09:18",
    headline: "USD rises as CPI cools faster than expected in latest report",
  },
  {
    time: "09:18",
    headline: "USD rises as CPI cools faster than expected in latest report",
  },
  {
    time: "08:52",
    headline:
      "ECB signals rate cut in June amid growth concerns across Eurozone",
  },
  {
    time: "07:41",
    headline:
      "Gold steadies ahead of US data and Fed speak as markets await direction",
  },
];

const NewsFeedContent = (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      height: "100%",
      width: "100%",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      {NewsIcon}
      <h3 style={cardTitleStyle}>Real-Time News Feeds</h3>
    </div>

    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      {newsItems.map((item, i) => (
        <div key={`${item.time}-${i}`}>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "flex-start",
              padding: "12px 0",
            }}
          >
            <span
              style={{
                minWidth: "44px",
                color: "#7DB9D6",
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 500,
                fontSize: "13px",
                lineHeight: "20px",
              }}
            >
              {item.time}
            </span>
            <span
              style={{
                flex: 1,
                color: "#FFFFFF",
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: "20px",
              }}
            >
              {item.headline}
            </span>
          </div>
          {i < newsItems.length - 1 ? rowDivider : null}
        </div>
      ))}
    </div>

    <p style={footerNoteStyle}>
      Live news updates and market-moving stories so you can react quickly to
      global developments.
    </p>
  </div>
);

const marketDataCards: ToolCard[] = [
  {
    title: "Economic Calendar",
    description: "",
    content: EconomicCalendarContent,
  },
  {
    title: "Real-Time News Feeds",
    description: "",
    content: NewsFeedContent,
  },
];

const riskCards: ToolCard[] = [
  {
    title: "Risk Calculator",
    description:
      "Size positions to a fixed % of equity in two clicks — including pip & lot maths.",
    image: "/tools/risk-1.png",
  },
  {
    title: "Position Analyser",
    description:
      "Live PnL, exposure and margin usage across every open trade.",
    image: "/tools/risk-2.png",
  },
  {
    title: "Portfolio Analytics",
    description:
      "Drawdown, Sharpe, hit-rate and per-instrument breakdown over any window.",
    image: "/tools/risk-3.png",
  },
];

const strategyCards: ToolCard[] = [
  {
    title: "Auto-Trade Strategies",
    description:
      "Bring your own algo or pick from the Finsai library — run them 24/7 on our VPS.",
    image: "/tools/strategy-1.png",
  },
  {
    title: "Backtesting",
    description:
      "Replay any strategy on 10+ years of tick data with realistic slippage modelling.",
    image: "/tools/strategy-2.png",
  },
  {
    title: "Order Templates",
    description:
      "Save complex multi-leg orders once, fire them in one click forever.",
    image: "/tools/strategy-3.png",
  },
];

const communityCards: ToolCard[] = [
  {
    title: "Trading Ideas",
    description:
      "Browse setups shared by Finsai pros — entry, stop and target spelled out.",
    image: "/tools/community-2.png",
  },
  {
    title: "Copy Trading",
    description:
      "Mirror top-performing traders with one click; pause or scale at any time.",
    image: "/tools/community-1.png",
  },
  {
    title: "Sentiment Analysis",
    description:
      "See how the crowd is positioned across every instrument we offer, updated hourly.",
    image: "/tools/community-3.png",
  },
];

export default function ToolsPage() {
  return (
    <>
      <ToolsHeroSection />
      <ToolsBuiltForSection />

      <ToolsCardGrid
        title="Charting & Technical Analysis Tools"
        description="Trade with speed, stability, and total control  from your desk or on the move. Finsai Trade delivers professional-grade platforms to match your trading needs."
        cards={chartingCards}
        height="629px"
      />

      <ToolsCardGrid
        title="Market Data & News Tools"
        description="Trade with speed, stability, and total control  from your desk or on the move. Finsai Trade delivers professional-grade platforms to match your trading needs
"
        cards={marketDataCards}
        height="685.02px"
        cardWidth="600px"
        cardHeight="357px"
        cardRadius="16px"
        cardPadding="32px"
        cardGap="24px"
        cardGridGap="32px"
        cardBackground="linear-gradient(157.26deg, #050208 -0.93%, #056FB4 444.35%)"
      />

      <ToolsCardGrid
        title="Risk and Position Management Tools"
        description="Trade with speed, stability, and total control  from your desk or on the move. Finsai Trade delivers professional-grade platforms to match your trading needs
"
        cards={riskCards}
        height="629px"
      />

      <ToolsCardGrid
        title="Strategy and Automation Tools"
        description="From idea to live trade — design, backtest and deploy strategies without leaving Finsai."
        cards={strategyCards}
        height="629px"
        imageLayout="top"
      />

      <ToolsCardGrid
        title="Community and Insight Tools"
        description="Trade with speed, stability, and total control  from your desk or on the move. Finsai Trade delivers professional-grade platforms to match your trading needs

"
        cards={communityCards}
        height="629px"
        imageLayout="top"
      />

      <ToolsCTASection />
    </>
  );
}
