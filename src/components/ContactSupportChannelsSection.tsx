"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type IconKey = "chat" | "email" | "phone";

type Channel = {
  icon: IconKey;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

const CHANNELS: Channel[] = [
  {
    icon: "chat",
    title: "Live Chat Support",
    description: "Instant help through in-platform or website chat.",
    ctaLabel: "Start Live Chat",
    ctaHref: "#live-chat",
  },
  {
    icon: "email",
    title: "Email Support",
    description: "Instant help through in-platform or website chat.",
    ctaLabel: "support@finsaitrade.com",
    ctaHref: "mailto:support@finsaitrade.com",
  },
];

const CTA_STYLE: React.CSSProperties = {
  boxSizing: "border-box",
  width: "224px",
  height: "46px",
  padding: "12px 16px",
  borderRadius: "12px",
  border: "1px solid transparent",
  background:
    "linear-gradient(159.73deg, #050208 63.16%, #056FB4 447.31%) padding-box, linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%) border-box",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "var(--font-inter, Inter)",
  fontWeight: 500,
  fontSize: "14px",
  color: "#FFFFFF",
  whiteSpace: "nowrap",
  cursor: "pointer",
};

function openChat() {
  if (!document.getElementById("fcrm-bridge-styles")) {
    const s = document.createElement("style");
    s.id = "fcrm-bridge-styles";
    s.textContent = `
      @keyframes fcrm-ring {
        0%,100% { box-shadow: 0 0 0 0 rgba(5,111,180,.75); }
        60%      { box-shadow: 0 0 0 16px rgba(5,111,180,0); }
      }
      @keyframes fcrm-tip-in {
        from { opacity: 0; transform: translateY(6px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      #fcrm-chat-frame.fcrm-active {
        animation: fcrm-ring .85s ease-out 4;
        outline: 2px solid rgba(5,111,180,.85);
        outline-offset: 4px;
        border-radius: 50% !important;
      }
      #fcrm-bridge-tip {
        position: fixed;
        bottom: 112px;
        right: 20px;
        background: #056FB4;
        color: #fff;
        font: 500 13px/1.4 Inter,sans-serif;
        padding: 8px 14px;
        border-radius: 8px;
        z-index: 2147483001;
        pointer-events: none;
        box-shadow: 0 4px 18px rgba(0,0,0,.35);
        white-space: nowrap;
        animation: fcrm-tip-in .18s ease-out;
      }
      #fcrm-bridge-tip::after {
        content: "";
        position: absolute;
        bottom: -7px;
        right: 32px;
        border: 7px solid transparent;
        border-bottom: 0;
        border-top-color: #056FB4;
      }
    `;
    document.head.appendChild(s);
  }

  const iframe = document.getElementById("fcrm-chat-frame");
  if (iframe) {
    iframe.classList.remove("fcrm-active");
    void iframe.offsetWidth;
    iframe.classList.add("fcrm-active");
    setTimeout(() => iframe.classList.remove("fcrm-active"), 4000);
  }

  document.getElementById("fcrm-bridge-tip")?.remove();
  const tip = document.createElement("div");
  tip.id = "fcrm-bridge-tip";
  tip.textContent = "Click to open chat";
  document.body.appendChild(tip);
  setTimeout(() => tip.parentNode?.removeChild(tip), 4000);
}

function ChannelIcon({ icon }: { icon: IconKey }): ReactNode {
  const common = {
    width: 48,
    height: 48,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "url(#channel-grad)",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  const gradient = (
    <defs>
      <linearGradient id="channel-grad" x1="0" y1="12" x2="24" y2="12">
        <stop stopColor="#7DB9D6" />
        <stop offset="1" stopColor="#056FB4" />
      </linearGradient>
    </defs>
  );

  switch (icon) {
    case "chat":
      return (
        <svg {...common}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <circle cx="9" cy="11.5" r="0.8" fill="url(#channel-grad)" />
          <circle cx="12.5" cy="11.5" r="0.8" fill="url(#channel-grad)" />
          <circle cx="16" cy="11.5" r="0.8" fill="url(#channel-grad)" />
          {gradient}
        </svg>
      );
    case "email":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M15.5 12v1.5a2 2 0 0 0 4 0V12" />
          {gradient}
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          {gradient}
        </svg>
      );
  }
}

export default function ContactSupportChannelsSection() {
  return (
    <section
      className="page-section"
      style={{
        background: "#050208",
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        paddingBottom: "96px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          gap: "clamp(24px, 6.1vw, 88px)",
          flexWrap: "wrap",
        }}
      >
        {CHANNELS.map((channel) => (
          <article
            key={channel.title}
            style={{
              boxSizing: "border-box",
              width: "min(306px, calc(100vw - 40px))",
              minHeight: "355px",
              borderRadius: "14.28px",
              border: "1.19px solid transparent",
              background:
                "linear-gradient(159.73deg, #050208 63.16%, #056FB4 447.31%) padding-box, linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%) border-box",
              backdropFilter: "blur(11.895910263061523px)",
              WebkitBackdropFilter: "blur(11.895910263061523px)",
              padding: "26px 24px 32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "20px",
            }}
          >
            <span
              style={{
                width: "113px",
                height: "113px",
                borderRadius: "66px",
                background:
                  "radial-gradient(circle at 50% 50%, rgba(5,111,180,0.25) 0%, rgba(10,17,30,0.9) 80%)",
                border: "1px solid rgba(125,185,214,0.25)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <ChannelIcon icon={channel.icon} />
            </span>

            <h3
              style={{
                margin: 0,
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 600,
                fontSize: "clamp(15px, 1.4vw, 20px)",
                lineHeight: "1.4",
                color: "#FFFFFF",
              }}
            >
              {channel.title}
            </h3>

            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "22px",
                color: "rgba(255,255,255,0.65)",
                flexGrow: 1,
              }}
            >
              {channel.description}
            </p>

            {channel.icon === "chat" ? (
              <button
                type="button"
                onClick={openChat}
                style={{ ...CTA_STYLE, textDecoration: "none" }}
              >
                {channel.ctaLabel}
              </button>
            ) : (
              <Link
                href={channel.ctaHref}
                style={{
                  ...CTA_STYLE,
                  textDecoration: "none",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {channel.ctaLabel}
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
