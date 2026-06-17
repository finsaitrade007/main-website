"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { StrapiPoint } from "@/lib/strapi";

type Props = {
  badge: string;
  title: string;
  description: string;
  points: StrapiPoint[];
};

const VH_PER_POINT = 40;
const MOBILE_STEP_Y = 20;

export default function AboutBuiltByTradersClient({
  badge,
  title,
  description,
  points,
}: Props) {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const total = points.length;

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 769);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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

  if (total <= 0) return null;

  return (
    <>
      {/* Desktop / tablet layout (≥ 426px): sticky scroll accordion */}
      <div className="steps-horizontal">
        <div
          ref={outerRef}
          style={{
            position: "relative",
            height: `calc(${total * VH_PER_POINT}vh + 100vh)`,
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
                padding: "80px 80px 96px",
                transform: isMobile ? `translateY(${activeIndex * MOBILE_STEP_Y}px)` : undefined,
                transition: isMobile ? "transform 0.5s ease" : undefined,
              }}
            >
              <div
                className="markets-grid-image"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/about/built-orbit.jpg"
                  alt=""
                  width={605}
                  height={573}
                  style={{
                    width: "100%",
                    maxWidth: "605px",
                    height: "auto",
                    objectFit: "contain",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                  priority
                />
              </div>

              <div style={{ maxWidth: "560px" }}>
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
                  {title}
                </h2>

                <p
                  className="section-desc"
                  style={{ marginBottom: "36px", maxWidth: "560px" }}
                >
                  {description}
                </p>

                <div>
                  {points.map((p, i) => {
                    const isActive = i === activeIndex;
                    return (
                      <div key={p.id}>
                        <div style={{ padding: "20px 0" }}>
                          <button
                            type="button"
                            onClick={() => handleSelect(i)}
                            aria-expanded={isActive}
                            aria-label={`Show ${p.title}`}
                            className="market-heading"
                            style={{
                              textAlign: "left",
                              width: "100%",
                              color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.55)",
                              transition: "color 0.3s ease",
                              background: "transparent",
                              border: "none",
                              padding: 0,
                              margin: 0,
                              cursor: "pointer",
                              font: "inherit",
                            }}
                          >
                            {p.title}
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
                                style={{ maxWidth: "520px" }}
                              >
                                {p.description}
                              </p>
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
      </div>

      {/* Mobile layout (< 425px): heading + vertical stacked cards */}
      <div className="steps-vertical" style={{ paddingBottom: "48px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 18px",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "60px",
              marginBottom: "16px",
            }}
          >
            <span className="badge-text">{badge}</span>
          </span>
          <h2 className="section-title" style={{ marginBottom: "12px" }}>
            {title}
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            {description}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "0 20px",
          }}
        >
          {points.map((p) => (
            <div
              key={p.id}
              style={{
                width: "100%",
                borderRadius: "16px",
                background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
                padding: "1px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "15px",
                  background: "#0B1521",
                  padding: "28px 20px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "1.3",
                    color: "#FFFFFF",
                    margin: 0,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 400,
                    fontSize: "13px",
                    lineHeight: "1.6",
                    color: "rgba(255,255,255,0.65)",
                    margin: 0,
                  }}
                >
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
