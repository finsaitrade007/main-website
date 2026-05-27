import Image from "next/image";
import {
  getHomepage,
  getSteps,
  strapiImageUrl,
  type StrapiStep,
} from "@/lib/strapi";

const FALLBACK_HEADER = {
  stepsBadge: "Signup Procedure",
  stepsTitle: "Trade Global Markets in 3 Simple Steps",
};

const FALLBACK_STEPS: StrapiStep[] = [
  {
    id: 1,
    documentId: "fb-1",
    number: 1,
    title: "Register",
    description:
      "Create your Finsai Trade account and access global multi-asset markets..",
    image: null,
    order: 1,
  },
  {
    id: 2,
    documentId: "fb-2",
    number: 2,
    title: "Verify",
    description: "Verify your identity securely to activate your trading account.",
    image: null,
    order: 2,
  },
  {
    id: 3,
    documentId: "fb-3",
    number: 3,
    title: "Start Trading",
    description: "Trade crypto, forex, commodities, indices, and more.",
    image: null,
    order: 3,
  },
];

export default async function StepsSection() {
  const [home, fetched] = await Promise.all([getHomepage(), getSteps()]);
  const header = home ?? FALLBACK_HEADER;
  const steps = fetched && fetched.length > 0 ? fetched : FALLBACK_STEPS;

  return (
    <section style={{ background: "#050208", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 22px",
              background: "#000",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "60px",
            }}
          >
            <span className="badge-text">{header.stepsBadge}</span>
          </span>
        </div>

        <h2
          className="section-title"
          style={{ textAlign: "center", maxWidth: "718px", margin: "0 auto 16px" }}
        >
          {header.stepsTitle}
        </h2>

        <p
          className="section-desc"
          style={{ textAlign: "center", maxWidth: "520px", margin: "0 auto 80px" }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "100px",
              left: "calc(16.67% + 100px)",
              right: "calc(16.67% + 100px)",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(5,111,180,0.3) 0%, rgba(5,111,180,0.6) 50%, rgba(5,111,180,0.3) 100%)",
              zIndex: 0,
            }}
          />

          {steps.map((step) => {
            const img = strapiImageUrl(step.image);
            return (
              <div
                key={step.id}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    marginBottom: "32px",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 1,
                    width: "200px",
                    height: "200px",
                  }}
                >
                  {img && (
                    <Image
                      src={img}
                      alt={step.title}
                      width={200}
                      height={200}
                      style={{ display: "block" }}
                    />
                  )}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#FFFFFF",
                    marginBottom: "12px",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontSize: "14px",
                    lineHeight: "24px",
                    color: "rgba(255,255,255,0.5)",
                    maxWidth: "280px",
                  }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
