import Link from "next/link";
import Image from "next/image";

const items = [
  {
    title: "Trade global currency pairs with tight spreads and fast execution.",
    desc: "Access the world's most liquid financial market and trade majors, minors, and exotics 24/5 with real-time pricing and advanced tools.",
  },
];

export default function IBFeaturesSection() {
  return (
    <section style={{ background: "#050208", padding: "80px 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {items.map((item, i) => (
              <div key={i}>
                <h3 style={{
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 600,
                  fontSize: "28px",
                  lineHeight: "140%",
                  color: "#FFFFFF",
                  margin: "0 0 16px",
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-inter, Inter)",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "28px",
                  color: "rgba(255,255,255,0.65)",
                  margin: "0 0 24px",
                }}>
                  {item.desc}
                </p>
                <Link href="https://fx.finsaitrade.com/auth/register" className="btn-text" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  borderRadius: "8px",
                  background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}>
                  Explore More →
                </Link>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image
              src="/trade-badge.png"
              alt="Trading"
              width={480}
              height={400}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
