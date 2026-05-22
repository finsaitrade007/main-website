"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const markets = [
  {
    id: "forex",
    name: "Forex",
    img: "/markets/forex.png",
    desc: "Trade major, minor, and exotic forex pairs with deep liquidity, competitive spreads, and ultra-fast execution on the global foreign exchange market.",
  },
  {
    id: "crypto",
    name: "Crypto",
    img: "/markets/crypto.png",
    desc: "Access Bitcoin, Ethereum, and hundreds of altcoins. Trade crypto CFDs with leverage around the clock on a secure, regulated platform.",
  },
  {
    id: "indices",
    name: "Indices",
    img: "/markets/indices.png",
    desc: "Trade top global stock indices and capture price movements across major economies, including US, European, Asian, and international markets.",
  },
  {
    id: "metals",
    name: "Metals",
    img: "/markets/metals.png",
    desc: "Diversify your portfolio with gold, silver, crude oil, natural gas, and other high-demand commodities traded across global markets.",
  },
  {
    id: "stocks",
    name: "Stocks",
    img: "/markets/stocks.png",
    desc: "Invest and trade shares of leading international companies listed on major global stock exchanges through a professional online trading platform.",
  },
];

export default function MarketsSection() {
  const [active, setActive] = useState("forex");
  const activeMarket = markets.find((m) => m.id === active)!;

  return (
    <section style={{ background: "#050208", padding: "100px 0" }}>
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px",
        alignItems: "center",
      }}>

        {/* ── Left: market image ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "520px", height: "520px" }}>
            <Image
              key={activeMarket.img}
              src={activeMarket.img}
              alt={activeMarket.name}
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        {/* ── Right: content ── */}
        <div>
          {/* Badge */}
          <div style={{ marginBottom: "24px" }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 18px",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "60px",
            }}>
              <span className="badge-text">Market You Can Trade</span>
            </span>
          </div>

          {/* Title */}
          <h2 className="section-title" style={{ marginBottom: "20px" }}>
            Trade Every Market That{" "}
            <span style={{
              background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Matters
            </span>
          </h2>

          {/* Description */}
          <p className="section-desc" style={{ marginBottom: "36px", maxWidth: "560px" }}>
            Finsai Trade gives modern traders access to 5,000+ trading instruments
            across forex, crypto, global stocks, indices, commodities, and CFDs.
          </p>

          {/* Accordion list */}
          <div>
            {markets.map((market) => {
              const isActive = active === market.id;
              return (
                <div key={market.id}>
                  {/* Row: name + expand downward */}
                  <div style={{ padding: "20px 0" }}>
                    <button
                      onClick={() => setActive(market.id)}
                      className="market-heading"
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        textAlign: "left",
                        width: "100%",
                        color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.55)",
                        transition: "color 0.2s",
                      }}
                    >
                      {market.name}
                    </button>

                    {/* Expanded content — opens downward, divider moves with it */}
                    {isActive && (
                      <div style={{ marginTop: "14px" }}>
                        <p className="market-text" style={{ marginBottom: "16px", maxWidth: "520px" }}>
                          {market.desc}
                        </p>
                        <Link href={`/markets/${market.id}`} className="market-link">
                          Read More
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Divider BELOW each item — always gradient */}
                  <div style={{ height: "1px", background: "linear-gradient(90deg, transparent 0%, #056FB4 50%, transparent 100%)" }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
