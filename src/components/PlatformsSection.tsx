import Image from "next/image";
import Link from "@/components/SmartLink";
import {
  getHomepage,
  getPlatforms,
  strapiImageUrl,
  type StrapiPlatform,
} from "@/lib/strapi";

function platformHref(title: string): string {
  const t = title.toLowerCase();
  if (/mt\s?5/.test(t)) return "/services#mt5";
  if (t.includes("social")) return "https://finsaitrade.com/services/social-trading/";
  return "/services#app";
}

const CARD_BG = "#0D1927";
const RADIUS = "21.32px";
const H = "212px";
const ROW_GAP = "21px";
const COL_GAP = "20px";
const SMALL = "1fr";
const LARGE = "1.52fr";

const WIDE_CARD_BORDER_GRADIENT =
  "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)";
const WIDE_CARD_BACKGROUND = `linear-gradient(${CARD_BG}, ${CARD_BG}) padding-box, ${WIDE_CARD_BORDER_GRADIENT} border-box`;

const FALLBACK_HEADER = {
  platformsBadge: "Seamless Trading Experience",
  platformsTitle: "Powerful Platforms for Every Trader",
  platformsDescription:
    "Trade with speed, stability, and total control from your desk or on the move. Finsai Trade delivers professional-grade platforms to match your trading needs.",
};

const FALLBACK_PLATFORMS: StrapiPlatform[] = [
  {
    id: 1,
    documentId: "fb-mt5",
    title: "MT5",
    description:
      " Access 44+ advanced charting tools, 38 built-in indicators, and 2,000+ custom indicators for deeper market analysis. Monitor price action across 21 timeframes, create custom Expert Advisors (EAs) with MQL5, and test strategies faster with multi-threaded optimization.",
    size: "large",
    row: 1,
    order: 1,
    mockupImage: null,
    iconImage: null,
    localMockupImage: "/platforms/mt-mockup.png",
  },
  {
    id: 3,
    documentId: "fb-social",
    title: "Social Trading",
    description:
      "Follow top-performing traders, mirror proven strategies in real time, and grow your portfolio with confidence — all from within the Finsai Trade platform.",
    size: "large",
    row: 2,
    order: 3,
    mockupImage: null,
    iconImage: null,
    localIconImage: "/platforms/social-icon.png",
  },
  {
    id: 4,
    documentId: "fb-app",
    title: "App & More — Coming soon",
    description:
      "Stay connected to the markets on the go with a fast, secure, and intuitive mobile trading experience.",
    size: "small",
    row: 2,
    order: 4,
    mockupImage: null,
    iconImage: null,
    localIconImage: "/platforms/app-icon.png",
  },
];

function WidePlatformCard({ p }: { p: StrapiPlatform }) {
  const mockup = strapiImageUrl(p.mockupImage) ?? p.localMockupImage;
  const icon = strapiImageUrl(p.iconImage) ?? p.localIconImage;

  return (
    <Link
      href={platformHref(p.title)}
      aria-label={`Learn more about ${p.title}`}
      style={{
        position: "relative",
        display: "block",
        textDecoration: "none",
        color: "inherit",
        background: WIDE_CARD_BACKGROUND,
        border: "1px solid transparent",
        borderRadius: RADIUS,
        height: H,
        padding: "24px 28px",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <p
        className="platform-card-text"
        style={{
          position: "absolute",
          top: "20px",
          left: "21px",
          right: "84px",
          height: "108px",
          overflow: "hidden",
        }}
      >
        {p.description}
      </p>

      {icon && (
        <div style={{ position: "absolute", top: "20px", right: "20px", zIndex: 11 }}>
          <Image
            src={icon}
            alt={p.title}
            width={52}
            height={52}
            style={{ borderRadius: "12px" }}
          />
        </div>
      )}

      {mockup && (
        <div
          className="platforms-wide-mockup"
          style={{
            position: "absolute",
            top: "-48px",
            right: "-35px",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <Image
            src={mockup}
            alt={p.title}
            width={360}
            height={270}
            style={{ objectFit: "contain" }}
          />
        </div>
      )}

      <h3
        style={{
          position: "absolute",
          bottom: "24px",
          left: "28px",
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 400,
          fontSize: "clamp(20px, 2.2vw, 32px)",
          lineHeight: "1.35",
          color: "#FFFFFF",
          margin: 0,
        }}
      >
        {p.title}
      </h3>
    </Link>
  );
}

function PlatformCard({ p }: { p: StrapiPlatform }) {
  const mockup = strapiImageUrl(p.mockupImage) ?? p.localMockupImage;
  const icon = strapiImageUrl(p.iconImage) ?? p.localIconImage;

  return (
    <Link
      href={platformHref(p.title)}
      aria-label={`Learn more about ${p.title}`}
      style={{
        position: "relative",
        display: "block",
        textDecoration: "none",
        color: "inherit",
        background: `linear-gradient(${CARD_BG}, ${CARD_BG}) padding-box, ${WIDE_CARD_BORDER_GRADIENT} border-box`,
        border: p.size === "large" ? "2px solid transparent" : "1px solid transparent",
        borderRadius: RADIUS,
        height: H,
        padding: "24px 28px",
        overflow: "hidden",
      }}
    >
      <p
        className="platform-card-text"
        style={{
          position: "absolute",
          top: "20px",
          left: "21px",
          right: "84px",
          height: "108px",
          overflow: "hidden",
        }}
      >
        {p.description}
      </p>

      {mockup && (
        <div
          style={{
            position: "absolute",
            right: p.size === "large" ? "-35px" : 0,
            top: p.size === "large" ? "-60px" : "-48px",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <Image
            src={mockup}
            alt={p.title}
            width={p.size === "large" ? 360 : 190}
            height={p.size === "large" ? 270 : 230}
            style={{ objectFit: "contain" }}
          />
        </div>
      )}

      {icon && (
        <div style={{ position: "absolute", top: "20px", right: "20px" }}>
          <Image
            src={icon}
            alt={p.title}
            width={52}
            height={52}
            style={{ borderRadius: "12px" }}
          />
        </div>
      )}

      <h3
        style={{
          position: "absolute",
          bottom: "24px",
          left: "28px",
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 400,
          fontSize: "clamp(20px, 2.2vw, 32px)",
          lineHeight: "1.35",
          color: "#FFFFFF",
          margin: 0,
        }}
      >
        {p.title}
      </h3>
    </Link>
  );
}

export default async function PlatformsSection() {
  const [home, fetched] = await Promise.all([getHomepage(), getPlatforms()]);
  const header = home ?? FALLBACK_HEADER;
  const platforms =
    fetched && fetched.length > 0 ? fetched : FALLBACK_PLATFORMS;

  const row1All = platforms.filter((p) => p.row === 1);
  const row1Wide =
    row1All.find((p) => /mt\s?5/i.test(p.title)) ?? row1All[0];
  const row1 = row1Wide ? [row1Wide] : [];
  const row2 = platforms.filter((p) => p.row === 2);

  return (
    <section
      className="page-section"
      style={{
        background: "#050208",
        width: "100%",
        paddingBottom: "96px",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 22px",
              background: "#000",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "60px",
            }}
          >
            <span className="badge-text">{header.platformsBadge}</span>
          </span>
        </div>

        <h2
          className="section-title"
          style={{
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          {header.platformsTitle}
        </h2>

        <p
          className="section-desc"
          style={{
            maxWidth: "862px",
            textAlign: "center",
            margin: "0 auto 12px",
          }}
        >
          {header.platformsDescription}
        </p>

        {row1.length === 1 ? (
          <div style={{ marginBottom: ROW_GAP }}>
            <WidePlatformCard p={row1[0]} />
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                row1.length === 2 && row1[0].size === "small"
                  ? `${SMALL} ${LARGE}`
                  : `${LARGE} ${SMALL}`,
              gap: COL_GAP,
              marginBottom: ROW_GAP,
            }}
          >
            {row1.map((p) => (
              <PlatformCard key={p.id} p={p} />
            ))}
          </div>
        )}

        <div
          className="platforms-grid-row2"
          style={{
            gridTemplateColumns:
              row2.length === 2 && row2[0].size === "large"
                ? `${LARGE} ${SMALL}`
                : `${SMALL} ${LARGE}`,
          }}
        >
          {row2.map((p) => (
            <PlatformCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
