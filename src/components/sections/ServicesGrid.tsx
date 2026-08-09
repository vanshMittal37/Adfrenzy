"use client";

import Link from "next/link";
import { servicesData } from "@/data/services";
import { TrendingUp, Video, Share2, Zap, Mail, Layout, Sparkles, Target, ArrowRight } from "lucide-react";

const iconMap: Record<string, any> = {
  TrendingUp,
  Video,
  Share2,
  Zap,
  Mail,
  Layout,
  Sparkles,
  Target
};

export function ServicesGrid() {
  const openCalendly = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-calendly"));
    }
  };

  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-white/10" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500]">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything your brand needs to grow —{" "}
            <span className="font-serif-italic font-normal italic text-slate-200">
              under one roof
            </span>
            .
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            From strategy and creative production to paid media, conversion and retention, we connect every growth lever into one system.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {servicesData.map((svc) => {
            const Icon = iconMap[svc.icon] || Target;
            return (
              <div
                key={svc.id}
                className="glass-card p-6 flex flex-col justify-between group hover:border-[#FFE500]/60 transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFE500]/10 text-[#FFE500] flex items-center justify-center mb-6 group-hover:bg-[#FFE500] group-hover:text-black transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFE500] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#FFE500] mb-3">
                    "{svc.tagline}"
                  </p>
                  <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 mt-2">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#FFE500] transition-colors"
                  >
                    <span>Explore Capability</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service CTA Box (Step 23) */}
        <div className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto border-[#FFE500]/30 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Need one service or the whole system?
          </h3>
          <p className="text-neutral-300 text-base max-w-xl mx-auto">
            Start where the problem is. We'll help you build the rest.
          </p>
          <button
            onClick={openCalendly}
            className="btn-yellow px-8 py-3.5 text-sm font-bold inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Talk to Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
