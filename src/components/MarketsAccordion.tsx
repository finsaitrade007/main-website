"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { strapiImageUrl, type StrapiMarket } from "@/lib/strapi";


type Props = {
  markets: StrapiMarket[];
  badge: string;
  titlePrefix: string;
  description: string;
};

const VH_PER_MARKET_DESKTOP = 40;
const VH_PER_MARKET_MOBILE = 70;

export default function MarketsAccordion({
  markets,
  badge,
  titlePrefix,
  description,
}: Props) {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 769);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const vhPerMarket = isMobile ? VH_PER_MARKET_MOBILE : VH_PER_MARKET_DESKTOP;

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

  const handleSelect = useCallback(
    (index: number) => {
      if (total <= 0) return;
      const el = outerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const maxDistance = Math.max(1, rect.height - vh);
      // Land in the middle of the segment for the given index so the floor
      // calculation in the scroll handler reliably resolves to it.
      const targetProgress = Math.min(
        1,
        Math.max(0, (index + 0.5) / total),
      );
      const elementAbsoluteTop = window.scrollY + rect.top;
      const targetScrollY = elementAbsoluteTop + targetProgress * maxDistance;
      window.scrollTo({ top: targetScrollY, behavior: "smooth" });
      setActiveIndex(index);
    },
    [total],
  );

  const activeMarket = markets[activeIndex] ?? markets[0];

  if (!activeMarket) return null;

  return (
    <div
      ref={outerRef}
      style={{
        position: "relative",
        height: `calc(${total * vhPerMarket}vh + 100vh)`,
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
          className="markets-grid"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "80px 30px 96px",
          }}
        >
      <div className="markets-grid-image" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "relative", width: "clamp(240px, 45vw, 576px)", height: "clamp(240px, 45vw, 576px)", left: "-10px" }}>
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
                  <button
                    type="button"
                    onClick={() => handleSelect(i)}
                    aria-expanded={isActive}
                    aria-label={`Show ${market.name}`}
                    className="market-heading"
                    style={{
                      textAlign: "left",
                      width: "100%",
                      color: "#FFFFFF",
                      transition: "color 0.3s ease",
                      background: "transparent",
                      border: "none",
                      padding: 0,
                      margin: 0,
                      cursor: "pointer",
                    }}
                  >
                    {market.name}
                  </button>

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
                        style={{ marginBottom: "16px", maxWidth: "570px" }}
                      >
                        {market.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    height: "2.5px",
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
