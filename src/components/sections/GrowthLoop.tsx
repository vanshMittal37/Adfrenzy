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
  Zap,
} from "lucide-react";

export function GrowthLoop() {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

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
        "Fatigue isn't a creative problem; it's a supply problem. We build a high-velocity production engine shipping tested video hooks, UGC, and static visuals on a weekly schedule before fatigue hits.",
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

  // Auto-advance timer (3.0 seconds per stage)
  useEffect(() => {
    if (!isPlaying || hoveredStep !== null) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, hoveredStep, steps.length]);

  // Subtle Mouse Parallax shift calculation (max 4px offset)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMouseOffset({ x: x * 4, y: y * 4 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setHoveredStep(null);
  };

  const currentDisplayIndex = hoveredStep !== null ? hoveredStep : activeStep;
  const current = steps[currentDisplayIndex];

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
      className="py-24 bg-background border-b border-border-subtle relative overflow-hidden select-none"
      id="growth-loop"
    >
      <div id="about" className="absolute -top-24 left-0" />

      {/* Background Motion & Ambient Radial Glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

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

        {/* Growth Loop Split Layout (Left: Animated Visualization | Right: Interactive Information Card) */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          
          {/* Left Column: Hexagonal / Circular Animated Engine (lg:col-span-7) */}
          <div className="lg:col-span-7 flex justify-center items-center relative min-h-[380px] sm:min-h-[480px]">
            <div 
              className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[500px] md:h-[500px] flex items-center justify-center transition-transform duration-700 ease-out"
              style={{
                transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`
              }}
            >
              
              {/* SVG Flow System, Orbiting Particles & Animated Arcs */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                style={{ overflow: "visible" }}
                viewBox="0 0 400 400"
              >
                <defs>
                  <marker
                    id="loop-arrow-accent"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--accent)" />
                  </marker>

                  <linearGradient id="activePathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="var(--accent)" stopOpacity="1" />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* Outer guide ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="145"
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth="1.5"
                  className="opacity-30"
                />

                {/* Rotating Outer Dot Ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="120"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  strokeDasharray="2 10"
                  className="opacity-40 motion-safe:animate-spin"
                  style={{ animationDuration: '28s', animationTimingFunction: 'linear' }}
                />

                {/* Animated Dash Path Segments with Flowing Dashes */}
                {steps.map((_, idx) => {
                  const startAngle = idx * 60 - 90 + 20;
                  const endAngle = (idx + 1) * 60 - 90 - 20;
                  const arcPath = getArcPath(startAngle, endAngle, 145);
                  const isArcActive = currentDisplayIndex === idx;

                  return (
                    <g key={idx}>
                      <path
                        d={arcPath}
                        fill="none"
                        stroke={isArcActive ? "url(#activePathGradient)" : "var(--accent)"}
                        strokeWidth={isArcActive ? "3.5" : "2"}
                        strokeDasharray={isArcActive ? "none" : "6 6"}
                        markerEnd="url(#loop-arrow-accent)"
                        className={`transition-all duration-500 ${isArcActive ? "opacity-100 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]" : "opacity-35"}`}
                      />
                      {/* Flowing animated dash line overlay */}
                      <path
                        d={arcPath}
                        fill="none"
                        stroke={isArcActive ? "#93C5FD" : "var(--accent)"}
                        strokeWidth={isArcActive ? "3" : "1.5"}
                        strokeDasharray="4 8"
                        style={{ animation: 'dash 3s linear infinite' }}
                        className="opacity-60"
                      />
                    </g>
                  );
                })}

                {/* Continuous Orbiting Data Particles around the path */}
                <g className="motion-safe:animate-spin" style={{ transformOrigin: '200px 200px', animationDuration: '14s', animationTimingFunction: 'linear' }}>
                  <circle cx="200" cy="55" r="4" fill="#60A5FA" className="drop-shadow-[0_0_10px_#3B82F6]" />
                  <circle cx="325.5" cy="272.5" r="3" fill="#93C5FD" className="opacity-80" />
                  <circle cx="74.5" cy="272.5" r="3" fill="#93C5FD" className="opacity-80" />
                </g>

                {/* Connecting Beam to Right Panel (Active Stage Data Beam) */}
                <path
                  d="M 330 200 L 410 200"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="opacity-60 hidden lg:block"
                />
                <circle cx="370" cy="200" r="3.5" fill="#60A5FA" className="hidden lg:block motion-safe:animate-ping opacity-80" style={{ animationDuration: '2s' }} />
              </svg>

              {/* Central Core Breathing Hub */}
              <div 
                className="absolute w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-surface/90 backdrop-blur-md border-2 border-accent/40 flex flex-col items-center justify-center p-3 text-center shadow-[0_0_35px_rgba(59,130,246,0.2)] z-10 transition-transform duration-700 hover:scale-[1.03]"
                style={{
                  animation: 'pulse 4s ease-in-out infinite'
                }}
              >
                <div className="absolute inset-0 rounded-full border border-accent/30 motion-safe:animate-ping opacity-25 pointer-events-none" style={{ animationDuration: '3.5s' }} />
                <Zap className="w-4 h-4 text-accent mb-1 animate-pulse" />
                <span className="text-text-secondary font-mono text-[8px] sm:text-[9.5px] tracking-widest uppercase font-semibold">
                  SPARKMEDIA
                </span>
                <span className="text-accent font-extrabold text-[11px] sm:text-[14px] tracking-wider uppercase block mt-0.5 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                  GROWTH LOOP
                </span>
                <span className="text-text-secondary font-mono text-[7px] sm:text-[9px] tracking-widest uppercase block mt-1">
                  ONE TEAM · NO SILOS
                </span>
              </div>

              {/* 6 Stage Hexagonal / Circular Buttons */}
              {steps.map((st, idx) => {
                const rad = (st.angle * Math.PI) / 180;
                const R_pct = 36;
                const x_pct = (R_pct * Math.cos(rad)).toFixed(3);
                const y_pct = (R_pct * Math.sin(rad)).toFixed(3);
                const isActive = currentDisplayIndex === idx;
                const IconComp = st.icon;

                // Subtle float offset for each card based on index
                const floatDelay = idx * 0.6;

                return (
                  <div
                    key={st.num}
                    style={{
                      left: `calc(50% + ${x_pct}%)`,
                      top: `calc(50% + ${y_pct}%)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    onMouseEnter={() => {
                      setHoveredStep(idx);
                      setIsPlaying(false);
                    }}
                    className="absolute z-20 flex flex-col items-center cursor-pointer group"
                    onClick={() => {
                      setActiveStep(idx);
                      setIsPlaying(false);
                    }}
                  >
                    <div
                      style={{
                        animation: `rise-up 6s ease-in-out infinite alternate`,
                        animationDelay: `${floatDelay}s`
                      }}
                      className={`relative w-16 h-16 sm:w-22 sm:h-22 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 shadow-xl border cursor-pointer backdrop-blur-md ${
                        isActive
                          ? "bg-accent text-white border-accent scale-110 ring-4 ring-accent/30 shadow-[0_0_30px_rgba(59,130,246,0.6)]"
                          : "bg-surface/90 text-text-primary border-border-subtle hover:border-accent/70 hover:scale-105"
                      }`}
                    >
                      {/* Active Pulse Ring */}
                      {isActive && (
                        <span className="absolute inset-0 rounded-2xl border border-accent motion-safe:animate-ping opacity-60 pointer-events-none" />
                      )}

                      <IconComp className={`w-4.5 h-4.5 sm:w-6 sm:h-6 transition-transform duration-300 ${isActive ? "text-white scale-110" : "text-accent group-hover:scale-110"}`} />
                      <span className={`text-[8.5px] sm:text-[10px] font-mono font-extrabold tracking-wider uppercase mt-1 ${isActive ? "text-white" : "text-text-primary"}`}>
                        {st.title}
                      </span>
                      <span className={`text-[7px] sm:text-[8px] font-mono font-medium ${isActive ? "text-white/80" : "text-text-secondary"}`}>
                        {st.num}
                      </span>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Right Column: Information Panel Card (lg:col-span-5) */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border-2 border-accent/40 bg-surface/90 shadow-2xl relative overflow-hidden transition-all duration-500">
              
              {/* Soft Ambient Inner Radial Glow */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-accent/15 rounded-full blur-2xl pointer-events-none" />

              {/* Status Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-accent font-extrabold tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  <span>STAGE {current.num} OF 06</span>
                </div>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-3 py-1 rounded-full bg-surface-secondary border border-border-subtle text-[10px] font-mono text-text-secondary hover:text-accent transition-colors flex items-center gap-1.5 cursor-pointer font-bold uppercase"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3 h-3 text-accent" />
                      <span>AUTO-ROTATING</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-accent" />
                      <span>PAUSED</span>
                    </>
                  )}
                </button>
              </div>

              {/* Animated Stage Content Transition */}
              <div key={currentDisplayIndex} className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-400">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight leading-tight">
                  {current.title}
                </h3>
                
                <div className="w-12 h-1 bg-accent rounded-full" />

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed pt-2">
                  {current.tagline}
                </p>

                <p className="text-text-secondary/90 text-xs sm:text-sm leading-relaxed">
                  {current.description}
                </p>

                {/* Key Deliverables Pill */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-text-secondary font-bold block mb-1.5">
                    DELIVERABLES:
                  </span>
                  <div className="text-xs font-mono text-accent font-semibold bg-accent/10 px-3.5 py-2 rounded-lg border border-accent/25 inline-block">
                    {current.deliverables}
                  </div>
                </div>

                {/* Execution Capabilities */}
                <div className="pt-3 space-y-2">
                  {current.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Dot Indicators */}
              <div className="mt-8 pt-6 border-t border-border-subtle flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveStep(i);
                        setIsPlaying(false);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentDisplayIndex === i 
                          ? "bg-accent w-6 shadow-[0_0_10px_rgba(59,130,246,0.8)]" 
                          : "bg-border-subtle hover:bg-accent/40 w-2"
                      }`}
                      aria-label={`Go to stage ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={openDaySchedule}
                  className="btn-yellow px-5 py-2 text-xs font-extrabold inline-flex items-center justify-center gap-1.5 rounded-full cursor-pointer"
                >
                  <span>Book a Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
