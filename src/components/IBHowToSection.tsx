import Link from "next/link";
import Image from "next/image";
import { getPartnershipsPage } from "@/lib/strapi";

const STEP_IMAGES = [
  "/platforms/register.png",
  "/chart.png",
  "/platforms/trading.png",
];

const CIRCLE_POSITIONS = [116, 556, 996];
const NUMBER_POSITIONS = [212, 650, 1090];
const CIRCLE_SIZE = 112;

const fallbackSteps = [
  { title: "Sign Up", description: "Submit your application to become an IB." },
  { title: "Promote", description: "Use our marketing materials to introduce traders to our trading platforms." },
  { title: "Earn", description: "Collect your commissions for every trade your referred traders execute." },
];

export default async function IBHowToSection() {
  const data = await getPartnershipsPage();
  const title = data?.howToTitle ?? "Fast application. Fast process. So easy.";
  const description = data?.howToDescription ?? "How to become an IB?";
  const ctaLabel = data?.heroPrimaryCtaLabel ?? "Become an IB";
  const ctaHref = data?.heroPrimaryCtaHref ?? "/register";

  const rawSteps = data?.howToSteps?.length ? data.howToSteps : fallbackSteps;
  const steps = rawSteps.slice(0, 3).map((step, i) => ({
    number: i + 1,
    title: step.title,
    desc: ("description" in step ? step.description : "") ?? "",
    img: STEP_IMAGES[i] ?? STEP_IMAGES[0],
  }));

  return (
    <section
      style={{
        background: "#050208",
        position: "relative",
        width: "1440px",
        height: "707px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <h2
          className="section-title"
          style={{
            position: "absolute",
            top: "80px",
            left: "143px",
            width: "1154px",
            height: "68px",
            textAlign: "center",
            margin: 0,
          }}
        >
          {title}
        </h2>

        <p
          className="section-desc"
          style={{
            position: "absolute",
            top: "158px",
            left: "595px",
            width: "255px",
            height: "29px",
            textAlign: "center",
            margin: 0,
          }}
        >
          {description}
        </p>

        {/* Steps container: 1225×278px, centered (107px margins in 1440px section) */}
        <div
          style={{
            position: "absolute",
            top: "220px",
            left: "107px",
            width: "1225px",
            height: "278px",
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
          {NUMBER_POSITIONS.map((left, i) => (
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
                    width: "280px",
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

        {/* CTA button */}
        <Link
          href={ctaHref}
          className="btn-text"
          style={{
            position: "absolute",
            top: "571px",
            left: "627.01px",
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
    </section>
  );
}
