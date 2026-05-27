import Link from "next/link";
import { getAccountTiers, type StrapiAccountTier } from "@/lib/strapi";

const FALLBACK_TIERS: StrapiAccountTier[] = [
  {
    id: -1,
    documentId: "fb-1",
    name: "Finsai Smart Choice",
    price: "$0",
    unit: "Commission / $100k",
    featured: false,
    order: 1,
    ctaLabel: "Open Account",
    ctaHref: "/register",
    features: [
      { id: 1, label: "Maximum Leverage", value: "1:400" },
      { id: 2, label: "Trading Instruments", value: "5000+" },
      { id: 3, label: "Spreads", value: "competitive" },
      { id: 4, label: "Min. Deposit", value: "$100" },
    ],
  },
  {
    id: -2,
    documentId: "fb-2",
    name: "Finsai Smart Pro",
    price: "$0",
    unit: "Commission / $100k",
    featured: true,
    order: 2,
    ctaLabel: "Open Account",
    ctaHref: "/register",
    features: [
      { id: 5, label: "Maximum Leverage", value: "1:400" },
      { id: 6, label: "Trading Instruments", value: "5000+" },
      { id: 7, label: "Spreads", value: "competitive" },
      { id: 8, label: "Minimum order size", value: "0.01" },
      { id: 9, label: "Min. Deposit", value: "$1000" },
      { id: 10, label: "Maximum Open", value: "Unlimited" },
    ],
  },
  {
    id: -3,
    documentId: "fb-3",
    name: "Finsai Smart ECN",
    price: "$1.5",
    unit: "Commission / $100k",
    featured: false,
    order: 3,
    ctaLabel: "Open Account",
    ctaHref: "/register",
    features: [
      { id: 11, label: "Maximum Leverage", value: "1:400" },
      { id: 12, label: "Trading Instruments", value: "5000+" },
      { id: 13, label: "Spreads", value: "competitive" },
      { id: 14, label: "Min. Deposit", value: "$5000" },
    ],
  },
];

const BORDER = "1px solid rgba(255,255,255,0.06)";

export default async function AccountsCompareTable() {
  const fetched = await getAccountTiers();
  const tiers = fetched && fetched.length > 0 ? fetched : FALLBACK_TIERS;

  // Build the union of feature labels across all tiers, preserving the
  // order they first appear in (so editors can control ordering by feature
  // order in the CMS).
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

  // First column width + per-tier column width
  const FIRST_COL = "260px";
  const TIER_COL = "1fr";
  const cols = `${FIRST_COL} ${tiers.map(() => TIER_COL).join(" ")}`;

  return (
    <section style={{ background: "#050208", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>
        <h2
          className="section-title"
          style={{ textAlign: "center", marginBottom: "16px" }}
        >
          Account Type
        </h2>
        <p
          className="section-desc"
          style={{
            textAlign: "center",
            maxWidth: "640px",
            margin: "0 auto 56px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Compare features across every Finsai Trade account at a glance and
          pick the one that fits your trading style.
        </p>

        <div
          style={{
            border: "1px solid rgba(5,111,180,0.35)",
            borderRadius: "20px",
            background: "#06090F",
            overflow: "hidden",
          }}
        >
          {/* Header row: tier names */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: cols,
              borderBottom: BORDER,
            }}
          >
            <div style={{ padding: "22px 28px" }} />
            {tiers.map((t) => (
              <div
                key={t.id}
                style={{
                  padding: "22px 20px",
                  textAlign: "center",
                  borderLeft: BORDER,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 600,
                    fontSize: "17px",
                    color: t.featured ? "#2EA8FF" : "#FFFFFF",
                    marginBottom: "6px",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  Starting From{" "}
                  <span style={{ color: "rgba(255,255,255,0.85)" }}>
                    {t.price}
                  </span>{" "}
                  {t.unit}
                </div>
              </div>
            ))}
          </div>

          {/* Feature rows */}
          {labelOrder.map((label, i) => (
            <div
              key={label}
              style={{
                display: "grid",
                gridTemplateColumns: cols,
                borderBottom: BORDER,
                background:
                  i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
              }}
            >
              <div
                style={{
                  padding: "18px 28px",
                  fontFamily: "var(--font-inter, Inter)",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {label}
              </div>
              {tiers.map((t) => (
                <div
                  key={t.id}
                  style={{
                    padding: "18px 20px",
                    textAlign: "center",
                    borderLeft: BORDER,
                    fontFamily: "var(--font-inter, Inter)",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  {valueFor(t, label)}
                </div>
              ))}
            </div>
          ))}

          {/* Footer row: CTAs */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: cols,
            }}
          >
            <div style={{ padding: "22px 28px" }} />
            {tiers.map((t) => (
              <div
                key={t.id}
                style={{
                  padding: "20px",
                  textAlign: "center",
                  borderLeft: BORDER,
                }}
              >
                <Link
                  href={t.ctaHref || "/register"}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 22px",
                    borderRadius: "60px",
                    background:
                      "linear-gradient(90deg, rgba(5,111,180,0.85) 0%, #056FB4 100%)",
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 500,
                    fontSize: "13px",
                    color: "#FFFFFF",
                    textDecoration: "none",
                  }}
                >
                  {t.ctaLabel || "Open Account"}{" "}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
