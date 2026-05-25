import Image from "next/image";

const features = [
  { img: "/service/efficient-power-management.png", title: "Lightning \n Fast Execution" },
  { img: "/service/protection.png",  title: "Bank-Grade \n Security" },
  { img: "/service/two-factor-authentication.png",                    title: "Multi-Device \n Compatibility" },
  { img: "/service/network.png",                 title: "Access Globally \n(India & UAE)" },
  { img: "/service/chart.png",                      title: "Advanced Charts \n& Tools" },
  { img: "/service/24-hours-support.png",           title: "24/7 Expert \n Support" },
];

export default function ServicesFeaturesSection() {
  return (
    <section style={{
      background: "#050208",
      width: "1440px",
      height: "700.51px",
      boxSizing: "border-box",
      paddingTop: "79.75px",
      paddingBottom: "79.75px",
      paddingLeft: "55.38px",
      paddingRight: "55.38px",
      display: "flex",
      alignItems: "center",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
        width: "100%",
      }}>
        {/* Left — copied from FeaturesSection */}
        <div>
          <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "16px" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 22px",
              background: "#000000",
              border: "1.2px solid rgba(255,255,255,0.15)",
              borderRadius: "60px",
            }}>
              <span className="badge-text">Features of Finsai Trade</span>
            </div>
          </div>

          <h2 className="section-title" style={{ marginBottom: "14px" }}>
            Built to Perform. Designed for You
          </h2>

          <p style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "25px",
            color: "#FFFFFF",
            marginBottom: "32px",
          }}>
            Finsai Trade platforms are engineered to deliver seamless execution, institutional-level tools, and reliable uptime so you stay in control, wherever you trade. Whether you&apos;re a beginner or a pro, our platforms help you trade smarter and faster.
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-4">
                <div
                  className="shrink-0 flex items-center justify-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                  }}
                >
                  <Image src={f.img} alt={f.title} width={28} height={28} style={{ objectFit: "contain" }} />
                </div>
                <span className="feature-item__label" style={{ whiteSpace: "pre-line" }}>{f.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — new image */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image
            src="/service/features.png"
            alt="Features"
            width={560}
            height={541}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
}
