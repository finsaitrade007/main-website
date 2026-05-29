"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const accounts = [
  {
    id: "choice",
    label: "Smart Choice",
    watermark: "CHOICE",
    desc: "A Beginner-Friendly Account With Low Entry Requirements - Ideal For New Traders Starting Their Journey.",
    features: ["Low Minimum Deposit", "Competitive Spreads", "Zero Commission"],
  },
  {
    id: "pro",
    label: "Smart Pro",
    watermark: "PRO",
    desc: "An Intermediate Account Designed For Growing Traders Who Want Better Conditions And More Control.",
    features: ["Lower Spreads", "Higher Leverage", "Priority Support"],
  },
  {
    id: "ecn",
    label: "SMART ECN",
    watermark: "ECN",
    desc: "A Professional Account With Raw ECN Spreads And Ultra-Fast Execution For Serious Traders.",
    features: ["Raw ECN Spreads", "Fastest Execution", "Dedicated Manager"],
  },
];

const CARD_DARK = "#06090F";
const RADIUS = "20.91px";
const COLLAPSED_PX = 76;
const GAP_PX = 10;
const SQUEEZE_EASING = "cubic-bezier(0.85, 0, 0.15, 1)";
const SQUEEZE_DURATION = "0.55s";
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
        transition: `width ${SQUEEZE_DURATION} ${SQUEEZE_EASING}`,
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
          padding: "52px 48px 0",
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
            fontSize: "36px",
            color: "#FFFFFF",
            marginBottom: "18px",
            whiteSpace: "nowrap",
          }}
        >
          {account.label}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontSize: "14px",
            lineHeight: "23px",
            color: "rgba(255,255,255,0.55)",
            maxWidth: "620px",
            marginBottom: "28px",
          }}
        >
          {account.desc}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            marginBottom: "40px",
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
                fontSize: "14px",
                color: "rgba(255,255,255,0.85)",
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
          href="/account-pricing"
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
          Open An Account &nbsp;→
        </Link>

        <Image
          aria-hidden
          src="/choice-watermark.png"
          alt=""
          width={700}
          height={150}
          style={{
            position: "absolute",
            bottom: 0,
            left: "-1px",
            width: "700px",
            height: "150px",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
}

export default function AccountTypesSection() {
  const [activeId, setActiveId] = useState("choice");

  return (
    <section style={{ background: "#050208", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>
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

        <div style={{ display: "flex", gap: `${GAP_PX}px`, height: "476px" }}>
          {accounts.map((account) => (
            <AccountCard
              key={account.id}
              account={account}
              isActive={account.id === activeId}
              total={accounts.length}
              onClick={() => setActiveId(account.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
