import Image from "next/image";
import SmartLink from "@/components/SmartLink";

export default function CryptoCTASection() {
  return (
    <section
      className="crypto-cta commodities-cta"
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
        className="crypto-cta-box commodities-cta-box"
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
          className="crypto-cta-icon commodities-cta-icon"
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
          className="crypto-cta-copy commodities-cta-copy"
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
            Open a demo account or start a live account today.
          </p>
        </div>

        <div
          aria-hidden
          className="crypto-cta-partition commodities-cta-partition"
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
          className="crypto-cta-action commodities-cta-action"
          style={{
            position: "absolute",
            top: 34.5,
            left: 558,
            width: 364,
            height: 60,
            zIndex: 1,
          }}
        >
          <SmartLink
            href="https://fx.finsaitrade.com/auth/register"
            style={{
              position: "absolute",
              top: 5,
              left: 5,
              boxSizing: "border-box",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 354,
              height: 50,
              borderRadius: 30,
              background:
                "linear-gradient(269.63deg, #7DB9D6 -35.69%, #056FB4 99.68%)",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "var(--font-inter, Inter)",
              fontSize: 16,
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
