import Link from "next/link";
import Image from "next/image";
import { getPartnershipsPage } from "@/lib/strapi";

const STEP_IMAGES = ["/steps/register.png", "/steps/verify.png", "/steps/start-trading.png"];

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
    <section style={{ background: "#050208", position: "relative", width: "1440px", height: "707px", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>

        {/* Title */}
        <h2 className="section-title" style={{
          position: "absolute",
          top: "80px",
          left: "143px",
          width: "1154px",
          height: "68px",
          textAlign: "center",
          margin: 0,
        }}>
          {title}
        </h2>

        <p className="section-desc" style={{
          position: "absolute",
          top: "158px",
          left: "595px",
          width: "255px",
          height: "29px",
          textAlign: "center",
          margin: 0,
        }}>
          {description}
        </p>

        {/* Steps row */}
        <div style={{
          position: "absolute",
          top: "199px",
          left: "108px",
          width: "1225px",
          height: "278px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}>

          {/* Connector line */}
          <div style={{
            position: "absolute",
            top: "100px",
            zIndex: 0,
            left: "calc(16.67% + 100px)",
            right: "calc(16.67% + 100px)",
            height: "1px",
            background: "linear-gradient(90deg, rgba(5,111,180,0.3) 0%, rgba(5,111,180,0.6) 50%, rgba(5,111,180,0.3) 100%)",
          }} />

          {steps.map((step) => (
            <div key={step.number} style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}>
              <div style={{ marginBottom: "32px", flexShrink: 0, position: "relative", zIndex: 1 }}>
                <Image
                  src={step.img}
                  alt={step.title}
                  width={200}
                  height={200}
                  style={{ display: "block" }}
                />
              </div>

              <h3 className="step-title" style={{ marginBottom: "12px", fontSize: "32px" }}>
                {step.title}
              </h3>

              <p className="step-desc" style={{ maxWidth: "369px", fontSize: "18px" }}>
                {step.desc}
              </p>
            </div>
          ))}

        </div>

        {/* CTA button */}
        <Link href={ctaHref} className="btn-text" style={{
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
        }}>
          {ctaLabel}
        </Link>

      </div>
    </section>
  );
}
