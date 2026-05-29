type IconKey =
  | "runner"
  | "users"
  | "eyeOff"
  | "infinity"
  | "headset"
  | "headphones";

type Reason = { iconKey: IconKey; title: string };

const topRow: Reason[] = [
  { iconKey: "runner", title: "Ultra fast\norder execution" },
  { iconKey: "users", title: "Raw spreads on\nECN & Elite accounts" },
  { iconKey: "eyeOff", title: "No hidden fees,\nno requotes" },
  { iconKey: "infinity", title: "Swap free\naccount" },
];

const bottomRow: Reason[] = [
  { iconKey: "headset", title: "Access MT5 on mobile,\ndesktop & web" },
  { iconKey: "headphones", title: "Priority support\nfor smart elite traders" },
];

function ReasonIcon({ iconKey }: { iconKey: IconKey }) {
  // Stroke gradient ID is keyed per icon so multiple icons on the page
  // don't share / collide on the <defs>.
  const gradId = `wt-${iconKey}`;
  const stroke = `url(#${gradId})`;
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const grad = (
    <defs>
      <linearGradient id={gradId} x1="0" y1="0" x2="24" y2="24">
        <stop stopColor="#7DB9D6" />
        <stop offset="1" stopColor="#2EA8FF" />
      </linearGradient>
    </defs>
  );

  switch (iconKey) {
    case "runner":
      return (
        <svg {...common}>
          {grad}
          <circle cx="14.5" cy="5" r="1.5" />
          <path d="M7 21l3-5 3 2 2-4-3-2 3-4" />
          <path d="M4 14l2-3h3" />
          <path d="M14 17l3 1 2 3" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          {grad}
          <circle cx="9" cy="8" r="3.2" />
          <path d="M2.5 20c.6-3.4 3.3-5.5 6.5-5.5s5.9 2.1 6.5 5.5" />
          <circle cx="17" cy="9" r="2.6" />
          <path d="M14.5 14.6c2.8-.2 5.7 1.1 7 4.4" />
        </svg>
      );
    case "eyeOff":
      return (
        <svg {...common}>
          {grad}
          <path d="M3 3l18 18" />
          <path d="M10.6 6.2A11 11 0 0 1 12 6c5 0 9.3 3.2 11 7-.5 1.2-1.3 2.3-2.3 3.3" />
          <path d="M6.2 7.6C4.6 8.9 3.3 10.6 2.5 12.4c1.7 3.8 6 7 11 7 1.6 0 3.1-.3 4.5-.9" />
          <path d="M9.5 10.7a3.4 3.4 0 0 0 4.8 4.8" />
        </svg>
      );
    case "infinity":
      return (
        <svg {...common}>
          {grad}
          <path d="M6 12c0-2.2 1.6-4 3.7-4 1.6 0 2.7 1.1 3.6 2.4l1.5 2.4c.9 1.3 2 2.4 3.6 2.4 2 0 3.7-1.8 3.7-4s-1.6-4-3.7-4c-1.6 0-2.7 1.1-3.6 2.4l-1.5 2.4c-.9 1.3-2 2.4-3.6 2.4C7.6 16 6 14.2 6 12z" />
        </svg>
      );
    case "headset":
      return (
        <svg {...common}>
          {grad}
          <path d="M4 13a8 8 0 0 1 16 0v3a3 3 0 0 1-3 3h-1v-5h4" />
          <path d="M4 16v-3h4v5H7a3 3 0 0 1-3-3z" />
          <path d="M12 21h-1.5a2 2 0 0 1-2-2" />
        </svg>
      );
    case "headphones":
      return (
        <svg {...common}>
          {grad}
          <path d="M4 14v3a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2v-1" />
          <path d="M4 13a8 8 0 0 1 16 0v1" />
          <path d="M20 14v3a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2v-1" />
        </svg>
      );
  }
}

function IconCircle({ iconKey }: { iconKey: IconKey }) {
  return (
    <div
      style={{
        position: "relative",
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 30% 30%, rgba(70,140,210,0.25) 0%, rgba(5,111,180,0.08) 60%, rgba(0,0,0,0.6) 100%)",
        border: "1px solid rgba(125,185,214,0.18)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <ReasonIcon iconKey={iconKey} />
      {/* Notification dot: small badge in the upper-right corner of the
          icon disc, matching the screenshot.  Sits on a 1px ring of the
          panel background colour so it visually detaches from the disc. */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: "-2px",
          right: "-2px",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          background: "#2EA8FF",
          border: "2px solid #050208",
          fontFamily: "var(--font-sora, Sora)",
          fontSize: "9px",
          fontWeight: 600,
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
        }}
      >
        1
      </span>
    </div>
  );
}

function ReasonCell({ reason }: { reason: Reason }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "14px",
        height: "100%",
        padding: "0 16px",
        textAlign: "center",
      }}
    >
      <IconCircle iconKey={reason.iconKey} />
      <span
        style={{
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "22px",
          color: "rgba(255,255,255,0.88)",
          whiteSpace: "pre-line",
        }}
      >
        {reason.title}
      </span>
    </div>
  );
}

import { getAccountsPage } from "@/lib/strapi";

export default async function WhyTradeFinsai() {
  const data = await getAccountsPage();
  const title = data?.whyTitle ?? "Why trade with Finsai";
  const description =
    data?.whyDescription ??
    "Trade with speed, stability, and total control from your desk or on the move. Finsai Trade delivers professional-grade platforms to match your trading needs";
  return (
    <section
      style={{
        position: "relative",
        width: "1440px",
        maxWidth: "100%",
        height: "772px",
        margin: "0 auto",
        background: "#050208",
        opacity: 1,
      }}
    >
      {/* Heading band: occupies the 0–229px region above the box,
          vertically centered so the box can land at exactly top: 229px. */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "229px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 80px",
        }}
      >
        <h2
          className="section-title"
          style={{ textAlign: "center", marginBottom: "14px" }}
        >
          {title}
        </h2>
        <p
          className="section-desc"
          style={{
            textAlign: "center",
            maxWidth: "720px",
            margin: 0,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {description}
        </p>
      </div>

      {/* Reasons box: 1270 × 374, 1px gradient stroke, dark fill with
          a subtle blue glow bleeding in from the bottom-right corner. */}
      <div
        style={{
          position: "absolute",
          top: "229px",
          left: "85px",
          width: "1270px",
          height: "374px",
          padding: "1px",
          borderRadius: "20px",
          background:
            "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "19px",
            background:
              "linear-gradient(137.88deg, #050208 1.04%, #056FB4 536.19%)",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          {/* Horizontal mid-divider — spec: 1267×1 @ top:187, left:2 from
              box outer ⇒ inner-y 186, inner-x 1 (1px gradient border). */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "186px",
              left: "1px",
              width: "1267px",
              height: "1px",
              background:
                "linear-gradient(90deg, #0F0F10 0%, #387AFF 50%, #0F0F10 100%)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />

          {/* Vertical column dividers (1px × 185, gradient fades top → blue
              → bottom).  Spec coords are box-outer; inner = box − 1. */}
          {[
            { top: 1, left: 316 },
            { top: 1, left: 700 },
            { top: 1, left: 1021 },
            { top: 186, left: 633 },
          ].map((d) => (
            <div
              key={`vdiv-${d.top}-${d.left}`}
              aria-hidden
              style={{
                position: "absolute",
                top: `${d.top}px`,
                left: `${d.left}px`,
                width: "1px",
                height: "185px",
                background:
                  "linear-gradient(180deg, #0F0F10 0%, #387AFF 50%, #0F0F10 100%)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
          ))}

          {/* Top row — 4 cells with column widths derived from the spec
              divider positions: 317 / 384 / 321 / 246 (last absorbs the
              2px the inner content area loses to the gradient border). */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "317px 384px 321px 1fr",
              height: "186px",
            }}
          >
            {topRow.map((r) => (
              <ReasonCell key={r.title} reason={r} />
            ))}
          </div>

          {/* Bottom row — 2 cells split evenly at the spec divider x=634. */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              height: "186px",
            }}
          >
            {bottomRow.map((r) => (
              <ReasonCell key={r.title} reason={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
