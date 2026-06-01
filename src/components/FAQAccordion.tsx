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
          className="rounded-2xl overflow-hidden transition-all duration-200"
          style={{
            border: open === i ? "1px solid rgba(5,111,180,0.4)" : "1px solid rgba(255,255,255,0.1)",
            background: open === i
              ? "linear-gradient(137.88deg, #050208 1.04%, #056FB4 536.19%)"
              : "rgba(10,13,26,0.5)",
          }}
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
              style={{
                flexShrink: 0,
                marginLeft: "16px",
                width: "40.17px",
                height: "40.17px",
                borderRadius: "77.26px",
                padding: "9.27px",
                background: "#056FB4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.2s ease",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                boxSizing: "border-box",
              }}
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
