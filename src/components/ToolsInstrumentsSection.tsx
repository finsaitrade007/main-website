import Image from "next/image";
import Link from "@/components/SmartLink";
import { TOOLS_INSTRUMENTS } from "@/components/tools-content";

export default function ToolsInstrumentsSection() {
  return (
    <section className="tl-section">
      <h2 className="tl-h2">Explore More Instruments</h2>
      <p className="tl-sub">
        Diversify your holdings effortlessly across thousands of CFDs through a
        single, integrated multi-asset account.
      </p>

      <div className="tl-inst-grid">
        {TOOLS_INSTRUMENTS.map((t) => (
          <Link key={t.slug} href={`/${t.slug}`} className="tl-inst-card">
            <Image src={t.art} alt="" width={1471} height={1471} quality={100} className="tl-inst-art" />
            <h3 className="tl-inst-title">{t.label}</h3>
            <p className="tl-inst-desc">{t.description}</p>
            <span className="tl-inst-arrow" aria-hidden>
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path d="M1 7h16m0 0-5.5-5.5M17 7l-5.5 5.5" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
