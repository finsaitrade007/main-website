"use client";

import Link from "next/link";
import { useState } from "react";
import type { StrapiPoint } from "@/lib/strapi";

type Props = {
  badge: string;
  title: string;
  description: string;
  points: StrapiPoint[];
};

export default function AboutBuiltByTradersClient({
  badge,
  title,
  description,
  points,
}: Props) {
  const [active, setActive] = useState<number>(points[0]?.id ?? 0);

  return (
    <div style={{ flex: 1, maxWidth: "560px" }}>
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

      <p className="section-desc" style={{ marginBottom: "36px", maxWidth: "560px" }}>
        {description}
      </p>

      <div>
        {points.map((p) => {
          const isActive = active === p.id;
          return (
            <div key={p.id}>
              <div style={{ padding: "20px 0" }}>
                <button
                  onClick={() => setActive(p.id)}
                  className="market-heading"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    textAlign: "left",
                    width: "100%",
                    color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.55)",
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
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
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
  );
}
