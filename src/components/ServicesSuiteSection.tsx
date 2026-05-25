import Image from "next/image";

const suiteItems = [
  { title: "Beginner Mode",      desc: "Guided trades, tutorials & Simplified Workflows" },
  { title: "Pro Tools",          desc: "Guided trades, tutorials & Simplified Workflows" },
  { title: "Seamless Switching", desc: "Guided trades, tutorials & Simplified Workflows" },
  { title: "Multi Lingual Support", desc: "Guided trades, tutorials & Simplified Workflows" },
];

export default function ServicesSuiteSection() {
  return (
    <section style={{
      background: "#050208",
      width: "1440px",
      height: "732.72px",
      boxSizing: "border-box",
      paddingTop: "79.75px",
      paddingBottom: "79.75px",
      paddingLeft: "55.38px",
      paddingRight: "55.38px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      <div style={{ width: "100%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}>

          {/* Left — image */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src="/service/one-platform.png"
              alt="One Platform Suite"
              width={620}
              height={560}
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Right — content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h2 style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "120%",
              color: "#FFFFFF",
              margin: 0,
              width: "644px",
              height: "100px",
              position: "relative",
              top: "-0.93px",
              left: "0.19px",
              overflow: "hidden",
            }}>
              One platform suite<br />Every Trading Style
            </h2>

            <p style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "25px",
              letterSpacing: 0,
              color: "#FFFFFF",
              margin: 0,
              width: "644px",
              height: "100px",
              overflow: "hidden",
            }}>
              Finsai Trade platforms are engineered to deliver seamless execution, institutional-level tools, and reliable uptime — so you stay in control, wherever you trade. Whether you&apos;re a beginner or a pro, our platforms help you trade smarter and faster.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginTop: "8px" }}>
              {suiteItems.map((item) => (
                <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{
                    width: "44px",
                    height: "44px",
                    minWidth: "44px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Image
                      src="/service/efficient-power-management.png"
                      alt=""
                      width={22}
                      height={22}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div>
                    <h4 style={{
                      fontFamily: "var(--font-sora, Sora)",
                      fontWeight: 600,
                      fontSize: "18px",
                      color: "#FFFFFF",
                      margin: "0 0 4px",
                      lineHeight: "140%",
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontFamily: "var(--font-sora, Sora)",
                      fontWeight: 400,
                      fontSize: "16px",
                      color: "#FFFFFFBF",
                      lineHeight: "24px",
                      letterSpacing: "0%",
                      margin: 0,
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
