import Image from "next/image";

const CARD_BG  = "#0D1927";
const RADIUS   = "21.32px";
const H        = "212px";          // 212.10px from Figma
const ROW_GAP  = "21px";           // 507.42 − (274 + 212.10) ≈ 21.32px
const COL_GAP  = "20px";           // 600.13 − (80 + 499.81)  ≈ 20.32px

/* proportions: 499.81 : 759.87  ≈  1fr : 1.52fr */
const SMALL = "1fr";
const LARGE = "1.52fr";

export default function PlatformsSection() {
  return (
    <section style={{ background: "#050208", width: "1440px", height: "780px", padding: "0px 0", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 80px" }}>

        {/* Badge */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 22px",
            background: "#000",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "60px",
          }}>
            <span className="badge-text">Choose The Best - Platform</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "16px", whiteSpace: "nowrap" }}>
          Powerful Platforms for Every Trader
        </h2>

        <p className="section-desc" style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 56px" }}>
          Trade with speed, stability, and total control from your desk or on the move. Finsai Trade delivers professional-grade platforms to match your trading needs.
        </p>

        {/* ── Row 1: MT5 (small) | Web Terminal (large) ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: `${SMALL} ${LARGE}`,
          gap: COL_GAP,
          marginBottom: ROW_GAP,
        }}>

          {/* MT5 */}
          <div style={{
            position: "relative",
            background: CARD_BG,
            border: "1px solid rgba(5,111,180,0.35)",
            borderRadius: RADIUS,
            height: H,
            padding: "24px 28px",
            overflow: "visible",
          }}>
            <p className="platform-card-text" style={{
              position: "absolute",
              top: "20px",
              left: "21px",
              width: "315px",
              height: "108px",
              overflow: "hidden",
            }}>
              The industry&apos;s gold standard for multi-asset trading. Advanced charting, automated trading, real-time analysis, and multi-asset access.
            </p>

            {/* Phone mockup — overflows top-right */}
            <div style={{ position: "absolute", right: 0, top: "-48px", zIndex: 10, pointerEvents: "none" }}>
              <Image
                src="/platforms/mt-mockup.png"
                alt="MT5"
                width={190}
                height={230}
                style={{ objectFit: "contain" }}
              />
            </div>

            <h3 style={{
              position: "absolute",
              bottom: "24px",
              left: "28px",
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 400,
              fontSize: "32px",
              lineHeight: "43.49px",
              letterSpacing: "0",
              color: "#FFFFFF",
              margin: 0,
            }}>
              MT5
            </h3>
          </div>

          {/* Finsai Web Terminal */}
          <div style={{
            position: "relative",
            background: CARD_BG,
            border: "2px solid rgba(5,111,180,0.4)",
            borderRadius: RADIUS,
            height: H,
            padding: "24px 28px",
            overflow: "visible",
          }}>
            <p className="platform-card-text" style={{
              position: "absolute",
              top: "20px",
              left: "20.87px",
              width: "447px",
              height: "81px",
              overflow: "hidden",
            }}>
              Designed for ease and speed, a browser-based solution that requires no downloads or installation. Perfect for traders who prefer accessibility and simplicity.
            </p>

            {/* Laptop + phone — overflows top-right */}
            <div style={{ position: "absolute", right: "-35px", top: "-60px", zIndex: 10, pointerEvents: "none" }}>
              <Image
                src="/platforms/web-terminal-mockup.png"
                alt="Web Terminal"
                width={360}
                height={270}
                style={{ objectFit: "contain" }}
              />
            </div>

            <h3 style={{
              position: "absolute",
              bottom: "24px",
              left: "28px",
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 400,
              fontSize: "32px",
              lineHeight: "43.49px",
              letterSpacing: "0",
              color: "#FFFFFF",
              margin: 0,
            }}>
              Finsai Web Terminal
            </h3>
          </div>
        </div>

        {/* ── Row 2: Social Trading (large) | App & More (small) ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: `${LARGE} ${SMALL}`,
          gap: COL_GAP,
        }}>

          {/* Social Trading */}
          <div style={{
            position: "relative",
            background: CARD_BG,
            border: "2px solid rgba(5,111,180,0.4)",
            borderRadius: RADIUS,
            height: H,
            padding: "24px 28px",
          }}>
            <div style={{ position: "absolute", top: "20px", right: "20px" }}>
              <Image
                src="/platforms/social-icon.png"
                alt="Social Trading"
                width={52}
                height={52}
                style={{ borderRadius: "12px" }}
              />
            </div>

            <p className="platform-card-text" style={{
              position: "absolute",
              top: "20.58px",
              left: "21px",
              width: "572px",
              height: "81px",
              overflow: "hidden",
            }}>
              Follow top-performing traders, mirror proven strategies in real time, and grow your portfolio with confidence — all from within the Finsai Trade platform.
            </p>

            <h3 style={{
              position: "absolute",
              bottom: "24px",
              left: "28px",
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 400,
              fontSize: "32px",
              lineHeight: "43.49px",
              letterSpacing: "0",
              color: "#FFFFFF",
              margin: 0,
            }}>
              Social Trading
            </h3>
          </div>

          {/* App & More */}
          <div style={{
            position: "relative",
            background: CARD_BG,
            border: "1px solid rgba(5,111,180,0.35)",
            borderRadius: RADIUS,
            height: H,
            padding: "24px 28px",
          }}>
            <div style={{ position: "absolute", top: "20px", right: "20px" }}>
              <Image
                src="/platforms/app-icon.png"
                alt="App"
                width={52}
                height={52}
                style={{ borderRadius: "12px" }}
              />
            </div>

            <p className="platform-card-text" style={{
              position: "absolute",
              top: "20.25px",
              left: "21.32px",
              width: "348.91px",
              height: "81px",
              overflow: "hidden",
            }}>
              Stay connected to the markets on the go with a fast, secure, and intuitive mobile trading experience.
            </p>

            <h3 style={{
              position: "absolute",
              bottom: "24px",
              left: "28px",
              fontFamily: "var(--font-sora, Sora)",
              fontWeight: 400,
              fontSize: "32px",
              lineHeight: "43.49px",
              letterSpacing: "0",
              color: "#FFFFFF",
              margin: 0,
            }}>
              App &amp; More — Coming soon
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
