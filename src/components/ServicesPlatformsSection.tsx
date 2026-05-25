import Link from "next/link";
import Image from "next/image";

const BTN_GRADIENT = "linear-gradient(90deg, rgba(5,111,180,0.7) 0%, #056FB4 100%)";
const CARD_BG = "linear-gradient(157.26deg, #050208 -0.93%, #056FB4 444.35%) padding-box, linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%) border-box";

function CardContent({ p }: { p: typeof platforms[number] }) {
  return (
    <>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        <div style={{ width: p.headingW, height: p.headingH, display: "flex", flexDirection: "column", gap: "16px", marginBottom: "20px", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "9.62px" }}>
            <div style={{
              width: "48.05px",
              height: "48.05px",
              borderRadius: "1201.13px",
              padding: "12.02px",
              background: "rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxSizing: "border-box",
            }}>
              <Image src="/service/efficient-power-management.png" alt="" width={24} height={24} style={{ objectFit: "contain" }} />
            </div>
            <h3 style={{ fontFamily: "var(--font-sora, Sora)", fontWeight: 400, fontSize: "24px", lineHeight: "100%", letterSpacing: 0, color: "#FFFFFF", margin: 0 }}>
              {p.name}
            </h3>
          </div>
          <p style={{ fontFamily: "var(--font-sora, Sora)", fontWeight: 400, fontSize: "16px", lineHeight: "24px", letterSpacing: 0, color: "rgba(255,255,255,0.5)", margin: 0 }}>
            {p.desc}
          </p>
        </div>

        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 24px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          width: p.listW,
          height: p.listH,
          position: p.listTop ? "relative" : undefined,
          top: p.listTop,
          left: p.listLeft,
          overflow: "hidden",
        }}>
          {p.features.map((feat, i) => (
            <li key={i} className="platform-feature-text">
              <span style={{ color: "#056FB4" }}>• </span>{feat}
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "flex-start" }}>
          {p.showComingSoon && (
            <div style={{
              width: "157px",
              height: "42px",
              borderRadius: "5px",
              padding: "1px",
              background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              backdropFilter: "blur(34px)",
              display: "inline-flex",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                flex: 1,
                borderRadius: "4px",
                background: "#050208",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "7px 18px",
              }}>
              <span style={{
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: 0,
                textAlign: "center",
                background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                whiteSpace: "nowrap",
              }}>
                Coming Soon
              </span>
              </div>
            </div>
          )}
          <Link href="/register" className="btn-text" style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "196px",
            height: "49px",
            borderRadius: "25px",
            background: BTN_GRADIENT,
            textDecoration: "none",
            flexShrink: 0,
          }}>
            Open Account →
          </Link>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, right: 0, lineHeight: 0 }}>
        <Image src={p.img} alt={p.name} width={p.imgW} height={p.imgH} style={{ objectFit: "contain", display: "block" }} />
      </div>
    </>
  );
}

const platforms = [
  {
    initials: "MT5",
    name: "Meta Trade 5 (MT5)",
    desc: "The gold standard in global trading terminals.",
    img: "/service/mt5.png",
    imgW: 420,
    imgH: 490,
    features: [
      "Trade Forex, Crypto, Indices, and more.",
      "Advanced charts & 80+ \n technical indicators",
      "Multi-window terminal with \n depth of market",
      "Algorithmic trading via Expert Advisors (EAs)",
      "Desktop, Web, and Mobile versions available",
    ],
    listW: "288px", listH: "336px", listTop: "-4.05px", listLeft: "-6px",
    headingW: "563px", headingH: "112.05px",
    showComingSoon: false,
    buttonText: "Open Account →",
    buttonDisabled: false,
  },
  {
    initials: "FW",
    name: "Finsai WebTrader",
    desc: "No downloads. Log in and trade.",
    img: "/service/web-trader.png",
    imgW: 420,
    imgH: 490,
    features: [
      "Trade Forex, Crypto, Indices, and more.",
      "Advanced charts & 80+ \ntechnical indicators",
      "Multi-window terminal with \n depth of market",
      "Algorithmic trading via Expert Advisors (EAs)",
      "Desktop, Web, and Mobile versions available",
    ],
    listW: "288px", listH: "336px", listTop: "-4.05px", listLeft: "-6px",
    headingW: "563px", headingH: "112.05px",
    showComingSoon: false,
    buttonText: "Open Account →",
    buttonDisabled: false,
  },
  {
    initials: "MA",
    name: "Finsai Mobile App",
    desc: "All-in-one trading from your smartphone.",
    img: "/service/finsai-mobile.png",
    imgW: 594,
    imgH: 545,
    features: [
      "Execute trades instantly from anywhere",
      "Monitor funds, view charts, and receive alerts",
      "Tailored for mobile-first investors and active traders.",
    ],
    listW: "633px", listH: "192px", listTop: "-3.55px", listLeft: "-6px",
    headingW: "443px", headingH: "88.05px",
    showComingSoon: true,
    buttonText: "Open Account →",
    buttonDisabled: false,
  },
];

export default function ServicesPlatformsSection() {
  const [p0, p1, p2] = platforms;

  return (
    <section style={{ background: "#050208", width: "1440px", boxSizing: "border-box" }}>
      <div style={{ width: "1288px", height: "1280px", marginLeft: "76px", position: "relative" }}>

        {/* Row 1: MT5 + WebTrader */}
        <div style={{
          position: "absolute",
          top: "-8px",
          left: 0,
          display: "flex",
          gap: "42px",
          height: "715px",
          alignItems: "center",
        }}>
          {/* Card 1: MT5 */}
          <div style={{
            width: "623px",
            height: "700px",
            borderRadius: "20px",
            border: "2px solid transparent",
            background: CARD_BG,
            paddingTop: "31px",
            paddingBottom: "31px",
            paddingLeft: "24px",
            paddingRight: "24px",
            display: "flex",
            gap: "39px",
            boxSizing: "border-box",
            flexShrink: 0,
            position: "relative",
            overflow: "hidden",
          }}>
            <CardContent p={p0} />
          </div>

          {/* Card 2: WebTrader */}
          <div style={{
            width: "623px",
            height: "700px",
            borderRadius: "20px",
            border: "2px solid transparent",
            background: CARD_BG,
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "30px",
            paddingRight: "30px",
            display: "flex",
            gap: "40px",
            boxSizing: "border-box",
            flexShrink: 0,
            position: "relative",
            overflow: "hidden",
          }}>
            <CardContent p={p1} />
          </div>
        </div>

        {/* Card 3: Mobile App */}
        <div style={{
          position: "absolute",
          top: "735px",
          left: 0,
          width: "1288px",
          height: "545px",
          border: "2px solid transparent",
          borderRadius: "20px",
          background: CARD_BG,
          paddingTop: "31px",
          paddingBottom: "31px",
          paddingLeft: "50px",
          paddingRight: "50px",
          display: "flex",
          gap: "24px",
          boxSizing: "border-box",
          alignItems: "center",
          flexShrink: 0,
          overflow: "hidden",
        }}>
          <CardContent p={p2} />
        </div>

      </div>
    </section>
  );
}
