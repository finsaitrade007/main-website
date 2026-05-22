import Image from "next/image";

const awards = [
  {
    img: "/awards/wld-fi-2024.png",
    title: "The Fastest Growing\nBroker 2024",
  },
  {
    img: "/awards/world-forex-award.png",
    title: "The Best IB\nProgram 2025",
  },
  {
    img: "/awards/wld-fi-2025.png",
    title: "The Fastest Growing\nBroker 2025",
  },
  {
    img: "/awards/innovative-startup.png",
    title: "Innovative Startup in\nFinance Award 2023",
  },
];

export default function AwardsSection() {
  return (
    <section style={{ background: "#050208", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>

        {/* Badge */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 22px",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "60px",
            fontFamily: "var(--font-inter, Inter)",
            fontSize: "14px",
            color: "rgba(255,255,255,0.6)",
          }}>
            Our Awards
          </span>
        </div>

        {/* Title */}
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "16px" }}>
          Recognized for Elite Trading Excellence
        </h2>

        {/* Subtitle */}
        <p className="section-desc" style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 64px" }}>
          Trade seamlessly on the go or from your desktop with our cutting-edge platforms.
        </p>

        {/* Awards grid */}
        <div style={{ display: "flex", justifyContent: "center", gap: "32px" }}>
          {awards.map((award) => (
            <div key={award.img} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
              {/* Circle */}
              <div style={{
                width: "260px",
                height: "260px",
                borderRadius: "50%",
                border: "1px solid rgba(5,111,180,0.45)",
                boxShadow: "0 0 30px 8px rgba(5,111,180,0.12), inset 0 0 40px rgba(5,111,180,0.06)",
                position: "relative",
                overflow: "hidden",
              }}>
                <Image
                  src={award.img}
                  alt={award.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Title */}
              <p style={{
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "1.4",
                color: "#FFFFFF",
                textAlign: "center",
                whiteSpace: "pre-line",
                margin: 0,
              }}>
                {award.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
