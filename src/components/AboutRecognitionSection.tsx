import Image from "next/image";

export default function AboutRecognitionSection() {
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
          Recognized for Elite Trading{" "}
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
            Excellence
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
          Trade seamlessly on the go or from your desktop with our cutting-edge platforms.
        </p>

      </div>

      {/* Left award seal — 347 × 225 anchored at top:361 / left:80. */}
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

      {/* Right award trophy — 385 × 224.88 anchored at top:361 / left:975
          (slightly wider artwork than the left seal, so it sits at a
          different left offset). */}
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

      {/* Centre stat tile — 458.37 × 434.59 anchored at top:237 / left:472
          inside the 1440 × 752 section, with a 26.99px border-radius and a
          0.9px solid #056FB4 stroke. */}
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
        {/* Inner text block — 315 × 283 anchored at top:76.21 / left:71.69
            inside the stat tile.  Every text element below is positioned
            absolutely with coordinates relative to THIS block (per Figma
            export), not the outer stat tile. */}
        <div
          style={{
            position: "absolute",
            top: "76.21px",
            left: "71.69px",
            width: "315px",
            height: "283px",
          }}
        >
          {/* "168M+" headline — 300 × 60 at top:5 / left:12 relative to the
              inner block, Inter 700 / 88 / 60 in solid white. */}
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
            168M+
          </div>

          {/* "Monthly Deals" caption — 202 × 60 at top:85 / left:56 relative
              to the inner block, Ageo Trial 700 / 32 / 60 in solid white.
              Forced onto a single line via white-space: nowrap. */}
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
            Monthly Deals
          </div>

          {/* "3M+" — 92 × 60 at top:192 / left:111 relative to the inner
              block, Inter Black 40/60 in 50% white. */}
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
            3M+
          </div>

          {/* "Monthly Worldwide" — 170 × 30 at top:246 / left:72 relative
              to the inner block, Ageo Trial 700/20/30 with a vertical
              white gradient painted onto the text. */}
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
            Monthly Worldwide
          </div>
        </div>
      </div>
    </section>
  );
}

