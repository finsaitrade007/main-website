/* Forex Scroller — Figma spec
   pill: w=198.55px  h=49.47px  border-radius=24.4px
   pair: Inter 600  13.55px  #ECF1F0
   price: Inter 400  10.84px  #ECF1F0
   flag image: 27.11×27.11px (two overlapping circles like real broker platforms)
*/

const pairs = [
  { pair: "USD/CAD", price: "$1.38499", a: { bg: "#1A3A6B", label: "$"  }, b: { bg: "#CC0000", label: "C" } },
  { pair: "AUD/USD", price: "$0.70400", a: { bg: "#00573F", label: "A"  }, b: { bg: "#1A3A6B", label: "$" } },
  { pair: "EUR/USD", price: "$1.16648", a: { bg: "#003399", label: "€"  }, b: { bg: "#1A3A6B", label: "$" } },
  { pair: "CHF/USD", price: "$0.79108", a: { bg: "#CC0000", label: "✚"  }, b: { bg: "#1A3A6B", label: "$" } },
  { pair: "NZD/USD", price: "$0.58323", a: { bg: "#00247D", label: "N"  }, b: { bg: "#1A3A6B", label: "$" } },
  { pair: "GBP/USD", price: "$1.27342", a: { bg: "#012169", label: "£"  }, b: { bg: "#1A3A6B", label: "$" } },
  { pair: "USD/JPY", price: "$154.210", a: { bg: "#1A3A6B", label: "$"  }, b: { bg: "#BC002D", label: "¥" } },
  { pair: "USD/CHF", price: "$0.89104", a: { bg: "#1A3A6B", label: "$"  }, b: { bg: "#CC0000", label: "✚" } },
];

/** Two overlapping circles — 27.11px total width per Figma flag spec */
function PairFlag({
  a, b,
}: {
  a: { bg: string; label: string };
  b: { bg: string; label: string };
}) {
  const d = 20; // circle diameter
  const overlap = 6; // how much circles overlap
  const total = d * 2 - overlap;

  return (
    <svg
      width={total}
      height={d}
      viewBox={`0 0 ${total} ${d}`}
      style={{ flexShrink: 0, overflow: "visible" }}
    >
      {/* Back circle */}
      <circle cx={d / 2} cy={d / 2} r={d / 2} fill={a.bg} />
      <text
        x={d / 2}
        y={d / 2 + 4}
        textAnchor="middle"
        fill="white"
        fontSize="9"
        fontWeight="700"
        fontFamily="sans-serif"
      >
        {a.label}
      </text>

      {/* Front circle */}
      <circle cx={d / 2 + d - overlap} cy={d / 2} r={d / 2} fill={b.bg} />
      <text
        x={d / 2 + d - overlap}
        y={d / 2 + 4}
        textAnchor="middle"
        fill="white"
        fontSize="9"
        fontWeight="700"
        fontFamily="sans-serif"
      >
        {b.label}
      </text>
    </svg>
  );
}

export default function TickerBar() {
  // triple so the seamless loop works across all screen widths
  const items = [...pairs, ...pairs, ...pairs];

  return (
    <div className="forex-scroller">
      <div className="forex-scroller__track">
        {items.map((item, i) => (
          <div className="forex-pill" key={i}>
            <PairFlag a={item.a} b={item.b} />
            <span className="forex-pill__pair">{item.pair}</span>
            <span className="forex-pill__price">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
