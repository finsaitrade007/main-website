import Image from "next/image";
import { getServicesPage } from "@/lib/strapi";

const fallbackSuiteItems = [
  { title: "Beginner Mode",      description: "Guided trades, tutorials & Simplified Workflows" },
  { title: "Pro Tools",          description: "Guided trades, tutorials & Simplified Workflows" },
  { title: "Seamless Switching", description: "Guided trades, tutorials & Simplified Workflows" },
  { title: "Multi Lingual Support", description: "Guided trades, tutorials & Simplified Workflows" },
];

export default async function ServicesSuiteSection() {
  const data = await getServicesPage();
  const suiteTitle = data?.suiteTitle ?? "One platform suite\nEvery Trading Style";
  const suiteDescription =
    data?.suiteDescription ??
    "Finsai Trade platforms are engineered to deliver seamless execution, institutional-level tools, and reliable uptime — so you stay in control, wherever you trade. Whether you're a beginner or a pro, our platforms help you trade smarter and faster.";
  const suiteItems = data?.suiteItems?.length
    ? data.suiteItems.map((item) => ({ title: item.title, description: item.description ?? "" }))
    : fallbackSuiteItems;
  return (
    <section
      className="page-section"
      style={{
        background: "#050208",
        width: "100%",
        maxWidth: "1440px",
        minHeight: "732.72px",
        paddingBottom: "79.75px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "100%" }}>
        <div className="two-col-grid">

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
            <h2 className="suite-title" style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 700,
              fontSize: "clamp(28px, 2.8vw, 40px)",
              lineHeight: "120%",
              color: "#FFFFFF",
              margin: 0,
              whiteSpace: "pre-line",
            }}>
              {suiteTitle}
            </h2>

            <p className="suite-desc" style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "25px",
              letterSpacing: 0,
              color: "#FFFFFF",
              margin: 0,
            }}>
              {suiteDescription}
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
                      {item.description}
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
