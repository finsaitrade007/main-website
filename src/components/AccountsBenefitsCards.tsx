import Link from "next/link";

type BenefitBullet = { key: string; value: string };

type BenefitCard = {
  title: string;
  description: string;
  bullets: BenefitBullet[];
  // Footers diverge per card: the left card shows a "Note:" label,
  // the right card shows the gradient CTA button.
  footer:
    | { kind: "note"; text: string }
    | { kind: "cta"; label: string; href: string };
};

// Both cards currently share the same 4 bullets — they're a generic
// "what you get with this account" list.  Stored once and reused.
const COMMON_BULLETS: BenefitBullet[] = [
  { key: "Deposit Method", value: "Crypto, E-wallets" },
  { key: "Withdrawal Processing", value: "Within 24 business hours" },
  { key: "Security Method", value: "Crypto, E-wallets" },
  { key: "No Hidden Charges", value: "Transparent fee structure" },
];

const cards: BenefitCard[] = [
  {
    title: "Deposit & Withdrawal",
    description: "Smooth, Secure, and fast Transactions",
    bullets: COMMON_BULLETS,
    footer: { kind: "note", text: "Note:" },
  },
  {
    title: "Smart Elite - Request Only  VIP Access",
    description: "No downloads. Just log in and trade.",
    bullets: COMMON_BULLETS,
    footer: { kind: "cta", label: "Request Access", href: "/request-access" },
  },
];

function CardIcon() {
  // Small circular accent icon shown next to the card title.  Mirrors
  // the stylised wallet / link glyph from the design — a circle with
  // an interlocking chevron pair inside, painted with the brand gradient.
  return (
    <div
      style={{
        position: "relative",
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 30% 30%, rgba(70,140,210,0.35) 0%, rgba(5,111,180,0.12) 60%, rgba(0,0,0,0.6) 100%)",
        border: "1px solid rgba(125,185,214,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#abc-grad)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient id="abc-grad" x1="0" y1="0" x2="24" y2="24">
            <stop stopColor="#7DB9D6" />
            <stop offset="1" stopColor="#2EA8FF" />
          </linearGradient>
        </defs>
        <path d="M9 5l-4 4 4 4" />
        <path d="M15 19l4-4-4-4" />
        <path d="M5 9h10" />
        <path d="M9 15h10" />
      </svg>
    </div>
  );
}

function Dot() {
  return (
    <span
      aria-hidden
      style={{
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        background: "#FFFFFF",
        flexShrink: 0,
        marginTop: "9px",
      }}
    />
  );
}

export default function AccountsBenefitsCards() {
  return (
    <section style={{ background: "#050208", padding: "60px 0 100px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
          padding: "0 80px",
        }}
      >
        {cards.map((c) => (
          // Outer wrapper paints the 2px gradient stroke; inner div
          // carries the diagonal background fill.
          <div
            key={c.title}
            style={{
              width: "623px",
              height: "465px",
              padding: "2px",
              borderRadius: "20px",
              background:
                "linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%)",
              opacity: 1,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
                borderRadius: "18px",
                background:
                  "linear-gradient(157.26deg, #050208 -0.93%, #056FB4 444.35%)",
                padding: "31px 24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Title + description block — 575×88.05 column with a fixed
                  16px gap between the icon/heading row and the supporting
                  copy.  Inner content area is 571 (623 − 4 border − 48
                  padding); the spec's 575 width overshoots by 2px each
                  side, absorbed with symmetric negative margins. */}
              <div
                style={{
                  width: "575px",
                  minHeight: "88.05px",
                  marginLeft: "-2px",
                  marginRight: "-2px",
                  marginBottom: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <CardIcon />
                  <h3
                    style={{
                      fontFamily: "var(--font-sora, Sora)",
                      fontWeight: 600,
                      fontSize: "22px",
                      lineHeight: "30px",
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    {c.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontSize: "15px",
                    lineHeight: "23px",
                    color: "rgba(255,255,255,0.65)",
                    margin: 0,
                  }}
                >
                  {c.description}
                </p>
              </div>

              {/* Faint white-fade divider — 575×1 with a transparent →
                  20% white → transparent gradient, sitting between the
                  heading block and the bullet list. */}
              <div
                aria-hidden
                style={{
                  width: "575px",
                  height: "1px",
                  marginLeft: "-2px",
                  marginRight: "-2px",
                  marginBottom: "24px",
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
                }}
              />

              {/* Bullet list — 485×192 with the four bullets distributed
                  vertically (space-between) so the spacing scales with
                  the spec'd block height rather than a hard-coded gap. */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  width: "485px",
                  height: "192px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {c.bullets.map((b) => (
                  <li
                    key={b.key}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontFamily: "var(--font-inter, Inter)",
                      fontSize: "15px",
                      lineHeight: "23px",
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    <Dot />
                    <span>
                      <strong
                        style={{
                          fontWeight: 600,
                          color: "#FFFFFF",
                        }}
                      >
                        {b.key}:
                      </strong>{" "}
                      {b.value}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Footer: pushed to the bottom of the card.  Renders either
                  a "Note:" label or the gradient "Request Access" pill. */}
              <div style={{ marginTop: "auto", paddingTop: "24px" }}>
                {c.footer.kind === "note" ? (
                  <span
                    style={{
                      fontFamily: "var(--font-inter, Inter)",
                      fontSize: "15px",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {c.footer.text}
                  </span>
                ) : (
                  <Link
                    href={c.footer.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "12px 26px",
                      borderRadius: "60px",
                      background:
                        "linear-gradient(90deg, #056FB4 0%, #48C3F4 100%)",
                      fontFamily: "var(--font-sora, Sora)",
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "#FFFFFF",
                      textDecoration: "none",
                    }}
                  >
                    {c.footer.label}
                    <span aria-hidden>→</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
