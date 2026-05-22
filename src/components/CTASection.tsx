import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 px-4 bg-[#050208] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-4">
          <span className="px-4 py-1.5 border border-white/20 rounded-full text-sm text-gray-400">
            Get Started 
          </span>
        </div>
        <h2 className="section-title" style={{ marginBottom: "24px" }}>
          Ready to Start Trading with Finsai?
        </h2>
        <p className="section-desc" style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 40px" }}>
          Open a live account or start with a demo account and explore global markets with Finsai Trade — at your pace, on your terms.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/register"
            className="px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold rounded-full transition-all duration-200 shadow-lg shadow-blue-500/30 text-sm"
          >
            Start Trading
          </Link>
          <Link
            href="/demo"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold rounded-full transition-all duration-200 text-sm"
          >
            Try Demo
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold rounded-full transition-all duration-200 text-sm"
          >
            Contact Us
          </Link>
        </div>

        <p className="text-gray-600 text-xs mt-8">
          Trading Forex and CFDs involves significant risk and may not be suitable for all investors. Please ensure you fully understand the risks involved.
        </p>
      </div>
    </section>
  );
}
