import Image from "next/image";
import Link from "@/components/SmartLink";

export default function ToolsCtaSection() {
  return (
    <section className="tl-cta-wrap">
      <div className="tl-cta">
        <Image src="/tools/cta-bg.png" alt="" fill sizes="(max-width: 1194px) 100vw, 1194px" quality={100} className="tl-cta-bg" />
        <h2 className="tl-cta-title">Trade With the right tools at your side</h2>
        <p className="tl-cta-desc">
          Open a live account or start with a demo account and explore global
          markets with Finsai Trade at your pace, on your terms.
        </p>
        <Link href="https://fx.finsaitrade.com/auth/register" className="tl-btn-pill">
          Open Live Account
        </Link>
      </div>
    </section>
  );
}
