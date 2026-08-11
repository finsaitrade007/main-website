import Image from "next/image";
import SmartLink from "@/components/SmartLink";

// Figma spec: 367×545 card with a dark→blue background and a top→bottom
// gradient border. Implemented via the standard `padding-box` + `border-box`
// background trick so the border can be a gradient while keeping the radius.
const CARD_STYLE: React.CSSProperties = {
  width: "367px",
  // Was a fixed 545px. The bullet list + CTA exceeded it, so the CTA
  // (marginTop: "auto") was pushed outside the card and overlapped the border.
  // minHeight + a stretched grid row keeps both cards level and the CTA inside.
  minHeight: "545px",
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
    desc: "Follow proven strategy providers and grow your presence in our global investment community with ease.",
  },
  {
    icon: <BrowseProvidersIcon />,
    title: "Browse Strategy Providers",
    desc: "Deep dive into the historical performance data, win rates, and risk scores of each trader profile.",
  },
  {
    icon: <CopyTradesIcon />,
    title: "Copy Trades Automatically",
    desc: "Replicate trades instantly via our advanced automated copy trading engine with zero latency.",
  },
  {
    icon: <MonitorAnytimeIcon />,
    title: "Monitor Anytime",
    desc: "Track real-time trading signals, open orders, and portfolio updates directly on your dashboard or copy trading app.",
  },
];

const providerBullets: BulletItem[] = [
  {
    icon: <TradeNormallyIcon />,
    title: "Trade Normally",
    desc: "Keep executing your trading strategy on your account exactly as you always do.",
  },
  {
    icon: <FollowersCopyIcon />,
    title: "Followers Copy You",
    desc: "Your order execution mirrors live across follower accounts through institutional-grade mirror trading technology.",
  },
  {
    icon: <GrowFollowingIcon />,
    title: "Grow Your Following",
    desc: "Build visibility within our active social trading community and attract allocation capital.",
  },
  {
    icon: <EarnRewardsIcon />,
    title: "Earn Monthly Rewards",
    desc: "Receive transparent performance-based fee payouts directly into your wallet based on net profits generated.",
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
        A powerful way to connect investors seeking an automated approach to the
        financial markets with professional traders sharing robust investment
        strategies.
      </p>

      {/* Three-column grid */}
      <div
        className="how-it-works-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "367px 1fr 367px",
          gap: "40px",
          alignItems: "stretch",
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
              href="https://social.finsaitrade.com/portal/registration/subscription?redirectUrl=%2F"
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
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // Grid row is `stretch` for the cards; keep the artwork centred.
            alignSelf: "center",
          }}
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
              href="https://social.finsaitrade.com/portal/registration/provider?redirectUrl=%2F"
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
