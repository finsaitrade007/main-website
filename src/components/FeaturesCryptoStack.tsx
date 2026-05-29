"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type CryptoRow = {
  symbol: string;
  name: string;
  price: string | null;
  icon: string;
  change: "up" | "down" | null;
};

const cryptoRows: CryptoRow[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$1,236.21",
    icon: "/crypto/btc.svg",
    change: null,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$2,236.21",
    icon: "/crypto/eth.svg",
    change: "up",
  },
  {
    symbol: "OGN",
    name: "Origin Protocol",
    price: null,
    icon: "/crypto/ogn.svg",
    change: "up",
  },
  {
    symbol: "ACN",
    name: "Achain",
    price: "$165.8",
    icon: "/crypto/act.svg",
    change: null,
  },
  {
    symbol: "USDT",
    name: "Tether",
    price: "$165.8",
    icon: "/crypto/usdt.svg",
    change: "down",
  },
];

function MiniSparkline({ up }: { up: boolean }) {
  return (
    <svg viewBox="0 0 60 22" className="w-14 h-5">
      <polyline
        points={
          up
            ? "2,18 10,15 18,16 26,10 34,12 42,6 50,8 58,4"
            : "2,4 10,8 18,6 26,12 34,10 42,15 50,14 58,18"
        }
        fill="none"
        stroke={up ? "#11CABE" : "#FA2256"}
        strokeWidth="1.2"
      />
      <defs>
        <linearGradient id={`sg${up}`} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor={up ? "#11CABE" : "#FA2256"} stopOpacity="0.3" />
          <stop offset="1" stopColor={up ? "#11CABE" : "#FA2256"} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={
          up
            ? "M2,18 L10,15 L18,16 L26,10 L34,12 L42,6 L50,8 L58,4 L58,22 L2,22 Z"
            : "M2,4 L10,8 L18,6 L26,12 L34,10 L42,15 L50,14 L58,18 L58,22 L2,22 Z"
        }
        fill={`url(#sg${up})`}
      />
    </svg>
  );
}

const MAX_PUSH = 160;
const FALLOFF = 90;
const BADGE_TOP_INSET = 24;
const BADGE_BOTTOM_INSET = 24;

export default function FeaturesCryptoStack() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [badgeY, setBadgeY] = useState(0);

  useEffect(() => {
    let frame: number | null = null;

    function update() {
      frame = null;
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = rect.height + vh;
      const passed = vh - rect.top;
      const p = Math.max(0, Math.min(1, passed / total));
      const usableHeight = Math.max(0, rect.height - BADGE_TOP_INSET - BADGE_BOTTOM_INSET);
      const y = BADGE_TOP_INSET + p * usableHeight;
      setProgress(p);
      setBadgeY(y);
    }

    function onScroll() {
      if (frame != null) return;
      frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (frame != null) window.cancelAnimationFrame(frame);
    };
  }, []);

  function getOffset(index: number) {
    const tile = tileRefs.current[index];
    const container = containerRef.current;
    if (!tile || !container) return 0;
    const containerTop = container.getBoundingClientRect().top;
    const tileRect = tile.getBoundingClientRect();
    const tileCenter = tileRect.top - containerTop + tileRect.height / 2;
    const distance = Math.abs(tileCenter - badgeY);
    const proximity = Math.max(0, 1 - distance / FALLOFF);
    const eased = proximity * proximity * (3 - 2 * proximity);
    return eased * MAX_PUSH;
  }

  return (
    <div
      ref={containerRef}
      style={{
        background:
          "linear-gradient(#050208, #050208) padding-box, linear-gradient(2.13deg, #056FB4 0.01%, rgba(5, 111, 180, 0.6) 99.99%) border-box",
        boxShadow: "0px 0px 10.83px 0px #056FB433",
        borderRadius: "14.44px",
        width: "404.30487060546875px",
        height: "433.18377685546875px",
        padding: "41.59px 0 41.59px 10.97px",
        position: "relative",
        border: "solid transparent",
        borderWidth: "1.73px 5.2px 1.73px 3.47px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "14.44px",
        overflow: "visible",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "-75px",
          top: 0,
          zIndex: 20,
          transform: `translate3d(0, ${badgeY - 75}px, 0)`,
          transition: "transform 140ms cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "transform",
          pointerEvents: "none",
        }}
        data-scroll-progress={progress}
      >
        <Image
          src="/trade-badge.png"
          alt="Trade more than 1000+ products"
          width={150}
          height={150}
          style={{ display: "block" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          width: "184px",
          height: "184px",
          right: "-40px",
          bottom: "-40px",
          background: "#496DAB",
          filter: "blur(71px)",
          borderRadius: "50%",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "184px",
          height: "184px",
          left: "-40px",
          top: "-60px",
          background: "#496DAB",
          filter: "blur(71px)",
          borderRadius: "50%",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      {cryptoRows.map((row, i) => {
        const offset = getOffset(i);
        return (
          <div
            key={row.symbol}
            ref={(el) => {
              tileRefs.current[i] = el;
            }}
            className="flex items-center gap-3 relative z-10"
            style={{
              background: "#1E1B21",
              boxShadow: "0px 0px 10.83px 0px rgba(82,53,232,0.2)",
              borderRadius: "10.83px",
              padding: "10px 12px",
              width: "332.1075439453125px",
              height: "57.757835388183594px",
              flexShrink: 0,
              boxSizing: "border-box",
              transform: `translate3d(${offset}px, 0, 0)`,
              transition: "transform 140ms cubic-bezier(0.22, 1, 0.36, 1)",
              willChange: "transform",
            }}
          >
            <div
              className="shrink-0 flex items-center justify-center"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <Image
                src={row.icon}
                alt={`${row.symbol} logo`}
                width={36}
                height={36}
                style={{ display: "block", width: "100%", height: "100%" }}
              />
            </div>

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
                      background:
                        row.change === "up" ? "#11CABE" : "#FB3766",
                      borderRadius: "3px",
                    }}
                  >
                    <svg viewBox="0 0 10 10" className="w-2.5 h-2.5">
                      <path
                        d={
                          row.change === "up"
                            ? "M5 2 L8 7 L2 7 Z"
                            : "M5 8 L8 3 L2 3 Z"
                        }
                        fill="white"
                      />
                    </svg>
                  </div>
                  <MiniSparkline up={row.change === "up"} />
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
