"use client";

import { useState, useEffect } from "react";
import {
  Rocket,
  BarChart2,
  RefreshCw,
  TrendingUp,
  Zap,
} from "lucide-react";

// Custom Chess Knight Icon matching 01 STRATEGY in reference image
function ChessKnightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 19 21 H 5 C 5 19 7 18 8 18 C 9 18 10 16.5 10 15 V 11.5 C 10 10 11 9 12 9 C 13 9 14 8 14 7 C 14 6 13 5 12 5 H 9.5 C 8 5 7 6.5 7 8 V 10" />
      <circle cx="10.5" cy="7.5" r="0.8" fill="currentColor" />
      <path d="M 19 21 V 17 C 19 14 17.5 12.5 15.5 12" />
    </svg>
  );
}

// Custom Magic Wand Icon matching 02 CREATIVE in reference image
function MagicWandIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 4 5 5" />
      <path d="m2 22 10.5-10.5" />
      <path d="M19 11 11 19" />
      <path d="M4 2 L6 6 L2 4" />
      <path d="M18 2 L20 6 L16 4" />
    </svg>
  );
}

export function GrowthLoop() {
  const [activeStep, setActiveStep] = useState(5); // Default active stage: 06 SCALE
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = [
    {
      num: "01",
      title: "STRATEGY",
      icon: ChessKnightIcon,
      tagline: "Written growth thesis mapped to your unit economics and customer acquisition targets.",
      description:
        "A 499 rupee face wash and an 18,000 rupee bridal set do not get bought the same way. We engineer separate customer journeys for cold, warm, and returning buyers.",
      angle: -90, // Top (12 o'clock)
    },
    {
      num: "02",
      title: "CREATIVE",
      icon: MagicWandIcon,
      tagline: "High-velocity direct response creative & UGC pipeline tailored for conversions.",
      description:
        "Fatigue isn't a creative problem; it's a supply problem. We build a high-velocity production engine shipping tested video hooks, UGC, and static visuals on a weekly schedule.",
      angle: -30, // Top Right (2 o'clock)
    },
    {
      num: "03",
      title: "LAUNCH",
      icon: Rocket,
      tagline: "Clean campaign structure & precision tracking deployment across ad channels.",
      description:
        "We deploy controlled campaign structures with clean attribution signals. Budgets are scaled in disciplined steps without throwing algorithms into chaotic learning phases.",
      angle: 30, // Bottom Right (4 o'clock)
    },
    {
      num: "04",
      title: "LEARN",
      icon: BarChart2,
      tagline: "Weekly decision reviews based on clean P&L signals and blended ROAS.",
      description:
        "Performance swings for fixable reasons. We review live data weekly, measuring blended ROAS, CAC, and contribution margin to make clean scaling decisions.",
      angle: 90, // Bottom (6 o'clock)
    },
    {
      num: "05",
      title: "OPTIMISE",
      icon: RefreshCw,
      tagline: "Removing friction & boosting landing page conversion rate continuously.",
      description:
        "Before paying more for traffic, we get more revenue from existing clicks. We rebuild PDPs, landers, and checkout flows, split-testing variants to maximize CR.",
      angle: 150, // Bottom Left (8 o'clock)
    },
    {
      num: "06",
      title: "SCALE",
      icon: TrendingUp,
      tagline: "Scale media budget and compound winning concepts for profitable growth.",
      description:
        "Once the loop runs, growth compounds. Winning creatives are scaled into secondary channels to build a multi-channel growth flywheel.",
      angle: 210, // Top Left (10 o'clock)
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

  const currentDisplayIndex = hoveredStep !== null ? hoveredStep : activeStep;
  const current = steps[currentDisplayIndex];

  // Helper for SVG arc paths
  const getArcPath = (startAngle: number, endAngle: number, radius: number, cx = 250, cy = 250) => {
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const x1 = (cx + radius * Math.cos(startRad)).toFixed(2);
    const y1 = (cy + radius * Math.sin(startRad)).toFixed(2);
    const x2 = (cx + radius * Math.cos(endRad)).toFixed(2);
    const y2 = (cy + radius * Math.sin(endRad)).toFixed(2);
    return `M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`;
  };

  return (
    <section
      className="py-24 bg-[#06080e] text-white relative overflow-hidden select-none border-b border-blue-950/40 transition-colors duration-500"
      id="growth-loop"
    >
      <div id="about" className="absolute -top-24 left-0" />

      {/* Subtle Atmospheric Radial Backplate Glows */}
      <div className="growth-ambient-glow-1 absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18)_0%,rgba(6,8,14,0)_70%)] blur-[120px] pointer-events-none z-0 transition-all duration-500" />
      <div className="growth-ambient-glow-2 absolute right-[-5%] bottom-[-5%] w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.12)_0%,rgba(6,8,14,0)_70%)] blur-[100px] pointer-events-none z-0 transition-all duration-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Growth Loop Split Layout (Left: Animated Visualization | Right: Information Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[580px]">
          
          {/* Left Column: Hexagonal Interactive Wheel (lg:col-span-7) */}
          <div className="lg:col-span-7 flex justify-center items-center relative min-h-[420px] sm:min-h-[520px]">
            <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[540px] md:h-[540px] flex items-center justify-center">
              
              {/* Main SVG Orbital System & Horizontal Beam */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                style={{ overflow: "visible" }}
                viewBox="0 0 500 500"
              >
                <defs>
                  {/* Arrowhead marker for orbital arrows */}
                  <marker
                    id="blue-orbit-arrow"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#3b82f6" filter="drop-shadow(0 0 6px rgba(59,130,246,0.35))" />
                  </marker>

                  {/* Beam arrow marker pointing right to card */}
                  <marker
                    id="blue-beam-arrow"
                    viewBox="0 0 12 12"
                    refX="10"
                    refY="6"
                    markerWidth="10"
                    markerHeight="10"
                    orient="auto"
                  >
                    <path d="M 0 1 L 11 6 L 0 11 Z" fill="#3b82f6" filter="drop-shadow(0 0 8px #3b82f6)" />
                  </marker>

                  {/* Inactive stage hexagon gradient (Dark Mode) */}
                  <linearGradient id="inactiveHexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#17233B" />
                    <stop offset="100%" stopColor="#101827" />
                  </linearGradient>

                  {/* Active stage hexagon gradient */}
                  <linearGradient id="activeHexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#4F46E5" />
                  </linearGradient>

                  {/* Blue active path gradient */}
                  <linearGradient id="bluePathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#93c5fd" stopOpacity="1" />
                  </linearGradient>

                  {/* Hub radial glow */}
                  <radialGradient id="blueHubRadial" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
                    <stop offset="70%" stopColor="#1e3a8a" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Central Soft Breathing Glow */}
                <circle cx="250" cy="250" r="100" fill="url(#blueHubRadial)" className="growth-center-glow animate-pulse" style={{ animationDuration: '4s' }} />

                {/* Outer Base Guide Ring */}
                <circle
                  cx="250"
                  cy="250"
                  r="175"
                  fill="none"
                  stroke="rgba(30, 41, 59, 0.45)"
                  strokeWidth="1.5"
                  className="growth-orbit-base"
                />

                {/* Rotating Tech Accent Rings */}
                <circle
                  cx="250"
                  cy="250"
                  r="125"
                  fill="none"
                  stroke="#1d4ed8"
                  strokeWidth="1"
                  strokeDasharray="3 9"
                  className="growth-tech-ring-1 opacity-40 animate-spin"
                  style={{ animationDuration: '36s', animationTimingFunction: 'linear' }}
                />

                <circle
                  cx="250"
                  cy="250"
                  r="145"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="1.5"
                  strokeDasharray="1 10"
                  className="growth-tech-ring-2 opacity-50 animate-spin"
                  style={{ animationDuration: '48s', animationTimingFunction: 'linear', animationDirection: 'reverse' }}
                />

                {/* Orbital Flow Arcs with Arrowheads between stages */}
                {steps.map((_, idx) => {
                  const startAngle = idx * 60 - 90 + 22;
                  const endAngle = (idx + 1) * 60 - 90 - 22;
                  const arcPath = getArcPath(startAngle, endAngle, 175);
                  const isArcActive = currentDisplayIndex === idx;

                  return (
                    <g key={`loop-arc-${idx}`}>
                      <path
                        d={arcPath}
                        fill="none"
                        stroke={isArcActive ? "url(#bluePathGrad)" : "rgba(30, 41, 59, 0.45)"}
                        strokeWidth={isArcActive ? "3" : "1.5"}
                        markerEnd="url(#blue-orbit-arrow)"
                        className={`transition-all duration-500 ${isArcActive ? "growth-orbit-arc-active" : "growth-orbit-arc-inactive"}`}
                      />
                      {isArcActive && (
                        <path
                          d={arcPath}
                          fill="none"
                          stroke="#93c5fd"
                          strokeWidth="3.5"
                          strokeDasharray="8 12"
                          className="growth-orbit-dash opacity-90"
                          style={{ animation: 'dash 1.8s linear infinite' }}
                        />
                      )}
                    </g>
                  );
                })}

                {/* Orbiting Flow Particle around the wheel */}
                <g className="animate-spin" style={{ transformOrigin: '250px 250px', animationDuration: '14s', animationTimingFunction: 'linear' }}>
                  <circle cx="250" cy="75" r="4.5" fill="#93c5fd" className="growth-orbit-particle drop-shadow-[0_0_12px_#3b82f6]" />
                </g>

                {/* Horizontal Connecting Beam to Right Card with Arrow */}
                <g>
                  {/* Outer glowing beam stroke */}
                  <line
                    x1="250"
                    y1="250"
                    x2="480"
                    y2="250"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeDasharray="6 6"
                    markerEnd="url(#blue-beam-arrow)"
                    className="growth-connecting-beam opacity-90 drop-shadow-[0_0_12px_rgba(59,130,246,0.9)]"
                  />
                  {/* Flowing beam particle */}
                  <circle cx="360" cy="250" r="4" fill="#bfdbfe" className="growth-beam-particle-1 animate-ping opacity-75" style={{ animationDuration: '1.5s' }} />
                  <circle cx="430" cy="250" r="3" fill="#93c5fd" className="growth-beam-particle-2" style={{ filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.65))" }} />
                </g>
              </svg>

              {/* Central Engine Hub Panel (`ADFRENZY MEDIA GROWTH LOOP ONE TEAM · NO SILOS`) */}
              <div className="growth-center-hub absolute w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full bg-[#0F172A]/95 backdrop-blur-md border border-[#3b82f6]/45 flex flex-col items-center justify-center p-3 text-center shadow-[0_0_45px_rgba(37,99,235,0.35)] z-10 transition-transform duration-500 hover:scale-105">
                <div className="absolute inset-1.5 rounded-full border border-blue-500/20 pointer-events-none growth-center-hub-ring" />
                
                <Zap className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-blue-400 mb-1 animate-pulse growth-center-zap" />
                <span className="growth-center-sparkmedia text-[#60a5fa] font-mono text-[8.5px] sm:text-[9.5px] tracking-[0.22em] uppercase font-semibold">
                  ADFRENZY MEDIA
                </span>
                <span className="growth-center-title text-white font-extrabold text-[13px] sm:text-[15px] md:text-[16px] tracking-wider uppercase block mt-0.5 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
                  GROWTH LOOP
                </span>
                <span className="growth-center-subtitle text-[#94a3b8] font-mono text-[7.5px] sm:text-[8.5px] tracking-[0.18em] uppercase block mt-1">
                  ONE TEAM · NO SILOS
                </span>
              </div>

              {/* 6 Pointy-Topped Hexagonal Stage Badges */}
              {steps.map((st, idx) => {
                const rad = (st.angle * Math.PI) / 180;
                const R_pct = 37.5;
                const x_pct = (R_pct * Math.cos(rad)).toFixed(3);
                const y_pct = (R_pct * Math.sin(rad)).toFixed(3);
                const isActive = currentDisplayIndex === idx;
                const IconComp = st.icon;

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
                    onMouseLeave={() => setHoveredStep(null)}
                    onClick={() => {
                      setActiveStep(idx);
                      setIsPlaying(false);
                    }}
                    className={`growth-hex-card absolute z-20 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 select-none ${
                      isActive 
                        ? "growth-hex-card-active w-[92px] h-[104px] sm:w-[108px] sm:h-[118px] scale-[1.08] -translate-y-1 z-30" 
                        : "growth-hex-card-inactive w-[78px] h-[88px] sm:w-[90px] sm:h-[100px] hover:scale-[1.04] hover:-translate-y-0.5"
                    }`}
                  >
                    {/* SVG Pointy-Topped Hexagon Badge Frame */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none z-0"
                      viewBox="0 0 100 115"
                      preserveAspectRatio="none"
                    >
                      {/* Pointy-topped hexagon path */}
                      <path
                        d="M 50 2 L 98 29 L 98 86 L 50 113 L 2 86 L 2 29 Z"
                        fill={isActive ? "url(#activeHexGrad)" : "url(#inactiveHexGrad)"}
                        stroke={isActive ? "rgba(147, 197, 253, 0.9)" : "rgba(96, 165, 250, 0.35)"}
                        strokeWidth={isActive ? "2.5" : "1.2"}
                        className={`transition-all duration-300 ${isActive ? "growth-hex-active-path" : "growth-hex-inactive-path"}`}
                        style={{
                          filter: isActive 
                            ? "drop-shadow(0 12px 35px rgba(37, 99, 235, 0.35)) drop-shadow(0 0 25px rgba(59, 130, 246, 0.4))" 
                            : "drop-shadow(0 4px 12px rgba(15, 23, 42, 0.15))"
                        }}
                      />

                      {/* Accent Ring inside Hexagon for Active Card */}
                      {isActive && (
                        <path
                          d="M 50 8 L 92 32 L 92 83 L 50 107 L 8 83 L 8 32 Z"
                          fill="none"
                          stroke="#bfdbfe"
                          strokeWidth="1"
                          className="growth-hex-active-ring opacity-40"
                        />
                      )}
                    </svg>

                    {/* Card Content inside Hexagon (ICON top, TITLE middle, NUMBER bottom) */}
                    <div className="relative z-10 flex flex-col items-center text-center p-1 space-y-0.5">
                      <IconComp className={`transition-transform duration-300 ${
                        isActive 
                          ? "growth-hex-icon-active w-5 h-5 sm:w-6 sm:h-6 text-[#FFFFFF] scale-110 drop-shadow-[0_0_8px_#fff]" 
                          : "growth-hex-icon-inactive w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#60A5FA]"
                      }`} />
                      <span className={`text-[8.5px] sm:text-[9.5px] font-mono font-extrabold tracking-wider uppercase ${
                        isActive ? "growth-hex-title-active text-[#FFFFFF]" : "growth-hex-title-inactive text-[#F8FAFC]"
                      }`}>
                        {st.title}
                      </span>
                      <span className={`text-[7.5px] sm:text-[8.5px] font-mono font-bold ${
                        isActive ? "growth-hex-num-active text-[#DBEAFE]" : "growth-hex-num-inactive text-[#94A3B8]"
                      }`}>
                        {st.num}
                      </span>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Right Column: Information Panel Card (Floating Dashboard Card matching Reference Image) */}
          <div className="lg:col-span-5 relative">
            <div 
              className="growth-info-panel bg-gradient-to-br from-[#151D2E] to-[#0F172A] border border-[#60a5fa]/20 p-7 sm:p-9 rounded-[24px] shadow-[0_25px_70px_rgba(15,23,42,0.22)] relative overflow-hidden transition-all duration-500 min-h-[340px] flex flex-col justify-between"
            >
              
              {/* Flowing Soft Blue Wave Contour SVG matching reference image */}
              <div className="growth-info-contour absolute bottom-0 right-0 w-[240px] h-[160px] pointer-events-none opacity-20 z-0">
                <svg className="w-full h-full" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 160 Q 80 80, 160 120 T 240 60 L 240 160 Z" fill="url(#waveGrad)" opacity="0.6" />
                  <path d="M 0 160 Q 100 110, 180 140 T 240 90" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.4" />
                  <defs>
                    <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Card Header Row */}
              <div className="flex items-center justify-between z-10">
                <span className="growth-info-stage-badge text-[#60a5fa] font-mono font-extrabold text-xs tracking-widest uppercase">
                  STAGE {current.num} OF 06
                </span>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="growth-info-status-badge bg-[#3b82f6]/10 border border-[#60a5fa]/20 text-[#BFDBFE] text-[10px] font-mono px-3 py-1 rounded-full flex items-center gap-1.5 cursor-pointer font-bold uppercase transition-colors"
                >
                  <span className={`growth-info-status-dot w-2 h-2 rounded-full ${isPlaying ? "bg-[#60a5fa] animate-pulse" : "bg-slate-500"}`} />
                  {isPlaying ? (
                    <>
                      <span>AUTO-ROTATING</span>
                    </>
                  ) : (
                    <>
                      <span>PAUSED</span>
                    </>
                  )}
                </button>
              </div>

              {/* Main Stage Information Content */}
              <div key={currentDisplayIndex} className="z-10 my-4 space-y-4 animate-in fade-in duration-300">
                <h3 className="growth-info-title text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight font-sans">
                  {current.title}
                </h3>
                
                {/* Electric Blue Accent Bar */}
                <div className="growth-info-accent-bar w-12 h-1 bg-[#3b82f6] rounded-full" />

                <p className="growth-info-desc text-[#94A3B8] text-sm sm:text-base leading-relaxed pt-1 font-normal max-w-md">
                  {current.tagline}
                </p>
              </div>

              {/* Bottom Pagination Dots Row & Stage Counter */}
              <div className="z-10 flex items-center justify-between pt-4">
                <div className="flex items-center gap-2.5">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveStep(i);
                        setIsPlaying(false);
                      }}
                      className={`growth-info-dot h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        currentDisplayIndex === i 
                          ? "growth-info-dot-active bg-[#3b82f6] w-9 shadow-[0_0_12px_#3b82f6]" 
                          : "growth-info-dot-inactive bg-[rgba(148,163,184,0.20)] hover:bg-[#1e293b] w-2.5"
                      }`}
                      aria-label={`Go to stage ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Stage Counter Badge matching reference image (01 / 06) */}
                <div className="growth-info-counter-badge bg-[#1e293b]/60 border border-[#3b82f6]/20 text-[#94a3b8] text-xs font-mono font-bold px-3 py-1 rounded-full">
                  {current.num} / 06
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
