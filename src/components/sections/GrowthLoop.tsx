"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  Pause,
  ChevronRight,
  ChevronLeft,
  Search,
  Sparkles,
  Rocket,
  BarChart2,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

export function GrowthLoop() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const openDaySchedule = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-dayschedule"));
    }
  };

  const steps = [
    {
      num: "01",
      title: "STRATEGY",
      icon: Search,
      tagline: "Written growth thesis mapped to your unit economics",
      description:
        "A 499 rupee face wash and an 18,000 rupee bridal set do not get bought the same way. We engineer separate customer journeys for cold, warm, and returning buyers with custom landers.",
      highlights: [
        "Funnel mapped to your real consideration cycle",
        "Separate journeys for cold, warm and returning buyers",
        "Offer structure & AOV bump architecture",
        "Unit economics & contribution margin blueprint",
      ],
      deliverables: "90-Day Growth Thesis · Media Plan",
      angle: -90,
    },
    {
      num: "02",
      title: "CREATIVE",
      icon: Sparkles,
      tagline: "High-velocity direct response creative & UGC pipeline",
      description:
        "Fatigue isn&apos;t a creative problem; it&apos;s a supply problem. We build a high-velocity production engine shipping tested video hooks, UGC, and static visuals on a weekly schedule before fatigue hits.",
      highlights: [
        "User Generated Content (UGC) production engine",
        "Weekly hook testing & deployment schedule",
        "Direct response video ads, statics & carousels",
        "Fatigue prevention: winners refreshed as variants",
      ],
      deliverables: "Weekly Creative Drop · Tested Hook Bank",
      angle: -30,
    },
    {
      num: "03",
      title: "LAUNCH",
      icon: Rocket,
      tagline: "Clean campaign structure & precision tracking deployment",
      description:
        "We deploy controlled campaign structures with clean attribution signals. Budgets are scaled in disciplined steps without throwing algorithms into chaotic learning phases.",
      highlights: [
        "Custom Shopify & lander PDP build deployment",
        "Server-side CAPI & Pixel attribution setup",
        "Controlled step budget scaling framework",
        "No single ad allowed to carry over 30% account load",
      ],
      deliverables: "Live Campaign Architecture · Pixel Verification",
      angle: 30,
    },
    {
      num: "04",
      title: "LEARN",
      icon: BarChart2,
      tagline: "Weekly decision reviews based on clean P&L signals",
      description:
        "Performance swings for fixable reasons. We review live data weekly, measuring blended ROAS, CAC, and contribution margin to make clean decisions on scaling winners and pausing fatigued ads.",
      highlights: [
        "Real-time attribution & unit margin tracking",
        "Weekly executive decision & action syncs",
        "Creative performance & hook conversion analytics",
        "Budget re-allocation based on net contribution margin",
      ],
      deliverables: "Weekly P&L Signal Report · Action Plan",
      angle: 90,
    },
    {
      num: "05",
      title: "OPTIMISE",
      icon: RefreshCw,
      tagline: "Removing friction & boosting landing page conversion rate",
      description:
        "Before paying more for traffic, we get more revenue from existing clicks. We rebuild PDPs, landers, and checkout flows, split-testing variants to maximize conversion rate.",
      highlights: [
        "Dedicated high-speed conversion landers",
        "Product Detail Page (PDP) friction removal",
        "A/B split testing & variant deployment",
        "Cart & checkout conversion optimization",
      ],
      deliverables: "Figma UI Kit · High-Speed Custom Landers",
      angle: 150,
    },
    {
      num: "06",
      title: "SCALE",
      icon: TrendingUp,
      tagline: "Compound profits into scalable acquisition channels",
      description:
        "Once the loop runs, growth compounds. Winning creatives are scaled into secondary channels (Search, Shopping, YouTube, Demand Gen) to build a multi-channel growth flywheel.",
      highlights: [
        "Omnichannel expansion (Meta + Google + YouTube)",
        "High-converting lander split-test scaling",
        "Blended CAC reduction through organic equity",
        "Predictable monthly revenue compounding",
      ],
      deliverables: "Omnichannel Scale Blueprint · Growth Model",
      angle: 210,
    },
  ];

  // Auto-advance timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const current = steps[activeStep];

  // Helper for arc paths in SVG
  const getArcPath = (startAngle: number, endAngle: number, radius: number) => {
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const x1 = (200 + radius * Math.cos(startRad)).toFixed(3);
    const y1 = (200 + radius * Math.sin(startRad)).toFixed(3);
    const x2 = (200 + radius * Math.cos(endRad)).toFixed(3);
    const y2 = (200 + radius * Math.sin(endRad)).toFixed(3);
    return `M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`;
  };

  return (
    <section
      className="py-24 bg-background border-b border-border-subtle relative overflow-hidden"
      id="growth-loop"
    >
      <div id="about" className="absolute -top-24 left-0" />

      {/* Subtle Glow Backdrop */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            OUR APPROACH
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            One team. One{" "}
            <span className="font-serif-italic font-normal italic text-accent underline decoration-accent/30 decoration-wavy decoration-2">
              growth loop
            </span>
            .
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Creative creates the signal. Media generates the data. Data tells us what to improve. The winners get scaled.
          </p>
        </div>

        {/* Circular Growth Engine Visualization */}
        <div className="flex justify-center mb-16 relative">
          <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[500px] md:h-[500px] flex items-center justify-center">
            
            {/* SVG Connecting Ring & Clockwise Arrows */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              style={{ overflow: "visible" }}
              viewBox="0 0 400 400"
            >
              <defs>
                <marker
                  id="loop-arrow"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--accent)" />
                </marker>
              </defs>

              {/* Dotted outer ring */}
              <circle
                cx="200"
                cy="200"
                r="145"
                fill="none"
                stroke="var(--border)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />

              {/* Arc connectors with arrows between 6 nodes */}
              {steps.map((_, idx) => {
                const startAngle = idx * 60 - 90 + 20;
                const endAngle = (idx + 1) * 60 - 90 - 20;
                const arcPath = getArcPath(startAngle, endAngle, 145);
                const isArcActive = activeStep === idx;

                return (
                  <path
                    key={idx}
                    d={arcPath}
                    fill="none"
                    stroke={isArcActive ? "var(--accent)" : "var(--border)"}
                    strokeWidth={isArcActive ? "3" : "1.5"}
                    strokeDasharray={isArcActive ? "6 4" : "4 4"}
                    markerEnd="url(#loop-arrow)"
                    className="transition-all duration-500"
                  />
                );
              })}
            </svg>

            {/* Central Core Circle */}
            <div className="absolute w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-surface border-2 border-accent/30 flex flex-col items-center justify-center p-3 text-center shadow-2xl z-10">
              <span className="text-text-secondary font-mono text-[8px] sm:text-[10px] tracking-widest uppercase">
                ADFRENZY MEDIA
              </span>
              <span className="text-accent font-extrabold text-[11px] sm:text-[14px] tracking-wider uppercase block mt-1">
                GROWTH LOOP
              </span>
              <span className="text-text-secondary font-mono text-[7px] sm:text-[9px] tracking-widest uppercase block mt-0.5">
                ONE TEAM · NO SILOS
              </span>
            </div>

            {/* 6 Circular Orbiting Node Buttons */}
            {steps.map((st, idx) => {
              const rad = (st.angle * Math.PI) / 180;
              const R_pct = 36; // radius percentage from center
              const x_pct = (R_pct * Math.cos(rad)).toFixed(3);
              const y_pct = (R_pct * Math.sin(rad)).toFixed(3);
              const isActive = activeStep === idx;
              const IconComp = st.icon;

              return (
                <div
                  key={st.num}
                  style={{
                    left: `calc(50% + ${x_pct}%)`,
                    top: `calc(50% + ${y_pct}%)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="absolute z-20 flex flex-col items-center group cursor-pointer"
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                >
                  <button
                    className={`relative w-14 h-14 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-xl border cursor-pointer ${
                      isActive
                        ? "bg-accent text-btn-text-primary border-accent scale-110 shadow-[0_0_30px_rgba(255,200,0,0.55)]"
                        : "bg-surface text-text-primary border-border-subtle hover:border-accent/60 hover:scale-105"
                    }`}
                  >
                    <IconComp className={`w-4 h-4 sm:w-6 sm:h-6 ${isActive ? "text-btn-text-primary" : "text-accent"}`} />
                    <span className={`text-[8px] sm:text-[10px] font-mono font-extrabold tracking-wider uppercase mt-1 ${isActive ? "text-btn-text-primary" : "text-text-primary"}`}>
                      {st.title}
                    </span>

                    {/* Downward pointer triangle on active node */}
                    {isActive && (
                      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[10px] border-t-accent drop-shadow-md animate-bounce" />
                    )}
                  </button>
                </div>
              );
            })}

          </div>
        </div>

        {/* Stage Status & Controls Bar */}
        <div className="max-w-4xl mx-auto mb-4 flex items-center justify-between px-2 text-xs font-mono">
          <div className="flex items-center gap-2 text-accent font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span>STAGE 0{activeStep + 1} OF 06 — {current.title}</span>
          </div>

          <div className="flex items-center gap-3 text-text-secondary">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="hover:text-accent transition-colors flex items-center gap-1.5 cursor-pointer font-semibold"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-accent" />
                  <span>AUTO-ROTATING</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-accent" />
                  <span>PAUSED</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Stage Detail Card (Below Circle) */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Glass Card for Stage Details */}
          <div className="glass-card p-6 sm:p-10 rounded-2xl border-2 border-accent/40 bg-surface shadow-2xl relative overflow-hidden transition-all duration-300">
            {/* Ambient Accent Radial Glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Tagline & Description */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-accent text-btn-text-primary text-xs font-mono font-extrabold uppercase">
                    STAGE 0{activeStep + 1}
                  </span>
                  <span className="text-xs font-mono uppercase text-accent font-bold tracking-widest">
                    {current.title}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight leading-tight">
                  {current.tagline}
                </h3>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {current.description}
                </p>

                <div className="pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-text-secondary font-bold block mb-1">
                    KEY DELIVERABLES:
                  </span>
                  <div className="text-xs font-mono text-accent font-semibold bg-accent/10 px-3.5 py-2 rounded-lg border border-accent/20 inline-block">
                    {current.deliverables}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Stage Capabilities */}
              <div className="lg:col-span-5 bg-surface-secondary/80 p-6 rounded-xl border border-border-subtle space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                  <span className="text-xs font-mono uppercase font-bold text-text-primary tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span>Stage Execution</span>
                  </span>
                  <span className="text-[10px] font-mono text-text-secondary">
                    {activeStep + 1} / 6
                  </span>
                </div>

                <div className="space-y-3">
                  {current.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary">
                      <CheckCircle2 className="w-4.5 h-4.5 text-accent shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Controls & Action Callout */}
            <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
                    setIsPlaying(false);
                  }}
                  className="p-2 rounded-lg bg-surface-secondary border border-border-subtle text-text-primary hover:border-accent/40 transition-colors cursor-pointer"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-secondary rounded-lg border border-border-subtle text-xs font-mono text-text-secondary">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveStep(i);
                        setIsPlaying(false);
                      }}
                      className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                        activeStep === i ? "bg-accent w-4" : "bg-text-secondary/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => {
                    setActiveStep((prev) => (prev + 1) % steps.length);
                    setIsPlaying(false);
                  }}
                  className="p-2 rounded-lg bg-surface-secondary border border-border-subtle text-text-primary hover:border-accent/40 transition-colors cursor-pointer"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div>
                <button
                  onClick={openDaySchedule}
                  className="btn-yellow px-6 py-2.5 text-xs sm:text-sm font-extrabold inline-flex items-center justify-center gap-2 rounded-full cursor-pointer"
                >
                  <span>Book a Growth Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
