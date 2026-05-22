import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Register",
    desc: "Create your Finsai Trade account and access global multi-asset markets..",
    img: "/steps/register.png",
  },
  {
    number: 2,
    title: "Verify",
    desc: "Verify your identity securely to activate your trading account.",
    img: "/steps/verify.png",
  },
  {
    number: 3,
    title: "Start Trading",
    desc: "Trade crypto, forex, commodities, indices, and more.",
    img: "/steps/start-trading.png",
  },
];

export default function StepsSection() {
  return (
    <section style={{ background: "#050208", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>

        {/* Badge */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 22px",
            background: "#000",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "60px",
            fontFamily: "var(--font-inter, Inter)",
            fontSize: "14px",
            color: "rgba(125,185,214,0.85)",
          }}>
            Signup Procedure
          </span>
        </div>

        {/* Title */}
        <h2 className="section-title" style={{ textAlign: "center", maxWidth: "718px", margin: "0 auto 16px" }}>
          Trade Global Markets in 3 Simple Steps
        </h2>

        <p className="section-desc" style={{ textAlign: "center", maxWidth: "520px", margin: "0 auto 80px" }} />

        {/* Steps row */}
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>

          {/* Connector line — behind images via z-index */}
          <div style={{
            position: "absolute",
            top: "100px",
            left: "calc(16.67% + 100px)",
            right: "calc(16.67% + 100px)",
            height: "1px",
            background: "linear-gradient(90deg, rgba(5,111,180,0.3) 0%, rgba(5,111,180,0.6) 50%, rgba(5,111,180,0.3) 100%)",
            zIndex: 0,
          }} />

          {steps.map((step) => (
            <div key={step.number} style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}>
              {/* Image — rendered above the connector line */}
              <div style={{ marginBottom: "32px", flexShrink: 0, position: "relative", zIndex: 1 }}>
                <Image
                  src={step.img}
                  alt={step.title}
                  width={200}
                  height={200}
                  style={{ display: "block" }}
                />
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 600,
                fontSize: "20px",
                color: "#FFFFFF",
                marginBottom: "12px",
              }}>
                {step.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: "var(--font-inter, Inter)",
                fontSize: "14px",
                lineHeight: "24px",
                color: "rgba(255,255,255,0.5)",
                maxWidth: "280px",
              }}>
                {step.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
