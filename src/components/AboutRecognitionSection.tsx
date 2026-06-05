import Image from "next/image";
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
  recognitionStatPrimaryValue: "53k+",
  recognitionStatPrimaryLabel: "Registered Users",
  recognitionStatSecondaryValue: "3M+",
  recognitionStatSecondaryLabel: "Monthly Worldwide",
};

export default async function AboutRecognitionSection() {
  const data = (await getAboutPage()) ?? FALLBACK;

  return (
    <section
      style={{
        position: "relative",
        background: "#050208",
        width: "1440px",
        maxWidth: "100%",
        height: "752px",
        margin: "0 auto",
        padding: "60px 0 80px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "1280px",
          maxWidth: "calc(100% - 80px)",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          textAlign: "center",
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
              left: "56px",
              width: "202px",
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
    </section>
  );
}
