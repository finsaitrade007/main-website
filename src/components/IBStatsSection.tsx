import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "20,000 +", label: "Companies helped" },
  { value: "$10,000 +", label: "Revenue generated" },
  { value: "330 +", label: "Companies helped" },
  { value: "230 +", label: "Revenue generated" },
];

export default function IBStatsSection() {
  return (
    <section style={{ background: "#050208", padding: "80px 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}>

          <div style={{ borderRadius: "24px", overflow: "hidden" }}>
            <Image
              src="/blogs-placeholder.png"
              alt="Partner team"
              width={580}
              height={420}
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
            />
          </div>

          <div>
            <h2 className="section-title" style={{ marginBottom: "40px" }}>
              Join The Fastest Growing Partner Program Now
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
              marginBottom: "40px",
            }}>
              {stats.map((stat, i) => (
                <div key={i}>
                  <p style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 700,
                    fontSize: "36px",
                    color: "#FFFFFF",
                    margin: "0 0 6px",
                  }}>
                    {stat.value}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.5)",
                    margin: 0,
                  }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link href="/register" className="btn-text" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 32px",
              borderRadius: "8px",
              background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}>
              Be Our Partner →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
