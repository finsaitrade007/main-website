"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { StrapiPoint } from "@/lib/strapi";

type Props = {
  badge: string;
  title: string;
  description: string;
  points: StrapiPoint[];
};

const VH_PER_POINT = 40;

export default function AboutBuiltByTradersClient({
  badge,
  title,
  description,
  points,
}: Props) {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = points.length;

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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/about/built-orbit.png"
              alt=""
              width={605}
              height={573}
              style={{
                width: "605px",
                height: "573.21px",
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
                            style={{ marginBottom: "16px", maxWidth: "520px" }}
                          >
                            {p.description}
                          </p>
                          <Link href="#" className="market-link">
                            Read More
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
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
