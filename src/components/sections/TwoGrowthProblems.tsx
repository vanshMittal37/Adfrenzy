"use client";

import { ArrowRight, AlertCircle, Sparkles } from "lucide-react";

export function TwoGrowthProblems() {
  const openCalendly = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-calendly"));
    }
  };

  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500]">
            TWO WAYS IN
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Two problems. One{" "}
            <span className="font-serif-italic font-normal italic text-slate-200">
              growth engine
            </span>
            .
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Most brands arrive with one of two core challenges. Both lead to the same compounding feedback loop. Start wherever you're stuck.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="glass-card p-8 sm:p-10 border-l-4 border-l-[#FF3B30] flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#FF3B30] font-bold">
                  OPTION A · MEDIA & SCALING
                </span>
                <AlertCircle className="w-5 h-5 text-[#FF3B30]" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                "We've hit a ceiling."
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                You're increasing advertising spend, but revenue isn't growing at the same rate.
              </p>
              <div className="space-y-2 pt-2">
                <p className="text-xs font-mono uppercase text-neutral-400 font-bold">Symptoms:</p>
                <ul className="space-y-1.5 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]" />
                    <span>ROAS drops every time you scale budget</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]" />
                    <span>Rising Customer Acquisition Costs (CAC)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]" />
                    <span>Severe ad fatigue across Meta/Google accounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]" />
                    <span>Poor conversion rates on existing store traffic</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={openCalendly}
              className="btn-yellow w-full py-3.5 text-sm font-bold inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Fix My Growth</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-8 sm:p-10 border-l-4 border-l-[#FFE500] flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#FFE500] font-bold">
                  OPTION B · CREATIVE VOLUME
                </span>
                <Sparkles className="w-5 h-5 text-[#FFE500]" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                "We need creative that performs."
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Your media buying strategy is working, but you don't have enough creative assets to keep feeding it.
              </p>
              <div className="space-y-2 pt-2">
                <p className="text-xs font-mono uppercase text-neutral-400 font-bold">Symptoms:</p>
                <ul className="space-y-1.5 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFE500]" />
                    <span>Ad assets fatigue faster than production output</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFE500]" />
                    <span>Low volume of fresh UGC and video concepts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFE500]" />
                    <span>Content looks pretty but fails to convert</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFE500]" />
                    <span>No structured hook testing framework</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={openCalendly}
              className="btn-yellow w-full py-3.5 text-sm font-bold inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Build My Creative Engine</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
