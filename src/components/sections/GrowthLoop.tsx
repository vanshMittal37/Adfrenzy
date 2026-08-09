"use client";

import { useState, useEffect } from "react";
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

  // Auto-rotate every 3 seconds, reset timer if activeStage is changed manually
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % loopStages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [activeStage]);

  // Helper to generate coordinates for flow arcs
  const getArcPath = (startAngle: number, endAngle: number, radius: number) => {
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const x1 = (192 + radius * Math.cos(startRad)).toFixed(3);
    const y1 = (192 + radius * Math.sin(startRad)).toFixed(3);
    const x2 = (192 + radius * Math.cos(endRad)).toFixed(3);
    const y2 = (192 + radius * Math.sin(endRad)).toFixed(3);
    return `M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`;
  };

  // Active stage coordinates for the dynamic connector line
  const activeAngle = (activeStage * 360) / loopStages.length - 90;
  const activeRad = (activeAngle * Math.PI) / 180;
  const activeNodeX = 192 + 135 * Math.cos(activeRad);
  const activeNodeY = 192 + 135 * Math.sin(activeRad);

  return (
    <section className="py-24 bg-background border-b border-border-subtle relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent">
            OUR APPROACH
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            One team. One{" "}
            <span className="font-serif-italic font-normal italic text-accent">
              growth loop
            </span>
            .
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Creative creates the signal. Media generates the data. Data tells us what to improve. The winners get scaled.
          </p>
        </div>

        {/* Interactive Growth Loop Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Loop Diagram */}
          <div className="lg:col-span-7 flex justify-center py-6 relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-dashed border-accent/20 flex items-center justify-center">
              
              {/* Dynamic SVG Flow & Connector Overlays */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }} viewBox="0 0 384 384">
                <defs>
                  <marker
                    id="arrow"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--accent)" />
                  </marker>
                  <marker
                    id="connector-arrow"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="8"
                    markerHeight="8"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--accent)" />
                  </marker>
                </defs>

                {/* Clockwise flow dotted arcs connecting the stages */}
                {loopStages.map((_, idx) => {
                  const startAngle = (idx * 360) / loopStages.length - 90 + 24;
                  const endAngle = ((idx + 1) * 360) / loopStages.length - 90 - 24;
                  const arcPath = getArcPath(startAngle, endAngle, 135);
                  return (
                    <path
                      key={idx}
                      d={arcPath}
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      markerEnd="url(#arrow)"
                      className="opacity-50"
                    />
                  );
                })}

                {/* Desktop: Animated Dotted Connector Line pointing from active node to the card (extending past the circle to x=480) */}
                <path
                  d={`M ${activeNodeX.toFixed(3)} ${activeNodeY.toFixed(3)} C ${((activeNodeX + 480) / 2).toFixed(3)} ${activeNodeY.toFixed(3)}, ${((activeNodeX + 480) / 2).toFixed(3)} 192, 480 192`}
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  markerEnd="url(#connector-arrow)"
                  className="hidden lg:block opacity-90 transition-all duration-500 ease-in-out"
                  style={{
                    strokeDashoffset: 0,
                    animation: "dash 1.5s linear infinite"
                  }}
                />

                {/* Mobile/Tablet: Animated Dotted Connector Line pointing from active node downwards to the card (extending past the circle to y=420) */}
                <path
                  d={`M ${activeNodeX.toFixed(3)} ${activeNodeY.toFixed(3)} C ${activeNodeX.toFixed(3)} ${((activeNodeY + 420) / 2).toFixed(3)}, 192 ${((activeNodeY + 420) / 2).toFixed(3)}, 192 420`}
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  markerEnd="url(#connector-arrow)"
                  className="block lg:hidden opacity-90 transition-all duration-500 ease-in-out"
                  style={{
                    strokeDashoffset: 0,
                    animation: "dash 1.5s linear infinite"
                  }}
                />
              </svg>

              {/* Center Core */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-surface border border-accent/40 flex flex-col items-center justify-center p-4 text-center shadow-2xl z-10">
                <span className="text-xs font-mono text-accent uppercase font-bold tracking-wider">
                  SPARKMEDIA
                </span>
                <span className="text-sm font-extrabold text-text-primary">
                  GROWTH LOOP
                </span>
                <span className="text-[10px] text-text-secondary mt-1 font-mono">
                  ONE TEAM · NO SILOS
                </span>
              </div>

              {/* Node Buttons around Circle */}
              {loopStages.map((stage, idx) => {
                const angle = (idx * 360) / loopStages.length - 90;
                const radius = 135; // px radius for sm screens
                const x = (radius * Math.cos((angle * Math.PI) / 180)).toFixed(3);
                const y = (radius * Math.sin((angle * Math.PI) / 180)).toFixed(3);
                const isSelected = activeStage === idx;
                const StageIcon = stage.icon;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStage(idx)}
                    style={{
                      transform: `translate(${x}px, ${y}px)`
                    }}
                    className={`absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full flex flex-col items-center justify-center text-[10px] sm:text-xs font-bold transition-all duration-300 z-20 ${
                      isSelected
                        ? "bg-accent text-[var(--btn-text-primary)] shadow-lg shadow-accent/30 scale-110 border-2 border-surface"
                        : "bg-surface text-text-secondary border border-border-subtle hover:border-accent"
                    }`}
                  >
                    <StageIcon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mb-0.5 ${isSelected ? "text-[var(--btn-text-primary)]" : "text-accent"}`} />
                    <span className="text-[8px] uppercase font-extrabold">{stage.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 border-l-4 border-l-accent space-y-4 relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-accent font-bold">
                  STAGE {loopStages[activeStage].num} OF 05
                </span>
                <span className="text-[10px] font-mono text-text-secondary">AUTO-ROTATING</span>
              </div>
              <h3 className="text-2xl font-extrabold text-text-primary flex items-center gap-3">
                <span>{loopStages[activeStage].title}</span>
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed min-h-[60px]">
                {loopStages[activeStage].desc}
              </p>
              <div className="pt-4 flex gap-2">
                {loopStages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStage(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeStage === idx ? "w-8 bg-accent" : "w-3 bg-border-subtle"
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
