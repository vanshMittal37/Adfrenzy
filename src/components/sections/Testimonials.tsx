"use client";

import { testimonialsData, Testimonial } from "@/data/testimonials";
import { Quote } from "lucide-react";

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="glass-card p-6 flex flex-col justify-between w-full sm:w-[340px] h-[240px] relative border-t-2 border-t-accent overflow-hidden transition-all duration-300 shadow-md rounded-2xl bg-surface border border-border-subtle"
    >
      <div className="flex flex-col space-y-3 flex-grow">
        <div className="flex gap-2">
          <Quote className="w-5 h-5 text-accent/40 flex-shrink-0 mt-0.5" />
          <p className="text-text-secondary text-sm leading-relaxed italic font-medium">
            "{t.quote}"
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-border-subtle flex items-center justify-between z-10 w-full">
        <div>
          <div className="font-bold text-text-primary text-xs sm:text-sm">
            {t.authorName}
          </div>
          <div className="text-[10px] sm:text-xs text-text-secondary font-mono">
            {t.authorTitle}, {t.companyName}
          </div>
        </div>
        {t.metricsHighlight && (
          <span className="bg-accent/10 border border-accent/25 text-accent px-2.5 py-0.5 rounded text-[10px] font-mono font-bold">
            {t.metricsHighlight}
          </span>
        )}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-background border-b border-border-subtle overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            WHAT FOUNDERS SAY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            Trusted by the brands we scaled
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {testimonialsData.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>

      </div>
    </section>
  );
}
