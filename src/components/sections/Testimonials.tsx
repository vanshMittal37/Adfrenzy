"use client";

import { useState } from "react";
import Image from "next/image";
import { getPublicTestimonials, Testimonial } from "@/data/testimonials";
import { Quote } from "lucide-react";

function TestimonialAvatar({ t }: { t: Testimonial }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="testimonial-logo-avatar relative shrink-0 w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center p-1.5 shadow-sm">
      {!imgError ? (
        <Image
          src={t.logo}
          alt={`${t.brand} logo`}
          width={40}
          height={40}
          className="w-full h-full object-contain"
          onError={() => setImgError(true)}
          unoptimized={t.logo.startsWith("http")}
        />
      ) : (
        <span className="font-mono text-xs font-extrabold text-accent">
          {t.brand.substring(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  );
}

function FeaturedTestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="glass-card p-8 sm:p-10 flex flex-col justify-between w-full border-t-2 border-t-accent bg-surface border border-border-subtle rounded-3xl shadow-xl relative overflow-hidden group hover:border-accent/50 transition-all duration-300">
      <div className="space-y-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TestimonialAvatar t={t} />
            <div>
              <div className="font-extrabold text-text-primary text-base sm:text-lg">
                {t.founder}
              </div>
              <div className="text-xs text-text-secondary font-mono">
                {t.role}, <span className="text-accent font-semibold">{t.brand}</span> {t.location && `· ${t.location}`}
              </div>
            </div>
          </div>

          {t.metricsHighlight && (
            <span className="bg-accent/10 border border-accent/30 text-accent px-3 py-1 rounded-full text-xs font-mono font-bold">
              {t.metricsHighlight}
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <Quote className="w-8 h-8 text-accent/30 flex-shrink-0 mt-1" />
          <p className="text-text-primary text-lg sm:text-xl leading-relaxed italic font-medium">
            &quot;{t.quote}&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

function StandardTestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="glass-card p-6 flex flex-col justify-between w-full border-t-2 border-t-accent/60 bg-surface border border-border-subtle rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
      <div className="space-y-4 mb-6">
        <div className="flex gap-2.5">
          <Quote className="w-5 h-5 text-accent/40 flex-shrink-0 mt-0.5" />
          <p className="text-text-secondary text-sm leading-relaxed italic font-medium">
            &quot;{t.quote}&quot;
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-border-subtle flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <TestimonialAvatar t={t} />
          <div>
            <div className="font-bold text-text-primary text-xs sm:text-sm">
              {t.founder}
            </div>
            <div className="text-[11px] text-text-secondary font-mono">
              {t.role}, <span className="text-accent">{t.brand}</span> {t.location && `· ${t.location}`}
            </div>
          </div>
        </div>

        {t.metricsHighlight && (
          <span className="bg-accent/10 border border-accent/20 text-accent px-2 py-0.5 rounded text-[10px] font-mono font-bold shrink-0">
            {t.metricsHighlight}
          </span>
        )}
      </div>
    </div>
  );
}

export function Testimonials() {
  const testimonials = getPublicTestimonials();
  const featured = testimonials.find((t) => t.brand === "Wine Chateau") || testimonials[0];
  const otherTestimonials = testimonials.filter((t) => t.id !== featured?.id);

  return (
    <section className="py-24 bg-background border-b border-border-subtle overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            WHAT FOUNDERS SAY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            Six founders. Same story.
          </h2>
        </div>

        {/* Featured Testimonial Hero Card */}
        {featured && (
          <div className="max-w-4xl mx-auto mb-8">
            <FeaturedTestimonialCard t={featured} />
          </div>
        )}

        {/* Remaining 5 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {otherTestimonials.map((t) => (
            <StandardTestimonialCard key={t.id} t={t} />
          ))}
        </div>

      </div>
    </section>
  );
}
