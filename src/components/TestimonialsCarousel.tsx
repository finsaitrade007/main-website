"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import type { StrapiTestimonial } from "@/lib/strapi";

const CARD_BG = "#0B1221";
const BORDER_SIDE = "1.07px solid rgba(5,111,180,0.35)";
const BORDER_CTR = "1.5px solid rgba(5,111,180,0.55)";

function QuoteIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="rgba(5,111,180,0.7)">
      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.364zm9.086 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.46 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.9 2.094s-.978 1.68-1.25 2.69-.344 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.364z" />
    </svg>
  );
}

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: StrapiTestimonial[];
}) {
  const [active, setActive] = useState(
    Math.min(1, Math.max(0, testimonials.length - 1)),
  );
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 3000);
  }, [testimonials.length]);

  useEffect(() => {
    startCycle();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startCycle]);

  if (testimonials.length === 0) return null;

  const prev = (active - 1 + testimonials.length) % testimonials.length;
  const next = (active + 1) % testimonials.length;
  const center = testimonials[active];
  const leftT = testimonials[prev];
  const rightT = testimonials[next];

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "32px",
        }}
      >
        <button
          onClick={() => { setActive(prev); startCycle(); }}
          style={{
            width: "285px",
            height: "179px",
            flexShrink: 0,
            background: CARD_BG,
            border: BORDER_SIDE,
            borderRadius: "7.8px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            cursor: "pointer",
            textAlign: "left",
            opacity: 0.7,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <QuoteIcon size={16} />
            <QuoteIcon size={16} />
          </div>
          <p
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontSize: "11px",
              lineHeight: "18px",
              color: "rgba(255,255,255,0.65)",
              flex: 1,
              margin: "8px 0",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
            }}
          >
            {leftT.quote}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(5,111,180,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 700,
                fontSize: "10px",
                color: "#fff",
                flexShrink: 0,
              }}
            >
              {leftT.initials}
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-sora, Sora)", fontWeight: 700, fontSize: "11px", color: "#fff", margin: 0 }}>
                {leftT.name}
              </p>
              <p style={{ fontFamily: "var(--font-inter, Inter)", fontSize: "10px", color: "rgba(255,255,255,0.45)", margin: 0 }}>
                {leftT.role}
              </p>
            </div>
          </div>
        </button>

        <div
          style={{
            flex: 1,
            height: "311px",
            background: CARD_BG,
            border: BORDER_CTR,
            borderRadius: "14px",
            padding: "28px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <QuoteIcon size={24} />
            <div />
          </div>
          <p
            style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 300,
              fontSize: "17.1px",
              lineHeight: "100%",
              color: "rgba(255,255,255,0.85)",
              maxWidth: "440px",
              margin: 0,
              textAlign: "center",
            }}
          >
            {center.quote}
          </p>
          <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
            <QuoteIcon size={24} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, rgba(5,111,180,0.6), rgba(125,185,214,0.4))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 700,
                fontSize: "18px",
                color: "#fff",
              }}
            >
              {center.initials}
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-sora, Sora)", fontWeight: 700, fontSize: "18px", color: "#fff", margin: "0 0 4px" }}>
                {center.name}
              </p>
              <p style={{ fontFamily: "var(--font-inter, Inter)", fontSize: "13px", color: "rgba(255,255,255,0.45)", margin: 0 }}>
                {center.role}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => { setActive(next); startCycle(); }}
          style={{
            width: "285px",
            height: "179px",
            flexShrink: 0,
            background: CARD_BG,
            border: BORDER_SIDE,
            borderRadius: "7.8px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            cursor: "pointer",
            textAlign: "left",
            opacity: 0.7,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <QuoteIcon size={16} />
            <QuoteIcon size={16} />
          </div>
          <p
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontSize: "11px",
              lineHeight: "18px",
              color: "rgba(255,255,255,0.65)",
              flex: 1,
              margin: "8px 0",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
            }}
          >
            {rightT.quote}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(5,111,180,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 700,
                fontSize: "10px",
                color: "#fff",
                flexShrink: 0,
              }}
            >
              {rightT.initials}
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-sora, Sora)", fontWeight: 700, fontSize: "11px", color: "#fff", margin: 0 }}>
                {rightT.name}
              </p>
              <p style={{ fontFamily: "var(--font-inter, Inter)", fontSize: "10px", color: "rgba(255,255,255,0.45)", margin: 0 }}>
                {rightT.role}
              </p>
            </div>
          </div>
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => { setActive(i); startCycle(); }}
            style={{
              width: i === active ? "32px" : "10px",
              height: "10px",
              borderRadius: "5px",
              background: i === active ? "#056FB4" : "rgba(5,111,180,0.35)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </>
  );
}
