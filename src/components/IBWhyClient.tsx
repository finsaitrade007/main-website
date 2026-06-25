"use client";
import Link from "@/components/SmartLink";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

type Tab = {
  label: string;
  title: string;
  description: string;
};

type Props = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  tabs: Tab[];
};

const TAB_IMAGES = [
  "/partners/rebates.jpg",
  "/partners/detailed-reports.jpg",
  "/partners/multi-tier.jpg",
  "/partners/broker.jpg",
];

const ctaButtonStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  width: "276px",
  height: "57px",
  maxWidth: "100%",
  borderRadius: "28.83px",
  background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
  textDecoration: "none",
  whiteSpace: "nowrap",
};

export default function IBWhyClient({
  title,
  description,
  ctaLabel,
  ctaHref,
  tabs,
}: Props) {
  const [active, setActive] = useState(0);
  const [mobileSlide, setMobileSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const safeTabs = tabs.length ? tabs : [{ label: "", title: "", description: "" }];
  const activeIndex = Math.min(active, safeTabs.length - 1);
  const current = safeTabs[activeIndex];
  const currentImage = TAB_IMAGES[activeIndex] ?? TAB_IMAGES[0];

  const updateMobileSlide = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const slideWidth = el.clientWidth + 12;
    const index = Math.min(
      Math.round(el.scrollLeft / slideWidth),
      safeTabs.length - 1,
    );
    setMobileSlide(index);
  }, [safeTabs.length]);

  useEffect(() => {
    updateMobileSlide();
    window.addEventListener("resize", updateMobileSlide);
    return () => window.removeEventListener("resize", updateMobileSlide);
  }, [updateMobileSlide]);

  const scrollToSlide = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.clientWidth + 12;
    el.scrollTo({ left: slideWidth * index, behavior: "smooth" });
  };

  return (
    <section
      className="page-section ib-why-section"
      style={{
        background: "#050208",
        width: "100%",
        maxWidth: "1440px",
        minHeight: "822px",
        margin: "0 auto",
        paddingBottom: "80px",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            {title}
          </h2>
          <p className="section-desc">{description}</p>
        </div>

        {/* Desktop / tablet (≥ 426px): tab switcher + two-column content */}
        <div className="ib-why-desktop">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "24px 48px",
              marginBottom: "56px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {safeTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  position: "relative",
                  background: "none",
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                  borderBottom: "none",
                  cursor: "pointer",
                  paddingBottom: "16px",
                  fontFamily: "var(--font-inter, Inter)",
                  fontWeight: 600,
                  fontSize: "clamp(15px, 1.7vw, 24px)",
                  lineHeight: "100%",
                  letterSpacing: 0,
                  color: "#FFFFFF",
                  marginBottom: "-1px",
                  whiteSpace: "nowrap",
                }}
              >
                {tab.label}
                {i === active && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background:
                        "linear-gradient(90deg, #0F0F10 0%, #387AFF 50%, #0F0F10 100%)",
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="two-col-grid" style={{ gap: "80px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", paddingLeft: "30px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 600,
                  fontStyle: "normal",
                  fontSize: "36px",
                  lineHeight: "50px",
                  letterSpacing: 0,
                  color: "#056FB4",
                  minWidth: "152px",
                  minHeight: "50px",
                  margin: "0 0 23px 0",
                }}
              >
                {current.label}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "24px",
                  lineHeight: "48px",
                  letterSpacing: 0,
                  color: "#FFFFFF",
                  width: "692px",
                  maxWidth: "100%",
                  minHeight: "48px",
                  margin: "0 0 7px 0",
                }}
              >
                {current.title}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter, Inter)",
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "32px",
                  letterSpacing: 0,
                  color: "#FFFFFF",
                  width: "690px",
                  maxWidth: "100%",
                  minHeight: "32px",
                  margin: "0 0 71px 0",
                }}
              >
                {current.description}
              </p>
              <div>
                <Link href={ctaHref} className="btn-text" style={ctaButtonStyle}>
                  {ctaLabel}
                </Link>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "503px",
                  aspectRatio: "503 / 410",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <Image
                  key={currentImage}
                  src={currentImage}
                  alt={current.label || "IB Why"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 503px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile (≤ 425px): horizontal scroll — one heading + content per slide */}
        <div className="ib-why-mobile">
          <div
            ref={scrollRef}
            className="ib-why-scroll"
            aria-label="Why choose Finsai Trade features"
            onScroll={updateMobileSlide}
          >
            {safeTabs.map((tab, i) => (
              <article key={i} className="ib-why-slide">
                <h3 className="ib-why-slide__label">{tab.label}</h3>
                <p className="ib-why-slide__title">{tab.title}</p>
                <p className="ib-why-slide__desc">{tab.description}</p>
                <div className="ib-why-slide__image">
                  <Image
                    src={TAB_IMAGES[i] ?? TAB_IMAGES[0]}
                    alt={tab.label || "IB Why"}
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="ib-why-scroll-dots">
            {safeTabs.map((tab, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to ${tab.label}`}
                aria-current={i === mobileSlide}
                className={
                  i === mobileSlide
                    ? "ib-why-scroll-dot ib-why-scroll-dot--active"
                    : "ib-why-scroll-dot"
                }
                onClick={() => scrollToSlide(i)}
              />
            ))}
          </div>

          <div className="ib-why-mobile-cta">
            <Link href={ctaHref} className="btn-text" style={ctaButtonStyle}>
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
