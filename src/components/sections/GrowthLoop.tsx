"use client";

import { useState } from "react";
import { Sparkles, RefreshCw, BarChart3, Rocket, Target } from "lucide-react";

export function GrowthLoop() {
  const [activeStage, setActiveStage] = useState(0);

  const loopStages = [
    {
      num: "01",
      title: "CREATE",
      desc: "Produce high-velocity direct-response video ads, UGC, statics, and landers.",
      icon: Sparkles
    },
    {
      num: "02",
      title: "LAUNCH",
      desc: "Deploy campaigns live fast across Meta, Google, and TikTok paid acquisition.",
      icon: Rocket
    },
    {
      num: "03",
      title: "LEARN",
      desc: "Separate signal from noise in performance data, attribution, and CAC metrics.",
      icon: BarChart3
    },
    {
      num: "04",
      title: "OPTIMISE",
      desc: "Cut failing assets immediately and double down on winning creative hooks.",
      icon: RefreshCw
    },
    {
      num: "05",
      title: "SCALE",
      desc: "Compound winning ad creative and landing pages into profitable revenue growth.",
      icon: Target
    }
  ];

  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500]">
            OUR APPROACH
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            One team. One{" "}
            <span className="font-serif-italic font-normal italic text-slate-200">
              growth loop
            </span>
            .
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Creative creates the signal. Media generates the data. Data tells us what to improve. The winners get scaled.
          </p>
        </div>

        {/* Interactive Growth Loop Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Loop Diagram */}
          <div className="lg:col-span-7 flex justify-center py-6">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border-2 border-dashed border-[#FFE500]/30 flex items-center justify-center">
              {/* Center Core */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#151515] border border-[#FFE500]/40 flex flex-col items-center justify-center p-4 text-center shadow-2xl z-10">
                <span className="text-xs font-mono text-[#FFE500] uppercase font-bold tracking-wider">
                  SPARKMEDIA
                </span>
                <span className="text-sm font-extrabold text-white">
                  GROWTH LOOP
                </span>
                <span className="text-[10px] text-neutral-400 mt-1 font-mono">
                  ONE TEAM · NO SILOS
                </span>
              </div>

              {/* Node Buttons around Circle */}
              {loopStages.map((stage, idx) => {
                const angle = (idx * 360) / loopStages.length - 90;
                const radius = 135; // px radius for sm screens
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);
                const isSelected = activeStage === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStage(idx)}
                    style={{
                      transform: `translate(${x}px, ${y}px)`
                    }}
                    className={`absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full flex flex-col items-center justify-center text-xs font-bold transition-all duration-300 ${
                      isSelected
                        ? "bg-[#FFE500] text-black shadow-lg shadow-[#FFE500]/30 scale-110 border-2 border-white"
                        : "bg-[#151515] text-neutral-300 border border-white/20 hover:border-[#FFE500]"
                    }`}
                  >
                    <span>{stage.num}</span>
                    <span className="text-[9px] uppercase font-extrabold">{stage.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 border-l-4 border-l-[#FFE500] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#FFE500] font-bold">
                  STAGE {loopStages[activeStage].num} OF 05
                </span>
                <span className="text-xs font-mono text-neutral-500">CLICK STAGES TO EXPLORE</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white flex items-center gap-3">
                <span>{loopStages[activeStage].title}</span>
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {loopStages[activeStage].desc}
              </p>
              <div className="pt-4 flex gap-2">
                {loopStages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStage(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeStage === idx ? "w-8 bg-[#FFE500]" : "w-3 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
