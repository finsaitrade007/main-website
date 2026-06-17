"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CARD_BACKGROUND =
  "rgba(5, 2, 8, 1)";
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
        illustration: "/payments/flow/deposit-step-1.jpg",
      },
      {
        title: "Select Wallet",
        description:
          "Select the wallet you want to fund.",
        illustration: "/payments/flow/deposit-step-2.jpg",
      },
      {
        title: "Choose Crypto ",
        description:
          "Choose crypto as your payment method and enter amount.",
        illustration: "/payments/flow/deposit-step-3.jpg",
      },
      {
        title: "Confirm & Track",
        description:
          "Confirm and track your deposit status in Transaction History.",
        illustration: "/payments/flow/deposit-step-4.jpg",
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
        illustration: "/payments/flow/withdraw-step-1.jpg",
      },
      {
        title: "Choose Your Wallet",
        description: "Auto-selected if accessed from the Wallets screen.",
        illustration: "/payments/flow/withdraw-step-2.jpg",
      },
      {
        title: "Confirm Wallet Address",
        description: "Verify your crypto destination address.",
        illustration: "/payments/flow/withdraw-step-3.jpg",
      },
      {
        title: "Enter Amount & Submit",
        description:
          " Double-check details before confirming.",
        illustration: "/payments/flow/withdraw-step-4.jpg",
      },
    ],
  },
];

const MAX_STEPS = Math.max(...cards.map((c) => c.steps.length));
const VH_PER_STEP_DESKTOP = 70;
const VH_PER_STEP_MOBILE = 60;
const ILLUSTRATION_SIZE = 268;
const ILLUSTRATION_TOP = 100;
const ILLUSTRATION_LEFT = 340;

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
        background: "#0B1220",
        border: active ? "1px solid #7DB9D6" : "1px solid #FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        position: "relative",
        zIndex: 1,
        color: "#FFFFFF",
        transition: "border-color 0.4s ease",
      }}
    >
      {children}
    </div>
  );
}

const ICON_STROKE = "#FFFFFF";

function LoginIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
        stroke={ICON_STROKE}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M10 17l5-5-5-5M15 12H3"
        stroke={ICON_STROKE}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 7h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
        stroke={ICON_STROKE}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M3 7l2-3h12l2 3"
        stroke={ICON_STROKE}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 13h2" stroke={ICON_STROKE} strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ShareArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17 17 7"
        stroke={ICON_STROKE}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M9 7h8v8"
        stroke={ICON_STROKE}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HandSelectIcon() {
  return (
    <Image
      src="/payments/flow/icon-hand-withdraw.png"
      alt=""
      width={16}
      height={16}
      aria-hidden
      style={{
        objectFit: "contain",
        filter: "brightness(0) invert(1)",
      }}
    />
  );
}

function DollarCircleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke={ICON_STROKE} strokeWidth="1.7" />
      <path
        d="M12 7.5v9M14.5 10.5C14.5 9.2 13.3 8.2 12 8.2S9.5 9.2 9.5 10.5 10.7 12.8 12 12.8s2.5 1.3 2.5 2.7S13.3 18.2 12 18.2"
        stroke={ICON_STROKE}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const DEPOSIT_STEP_ICONS = [LoginIcon, WalletIcon, ShareArrowIcon, ShareArrowIcon];
const WITHDRAW_STEP_ICONS = [
  HandSelectIcon,
  WalletIcon,
  WalletIcon,
  DollarCircleIcon,
];

function StepRail({
  activeIndex,
  icons,
  stepTitles,
  onSelect,
}: {
  activeIndex: number;
  icons: React.ComponentType[];
  stepTitles: string[];
  onSelect: (index: number) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        flexShrink: 0,
      }}
    >
      {icons.map((Icon, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect(i)}
          aria-label={`Go to step ${i + 1}: ${stepTitles[i]}`}
          aria-current={i === activeIndex ? "step" : undefined}
          style={{
            padding: 0,
            margin: 0,
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <StepIcon active={i === activeIndex}>
            <Icon />
          </StepIcon>
        </button>
      ))}
    </div>
  );
}

function FlowCardView({
  card,
  activeIndex,
  onSelectStep,
}: {
  card: FlowCard;
  activeIndex: number;
  onSelectStep: (index: number) => void;
}) {
  const safeIndex = Math.min(activeIndex, card.steps.length - 1);
  const step = card.steps[safeIndex];
  const stepIcons =
    card.id === "withdraw" ? WITHDRAW_STEP_ICONS : DEPOSIT_STEP_ICONS;
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
          width={ILLUSTRATION_SIZE}
          height={ILLUSTRATION_SIZE}
          sizes={`${ILLUSTRATION_SIZE}px`}
          style={{
            position: "absolute",
            top: `${ILLUSTRATION_TOP}px`,
            left: `${ILLUSTRATION_LEFT}px`,
            width: `${ILLUSTRATION_SIZE}px`,
            height: `${ILLUSTRATION_SIZE}px`,
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
          <StepRail
            activeIndex={safeIndex}
            icons={stepIcons}
            stepTitles={card.steps.map((s) => s.title)}
            onSelect={onSelectStep}
          />

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

  const handleSelectStep = useCallback((index: number) => {
    const el = outerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    const maxDistance = Math.max(1, rect.height - vh);
    const targetProgress = Math.min(
      1,
      Math.max(0, (index + 0.5) / MAX_STEPS),
    );
    const elementAbsoluteTop = window.scrollY + rect.top;
    const targetScrollY = elementAbsoluteTop + targetProgress * maxDistance;
    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

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
              maxWidth: "1013px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 600,
                fontSize: "clamp(22px, 2.5vw, 36px)",
                lineHeight: "100%",
                letterSpacing: "-0.01em",
                color: "#FFFFFF",
                margin: 0,
                maxWidth: "913px"
              }}
            >
              One Platform. One Seamless Payment Experience
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "100%",
                color: "#FFFFFF",
                margin: 0,
                maxWidth: "840px",
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
                onSelectStep={handleSelectStep}
              />
            ))}
          </div>

          <p
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "24px",
              color: "#FFFFFFBF",
              margin: 0,
              maxWidth: "1336px",
              textAlign: "left",
              letterSpacing: "0",
            }}
          >
            <span style={{ fontWeight: 400, color: "#FFFFFF" }}>
              Please note:
            </span>{" "}
            Some payment options may be subject to regional availability. All withdrawals are processed in the base currency of your Wallet. For example, if your Wallet is denominated in USD, your withdrawal will be processed in USD. By using this service, users acknowledge the inherent risks associated with online payment systems, including potential delays, disruptions, or failures beyond Finsai Trade's control.
          </p>
        </div>
      </section>
    </div>
  );
}
