"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { TOOLS_WORKFLOW } from "@/components/tools-content";

/**
 * "Your Complete Trading Workflow" — horizontal slider.
 *
 * Was a static CSS grid, which is what the design review flagged: the section
 * was meant to slide.
 *
 * Everything the slider needs is defined in this file — the wrapper and arrows
 * use inline styles, and the scoped <style> block below carries the few rules
 * that need media queries or pseudo-selectors. Nothing here depends on
 * globals.css, so the section cannot end up half-styled if that file is merged
 * separately or a dev server serves a stale copy of it.
 *
 * Sliding itself is native overflow scrolling, so touch swipe, trackpad
 * gestures and momentum all work without a custom drag handler, and the row
 * still scrolls if JS has not hydrated.
 */
export default function ToolsWorkflowSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  const syncEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const scrollable = el.scrollWidth - el.clientWidth > 2;
    setAtStart(el.scrollLeft <= 2);
    // When nothing overflows, both arrows disable rather than sit there dead.
    setAtEnd(!scrollable || el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    syncEdges();
    el.addEventListener("scroll", syncEdges, { passive: true });
    const ro = new ResizeObserver(syncEdges);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", syncEdges);
      ro.disconnect();
    };
  }, [syncEdges]);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".fw-step");
    const gap = 24;
    const step = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  }, []);

  const arrowStyle = (disabled: boolean): React.CSSProperties => ({
    flex: "0 0 auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    padding: 0,
    borderRadius: 9999,
    border: "1px solid rgba(56,130,246,.45)",
    background: "#010712",
    color: disabled ? "rgba(148,163,184,.35)" : "#94A3B8",
    opacity: disabled ? 0.35 : 1,
    cursor: disabled ? "default" : "pointer",
    transition: "color .18s, border-color .18s, opacity .18s",
  });

  return (
    <section className="tl-section">
      <h2 className="tl-h2">Your Complete Trading Workflow</h2>
      <p className="tl-sub">
        Use Finsai Trade&apos;s trading tools to analyze markets, manage risk, and
        trade with greater confidence.
      </p>

      <style>{`
        .fw-slider{position:relative;display:flex;align-items:center;gap:14px;
          max-width:1400px;margin:clamp(32px,3.7vw,53px) auto 0;}
        .fw-track{position:relative;display:flex;gap:24px;flex:1 1 auto;min-width:0;
          overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;
          scrollbar-width:none;-ms-overflow-style:none;padding:4px 2px 6px;}
        .fw-track::-webkit-scrollbar{display:none;}
        .fw-track:focus-visible{outline:2px solid rgba(56,130,246,.8);
          outline-offset:4px;border-radius:18px;}
        /* Fixed width, NOT a fraction of the container. Five 340px cards plus
           gaps come to ~1700px against a ~1176px track, so the row genuinely
           overflows and the arrows have something to move. */
        .fw-step{position:relative;z-index:1;box-sizing:border-box;
          flex:0 0 340px;scroll-snap-align:start;min-height:280px;
          border-radius:18px;border:1px solid rgba(56,130,246,.4);
          background:linear-gradient(160deg,#010712 0%,#020B1A 100%);
          padding:28px 26px 30px;display:flex;flex-direction:column;
          align-items:flex-start;gap:0;
          transition:border-color .2s,transform .2s;}
        .fw-step:hover{border-color:rgba(56,130,246,.85);transform:translateY(-2px);}
        .fw-num{font-family:var(--font-sora,Sora);font-size:13px;font-weight:600;
          letter-spacing:.14em;color:#056FB4;margin-bottom:18px;}
        .fw-icon{display:inline-flex;align-items:center;justify-content:center;
          width:76px;height:76px;flex-shrink:0;}
        .fw-ring{border-radius:9999px;border:1px solid rgba(5,111,180,.35);
          background:rgba(5,111,180,.06);}
        .fw-icon img{width:40px;height:40px;object-fit:contain;}
        .fw-step:not(:has(.fw-ring)) .fw-icon img{width:76px;height:76px;}
        .fw-title{font-family:var(--font-sora,Sora);font-size:20px;font-weight:600;
          line-height:1.3;color:#fff;text-align:left;margin:20px 0 0;}
        .fw-desc{font-family:var(--font-inter,Inter);font-size:14.5px;
          line-height:1.65;color:#94A3B8;text-align:left;margin:10px 0 0;}
        .fw-arrow:hover:not(:disabled){color:#fff !important;
          border-color:rgba(56,130,246,.9) !important;}
        @media (max-width:900px){
          .fw-step{flex:0 0 300px;padding:24px 22px 26px;}
          .fw-icon{width:66px;height:66px;}
          .fw-step:not(:has(.fw-ring)) .fw-icon img{width:66px;height:66px;}
        }
        @media (max-width:768px){
          .fw-step{flex:0 0 82%;}
          .fw-arrow{display:none;}
        }
        @media (prefers-reduced-motion:reduce){
          .fw-track{scroll-behavior:auto;}
          .fw-step:hover{transform:none;}
        }
      `}</style>

      <div className="fw-slider">
        <button
          type="button"
          className="fw-arrow"
          style={arrowStyle(atStart)}
          onClick={() => scrollByCard(-1)}
          disabled={atStart}
          aria-label="Previous workflow steps"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            <path
              d="M11.25 3.75 6 9l5.25 5.25"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          ref={trackRef}
          className="fw-track"
          role="group"
          aria-label="Trading workflow steps"
          tabIndex={0}
        >
          {TOOLS_WORKFLOW.map((s) => (
            <article key={s.title} className="fw-step">
              <span className="fw-num">STEP {s.step}</span>
              {/* manage-risk-smarter.svg carries its own ring, so it is rendered
                  bare; the other four get the ring from CSS. */}
              <span className={s.ring ? "fw-icon fw-ring" : "fw-icon"}>
                <Image src={s.icon} alt="" width={76} height={76} />
              </span>
              <h3 className="fw-title">{s.title}</h3>
              <p className="fw-desc">{s.description}</p>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="fw-arrow"
          style={arrowStyle(atEnd)}
          onClick={() => scrollByCard(1)}
          disabled={atEnd}
          aria-label="Next workflow steps"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            <path
              d="M6.75 3.75 12 9l-5.25 5.25"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
