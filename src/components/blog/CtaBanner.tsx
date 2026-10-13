import SmartLink from "@/components/SmartLink";
import type { BlogCta } from "@/lib/blogs";
import s from "./blog.module.css";

/**
 * Topic-relevant call to action after the author box. Copy comes from the
 * post's own `cta`, or its category default (src/lib/blog-helpers.ts). Kept
 * to one quiet panel — no pop-ups, nothing that interrupts reading.
 */
export default function CtaBanner({ cta }: { cta: BlogCta }) {
  return (
    <aside className={s.cta} aria-label="Get started with Finsai Trade">
      <svg className={s.ctaArt} viewBox="0 0 300 160" fill="none" aria-hidden>
        <path d="M0 140 L40 118 L70 126 L110 92 L150 100 L190 64 L230 72 L270 34 L300 22" stroke="#7DB9D6" strokeWidth="2" />
        <path d="M0 140 L40 118 L70 126 L110 92 L150 100 L190 64 L230 72 L270 34 L300 22 V160 H0 Z" fill="url(#ctaFill)" />
        {[40, 110, 190, 270].map((x, i) => (
          <circle key={x} cx={x} cy={[118, 92, 64, 34][i]} r="3.5" fill="#7DB9D6" />
        ))}
        <defs>
          <linearGradient id="ctaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#056FB4" stopOpacity="0.45" />
            <stop offset="1" stopColor="#056FB4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className={s.ctaContent}>
        <p className={s.ctaHeading}>{cta.heading}</p>
        <p className={s.ctaText}>{cta.text}</p>
        <div className={s.ctaButtons}>
          <SmartLink href={cta.primary.href} className={s.ctaPrimary}>
            {cta.primary.label}
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </SmartLink>
          {cta.secondary ? (
            <SmartLink href={cta.secondary.href} className={s.ctaSecondary}>
              {cta.secondary.label}
            </SmartLink>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
