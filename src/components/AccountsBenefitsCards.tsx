import Link from "next/link";

type BenefitCard = {
  title: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
};

const cards: BenefitCard[] = [
  {
    title: "Deposit With Interest",
    description:
      "Earn passive interest on idle account balances while you wait for the right setup.",
    bullets: [
      "Interest paid daily on unused margin",
      "No lock-in period — withdraw any time",
      "Available on Pro and ECN accounts",
      "Eligible balances above $1,000",
    ],
    ctaLabel: "Learn More",
    ctaHref: "/deposit-interest",
  },
  {
    title: "Demo or Real — Your Account, Your Way",
    description:
      "Start risk-free with a demo, or jump straight into live markets with as little as $100.",
    bullets: [
      "$10,000 virtual demo balance",
      "Identical conditions to live trading",
      "Switch from demo to live in one click",
      "All 5,000+ instruments available in demo",
    ],
    ctaLabel: "Open Demo",
    ctaHref: "/demo",
  },
];

function Bullet() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      style={{ flexShrink: 0, marginTop: "3px" }}
    >
      <circle cx="10" cy="10" r="9" stroke="#2EA8FF" strokeWidth="1.4" />
      <path
        d="M5.8 10.4 8.7 13.3 14.2 7.4"
        stroke="#2EA8FF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AccountsBenefitsCards() {
  return (
    <section style={{ background: "#050208", padding: "60px 0 100px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
        >
          {cards.map((c) => (
            <div
              key={c.title}
              style={{
                background: "#06090F",
                border: "1px solid rgba(5,111,180,0.3)",
                borderRadius: "20px",
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 600,
                  fontSize: "22px",
                  color: "#FFFFFF",
                  margin: 0,
                  marginBottom: "12px",
                }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter, Inter)",
                  fontSize: "14px",
                  lineHeight: "23px",
                  color: "rgba(255,255,255,0.55)",
                  margin: 0,
                  marginBottom: "24px",
                }}
              >
                {c.description}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  marginBottom: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {c.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontFamily: "var(--font-inter, Inter)",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.85)",
                      lineHeight: "22px",
                    }}
                  >
                    <Bullet />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={c.ctaHref}
                style={{
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 24px",
                  borderRadius: "60px",
                  background:
                    "linear-gradient(90deg, rgba(5,111,180,0.85) 0%, #056FB4 100%)",
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 500,
                  fontSize: "13px",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  marginTop: "auto",
                }}
              >
                {c.ctaLabel} <span aria-hidden>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
