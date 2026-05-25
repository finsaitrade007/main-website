import Image from "next/image";

const badges = [
  { icon: "/service/protection.png",                label: "PCI DSS",   sub: "Complaint"  },
  { icon: "/service/two-factor-authentication.png", label: "256-bit",   sub: "Encryption" },
  { icon: "/service/efficient-power-management.png",label: "Verified",  sub: "Partners"   },
];

export default function AccountsTrustBar() {
  return (
    <section style={{
      background: "#050208",
      width: "1440px",
      padding: "0 76px 40px",
      boxSizing: "border-box",
    }}>
      <div style={{
        width: "100%",
        background: "#0A0B14",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        padding: "28px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}>
        {/* Left */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", maxWidth: "560px" }}>
          <div style={{
            width: "52px",
            height: "52px",
            minWidth: "52px",
            background: "rgba(5,111,180,0.15)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Image src="/service/protection.png" alt="" width={26} height={26} style={{ objectFit: "contain" }} />
          </div>
          <p style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "22px",
            color: "rgba(255,255,255,0.6)",
            margin: 0,
          }}>
            Welcome to Finsai Trade&apos;s Introducing Broker (IB) Program. We offer a comprehensive partnership
          </p>
        </div>

        {/* Divider */}
        <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.1)", flexShrink: 0 }} />

        {/* Right badges */}
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          {badges.map((b, i) => (
            <div key={b.label} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {i > 0 && (
                <div style={{ width: "1px", height: "36px", background: "rgba(255,255,255,0.1)", marginRight: "28px" }} />
              )}
              <div style={{
                width: "40px",
                height: "40px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <Image src={b.icon} alt="" width={20} height={20} style={{ objectFit: "contain" }} />
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#FFFFFF",
                  lineHeight: "100%",
                }}>{b.label}</div>
                <div style={{
                  fontFamily: "var(--font-inter, Inter)",
                  fontWeight: 400,
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: "100%",
                  marginTop: "4px",
                }}>{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
