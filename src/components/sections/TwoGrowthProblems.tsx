"use client";

import { ArrowRight, AlertCircle, Sparkles } from "lucide-react";

export function TwoGrowthProblems() {
  const openDaySchedule = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-dayschedule"));
    }
  };

  return (
    <section className="py-24 bg-background border-b border-border-subtle text-text-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            TWO WAYS IN
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            Most brands come to us stuck in one of{" "}
            <span className="font-serif-italic font-normal italic text-accent">
              two places
            </span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Both roads lead to the same engine. Start where it actually hurts.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Card A */}
          <div className="glass-card p-6 sm:p-8 border-l-4 border-l-red-500 flex flex-col justify-between space-y-6 rounded-2xl shadow-md">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-red-500 font-extrabold tracking-wider uppercase">
                  CARD A
                </span>
                <AlertCircle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-2xl font-extrabold text-text-primary leading-snug">
                "We've hit a ceiling."
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                You're spending. The revenue curve has gone flat.
              </p>
              
              <div className="space-y-2 pt-2 border-t border-border-subtle">
                <p className="text-xs font-mono uppercase text-text-primary font-bold">This is you if:</p>
                <ul className="space-y-1.5 text-xs text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                    <span>ROAS falls every time you push the budget</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                    <span>Your team can't think past the ad account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                    <span>You've changed agencies twice and got the same graph</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 text-xs font-mono text-accent">
                <span className="font-bold text-text-primary uppercase">You leave with:</span> a profit-first growth system, not a bigger ad account.
              </div>
            </div>

            <button
              onClick={openDaySchedule}
              className="btn-yellow w-full py-3 text-xs sm:text-sm font-extrabold inline-flex items-center justify-center gap-2 cursor-pointer rounded-full"
            >
              <span>Come in for growth →</span>
            </button>
          </div>

          {/* Card B */}
          <div className="glass-card p-6 sm:p-8 border-l-4 border-l-accent flex flex-col justify-between space-y-6 rounded-2xl shadow-md">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-accent font-extrabold tracking-wider uppercase">
                  CARD B
                </span>
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-2xl font-extrabold text-text-primary leading-snug">
                "We're buying traffic we can't convert."
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                The media is fine. The site, the pages and the creative can't carry it.
              </p>
              
              <div className="space-y-2 pt-2 border-t border-border-subtle">
                <p className="text-xs font-mono uppercase text-text-primary font-bold">This is you if:</p>
                <ul className="space-y-1.5 text-xs text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span>Ad CTR is healthy but the store converts under 1%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span>Your site was built for looks, not for buying</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span>Organic brings nothing and nobody knows why</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 text-xs font-mono text-accent">
                <span className="font-bold text-text-primary uppercase">You leave with:</span> a store, a page set and a creative engine built to convert.
              </div>
            </div>

            <button
              onClick={openDaySchedule}
              className="btn-yellow w-full py-3 text-xs sm:text-sm font-extrabold inline-flex items-center justify-center gap-2 cursor-pointer rounded-full"
            >
              <span>Come in for conversion →</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
