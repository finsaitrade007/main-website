import Link from "next/link";
import { getAccountsPage } from "@/lib/strapi";

type IconKey = "signup" | "verify" | "fund" | "trade";

const steps: { iconKey: IconKey; title: string; description: string }[] = [
  {
    iconKey: "signup",
    title: "Sign Up",
    description: "Create your Finsai account in under 2 minutes.",
  },
  {
    iconKey: "verify",
    title: "Verify",
    description: "Submit a valid ID to securely activate your account.",
  },
  {
    iconKey: "fund",
    title: "Funds",
    description:
      "Deposit instantly via cards, wallets, crypto, or bank transfer.",
  },
  {
    iconKey: "trade",
    title: "Trade",
    description: "Access 5,000+ instruments and start trading immediately.",
  },
];

function StepIcon({ iconKey }: { iconKey: IconKey }) {
  const paths: Record<IconKey, string> = {
    signup:
      "M16 14a4 4 0 1 0-8 0M12 2v4M4.5 7.5l3 3M19.5 7.5l-3 3M20 20l-3-3M4 20l3-3M12 18a6 6 0 0 0 6-6",
    verify:
      "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
    fund:
      "M3 7h18v10H3zM3 11h18M7 15h2",
    trade:
      "M3 17l6-6 4 4 8-8M14 7h7v7",
  };
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="url(#step-grad)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[iconKey]} />
      <defs>
        <linearGradient id="step-grad" x1="24" y1="12" x2="0" y2="12">
          <stop stopColor="#7DB9D6" />
          <stop offset="1" stopColor="#056FB4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default async function AccountsOnboardingSteps() {
  const data = await getAccountsPage();
  const title = data?.onboardingTitle ?? "Fast application. Fast process. So easy.";
  const description =
    data?.onboardingDescription ??
    "From signup to first trade in minutes — KYC is fast, deposits are instant, and our team is on hand 24/7.";
  return (
    <section style={{ background: "#050208", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>
        <h2
          className="section-title"
          style={{ textAlign: "center", marginBottom: "12px" }}
        >
          {title}
        </h2>
        <p
          className="section-desc"
          style={{
            textAlign: "center",
            maxWidth: "560px",
            margin: "0 auto 64px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {description}
        </p>

        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            marginBottom: "56px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "44px",
              left: "12.5%",
              right: "12.5%",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(5,111,180,0.2) 0%, rgba(5,111,180,0.6) 50%, rgba(5,111,180,0.2) 100%)",
              zIndex: 0,
            }}
          />

          {steps.map((s, i) => (
            <div
              key={s.iconKey}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: "88px",
                  height: "88px",
                  borderRadius: "50%",
                  background: "#06090F",
                  border: "1px solid rgba(5,111,180,0.45)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  position: "relative",
                }}
              >
                <StepIcon iconKey={s.iconKey} />
                <span
                  style={{
                    position: "absolute",
                    top: "-6px",
                    right: "-6px",
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    background: "#056FB4",
                    color: "#FFFFFF",
                    fontSize: "12px",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-sora, Sora)",
                  }}
                >
                  {i + 1}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 600,
                  fontSize: "18px",
                  color: "#FFFFFF",
                  marginBottom: "10px",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter, Inter)",
                  fontSize: "13px",
                  lineHeight: "21px",
                  color: "rgba(255,255,255,0.5)",
                  maxWidth: "200px",
                }}
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            href="https://fx.finsaitrade.com/auth/register"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "13px 32px",
              borderRadius: "60px",
              background:
                "linear-gradient(90deg, rgba(5,111,180,0.85) 0%, #056FB4 100%)",
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 500,
              fontSize: "14px",
              color: "#FFFFFF",
              textDecoration: "none",
            }}
          >
            Open Account <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
