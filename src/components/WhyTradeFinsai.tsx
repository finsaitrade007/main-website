import { getAccountsPage, type StrapiIconFeature } from "@/lib/strapi";

type IconKey =
  | "chart"
  | "bolt"
  | "scale"
  | "moon"
  | "devices"
  | "globe";

type Reason = { iconKey: IconKey; title: string };

const DEFAULT_TOP: Reason[] = [
  { iconKey: "chart", title: "Tight spreads across\naccount types" },
  { iconKey: "bolt", title: "Fast and reliable trade\n execution" },
  { iconKey: "scale", title: "Flexible leverage\n options" },
  { iconKey: "moon", title: "Swap-free accounts available" },
];

const DEFAULT_BOTTOM: Reason[] = [
  { iconKey: "devices", title: "MT5 access on desktop,\n web, and mobile" },
  { iconKey: "globe", title: "Dedicated multilingual\n support" },
];

const ICON_KEYS: IconKey[] = ["chart", "bolt", "scale", "moon", "devices", "globe"];

function reasonsFromCms(features: StrapiIconFeature[]): {
  topRow: Reason[];
  bottomRow: Reason[];
} {
  const rows = features.map((f, i) => ({
    iconKey: (ICON_KEYS.includes(f.iconKey as IconKey)
      ? f.iconKey
      : ICON_KEYS[i]) as IconKey,
    title: f.title,
  }));
  return { topRow: rows.slice(0, 4), bottomRow: rows.slice(4, 6) };
}

function ReasonIcon({ iconKey }: { iconKey: IconKey }) {
  // Stroke gradient ID is keyed per icon so multiple icons on the page
  // don't share / collide on the <defs>.
  const gradId = `wt-${iconKey}`;
  const stroke = `url(#${gradId})`;
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const grad = (
    <defs>
      <linearGradient
        id={gradId}
        x1="0"
        y1="0"
        x2="24"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7DB9D6" />
        <stop offset="1" stopColor="#2EA8FF" />
      </linearGradient>
    </defs>
  );

  switch (iconKey) {
    case "chart":
      return (
        <svg {...common}>
          {grad}
          <path d="M3 21h18" />
          <line x1="6" y1="20" x2="6" y2="13" />
          <line x1="11" y1="20" x2="11" y2="8" />
          <line x1="16" y1="20" x2="16" y2="4" />
          <line x1="20" y1="20" x2="20" y2="11" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          {grad}
          <path
            d="M13 2L4 14h7l-2 8 11-13h-7l2-7z"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "scale":
      return (
        <svg {...common}>
          {grad}
          <line x1="12" y1="4" x2="12" y2="20" />
          <line x1="5" y1="21" x2="19" y2="21" />
          <line x1="5" y1="6" x2="19" y2="6" />
          <circle cx="12" cy="4" r="1" />
          <path d="M3 14l3-7 3 7c0 1.7-1.3 3-3 3s-3-1.3-3-3z" />
          <path d="M15 14l3-7 3 7c0 1.7-1.3 3-3 3s-3-1.3-3-3z" />
        </svg>
      );
    case "moon":
      return (
        <svg {...common}>
          {grad}
          <path d="M20 14.5A8.5 8.5 0 1 1 10.5 5 7 7 0 0 0 20 14.5z" />
          <path d="M17.2 3.5l.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7 1.6-.7z" />
        </svg>
      );
    case "devices":
      return (
        <svg {...common}>
          {grad}
          <rect x="2" y="5" width="14" height="10" rx="1.4" />
          <line x1="1" y1="18" x2="14" y2="18" />
          <rect x="16" y="10" width="6" height="10" rx="1.2" />
          <line x1="18" y1="18" x2="20" y2="18" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          {grad}
          <circle cx="12" cy="12" r="9" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <path d="M3.6 9c5.6-2 11.2-2 16.8 0" />
          <path d="M3.6 15c5.6 2 11.2 2 16.8 0" />
        </svg>
      );
  }
}

function IconCircle({ iconKey }: { iconKey: IconKey }) {
  return (
    <div
      style={{
        position: "relative",
        width: "69px",
        height: "74px",
        borderRadius: "50%",
        background:"#020303",
        border: "2px solid #056FB499",
        boxShadow: "0px 0px 24px 16px #056FB43D",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <ReasonIcon iconKey={iconKey} />
    </div>
  );
}

function ReasonCell({ reason }: { reason: Reason }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "14px",
        height: "100%",
        padding: "0 16px",
        textAlign: "center",
      }}
    >
      <IconCircle iconKey={reason.iconKey} />
      <span
        style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 400,
          fontSize: "17px",
          lineHeight: "100%",
          color: "#94A3B8",
          whiteSpace: "pre-line",
        }}
      >
        {reason.title}
      </span>
    </div>
  );
}

export default async function WhyTradeFinsai() {
  const data = await getAccountsPage();
  const title = data?.whyTitle ?? "Everything You Need to Trade with Confidence";
  const description =
    data?.whyDescription ??
    "Choose an account designed for your trading style with competitive pricing, fast execution, and flexible trading conditions.";
  const cmsRows =
    data?.whyFeatures && data.whyFeatures.length >= 6
      ? reasonsFromCms(data.whyFeatures)
      : null;
  const topRow = cmsRows?.topRow ?? DEFAULT_TOP;
  const bottomRow = cmsRows?.bottomRow ?? DEFAULT_BOTTOM;
  return (
    <section
      className="page-section why-finsai-section"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1440px",
        minHeight: "672px",
        margin: "0 auto",
        background: "#050208",
        opacity: 1,
      }}
    >
      {/*
        Mobile (< 1024px): collapse the absolute-positioned reasons box into a
        natural-flow vertical stack. All 6 cells become a single column,
        dividers are hidden and the vertical column dividers are swapped for
        horizontal cell separators.
      */}
      <style>{`
        @media (max-width: 1023px) {
          .why-finsai-section { min-height: 0 !important; }
          .why-finsai-heading {
            position: static !important;
            height: auto !important;
            padding: 0 20px !important;
          }
          .why-finsai-box {
            position: static !important;
            width: calc(100% - 32px) !important;
            height: auto !important;
            margin: 28px auto 32px !important;
          }
          .why-finsai-inner {
            height: auto !important;
          }
          .why-finsai-row-top,
          .why-finsai-row-bottom {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .why-finsai-row-top > div,
          .why-finsai-row-bottom > div {
            height: auto !important;
            padding: 28px 16px !important;
            border-bottom: 1px solid rgba(56, 122, 255, 0.18);
          }
          .why-finsai-row-bottom > div:last-child {
            border-bottom: none;
          }
          .why-finsai-vdiv,
          .why-finsai-hdiv {
            display: none !important;
          }
        }
      `}</style>

      {/* Heading band: occupies the 0–229px region above the box,
          vertically centered so the box can land at exactly top: 229px. */}
      <div
        className="why-finsai-heading"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "229px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 80px",
        }}
      >
        <h2
          className="section-title"
          style={{ textAlign: "center", marginBottom: "14px" }}
        >
          {title}
        </h2>
        <p
          className="section-desc"
          style={{
            textAlign: "center",
            maxWidth: "900px",
            margin: 0,
            color: "#FFFFFF",
          }}
        >
          {description}
        </p>
      </div>

      {/* Reasons box: 1270 × 374, 1px gradient stroke, dark fill with
          a subtle blue glow bleeding in from the bottom-right corner. */}
      <div
        className="why-finsai-box"
        style={{
          position: "absolute",
          top: "229px",
          left: "85px",
          width: "1270px",
          height: "374px",
          padding: "1px",
          borderRadius: "20px",
          background:
            "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
          boxSizing: "border-box",
        }}
      >
        <div
          className="why-finsai-inner"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "19px",
            background:
              "linear-gradient(119.3deg, rgba(0, 0, 0, 0) 65.34%, rgba(73, 109, 171, 0.3) 99.36%), #050208",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          {/* Horizontal mid-divider — spec: 1267×1 @ top:187, left:2 from
              box outer ⇒ inner-y 186, inner-x 1 (1px gradient border). */}
          <div
            aria-hidden
            className="why-finsai-hdiv"
            style={{
              position: "absolute",
              top: "186px",
              left: "1px",
              width: "1267px",
              height: "1px",
              background:
                "linear-gradient(90deg, #0F0F10 0%, #387AFF 50%, #0F0F10 100%)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />

          {/* Vertical column dividers (1px × 185, gradient fades top → blue
              → bottom).  Spec coords are box-outer; inner = box − 1. */}
          {[
            { top: 1, left: 316 },
            { top: 1, left: 700 },
            { top: 1, left: 1021 },
            { top: 186, left: 633 },
          ].map((d) => (
            <div
              key={`vdiv-${d.top}-${d.left}`}
              aria-hidden
              className="why-finsai-vdiv"
              style={{
                position: "absolute",
                top: `${d.top}px`,
                left: `${d.left}px`,
                width: "1px",
                height: "185px",
                background:
                  "linear-gradient(180deg, #0F0F10 0%, #387AFF 50%, #0F0F10 100%)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
          ))}

          {/* Top row — 4 cells with column widths derived from the spec
              divider positions: 317 / 384 / 321 / 246 (last absorbs the
              2px the inner content area loses to the gradient border). */}
          <div
            className="why-finsai-row-top"
            style={{
              display: "grid",
              gridTemplateColumns: "317px 384px 321px 1fr",
              height: "186px",
            }}
          >
            {topRow.map((r) => (
              <ReasonCell key={r.title} reason={r} />
            ))}
          </div>

          {/* Bottom row — 2 cells split evenly at the spec divider x=634. */}
          <div
            className="why-finsai-row-bottom"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              height: "186px",
            }}
          >
            {bottomRow.map((r) => (
              <ReasonCell key={r.title} reason={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
