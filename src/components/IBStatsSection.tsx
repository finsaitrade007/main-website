import Link from "@/components/SmartLink";
import Image from "next/image";
import { getPartnershipsPage } from "@/lib/strapi";
import ResponsiveScale from "@/components/ResponsiveScale";

const fallbackStats = [
  { value: "20,000 +", label: "Join Companies helped" },
  { value: "$10,000 +", label: "Over Revenue generated" },
  { value: "330 +", label: "Over Companies helped" },
  { value: "230 +", label: "More than Revenue generated" },
];

function splitStatLabel(label: string): { prefix: string; label: string } {
  const trimmed = label.trim();
  const knownPrefixes = ["Join ", "Over ", "More than ", "Up to ", "Above ", "Around "];
  for (const prefix of knownPrefixes) {
    if (trimmed.startsWith(prefix)) {
      return { prefix: prefix.trim(), label: trimmed.slice(prefix.length) };
    }
  }
  const parts = trimmed.split(" ");
  if (parts.length > 1) {
    return { prefix: parts[0], label: parts.slice(1).join(" ") };
  }
  return { prefix: "", label: trimmed };
}

export default async function IBStatsSection() {
  const data = await getPartnershipsPage();
  const title = data?.statsTitle ?? "Join The Fastest Growing Partner Program Now";
  const ctaLabel = data?.heroPrimaryCtaLabel ?? "Be Our Partner →";
  const ctaHref = data?.heroPrimaryCtaHref ?? "https://fx.finsaitrade.com/auth/register";

  const rawStats = data?.stats?.length ? data.stats : fallbackStats;
  const stats = rawStats.map((s) => {
    const { prefix, label } = splitStatLabel(s.label ?? "");
    return { prefix, value: s.value, label };
  });

  return (
    <section
      className="page-section"
      style={{ background: "#050208", overflow: "hidden" }}
    >
    {/* Desktop layout (≥ 426px) */}
    <div className="steps-horizontal">
    <ResponsiveScale designWidth={1440}>
    <div style={{ position: "relative", width: "1440px", minHeight: "696px" }}>

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
                src="/ib-stats.png"
                alt="IB partner program"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

      <div style={{
        position: "absolute",
        top: "28px",
        left: "757px",
        width: "568px",
      }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            width: "247.6px",
            height: "51.2px",
            gap: "8.4px",
            borderRadius: "60px",
            border: "1.2px solid #FFFFFF26",
            background: "#000000",
            paddingTop: "9.6px",
            paddingRight: "16.8px",
            paddingBottom: "9.6px",
            paddingLeft: "16.8px",
            marginBottom: "24px",
          }}>
            <span style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "19.2px",
              lineHeight: "31.2px",
              letterSpacing: 0,
              textTransform: "capitalize",
              verticalAlign: "middle",
              background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}>
              Built for Ambitious IBs
            </span>
          </div>

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
              {title}
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

      <Link href={ctaHref} className="btn-text" style={{
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
        {ctaLabel}
      </Link>
    </div>
    </ResponsiveScale>
    </div>

    {/* Mobile layout (< 426px) */}
    <div className="steps-vertical" style={{ padding: "0 20px 48px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Badge */}
      <div style={{ marginBottom: "16px" }}>
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "8px 18px",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "60px",
        }}>
          <span className="badge-text">Built for Ambitious IBs</span>
        </span>
      </div>

      {/* Heading */}
      <h2 className="section-title" style={{ textAlign: "center", marginBottom: "32px" }}>
        {title}
      </h2>

      {/* Stats 2×2 grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridAutoRows: "1fr",
        gap: "16px",
        width: "100%",
        marginBottom: "32px",
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "20px 8px",
            borderRadius: "12px",
            border: "1px solid rgba(5,111,180,0.3)",
            background: "linear-gradient(157.26deg, rgba(10,18,32,0.85) 0%, rgba(5,111,180,0.12) 100%)",
          }}>
            <p style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "11px",
              letterSpacing: "0.03em",
              color: "#056FB4",
              margin: "0 0 4px",
            }}>
              {stat.prefix}
            </p>
            <p style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 300,
              fontSize: "clamp(20px, 6.5vw, 32px)",
              lineHeight: "1",
              color: "#FFFFFF",
              margin: "0 0 6px",
            }}>
              {stat.value}
            </p>
            <p style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "11px",
              letterSpacing: "0.03em",
              color: "rgba(255,255,255,0.5)",
              margin: 0,
            }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={ctaHref}
        className="btn-text"
        style={{
          borderRadius: "25px",
          padding: "clamp(11px, 1vw, 14px) clamp(20px, 2vw, 32px)",
          background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          whiteSpace: "nowrap",
        }}
      >
        {ctaLabel}
      </Link>
    </div>
    </section>
  );
}
