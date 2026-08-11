import Image from "next/image";
import SmartLink from "@/components/SmartLink";

/* ─────────────────────────────────────────────────────────────────────
 * Figma icon set for the Introducing Broker Program cards.
 * Inlined rather than loaded from /public so the gradients travel with the
 * markup; gradient ids are namespaced per component to avoid collisions.
 * ───────────────────────────────────────────────────────────────────── */

function MultiTierIcon() {
  return (
    <svg aria-hidden focusable="false" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7108 5.46C15.1302 4.19647 13.135 3.5028 11.0733 3.5C6.63664 3.5 2.8508 6.69375 1.8333 11.2875C1.80713 11.38 1.80088 11.4766 1.81492 11.5715C1.82896 11.6663 1.863 11.7575 1.91499 11.8394C1.96698 11.9214 2.03584 11.9924 2.1174 12.0483C2.19896 12.1041 2.29154 12.1436 2.38953 12.1643C2.48752 12.185 2.5889 12.1865 2.68754 12.1688C2.78617 12.1511 2.88001 12.1144 2.9634 12.0611C3.04678 12.0078 3.11797 11.9389 3.17267 11.8585C3.22737 11.7782 3.26444 11.6881 3.28164 11.5938C4.15247 7.6475 7.3333 4.9 11.0733 4.9C12.5316 4.90488 13.9539 5.33203 15.1525 6.125L16.7108 5.46ZM17.1141 6.58875L11.7241 8.89C11.3864 8.76243 11.0165 8.73352 10.6615 8.80694C10.3065 8.88035 9.98231 9.05278 9.73012 9.30234C9.47794 9.55191 9.30911 9.86735 9.24505 10.2087C9.18099 10.55 9.2246 10.9017 9.37033 11.2193C9.51606 11.537 9.75735 11.8061 10.0636 11.9926C10.3698 12.1791 10.7272 12.2745 11.0904 12.2668C11.4535 12.2591 11.8061 12.1486 12.1034 11.9493C12.4006 11.7501 12.6292 11.471 12.76 11.1475C12.8151 11.0186 12.8521 10.8832 12.87 10.745C12.885 10.7487 12.9008 10.7487 12.9158 10.745L17.4991 7.245C18.04 6.7725 17.7466 6.3175 17.1141 6.58875Z" fill="url(#multitiericon-paint0_linear_402_153)"/>
<path d="M18.37 9.47623C18.7952 9.47623 19.14 9.14716 19.14 8.74123C19.14 8.3353 18.7952 8.00623 18.37 8.00623C17.9447 8.00623 17.6 8.3353 17.6 8.74123C17.6 9.14716 17.9447 9.47623 18.37 9.47623Z" fill="#669DF6"/>
<path d="M19.3967 12.145C19.822 12.145 20.1667 11.816 20.1667 11.41C20.1667 11.0041 19.822 10.675 19.3967 10.675C18.9714 10.675 18.6267 11.0041 18.6267 11.41C18.6267 11.816 18.9714 12.145 19.3967 12.145Z" fill="#AECBFA"/>
<defs>
<linearGradient id="multitiericon-paint0_linear_402_153" x1="23.5574" y1="6.72063" x2="1.79635" y2="6.97571" gradientUnits="userSpaceOnUse">
<stop stopColor="#7DB9D6"/>
<stop offset="1" stopColor="#056FB4"/>
</linearGradient>
</defs>
</svg>
  );
}

function LiveDashboardIcon() {
  return (
    <svg aria-hidden focusable="false" width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.17591 1.74303C2.76063 2.76739 2.53124 3.88668 2.53124 5.06528C2.53124 6.24389 2.76063 7.36317 3.17591 8.38754C3.43695 9.03617 3.1245 9.77181 2.47587 10.0368C1.82724 10.3018 1.0916 9.98538 0.826608 9.33675C0.292675 8.01576 0 6.57216 0 5.06528C0 3.55841 0.292675 2.11481 0.826608 0.793818C1.0916 0.145188 1.82724 -0.167262 2.47587 0.0937719C3.1245 0.354806 3.43695 1.0944 3.17591 1.74303ZM21.9545 0.793818C22.4885 2.11481 22.7812 3.55841 22.7812 5.06528C22.7812 6.57216 22.4885 8.01576 21.9545 9.33675C21.6935 9.98538 20.9539 10.2978 20.3053 10.0368C19.6567 9.77576 19.3442 9.03617 19.6052 8.38754C20.0205 7.36317 20.2499 6.24389 20.2499 5.06528C20.2499 3.88668 20.0205 2.76739 19.6052 1.74303C19.3442 1.0944 19.6567 0.358761 20.3053 0.0937719C20.9539 -0.171217 21.6896 0.145188 21.9545 0.793818ZM13.9218 5.06528C13.9218 6.00263 13.4116 6.82133 12.6562 7.25639V18.9871C12.6562 19.6871 12.0906 20.2527 11.3906 20.2527C10.6905 20.2527 10.125 19.6871 10.125 18.9871V7.25639C9.36954 6.81738 8.85934 6.00263 8.85934 5.06528C8.85934 3.66915 9.99444 2.53404 11.3906 2.53404C12.7867 2.53404 13.9218 3.66915 13.9218 5.06528ZM6.74733 3.04029C6.47839 3.65728 6.3281 4.34151 6.3281 5.06528C6.3281 5.78906 6.47839 6.47329 6.74733 7.09027C7.02814 7.73099 6.73547 8.4785 6.09475 8.75536C5.45403 9.03221 4.70652 8.74349 4.42967 8.10277C4.0223 7.16938 3.79686 6.14106 3.79686 5.06528C3.79686 3.98951 4.0223 2.96119 4.42967 2.0278C4.71048 1.38708 5.45403 1.0944 6.09475 1.37521C6.73547 1.65602 7.02814 2.39957 6.74733 3.04029ZM18.3515 2.0278C18.7589 2.96119 18.9843 3.98951 18.9843 5.06528C18.9843 6.14106 18.7589 7.16938 18.3515 8.10277C18.0707 8.74349 17.3271 9.03617 16.6864 8.75536C16.0457 8.47455 15.753 7.73099 16.0338 7.09027C16.3028 6.47329 16.4531 5.78906 16.4531 5.06528C16.4531 4.34151 16.3028 3.65728 16.0338 3.04029C15.753 2.39957 16.0457 1.65207 16.6864 1.37521C17.3271 1.09836 18.0746 1.38708 18.3515 2.0278Z" fill="url(#livedashboardicon-paint0_linear_1_635)"/>
<defs>
<linearGradient id="livedashboardicon-paint0_linear_1_635" x1="31.0174" y1="7.43977" x2="-0.0187073" y2="7.66437" gradientUnits="userSpaceOnUse">
<stop stopColor="#7DB9D6"/>
<stop offset="1" stopColor="#056FB4"/>
</linearGradient>
</defs>
</svg>
  );
}

function PromoIcon() {
  return (
    <svg aria-hidden focusable="false" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12.18 2.58999L9.77254 1.14624L7.36504 2.58999L4.56879 2.83749L3.46879 5.41999L1.35254 7.26374L1.98129 9.99999L1.35254 12.7362L3.46879 14.58L4.56879 17.1625L7.36504 17.41L9.77254 18.8537L12.18 17.41L14.9763 17.1625L16.0763 14.58L18.1938 12.7362L17.5625 9.99999L18.1925 7.26374L16.075 5.41999L14.975 2.83749L12.18 2.58999ZM6.87504 8.12499C6.87504 7.95923 6.94089 7.80026 7.0581 7.68305C7.17531 7.56584 7.33428 7.49999 7.50004 7.49999C7.6658 7.49999 7.82477 7.56584 7.94198 7.68305C8.05919 7.80026 8.12504 7.95923 8.12504 8.12499C8.12504 8.29075 8.05919 8.44972 7.94198 8.56693C7.82477 8.68414 7.6658 8.74999 7.50004 8.74999C7.33428 8.74999 7.17531 8.68414 7.0581 8.56693C6.94089 8.44972 6.87504 8.29075 6.87504 8.12499ZM7.50004 6.24999C7.00276 6.24999 6.52584 6.44753 6.17421 6.79916C5.82258 7.1508 5.62504 7.62771 5.62504 8.12499C5.62504 8.62227 5.82258 9.09918 6.17421 9.45082C6.52584 9.80245 7.00276 9.99999 7.50004 9.99999C7.99732 9.99999 8.47423 9.80245 8.82586 9.45082C9.1775 9.09918 9.37504 8.62227 9.37504 8.12499C9.37504 7.62771 9.1775 7.1508 8.82586 6.79916C8.47423 6.44753 7.99732 6.24999 7.50004 6.24999ZM7.31754 13.5675L13.5675 7.31749L12.6825 6.43249L6.43254 12.6825L7.31754 13.5675ZM11.875 12.5C11.875 12.3342 11.9409 12.1753 12.0581 12.058C12.1753 11.9408 12.3343 11.875 12.5 11.875C12.6658 11.875 12.8248 11.9408 12.942 12.058C13.0592 12.1753 13.125 12.3342 13.125 12.5C13.125 12.6658 13.0592 12.8247 12.942 12.9419C12.8248 13.0591 12.6658 13.125 12.5 13.125C12.3343 13.125 12.1753 13.0591 12.0581 12.9419C11.9409 12.8247 11.875 12.6658 11.875 12.5ZM12.5 10.625C12.0028 10.625 11.5258 10.8225 11.1742 11.1742C10.8226 11.5258 10.625 12.0027 10.625 12.5C10.625 12.9973 10.8226 13.4742 11.1742 13.8258C11.5258 14.1774 12.0028 14.375 12.5 14.375C12.9973 14.375 13.4742 14.1774 13.8259 13.8258C14.1775 13.4742 14.375 12.9973 14.375 12.5C14.375 12.0027 14.1775 11.5258 13.8259 11.1742C13.4742 10.8225 12.9973 10.625 12.5 10.625Z" fill="#177AB9"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12.18 2.58999L9.77254 1.14624L7.36504 2.58999L4.56879 2.83749L3.46879 5.41999L1.35254 7.26374L1.98129 9.99999L1.35254 12.7362L3.46879 14.58L4.56879 17.1625L7.36504 17.41L9.77254 18.8537L12.18 17.41L14.9763 17.1625L16.0763 14.58L18.1938 12.7362L17.5625 9.99999L18.1925 7.26374L16.075 5.41999L14.975 2.83749L12.18 2.58999ZM6.87504 8.12499C6.87504 7.95923 6.94089 7.80026 7.0581 7.68305C7.17531 7.56584 7.33428 7.49999 7.50004 7.49999C7.6658 7.49999 7.82477 7.56584 7.94198 7.68305C8.05919 7.80026 8.12504 7.95923 8.12504 8.12499C8.12504 8.29075 8.05919 8.44972 7.94198 8.56693C7.82477 8.68414 7.6658 8.74999 7.50004 8.74999C7.33428 8.74999 7.17531 8.68414 7.0581 8.56693C6.94089 8.44972 6.87504 8.29075 6.87504 8.12499ZM7.50004 6.24999C7.00276 6.24999 6.52584 6.44753 6.17421 6.79916C5.82258 7.1508 5.62504 7.62771 5.62504 8.12499C5.62504 8.62227 5.82258 9.09918 6.17421 9.45082C6.52584 9.80245 7.00276 9.99999 7.50004 9.99999C7.99732 9.99999 8.47423 9.80245 8.82586 9.45082C9.1775 9.09918 9.37504 8.62227 9.37504 8.12499C9.37504 7.62771 9.1775 7.1508 8.82586 6.79916C8.47423 6.44753 7.99732 6.24999 7.50004 6.24999ZM7.31754 13.5675L13.5675 7.31749L12.6825 6.43249L6.43254 12.6825L7.31754 13.5675ZM11.875 12.5C11.875 12.3342 11.9409 12.1753 12.0581 12.058C12.1753 11.9408 12.3343 11.875 12.5 11.875C12.6658 11.875 12.8248 11.9408 12.942 12.058C13.0592 12.1753 13.125 12.3342 13.125 12.5C13.125 12.6658 13.0592 12.8247 12.942 12.9419C12.8248 13.0591 12.6658 13.125 12.5 13.125C12.3343 13.125 12.1753 13.0591 12.0581 12.9419C11.9409 12.8247 11.875 12.6658 11.875 12.5ZM12.5 10.625C12.0028 10.625 11.5258 10.8225 11.1742 11.1742C10.8226 11.5258 10.625 12.0027 10.625 12.5C10.625 12.9973 10.8226 13.4742 11.1742 13.8258C11.5258 14.1774 12.0028 14.375 12.5 14.375C12.9973 14.375 13.4742 14.1774 13.8259 13.8258C14.1775 13.4742 14.375 12.9973 14.375 12.5C14.375 12.0027 14.1775 11.5258 13.8259 11.1742C13.4742 10.8225 12.9973 10.625 12.5 10.625Z" fill="url(#promoicon-paint0_linear_402_144)"/>
<defs>
<linearGradient id="promoicon-paint0_linear_402_144" x1="24.2826" y1="7.65104" x2="1.33837" y2="7.79143" gradientUnits="userSpaceOnUse">
<stop stopColor="#7DB9D6"/>
<stop offset="1" stopColor="#056FB4"/>
</linearGradient>
</defs>
</svg>
  );
}

function SupportIcon() {
  return (
    <svg aria-hidden focusable="false" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.625 4.58338L15 8.16672C15 8.16672 13.9167 8.16672 12.8334 7.08338C11.75 6.00005 11.75 4.91672 11.75 4.91672L15.375 1.29172C13.3334 0.791718 10.875 1.45838 9.37505 2.95838C7.12505 5.20838 9.12505 8.08338 8.54172 8.66672C5.37505 11.9584 2.12505 14.4584 2.04172 14.5834C1.08338 15.5417 1.04172 17.0834 1.95838 18.0001C2.87505 18.9167 4.41672 18.8751 5.37505 17.9167C5.50005 17.7917 8.16672 14.4167 11.2917 11.2917C11.875 10.7084 14.625 12.8334 16.9584 10.5417C18.4167 9.04172 19.125 6.62505 18.625 4.58338ZM3.91672 17.1251C3.33338 17.1251 2.87505 16.6667 2.87505 16.0834C2.87505 15.4584 3.33338 15.0001 3.91672 15.0001C4.50005 15.0001 4.95838 15.4584 4.95838 16.0417C4.95838 16.6251 4.50005 17.1251 3.91672 17.1251Z" fill="url(#supporticon-paint0_linear_402_158)"/>
<defs>
<linearGradient id="supporticon-paint0_linear_402_158" x1="25.1073" y1="7.56889" x2="1.28151" y2="7.72177" gradientUnits="userSpaceOnUse">
<stop stopColor="#7DB9D6"/>
<stop offset="1" stopColor="#056FB4"/>
</linearGradient>
</defs>
</svg>
  );
}

const CARD_BG =
  "linear-gradient(157.26deg, #050208 -0.93%, #056FB4 444.35%) padding-box, linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%) border-box";

const featureCards = [
  {
    title: "Multi-tier Commissions",
    description: "Earn ongoing commissions as your referred traders stay active.",
    icon: <MultiTierIcon />,
  },
  {
    title: "Live Dashboard",
    description: "Track referrals, commissions, and performance in real time.",
    icon: <LiveDashboardIcon />,
  },
  {
    title: "Promo code & Tools",
    description: "Use promo codes and partner tools to grow your network faster.",
    icon: <PromoIcon />,
  },
  {
    title: "Strategy Support",
    description: "Get guidance and resources to refine your partner growth strategy.",
    icon: <SupportIcon />,
  },
];

export default function RewardsIBSection() {
  return (
    <section
      id="rewards-ib"
      className="rewards-ib"
      style={{
        position: "relative",
        background: "#050208",
        width: "100%",
        maxWidth: 1440,
        height: 630,
        // Extra top offset so the section heading clears the hero on tall
        // viewports instead of appearing alongside it.
        margin: "72px auto 0",
        boxSizing: "border-box",
        overflow: "hidden",
        opacity: 1,
      }}
    >
      <div
        className="rewards-ib-copy"
        style={{
          position: "absolute",
          top: 48,
          left: 98,
          width: 657,
          display: "flex",
          flexDirection: "column",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            margin: "0 0 14px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 700,
            fontSize: "clamp(24px, 2.6vw, 36px)",
            color: "#FFFFFF",
          }}
        >
          The Introducing Broker Program
        </h2>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.65,
            color: "#94A3B8",
            maxWidth: 540,
          }}
        >
          Turn your audience into income. Join the Finsai IB Program and earn ongoing commissions
          every time a trader you refer starts trading. Our ecosystem provides tools to expand your
          reach and increase earnings.
        </p>

        {/* CTA sits in normal flow directly under the paragraph. It used to be
            absolutely positioned at top:247 while the copy block ended around
            y=210, leaving a ~40-70px gap that grew with the paragraph length
            and visually detached the button from its message. A fixed
            margin-top keeps the gap constant regardless of copy length. */}
        <SmartLink
          href="/partnerships"
          className="rewards-ib-cta"
          style={{
            marginTop: 28,
            alignSelf: "flex-start",
            boxSizing: "border-box",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 18,
            width: 277.11,
            height: 56,
            borderRadius: 28.83,
            padding: "14px 33px",
            background:
              "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
            color: "#FFFFFF",
            textDecoration: "none",
            fontFamily: "var(--font-inter, Inter)",
            fontSize: 15,
            fontWeight: 600,
            whiteSpace: "nowrap",
            opacity: 1,
            zIndex: 2,
          }}
        >
          View All Promotions
          <span aria-hidden>→</span>
        </SmartLink>
      </div>

      <div
        className="rewards-ib-grid"
        style={{
          position: "absolute",
          top: 331.31,
          left: 98,
          width: 657,
          height: 219.37,
          display: "grid",
          gridTemplateColumns: "318.37px 318.38px",
          gridTemplateRows: "99.56px 99.56px",
          columnGap: 14,
          rowGap: 14.25,
          opacity: 1,
          zIndex: 2,
        }}
      >
        {featureCards.map((card) => (
          <div
            key={card.title}
            className="rewards-ib-card"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10.12,
              border: "0.84px solid transparent",
              background: CARD_BG,
              backdropFilter: "blur(8.44px)",
              WebkitBackdropFilter: "blur(8.44px)",
              padding: 20.25,
              boxSizing: "border-box",
              display: "flex",
              gap: 13.5,
              alignItems: "flex-start",
              opacity: 1,
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: 34,
                height: 34,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(5, 111, 180, 0.16)",
                border: "0.84px solid rgba(65, 171, 231, 0.22)",
              }}
            >
              {card.icon}
            </div>
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  margin: "0 0 4px",
                  fontFamily: "var(--font-inter, Inter)",
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "18px",
                  color: "#FFFFFF",
                }}
              >
                {card.title}
              </div>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-inter, Inter)",
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: "16px",
                  color: "#8D94A0",
                }}
              >
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="rewards-ib-visual"
        style={{
          position: "absolute",
          top: 40,
          right: 40,
          width: 620,
          height: 550,
          zIndex: 1,
        }}
      >
        <Image
          src="/rewards-page/The%20Introducing%20Broker%20Program/ib_v3.jpeg"
          alt=""
          fill
          sizes="620px"
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
}
