import Link from "next/link";
import Image from "next/image";

const stats = [
  { prefix: "Join", value: "20,000 +", label: "Companies helped" },
  { prefix: "Over", value: "$10,000 +", label: "Revenue generated" },
  { prefix: "Over", value: "330 +", label: "Companies helped" },
  { prefix: "More than", value: "230 +", label: "Revenue generated" },
];

export default function IBStatsSection() {
  return (
    <section style={{ position: "relative", background: "#050208", width: "1440px", height: "696px", boxSizing: "border-box" }}>

          {/* Image stack container */}
          <div style={{
            position: "absolute",
            top: "80px",
            left: "85px",
            width: "577.84px",
            height: "546px",
          }}>
            <div style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "497.07px",
              height: "497.07px",
              borderRadius: "15.53px",
              background: "#056FB433",
            }} />

            <div style={{
              position: "absolute",
              top: "24.85px",
              left: "40.39px",
              width: "497.07px",
              height: "497.07px",
              borderRadius: "15.53px",
              background: "#529EC933",
            }} />

            <div style={{
              position: "absolute",
              top: "48.93px",
              left: "80.77px",
              width: "497.07px",
              height: "497.07px",
              borderRadius: "15.53px",
              background: "#11111133",
              overflow: "hidden",
            }}>
              <Image
                src="/corporate-group.png"
                alt="Partner team"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

      <div style={{
        position: "absolute",
        top: "83px",
        left: "757px",
        width: "568px",
        height: "541px",
      }}>
          <div>
            <h2 style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "50px",
              letterSpacing: 0,
              textTransform: "capitalize",
              color: "#FFFFFF",
              margin: "0 0 40px",
            }}>
              Join The Fastest Growing Partner Program Now
            </h2>


          </div>

        </div>

      {/* Row 1 stats */}
      <div style={{
        position: "absolute",
        top: "285px",
        left: "757px",
        width: "541px",
        display: "flex",
        gap: "73px",
        alignItems: "flex-start",
      }}>
        {stats.slice(0, 2).map((stat, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{
              fontFamily: "var(--font-dm-sans, 'DM Sans')",
              fontWeight: 400,
              fontSize: "22px",
              lineHeight: "100%",
              letterSpacing: "0.03em",
              color: "#056FB4",
              margin: "0 0 4px",
              // textAlign: "center",
            }}>
              {stat.prefix}
            </p>
            <p style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 300,
              fontSize: "48px",
              lineHeight: "100%",
              letterSpacing: 0,
              color: "#FFFFFF",
              margin: "0 0 6px",
            }}>
              {stat.value}
            </p>
            <p style={{
              fontFamily: "var(--font-dm-sans, 'DM Sans')",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "0.03em",
              color: "rgba(255,255,255,0.5)",
              margin: 0,
              whiteSpace: "nowrap",
            }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Row 2 stats */}
      <div style={{
        position: "absolute",
        top: "424.97px",
        left: "757px",
        width: "525px",
        display: "flex",
        gap: "80px",
        alignItems: "flex-start",
      }}>
        {stats.slice(2).map((stat, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p style={{
              fontFamily: "var(--font-dm-sans, 'DM Sans')",
              fontWeight: 400,
              fontSize: "22px",
              lineHeight: "100%",
              letterSpacing: "0.03em",
              color: "#056FB4",
              margin: "0 0 4px",
              textAlign: "center",
            }}>
              {stat.prefix}
            </p>
            <p style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 300,
              fontSize: "48px",
              lineHeight: "100%",
              letterSpacing: 0,
              color: "#FFFFFF",
              margin: "0 0 6px",
            }}>
              {stat.value}
            </p>
            <p style={{
              fontFamily: "var(--font-dm-sans, 'DM Sans')",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "0.03em",
              color: "rgba(255,255,255,0.5)",
              margin: 0,
              whiteSpace: "nowrap",
            }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <Link href="/register" className="btn-text" style={{
        position: "absolute",
        top: "575px",
        left: "757px",
        width: "195px",
        height: "49px",
        borderRadius: "25px",
        background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "nowrap",
      }}>
        Be Our Partner →
      </Link>
    </section>
  );
}
