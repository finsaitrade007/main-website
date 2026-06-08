"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
  "/why-ib.png",
  "/why-ib-reports.png",
  "/why-ib-multitier.png",
  "/why-ib-regulated.png",
];

export default function IBWhyClient({ title, description, ctaLabel, ctaHref, tabs }: Props) {
  const [active, setActive] = useState(0);
  const safeTabs = tabs.length ? tabs : [{ label: "", title: "", description: "" }];
  const activeIndex = Math.min(active, safeTabs.length - 1);
  const current = safeTabs[activeIndex];
  const currentImage = TAB_IMAGES[activeIndex] ?? TAB_IMAGES[0];

  return (
    <section
      className="page-section"
      style={{ background: "#050208", width: "100%", maxWidth: "1440px", minHeight: "822px", paddingBottom: "80px" }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            {title}
          </h2>
          <p className="section-desc">
            {description}
          </p>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "48px",
          marginBottom: "56px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}>
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
                fontSize: "24px",
                lineHeight: "100%",
                letterSpacing: 0,
                color: "#FFFFFF",
                marginBottom: "-1px",
                whiteSpace: "nowrap",
              }}
            >
              {tab.label}
              {i === active && (
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, #0F0F10 0%, #387AFF 50%, #0F0F10 100%)",
                }} />
              )}
            </button>
          ))}
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h3 style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 600,
              fontStyle: "normal",
              fontSize: "36px",
              lineHeight: "50px",
              letterSpacing: 0,
              color: "#056FB4",
              margin: 0,
            }}>
              {current.label}
            </h3>
            <p style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "24px",
              lineHeight: "48px",
              letterSpacing: 0,
              color: "#FFFFFF",
              width: "692px",
              height: "48px",
              margin: 0,
            }}>
              {current.title}
            </p>
            <p style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "32px",
              letterSpacing: 0,
              color: "#FFFFFF",
              margin: 0,
            }}>
              {current.description}
            </p>
            <div>
              <Link href={ctaHref} className="btn-text" style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "276px",
                height: "57px",
                borderRadius: "28.83px",
                background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
                textDecoration: "none",
                whiteSpace: "nowrap",
                boxSizing: "border-box",
              }}>
                {ctaLabel}
              </Link>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              key={currentImage}
              src={currentImage}
              alt={current.label || "IB Why"}
              width={472}
              height={444}
              style={{ objectFit: "contain", borderRadius: "20px" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
