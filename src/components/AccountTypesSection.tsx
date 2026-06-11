"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const accounts = [
  {
    id: "choice",
    label: "Smart Choice",
    watermark: {
      text: "CHOICE",
      fontSize: "209.11px",
      lineHeight: "209.11px",
      width: "873px",
      height: "210px",
      left: "-137.08px",
      stroke: "1.16px",
    },
    desc: "A Beginner-Friendly Account With Low Entry Requirements - Ideal For New Traders Starting Their Journey.",
    features: ["Low Minimum Deposit", "Competitive Spreads", "Zero Commission"],
  },
  {
    id: "pro",
    label: "Smart Pro",
    watermark: {
      text: "PRO",
      fontSize: "180px",
      lineHeight: "180px",
      width: "550px",
      height: "180px",
      left: "50%",
      stroke: "1px",
    },
    desc: "An Intermediate Account Designed For Growing Traders Who Want Better Conditions And More Control.",
    features: ["Lower Spreads", "Higher Leverage", "Priority Support"],
  },
  {
    id: "ecn",
    label: "SMART ECN",
    watermark: {
      text: "ECN",
      fontSize: "180px",
      lineHeight: "180px",
      width: "550px",
      height: "180px",
      left: "50%",
      stroke: "1px",
    },
    desc: "A Professional Account With Raw ECN Spreads And Ultra-Fast Execution For Serious Traders.",
    features: ["Raw ECN Spreads", "Fastest Execution", "Dedicated Manager"],
  },
];

const ACCOUNT_ORDER = ["choice", "pro", "ecn"];
const CYCLE_DELAY = 5000;

// Approximation of spring: mass=1, stiffness=14.69, damping=8.57 (overdamped, ζ≈1.12)
const SPRING_TRANSITION = "width 0.95s cubic-bezier(0.4, 0, 0.2, 1)";

const CARD_DARK = "#06090F";
const RADIUS = "20.91px";
const COLLAPSED_PX = 130;
const GAP_PX = 10;
const CARD_BORDER_GRADIENT =
  "linear-gradient(179.53deg, #056FB4 0.41%, rgba(5, 111, 180, 0.6) 99.59%)";
const CARD_BACKGROUND = `linear-gradient(${CARD_DARK}, ${CARD_DARK}) padding-box, ${CARD_BORDER_GRADIENT} border-box`;

type Account = (typeof accounts)[number];

function AccountCard({
  account,
  isActive,
  total,
  onClick,
}: {
  account: Account;
  isActive: boolean;
  total: number;
  onClick: () => void;
}) {
  const otherCollapsedPx = (total - 1) * COLLAPSED_PX;
  const gapsPx = (total - 1) * GAP_PX;
  const expandedWidth = `calc(100% - ${otherCollapsedPx + gapsPx}px)`;

  return (
    <div
      onClick={!isActive ? onClick : undefined}
      className={isActive ? "account-card-mobile-active" : "account-card-mobile-collapsed"}
      style={{
        flexShrink: 0,
        width: isActive ? expandedWidth : `${COLLAPSED_PX}px`,
        height: "100%",
        background: CARD_BACKGROUND,
        border: "1.16px solid transparent",
        borderRadius: RADIUS,
        position: "relative",
        overflow: "hidden",
        cursor: isActive ? "default" : "pointer",
        transition: SPRING_TRANSITION,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: isActive ? 0 : 1,
          transition: isActive
            ? "opacity 0.2s ease"
            : "opacity 0.25s ease 0.15s",
          pointerEvents: isActive ? "none" : "auto",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "13px",
            letterSpacing: "0.08em",
            color: "rgba(125,185,214,0.7)",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            whiteSpace: "nowrap",
          }}
        >
          {account.label}
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: "36px 48px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          opacity: isActive ? 1 : 0,
          transform: `scale(${isActive ? 1 : 0.97})`,
          transition: isActive
            ? "opacity 0.35s ease 0.2s, transform 0.4s ease 0.15s"
            : "opacity 0.15s ease, transform 0.2s ease",
          pointerEvents: isActive ? "auto" : "none",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 700,
            fontSize: "clamp(22px, 2.5vw, 36px)",
            color: "#FFFFFF",
            marginBottom: "12px",
            whiteSpace: "nowrap",
          }}
        >
          {account.label}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "27.68px",
            letterSpacing: "0%",
            textAlign: "center",
            textTransform: "capitalize",
            color: "#FFFFFF",
            maxWidth: "620px",
            marginBottom: "16px",
          }}
        >
          {account.desc}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            marginBottom: "24px",
          }}
        >
          {account.features.map((f) => (
            <span
              key={f}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "27.68px",
                letterSpacing: "0%",
                textAlign: "center",
                textTransform: "capitalize",
                color: "#FFFFFF",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background: "#056FB4",
                  flexShrink: 0,
                }}
              />
              {f}
            </span>
          ))}
        </div>

        <Link
          href="/accounts"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "14px 36px",
            background: "#056FB4",
            borderRadius: "60px",
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "15px",
            color: "#FFFFFF",
            textDecoration: "none",
            zIndex: 2,
          }}
        >
          Open Account &nbsp;→
        </Link>

        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-25px",
            left: account.watermark.left,
            transform: account.watermark.left === "50%" ? "translateX(-50%)" : undefined,
            width: account.watermark.width,
            height: account.watermark.lineHeight,
            overflow: "hidden",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 1,
          }}
        >
          {account.watermark.left === "50%" ? (
            <div
              key={isActive ? "active" : "inactive"}
              className="account-watermark-track"
              style={{
                display: "flex",
                width: "max-content",
                height: "100%",
                animationDuration: "5.5s",
                animationPlayState: isActive ? "running" : "paused",
              }}
            >
              {[0, 1].map((i) => (
                <span
                  key={i}
                  style={{
                    flexShrink: 0,
                    width: account.watermark.width,
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 400,
                    fontSize: account.watermark.fontSize,
                    lineHeight: account.watermark.lineHeight,
                    letterSpacing: "0%",
                    textAlign: "center",
                    textTransform: "uppercase",
                    color: "transparent",
                    WebkitTextStroke: `${account.watermark.stroke} #606060`,
                    display: "block",
                  }}
                >
                  {account.watermark.text}
                </span>
              ))}
            </div>
          ) : (
            <span
              key={isActive ? "active" : "inactive"}
              className="account-watermark-track-single"
              style={{
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 400,
                fontSize: account.watermark.fontSize,
                lineHeight: account.watermark.lineHeight,
                letterSpacing: "0%",
                textAlign: "center",
                textTransform: "uppercase",
                color: "transparent",
                WebkitTextStroke: `${account.watermark.stroke} #606060`,
                width: "100%",
                display: "block",
                animationDuration: "5.5s",
                animationPlayState: isActive ? "running" : "paused",
              }}
            >
              {account.watermark.text}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AccountTypesSection() {
  const [activeId, setActiveId] = useState("choice");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveId((prev) => {
        const idx = ACCOUNT_ORDER.indexOf(prev);
        return ACCOUNT_ORDER[(idx + 1) % ACCOUNT_ORDER.length];
      });
    }, CYCLE_DELAY);
  }, []);

  useEffect(() => {
    startCycle();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startCycle]);

  const handleClick = useCallback(
    (id: string) => {
      setActiveId(id);
      startCycle();
    },
    [startCycle],
  );

  return (
    <section
      className="page-section"
      style={{ background: "#050208", paddingBottom: "96px" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 22px",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "60px",
            }}
          >
            <span className="badge-text">Finsai Trade Account Type</span>
          </span>
        </div>

        <h2
          className="section-title"
          style={{ textAlign: "center", marginBottom: "16px" }}
        >
          Choose Your Account. Trade Your Way.
        </h2>

        <p
          className="section-desc"
          style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 56px" }}
        >
          From beginners to seasoned professionals, Finsai Trade offers account types designed to match every level of experience and trading goal.
        </p>

        <div className="account-types-cards">
          {accounts.map((account) => (
            <AccountCard
              key={account.id}
              account={account}
              isActive={account.id === activeId}
              total={accounts.length}
              onClick={() => handleClick(account.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
