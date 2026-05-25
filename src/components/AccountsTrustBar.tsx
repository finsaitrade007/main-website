import Image from "next/image";

const INNER_BG = "linear-gradient(137.88deg, #050208 1.04%, #056FB4 536.19%)";
const BORDER_GRADIENT = "linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%)";

const badges = [
  { icon: "/service/pci-dss.png",                 line1: "PCI DSS",  line2: "Complaint",  left: "656px",  imgTop: "20px", imgLeft: "21px", width: "170px", height: "76px" },
  { icon: "/service/layer.png",  line1: "256-bit",  line2: "Encryption", left: "850px",  imgTop: "21px", imgLeft: "21px", width: "170px", height: "77px" },
  { icon: "/service/verify.png", line1: "Verified", line2: "Partners",   left: "1044px", imgTop: "21px", imgLeft: "21px", width: "170px", height: "77px" },
];

export default function AccountsTrustBar() {
  return (
    <section style={{
      background: "#050208",
      width: "1440px",
      padding: "0 80px 40px",
      boxSizing: "border-box",
    }}>
      {/* Gradient border wrapper */}
      <div style={{
        width: "1280px",
        height: "197px",
        borderRadius: "20px",
        background: BORDER_GRADIENT,
        padding: "1px",
        boxSizing: "border-box",
      }}>
        <div style={{
          width: "100%",
          height: "100%",
          borderRadius: "19px",
          background: INNER_BG,
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
          position: "relative",
        }}>
          <Image
            src="/accounts/badge.png"
            alt=""
            width={83.34}
            height={106}
            style={{ position: "absolute", top: "51px", left: "66px", objectFit: "contain" }}
          />
          {/* Left text — absolutely positioned per Figma */}
          <p style={{
            position: "absolute",
            top: "63px",
            left: "157px",
            width: "439px",
            height: "70px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "196%",
            letterSpacing: "0%",
            color: "#E0E0E0",
            margin: 0,
            overflow: "hidden",
          }}>
            Welcome to Finsai Trade&apos;s Introducing Broker (IB) Program. We offer a comprehensive partnership
          </p>

          {/* Badges — absolutely positioned */}
          {badges.map((b) => (
            <div key={b.line1} style={{
              position: "absolute",
              top: "60px",
              left: b.left,
              width: b.width,
              height: b.height,
              borderRadius: "16px",
            }}>
              <Image
                src={b.icon}
                alt=""
                width={36}
                height={36}
                style={{ position: "absolute", top: b.imgTop, left: b.imgLeft, objectFit: "contain" }}
              />
              <div style={{
                position: "absolute",
                top: b.imgTop,
                left: "65px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}>
                <span style={{
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                  whiteSpace: "nowrap",
                }}>{b.line1}</span>
                <span style={{
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                  whiteSpace: "nowrap",
                }}>{b.line2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
