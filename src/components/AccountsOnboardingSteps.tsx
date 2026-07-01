import Link from "@/components/SmartLink";
import { getAccountsPage } from "@/lib/strapi";
import ResponsiveScale from "@/components/ResponsiveScale";

type IconKey = "signup" | "verify" | "fund" | "trade";

const STEP_X = [45, 383.5, 724.5, 1062.5] as const;
const CIRCLE_SIZE = 112;

const FALLBACK_STEPS: {
  iconKey: IconKey;
  title: string;
  description: string;
}[] = [
  {
    iconKey: "signup",
    title: "Sign Up",
    description: "Create your trading account in minutes.",
  },
  {
    iconKey: "verify",
    title: "Verify",
    description: "Complete secure KYC verification.",
  },
  {
    iconKey: "fund",
    title: "Funds",
    description: "Deposit using your preferred payment method.",
  },
  {
    iconKey: "trade",
    title: "Start Trading",
    description: "Access markets instantly on MT5.",
  },
];

function toIconKey(key: string | undefined, index: number): IconKey {
  const valid: IconKey[] = ["signup", "verify", "fund", "trade"];
  if (key && valid.includes(key as IconKey)) return key as IconKey;
  return valid[index] ?? "signup";
}

function StepIcon({ iconKey, idSuffix = "" }: { iconKey: IconKey; idSuffix?: string }) {
  const gradId = `step-grad${idSuffix}`;
  const paths: Record<IconKey, string> = {
    signup:
      "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4 M10 17l5-5-5-5 M15 12H3",
    verify:
      "M12 2 4 6v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V6l-8-4Z M9 12l2 2 4-4",
    fund:
      "M3 7h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z M3 7l2-3h12l2 3 M16 13h2",
    trade:
      "M3 17l6-6 4 4 8-8 M14 7h7v7",
  };
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#${gradId})`}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[iconKey]} />
      <defs>
        <linearGradient id={gradId} x1="24" y1="12" x2="0" y2="12">
          <stop stopColor="#7DB9D6" />
          <stop offset="1" stopColor="#056FB4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default async function AccountsOnboardingSteps() {
  const data = await getAccountsPage();
  const title = data?.onboardingTitle ?? "Open Your Trading Account";
  const ctaHref =
    data?.onboardingCtaHref ?? "https://fx.finsaitrade.com/auth/register";
  const ctaLabel = data?.onboardingCtaLabel ?? "Open Live Account";
  const steps =
    data?.onboardingSteps?.length
      ? data.onboardingSteps.map((step, i) => ({
          iconKey: toIconKey(step.iconKey ?? undefined, i),
          title: step.title,
          description: step.description ?? "",
        }))
      : FALLBACK_STEPS;

  return (
    <section
      className="page-section"
      style={{
        background: "#000000",
        overflow: "hidden",
      }}
    >
    {/* Horizontal layout (≥ 426px): fixed 1440px canvas scaled by ResponsiveScale */}
    <div className="steps-horizontal">
    <ResponsiveScale designWidth={1440}>
    <div style={{ position: "relative", width: "1440px", minHeight: "707px" }}>
        <h2
          className="section-title"
          style={{
            position: "absolute",
            top: "80px",
            left: "143px",
            width: "1154px",
            height: "68px",
            textAlign: "center",
            margin: 0,
          }}
        >
          {title}
        </h2>

        <div
          style={{
            position: "absolute",
            top: "262px",
            left: "107px",
            width: "1225px",
            height: "278px",
          }}
        >
          {/* Connector line — sits behind the circles */}
          <div
            style={{
              position: "absolute",
              top: "56px",
              left: "166px",
              width: "891.5px",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.014) -2.94%, rgba(5,111,180,0.7) 51.23%, rgba(255,255,255,0.014) 102.37%)",
              boxShadow: "0px 0px 24px 0px #FF63333D",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          {steps.map((s, i) => {
            const circleLeft = STEP_X[i];
            const circleCenter = circleLeft + CIRCLE_SIZE / 2;
            const textLeft = circleCenter - 140;

            return (
              <div key={s.iconKey}>
                {/* Circle */}
                <div
                  style={{
                    position: "absolute",
                    left: `${circleLeft}px`,
                    top: 0,
                    width: `${CIRCLE_SIZE}px`,
                    height: `${CIRCLE_SIZE}px`,
                    borderRadius: "50%",
                    background: "#020303",
                    border: "2px solid #056FB499",
                    boxShadow: "0px 0px 24px 16px #056FB43D",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                  }}
                >
                  <StepIcon iconKey={s.iconKey} />

                  {/* Numbered badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "0",
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: "#056FB4",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-sora, Sora)",
                      fontWeight: 600,
                      fontSize: "12px",
                      lineHeight: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px solid #000000",
                      boxSizing: "border-box",
                    }}
                  >
                    {i + 1}
                  </span>
                </div>

                {/* Text */}
                <div
                  style={{
                    position: "absolute",
                    left: `${textLeft}px`,
                    top: "144px",
                    width: "280px",
                    textAlign: "center",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-sora, Sora)",
                      fontWeight: 400,
                      fontSize: "32px",
                      lineHeight: "43.49px",
                      letterSpacing: 0,
                      color: "#FFFFFF",
                      margin: "0 0 12px",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-inter, Inter)",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "23px",
                      letterSpacing: 0,
                      color: "#FFFFFFB2",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          href={ctaHref}
          className="btn-text"
          style={{
            position: "absolute",
            top: "571px",
            left: "587px",
            width: "265.11px",
            height: "56px",
            borderRadius: "28.83px",
            paddingTop: "14px",
            paddingBottom: "14px",
            paddingLeft: "33px",
            paddingRight: "33px",
            gap: "18px",
            background:
              "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            whiteSpace: "nowrap",
            boxSizing: "border-box",
          }}
        >
          {ctaLabel} <span aria-hidden>→</span>
        </Link>
    </div>
    </ResponsiveScale>
    </div>

    {/* Vertical layout (< 426px) */}
    <div className="steps-vertical" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 className="section-title" style={{ textAlign: "center", marginBottom: "32px" }}>
        {title}
      </h2>

      {steps.map((s, idx) => {
        const isLast = idx === steps.length - 1;
        return (
          <div key={s.iconKey} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            {/* Step row: circle left, text right */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", width: "100%", padding: "0 4px" }}>
              {/* Circle with number badge */}
              <div style={{ position: "relative", flexShrink: 0, width: "80px", height: "80px" }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "#020303",
                  border: "2px solid #056FB499",
                  boxShadow: "0px 0px 20px 10px #056FB43D",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <StepIcon iconKey={s.iconKey} idSuffix={`-v-${idx}`} />
                </div>
                <span style={{
                  position: "absolute",
                  top: "-4px",
                  right: "-4px",
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background: "#056FB4",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeight: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid #000000",
                  boxSizing: "border-box",
                }}>
                  {idx + 1}
                </span>
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "1.3",
                  color: "#FFFFFF",
                  margin: "0 0 6px",
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-inter, Inter)",
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "1.6",
                  color: "#FFFFFFB2",
                  margin: 0,
                }}>
                  {s.description}
                </p>
              </div>
            </div>

            {/* Vertical connector between steps */}
            {!isLast && (
              <div style={{
                width: "1px",
                height: "40px",
                marginLeft: "36px",
                alignSelf: "flex-start",
                background: "linear-gradient(180deg, rgba(5,111,180,0.7) 0%, rgba(5,111,180,0.15) 100%)",
              }} />
            )}
          </div>
        );
      })}

      {/* CTA button */}
      <Link
        href={ctaHref}
        className="btn-text"
        style={{
          marginTop: "32px",
          borderRadius: "28.83px",
          padding: "clamp(11px, 1vw, 14px) clamp(18px, 1.8vw, 33px)",
          gap: "8px",
          background: "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          whiteSpace: "nowrap",
        }}
      >
        {ctaLabel} <span aria-hidden>→</span>
      </Link>
    </div>
    </section>
  );
}
