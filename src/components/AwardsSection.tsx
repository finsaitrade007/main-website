import Image from "next/image";
import {
  getHomepage,
  getAwards,
  type StrapiAward,
} from "@/lib/strapi";

const FALLBACK_HEADER = {
  awardsBadge: "Our Awards",
  awardsTitle: "Recognized for Elite Trading Excellence",
  awardsDescription:
    "Trade seamlessly on the go or from your desktop with our cutting-edge platforms.",
};

const FALLBACK_AWARDS: StrapiAward[] = [
  { id: 1, documentId: "fb-1", title: "The Fastest Growing\nBroker 2024", order: 1 },
  { id: 2, documentId: "fb-2", title: "The Fastest Growing\nBroker 2025", order: 2 },
  { id: 3, documentId: "fb-3", title: "The Fastest Growing\nBroker 2025", order: 3 },
  { id: 4, documentId: "fb-4", title: "Innovative Startup in\nFinance Award 2023", order: 4 },
];

const LOCAL_AWARD_IMAGES = [
  "/awards/wld-fi.png",
  "/awards/world-forex.png",
  "/awards/wld-fi.png",
  "/awards/innovative.png",
];

export default async function AwardsSection() {
  const [home, fetched] = await Promise.all([getHomepage(), getAwards()]);
  const header = home ?? FALLBACK_HEADER;
  const awards = fetched && fetched.length > 0 ? fetched : FALLBACK_AWARDS;

  return (
    <section
      className="page-section"
      style={{ background: "#050208", width: "100%", maxWidth: "1440px", minHeight: "616px", paddingBottom: "96px" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
            maxWidth: "660px",
            margin: "0 auto 64px",
          }}
        >
          {header.awardsDescription}
        </p>

        <div className="awards-row">
          {awards.map((award, idx) => {
            const img = LOCAL_AWARD_IMAGES[idx];
            return (
              <div
                key={award.id}
                className="awards-item"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  width: "clamp(60px, 20vw, 280px)",
                  flexShrink: 1,
                }}
              >
                <div
                  className="awards-disc"
                  style={{
                    width: "clamp(60px, 20vw, 280px)",
                    height: "clamp(60px, 20vw, 280px)",
                    borderRadius: "50%",
                    background:"linear-gradient(119.3deg, rgba(0,0,0,0) 23.34%, rgba(73,109,171,0.3) 96.36%)",
                    border: "1px solid #056FB499",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {img && (
                    <div
                      style={{
                        position: "absolute",
                        top: "10%",
                        left: "23.5%",
                        width: "53%",
                        height: "55%",
                      }}
                    >
                      <Image
                        src={img}
                        alt={award.title}
                        fill
                        sizes="(max-width: 768px) 174px, 174px"
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                          filter: idx < 3 ? "brightness(0) invert(1)" : undefined,
                        }}
                      />
                    </div>
                  )}
                  <p
                    style={{
                      position: "absolute",
                      top: "66.714%",
                      left: "10.714%",
                      width: "78.571%",
                      height: "18.929%",
                      margin: 0,
                      textAlign: "center",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-sora, Sora)",
                      fontWeight: 600,
                      fontSize: "clamp(15px, 1.3vw, 18px)",
                      lineHeight: 1.35,
                      whiteSpace: "pre-line",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {award.title}
                  </p>
                </div>
              </div>
        );
          })}
      </div>
    </div>
    </section >
  );
}
