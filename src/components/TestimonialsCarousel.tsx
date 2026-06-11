"use client";
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  type CSSProperties,
  type TransitionEvent,
} from "react";
import type { StrapiTestimonial } from "@/lib/strapi";

const CARD_BG = "#0B1221";
const BORDER_ACTIVE = "1.5px solid rgba(5,111,180,0.55)";
const BORDER_INACTIVE = "1.07px solid rgba(5,111,180,0.35)";

const ACTIVE_WIDTH_PX = 500;
const ACTIVE_HEIGHT_PX = 360;
const INACTIVE_WIDTH_PX = 280;
const INACTIVE_HEIGHT_PX = 260;
const GAP_PX = 28;
const INACTIVE_OPACITY = 0.4;
const TRANSITION_MS = 600;
const AUTO_CYCLE_MS = 3500;
const EASING = "cubic-bezier(0.4, 0, 0.2, 1)";

function QuoteIcon({
  size = 20,
  flipped = false,
}: {
  size?: number;
  flipped?: boolean;
}) {
  // Two side-by-side solid commas that match the design — rounded head with
  // a curved tail tapering down. The `flipped` variant rotates the glyph 180°
  // to create the closing-quote mark used on the right side of the card.
  return (
    <svg
      width={size * 1.4}
      height={size}
      viewBox="0 0 28 20"
      fill="#1F8FD9"
      aria-hidden="true"
      style={{
        display: "inline-block",
        verticalAlign: "text-top",
        transform: flipped ? "rotate(180deg)" : undefined,
      }}
    >
      <path d="M6.2 2.4c2.5 0 4.4 1.9 4.4 4.5 0 3.6-2 7.4-6.2 10.7L2.6 15.7c2.3-1.8 3.6-3.7 3.9-5.3-1.7 0-3.3-1.4-3.3-3.7 0-2.6 1.8-4.3 3-4.3z" />
      <path d="M20 2.4c2.5 0 4.4 1.9 4.4 4.5 0 3.6-2 7.4-6.2 10.7l-1.8-1.9c2.3-1.8 3.6-3.7 3.9-5.3-1.7 0-3.3-1.4-3.3-3.7 0-2.6 1.8-4.3 3-4.3z" />
    </svg>
  );
}

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: StrapiTestimonial[];
}) {
  const n = testimonials.length;

  // Clone the testimonials three times so we can slide past either end and
  // snap back into the middle copy invisibly for an infinite loop.
  const tripled = useMemo(
    () => (n > 0 ? [...testimonials, ...testimonials, ...testimonials] : []),
    [testimonials, n],
  );

  const initialOffset = n + Math.min(1, Math.max(0, n - 1));
  const [offset, setOffset] = useState(initialOffset);
  const [animating, setAnimating] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Track actual container width so the active card stays centered at any viewport.
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setContainerWidth(el.clientWidth);
    update();
    const obs = new ResizeObserver(update);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // On narrow screens show only the active card (no side peeking).
  const isMobile = containerWidth < 560;

  const activeRealIdx = n > 0 ? ((offset % n) + n) % n : 0;

  const startCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (n <= 1) return;
    intervalRef.current = setInterval(() => {
      setAnimating(true);
      setOffset((o) => o + 1);
    }, AUTO_CYCLE_MS);
  }, [n]);

  useEffect(() => {
    startCycle();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startCycle]);

  const handleTransitionEnd = useCallback(
    (e: TransitionEvent<HTMLDivElement>) => {
      if (e.propertyName !== "transform") return;
      if (n === 0) return;
      if (offset < n || offset >= 2 * n) {
        setAnimating(false);
        setOffset(n + activeRealIdx);
      }
    },
    [offset, n, activeRealIdx],
  );

  useEffect(() => {
    if (animating) return;
    const raf = requestAnimationFrame(() => setAnimating(true));
    return () => cancelAnimationFrame(raf);
  }, [animating]);

  if (n === 0) return null;

  const jumpToIndex = (i: number) => {
    setAnimating(true);
    setOffset(i);
    startCycle();
  };

  const goToReal = (real: number) => {
    if (real === activeRealIdx) return;
    const candidates = [real, n + real, 2 * n + real];
    let bestTarget = candidates[1];
    let bestDistance = Math.abs(bestTarget - offset);
    for (const c of candidates) {
      const d = Math.abs(c - offset);
      if (d < bestDistance) {
        bestDistance = d;
        bestTarget = c;
      }
    }
    jumpToIndex(bestTarget);
  };

  // Layout math:
  //   • Active card is the only "wide" card; every other card is "narrow".
  //   • The visible window shows one active card centered between two narrow ones.
  //   • visibleWidth = 2 * INACTIVE + 2 * GAP + ACTIVE
  //   • Per-step translation = INACTIVE + GAP  (because moving the active forward
  //     by one slot exchanges an inactive card on the right for the new active
  //     centered position, which shifts the track left by one inactive slot + gap).
  const visibleWidth =
    2 * INACTIVE_WIDTH_PX + 2 * GAP_PX + ACTIVE_WIDTH_PX;
  const stepDistance = INACTIVE_WIDTH_PX + GAP_PX;

  // Responsive centering: shift track so the active card sits in the middle
  // of the actual container, regardless of whether the container is narrower
  // than the full 1116px design width (happens between 768–1116px viewports).
  const responsiveTranslateX =
    (containerWidth - ACTIVE_WIDTH_PX) / 2 - offset * stepDistance;

  const trackStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: `${GAP_PX}px`,
    transform: `translate3d(${responsiveTranslateX}px, 0, 0)`,
    transition: animating ? `transform ${TRANSITION_MS}ms ${EASING}` : "none",
    willChange: "transform",
  };

  // Every style that changes between active/inactive must use the same
  // `animating` gate so the snap-back jump is fully instant — otherwise the
  // newly-centered card visibly grows from its previous inactive size right
  // after the slide finishes, which looks like the card "comes again".
  const cardTransition = animating
    ? [
        `width ${TRANSITION_MS}ms ${EASING}`,
        `height ${TRANSITION_MS}ms ${EASING}`,
        `padding ${TRANSITION_MS}ms ${EASING}`,
        `opacity ${TRANSITION_MS}ms ${EASING}`,
        `border-color ${TRANSITION_MS}ms`,
        `box-shadow ${TRANSITION_MS}ms`,
      ].join(", ")
    : "none";
  const fontTransition = animating ? `font-size ${TRANSITION_MS}ms ${EASING}` : "none";
  const avatarTransition = animating
    ? [
        `width ${TRANSITION_MS}ms ${EASING}`,
        `height ${TRANSITION_MS}ms ${EASING}`,
        `font-size ${TRANSITION_MS}ms ${EASING}`,
      ].join(", ")
    : "none";

  const activeTestimonial = testimonials[activeRealIdx];

  return (
    <>
      <div
        ref={containerRef}
        style={{
          width: `${visibleWidth}px`,
          maxWidth: "100%",
          margin: "0 auto 40px",
          overflow: "hidden",
          padding: "24px 0",
        }}
      >
        {/* Mobile: single active card only */}
        {isMobile ? (
          <div style={{
            display: "flex",
            justifyContent: "center",
            padding: "0 4px",
          }}>
            <div style={{
              width: "100%",
              maxWidth: `${ACTIVE_WIDTH_PX}px`,
              minHeight: `${ACTIVE_HEIGHT_PX}px`,
              background: CARD_BG,
              border: BORDER_ACTIVE,
              borderRadius: "14px",
              padding: "32px 28px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: "center",
              boxShadow: "0 24px 60px rgba(5,111,180,0.18)",
              position: "relative",
            }}>
              <div style={{ position: "absolute", top: "28px", left: "22px", pointerEvents: "none" }}>
                <QuoteIcon size={32} flipped />
              </div>
              <div style={{ position: "absolute", top: "128px", right: "22px", pointerEvents: "none" }}>
                <QuoteIcon size={32} />
              </div>
              <p style={{
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 300,
                fontSize: "15px",
                lineHeight: "1.6",
                color: "rgba(255,255,255,0.85)",
                margin: 0,
                paddingLeft: "44px",
                paddingRight: "44px",
              }}>
                {activeTestimonial.quote}
              </p>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(5,111,180,0.6), rgba(125,185,214,0.4))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#fff",
                }}>
                  {activeTestimonial.initials}
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-sora, Sora)", fontWeight: 700, fontSize: "15px", color: "#fff", margin: "0 0 2px" }}>
                    {activeTestimonial.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-inter, Inter)", fontSize: "12px", color: "rgba(255,255,255,0.45)", margin: 0 }}>
                    {activeTestimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
        <div onTransitionEnd={handleTransitionEnd} style={trackStyle}>
          {tripled.map((t, i) => {
            const isActive = i === offset;
            const width = isActive ? ACTIVE_WIDTH_PX : INACTIVE_WIDTH_PX;
            const height = isActive ? ACTIVE_HEIGHT_PX : INACTIVE_HEIGHT_PX;

            return (
              <div
                key={i}
                role={isActive ? undefined : "button"}
                tabIndex={isActive ? -1 : 0}
                onClick={() => {
                  if (!isActive) jumpToIndex(i);
                }}
                onKeyDown={(e) => {
                  if (isActive) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    jumpToIndex(i);
                  }
                }}
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                  flexShrink: 0,
                  background: CARD_BG,
                  border: isActive ? BORDER_ACTIVE : BORDER_INACTIVE,
                  borderRadius: "14px",
                  padding: isActive ? "32px 38px" : "22px 24px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textAlign: "center",
                  opacity: isActive ? 1 : INACTIVE_OPACITY,
                  cursor: isActive ? "default" : "pointer",
                  outline: "none",
                  boxShadow: isActive
                    ? "0 24px 60px rgba(5,111,180,0.18)"
                    : "none",
                  transition: cardTransition,
                  position: "relative",
                }}
              >
                {/* Opening quote — fixed absolute anchor at the top-left of
                    every card so it never moves with the text length. */}
                <div
                  style={{
                    position: "absolute",
                    top: isActive ? "28px" : "20px",
                    left: isActive ? "30px" : "22px",
                    pointerEvents: "none",
                  }}
                >
                  <QuoteIcon size={isActive ? 38 : 28} flipped />
                </div>

                {/* Closing quote — fixed absolute anchor on the right side at
                    the level where the testimonial text ends. */}
                <div
                  style={{
                    position: "absolute",
                    top: isActive ? "148px" : "108px",
                    right: isActive ? "30px" : "22px",
                    pointerEvents: "none",
                  }}
                >
                  <QuoteIcon size={isActive ? 38 : 28} />
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 300,
                    fontSize: isActive ? "16px" : "13px",
                    lineHeight: "1.55",
                    color: "rgba(255,255,255,0.85)",
                    margin: 0,
                    paddingLeft: isActive ? "56px" : "36px",
                    paddingRight: isActive ? "56px" : "36px",
                    transition: fontTransition,
                  }}
                >
                  {t.quote}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: isActive ? "56px" : "42px",
                      height: isActive ? "56px" : "42px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, rgba(5,111,180,0.6), rgba(125,185,214,0.4))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-sora, Sora)",
                      fontWeight: 700,
                      fontSize: isActive ? "17px" : "13px",
                      color: "#fff",
                      transition: avatarTransition,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-sora, Sora)",
                        fontWeight: 700,
                        fontSize: isActive ? "16px" : "13px",
                        color: "#fff",
                        margin: "0 0 2px",
                        transition: fontTransition,
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter, Inter)",
                        fontSize: isActive ? "13px" : "11px",
                        color: "rgba(255,255,255,0.45)",
                        margin: 0,
                        transition: fontTransition,
                      }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        )}
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
            onClick={() => goToReal(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            style={{
              width: i === activeRealIdx ? "32px" : "10px",
              height: "10px",
              borderRadius: "5px",
              background:
                i === activeRealIdx ? "#056FB4" : "rgba(5,111,180,0.35)",
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
