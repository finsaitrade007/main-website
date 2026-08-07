import Image from "next/image";
import Link from "@/components/SmartLink";

const G = "linear-gradient(174deg, #94A3B8 0%, #056FB4 100%)";

export default function ToolsHeroSection() {
  return (
    <section className="tl-hero">
      <div className="tl-hero-copy">
        <span className="tl-badge">Your Market Edge</span>
        <h1 className="tl-hero-title">Precision Trading Tools for the Modern Market</h1>
        <p className="tl-hero-desc">
          Power your trading strategy with Finsai Trade&rsquo;s institutional-grade
          analytical tools, real-time calculators, and advanced market insights &ndash;
          all in one place.
        </p>
        <div className="tl-hero-ctas">
          <Link href="https://fx.finsaitrade.com/auth/register" className="tl-btn-primary" style={{ background: G }}>
            Start Trading Now
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden>
              <path d="M1 7h16m0 0-5.5-5.5M17 7l-5.5 5.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/forex" className="tl-btn-outline">Explore Live Markets</Link>
        </div>
      </div>
      <Image src="/tools/hero.png" alt="" width={2862} height={2146} quality={100} priority className="tl-hero-image" />
    </section>
  );
}
