"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Point = {
  slug: string;
  title: string;
  description: string;
};

const POINTS: Point[] = [
  {
    slug: "problem",
    title: "The Problem",
    description:
      "Trade major, minor, and exotic forex pairs with deep liquidity, competitive spreads, and ultra-fast execution on the global foreign exchange market.",
  },
  {
    slug: "solutions",
    title: "The Solutions",
    description:
      "Institutional-grade tools, transparent pricing and 24/7 multilingual support — engineered so every trader gets the same edge top desks have always enjoyed.",
  },
  {
    slug: "ecosystem",
    title: "The Ecosystem",
    description:
      "From execution to insight, learning, automation and rewards — built end-to-end so nothing breaks at scale, no matter what market you trade.",
  },
];

export default function AboutBuiltByTradersSection() {
  const [active, setActive] = useState(POINTS[0].slug);

  return (
    <section
      style={{
        position: "relative",
        background: "#050208",
        width: "1440px",
        maxWidth: "100%",
        height: "830.51px",
        margin: "0 auto",
        padding: "79.75px 55.38px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "32px",
        }}
      >
        {/* Left artwork — interconnected trading ecosystem icons. */}
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
            flexShrink: 0,
          }}
        />

        {/* Right copy + accordion column */}
        <div style={{ flex: 1, maxWidth: "560px" }}>
          {/* "Our Story" pill badge */}
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
              <span className="badge-text">Our Story</span>
            </span>
          </div>

          <h2 className="section-title" style={{ marginBottom: "20px" }}>
            Built by Traders. Driven by Purpose
          </h2>

          <p
            className="section-desc"
            style={{ marginBottom: "36px", maxWidth: "560px" }}
          >
            Finsai Trade platforms are engineered to deliver seamless
            execution, institutional-level tools, and reliable uptime — so
            you stay in control, wherever you trade. Whether you&apos;re a
            beginner or a pro, our platforms help you trade smarter and
            faster.
          </p>

          <div>
            {POINTS.map((p) => {
              const isActive = active === p.slug;
              return (
                <div key={p.slug}>
                  <div style={{ padding: "20px 0" }}>
                    <button
                      onClick={() => setActive(p.slug)}
                      className="market-heading"
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        cursor: "pointer",
                        textAlign: "left",
                        width: "100%",
                        color: isActive
                          ? "#FFFFFF"
                          : "rgba(255,255,255,0.55)",
                        transition: "color 0.2s",
                      }}
                    >
                      {p.title}
                    </button>

                    {isActive && (
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
                    )}
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
    </section>
  );
}
