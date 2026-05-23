const stats = [
  { name: "EUR/USD",     value: "1.0867",    change: "+0.35%", up: true  },
  { name: "GOLD",        value: "2,345.48",  change: "+0.49%", up: true  },
  { name: "NASDAQ 100",  value: "18,736.59", change: "+0.67%", up: true  },
  { name: "S&P 500",     value: "5,321.41",  change: "+0.42%", up: true  },
  { name: "DOW JONES",   value: "39,672.99", change: "+0.31%", up: true  },
];

function Sparkline({ up }: { up: boolean }) {
  return (
    <svg viewBox="0 0 60 22" width={56} height={20}>
      <polyline
        points={up
          ? "2,18 10,15 18,16 26,10 34,12 42,6 50,8 58,4"
          : "2,4 10,8 18,6 26,12 34,10 42,15 50,14 58,18"}
        fill="none"
        stroke={up ? "#11CABE" : "#FA2256"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MarketStatsBar() {
  return (
    <div style={{
      background: "#050208",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      padding: "0",
      overflow: "hidden",
    }}>
      <div style={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "0 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
      }}>
        {stats.map((stat) => (
          <div key={stat.name} style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flex: 1,
            justifyContent: "center",
          }}>
            <div>
              <div style={{
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 600,
                fontSize: "13px",
                color: "rgba(255,255,255,0.55)",
                lineHeight: "100%",
                marginBottom: "4px",
              }}>
                {stat.name}
              </div>
              <div style={{
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 600,
                fontSize: "15px",
                color: "#FFFFFF",
                lineHeight: "100%",
              }}>
                {stat.value}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
              <Sparkline up={stat.up} />
              <span style={{
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontSize: "12px",
                color: stat.up ? "#11CABE" : "#FA2256",
                lineHeight: "100%",
              }}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
