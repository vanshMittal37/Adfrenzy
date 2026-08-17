"use client";

import Link from "next/link";
import { servicesData } from "@/data/services";
import { TrendingUp, Video, Zap, Layout, Target, ArrowRight } from "lucide-react";

const iconMap: Record<string, any> = {
  TrendingUp,
  Video,
  Zap,
  Layout,
  Target
};

export function ServicesGrid() {
  const openDaySchedule = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-dayschedule"));
    }
  };

  return (
    <section className="py-24 bg-background border-b border-border-subtle text-text-primary transition-colors duration-300" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            Everything your brand needs to grow —{" "}
            <span className="font-serif-italic font-normal italic text-accent">
              under one roof
            </span>
            .
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            From strategy and creative production to paid media, conversion and retention, we connect every growth lever into one system.
          </p>
        </div>

        {/* 5 Services Grid (One horizontal row on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4.5 mb-16">
          {servicesData.map((svc) => {
            const Icon = iconMap[svc.icon] || Target;
            return (
              <div
                key={svc.id}
                className="glass-card p-4.5 flex flex-col justify-between group hover:border-accent/60 transition-all duration-300 shadow-sm rounded-2xl border border-border-subtle bg-surface"
              >
                <div className="overflow-hidden flex flex-col justify-start h-full space-y-3">
                  {/* Icon Wrapper (scaled down slightly for desktop fit) */}
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-105 group-hover:shadow-[0_0_12px_var(--accent-soft)] transition-all duration-300">
                    <Icon className="w-4.5 h-4.5 text-accent transition-colors duration-300" />
                  </div>
                  
                  {/* Service Details */}
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-text-primary group-hover:text-accent transition-colors leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] font-semibold text-accent leading-snug">
                      "{svc.tagline}"
                    </p>
                  </div>

                  <p className="text-text-secondary text-[11px] sm:text-xs leading-relaxed line-clamp-4">
                    {svc.description}
                  </p>
                </div>

                <div className="border-t border-border-subtle pt-2.5 mt-3">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-text-primary group-hover:text-accent transition-colors"
                  >
                    <span>Explore Capability</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service CTA Box */}
        <div className="glass-card p-6 md:p-10 text-center max-w-3xl mx-auto border border-border-subtle bg-surface space-y-5 rounded-2xl shadow-md">
          <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
            Need one service or the whole system?
          </h3>
          <p className="text-text-secondary text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Start where the problem is. We'll help you build the rest.
          </p>
          <button
            onClick={openDaySchedule}
            className="btn-yellow px-6 py-2.5 text-xs sm:text-sm font-extrabold inline-flex items-center gap-2 cursor-pointer rounded-full"
          >
            <span>Talk to Our Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        
      </div>
    </section>
  );
}
