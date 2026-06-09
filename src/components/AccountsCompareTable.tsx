import { Fragment } from "react";
import { getAccountsPage } from "@/lib/strapi";

const YES_GREEN = "#2EE89B";

type Tier = {
  id: string;
  name: string;
};

type Row = {
  label: string;
  values: [string, string, string];
};

const TIERS: Tier[] = [
  { id: "choice", name: "Smart Choice" },
  { id: "pro", name: "Smart Pro" },
  { id: "ecn", name: "Smart ECN" },
];

const ROWS: Row[] = [
  { label: "Target Clients", values: ["New Retail Clients", "Mid-Tier Traders", "Advanced Traders"] },
  { label: "Min. Deposit", values: ["$100", "$1,000", "$5,000"] },
  { label: "Account Type", values: ["Hedging Accounts", "Hedging Accounts", "Hedging/Netting Accounts"] },
  { label: "Spread Type", values: ["1.4 pips", "0.6 pips", "0.0 to 0.1 pips"] },
  { label: "Commissions", values: ["No commission", "No commission", "0.03$"] },
  { label: "Swap Charges", values: ["SWAP Free", "SWAP Free", "SWAP Free"] },
  { label: "Algo/bot Trading Enable", values: ["Yes", "Yes", "Yes"] },
  { label: "VPS Access", values: ["NO", "NO", "Yes"] },
  { label: "Dedicated Account Manager", values: ["NO", "NO", "Yes"] },
];

function isYes(value: string) {
  return value.trim().toLowerCase() === "yes";
}

export default async function AccountsCompareTable() {
  const pageData = await getAccountsPage();
  const compareTitle = pageData?.compareTitle ?? "Which Account Fits You Best?";
  const compareDescription =
    pageData?.compareDescription ??
    "Choose the trading conditions that match your goals, strategy, and experience level.";

  // Box geometry (gradient border = 3px wrapper padding around inner).
  const BORDER = 3;
  const INNER_WIDTH = 1314;
  // Column widths (label + 3 tiers) summing to INNER_WIDTH.
  const colWidths = [330, 328, 328, 328] as const;
  const cols = colWidths.map((w) => `${w}px`).join(" ");

  // Vertical divider x-positions (inner coords) between columns.
  const dividerXs: number[] = [];
  let acc = 0;
  for (let i = 0; i < colWidths.length - 1; i += 1) {
    acc += colWidths[i];
    dividerXs.push(acc);
  }

  // Layout heights.
  const HEADER_H = 60;
  const ROW_H = 56;
  const INNER_HEIGHT = HEADER_H + ROW_H * ROWS.length;
  const OUTER_HEIGHT = INNER_HEIGHT + BORDER * 2;

  // Horizontal divider y-positions: one below header + one below each data row except the last.
  const horizontalYs: number[] = [HEADER_H];
  for (let i = 1; i < ROWS.length; i += 1) {
    horizontalYs.push(HEADER_H + ROW_H * i);
  }

  const H_DIVIDER_LEFT = 17 - BORDER;
  const H_DIVIDER_WIDTH = INNER_WIDTH - (H_DIVIDER_LEFT * 2);

  const horizontalGradient =
    "linear-gradient(90deg, rgba(255,255,255,0.014) -2.94%, rgba(5,111,180,0.7) 51.23%, rgba(255,255,255,0.014) 102.37%)";
  const dividerGradient =
    "linear-gradient(180deg, rgba(255,255,255,0.014) -2.94%, rgba(5,111,180,0.7) 51.23%, rgba(255,255,255,0.014) 102.37%)";

  const HEADING_BAND_H = 200;
  const SECTION_BOTTOM_PAD = 80;
  const SECTION_HEIGHT = HEADING_BAND_H + OUTER_HEIGHT + SECTION_BOTTOM_PAD;

  return (
    <section
      className="page-section"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1440px",
        minHeight: `${SECTION_HEIGHT}px`,
        margin: "0 auto",
        background: "#050208",
        opacity: 1,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: `${HEADING_BAND_H}px`,
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

      <div
        style={{
          position: "absolute",
          top: `${HEADING_BAND_H}px`,
          left: "60px",
          width: "1320px",
          height: `${OUTER_HEIGHT}px`,
          padding: `${BORDER}px`,
          borderRadius: "20px",
          background: "linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%)",
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
            gridTemplateRows: `${HEADER_H}px repeat(${ROWS.length}, ${ROW_H}px)`,
          }}
        >
          {dividerXs.map((x) => (
            <div
              key={`vdiv-${x}`}
              aria-hidden
              style={{
                position: "absolute",
                top: "4px",
                left: `${x}px`,
                width: "1px",
                height: `${INNER_HEIGHT - 8}px`,
                background: dividerGradient,
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
          ))}

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

          {/* Header row: empty corner + tier names */}
          <div />
          {TIERS.map((t) => (
            <div
              key={`h-${t.id}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "0 12px",
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: 0,
                color: "#FFFFFF",
              }}
            >
              {t.name}
            </div>
          ))}

          {ROWS.map((row) => (
            <Fragment key={`row-${row.label}`}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 32px",
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: 0,
                  color: "#FFFFFFBF",
                }}
              >
                {row.label}
              </div>
              {row.values.map((v, i) => {
                const yes = isYes(v);
                return (
                  <div
                    key={`c-${row.label}-${i}`}
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
          ))}
        </div>
      </div>
    </section>
  );
}
