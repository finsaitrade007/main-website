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

/**
 * Renders an award badge framed by laurel leaves on either side. The badge is
 * a square image (280×280 source) and the laurels are vertical curves (83×224
 * source) that overlap the badge by `laurelOverlapRatio` of their width so
 * they hug it (higher ratio = laurels sit closer to / further over the badge).
 */
function AwardWithLaurels({
  src,
  alt,
  badgeSize,
  laurelWidth,
  laurelHeight,
  laurelOverlapRatio = 0.5,
}: {
  src: string;
  alt: string;
  badgeSize: number;
  laurelWidth: number;
  laurelHeight: number;
  laurelOverlapRatio?: number;
}) {
  const overlap = Math.round(laurelWidth * laurelOverlapRatio);
  const containerWidth = badgeSize + 2 * (laurelWidth - overlap);
  return (
    <div
      style={{
        position: "relative",
        width: `${containerWidth}px`,
        height: `${Math.max(laurelHeight, badgeSize)}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Image
        src="/about/laurel-left.png"
        alt=""
        width={83}
        height={224}
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: `${laurelWidth}px`,
          height: `${laurelHeight}px`,
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
      <Image
        src={src}
        alt={alt}
        width={280}
        height={280}
        style={{
          position: "relative",
          zIndex: 1,
          width: `${badgeSize}px`,
          height: `${badgeSize}px`,
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
      <Image
        src="/about/laurel-right.png"
        alt=""
        width={83}
        height={224}
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: `${laurelWidth}px`,
          height: `${laurelHeight}px`,
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
    </div>
  );
}

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

      {/*
        Two laurel-wrapped award slots, one on each side of the central
        stats card. Each slot vertically scrolls through its awards in a
        single direction (upwards) on an infinite loop — the strip ends
        with a duplicate of the first award so the wrap-around is seamless.
      */}
      <style>{`
        @keyframes about-award-swap-v {
          0%, 45%   { transform: translateY(0); }
          50%, 95%  { transform: translateY(-260px); }
          100%      { transform: translateY(-520px); }
        }
        @keyframes about-stat-swap-v {
          0%, 20%   { transform: translateY(0); }
          25%, 45%  { transform: translateY(-283px); }
          50%, 70%  { transform: translateY(-566px); }
          75%, 95%  { transform: translateY(-849px); }
          100%      { transform: translateY(-1132px); }
        }
        .about-award-strip {
          animation: about-award-swap-v 8s ease-in-out infinite;
        }
        .about-stat-strip {
          animation: about-stat-swap-v 8s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .about-award-strip,
          .about-stat-strip { animation: none; }
        }
      `}</style>

      {/* Left slot: World Forex Award ↔ Innovative Startup */}
      <div
        aria-label="Recognized awards (left)"
        style={{
          position: "absolute",
          top: "322px",
          left: "90px",
          width: "354px",
          height: "260px",
          overflow: "hidden",
        }}
      >
        <div
          className="about-award-strip"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "780px",
            willChange: "transform",
          }}
        >
          <AwardWithLaurels
            src="/awards/world-forex-award.png"
            alt="World Forex Award"
            badgeSize={260}
            laurelWidth={95}
            laurelHeight={252}
          />
          <AwardWithLaurels
            src="/awards/innovative-startup.png"
            alt="Innovative Startup Award"
            badgeSize={260}
            laurelWidth={95}
            laurelHeight={252}
          />
          {/* Seamless-loop tail: duplicate of the first item */}
          <AwardWithLaurels
            src="/awards/world-forex-award.png"
            alt=""
            badgeSize={260}
            laurelWidth={95}
            laurelHeight={252}
          />
        </div>
      </div>

      {/* Right slot: World Finance Award 2024 ↔ 2025 */}
      <div
        aria-label="Recognized awards (right)"
        style={{
          position: "absolute",
          top: "322px",
          left: "980px",
          width: "354px",
          height: "260px",
          overflow: "hidden",
        }}
      >
        <div
          className="about-award-strip"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "780px",
            willChange: "transform",
          }}
        >
          <AwardWithLaurels
            src="/awards/wld-fi-2024.png"
            alt="World Finance Award 2024"
            badgeSize={260}
            laurelWidth={95}
            laurelHeight={252}
          />
          <AwardWithLaurels
            src="/awards/wld-fi-2025.png"
            alt="World Finance Award 2025"
            badgeSize={260}
            laurelWidth={95}
            laurelHeight={252}
          />
          {/* Seamless-loop tail: duplicate of the first item */}
          <AwardWithLaurels
            src="/awards/wld-fi-2024.png"
            alt=""
            badgeSize={260}
            laurelWidth={95}
            laurelHeight={252}
          />
        </div>
      </div>

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
        {/*
          Primary stat slider — each frame stacks a big "current" stat on top
          and a smaller "next" stat below as a preview. The strip cycles
          through 4 frames + a duplicated tail so the wrap is seamless.
        */}
        <div
          style={{
            position: "absolute",
            top: "76.21px",
            left: "71.69px",
            width: "315px",
            height: "283px",
            overflow: "hidden",
          }}
        >
          <div
            className="about-stat-strip"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "1415px",
              willChange: "transform",
            }}
          >
            {[
              {
                big: {
                  value: data.recognitionStatPrimaryValue,
                  label: data.recognitionStatPrimaryLabel,
                },
                small: { value: "3M+", label: "Monthly Worldwide" },
              },
              {
                big: { value: "3M+", label: "Monthly Worldwide" },
                small: { value: "30k", label: "active traders" },
              },
              {
                big: { value: "30k", label: "active traders" },
                small: { value: "10k+", label: "IB" },
              },
              {
                big: { value: "10k+", label: "IB" },
                small: {
                  value: data.recognitionStatPrimaryValue,
                  label: data.recognitionStatPrimaryLabel,
                },
              },
              // Seamless-loop tail: duplicate of the first frame
              {
                big: {
                  value: data.recognitionStatPrimaryValue,
                  label: data.recognitionStatPrimaryLabel,
                },
                small: { value: "3M+", label: "Monthly Worldwide" },
              },
            ].map((frame, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  width: "315px",
                  height: "283px",
                  flexShrink: 0,
                }}
              >
                {/* Big primary stat (current focus) */}
                <div
                  style={{
                    position: "absolute",
                    top: "5px",
                    left: "12px",
                    width: "300px",
                    height: "60px",
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 700,
                    fontSize: "78px",
                    lineHeight: "60px",
                    letterSpacing: 0,
                    textTransform: "capitalize",
                    color: "#FFFFFF",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  {frame.big.value}
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
                  {frame.big.label}
                </div>

                {/* Smaller preview of the next stat */}
                <div
                  style={{
                    position: "absolute",
                    top: "192px",
                    left: 0,
                    width: "100%",
                    height: "60px",
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 900,
                    fontSize: "40px",
                    lineHeight: "60px",
                    letterSpacing: 0,
                    textTransform: "capitalize",
                    color: "#FFFFFF80",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  {frame.small.value}
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "246px",
                    left: 0,
                    width: "100%",
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
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  {frame.small.label}
                </div>
              </div>
            ))}
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
        {/* Primary stat slider — big current stat on top, smaller preview of
            the next stat below, cycling through 4 frames. */}
        <style>{`
          @keyframes about-stat-swap-mobile-v {
            0%, 20%   { transform: translateY(0); }
            25%, 45%  { transform: translateY(-220px); }
            50%, 70%  { transform: translateY(-440px); }
            75%, 95%  { transform: translateY(-660px); }
            100%      { transform: translateY(-880px); }
          }
          .about-stat-strip-mobile {
            animation: about-stat-swap-mobile-v 8s ease-in-out infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .about-stat-strip-mobile { animation: none; }
          }
        `}</style>
        <div
          style={{
            width: "100%",
            height: "220px",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <div
            className="about-stat-strip-mobile"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "1100px",
              willChange: "transform",
            }}
          >
            {[
              {
                big: {
                  value: data.recognitionStatPrimaryValue,
                  label: data.recognitionStatPrimaryLabel,
                },
                small: { value: "3M+", label: "Monthly Worldwide" },
              },
              {
                big: { value: "3M+", label: "Monthly Worldwide" },
                small: { value: "50000+", label: "Registered Users" },
              },
              {
                big: { value: "50000+", label: "Registered Users" },
                small: { value: "10k+", label: "IB" },
              },
              {
                big: { value: "10k+", label: "IB" },
                small: {
                  value: data.recognitionStatPrimaryValue,
                  label: data.recognitionStatPrimaryLabel,
                },
              },
              // Seamless-loop tail: duplicate of the first frame
              {
                big: {
                  value: data.recognitionStatPrimaryValue,
                  label: data.recognitionStatPrimaryLabel,
                },
                small: { value: "3M+", label: "Monthly Worldwide" },
              },
            ].map((frame, i) => (
              <div
                key={i}
                style={{
                  width: "100%",
                  height: "220px",
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Big current stat */}
                <div
                  style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 700,
                    fontSize: "clamp(52px, 18vw, 72px)",
                    lineHeight: "1",
                    color: "#FFFFFF",
                    whiteSpace: "nowrap",
                  }}
                >
                  {frame.big.value}
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
                  {frame.big.label}
                </div>

                {/* Divider */}
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    margin: "16px 0",
                    background:
                      "linear-gradient(90deg, transparent 0%, #056FB4 50%, transparent 100%)",
                  }}
                />

                {/* Smaller preview of the next stat */}
                <div
                  style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontWeight: 900,
                    fontSize: "clamp(36px, 12vw, 52px)",
                    lineHeight: "1",
                    color: "rgba(255,255,255,0.5)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {frame.small.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "1.4",
                    marginTop: "8px",
                    backgroundImage:
                      "linear-gradient(359.01deg, rgba(255,255,255,0.25) 0.85%, rgba(255,255,255,0.5) 99.15%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  {frame.small.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Two laurel-wrapped award slots stacked vertically; each scrolls
          upwards on an infinite loop with a duplicated tail for seamless
          wrap-around. Same timing as desktop. */}
      <style>{`
        @keyframes about-award-swap-mobile-v {
          0%, 45%   { transform: translateY(0); }
          50%, 95%  { transform: translateY(-260px); }
          100%      { transform: translateY(-520px); }
        }
        .about-award-strip-mobile {
          animation: about-award-swap-mobile-v 8s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .about-award-strip-mobile { animation: none; }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {[
          {
            id: "left",
            primary: { src: "/awards/world-forex-award.png", alt: "World Forex Award" },
            secondary: { src: "/awards/innovative-startup.png", alt: "Innovative Startup Award" },
          },
          {
            id: "right",
            primary: { src: "/awards/wld-fi-2024.png", alt: "World Finance Award 2024" },
            secondary: { src: "/awards/wld-fi-2025.png", alt: "World Finance Award 2025" },
          },
        ].map(({ id, primary, secondary }) => (
          <div
            key={id}
            style={{
              width: "342px",
              height: "260px",
              overflow: "hidden",
            }}
          >
            <div
              className="about-award-strip-mobile"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "780px",
                willChange: "transform",
              }}
            >
              <AwardWithLaurels
                src={primary.src}
                alt={primary.alt}
                badgeSize={260}
                laurelWidth={82}
                laurelHeight={221}
              />
              <AwardWithLaurels
                src={secondary.src}
                alt={secondary.alt}
                badgeSize={260}
                laurelWidth={82}
                laurelHeight={221}
              />
              {/* Seamless-loop tail: duplicate of the first item */}
              <AwardWithLaurels
                src={primary.src}
                alt=""
                badgeSize={260}
                laurelWidth={82}
                laurelHeight={221}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
