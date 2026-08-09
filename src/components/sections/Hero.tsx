"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const openCalendly = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-calendly"));
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0A0A0A] border-b border-white/10">
      {/* Radial Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,229,0,0.08) 1px, transparent 1px)`,
          backgroundSize: `24px 24px`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest text-[#FFE500] uppercase">
            <span className="w-2 h-2 bg-[#FFE500] rounded-full animate-pulse" />
            <span>CREATIVE × PERFORMANCE × GROWTH</span>
          </div>

          {/* Main Heading with Mixed Typography */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Creative that{" "}
            <span className="font-serif-italic font-normal text-slate-200 underline decoration-[#FFE500]/40 decoration-wavy">
              connects
            </span>
            .<br className="hidden sm:inline" /> Marketing that{" "}
            <span className="font-serif-italic font-normal text-slate-200 underline decoration-[#FFE500]/40 decoration-wavy">
              performs
            </span>
            .
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed">
            SparkMedia.ad combines strategy, creative, performance marketing and conversion into one growth system built to help ambitious brands acquire customers, convert more traffic and grow with confidence.
          </p>

          {/* Action Buttons */}
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
              <span>See Our Work</span>
            </Link>
          </div>

          {/* Trust Caption */}
          <p className="text-xs text-neutral-400 font-mono pt-2">
            ⚡ Built for ambitious brands ready to scale profitably.
          </p>
        </div>
      </div>
    </section>
  );
}
