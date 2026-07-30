import Image from "next/image";
import SmartLink from "@/components/SmartLink";

export default function CommoditiesCTASection() {
  return (
    <section
      className="commodities-cta"
      style={{
        background: "#050208",
        width: "100%",
        maxWidth: 1440,
        margin: "0 auto",
        padding: "6px 0 56px",
        boxSizing: "border-box",
      }}
    >
      <div
        className="commodities-cta-box"
        style={{
          position: "relative",
          width: 962,
          maxWidth: "100%",
          height: 129,
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        <Image
          src="/commodities/cta/cta-box.png"
          alt=""
          fill
          sizes="962px"
          style={{ objectFit: "fill", pointerEvents: "none" }}
        />

        <div
          className="commodities-cta-icon"
          style={{
            position: "absolute",
            top: 36,
            left: 46,
            width: 69,
            height: 71,
            zIndex: 1,
          }}
        >
          <Image
            src="/commodities/cta/cta-icon.png"
            alt=""
            width={69}
            height={71}
            style={{ width: 69, height: 71, display: "block", objectFit: "contain" }}
          />
        </div>

        <div
          className="commodities-cta-copy"
          style={{
            position: "absolute",
            top: 36,
            left: 136,
            right: 462,
            zIndex: 1,
          }}
        >
          <div
            style={{
              margin: "0 0 6px",
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 600,
              fontSize: 20,
              lineHeight: "100%",
              color: "#B4B6BA",
            }}
          >
            Ready to Start Trading?
          </div>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-inter, Inter)",
              fontWeight: 400,
              fontSize: 15,
              lineHeight: "23.77px",
              color: "#788191",
            }}
          >
            Trade global markets with competitive spreads and powerful trading tools.
          </p>
        </div>

        <div
          aria-hidden
          className="commodities-cta-partition"
          style={{
            position: "absolute",
            top: 36,
            left: 516,
            width: 2,
            height: 71,
            zIndex: 1,
            background:
              "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
          }}
        />

        <div
          className="commodities-cta-action"
          style={{
            position: "absolute",
            top: 0,
            left: 518,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <SmartLink
            href="https://fx.finsaitrade.com/auth/register"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 999,
              padding: "12px 28px",
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "var(--font-inter, Inter)",
              fontSize: 14,
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            Start Trading Now →
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
