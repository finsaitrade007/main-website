type IconKey =
  | "security"
  | "execution"
  | "spreads"
  | "leverage"
  | "support"
  | "regulated";

const reasons: { iconKey: IconKey; title: string }[] = [
  { iconKey: "security", title: "Bank-Grade Security" },
  { iconKey: "execution", title: "Ultra-Fast Execution" },
  { iconKey: "spreads", title: "Competitive Spreads" },
  { iconKey: "leverage", title: "Flexible Leverage" },
  { iconKey: "support", title: "24/7 Expert Support" },
  { iconKey: "regulated", title: "Globally Regulated" },
];

function ReasonIcon({ iconKey }: { iconKey: IconKey }) {
  const paths: Record<IconKey, string> = {
    security:
      "M12 3l8 4v5c0 4.5-3.2 8.6-8 10-4.8-1.4-8-5.5-8-10V7l8-4z",
    execution:
      "M13 2L4.5 12.5h6L11 22l8.5-10.5h-6L13 2z",
    spreads:
      "M3 17l6-6 4 4 8-8M14 7h7v7",
    leverage:
      "M21 12a9 9 0 1 1-9-9M21 3v6h-6M12 8v4l3 3",
    support:
      "M21 12a9 9 0 0 0-18 0v6a2 2 0 0 0 2 2h2v-8H5a7 7 0 0 1 14 0h-2v8h2a2 2 0 0 0 2-2v-6z",
    regulated:
      "M12 3l9 4-9 4-9-4 9-4zM3 11l9 4 9-4M3 15l9 4 9-4",
  };
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#g-${iconKey})`}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[iconKey]} />
      <defs>
        <linearGradient id={`g-${iconKey}`} x1="24" y1="12" x2="0" y2="12">
          <stop stopColor="#7DB9D6" />
          <stop offset="1" stopColor="#056FB4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function WhyTradeFinsai() {
  return (
    <section style={{ background: "#050208", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>
        <h2
          className="section-title"
          style={{ textAlign: "center", marginBottom: "14px" }}
        >
          Why Trade with Finsai
        </h2>
        <p
          className="section-desc"
          style={{
            textAlign: "center",
            maxWidth: "620px",
            margin: "0 auto 64px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Built for traders who expect more — transparent pricing, deep markets,
          and the tools to act on opportunity the moment it appears.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {reasons.map((r) => (
            <div
              key={r.iconKey}
              style={{
                background: "#06090F",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "16px",
                padding: "28px 24px",
                display: "flex",
                alignItems: "center",
                gap: "18px",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "rgba(5,111,180,0.12)",
                  border: "1px solid rgba(5,111,180,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ReasonIcon iconKey={r.iconKey} />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-sora, Sora)",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                }}
              >
                {r.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
