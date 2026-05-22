"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What is Finsai Trade?",
    a: "Finsai Trade is a multi-asset trading platform that provides access to forex, cryptocurrencies, global stocks, indices, commodities, and CFDs through one secure and professional trading ecosystem.",
  },
  {
    q: "What markets can I trade on Finsai Trade?",
    a: "You can trade Forex, Cryptocurrencies, Indices, Metals, Stocks, and CFDs. We provide access to over 1,000+ trading instruments across all major global markets.",
  },
  {
    q: "Does Finsai Trade support MetaTrader 5 (MT5)?",
    a: "Yes, Finsai Trade fully supports MetaTrader 5 (MT5), the industry-leading trading platform known for advanced charting, automated trading via Expert Advisors, and deep market analysis.",
  },
  {
    q: "How do I open an account?",
    a: "Simply click 'Start Trading', fill in your details, verify your identity with a government-issued ID, fund your account, and you're ready to trade — the entire process takes under 10 minutes.",
  },
  {
    q: "What is the minimum deposit?",
    a: "The minimum deposit varies by account type. Our Smart Choice account is designed for beginners with a low entry requirement. Contact our support team for the latest deposit requirements.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-[#050208]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-4">
          <span className="px-4 py-1.5 border border-white/20 rounded-full text-sm text-gray-400">
            FAQ
          </span>
        </div>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "48px" }}>
          Frequently Asked Question
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                open === i ? "border-blue-500/40 bg-[#0a0d1a]" : "border-white/10 bg-[#0a0d1a]/50"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-medium text-sm md:text-base ${open === i ? "text-white" : "text-gray-300"}`}>
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 ml-4 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    open === i
                      ? "border-blue-500/40 bg-blue-500/10 text-blue-400 rotate-45"
                      : "border-white/20 text-gray-400"
                  }`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>

              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-gray-300 hover:text-white hover:border-white/40 rounded-full text-sm transition-all"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
