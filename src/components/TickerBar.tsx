"use client";

/* Forex Scroller — Figma spec
   pill: w=198.55px  h=49.47px  border-radius=24.4px
   pair: Inter 600  13.55px  #ECF1F0
   price: Inter 400  10.84px  #ECF1F0
   flag image: 27.11×27.11px (two overlapping circles)
*/

import { useEffect, useState } from "react";

type PriceMap = Record<string, { price: number; change: number }>;

const PAIR_META = [
  { pair: "USD/CAD", tv: "FX:USDCAD", a: { bg: "#1A3A6B", label: "$"  }, b: { bg: "#CC0000", label: "C" } },
  { pair: "AUD/USD", tv: "FX:AUDUSD", a: { bg: "#00573F", label: "A"  }, b: { bg: "#1A3A6B", label: "$" } },
  { pair: "EUR/USD", tv: "FX:EURUSD", a: { bg: "#003399", label: "€"  }, b: { bg: "#1A3A6B", label: "$" } },
  { pair: "CHF/USD", tv: "FX:CHFUSD", a: { bg: "#CC0000", label: "✚"  }, b: { bg: "#1A3A6B", label: "$" } },
  { pair: "NZD/USD", tv: "FX:NZDUSD", a: { bg: "#00247D", label: "N"  }, b: { bg: "#1A3A6B", label: "$" } },
  { pair: "GBP/USD", tv: "FX:GBPUSD", a: { bg: "#012169", label: "£"  }, b: { bg: "#1A3A6B", label: "$" } },
  { pair: "USD/JPY", tv: "FX:USDJPY", a: { bg: "#1A3A6B", label: "$"  }, b: { bg: "#BC002D", label: "¥" } },
  { pair: "USD/CHF", tv: "FX:USDCHF", a: { bg: "#1A3A6B", label: "$"  }, b: { bg: "#CC0000", label: "✚" } },
];

const FALLBACK_PRICES: Record<string, string> = {
  "FX:USDCAD": "$1.38499",
  "FX:AUDUSD": "$0.70400",
  "FX:EURUSD": "$1.16648",
  "FX:CHFUSD": "$0.79108",
  "FX:NZDUSD": "$0.58323",
  "FX:GBPUSD": "$1.27342",
  "FX:USDJPY": "$154.210",
  "FX:USDCHF": "$0.89104",
};

function formatPrice(tv: string, live: PriceMap): string {
  const entry = live[tv];
  if (!entry) return FALLBACK_PRICES[tv] ?? "—";
  const p = entry.price;
  // JPY pairs need 3 decimal places, others 5
  const decimals = tv.includes("JPY") ? 3 : 5;
  return "$" + p.toFixed(decimals);
}

function PairFlag({ a, b }: { a: { bg: string; label: string }; b: { bg: string; label: string } }) {
  const d = 20;
  const overlap = 6;
  const total = d * 2 - overlap;
  return (
    <svg width={total} height={d} viewBox={`0 0 ${total} ${d}`} style={{ flexShrink: 0, overflow: "visible" }}>
      <circle cx={d / 2} cy={d / 2} r={d / 2} fill={a.bg} />
      <text x={d / 2} y={d / 2 + 4} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="sans-serif">{a.label}</text>
      <circle cx={d / 2 + d - overlap} cy={d / 2} r={d / 2} fill={b.bg} />
      <text x={d / 2 + d - overlap} y={d / 2 + 4} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="sans-serif">{b.label}</text>
    </svg>
  );
}

export default function TickerBar() {
  const [prices, setPrices] = useState<PriceMap>({});

  useEffect(() => {
    async function fetch_() {
      try {
        const res = await fetch("/api/prices");
        if (!res.ok) return;
        const { forex } = await res.json() as { forex: PriceMap };
        setPrices(forex);
      } catch { /* keep fallback */ }
    }
    fetch_();
    const id = setInterval(fetch_, 30_000);
    return () => clearInterval(id);
  }, []);

  const items = [...PAIR_META, ...PAIR_META, ...PAIR_META];

  return (
    <div className="forex-scroller">
      <div className="forex-scroller__track">
        {items.map((item, i) => (
          <div className="forex-pill" key={i}>
            <PairFlag a={item.a} b={item.b} />
            <span className="forex-pill__pair">{item.pair}</span>
            <span className="forex-pill__price">{formatPrice(item.tv, prices)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
