"use client";

import { useRef, useState, type TouchEvent } from "react";

type Tier = { id: string; name: string };
type Row = { label: string; values: [string, string, string] };

const YES_GREEN = "#2EE89B";

function isYes(value: string) {
  return value.trim().toLowerCase() === "yes";
}

export default function AccountsCompareTableMobile({
  tiers,
  rows,
}: {
  tiers: Tier[];
  rows: Row[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + tiers.length) % tiers.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % tiers.length);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    // Treat anything beyond 40 px as a deliberate swipe.
    if (Math.abs(delta) > 40) {
      if (delta < 0) goNext();
      else goPrev();
    }
  };

  const currentTier = tiers[activeIndex];

  return (
    <div
      className="compare-table-mobile"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "420px",
        margin: "0 auto",
        padding: "2px",
        borderRadius: "18px",
        background: "linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "16px",
          background: "#06090F",
          padding: "20px 18px",
          overflow: "hidden",
        }}
      >
        {/* Header: tier name with prev/next arrows */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            paddingBottom: "16px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            marginBottom: "8px",
          }}
        >
          <button
            type="button"
            aria-label="Previous tier"
            onClick={goPrev}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "1px solid rgba(125,185,214,0.3)",
              background: "rgba(125,185,214,0.08)",
              padding: 0,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
            >
              <path
                d="M8 2 4 6l4 4"
                stroke="#7DB9D6"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            key={currentTier.id}
            className="compare-table-mobile__tier-name"
            style={{
              flex: 1,
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 600,
              fontSize: "18px",
              color: "#FFFFFF",
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {currentTier.name}
          </div>

          <button
            type="button"
            aria-label="Next tier"
            onClick={goNext}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              border: "1px solid rgba(125,185,214,0.3)",
              background: "rgba(125,185,214,0.08)",
              padding: 0,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
            >
              <path
                d="m4 2 4 4-4 4"
                stroke="#7DB9D6"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Rows for the active tier */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {rows.map((row) => {
            const v = row.values[activeIndex];
            const yes = isYes(v);
            return (
              <div
                key={row.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) 1px minmax(0, 1.15fr)",
                  alignItems: "center",
                  gap: "14px",
                  padding: "12px 0",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 400,
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: "20px",
                  }}
                >
                  {row.label}
                </div>
                <div
                  aria-hidden
                  style={{
                    alignSelf: "stretch",
                    width: "1px",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.014) 0%, rgba(5,111,180,0.7) 50%, rgba(255,255,255,0.014) 100%)",
                  }}
                />
                <div
                  style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: yes ? YES_GREEN : "#FFFFFF",
                    textAlign: "right",
                    lineHeight: "1.35",
                    wordBreak: "break-word",
                    overflowWrap: "anywhere",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {v}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "20px",
          }}
        >
          {tiers.map((t, i) => (
            <button
              key={t.id}
              type="button"
              aria-label={`Show ${t.name}`}
              aria-current={i === activeIndex}
              onClick={() => setActiveIndex(i)}
              style={{
                width: i === activeIndex ? "22px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background:
                  i === activeIndex ? "#056FB4" : "rgba(255,255,255,0.2)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "width 0.2s ease, background 0.2s ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
