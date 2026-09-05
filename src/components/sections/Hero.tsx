"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Sparkles,
  Search,
  Target,
  Megaphone,
  Rocket,
  BarChart3,
  TrendingUp,
} from "lucide-react";

export function Hero() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [hoveredStageIndex, setHoveredStageIndex] = useState<number | null>(null);

  const openDaySchedule = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-dayschedule"));
    }
  };

  const stages = [
    {
      num: "01",
      title: "DEEP DIVE",
      desc: "Audit leaks before spend",
      icon: Search,
      angle: -90, // Top (12 o'clock)
    },
    {
      num: "02",
      title: "STRATEGY",
      desc: "Written growth thesis",
      icon: Target,
      angle: -30, // Top Right (2 o'clock)
    },
    {
      num: "03",
      title: "CREATIVE",
      desc: "Hooks & UGC from data",
      icon: Megaphone,
      angle: 30, // Bottom Right (4 o'clock)
    },
    {
      num: "04",
      title: "LAUNCH",
      desc: "Clean live tracking",
      icon: Rocket,
      angle: 90, // Bottom (6 o'clock)
    },
    {
      num: "05",
      title: "SIGNAL",
      desc: "Weekly decisions",
      icon: BarChart3,
      angle: 150, // Bottom Left (8 o'clock)
    },
    {
      num: "06",
      title: "SCALE",
      desc: "Push winning economics",
      icon: TrendingUp,
      angle: 210, // Top Left (10 o'clock)
    },
  ];

  // Auto-cycle through stages every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % stages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [stages.length]);

  const currentActiveIndex = hoveredStageIndex !== null ? hoveredStageIndex : activeStageIndex;

  // Arc path generator for SVG orbital arrows connecting stages
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
    <section id="hero" className="hero-section relative min-h-[92vh] pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#06080e] text-white flex items-center border-b border-blue-950/30 transition-colors duration-500">
      
      {/* Background Radial Ambient Glows */}
      <div className="hero-ambient-1 absolute right-[-5%] top-[10%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18)_0%,rgba(15,23,42,0)_70%)] blur-[100px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="hero-ambient-2 absolute left-[-10%] bottom-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,rgba(0,0,0,0)_70%)] blur-[120px] pointer-events-none z-0" />

      {/* Topographic Background Contour Wave SVG Lines (Matching the reference image flow) */}
      <div className="hero-topo-bg absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="topo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          {/* Subtle flowing wavy line contours across the canvas bottom & center */}
          <path d="M -100 450 Q 300 600, 600 350 T 1400 400 T 2000 300" fill="none" stroke="url(#topo-grad)" strokeWidth="1.5" />
          <path d="M -100 500 Q 350 630, 650 400 T 1450 450 T 2050 350" fill="none" stroke="url(#topo-grad)" strokeWidth="1" />
          <path d="M -100 550 Q 400 660, 700 450 T 1500 500 T 2100 400" fill="none" stroke="url(#topo-grad)" strokeWidth="1.5" strokeDasharray="6 6" />
          <path d="M 200 200 Q 700 100, 1100 300 T 1900 200" fill="none" stroke="url(#topo-grad)" strokeWidth="1" className="opacity-60" />
          <path d="M 300 150 Q 800 50, 1200 250 T 2000 150" fill="none" stroke="url(#topo-grad)" strokeWidth="1.5" className="opacity-40" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-5 space-y-7 order-1">
            {/* Pill Eyebrow */}
            <div className="hero-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1527] border border-blue-500/30 text-[10.5px] font-mono tracking-widest text-blue-400 uppercase font-bold shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>PERFORMANCE · CREATIVE · CRO · SEO</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white tracking-tight leading-[1.08] font-sans">
              Creative that{" "}
              <span className="hero-highlight-1 font-serif italic font-normal text-blue-500">
                converts.
              </span>
              <br />
              Funnels that keep{" "}
              <span className="hero-highlight-2 font-serif italic font-normal text-blue-500">
                converting.
              </span>
            </h1>

            {/* Description Subtitle */}
            <p className="hero-subtext text-base sm:text-[17px] text-slate-300 max-w-lg font-normal leading-relaxed">
              Full-funnel growth for D2C brands. Ads, creative, website and search run by one team, so your numbers stop swinging and start compounding.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={openDaySchedule}
                className="w-full sm:w-auto bg-[#3b82f6] hover:bg-[#2563eb] text-white px-7 py-3.5 text-base font-bold inline-flex items-center justify-center gap-2.5 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <span>Book a Growth Call</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
              <a
                href="#work"
                className="hero-secondary-btn w-full sm:w-auto px-7 py-3.5 text-base font-bold inline-flex items-center justify-center gap-2 text-white border border-slate-800 hover:border-slate-700 bg-[#0c101c]/80 hover:bg-[#121829] rounded-full transition-all duration-300"
              >
                <span>See the Work</span>
              </a>
            </div>
          </div>
          
          {/* Right Column: Exact Landing Page Figure matching the Reference Image */}
          <div className="flex lg:col-span-7 justify-center items-center order-2 my-4 lg:my-0">
            <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[560px] md:h-[560px] lg:w-[600px] lg:h-[600px] flex items-center justify-center select-none">
              
              {/* Top-Right Decorative Dot Matrix Grid */}
              <div className="absolute top-2 right-4 w-28 h-28 pointer-events-none opacity-20 z-0">
                <svg width="100%" height="100%">
                  <pattern id="dotGrid" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.2" fill="#60a5fa" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dotGrid)" />
                </svg>
              </div>

              {/* Main SVG Orbital Graphic System */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 500" style={{ overflow: 'visible' }}>
                <defs>
                  {/* Arrowhead marker for orbital flow arrows */}
                  <marker
                    id="orbit-arrow"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#3b82f6" />
                  </marker>

                  {/* Active segment gradient stroke */}
                  <linearGradient id="activeArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#93c5fd" stopOpacity="1" />
                  </linearGradient>

                  {/* Core Radial Glow Filter */}
                  <radialGradient id="centerHubGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.35" />
                    <stop offset="70%" stopColor="#1e3a8a" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>

                  {/* Drop Shadow for Active Node */}
                  <filter id="blue-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Central Soft Glow Backplate */}
                <circle cx="250" cy="250" r="95" fill="url(#centerHubGlow)" className="animate-pulse" style={{ animationDuration: '4s' }} />

                {/* Outer Base Orbit Path Circle */}
                <circle
                  cx="250"
                  cy="250"
                  r="175"
                  fill="none"
                  stroke="#1d283a"
                  strokeWidth="1.5"
                />

                {/* Rotating Tech Accent Dash Rings */}
                <circle
                  cx="250"
                  cy="250"
                  r="120"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="1"
                  strokeDasharray="3 9"
                  className="opacity-40 animate-spin"
                  style={{ animationDuration: '40s', animationTimingFunction: 'linear' }}
                />

                <circle
                  cx="250"
                  cy="250"
                  r="142"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="1.5"
                  strokeDasharray="1 12"
                  className="opacity-50 animate-spin"
                  style={{ animationDuration: '50s', animationTimingFunction: 'linear', animationDirection: 'reverse' }}
                />

                {/* 6 Radiating Connector Lines from Central Hub to 6 Node Dots */}
                {stages.map((stage, idx) => {
                  const rad = (stage.angle * Math.PI) / 180;
                  const innerR = 78;
                  const outerR = 175;
                  const x1 = (250 + innerR * Math.cos(rad)).toFixed(2);
                  const y1 = (250 + innerR * Math.sin(rad)).toFixed(2);
                  const x2 = (250 + outerR * Math.cos(rad)).toFixed(2);
                  const y2 = (250 + outerR * Math.sin(rad)).toFixed(2);
                  const isActive = currentActiveIndex === idx;

                  return (
                    <line
                      key={`spoke-${idx}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={isActive ? "#3b82f6" : "#1e293b"}
                      strokeWidth={isActive ? "2" : "1.2"}
                      strokeDasharray={isActive ? "none" : "3 3"}
                      className={`hero-spoke-line transition-all duration-500 ${isActive ? "hero-spoke-active" : "hero-spoke-inactive"}`}
                    />
                  );
                })}

                {/* 6 Orbital Arcs with Directional Flow Arrows connecting nodes in clockwise sequence */}
                {stages.map((stage, idx) => {
                  const startAngle = idx * 60 - 90 + 20;
                  const endAngle = (idx + 1) * 60 - 90 - 20;
                  const arcPath = getArcPath(startAngle, endAngle, 175);
                  const isArcActive = currentActiveIndex === idx;

                  return (
                    <g key={`arc-${idx}`}>
                      {/* Base arc path */}
                      <path
                        d={arcPath}
                        fill="none"
                        stroke={isArcActive ? "url(#activeArcGrad)" : "#1e293b"}
                        strokeWidth={isArcActive ? "3" : "1.5"}
                        markerEnd="url(#orbit-arrow)"
                        className={`hero-arc-path transition-all duration-500 ${isArcActive ? "hero-arc-active" : "hero-arc-inactive"}`}
                      />

                      {/* Animated dash beam along active arc segment */}
                      {isArcActive && (
                        <path
                          d={arcPath}
                          fill="none"
                          stroke="#60a5fa"
                          strokeWidth="3.5"
                          strokeDasharray="8 12"
                          filter="url(#blue-glow)"
                          className="opacity-90"
                          style={{
                            animation: 'dash 1.8s linear infinite',
                          }}
                        />
                      )}
                    </g>
                  );
                })}

                {/* 6 Glowing Junction Node Dots at Orbit Position */}
                {stages.map((stage, idx) => {
                  const rad = (stage.angle * Math.PI) / 180;
                  const nx = 250 + 175 * Math.cos(rad);
                  const ny = 250 + 175 * Math.sin(rad);
                  const isActive = currentActiveIndex === idx;

                  return (
                    <g key={`node-${idx}`}>
                      {/* Outer pulse ring for active node */}
                      {isActive && (
                        <circle
                          cx={nx}
                          cy={ny}
                          r="10"
                          fill="none"
                          stroke="#60a5fa"
                          strokeWidth="1.5"
                          className="animate-ping opacity-75"
                        />
                      )}
                      {/* Node circle */}
                      <circle
                        cx={nx}
                        cy={ny}
                        r={isActive ? "6" : "4.5"}
                        fill={isActive ? "#60a5fa" : "#3b82f6"}
                        stroke="#06080e"
                        strokeWidth="2"
                        className={`transition-all duration-300 ${isActive ? "drop-shadow-[0_0_10px_#3b82f6]" : "opacity-80"}`}
                      />
                    </g>
                  );
                })}

                {/* Orbiting Flow Light Beam Particle moving continuously around orbit */}
                <g className="animate-spin" style={{ transformOrigin: '250px 250px', animationDuration: '14s', animationTimingFunction: 'linear' }}>
                  <circle cx="250" cy="75" r="4.5" fill="#93c5fd" className="drop-shadow-[0_0_12px_#3b82f6]" />
                  <circle cx="250" cy="75" r="8" fill="none" stroke="#60a5fa" strokeWidth="1" className="opacity-60" />
                </g>
              </svg>

              {/* Central Engine Hub Panel (Exact text stack from reference image) */}
              <div className="hero-center-hub absolute w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full bg-[#080d1a]/95 backdrop-blur-md border border-blue-500/40 flex flex-col items-center justify-center p-3 text-center shadow-[0_0_40px_rgba(37,99,235,0.3)] z-10 transition-transform duration-500 hover:scale-105">
                {/* Subtle Inner Accent Circle Ring */}
                <div className="absolute inset-1.5 rounded-full border border-blue-500/20 pointer-events-none hero-center-hub-ring" />
                
                <span className="hero-center-subtext text-slate-400 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold">
                  ADFRENZY MEDIA
                </span>
                <span className="hero-center-title1 text-[#3b82f6] font-extrabold text-[13px] sm:text-[15px] md:text-[16px] tracking-wider uppercase block mt-1 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
                  FULL-FUNNEL
                </span>
                <span className="hero-center-title2 text-white font-extrabold text-[11px] sm:text-[13px] md:text-[14px] tracking-wider uppercase block mt-0.5">
                  GROWTH LOOP
                </span>
              </div>

              {/* 6 Chamfered Octagonal Stage Cards (Hexagonally Positioned matching Reference Image) */}
              {stages.map((stage, idx) => {
                const rad = (stage.angle * Math.PI) / 180;
                // Radial offset percentage (36.5%)
                const R_pct = 37.5;
                const x_pct = (R_pct * Math.cos(rad)).toFixed(3);
                const y_pct = (R_pct * Math.sin(rad)).toFixed(3);
                const isActive = currentActiveIndex === idx;
                const IconComponent = stage.icon;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredStageIndex(idx)}
                    onMouseLeave={() => setHoveredStageIndex(null)}
                    style={{
                      left: `calc(50% + ${x_pct}%)`,
                      top: `calc(50% + ${y_pct}%)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className={`hero-card-container absolute z-20 w-[145px] sm:w-[175px] md:w-[185px] h-[58px] sm:h-[68px] flex items-center gap-2.5 px-3 sm:px-3.5 py-2 cursor-pointer transition-all duration-300 group select-none ${
                      isActive ? "scale-[1.06] z-30" : "hover:scale-[1.03]"
                    }`}
                  >
                    {/* SVG Chamfered Cyber Badge Frame with Angled Cut Corners */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 185 68" preserveAspectRatio="none">
                      {/* Octagonal Chamfered Path */}
                      <path
                        d="M 12 0 L 173 0 L 185 12 L 185 56 L 173 68 L 12 68 L 0 56 L 0 12 Z"
                        fill={isActive ? "rgba(10, 16, 30, 0.95)" : "rgba(6, 10, 18, 0.88)"}
                        stroke={isActive ? "#3b82f6" : "#1e293b"}
                        strokeWidth={isActive ? "1.8" : "1.2"}
                        className={`hero-badge-path transition-all duration-300 ${isActive ? "hero-badge-active-path" : "hero-badge-inactive-path"}`}
                        style={{
                          filter: isActive ? 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.4))' : 'none'
                        }}
                      />
                      
                      {/* Chamfer Corner Tech Lines when Active */}
                      {isActive && (
                        <>
                          <path d="M 0 14 L 0 12 L 12 0 L 14 0" fill="none" stroke="#60a5fa" strokeWidth="2" className="hero-corner-line" />
                          <path d="M 171 0 L 173 0 L 185 12 L 185 14" fill="none" stroke="#60a5fa" strokeWidth="2" className="hero-corner-line" />
                          <path d="M 185 54 L 185 56 L 173 68 L 171 68" fill="none" stroke="#60a5fa" strokeWidth="2" className="hero-corner-line" />
                          <path d="M 14 68 L 12 68 L 0 56 L 0 54" fill="none" stroke="#60a5fa" strokeWidth="2" className="hero-corner-line" />
                        </>
                      )}
                    </svg>

                    {/* Circular Icon Container */}
                    <div className={`hero-icon-box relative shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all z-10 ${
                      isActive 
                        ? "hero-icon-box-active bg-blue-600/25 text-blue-400 border border-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.6)]" 
                        : "hero-icon-box-inactive bg-blue-950/40 text-blue-400/80 border border-blue-500/20 group-hover:border-blue-400/50 group-hover:text-blue-300"
                    }`}>
                      <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>

                    {/* Card Text Content */}
                    <div className="flex flex-col text-left min-w-0 z-10">
                      <span className={`hero-card-title text-[10px] sm:text-[11.5px] font-mono font-extrabold tracking-wider uppercase truncate ${
                        isActive ? "hero-card-title-active text-blue-400" : "hero-card-title-inactive text-slate-100"
                      }`}>
                        {stage.num} {stage.title}
                      </span>
                      <span className="hero-card-desc text-[8.5px] sm:text-[9.5px] text-slate-400 leading-tight font-medium line-clamp-1 mt-0.5">
                        {stage.desc}
                      </span>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
