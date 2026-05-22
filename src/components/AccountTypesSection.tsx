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
const BORDER    = "1.16px solid rgba(5,111,180,0.4)";
const RADIUS    = "20.91px";

function CollapsedTab({ account, onClick }: { account: typeof accounts[0]; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "76px",
        flexShrink: 0,
        background: CARD_DARK,
        border: BORDER,
        borderRadius: RADIUS,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        padding: 0,
        transition: "border-color 0.2s",
      }}
    >
      <span style={{
        fontFamily: "var(--font-sora, Sora)",
        fontWeight: 600,
        fontSize: "13px",
        letterSpacing: "0.08em",
        color: "rgba(125,185,214,0.7)",
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        whiteSpace: "nowrap",
      }}>
        {account.label}
      </span>
    </button>
  );
}

export default function AccountTypesSection() {
  const [activeId, setActiveId] = useState("choice");
  const activeIndex = accounts.findIndex((a) => a.id === activeId);
  const active = accounts[activeIndex];
  const before = accounts.slice(0, activeIndex);
  const after = accounts.slice(activeIndex + 1);

  return (
    <section style={{ background: "#050208", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>

        {/* Badge */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 22px",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "60px",
          }}>
            <span className="badge-text">Finsai Trade Account Type</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "16px" }}>
          Choose Your Account. Trade Your Way.
        </h2>

        <p className="section-desc" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 56px" }}>
          From beginners to seasoned professionals, Finsai Trade offers account types designed to match every level of experience and trading goal.
        </p>

        {/* Card row */}
        <div style={{ display: "flex", gap: "10px", height: "476px" }}>

          {/* ── Left: collapsed tabs for accounts BEFORE active ── */}
          {before.map((account) => (
            <CollapsedTab key={account.id} account={account} onClick={() => setActiveId(account.id)} />
          ))}

          {/* ── Expanded active card ── */}
          <div style={{
            flex: 1,
            background: CARD_DARK,
            border: BORDER,
            borderRadius: RADIUS,
            padding: "52px 48px 0",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}>
            {/* Account name */}
            <h3 style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 700,
              fontSize: "36px",
              color: "#FFFFFF",
              marginBottom: "18px",
            }}>
              {active.label}
            </h3>

            {/* Description */}
            <p style={{
              fontFamily: "var(--font-inter, Inter)",
              fontSize: "14px",
              lineHeight: "23px",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "620px",
              marginBottom: "28px",
            }}>
              {active.desc}
            </p>

            {/* Features — horizontal with blue dots */}
            <div style={{ display: "flex", alignItems: "center", gap: "28px", marginBottom: "40px" }}>
              {active.features.map((f) => (
                <span key={f} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-inter, Inter)",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.85)",
                }}>
                  <span style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#056FB4",
                    flexShrink: 0,
                  }} />
                  {f}
                </span>
              ))}
            </div>

            {/* CTA button */}
            <Link
              href="/register"
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

            {/* Watermark image */}
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

          {/* ── Right: collapsed tabs for accounts AFTER active ── */}
          {after.map((account) => (
            <CollapsedTab key={account.id} account={account} onClick={() => setActiveId(account.id)} />
          ))}

        </div>
      </div>
    </section>
  );
}
