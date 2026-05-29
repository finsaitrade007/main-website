import Image from "next/image";
import {
  getHomepage,
  getPlatforms,
  strapiImageUrl,
  type StrapiPlatform,
} from "@/lib/strapi";

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
  platformsBadge: "Choose The Best - Platform",
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
      "The industry's gold standard for multi-asset trading. Advanced charting, automated trading, real-time analysis, and multi-asset access.",
    size: "large",
    row: 1,
    order: 1,
    mockupImage: null,
    iconImage: null,
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
  },
];

function WidePlatformCard({ p }: { p: StrapiPlatform }) {
  const mockup = strapiImageUrl(p.mockupImage);
  const icon = strapiImageUrl(p.iconImage);

  return (
    <div
      style={{
        position: "relative",
        background: WIDE_CARD_BACKGROUND,
        border: "1px solid transparent",
        borderRadius: RADIUS,
        height: "321px",
        padding: "32px 40px",
        overflow: "visible",
        boxSizing: "border-box",
      }}
    >
      <p
        className="platform-card-text"
        style={{
          position: "absolute",
          top: "32px",
          left: "40px",
          width: "640px",
          overflow: "hidden",
        }}
      >
        {p.description}
      </p>

      {mockup && (
        <div
          style={{
            position: "absolute",
            top: "-55px",
            left: "885px",
            width: "312px",
            height: "376px",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <Image
            src={mockup}
            alt={p.title}
            fill
            sizes="312px"
            style={{ objectFit: "contain" }}
          />
        </div>
      )}

      {icon && (
        <div style={{ position: "absolute", top: "32px", right: "40px", zIndex: 11 }}>
          <Image
            src={icon}
            alt={p.title}
            width={64}
            height={64}
            style={{ borderRadius: "14px" }}
          />
        </div>
      )}

      <h3
        style={{
          position: "absolute",
          bottom: "32px",
          left: "40px",
          fontFamily: "var(--font-sora, Sora)",
          fontWeight: 400,
          fontSize: "40px",
          lineHeight: "54px",
          color: "#FFFFFF",
          margin: 0,
        }}
      >
        {p.title}
      </h3>
    </div>
  );
}

function PlatformCard({ p }: { p: StrapiPlatform }) {
  const mockup = strapiImageUrl(p.mockupImage);
  const icon = strapiImageUrl(p.iconImage);

  return (
    <div
      style={{
        position: "relative",
        background: CARD_BG,
        border:
          p.size === "large"
            ? "2px solid rgba(5,111,180,0.4)"
            : "1px solid rgba(5,111,180,0.35)",
        borderRadius: RADIUS,
        height: H,
        padding: "24px 28px",
        overflow: "visible",
      }}
    >
      <p
        className="platform-card-text"
        style={{
          position: "absolute",
          top: "20px",
          left: "21px",
          width: p.size === "large" ? "572px" : "348.91px",
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
          fontSize: "32px",
          lineHeight: "43.49px",
          color: "#FFFFFF",
          margin: 0,
        }}
      >
        {p.title}
      </h3>
    </div>
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
      style={{
        background: "#050208",
        width: "1440px",
        height: "780px",
        padding: "0",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>
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
            whiteSpace: "nowrap",
          }}
        >
          {header.platformsTitle}
        </h2>

        <p
          className="section-desc"
          style={{
            textAlign: "center",
            maxWidth: "560px",
            margin: "0 auto 56px",
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
          style={{
            display: "grid",
            gridTemplateColumns:
              row2.length === 2 && row2[0].size === "large"
                ? `${LARGE} ${SMALL}`
                : `${SMALL} ${LARGE}`,
            gap: COL_GAP,
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
