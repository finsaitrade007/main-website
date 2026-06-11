import Image from "next/image";
import ResponsiveScale from "@/components/ResponsiveScale";
import { getAboutPage, type StrapiAboutPage } from "@/lib/strapi";

const FALLBACK: Pick<
  StrapiAboutPage,
  | "recognitionTitlePrefix"
  | "recognitionTitleAccent"
  | "recognitionDescription"
  | "recognitionStatPrimaryValue"
  | "recognitionStatPrimaryLabel"
  | "recognitionStatSecondaryValue"
  | "recognitionStatSecondaryLabel"
> = {
  recognitionTitlePrefix: "Recognized for Elite Trading ",
  recognitionTitleAccent: "Excellence",
  recognitionDescription:
    " Trusted by a growing community of traders for reliable execution, modern trading tools, and scalable partnership opportunities. ",
  recognitionStatPrimaryValue: "50k+",
  recognitionStatPrimaryLabel: "Registered Users",
  recognitionStatSecondaryValue: "3M+",
  recognitionStatSecondaryLabel: "Monthly Worldwide",
};

export default async function AboutRecognitionSection() {
  const data = (await getAboutPage()) ?? FALLBACK;

  return (
    <section
      style={{
        background: "#050208",
        width: "100%",
        overflow: "hidden",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
    {/* Desktop / tablet layout (≥ 426px) */}
    <div className="steps-horizontal">
    <ResponsiveScale designWidth={1440}>
    <div
      style={{
        position: "relative",
        width: "1440px",
        minHeight: "672px",
        paddingTop: "0",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "44px",
            color: "#FFFFFF",
          }}
        >
          {data.recognitionTitlePrefix}
          <span
            style={{
              backgroundImage:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            {data.recognitionTitleAccent}
          </span>
        </h2>
        <p
          style={{
            margin: 0,
            maxWidth: "720px",
            fontFamily: "var(--font-inter, Inter)",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "22px",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          {data.recognitionDescription}
        </p>
      </div>

      <Image
        src="/about/award-seal.png"
        alt="World Forex Award"
        width={347}
        height={225}
        style={{
          position: "absolute",
          top: "361px",
          left: "80px",
          width: "347px",
          height: "225px",
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      <Image
        src="/about/award-seal-2.png"
        alt="Iconic Finance Expo"
        width={385}
        height={225}
        style={{
          position: "absolute",
          top: "361px",
          left: "975px",
          width: "385px",
          height: "224.88px",
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "237px",
          left: "472px",
          width: "458.37px",
          height: "434.59px",
          borderRadius: "26.99px",
          border: "0.9px solid #056FB4",
          background:
            "linear-gradient(157.26deg, rgba(10,18,32,0.85) 0%, rgba(5,111,180,0.18) 100%)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "76.21px",
            left: "71.69px",
            width: "315px",
            height: "283px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "5px",
              left: "12px",
              width: "300px",
              height: "60px",
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 700,
              fontSize: "88px",
              lineHeight: "60px",
              letterSpacing: 0,
              textTransform: "capitalize",
              color: "#FFFFFF",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            {data.recognitionStatPrimaryValue}
          </div>

          <div
            style={{
              position: "absolute",
              top: "85px",
              left: 0,
              width: "100%",
              height: "60px",
              fontFamily: "'Ageo Trial', var(--font-sora, Sora), sans-serif",
              fontWeight: 700,
              fontSize: "30px",
              lineHeight: "60px",
              letterSpacing: 0,
              textTransform: "capitalize",
              color: "#FFFFFF",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            {data.recognitionStatPrimaryLabel}
          </div>

          <div
            style={{
              position: "absolute",
              top: "192px",
              left: "111px",
              width: "92px",
              height: "60px",
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 900,
              fontSize: "40px",
              lineHeight: "60px",
              letterSpacing: 0,
              textTransform: "capitalize",
              color: "#FFFFFF80",
              textAlign: "center",
            }}
          >
            {data.recognitionStatSecondaryValue}
          </div>

          <div
            style={{
              position: "absolute",
              top: "246px",
              left: "52px",
              width: "250px",
              height: "30px",
              fontFamily: "'Ageo Trial', var(--font-sora, Sora), sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "30px",
              letterSpacing: 0,
              textTransform: "capitalize",
              backgroundImage:
                "linear-gradient(359.01deg, rgba(255, 255, 255, 0.25) 0.85%, rgba(255, 255, 255, 0.5) 99.15%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            {data.recognitionStatSecondaryLabel}
          </div>
        </div>
      </div>
    </div>
    </ResponsiveScale>
    </div>

    {/* Mobile layout (< 426px): heading + stats card + award images stacked */}
    <div className="steps-vertical" style={{ padding: "0 20px 8px" }}>
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <h2 className="section-title" style={{ marginBottom: "12px" }}>
          {data.recognitionTitlePrefix}
          <span
            style={{
              backgroundImage:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            {data.recognitionTitleAccent}
          </span>
        </h2>
        <p className="section-desc" style={{ margin: "0 auto" }}>
          {data.recognitionDescription}
        </p>
      </div>

      {/* Stats card */}
      <div
        style={{
          width: "100%",
          borderRadius: "20px",
          border: "0.9px solid #056FB4",
          background:
            "linear-gradient(157.26deg, rgba(10,18,32,0.85) 0%, rgba(5,111,180,0.18) 100%)",
          padding: "32px 24px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginBottom: "28px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 700,
              fontSize: "clamp(52px, 18vw, 72px)",
              lineHeight: "1",
              color: "#FFFFFF",
            }}
          >
            {data.recognitionStatPrimaryValue}
          </div>
          <div
            style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 700,
              fontSize: "18px",
              lineHeight: "1.4",
              color: "#FFFFFF",
              marginTop: "8px",
            }}
          >
            {data.recognitionStatPrimaryLabel}
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, #056FB4 50%, transparent 100%)",
          }}
        />

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 900,
              fontSize: "clamp(36px, 12vw, 52px)",
              lineHeight: "1",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {data.recognitionStatSecondaryValue}
          </div>
          <div
            style={{
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "1.4",
              backgroundImage:
                "linear-gradient(359.01deg, rgba(255,255,255,0.25) 0.85%, rgba(255,255,255,0.5) 99.15%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginTop: "8px",
            }}
          >
            {data.recognitionStatSecondaryLabel}
          </div>
        </div>
      </div>

      {/* Award images stacked */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Image
          src="/about/award-seal.png"
          alt="World Forex Award"
          width={240}
          height={156}
          style={{ width: "100%", maxWidth: "240px", height: "auto", objectFit: "contain" }}
        />
        <Image
          src="/about/award-seal-2.png"
          alt="Iconic Finance Expo"
          width={240}
          height={156}
          style={{ width: "100%", maxWidth: "240px", height: "auto", objectFit: "contain" }}
        />
      </div>
    </div>
    </section>
  );
}
