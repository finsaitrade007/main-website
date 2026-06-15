import Link from "@/components/SmartLink";
import Image from "next/image";
import { getPartnershipsPage } from "@/lib/strapi";
import ResponsiveScale from "@/components/ResponsiveScale";

const STEP_IMAGES = [
  "/platforms/register.png",
  "/chart.png",
  "/platforms/trading.png",
];

const CIRCLE_POSITIONS = [116, 556, 996];
const CIRCLE_SIZE = 112;

const fallbackSteps = [
  { title: "Sign Up", description: "Create your IB account and access your partner tools." },
  { title: "Refer Clients", description: "Share your referral link and grow your network." },
  { title: "Earn More", description: "Get rewarded from every eligible client trade." },
];

export default async function IBHowToSection() {
  const data = await getPartnershipsPage();
  const title = data?.howToTitle ?? " How to Become a Successful Introducing Broker";
  const description = data?.howToDescription ?? "Start earning with an easy partner program built for long-term growth. ";
  const ctaLabel = data?.heroPrimaryCtaLabel ?? "Become an IB";
  const ctaHref = data?.heroPrimaryCtaHref ?? "https://portal.finsaitrade.com/partner/register";

  const rawSteps = data?.howToSteps?.length ? data.howToSteps : fallbackSteps;
  const steps = rawSteps.slice(0, 3).map((step, i) => ({
    number: i + 1,
    title: step.title,
    desc: ("description" in step ? step.description : "") ?? "",
    img: STEP_IMAGES[i] ?? STEP_IMAGES[0],
  }));

  return (
    <section
      className="page-section"
      style={{ background: "#050208", width: "100%", maxWidth: "1440px", minHeight: "564px", paddingBottom: "96px", margin: "0 auto" }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <h2
          className="section-title"
          style={{ textAlign: "center", maxWidth: "918px", margin: "0 auto 16px" }}
        >
          {title}
        </h2>

        <p
          className="section-desc"
          style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto 80px", fontSize: "24px" }}
        >
          {description}
        </p>

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
              <span
                style={{
                  fontFamily: "var(--font-inter, Inter)",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                {i + 1}
              </span>
            </div>
          ))}

          {steps.map((step, idx) => {
            const circleLeft = CIRCLE_POSITIONS[idx];
            const circleCenter = circleLeft + CIRCLE_SIZE / 2;
            const textLeft = circleCenter - 140;

            return (
              <div key={step.number}>
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
                  <Image
                    src={step.img}
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
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        </ResponsiveScale>
        </div>

        {/* CTA button */}
        <div className="steps-horizontal" style={{ display: "flex", justifyContent: "center", marginTop: "48px" }}>
          <Link
            href={ctaHref}
            className="btn-text"
            style={{
              width: "186px",
              height: "56px",
              borderRadius: "28.83px",
              paddingTop: "14px",
              paddingBottom: "14px",
              paddingLeft: "32px",
              paddingRight: "32px",
              gap: "21px",
              background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
              boxSizing: "border-box",
            }}
          >
            {ctaLabel}
          </Link>
        </div>

        {/* Vertical layout (< 426px) */}
        <div className="steps-vertical" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;
            return (
              <div key={step.number} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
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
                      <Image
                        src={step.img}
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
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Vertical connector between steps */}
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

          {/* CTA button (mobile) */}
          <Link
            href={ctaHref}
            className="btn-text"
            style={{
              marginTop: "32px",
              borderRadius: "28.83px",
              padding: "clamp(11px, 1vw, 14px) clamp(18px, 1.8vw, 33px)",
              gap: "8px",
              background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
