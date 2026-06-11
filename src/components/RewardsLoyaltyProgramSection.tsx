import Link from "@/components/SmartLink";
import {
  getRewardsPage,
  type StrapiIconFeature,
  type StrapiRewardsPage,
  type StrapiTagline,
} from "@/lib/strapi";

type FallbackData = Pick<
  StrapiRewardsPage,
  "loyaltyTitle" | "loyaltyDescription" | "loyaltyCtaLabel" | "loyaltyCtaHref"
> & { loyaltyTiers: StrapiIconFeature[]; loyaltyPerks: StrapiTagline[] };

const TIER_COLORS: Record<string, string> = {
  bronze: "#B17646",
  silver: "#C0C9D2",
  gold: "#E5B94B",
  platinum: "#A7B0BD",
  diamond: "#7DB9D6",
};

const FALLBACK: FallbackData = {
  loyaltyTitle: "Loyalty Program\nOverview",
  loyaltyDescription:
    "Compounds the more you trade. Climb from Bronze to Diamond and unlock progressively better cashback, tighter spreads and exclusive events that money can't normally buy.",
  loyaltyCtaLabel: "Track Your Loyalty Level",
  loyaltyCtaHref: "#",
  loyaltyTiers: [
    { id: 1, title: "Bronze", description: "Onboarding", iconKey: "bronze" },
    { id: 2, title: "Silver", description: "Active traders", iconKey: "silver" },
    { id: 3, title: "Gold", description: "Loyal members", iconKey: "gold" },
    { id: 4, title: "Platinum", description: "Frequent traders", iconKey: "platinum" },
    { id: 5, title: "Diamond", description: "Top performers", iconKey: "diamond" },
  ],
  loyaltyPerks: [
    { id: 1, label: "Cashbacks" },
    { id: 2, label: "Tradable Volume" },
    { id: 3, label: "Exclusive Events" },
    { id: 4, label: "Lifetime Perks" },
  ],
};

export default async function RewardsLoyaltyProgramSection() {
  const data = await getRewardsPage();
  const title = data?.loyaltyTitle ?? FALLBACK.loyaltyTitle;
  const description = data?.loyaltyDescription ?? FALLBACK.loyaltyDescription;
  const ctaLabel = data?.loyaltyCtaLabel ?? FALLBACK.loyaltyCtaLabel;
  const ctaHref = data?.loyaltyCtaHref ?? FALLBACK.loyaltyCtaHref;
  const tiers =
    data?.loyaltyTiers && data.loyaltyTiers.length > 0
      ? data.loyaltyTiers
      : FALLBACK.loyaltyTiers;
  const perks =
    data?.loyaltyPerks && data.loyaltyPerks.length > 0
      ? data.loyaltyPerks
      : FALLBACK.loyaltyPerks;
  return (
    <section
      className="page-section"
      style={{ background: "#050208", paddingBottom: "80px" }}
    >
      <div
        className="loyalty-grid"
        style={{
          boxSizing: "border-box",
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(20px, 3vw, 40px)",
          borderRadius: "20px",
          border: "1px solid rgba(125,185,214,0.2)",
          background:
            "linear-gradient(157.26deg, rgba(10,18,32,0.85) 0%, rgba(5,111,180,0.18) 100%)",
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
            <span style={{ whiteSpace: "pre-line" }}>{title}</span>
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
            {description}
          </p>
          <Link
            href={ctaHref}
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
            {ctaLabel}
          </Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
              gap: "16px",
            }}
          >
            {tiers.map((t) => (
              <div
                key={t.id ?? t.title}
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
                <TierMedal
                  color={
                    TIER_COLORS[(t.iconKey ?? "").toLowerCase()] ?? "#7DB9D6"
                  }
                />
                <div
                  style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#FFFFFF",
                  }}
                >
                  {t.title}
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
              gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
              gap: "16px",
            }}
          >
            {perks.map((p) => (
              <div
                key={p.id ?? p.label}
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
                  {p.label}
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
