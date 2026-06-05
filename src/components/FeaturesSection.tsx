import {
  getHomepage,
  type StrapiHomepage,
  type StrapiFeatureItem,
} from "@/lib/strapi";
import FeaturesCryptoStack from "./FeaturesCryptoStack";

const FALLBACK_FEATURES: StrapiFeatureItem[] = [
  { id: 1, iconKey: "transparency", title: "No Hidden Fees,\nTransparent Trades" },
  { id: 2, iconKey: "assets", title: "1000+\nAssets" },
  { id: 3, iconKey: "leverage", title: "Up to 500x\nLeverage" },
  { id: 4, iconKey: "deposits", title: "Easy Deposits &\nWithdrawals" },
  { id: 5, iconKey: "learning", title: "Live\nLearning" },
  { id: 6, iconKey: "social", title: "Social\ntrading" },
];

const FALLBACK_HEADER: Pick<
  StrapiHomepage,
  "featuresBadge" | "featuresTitle" | "featuresDescription"
> = {
  featuresBadge: "What Sets Us Apart ",
  featuresTitle: "Why Top Traders Choose Finsai Trade",
  featuresDescription:
    "Trade securely across 1,000+ assets on a globally regulated platform with transparent pricing and 24/7 expert support.",
};

function FeatureIcon({ iconKey }: { iconKey: StrapiFeatureItem["iconKey"] }) {
  const paths: Record<StrapiFeatureItem["iconKey"], string> = {
    transparency:
      "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75",
    assets:
      "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
    leverage:
      "M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181",
    deposits:
      "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
    learning:
      "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342",
    social:
      "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z",
  };
  const gradId = `g-${iconKey}`;
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path
        d={paths[iconKey]}
        stroke={`url(#${gradId})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id={gradId} x1="24" y1="12" x2="0" y2="12">
          <stop stopColor="#7DB9D6" />
          <stop offset="1" stopColor="#056FB4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default async function FeaturesSection() {
  const home = await getHomepage();
  const header = home ?? FALLBACK_HEADER;
  const features =
    home?.featureItems && home.featureItems.length > 0
      ? home.featureItems
      : FALLBACK_FEATURES;

  return (
    <section className="py-24 px-4 bg-[#050208]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-start mb-4">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 22px",
              background: "#000000",
              border: "1.2px solid rgba(255,255,255,0.15)",
              borderRadius: "60px",
            }}
          >
            <span className="badge-text">{header.featuresBadge}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title" style={{ marginBottom: "14px" }}>
              {header.featuresTitle}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "25px",
                color: "#FFFFFF",
                marginBottom: "32px",
              }}
            >
              {header.featuresDescription}
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
              {features.map((f) => (
                <div key={f.id} className="flex items-center gap-4">
                  <div
                    className="shrink-0 flex items-center justify-center"
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "50%",
                    }}
                  >
                    <FeatureIcon iconKey={f.iconKey} />
                  </div>
                  <span
                    className="feature-item__label"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {f.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center relative">
            <FeaturesCryptoStack />
          </div>
        </div>
      </div>
    </section>
  );
}
