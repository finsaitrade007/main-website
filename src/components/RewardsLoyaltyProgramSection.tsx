import Link from "next/link";

type Tier = {
  name: string;
  description: string;
  color: string;
};

const TIERS: Tier[] = [
  { name: "Bronze", description: "Onboarding", color: "#B17646" },
  { name: "Silver", description: "Active traders", color: "#C0C9D2" },
  { name: "Gold", description: "Loyal members", color: "#E5B94B" },
  { name: "Platinum", description: "Frequent traders", color: "#A7B0BD" },
  { name: "Diamond", description: "Top performers", color: "#7DB9D6" },
];

const PERKS = [
  "Cashbacks",
  "Tradable Volume",
  "Exclusive Events",
  "Lifetime Perks",
];

export default function RewardsLoyaltyProgramSection() {
  return (
    <section style={{ background: "#050208", padding: "40px 0 80px" }}>
      <div
        style={{
          width: "1280px",
          maxWidth: "calc(100% - 80px)",
          margin: "0 auto",
          padding: "40px",
          borderRadius: "20px",
          border: "1px solid rgba(125,185,214,0.2)",
          background:
            "linear-gradient(157.26deg, rgba(10,18,32,0.85) 0%, rgba(5,111,180,0.18) 100%)",
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 600,
              fontSize: "32px",
              lineHeight: "40px",
              color: "#FFFFFF",
            }}
          >
            Loyalty Program
            <br />
            Overview
          </h2>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "22px",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Compounds the more you trade. Climb from Bronze to Diamond and
            unlock progressively better cashback, tighter spreads and exclusive
            events that money can&apos;t normally buy.
          </p>
          <Link
            href="#"
            className="btn-text"
            style={{
              alignSelf: "flex-start",
              boxSizing: "border-box",
              padding: "11px 22px",
              borderRadius: "8px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Track Your Loyalty Level
          </Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "16px",
            }}
          >
            {TIERS.map((t) => (
              <div
                key={t.name}
                style={{
                  position: "relative",
                  padding: "20px 12px",
                  borderRadius: "14px",
                  border: "1px solid rgba(125,185,214,0.18)",
                  background:
                    "linear-gradient(180deg, rgba(15,21,35,0.85) 0%, rgba(5,111,180,0.08) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                  textAlign: "center",
                }}
              >
                <TierMedal color={t.color} />
                <div
                  style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#FFFFFF",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 400,
                    fontSize: "11px",
                    lineHeight: "16px",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {t.description}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}
          >
            {PERKS.map((p) => (
              <div
                key={p}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  border: "1px solid rgba(125,185,214,0.16)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 500,
                    fontSize: "13px",
                    color: "#FFFFFF",
                  }}
                >
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TierMedal({ color }: { color: string }) {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden>
      <circle
        cx="23"
        cy="23"
        r="20"
        fill={color}
        opacity="0.18"
        stroke={color}
        strokeWidth="1.2"
      />
      <circle
        cx="23"
        cy="23"
        r="12"
        fill={`${color}`}
        opacity="0.55"
      />
      <path
        d="M18 24l4 4 7-9"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
