"use client";

import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  const openDaySchedule = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-dayschedule"));
    }
  };

  return (
    <section className="py-24 bg-background border-t border-border-subtle relative overflow-hidden text-text-primary transition-colors duration-300">
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at center, var(--accent) 1px, transparent 1px)`,
          backgroundSize: `24px 24px`
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Let&apos;s find what&apos;s actually holding the{" "}
          <span className="font-serif-italic font-normal italic text-accent underline decoration-accent/30 decoration-wavy decoration-2">
            growth back
          </span>
          .
        </h2>

        <p className="text-text-secondary text-base sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
          Book a call and we&apos;ll go through your ad account, your site and your funnel. You get a 90 day roadmap out of it whether you work with us or not.
        </p>

        <div className="flex items-center justify-center pt-4">
          <button
            onClick={openDaySchedule}
            className="w-full sm:w-auto btn-yellow px-8 py-4 text-base font-bold inline-flex items-center justify-center gap-3 cursor-pointer rounded-full"
          >
            <span>Book a Growth Call</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

