"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CARD_BACKGROUND =
  "linear-gradient(137.88deg, #050208 1.04%, #056FB4 536.19%)";
const BTN_GRADIENT =
  "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)";

type Step = {
  title: string;
  description: string;
  illustration: string;
};

type FlowCard = {
  id: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  steps: Step[];
};

const cards: FlowCard[] = [
  {
    id: "deposit",
    title: "Fund Your Account in Minutes",
    description:
      "Depositing into your Finsai Trade account is simple, secure, and near-instant. Follow these five steps and you'll be ready to trade instantly.",
    cta: { label: "Deposit now", href: "https://fx.finsaitrade.com/auth/login" },
    steps: [
      {
        title: "Log in \u2192 Deposit",
        description: "Log in and open the Deposit section.",
        illustration: "/payments/flow/deposit-step-1.png",
      },
      {
        title: "Select Wallet",
        description:
          "Select the wallet you want to fund.",
        illustration: "/payments/flow/deposit-step-2.png",
      },
      {
        title: "Choose Crypto ",
        description:
          "Choose crypto as your payment method and enter amount.",
        illustration: "/payments/flow/deposit-step-3.png",
      },
      {
        title: "Confirm & Track",
        description:
          "Confirm and track your deposit status in Transaction History.",
        illustration: "/payments/flow/deposit-step-4.png",
      },
    ],
  },
  {
    id: "withdraw",
    title: "Fast & Secure Withdrawals",
    description:
      "Withdraw funds within 1 working day** directly to your verified crypto wallet with a smooth and reliable payout process.",
    cta: { label: "Withdraw now", href: "https://fx.finsaitrade.com/auth/login" },
    steps: [
      {
        title: "Select Withdraw",
        description:
          "From the Wallet panel or Withdrawal tab in navigation.",
        illustration: "/payments/flow/withdraw-step-1.png",
      },
      {
        title: "Choose Your Wallet",
        description: "Auto-selected if accessed from the Wallets screen.",
        illustration: "/payments/flow/withdraw-step-2.png",
      },
      {
        title: "Confirm Wallet Address",
        description: "Verify your crypto destination address.",
        illustration: "/payments/flow/withdraw-step-3.png",
      },
      {
        title: "Enter Amount & Submit",
        description:
          " Double-check details before confirming.",
        illustration: "/payments/flow/withdraw-step-4.png",
      },
    ],
  },
];

const MAX_STEPS = Math.max(...cards.map((c) => c.steps.length));
const VH_PER_STEP_DESKTOP = 70;
const VH_PER_STEP_MOBILE = 60;

function StepIcon({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        background: active ? BTN_GRADIENT : "#0B1220",
        border: active
          ? "1px solid #7DB9D6"
          : "1px solid rgba(125,185,214,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        boxShadow: active ? "0 0 12px rgba(86,164,224,0.45)" : "none",
        transition:
          "background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
      }}
    >
      {children}
    </div>
  );
}

function LoginIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" stroke="#7DB9D6" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M10 17l5-5-5-5M15 12H3" stroke="#7DB9D6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2v20M16.5 7.5C16.5 5.6 14.5 4 12 4S7.5 5.6 7.5 7.5 9.5 11 12 11s4.5 1.4 4.5 3.5S14.5 18 12 18s-4.5-1.4-4.5-3.5" stroke="#7DB9D6" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="#7DB9D6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" stroke="#7DB9D6" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const STEP_ICONS = [LoginIcon, DollarIcon, ArrowIcon, CheckIcon];

function StepRail({ activeIndex }: { activeIndex: number }) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        flexShrink: 0,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "16px",
          bottom: "16px",
          left: "50%",
          width: "1px",
          background: "rgba(125,185,214,0.25)",
          transform: "translateX(-50%)",
        }}
      />
      {STEP_ICONS.map((Icon, i) => (
        <StepIcon key={i} active={i === activeIndex}>
          <Icon />
        </StepIcon>
      ))}
    </div>
  );
}

function FlowCardView({
  card,
  activeIndex,
}: {
  card: FlowCard;
  activeIndex: number;
}) {
  const safeIndex = Math.min(activeIndex, card.steps.length - 1);
  const step = card.steps[safeIndex];
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "628px",
        minHeight: "350px",
        boxSizing: "border-box",
        borderRadius: "30px",
        border: "1px solid #056FB4",
        background: CARD_BACKGROUND,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Cross-fade illustrations: render every step but only the active one
          is visible. This way the change is animated, not a hard swap. */}
      {card.steps.map((s, i) => (
        <Image
          key={s.illustration}
          src={s.illustration}
          alt={s.title}
          width={220}
          height={220}
          sizes="291px"
          style={{
            position: "absolute",
            top: "123px",
            left: "392px",
            width: "220px",
            height: "220px",
            objectFit: "contain",
            pointerEvents: "none",
            opacity: i === safeIndex ? 1 : 0,
            transition: "opacity 0.5s ease",
            zIndex: 1,
          }}
          priority={i === 0}
        />
      ))}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "28px 32px",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h3
            style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 400,
              fontSize: "clamp(20px, 1.8vw, 30px)",
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              color: "#FFFFFF",
              margin: "0 0 10px",
            }}
          >
            {card.title}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "100%",
              color: "rgba(255,255,255,0.7)",
              margin: "0 auto",
              maxWidth: "520px",
            }}
          >
            {card.description}
          </p>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: "20px",
            minHeight: 0,
          }}
        >
          <StepRail activeIndex={safeIndex} />

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              minWidth: 0,
              maxWidth: "260px",
            }}
          >
            {/* key on the wrapper triggers a fade-in animation on step change */}
            <div
              key={safeIndex}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                animation: "paymentsFlowStepIn 0.45s ease both",
              }}
            >
              <h4
                style={{
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 600,
                  fontSize: "clamp(15px, 1.4vw, 24px)",
                  lineHeight: "120%",
                  color: "#FFFFFF",
                  margin: 0,
                }}
              >
                {step.title}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-inter, Inter)",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "28px",
                  color: "#FFFFFF99",
                  margin: 0,
                  maxWidth: "240px",
                }}
              >
                {step.description}
              </p>
            </div>

            <Link
              href={card.cta.href}
              className="btn-text"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "flex-start",
                marginTop: "12px",
                padding: "clamp(9px, 0.8vw, 10px) clamp(16px, 1.7vw, 24px)",
                borderRadius: "60px",
                background: BTN_GRADIENT,
                textDecoration: "none",
                color: "#FFFFFF",
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "100%",
                whiteSpace: "nowrap",
                boxSizing: "border-box",
              }}
            >
              {card.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentsFlowSection() {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 769);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const vhPerStep = isMobile ? VH_PER_STEP_MOBILE : VH_PER_STEP_DESKTOP;

  useEffect(() => {
    let frame: number | null = null;

    function update() {
      frame = null;
      const el = outerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const maxDistance = Math.max(1, rect.height - vh);
      const distance = Math.max(0, -rect.top);
      const progress = Math.min(1, distance / maxDistance);
      const idx = Math.min(
        MAX_STEPS - 1,
        Math.max(0, Math.floor(progress * MAX_STEPS - 1e-6)),
      );
      setActiveIndex((prev) => (prev === idx ? prev : idx));
    }

    function onScroll() {
      if (frame != null) return;
      frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (frame != null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={outerRef}
      style={{
        position: "relative",
        height: `calc(${MAX_STEPS * vhPerStep}vh + 100vh)`,
      }}
    >
      <style>{`
        @keyframes paymentsFlowStepIn {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <section
        className="page-section"
        style={{
          position: "sticky",
          top: 0,
          background: "#050208",
          width: "100%",
          maxWidth: "1440px",
          minHeight: "100vh",
          paddingBottom: "60px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1320px",
            margin: "0 auto",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              maxWidth: "780px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 700,
                fontSize: "clamp(22px, 2.5vw, 36px)",
                lineHeight: "118%",
                letterSpacing: "-0.01em",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              One Platform. One Seamless Payment Experience
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "26px",
                color: "rgba(255,255,255,0.7)",
                margin: 0,
                maxWidth: "640px",
              }}
            >
              Finsai Trade supports secure crypto payments, giving you fast,
              borderless access to your trading funds.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "24px",
              width: "100%",
            }}
          >
            {cards.map((card) => (
              <FlowCardView
                key={card.id}
                card={card}
                activeIndex={activeIndex}
              />
            ))}
          </div>

          <p
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "22px",
              color: "rgba(255,255,255,0.55)",
              margin: 0,
              maxWidth: "1180px",
              textAlign: "left",
            }}
          >
            <span style={{ fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
              Please note:
            </span>{" "}
            Some payment options may be subject to regional availability. All
            withdrawals are processed in the base currency of your Wallet. For
            example, if your Wallet is denominated in USD, your withdrawal will be
            processed in USD. By using this service, users acknowledge the
            inherent risks associated with online payment systems, including
            potential delays, disruptions, or failures beyond Finsai Trade&apos;s
            control.
          </p>
        </div>
      </section>
    </div>
  );
}
