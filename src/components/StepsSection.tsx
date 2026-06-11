import Image from "next/image";
import ResponsiveScale from "@/components/ResponsiveScale";
import {
  getHomepage,
  getSteps,
  strapiImageUrl,
  type StrapiStep,
} from "@/lib/strapi";

const LOCAL_STEP_IMAGES = [
  "/platforms/register.png",
  "/platforms/verify.png",
  "/platforms/trading.png",
];

const CIRCLE_POSITIONS = [116, 556, 996];
const CIRCLE_SIZE = 112;

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
    <section
      className="page-section"
      style={{ background: "#050208", width: "100%", maxWidth: "1440px", minHeight: "564px", paddingBottom: "96px" }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
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

        {/* Horizontal layout (≥ 426px): 1225×278px fixed — scaled by ResponsiveScale */}
        <div className="steps-horizontal">
        <ResponsiveScale designWidth={1225}>
        <div
          style={{
            position: "relative",
            width: "1225px",
            height: "278px",
            margin: "0 auto",
          }}
        >
          {/* Connector line */}
          <div
            style={{
              position: "absolute",
              top: "56px",
              left: "166px",
              width: "891.5px",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.014) -2.94%, rgba(5,111,180,0.7) 51.23%, rgba(255,255,255,0.014) 102.37%)",
              boxShadow: "0px 0px 24px 0px #FF63333D",
            }}
          />

          {/* Small accent circles with numbers */}
          {[212, 650, 1090].map((left, i) => (
            <div
              key={left}
              style={{
                position: "absolute",
                top: "11px",
                left: `${left}px`,
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "#056FB4",
                border: "1px solid #056FB499",
                boxSizing: "border-box",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#FFFFFF",
              }}>
                {i + 1}
              </span>
            </div>
          ))}

          {steps.map((step, idx) => {
            const circleLeft = CIRCLE_POSITIONS[idx];
            const circleCenter = circleLeft + CIRCLE_SIZE / 2;
            const textLeft = circleCenter - 140;
            const img = strapiImageUrl(step.image) ?? LOCAL_STEP_IMAGES[idx];

            return (
              <div key={step.id}>
                {/* Circle */}
                <div
                  style={{
                    position: "absolute",
                    left: `${circleLeft}px`,
                    top: 0,
                    width: `${CIRCLE_SIZE}px`,
                    height: `${CIRCLE_SIZE}px`,
                    borderRadius: "50%",
                    background: "#020303",
                    border: "2px solid #056FB499",
                    boxShadow: "0px 0px 24px 16px #056FB43D",
                    boxSizing: "border-box",
                    zIndex: 1,
                  }}
                >
                  {img && (
                    <Image
                      src={img}
                      alt={step.title}
                      width={56}
                      height={56}
                      style={{
                        position: "absolute",
                        top: "28px",
                        left: "28px",
                        objectFit: "contain",
                      }}
                    />
                  )}
                </div>

                {/* Text */}
                <div
                  style={{
                    position: "absolute",
                    left: `${textLeft}px`,
                    top: "144px",
                    width: "300px",
                    textAlign: "center",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-sora, Sora)",
                      fontWeight: 400,
                      fontSize: "32px",
                      lineHeight: "43.49px",
                      letterSpacing: "0%",
                      color: "#FFFFFF",
                      marginBottom: "12px",
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-inter, Inter)",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "23px",
                      letterSpacing: "0%",
                      color: "#FFFFFFB2",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        </ResponsiveScale>
        </div>

        {/* Vertical layout (< 426px) */}
        <div className="steps-vertical" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {steps.map((step, idx) => {
            const img = strapiImageUrl(step.image) ?? LOCAL_STEP_IMAGES[idx];
            const isLast = idx === steps.length - 1;
            return (
              <div key={step.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                {/* Step row: circle left, text right */}
                <div style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%", padding: "0 4px" }}>
                  {/* Circle with number badge */}
                  <div style={{ position: "relative", flexShrink: 0, width: "80px", height: "80px" }}>
                    <div style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background: "#020303",
                      border: "2px solid #056FB499",
                      boxShadow: "0px 0px 20px 10px #056FB43D",
                      boxSizing: "border-box",
                      position: "relative",
                    }}>
                      {img && (
                        <Image
                          src={img}
                          alt={step.title}
                          width={40}
                          height={40}
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            objectFit: "contain",
                          }}
                        />
                      )}
                    </div>
                    {/* Number badge */}
                    <div style={{
                      position: "absolute",
                      top: "-6px",
                      right: "-6px",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "#056FB4",
                      border: "1px solid #056FB499",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <span style={{
                        fontFamily: "var(--font-inter, Inter)",
                        fontWeight: 600,
                        fontSize: "12px",
                        lineHeight: "100%",
                        color: "#FFFFFF",
                      }}>
                        {idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontFamily: "var(--font-sora, Sora)",
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "1.3",
                      color: "#FFFFFF",
                      margin: "0 0 6px",
                    }}>
                      {step.title}
                    </h3>
                    <p style={{
                      fontFamily: "var(--font-inter, Inter)",
                      fontWeight: 400,
                      fontSize: "13px",
                      lineHeight: "1.6",
                      color: "#FFFFFFB2",
                      margin: 0,
                    }}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Vertical connector line (between steps) */}
                {!isLast && (
                  <div style={{
                    width: "1px",
                    height: "40px",
                    marginLeft: "36px",
                    alignSelf: "flex-start",
                    background: "linear-gradient(180deg, rgba(5,111,180,0.7) 0%, rgba(5,111,180,0.15) 100%)",
                  }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
