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
    <section className="py-24 bg-background border-b border-border-subtle text-text-primary transition-colors duration-300" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            Frequently Asked{" "}
            <span className="font-serif-italic font-normal italic text-accent">
              Questions
            </span>
            .
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Straightforward answers. Zero agency jargon.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3.5">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-card overflow-hidden border border-border-subtle rounded-2xl transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-4.5 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-text-primary hover:text-accent transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-none">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4.5 pb-4.5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border-subtle pt-3.5 animate-in fade-in duration-200">
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
