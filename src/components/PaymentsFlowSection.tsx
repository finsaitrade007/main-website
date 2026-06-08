import Link from "next/link";
import Image from "next/image";

const CARD_BACKGROUND =
  "linear-gradient(137.88deg, #050208 1.04%, #056FB4 536.19%)";
const BTN_GRADIENT =
  "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)";

type FlowCard = {
  id: string;
  title: string;
  description: string;
  activeStep: { title: string; description: string };
  cta: { label: string; href: string };
};

const cards: FlowCard[] = [
  {
    id: "deposit",
    title: "Fund Your Account in Minutes",
    description:
      "Depositing into your Finsai Trade account is simple, secure, and near-instant. Follow these five steps and you'll be ready to trade instantly.",
    activeStep: {
      title: "Log in → Deposit",
      description: "Log in and open the Deposit section",
    },
    cta: { label: "Deposit now", href: "https://fx.finsaitrade.com/auth/login" },
  },
  {
    id: "withdraw",
    title: "Fast & Secure Withdrawals",
    description:
      "Withdraw funds within 1 working day** directly to your verified crypto wallet with a smooth and reliable payout process.",
    activeStep: {
      title: "Select Withdraw",
      description: "From the Wallet panel or Withdrawal tab in navigation.",
    },
    cta: { label: "Withdraw now", href: "https://fx.finsaitrade.com/auth/login" },
  },
];

function StepIcon({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <div
      style={{
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        background: active ? BTN_GRADIENT : "#0B1220",
        border: active ? "1px solid #7DB9D6" : "1px solid rgba(125,185,214,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        boxShadow: active ? "0 0 12px rgba(86,164,224,0.45)" : "none",
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

function StepRail() {
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
      <StepIcon active>
        <LoginIcon />
      </StepIcon>
      <StepIcon>
        <DollarIcon />
      </StepIcon>
      <StepIcon>
        <ArrowIcon />
      </StepIcon>
      <StepIcon>
        <ArrowIcon />
      </StepIcon>
    </div>
  );
}

function FlowCardView({ card }: { card: FlowCard }) {
  return (
    <div
      style={{
        width: "628px",
        height: "350px",
        boxSizing: "border-box",
        borderRadius: "30px",
        border: "1px solid #056FB4",
        background: CARD_BACKGROUND,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Image
        src="/payments/wallet-illustration-2.png"
        alt="Crypto wallet"
        width={291}
        height={291}
        style={{
          position: "absolute",
          top: "123px",
          left: "305px",
          width: "291px",
          height: "291px",
          objectFit: "contain",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

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
              fontWeight: 700,
              fontSize: "26px",
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
              lineHeight: "21px",
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
          <StepRail />

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
            <h4
              style={{
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "120%",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              {card.activeStep.title}
            </h4>
            <p
              style={{
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "22px",
                color: "rgba(255,255,255,0.7)",
                margin: 0,
                maxWidth: "240px",
              }}
            >
              {card.activeStep.description}
            </p>

            <Link
              href={card.cta.href}
              className="btn-text"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "flex-start",
                marginTop: "12px",
                padding: "10px 24px",
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
  return (
    <section
      className="page-section"
      style={{
        background: "#050208",
        width: "100%",
        maxWidth: "1440px",
        minHeight: "718px",
        paddingBottom: "60px",
        position: "relative",
        overflow: "hidden",
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
              fontSize: "36px",
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
            justifyContent: "center",
            gap: "24px",
            width: "100%",
          }}
        >
          {cards.map((card) => (
            <FlowCardView key={card.id} card={card} />
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
  );
}
