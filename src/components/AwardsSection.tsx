import Image from "next/image";
import {
  getHomepage,
  getAwards,
  strapiImageUrl,
  type StrapiAward,
} from "@/lib/strapi";

const FALLBACK_HEADER = {
  awardsBadge: "Our Awards",
  awardsTitle: "Recognized for Elite Trading Excellence",
  awardsDescription:
    "Trade seamlessly on the go or from your desktop with our cutting-edge platforms.",
};

const FALLBACK_AWARDS: StrapiAward[] = [
  { id: 1, documentId: "fb-1", title: "The Fastest Growing\nBroker 2024", image: null, order: 1 },
  { id: 2, documentId: "fb-2", title: "The Best IB\nProgram 2025", image: null, order: 2 },
  { id: 3, documentId: "fb-3", title: "The Fastest Growing\nBroker 2025", image: null, order: 3 },
  { id: 4, documentId: "fb-4", title: "Innovative Startup in\nFinance Award 2023", image: null, order: 4 },
];

const LOCAL_AWARD_IMAGES = [
  "/awards/wld-fi-2024.png",
  "/awards/wld-fi-2025.png",
  "/awards/world-forex-award.png",
  "/awards/innovative-startup.png",
];

export default async function AwardsSection() {
  const [home, fetched] = await Promise.all([getHomepage(), getAwards()]);
  const header = home ?? FALLBACK_HEADER;
  const awards = fetched && fetched.length > 0 ? fetched : FALLBACK_AWARDS;

  return (
    <section style={{ background: "#050208", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 22px",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "60px",
            }}
          >
            <span className="badge-text">{header.awardsBadge}</span>
          </span>
        </div>

        <h2
          className="section-title"
          style={{ textAlign: "center", marginBottom: "16px" }}
        >
          {header.awardsTitle}
        </h2>

        <p
          className="section-desc"
          style={{
            textAlign: "center",
            maxWidth: "560px",
            margin: "0 auto 64px",
          }}
        >
          {header.awardsDescription}
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "32px" }}>
          {awards.map((award, idx) => {
            const img = strapiImageUrl(award.image) ?? LOCAL_AWARD_IMAGES[idx];
            return (
              <div
                key={award.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "24px",
                }}
              >
                <div
                  style={{
                    width: "260px",
                    height: "260px",
                    borderRadius: "50%",
                    border: "1px solid rgba(5,111,180,0.45)",
                    boxShadow:
                      "0 0 30px 8px rgba(5,111,180,0.12), inset 0 0 40px rgba(5,111,180,0.06)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {img && (
                    <Image
                      src={img}
                      alt={award.title}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  )}
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "1.4",
                    color: "#FFFFFF",
                    textAlign: "center",
                    whiteSpace: "pre-line",
                    margin: 0,
                  }}
                >
                  {award.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
