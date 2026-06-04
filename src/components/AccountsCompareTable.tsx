import { Fragment } from "react";
import {
  getAccountTiers,
  getAccountsPage,
  type StrapiAccountTier,
} from "@/lib/strapi";

// Fallback dataset mirrors the 5-tier comparison table seeded in Strapi.
// Order of features here is the canonical row order rendered in the table.
const FALLBACK_TIERS: StrapiAccountTier[] = (() => {
  const FEATURES: { label: string; values: [string, string, string, string, string] }[] = [
    { label: "Target Clients",                       values: ["Beginners (first Trader)", "New Retail Clients", "Mid-Tier Traders", "Advanced Traders", "Passive Investors"] },
    { label: "Min. Deposit",                         values: ["$10", "$100", "$1,000", "$5,000", "$10,000"] },
    { label: "Fixed Tradeable Welcome Bonus",        values: ["100%", "80%", "40%", "20%", "5%"] },
    { label: "Account Type",                         values: ["Client Account", "Hedging Accounts", "Hedging Accounts", "Hedging/Netting Accounts", "Hedging/Netting Accounts"] },
    { label: "Spread Type",                          values: ["1.8 pips", "1.4 pips", "0.6 pips", "0.0 to 0.1 pips", "0.0 pips"] },
    { label: "Markup Streams",                       values: ["Large", "medium", "Small", "0 & $10 Fixed Spread on gold", "Zero"] },
    { label: "Commissions",                          values: ["No commission", "No commission", "No commission", "No commission", "$8 per million"] },
    { label: "Swap Charges",                         values: ["Swap Free", "SWAP Free", "SWAP Free", "SWAP Free", "SWAP Free"] },
    { label: "Deposit Fees",                         values: ["No Fees charged", "NO Fees charged", "NO Fees charged", "NO Fees charged", "NO Fees charged"] },
    { label: "Withdrawal Fees",                      values: ["No Fees charged", "No Fees charged", "No Fees charged", "No Fees charged", "No Fees charged"] },
    { label: "Leverage",                             values: ["1:1000", "1:1000", "1:1000", "1:500", "1:500"] },
    { label: "Max. Lots",                            values: ["no restriction", "no restriction", "no restriction", "Partial restriction", "restriction"] },
    { label: "News, Calendar & Technical Analysis",  values: ["Yes", "Yes", "Yes", "Yes", "Yes"] },
    { label: "Social Trading",                       values: ["NO", "NO", "NO", "Yes", "Yes"] },
    { label: "PAMM/MAM",                             values: ["NO", "NO", "NO", "NO", "Yes"] },
    { label: "Algo/bot Trading Enable",              values: ["NO", "NO", "NO", "Yes", "NO"] },
    { label: "Copy Trading",                         values: ["NO", "NO", "NO", "Yes", "Yes"] },
    { label: "VPS Access",                           values: ["NO", "NO", "NO", "Yes", "Yes"] },
    { label: "Verify Trader Access",                 values: ["NO", "NO", "NO", "NO", "Yes"] },
    { label: "Dedicated Account Manager",            values: ["NO", "NO", "NO", "NO", "Yes"] },
  ];
  const META = [
    { name: "Smart Start",  price: "$10" },
    { name: "Smart Choice", price: "$100" },
    { name: "Smart Pro",    price: "$1,000" },
    { name: "Smart Elite",  price: "$5,000" },
    { name: "Smart Vip",    price: "$10,000" },
  ];
  return META.map((m, col) => ({
    id: -(col + 1),
    documentId: `fb-${col + 1}`,
    name: m.name,
    price: m.price,
    unit: "Min. Deposit",
    featured: col === 2,
    order: col + 1,
    ctaLabel: "Open Account",
    ctaHref: "https://fx.finsaitrade.com/auth/register",
    features: FEATURES.map((f, i) => ({ id: i * 5 + col + 1, label: f.label, value: f.values[col as 0 | 1 | 2 | 3 | 4] })),
  }));
})();

// Bright green used for affirmative ("Yes") cells, per design spec.
const YES_GREEN = "#2EE89B";

function isYes(value: string) {
  return value.trim().toLowerCase() === "yes";
}

export default async function AccountsCompareTable() {
  const [fetched, pageData] = await Promise.all([
    getAccountTiers(),
    getAccountsPage(),
  ]);
  const tiers = fetched && fetched.length > 0 ? fetched : FALLBACK_TIERS;
  const compareTitle = pageData?.compareTitle ?? "Account Type";
  const compareDescription =
    pageData?.compareDescription ??
    "Trade with speed, stability, and total control from your desk or on the move. Finsai Trade delivers professional-grade platforms to match your trading needs";

  // Preserve label order by first appearance across tiers. The CMS seed
  // is authoritative; this just keeps things stable if editors add a label
  // to one tier but not another.
  const labelOrder: string[] = [];
  for (const t of tiers) {
    for (const f of t.features ?? []) {
      if (!labelOrder.includes(f.label)) labelOrder.push(f.label);
    }
  }

  const valueFor = (tier: StrapiAccountTier, label: string): string => {
    const found = tier.features?.find((f) => f.label === label);
    return found?.value ?? "—";
  };

  // Design spec measurements are anchored to the **outer box** (1320 wide).
  // The outer box has a 3px gradient border (wrapper padding), so the inner
  // table div is 1314 wide and offset by 3px from the box's left edge:
  //   box-x → inner-x = box-x - 3
  //
  // Per spec the 5 vertical column dividers sit at these box-x positions:
  //   line 1 = 233   (label / tier-1 edge)
  //   line 2 = 473   (gap 240)
  //   line 3 = 693   (gap 220)
  //   line 4 = 903   (gap 210)
  //   line 5 = 1113  (gap 210)
  // and the last column (Smart Vip) runs from 1113 → 1320 (= 207 box-x).
  const BORDER = 3;
  const INNER_WIDTH = 1314;
  const DIVIDER_BOX_XS = [233, 473, 693, 903, 1113] as const;

  // Column widths in inner-x: difference between consecutive edges, with the
  // very first edge being the box's left border (box-x = 3) and the last
  // being the right border (box-x = 1317).
  const colEdges = [BORDER, ...DIVIDER_BOX_XS, INNER_WIDTH + BORDER];
  const colWidths = colEdges.slice(1).map((edge, i) => edge - colEdges[i]);
  // colWidths = [230, 240, 220, 210, 210, 204] → total 1314 ✓
  const cols = colWidths.map((w) => `${w}px`).join(" ");

  // Divider x-positions in inner-div coordinates.
  const dividerXs: number[] = DIVIDER_BOX_XS.map((x) => x - BORDER);
  // dividerXs = [230, 470, 690, 900, 1110]

  // ── Horizontal row dividers ───────────────────────────────────────
  // Spec (1st row line):  width: 1303, height: 1, top: 65 (box-y),
  //                       left: 17  (box-x), gradient @ 90deg.
  // Box-y 65 → inner-y 62 ⇒ header row is 62px tall.  The 20 data rows
  // share the remaining inner height equally, so subsequent lines are
  // spaced by  ROW_H = (1238 - 62) / labelOrder.length  inner-y apart.
  const HEADER_H = 62;
  const INNER_HEIGHT = 1238; // 1244 box - 2 × 3 border
  const ROW_H =
    labelOrder.length > 0
      ? (INNER_HEIGHT - HEADER_H) / labelOrder.length
      : 0;
  // One line below every row except the last (which sits flush with the
  // bottom border of the box).  Rounded to 2dp to avoid floating-point
  // artefacts in the rendered inline styles.
  const horizontalYs: number[] = labelOrder.map(
    (_, i) => Math.round((HEADER_H + i * ROW_H) * 100) / 100,
  );

  // Horizontal lines use the same gradient at 90° (transparent → blue
  // → transparent along the line's length); vertical lines use 180°.
  const H_DIVIDER_LEFT = 17 - BORDER; // 14 in inner-x
  const H_DIVIDER_WIDTH = 1303;

  const horizontalGradient =
    "linear-gradient(90deg, rgba(255,255,255,0.014) -2.94%, rgba(5,111,180,0.7) 51.23%, rgba(255,255,255,0.014) 102.37%)";
  const dividerGradient =
    "linear-gradient(180deg, rgba(255,255,255,0.014) -2.94%, rgba(5,111,180,0.7) 51.23%, rgba(255,255,255,0.014) 102.37%)";

  return (
    <section
      style={{
        position: "relative",
        width: "1440px",
        maxWidth: "100%",
        height: "1553px",
        margin: "0 auto",
        background: "#050208",
        opacity: 1,
      }}
    >
      {/* Heading block: occupies the 229px top band above the table box.
          Centered both horizontally and vertically within that band so
          the table starts at exactly top: 229px. */}
      <div
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
          padding: "0 60px",
        }}
      >
        <h2
          className="section-title"
          style={{ textAlign: "center", marginBottom: "16px" }}
        >
          {compareTitle}
        </h2>
        <p
          className="section-desc"
          style={{
            textAlign: "center",
            maxWidth: "640px",
            margin: 0,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {compareDescription}
        </p>
      </div>

      {/* Outer wrapper paints the gradient border; inner div carries the
          actual table background. This is the canonical workaround for
          combining border-image with border-radius (the spec doesn't
          allow rounding gradient borders directly). */}
      <div
        style={{
          position: "absolute",
          top: "229px",
          left: "60px",
          width: "1320px",
          height: "1244px",
          padding: "3px",
          borderRadius: "20px",
          background:
            "linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%)",
        }}
      >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "17px",
              background: "#06090F",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: cols,
              gridTemplateRows: `${HEADER_H}px repeat(${labelOrder.length}, 1fr)`,
            }}
          >
            {/* Vertical column dividers: 1px glow lines (1226px tall,
                vertically near-centered with top: 4px) sitting on each
                column edge. Rendered as absolutely-positioned overlays so
                a single continuous gradient spans the full table height
                instead of being chopped into per-cell border slices. */}
            {dividerXs.map((x) => (
              <div
                key={`vdiv-${x}`}
                aria-hidden
                style={{
                  position: "absolute",
                  top: "4px",
                  left: `${x}px`,
                  width: "1px",
                  height: "1226px",
                  background: dividerGradient,
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />
            ))}

            {/* Horizontal row dividers: one below the header + one below
                every data row except the last (which sits on the box's
                bottom border). Same glow gradient, rotated 90° to run
                left-to-right along the line's length. */}
            {horizontalYs.map((y) => (
              <div
                key={`hdiv-${y}`}
                aria-hidden
                style={{
                  position: "absolute",
                  top: `${y}px`,
                  left: `${H_DIVIDER_LEFT}px`,
                  width: `${H_DIVIDER_WIDTH}px`,
                  height: "1px",
                  background: horizontalGradient,
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />
            ))}

            {/* Header row: empty corner cell + tier names */}
            <div />
            {tiers.map((t) => (
              <div
                key={`h-${t.id}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "0 12px",
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: 0,
                  color: "#FFFFFF",
                }}
              >
                {t.name}
              </div>
            ))}

            {/* Data rows */}
            {labelOrder.map((label) => {
              return (
                <Fragment key={`row-${label}`}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0 24px",
                      fontFamily: "var(--font-sora, Sora)",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                      letterSpacing: 0,
                      color: "#FFFFFFBF",
                    }}
                  >
                    {label}
                  </div>
                  {tiers.map((t) => {
                    const v = valueFor(t, label);
                    const yes = isYes(v);
                    return (
                      <div
                        key={`c-${t.id}-${label}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          padding: "0 12px",
                          fontFamily: "var(--font-sora, Sora)",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "24px",
                          letterSpacing: 0,
                          color: yes ? YES_GREEN : "#FFFFFFBF",
                        }}
                      >
                        {v}
                      </div>
                    );
                  })}
                </Fragment>
              );
            })}
          </div>
        </div>
    </section>
  );
}
