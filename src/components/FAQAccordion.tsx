"use client";
import { useState } from "react";
import type { StrapiFaq } from "@/lib/strapi";

export default function FAQAccordion({ faqs }: { faqs: StrapiFaq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={faq.id}
          className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
            open === i
              ? "border-blue-500/40 bg-[#0a0d1a]"
              : "border-white/10 bg-[#0a0d1a]/50"
          }`}
        >
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span
              className={`font-medium text-sm md:text-base ${
                open === i ? "text-white" : "text-gray-300"
              }`}
            >
              {faq.question}
            </span>
            <span
              className={`shrink-0 ml-4 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
                open === i
                  ? "border-blue-500/40 bg-blue-500/10 text-blue-400 rotate-45"
                  : "border-white/20 text-gray-400"
              }`}
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </span>
          </button>

          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
