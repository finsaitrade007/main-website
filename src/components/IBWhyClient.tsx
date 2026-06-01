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

export default function IBWhyClient({ title, description, ctaLabel, ctaHref, tabs }: Props) {
  const [active, setActive] = useState(0);
  const safeTabs = tabs.length ? tabs : [{ label: "", title: "", description: "" }];
  const current = safeTabs[Math.min(active, safeTabs.length - 1)];

  return (
    <section style={{ background: "#050208", width: "1440px", height: "822px", padding: "80px 0", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>

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
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "48px",
              letterSpacing: 0,
              color: "#FFFFFF",
              margin: 0,
              width: "692px",
              height: "96px",
              overflow: "hidden",
            }}>
              {current.title}
            </h3>
            <p style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 500,
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
                gap: "8px",
                padding: "14px 32px",
                borderRadius: "60px",
                background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}>
                {ctaLabel}
              </Link>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="/why-ib.png"
              alt="IB Why"
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
