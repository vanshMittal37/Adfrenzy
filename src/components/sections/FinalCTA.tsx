"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function FinalCTA() {
  const openCalendly = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-calendly"));
    }
  };

  return (
    <section className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,229,0,0.12) 1px, transparent 1px)`,
          backgroundSize: `24px 24px`
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Let's build something that{" "}
          <span className="font-serif-italic font-normal italic text-slate-200 underline decoration-[#FFE500]">
            grows
          </span>
          .
        </h2>

        <p className="text-neutral-300 text-base sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
          Whether you're trying to scale acquisition, improve creative performance or build a stronger growth system, let's find the next opportunity together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={openCalendly}
            className="w-full sm:w-auto btn-yellow px-8 py-4 text-base font-bold inline-flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <Link
            href="/work"
            className="w-full sm:w-auto btn-ghost px-8 py-4 text-base font-semibold inline-flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Explore Our Work</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
