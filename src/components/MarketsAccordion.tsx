"use client";
import { useEffect, useRef, useState } from "react";
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

const VH_PER_MARKET = 40;

export default function MarketsAccordion({
  markets,
  badge,
  titlePrefix,
  titleAccent,
  description,
}: Props) {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = markets.length;

  useEffect(() => {
    if (total <= 0) return;
    let frame: number | null = null;

    function update() {
      frame = null;
      const el = outerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const maxDistance = Math.max(1, rect.height - vh);
      const distance = Math.max(0, -rect.top);
      const progress = Math.min(1, distance / maxDistance);
      const idx = Math.min(
        total - 1,
        Math.max(0, Math.floor(progress * total - 1e-6)),
      );
      setActiveIndex((prev) => (prev === idx ? prev : idx));
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
  }, [total]);

  const activeMarket = markets[activeIndex] ?? markets[0];

  if (!activeMarket) return null;

  return (
    <div
      ref={outerRef}
      style={{
        position: "relative",
        height: `calc(${total * VH_PER_MARKET}vh + 100vh)`,
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "80px 80px 96px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
            width: "100%",
          }}
        >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "relative", width: "520px", height: "520px" }}>
          {markets.map((market, i) => {
            const src = strapiImageUrl(market.image) ?? market.localImage;
            if (!src) return null;
            return (
              <Image
                key={market.slug}
                src={src}
                alt={market.name}
                fill
                style={{
                  objectFit: "contain",
                  opacity: i === activeIndex ? 1 : 0,
                  transition: "opacity 0.5s ease",
                }}
                priority={i === 0}
              />
            );
          })}
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
          {markets.map((market, i) => {
            const isActive = i === activeIndex;
            return (
              <div key={market.slug}>
                <div style={{ padding: "20px 0" }}>
                  <div
                    className="market-heading"
                    style={{
                      textAlign: "left",
                      width: "100%",
                      color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.55)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {market.name}
                  </div>

                  <div
                    style={{
                      overflow: "hidden",
                      maxHeight: isActive ? "240px" : "0px",
                      opacity: isActive ? 1 : 0,
                      transition:
                        "max-height 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease",
                    }}
                  >
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
                  </div>
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
      </div>
    </div>
  );
}
