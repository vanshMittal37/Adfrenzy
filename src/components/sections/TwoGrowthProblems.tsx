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
            Two problems. One{" "}
            <span className="font-serif-italic font-normal italic text-accent">
              growth engine
            </span>
            .
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Most brands arrive with one of two core challenges. Both lead to the same compounding feedback loop. Start wherever you're stuck.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto items-stretch">
          
          {/* Card 1 */}
          <div className="glass-card p-5 sm:p-6 border-l-4 border-l-red-500 flex flex-col justify-between space-y-5 rounded-2xl shadow-md">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-mono text-red-500 font-extrabold">
                  OPTION A · MEDIA & SCALING
                </span>
                <AlertCircle className="w-4.5 h-4.5 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-text-primary leading-snug">
                "We've hit a ceiling."
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                You're increasing advertising spend, but revenue isn't growing at the same rate.
              </p>
              
              <div className="space-y-1.5 pt-2">
                <p className="text-[10px] font-mono uppercase text-text-secondary font-extrabold">Symptoms:</p>
                <ul className="space-y-1 text-[11px] sm:text-xs text-text-secondary">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>ROAS drops every time you scale budget</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>Rising Customer Acquisition Costs (CAC)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>Severe ad fatigue across Meta/Google accounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span>Poor conversion rates on existing store traffic</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={openDaySchedule}
              className="btn-yellow w-full py-2.5 text-xs sm:text-sm font-extrabold inline-flex items-center justify-center gap-2 cursor-pointer rounded-full"
            >
              <span>Fix My Growth</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-5 sm:p-6 border-l-4 border-l-accent flex flex-col justify-between space-y-5 rounded-2xl shadow-md">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-mono text-accent font-extrabold">
                  OPTION B · CREATIVE VOLUME
                </span>
                <Sparkles className="w-4.5 h-4.5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-text-primary leading-snug">
                "We need creative that performs."
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                Your media buying strategy is working, but you don't have enough creative assets to keep feeding it.
              </p>
              
              <div className="space-y-1.5 pt-2">
                <p className="text-[10px] font-mono uppercase text-text-secondary font-extrabold">Symptoms:</p>
                <ul className="space-y-1 text-[11px] sm:text-xs text-text-secondary">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Ad assets fatigue faster than production output</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Low volume of fresh UGC and video concepts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Content looks pretty but fails to convert</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>No structured hook testing framework</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={openDaySchedule}
              className="btn-yellow w-full py-2.5 text-xs sm:text-sm font-extrabold inline-flex items-center justify-center gap-2 cursor-pointer rounded-full"
            >
              <span>Build My Creative Engine</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
