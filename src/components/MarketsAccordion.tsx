"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { strapiImageUrl, type StrapiMarket } from "@/lib/strapi";

type Props = {
  markets: StrapiMarket[];
  badge: string;
  titlePrefix: string;
  titleAccent: string;
  description: string;
};

export default function MarketsAccordion({
  markets,
  badge,
  titlePrefix,
  titleAccent,
  description,
}: Props) {
  const [active, setActive] = useState(markets[0]?.slug ?? "");
  const activeMarket = markets.find((m) => m.slug === active) ?? markets[0];
  const activeImg = strapiImageUrl(activeMarket?.image);

  if (!activeMarket) return null;

  return (
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "relative", width: "520px", height: "520px" }}>
          {activeImg && (
            <Image
              key={activeImg}
              src={activeImg}
              alt={activeMarket.name}
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          )}
        </div>
      </div>

      <div>
        <div style={{ marginBottom: "24px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 18px",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "60px",
            }}
          >
            <span className="badge-text">{badge}</span>
          </span>
        </div>

        <h2 className="section-title" style={{ marginBottom: "20px" }}>
          {titlePrefix}
          <span
            style={{
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {titleAccent}
          </span>
        </h2>

        <p
          className="section-desc"
          style={{ marginBottom: "36px", maxWidth: "560px" }}
        >
          {description}
        </p>

        <div>
          {markets.map((market) => {
            const isActive = active === market.slug;
            return (
              <div key={market.slug}>
                <div style={{ padding: "20px 0" }}>
                  <button
                    onClick={() => setActive(market.slug)}
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

                  {isActive && (
                    <div style={{ marginTop: "14px" }}>
                      <p
                        className="market-text"
                        style={{ marginBottom: "16px", maxWidth: "520px" }}
                      >
                        {market.description}
                      </p>
                      <Link
                        href={`/markets/${market.slug}`}
                        className="market-link"
                      >
                        Read More
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2 6h8M6 2l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>

                <div
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent 0%, #056FB4 50%, transparent 100%)",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
