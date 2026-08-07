import Image from "next/image";
import { getRegulationsPage, type StrapiIconFeature } from "@/lib/strapi";

/** iconKey → pillar icon. Falls back to positional order when unset in CMS. */
const PILLAR_ICONS: Record<string, string> = {
  "security-transparency": "/regulations-v2/icons/security-transparency.svg",
  "regulated-trading": "/regulations-v2/icons/regulated-trading.svg",
  "secure-payments": "/regulations-v2/icons/secure-payments.svg",
  "regular-audits": "/regulations-v2/icons/regular-audits.svg",
  "global-standards": "/regulations-v2/icons/global-standards.svg",
  "financial-controls": "/regulations-v2/icons/financial-controls.svg",
};

const ORDERED_ICONS = [
  "/regulations-v2/icons/security-transparency.svg",
  "/regulations-v2/icons/regulated-trading.svg",
  "/regulations-v2/icons/secure-payments.svg",
  "/regulations-v2/icons/regular-audits.svg",
  "/regulations-v2/icons/global-standards.svg",
  "/regulations-v2/icons/financial-controls.svg",
];

const FALLBACK_PILLARS: StrapiIconFeature[] = [
  { id: -1, title: "Security & Transparency", iconKey: "security-transparency" },
  { id: -2, title: "Regulated Trading", iconKey: "regulated-trading" },
  { id: -3, title: "Secure Payments", iconKey: "secure-payments" },
  { id: -4, title: "Regular Audits & Reporting", iconKey: "regular-audits" },
  { id: -5, title: "Global Standards Compliance", iconKey: "global-standards" },
  { id: -6, title: "Financial Controls", iconKey: "financial-controls" },
];

const FALLBACK_TEXT = {
  pillarsTitle: "Six Pillars of Regulatory Compliance",
  pillarsDescription:
    "See how we follow strict global financial regulations for safe, legal, and fair trading.",
};

export default async function RegulationsPillarsSection() {
  const cms = await getRegulationsPage();
  const pillars = cms?.pillars?.length ? cms.pillars : FALLBACK_PILLARS;
  const pillarsTitle = cms?.pillarsTitle || FALLBACK_TEXT.pillarsTitle;
  const pillarsDescription =
    cms?.pillarsDescription || FALLBACK_TEXT.pillarsDescription;

  return (
    <section
      className="reg-pillars"
      style={{
        position: "relative",
        width: "100%",
        background: "#050208",
        padding: "clamp(48px, 4.7vw, 68px) clamp(20px, 5.5vw, 80px)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          maxWidth: "1013px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "clamp(24px, 2.5vw, 36px)",
            lineHeight: "126%",
            color: "#FFFFFF",
            textAlign: "center",
            margin: 0,
          }}
        >
          {pillarsTitle}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "clamp(14px, 1.11vw, 16px)",
            lineHeight: "150%",
            color: "#FFFFFF",
            textAlign: "center",
            margin: 0,
            maxWidth: "851px",
          }}
        >
          {pillarsDescription}
        </p>
      </div>

      <div
        className="reg-pillars-track"
        style={{
          position: "relative",
          maxWidth: "1281px",
          margin: "clamp(40px, 4.2vw, 60px) auto 0",
        }}
      >
        {/* Connector rail — sits behind the badges, full-bleed on both sides */}
        <div
          aria-hidden
          className="reg-pillars-rail"
          style={{
            position: "absolute",
            top: "40px",
            left: "-50vw",
            right: "-50vw",
            height: "1px",
            background: "rgba(5,111,180,0.35)",
            zIndex: 0,
          }}
        />

        <ul
          className="reg-pillars-list"
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "clamp(8px, 1.4vw, 20px)",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {pillars.map((pillar, i) => (
            <li
              key={pillar.id ?? i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                flex: "1 1 0",
                minWidth: 0,
              }}
            >
              <span
                className="reg-pillar-badge"
                style={{
                  boxSizing: "border-box",
                  width: "80px",
                  height: "80px",
                  flexShrink: 0,
                  borderRadius: "9999px",
                  background: "#020303",
                  border: "2px solid rgba(5,111,180,0.6)",
                  boxShadow: "0px 0px 24px 16px rgba(5,111,180,0.24)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={
                    (pillar.iconKey && PILLAR_ICONS[pillar.iconKey]) ||
                    ORDERED_ICONS[i] ||
                    ORDERED_ICONS[0]
                  }
                  alt=""
                  quality={100}
                  width={45}
                  height={45}
                  className="reg-pillar-icon"
                  style={{ width: "45px", height: "45px" }}
                />
              </span>

              <span
                className="reg-pillar-label"
                style={{
                  fontFamily: "var(--font-sora, Sora)",
                  fontWeight: 400,
                  fontSize: "clamp(12px, 1.11vw, 16px)",
                  lineHeight: "150%",
                  color: "#94A3B8",
                  textAlign: "center",
                }}
              >
                {pillar.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
