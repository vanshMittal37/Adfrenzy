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

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {servicesData.map((svc) => {
            const Icon = iconMap[svc.icon] || Target;
            return (
              <div
                key={svc.id}
                className="glass-card p-5 flex flex-col justify-between group hover:border-accent/60 transition-all duration-300 shadow-sm rounded-2xl"
              >
                <div className="overflow-hidden flex flex-col justify-start h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-105 group-hover:shadow-[0_0_12px_var(--accent-soft)] transition-all duration-300">
                    <Icon className="w-5 h-5 text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-text-primary mb-1.5 group-hover:text-accent transition-colors leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-semibold text-accent mb-2">
                    "{svc.tagline}"
                  </p>
                  <p className="text-text-secondary text-[11px] sm:text-xs leading-relaxed line-clamp-3">
                    {svc.description}
                  </p>
                </div>

                <div className="border-t border-border-subtle pt-3 mt-2">
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

        {/* Service CTA Box (Need one service or the whole system?) */}
        <div className="glass-card p-6 md:p-10 text-center max-w-3xl mx-auto border-accent/20 space-y-5 rounded-2xl shadow-md">
          <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
            Need one service or the whole system?
          </h3>
          <p className="text-text-secondary text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Start where the problem is. We'll help you build the rest.
          </p>
          <button
            onClick={openCalendly}
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
