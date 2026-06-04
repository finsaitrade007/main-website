"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const BTN_GRADIENT = "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)";
const BLUE_GRADIENT_TEXT = "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)";

type Platform = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
  comingSoon?: boolean;
};

const platforms: Platform[] = [
  {
    id: "mt5",
    badge: "MT5",
    title: "Driving Excellence with a Leading CFD Broker",
    subtitle: "Meta Trading 5(MT5)",
    description:
      "Trade the world's most popular forex and currency pairs with a trusted forex broker.\nAccess 40+ major, minor and exotic forex pairs with low spreads from 0.0. Start trading the world's leading CFD products such as Forex in EUR/USD, GBP/USD, and USD/JPY.\n\nTo trade CFD products such as Forex, you will need to open a live trading account to access the global forex markets whether you are from Thailand, Philippines or beyond.",
    image: "/service/mt5-platform.png",
    ctaLabel: "Learn Forex",
    ctaHref: "https://fx.finsaitrade.com/auth/register",
  },
  {
    id: "social",
    badge: "Social",
    title: "Trade Together with Social Trading",
    subtitle: "Social Trading",
    description:
      "Follow and copy strategies from top-performing traders worldwide. Build your portfolio by learning from experienced investors and replicating their trades in real time.\n\nOur social trading platform connects you with a global community of traders, offering transparent performance data and seamless one-click copying.",
    image: "/service/mt5-platform.png",
    ctaLabel: "Explore Social",
    ctaHref: "https://fx.finsaitrade.com/auth/register",
  },
  {
    id: "app",
    badge: "App",
    title: "All-in-One Trading from Your Smartphone",
    subtitle: "Finsai Mobile App",
    description:
      "Execute trades instantly from anywhere with our upcoming mobile trading app. Monitor funds, view charts, and receive alerts on the go.\n\nTailored for mobile-first investors and active traders, the app brings the full power of Finsai's trading suite to your pocket.",
    image: "/service/mt5-platform.png",
    ctaLabel: "Notify Me",
    ctaHref: "https://fx.finsaitrade.com/auth/register",
    comingSoon: true,
  },
];

const tabs = [
  { id: "mt5", label: "MT5" },
  { id: "social", label: "Social Trading" },
  { id: "app", label: "App - coming soon" },
];

export default function ServicesPlatformsSection() {
  const [activeId, setActiveId] = useState<string>("mt5");
  const active = platforms.find((p) => p.id === activeId) ?? platforms[0];

  return (
    <section
      style={{
        background: "#050208",
        width: "1440px",
        height: "807px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "1440px",
          height: "100%",
          margin: "0 auto",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        {/* LEFT — content */}
        <div
          style={{
            position: "absolute",
            top: "95px",
            left: "74px",
            width: "571px",
            height: "620px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Pill badge */}
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "8px",
              paddingBottom: "8px",
              paddingLeft: "20px",
              paddingRight: "20px",
              borderRadius: "60px",
              border: "1px solid #FFFFFF26",
              background: "#000000",
              boxSizing: "border-box",
              minWidth: "72px",
              height: "36px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: 0,
                background: BLUE_GRADIENT_TEXT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                whiteSpace: "nowrap",
              }}
            >
              {active.badge}
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 600,
              fontSize: "44px",
              lineHeight: "118%",
              letterSpacing: "-0.01em",
              color: "#FFFFFF",
              margin: 0,
              maxWidth: "520px",
            }}
          >
            {active.title}
          </h2>

          {/* Tabs row */}
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              gap: "8px",
              marginTop: "8px",
            }}
          >
            {tabs.map((tab) => {
              const isActive = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveId(tab.id)}
                  style={{
                    position: "relative",
                    background: isActive
                      ? "linear-gradient(180deg, rgba(5, 2, 8, 0.3) 0%, rgba(50, 108, 223, 0.3) 100%)"
                      : "transparent",
                    border: "none",
                    borderBottom: "2px solid transparent",
                    borderImageSource: isActive
                      ? "linear-gradient(90deg, #0F0F10 0%, #387AFF 50%, #0F0F10 100%)"
                      : undefined,
                    borderImageSlice: isActive ? 1 : undefined,
                    padding: "10px 18px",
                    cursor: "pointer",
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    color: "#FFFFFF",
                    whiteSpace: "nowrap",
                    transition: "background 150ms ease",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Subtitle */}
          <h3
            style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 700,
              fontSize: "28px",
              lineHeight: "120%",
              letterSpacing: 0,
              margin: "8px 0 0",
              background: BLUE_GRADIENT_TEXT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {active.subtitle}
          </h3>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "24px",
              letterSpacing: 0,
              color: "rgba(255,255,255,0.75)",
              margin: 0,
              whiteSpace: "pre-line",
              maxWidth: "490px",
            }}
          >
            {active.description}
          </p>

          {/* CTA button */}
          <Link
            href={active.ctaHref}
            className="btn-text"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "flex-start",
              marginTop: "8px",
              paddingTop: "12px",
              paddingBottom: "12px",
              paddingLeft: "26px",
              paddingRight: "26px",
              borderRadius: "8px",
              background: BTN_GRADIENT,
              textDecoration: "none",
              color: "#FFFFFF",
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: "100%",
              whiteSpace: "nowrap",
              boxSizing: "border-box",
            }}
          >
            {active.ctaLabel}
          </Link>
        </div>

        {/* RIGHT — visual */}
        <div
          style={{
            position: "absolute",
            top: "51px",
            left: "703px",
            width: "707px",
            height: "707px",
          }}
        >
          <Image
            src={active.image}
            alt={active.subtitle}
            fill
            priority
            sizes="707px"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
}
