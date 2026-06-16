const INNER_BG = "linear-gradient(137.88deg, #050208 1.04%, #056FB4 536.19%)";
const BORDER_GRADIENT = "linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%)";
const CARD_BG = "#D9D9D90D";

type IconKind = "segregated" | "shield" | "lock" | "verified";

const BADGES: { iconKey: IconKind; line1: string; line2: string }[] = [
  { iconKey: "segregated", line1: "Segregated", line2: "Clients" },
  { iconKey: "shield", line1: "PCI DSS", line2: "Complaint" },
  { iconKey: "lock", line1: "KYC & AML", line2: "Encryption" },
  { iconKey: "verified", line1: "2FA", line2: "Partners" },
];

function TrustIcon({ kind }: { kind: IconKind }) {
  const common = {
    width: 36,
    height: 36,
    viewBox: "0 0 36 36",
    fill: "none",
    stroke: "#7DB9D6",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (kind) {
    case "segregated":
      return (
        <svg {...common}>
          <circle cx="13" cy="13" r="4" />
          <circle cx="25" cy="14" r="3.5" />
          <path d="M5 28c0-4 3.5-7 8-7s8 3 8 7" />
          <path d="M20 28c0-3 2.5-5 5-5s5 2 5 5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M18 4 6 8v8c0 7 5.5 12 12 14 6.5-2 12-7 12-14V8L18 4Z" />
          <path d="m13 18 3 3 6-6" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="8" y="16" width="20" height="14" rx="2.5" />
          <path d="M12 16v-4a6 6 0 0 1 12 0v4" />
          <circle cx="18" cy="23" r="1.6" />
        </svg>
      );
    case "verified":
    default:
      return (
        <svg {...common}>
          <path d="M18 3 22 7l6-.5L28 13l4 5-4 5 .5 6-6-.5L18 33l-4-4-6 .5L8.5 23 4 18l4.5-5L8 7l6 .5L18 3Z" />
          <path d="m13 18 3 3 6-7" />
        </svg>
      );
  }
}

export default function PaymentsTrustBar() {
  return (
    <section
      className="page-section payments-trust-section"
      style={{
        background: "#050208",
        width: "100%",
        maxWidth: "1440px",
        paddingBottom: "40px",
      }}
    >
      <div
        className="payments-trust-bar"
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          borderRadius: "20px",
          background: BORDER_GRADIENT,
          padding: "1px",
          boxSizing: "border-box",
        }}
      >
        <div
          className="payments-trust-bar__inner"
          style={{
            width: "100%",
            minHeight: "195px",
            borderRadius: "19px",
            background: INNER_BG,
            padding: "46.13px 68px",
            display: "grid",
            // First card is wider per Figma spec: 287.02 / 231.25 ≈ 1.241
            gridTemplateColumns: "287.02fr 231.25fr 231.25fr 231.25fr",
            gap: "54.41px",
            boxSizing: "border-box",
            alignItems: "center",
          }}
        >
          {BADGES.map((b) => (
            <div
              key={b.line1}
              className="payments-trust-card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "0 22px",
                borderRadius: "21.76px",
                background: CARD_BG,
                boxSizing: "border-box",
                minWidth: 0,
                height: "103.38px",
              }}
            >
              <span
                style={{
                  width: "36px",
                  height: "36px",
                  flexShrink: 0,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TrustIcon kind={b.iconKey} />
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 400,
                    fontSize: "clamp(14px, 1.88vw, 27.1px)",
                    lineHeight: "100%",
                    letterSpacing: "-0.01em",
                    color: "#FFFFFF",
                    whiteSpace: "nowrap",
                  }}
                >
                  {b.line1}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 400,
                    fontSize: "clamp(13px, 1.4vw, 24.5px)",
                    lineHeight: "100%",
                    letterSpacing: "-0.01em",
                    color: "#E0E0E0",
                    whiteSpace: "nowrap",
                  }}
                >
                  {b.line2}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
