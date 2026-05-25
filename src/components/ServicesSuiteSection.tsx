import Image from "next/image";

const suiteItems = [
  {
    num: "1",
    title: "Beginner Mode",
    desc: "Guided trades, tutorials & Simplified Workflows",
  },
  {
    num: "2",
    title: "Pro Tools",
    desc: "Guided trades, tutorials & Simplified Workflows",
  },
  {
    num: "3",
    title: "Seamless Switching",
    desc: "Guided trades, tutorials & Simplified Workflows",
  },
  {
    num: "4",
    title: "Multi Lingual Support",
    desc: "Guided trades, tutorials & Simplified Workflows",
  },
];

export default function ServicesSuiteSection() {
  return (
    <section style={{ background: "#050208", padding: "80px 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{
              width: "460px",
              height: "460px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(5,111,180,0.3) 0%, rgba(82,158,201,0.1) 100%)",
              border: "1px solid rgba(5,111,180,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <div style={{
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                background: "rgba(5,111,180,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Image
                  src="/choice-watermark.png"
                  alt="Platform Suite"
                  width={280}
                  height={280}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <h2 style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 600,
              fontSize: "40px",
              lineHeight: "120%",
              color: "#FFFFFF",
              margin: 0,
              whiteSpace: "pre-line",
            }}>
              {"One platform suite\nEvery Trading Style"}
            </h2>

            {suiteItems.map((item) => (
              <div key={item.num} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div style={{
                  width: "32px",
                  height: "32px",
                  minWidth: "32px",
                  background: "rgba(5,111,180,0.2)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#056FB4",
                }}>
                  {item.num}
                </div>
                <div>
                  <h4 style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 600,
                    fontSize: "18px",
                    color: "#FFFFFF",
                    margin: "0 0 4px",
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: "24px",
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
    </section>
  );
}
