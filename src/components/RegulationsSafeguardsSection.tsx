import Image from "next/image";
import { getRegulationsPage, type StrapiIconFeature } from "@/lib/strapi";

/** iconKey → illustration. Falls back to positional order when unset in CMS. */
const SAFEGUARD_IMAGES: Record<string, string> = {
  "segregated-funds": "/regulations-v2/safeguard-1.png",
  "compliance-oversight": "/regulations-v2/safeguard-2.png",
  "network-security": "/regulations-v2/safeguard-3.png",
  "aml-kyc": "/regulations-v2/safeguard-4.png",
};

const ORDERED_IMAGES = [
  "/regulations-v2/safeguard-1.png",
  "/regulations-v2/safeguard-2.png",
  "/regulations-v2/safeguard-3.png",
  "/regulations-v2/safeguard-4.png",
];

const FALLBACK: StrapiIconFeature[] = [
  {
    id: -1,
    title: "Segregated Client Funds",
    description:
      "Your money stays safe. Finsai Trade keeps all trader capital completely isolated from operational corporate funds in tier-1 banking institutions.",
    iconKey: "segregated-funds",
  },
  {
    id: -2,
    title: "Regulatory Compliance Oversight",
    description:
      "The platform strictly complies with FSC Mauritius requirements. Our framework includes capital reserve standards, risk management controls, and transparent financial operations.",
    iconKey: "compliance-oversight",
  },
  {
    id: -3,
    title: "Data & Network Security",
    description:
      "Your data deserves maximum protection. We use SSL encryption, multi-factor authentication, and secure server infrastructure to safeguard your account.",
    iconKey: "network-security",
  },
  {
    id: -4,
    title: "Strict AML and KYC Policies",
    description:
      "We actively prevent fraud and financial crime. Our AML and KYC procedures help maintain a secure online trading platform for all users.",
    iconKey: "aml-kyc",
  },
];

export default async function RegulationsSafeguardsSection() {
  const cms = await getRegulationsPage();
  const safeguards = cms?.safeguards?.length ? cms.safeguards : FALLBACK;

  return (
    <section
      className="reg-safeguards"
      style={{
        position: "relative",
        width: "100%",
        background: "#050208",
        padding: "clamp(40px, 4.3vw, 62px) clamp(20px, 5.5vw, 80px)",
        overflow: "hidden",
      }}
    >
      <div
        className="reg-safeguards-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "21px",
          maxWidth: "1287px",
          margin: "0 auto",
        }}
      >
        {safeguards.map((item, i) => (
          <article
            key={item.id ?? i}
            className="reg-safeguard-card"
            style={{
              boxSizing: "border-box",
              minHeight: "474px",
              borderRadius: "16px",
              // Figma has no card fill — the interior is the page colour, and
              // the card reads purely as a gradient hairline. padding-box
              // paints the interior, border-box paints the border.
              border: "1.19px solid transparent",
              background:
                "linear-gradient(#050208, #050208) padding-box, " +
                "linear-gradient(180deg, #3574B2 0%, #8CB9D5 100%) border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "4px 16px 32px",
            }}
          >
            <Image
              src={
                (item.iconKey && SAFEGUARD_IMAGES[item.iconKey]) ||
                ORDERED_IMAGES[i] ||
                ORDERED_IMAGES[0]
              }
              alt=""
              quality={100}
              width={868}
              height={868}
              className="reg-safeguard-img"
              priority={i === 0}
              style={{
                width: "clamp(140px, 15.1vw, 217px)",
                height: "auto",
                objectFit: "contain",
              }}
            />

            <h3
              style={{
                fontFamily: "var(--font-sora, Sora)",
                fontWeight: 600,
                fontSize: "clamp(15px, 1.25vw, 18px)",
                lineHeight: "28px",
                letterSpacing: "-0.01em",
                color: "#FFFFFF",
                textAlign: "center",
                margin: "12px 0 0",
                maxWidth: "256px",
              }}
            >
              {item.title}
            </h3>

            <p
              className="reg-safeguard-desc"
              style={{
                fontFamily: "var(--font-inter, Inter)",
                fontWeight: 400,
                fontSize: "clamp(13px, 1.11vw, 16px)",
                lineHeight: "24px",
                letterSpacing: "-0.01em",
                color: "#94A3B8",
                textAlign: "center",
                margin: "18px 0 0",
                maxWidth: "256px",
              }}
            >
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
