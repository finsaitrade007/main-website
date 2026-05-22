import Image from "next/image";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" stroke="url(#g1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id="g1" x1="24" y1="12" x2="0" y2="12"><stop stopColor="#7DB9D6"/><stop offset="1" stopColor="#056FB4"/></linearGradient></defs>
      </svg>
    ),
    title: "No Hidden Fees,\nTransparent Trades",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" stroke="url(#g2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id="g2" x1="24" y1="12" x2="0" y2="12"><stop stopColor="#7DB9D6"/><stop offset="1" stopColor="#056FB4"/></linearGradient></defs>
      </svg>
    ),
    title: "1000+\nAssets",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" stroke="url(#g3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id="g3" x1="24" y1="12" x2="0" y2="12"><stop stopColor="#7DB9D6"/><stop offset="1" stopColor="#056FB4"/></linearGradient></defs>
      </svg>
    ),
    title: "Up to 500x\nLeverage",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" stroke="url(#g4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id="g4" x1="24" y1="12" x2="0" y2="12"><stop stopColor="#7DB9D6"/><stop offset="1" stopColor="#056FB4"/></linearGradient></defs>
      </svg>
    ),
    title: "Easy Deposits &\nWithdrawals",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" stroke="url(#g5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id="g5" x1="24" y1="12" x2="0" y2="12"><stop stopColor="#7DB9D6"/><stop offset="1" stopColor="#056FB4"/></linearGradient></defs>
      </svg>
    ),
    title: "Live\nLearning",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" stroke="url(#g6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id="g6" x1="24" y1="12" x2="0" y2="12"><stop stopColor="#7DB9D6"/><stop offset="1" stopColor="#056FB4"/></linearGradient></defs>
      </svg>
    ),
    title: "Social\ntrading",
  },
];

const cryptoRows = [
  {
    symbol: "BTC", name: "Bitcoin", price: "$1,236.21",
    iconBg: "linear-gradient(180deg, #F9AA4B -0.02%, #F7931A 99.99%)", iconText: "₿", change: null,
  },
  {
    symbol: "ETH", name: "Ethereum", price: "$2,236.21",
    iconBg: "#5235E8", iconText: "Ξ", change: "up",
  },
  {
    symbol: "OGN", name: "Origin Protocol", price: null,
    iconBg: "#1A82FF", iconText: "⊘", change: "up",
  },
  {
    symbol: "ACN", name: "Achain", price: "$165.8",
    iconBg: "#767DFF", iconText: "△", change: null,
  },
  {
    symbol: "USDT", name: "Tether", price: "$165.8",
    iconBg: "#1BA27A", iconText: "₮", change: "down",
  },
];

function MiniSparkline({ up }: { up: boolean }) {
  return (
    <svg viewBox="0 0 60 22" className="w-14 h-5">
      <polyline
        points={up
          ? "2,18 10,15 18,16 26,10 34,12 42,6 50,8 58,4"
          : "2,4 10,8 18,6 26,12 34,10 42,15 50,14 58,18"}
        fill="none"
        stroke={up ? "#11CABE" : "#FA2256"}
        strokeWidth="1.2"
      />
      <defs>
        <linearGradient id={`sg${up}`} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor={up ? "#11CABE" : "#FA2256"} stopOpacity="0.3"/>
          <stop offset="1" stopColor={up ? "#11CABE" : "#FA2256"} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path
        d={up
          ? "M2,18 L10,15 L18,16 L26,10 L34,12 L42,6 L50,8 L58,4 L58,22 L2,22 Z"
          : "M2,4 L10,8 L18,6 L26,12 L34,10 L42,15 L50,14 L58,18 L58,22 L2,22 Z"}
        fill={`url(#sg${up})`}
      />
    </svg>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4 bg-[#050208]">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex justify-start mb-4">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 22px",
              background: "#000000",
              border: "1.2px solid rgba(255,255,255,0.15)",
              borderRadius: "60px",
            }}
          >
            <span className="badge-text">Features of Finsai Trade</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h2
              className="section-title" style={{ marginBottom: "14px" }}
            >
              Discover Why Traders Trust and Choose Finsai Trade
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "25px",
                color: "#FFFFFF",
                marginBottom: "32px",
              }}
            >
              Trade securely across 1,000+ assets on a globally regulated platform with transparent pricing and 24/7 expert support.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
              {features.map((f) => (
                <div key={f.title} className="flex items-center gap-4">
                  <div
                    className="shrink-0 flex items-center justify-center"
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "50%",
                    }}
                  >
                    {f.icon}
                  </div>
                  <span className="feature-item__label">{f.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Crypto card from Figma */}
          <div className="flex items-center justify-center relative">
            {/* Floating "1000+ products" badge */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 float-animate">
              <Image
                src="/trade-badge.png"
                alt="Trade more than 1000+ products"
                width={150}
                height={150}
                style={{ display: "block" }}
              />
            </div>

            {/* Main dark card */}
            <div
              style={{
                background: "#050208",
                boxShadow: "0px 0px 10.83px rgba(5,111,180,0.2)",
                borderRadius: "14.44px",
                width: "404px",
                padding: "12px",
                position: "relative",
              }}
            >
              {/* Glow blobs */}
              <div style={{ position: "absolute", width: "184px", height: "184px", right: "-40px", bottom: "-40px", background: "#496DAB", filter: "blur(71px)", borderRadius: "50%", opacity: 0.6, pointerEvents: "none" }} />
              <div style={{ position: "absolute", width: "184px", height: "184px", left: "-40px", top: "-60px", background: "#496DAB", filter: "blur(71px)", borderRadius: "50%", opacity: 0.6, pointerEvents: "none" }} />

              {cryptoRows.map((row) => (
                <div
                  key={row.symbol}
                  className="flex items-center gap-3 relative z-10"
                  style={{
                    background: "#1E1B21",
                    boxShadow: "0px 0px 10.83px rgba(82,53,232,0.2)",
                    borderRadius: "10.83px",
                    padding: "10px 12px",
                    marginBottom: "4px",
                  }}
                >
                  {/* Coin icon */}
                  <div
                    className="shrink-0 flex items-center justify-center text-white text-sm font-bold"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: typeof row.iconBg === "string" ? row.iconBg : row.iconBg,
                    }}
                  >
                    {row.iconText}
                  </div>

                  {/* Symbol + Name */}
                  <div className="flex-1 min-w-0">
                    <span
                      style={{
                        fontFamily: "var(--font-sora, Sora)",
                        fontSize: "14.44px",
                        lineHeight: "160%",
                        color: "#9C9CAB",
                        letterSpacing: "0.005em",
                      }}
                    >
                      {row.symbol}{" "}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sora, Sora)",
                        fontSize: "14.44px",
                        lineHeight: "160%",
                        color: "#FFFFFF",
                        letterSpacing: "0.005em",
                      }}
                    >
                      {row.name}
                    </span>
                  </div>

                  {/* Price + sparkline */}
                  <div className="flex items-center gap-2 shrink-0">
                    {row.price && (
                      <span
                        style={{
                          fontFamily: "var(--font-sora, Sora)",
                          fontSize: "12.63px",
                          lineHeight: "145%",
                          color: "#056FB4",
                        }}
                      >
                        {row.price}
                      </span>
                    )}
                    {row.change && (
                      <>
                        <div
                          className="flex items-center justify-center"
                          style={{
                            width: "14.44px",
                            height: "14.44px",
                            background: row.change === "up" ? "#11CABE" : "#FB3766",
                            borderRadius: "3px",
                          }}
                        >
                          <svg viewBox="0 0 10 10" className="w-2.5 h-2.5">
                            <path d={row.change === "up" ? "M5 2 L8 7 L2 7 Z" : "M5 8 L8 3 L2 3 Z"} fill="white"/>
                          </svg>
                        </div>
                        <MiniSparkline up={row.change === "up"} />
                      </>
                    )}
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
