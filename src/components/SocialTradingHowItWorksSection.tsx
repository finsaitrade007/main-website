import Image from "next/image";
import SmartLink from "@/components/SmartLink";

// Figma spec: 367×545 card with a dark→blue background and a top→bottom
// gradient border. Implemented via the standard `padding-box` + `border-box`
// background trick so the border can be a gradient while keeping the radius.
const CARD_STYLE: React.CSSProperties = {
  width: "367px",
  height: "545px",
  borderRadius: "16.46px",
  border: "1.65px solid transparent",
  background:
    "linear-gradient(157.26deg, #050208 -0.93%, #056FB4 444.35%) padding-box, linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%) border-box",
  padding: "28px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
};

const PRIMARY_CTA_STYLE: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "12px 24px",
  borderRadius: "999px",
  background:
    "linear-gradient(90deg, #056FB4 0%, #41ABE7 100%)",
  fontFamily: "'Inter', sans-serif",
  fontWeight: 600,
  fontSize: "14px",
  color: "#FFFFFF",
  textDecoration: "none",
  whiteSpace: "nowrap",
};

const SECONDARY_CTA_STYLE: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "12px 24px",
  borderRadius: "999px",
  background: "rgba(125, 185, 214, 0.45)",
  fontFamily: "'Inter', sans-serif",
  fontWeight: 600,
  fontSize: "14px",
  color: "#FFFFFF",
  textDecoration: "none",
  whiteSpace: "nowrap",
};

type BulletItem = { icon: React.ReactNode; title: string; desc: string };

/* ───────────────── Bullet icons (per-item, matching Figma) ──────────────── */

const ICON_STROKE = "#41ABE7";

function NoExperienceIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="5" y="3" width="14" height="20" rx="2.2" stroke={ICON_STROKE} strokeWidth="1.5" />
      <path d="M8.5 9h7M8.5 13h7M8.5 17h4" stroke={ICON_STROKE} strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="21" cy="20" r="5" fill="#050208" stroke={ICON_STROKE} strokeWidth="1.5" />
      <path d="M19 18l4 4M23 18l-4 4" stroke={ICON_STROKE} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BrowseProvidersIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="10" r="5.5" stroke={ICON_STROKE} strokeWidth="1.5" />
      <path d="M14 4.5v11M8.5 10h11M11.4 5c-1.6 1.6-1.6 8.4 0 10M16.6 5c1.6 1.6 1.6 8.4 0 10" stroke={ICON_STROKE} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M3.5 24c0-2.2 1.8-4 4-4h11c2.2 0 4 1.8 4 4" stroke={ICON_STROKE} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CopyTradesIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="10" y="4" width="13" height="17" rx="2" stroke={ICON_STROKE} strokeWidth="1.5" />
      <rect x="5" y="8" width="13" height="17" rx="2" fill="#050208" stroke={ICON_STROKE} strokeWidth="1.5" />
      <path d="M8 13h7M8 16.5h7M8 20h4" stroke={ICON_STROKE} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function MonitorAnytimeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="22" height="14" rx="2" stroke={ICON_STROKE} strokeWidth="1.5" />
      <path d="M10 24h8M14 19v5" stroke={ICON_STROKE} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 14l3.5-3.5 3 2L20 7" stroke={ICON_STROKE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 7v3M20 7h-3" stroke={ICON_STROKE} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function TradeNormallyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="10" stroke={ICON_STROKE} strokeWidth="1.5" />
      <text x="7.5" y="14" fontFamily="'Sora', sans-serif" fontSize="6.5" fontWeight={700} fill={ICON_STROKE}>B</text>
      <text x="15" y="20.5" fontFamily="'Sora', sans-serif" fontSize="6.5" fontWeight={700} fill={ICON_STROKE}>M</text>
      <path d="M9 17l10-7" stroke={ICON_STROKE} strokeWidth="1.1" strokeLinecap="round" strokeDasharray="1.5 1.5" />
    </svg>
  );
}

function FollowersCopyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="9" y="4" width="13" height="17" rx="2" stroke={ICON_STROKE} strokeWidth="1.5" />
      <rect x="4" y="8" width="13" height="17" rx="2" fill="#050208" stroke={ICON_STROKE} strokeWidth="1.5" />
      <path d="M7 14.5l3 2.5 5-5" stroke={ICON_STROKE} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 9h2.5M19 12.5h2.5" stroke={ICON_STROKE} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function GrowFollowingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M4 23h20" stroke={ICON_STROKE} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 23v-7M12 23v-10M17 23v-13M22 23v-16" stroke={ICON_STROKE} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 13l5-4 5 2 5-5" stroke={ICON_STROKE} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1.8 1.8" />
      <path d="M22 6v3M22 6h-3" stroke={ICON_STROKE} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function EarnRewardsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="18.5" cy="9" r="5" stroke={ICON_STROKE} strokeWidth="1.5" />
      <text x="16" y="11.5" fontFamily="'Inter', sans-serif" fontSize="6.5" fontWeight={700} fill={ICON_STROKE}>$</text>
      <path d="M3.5 24c0-2.2 1.8-4 4-4h7c2.2 0 4 1.8 4 4" stroke={ICON_STROKE} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 20v-3M9 18.5h4" stroke={ICON_STROKE} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

/* ───────────────── Card header role icons ──────────────── */

function InvestorRoleIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="14" r="5.5" stroke={ICON_STROKE} strokeWidth="1.6" />
      <path d="M8 33c0-5.5 5.4-10 12-10s12 4.5 12 10" stroke={ICON_STROKE} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="28" cy="9" r="4.5" fill={ICON_STROKE} />
      <path d="M26 9l1.5 1.5L30 7.8" stroke="#050208" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProviderRoleIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="18" cy="13" r="5.5" stroke={ICON_STROKE} strokeWidth="1.6" />
      <path d="M6 33c0-5.5 5.4-10 12-10 2.5 0 4.8.6 6.8 1.6" stroke={ICON_STROKE} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="30" cy="28" r="4.5" stroke={ICON_STROKE} strokeWidth="1.5" />
      <path
        d="M30 22.5v2M30 31.5v2M35.5 28h-2M26.5 28h-2M33.9 24.1l-1.4 1.4M27.5 30.5l-1.4 1.4M33.9 31.9l-1.4-1.4M27.5 25.5l-1.4-1.4"
        stroke={ICON_STROKE}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ───────────────── Bullets data ──────────────── */

const investorBullets: BulletItem[] = [
  {
    icon: <NoExperienceIcon />,
    title: "No Experience Required",
    desc: "Follow proven providers and stay invested with ease.",
  },
  {
    icon: <BrowseProvidersIcon />,
    title: "Browse Providers",
    desc: "Analyze the historical performance of each trader.",
  },
  {
    icon: <CopyTradesIcon />,
    title: "Copy Trades Automatically",
    desc: "Connect with other traders and share insights.",
  },
  {
    icon: <MonitorAnytimeIcon />,
    title: "Monitor Anytime",
    desc: "Set notifications for market movements and trader updates.",
  },
];

const providerBullets: BulletItem[] = [
  {
    icon: <TradeNormallyIcon />,
    title: "Trade Normally",
    desc: "Keep trading exactly as you always do.",
  },
  {
    icon: <FollowersCopyIcon />,
    title: "Followers Copy You",
    desc: "Trades mirror live across follower accounts.",
  },
  {
    icon: <GrowFollowingIcon />,
    title: "Grow Your Following",
    desc: "Build visibility with active traders.",
  },
  {
    icon: <EarnRewardsIcon />,
    title: "Earn Monthly Rewards",
    desc: "Receive transparent performance-based payouts.",
  },
];

/* ───────────────── Card header (role icon + label + title + divider) ──────────────── */

function CardHeader({
  icon,
  label,
  title,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
}) {
  return (
    <>
      <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
        <div style={{ flexShrink: 0, marginTop: "2px" }}>{icon}</div>
        <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
          <span
            className="howit-card-label"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              color: "#94A3B8",
              letterSpacing: "0.01em",
              lineHeight: 1.3,
              marginBottom: "4px",
            }}
          >
            {label}
          </span>
          <h3
            className="howit-card-title"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "26px",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {title}
          </h3>
        </div>
      </div>
      <div
        style={{
          height: 1,
          background: "rgba(255,255,255,0.08)",
          marginTop: "20px",
        }}
      />
    </>
  );
}

function BulletList({ items }: { items: BulletItem[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
      {items.map((item) => (
        <div key={item.title} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
          <div style={{ flexShrink: 0, marginTop: "2px" }}>{item.icon}</div>
          <div style={{ minWidth: 0 }}>
            <span
              className="howit-item-title"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "#FFFFFF",
                display: "block",
                marginBottom: "4px",
                lineHeight: 1.3,
              }}
            >
              {item.title}
            </span>
            <span
              className="howit-item-desc"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                color: "#94A3B8",
                lineHeight: 1.55,
                display: "block",
              }}
            >
              {item.desc}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

// SVG icons for the diagram circles
function UsersIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM17 17a7 7 0 10-14 0"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16 12a3 3 0 110-6M19 17a5 5 0 00-3-4.6"
        stroke="#ffffff"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 3C6.134 3 3 6.134 3 10s3.134 7 7 7 7-3.134 7-7"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M17 3l-2 2m2-2l-2-2"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17c3.866 0 7-3.134 7-7S13.866 3 10 3"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="0.1 3"
      />
      <path
        d="M3 17l2-2m-2 2l2 2"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 16V8"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10 8c0-3 2.5-4 4-3"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 10c0-2-2-3.5-4-3"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5 16h10"
        stroke="#ffffff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DiagramCircle({
  icon,
  label,
  style,
}: {
  icon: React.ReactNode;
  label: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
        ...style,
      }}
    >
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: "linear-gradient(135deg,#056FB4,#7DB9D6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "12px",
          color: "#94A3B8",
          fontWeight: 500,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function CenterDiagram() {
  return (
    <div
      style={{
        position: "relative",
        width: "220px",
        height: "220px",
        margin: "0 auto",
      }}
    >
      {/* SVG connecting lines */}
      <svg
        width="220"
        height="220"
        viewBox="0 0 220 220"
        style={{ position: "absolute", top: 0, left: 0 }}
        aria-hidden="true"
      >
        {/* Top (110,18) to Bottom-Left (28,162) */}
        <line
          x1="110" y1="50"
          x2="60" y2="150"
          stroke="rgba(5,111,180,0.45)"
          strokeWidth="1.5"
        />
        {/* Top (110,18) to Bottom-Right (182,162) */}
        <line
          x1="110" y1="50"
          x2="160" y2="150"
          stroke="rgba(5,111,180,0.45)"
          strokeWidth="1.5"
        />
        {/* Bottom-Left to Bottom-Right */}
        <line
          x1="60" y1="162"
          x2="160" y2="162"
          stroke="rgba(5,111,180,0.45)"
          strokeWidth="1.5"
        />
      </svg>

      {/* Top circle — Connect */}
      <DiagramCircle
        icon={<UsersIcon />}
        label="Connect"
        style={{ top: 0, left: "50%", transform: "translateX(-50%)" }}
      />

      {/* Bottom-left circle — Copy */}
      <DiagramCircle
        icon={<CopyIcon />}
        label="Copy"
        style={{ bottom: 0, left: 0 }}
      />

      {/* Bottom-right circle — Grow */}
      <DiagramCircle
        icon={<GrowthIcon />}
        label="Grow"
        style={{ bottom: 0, right: 0 }}
      />

      {/* Center label */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.3,
            whiteSpace: "pre-line",
          }}
        >
          {"Copy\nGroup"}
        </span>
      </div>
    </div>
  );
}

export default function SocialTradingHowItWorksSection() {
  return (
    <section
      style={{
        background: "#050208",
        padding: "clamp(60px,6vw,100px) clamp(20px,5.5vw,80px)",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .how-it-works-grid {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .how-it-works-divider {
            display: none !important;
          }
        }
        /* 320px viewports: squeeze the cards & shrink fonts by 2px. */
        @media (max-width: 320px) {
          .howit-card {
            width: 100% !important;
            max-width: 280px !important;
            height: auto !important;
            padding: 18px !important;
          }
          .howit-card-label { font-size: 11px !important; }
          .howit-card-title { font-size: 24px !important; }
          .howit-item-title { font-size: 14px !important; }
          .howit-item-desc  { font-size: 11px !important; }
          .howit-cta {
            font-size: 12px !important;
            padding: 10px 18px !important;
          }
        }
      `}</style>

      <h2
        style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(28px,3vw,44px)",
          color: "#ffffff",
          textAlign: "center",
          margin: "0 0 16px",
          lineHeight: 1.2,
        }}
      >
        How Social Trading Works
      </h2>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "15px",
          color: "#94A3B8",
          textAlign: "center",
          maxWidth: "640px",
          margin: "0 auto 64px",
          lineHeight: 1.6,
        }}
      >
        A powerful way to connect those seeking easy market access with traders
        sharing proven strategies.
      </p>

      {/* Three-column grid */}
      <div
        className="how-it-works-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "367px 1fr 367px",
          gap: "40px",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* Left card — For Investors (Figma spec: 367×545, gradient bg + gradient border) */}
        <div className="howit-card" style={CARD_STYLE}>
          <CardHeader
            icon={<InvestorRoleIcon />}
            label="For Investors"
            title="Copy Top Traders"
          />
          <BulletList items={investorBullets} />
          <div style={{ marginTop: "auto", paddingTop: "20px" }}>
            <SmartLink
              href="https://social.finsaitrade.com"
              className="howit-cta"
              style={PRIMARY_CTA_STYLE}
            >
              Start Copying Now →
            </SmartLink>
          </div>
        </div>

        {/* Center column — Figma `connect.svg` (363×363). */}
        <div
          className="how-it-works-divider"
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <Image
            src="/social-trading/connect.svg"
            alt=""
            width={363}
            height={363}
            aria-hidden
            style={{ width: "363px", height: "363px", maxWidth: "100%" }}
          />
        </div>

        {/* Right card — For Strategy Providers */}
        <div className="howit-card" style={CARD_STYLE}>
          <CardHeader
            icon={<ProviderRoleIcon />}
            label="For Strategy Providers"
            title="Share Your Edge"
          />
          <BulletList items={providerBullets} />
          <div style={{ marginTop: "auto", paddingTop: "20px" }}>
            <SmartLink
              href="https://fx.finsaitrade.com/auth/register"
              className="howit-cta"
              style={SECONDARY_CTA_STYLE}
            >
              Become a Provider →
            </SmartLink>
          </div>
        </div>
      </div>
    </section>
  );
}
