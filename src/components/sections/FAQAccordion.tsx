"use client";

import { useState } from "react";
import { faqData } from "@/data/faq";
import { Plus, Minus } from "lucide-react";

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-white/10" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500]">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked{" "}
            <span className="font-serif-italic font-normal italic text-slate-200">
              Questions
            </span>
            .
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Straightforward answers. Zero agency jargon.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-card overflow-hidden border border-white/10 rounded-xl transition-all"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-[#FFE500] transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#FFE500] flex-none">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-neutral-300 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
