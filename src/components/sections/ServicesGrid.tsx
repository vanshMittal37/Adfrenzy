"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, Video, Layout, Zap, Target, LucideIcon } from "lucide-react";
import { servicesData } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Video,
  Layout,
  Zap,
  Target,
};

export function ServicesGrid() {
  const openDaySchedule = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-dayschedule"));
    }
  };

  return (
    <section className="py-24 bg-background border-b border-border-subtle relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            Six things. One{" "}
            <span className="font-serif-italic font-normal italic text-accent">
              system
            </span>
            .
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            You can start with one. Most brands end up using four, because once the loop runs it&apos;s hard to unsee.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesData.map((svc) => {
            const IconComponent = iconMap[svc.icon] || Target;
            return (
              <div
                key={svc.id}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-border-subtle flex flex-col justify-between space-y-6 group hover:border-accent/40 transition-all duration-300 shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="text-xs font-mono text-neutral-400 group-hover:text-accent flex items-center gap-1 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <Link href={`/services/${svc.slug}`} className="block space-y-2">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                      {svc.description}
                    </p>
                  </Link>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border-subtle">
                  {svc.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-mono bg-surface-secondary border border-border-subtle text-text-secondary font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="glass-card p-8 rounded-2xl border border-accent/30 text-center max-w-2xl mx-auto space-y-4">
          <p className="text-base sm:text-lg font-bold text-text-primary">
            Need one thing or the whole system? Start where the problem is. We&apos;ll build the rest.
          </p>
          <div>
            <button
              onClick={openDaySchedule}
              className="btn-yellow px-6 py-3 text-xs sm:text-sm font-extrabold inline-flex items-center justify-center gap-2 rounded-full cursor-pointer"
            >
              <span>Talk to us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

