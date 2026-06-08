import type { ReactNode } from "react";

export type ToolCard = {
  title: string;
  description: string;
  preview?: string; // placeholder label for the visual area at top of card
  // Optional full-bleed image: when set the card renders only this image
  // covering the entire 421.67×350 surface, hiding the title/description
  // (assumed to be baked into the image itself).
  image?: string;
  // Optional fully custom card body — when set, the card renders this
  // node inside the gradient-bordered wrapper and skips the standard
  // image/preview/title layout entirely.
  content?: ReactNode;
};

type Props = {
  title: string;
  description?: string;
  cards: ToolCard[];
  // Number of columns at full width.  Auto-derived from cards.length if
  // not provided.
  cols?: number;
  // Optional accent label printed in the top-left of each card preview
  // area (e.g. small chart legend).
  accent?: string;
  // Optional explicit section height to match Figma per-section specs.
  height?: string;
  // Per-section card overrides — each section in Figma has its own
  // card footprint, so these are exposed so the call-site can pass
  // exact tokens without duplicating the whole component.
  cardWidth?: string;
  cardHeight?: string;
  cardRadius?: string;
  cardPadding?: string;
  cardGap?: string;
  cardBackground?: string;
  cardGridGap?: string;
  // Controls how an image card renders its asset:
  //   - "fill" (default): asset covers the entire card, title/desc overlay
  //     at top:226 (used by Charting & Risk sections).
  //   - "top":           asset is a contained 386×155 block anchored at
  //                       top:21 / left:15.5 with title/desc beneath
  //                       (used by the Strategy section).
  imageLayout?: "fill" | "top";
};

import Image from "next/image";

export default function ToolsCardGrid({
  title,
  description,
  cards,
  cols,
  height,
  cardWidth = "421.67px",
  cardHeight = "350px",
  cardRadius = "16px",
  cardPadding,
  cardGap = "16px",
  cardBackground = "#000000",
  cardGridGap = "20px",
  imageLayout = "fill",
}: Props) {
  const columns = cols ?? cards.length;

  return (
    <section
      className="page-section"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1440px",
        minHeight: height ?? "auto",
        margin: "0 auto",
        background: "#050208",
        opacity: 1,
        paddingBottom: height ? "0" : "70px",
      }}
    >
      {/* Heading block — 1013×120.02 anchored at top:68, left:213 with
          centered title + description and a uniform 18.02 gap between
          them. */}
      <div
        style={{
          position: "absolute",
          top: "68px",
          left: "213px",
          width: "1013px",
          height: "120.02px",
          paddingLeft: "225.28px",
          paddingRight: "225.28px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "18.02px",
        }}
      >
        <h2
          style={{
            width: "651px",
            height: "45px",
            margin: 0,
            fontFamily: "var(--font-sora, Sora)",
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "100%",
            letterSpacing: 0,
            textAlign: "center",
            color: "#FFFFFF",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </h2>
        {description ? (
          <p
            style={{
              width: "851px",
              height: "57px",
              margin: 0,
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: 0,
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            {description}
          </p>
        ) : null}
      </div>

      <div
        style={{
          position: "absolute",
          top: "230px",
          left: 0,
          right: 0,
          bottom: "60px",
          padding: "0 80px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, ${cardWidth})`,
            gap: cardGridGap,
            justifyContent: "center",
          }}
        >
          {cards.map((c) => (
            <div
              key={c.title}
              style={{
                width: cardWidth,
                height: cardHeight,
                padding: "1px",
                borderRadius: cardRadius,
                background:
                  "linear-gradient(180deg, #056FB4 0%, #7DB9D6 100%)",
                boxSizing: "border-box",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: `calc(${cardRadius} - 1px)`,
                  background: cardBackground,
                  padding:
                    cardPadding ??
                    (c.image || imageLayout === "top" ? 0 : "20px"),
                  display: "flex",
                  flexDirection: "column",
                  gap: cardGap,
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                {c.content ? (
                  c.content
                ) : c.image ? (
                  imageLayout === "top" ? (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          top: "21px",
                          left: "15.5px",
                          width: "386px",
                          height: "155px",
                          borderRadius: "12px",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={c.image}
                          alt={c.title}
                          fill
                          sizes="386px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      {c.description ? (
                        <div
                          style={{
                            position: "absolute",
                            top: "196px",
                            left: "20px",
                            width: "381.68px",
                            height: "93px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            zIndex: 1,
                          }}
                        >
                          <div
                            style={{
                              fontFamily: "var(--font-sora, Sora)",
                              fontWeight: 600,
                              fontSize: "20px",
                              lineHeight: "28px",
                              color: "#FFFFFF",
                            }}
                          >
                            {c.title}
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-inter, Inter)",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "22px",
                              color: "rgba(255,255,255,0.7)",
                            }}
                          >
                            {c.description}
                          </div>
                        </div>
                      ) : null}
                    </>
                  ) : (
                    <>
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        sizes={cardWidth}
                        style={{
                          objectFit: "cover",
                          borderRadius: `calc(${cardRadius} - 1px)`,
                        }}
                      />
                      {/* Text overlay only when the card has descriptive
                          copy that ISN'T already baked into the image.
                          Anchored 226px from the top with a 10px gap
                          between title and description per spec. */}
                      {c.description ? (
                        <div
                          style={{
                            position: "absolute",
                            top: "226px",
                            left: "20px",
                            width: "381.68px",
                            height: "93px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            zIndex: 1,
                          }}
                        >
                          <div
                            style={{
                              fontFamily: "var(--font-sora, Sora)",
                              fontWeight: 600,
                              fontSize: "20px",
                              lineHeight: "28px",
                              color: "#FFFFFF",
                            }}
                          >
                            {c.title}
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-inter, Inter)",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "22px",
                              color: "rgba(255,255,255,0.7)",
                            }}
                          >
                            {c.description}
                          </div>
                        </div>
                      ) : null}
                    </>
                  )
                ) : imageLayout === "top" ? (
                  <>
                    {/* Stylised 386×155 placeholder anchored exactly where
                        a real image would live — keeps Community-style
                        cards visually aligned with Strategy cards. */}
                    <div
                      style={{
                        position: "absolute",
                        top: "21px",
                        left: "15.5px",
                        width: "386px",
                        height: "155px",
                        borderRadius: "12px",
                        background:
                          "radial-gradient(circle at 20% 20%, rgba(5,111,180,0.35) 0%, rgba(0,0,0,0) 60%), #04060B",
                        border: "1px solid rgba(125,185,214,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(255,255,255,0.3)",
                        fontFamily: "var(--font-inter, Inter)",
                        fontSize: "12px",
                      }}
                    >
                      {c.preview ?? "preview"}
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "196px",
                        left: "20px",
                        width: "381.68px",
                        height: "93px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        zIndex: 1,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-sora, Sora)",
                          fontWeight: 600,
                          fontSize: "20px",
                          lineHeight: "28px",
                          color: "#FFFFFF",
                        }}
                      >
                        {c.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-inter, Inter)",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "22px",
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        {c.description}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                {/* Preview surface: stylised placeholder for the chart /
                    widget shown in the design.  Will be replaced with a
                    real asset once available. */}
                <div
                  style={{
                    height: "150px",
                    borderRadius: "12px",
                    background:
                      "radial-gradient(circle at 20% 20%, rgba(5,111,180,0.35) 0%, rgba(0,0,0,0) 60%), #04060B",
                    border: "1px solid rgba(125,185,214,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.3)",
                    fontFamily: "var(--font-inter, Inter)",
                    fontSize: "12px",
                  }}
                >
                  {c.preview ?? "preview"}
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-sora, Sora)",
                    fontWeight: 600,
                    fontSize: "17px",
                    color: "#FFFFFF",
                  }}
                >
                  {c.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-inter, Inter)",
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {c.description}
                </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
