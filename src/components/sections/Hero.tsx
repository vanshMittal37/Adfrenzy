"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
      angle: -90,
    },
    {
      num: "02",
      title: "STRATEGY",
      desc: "Written growth thesis",
      icon: Target,
      angle: -30,
    },
    {
      num: "03",
      title: "CREATIVE",
      desc: "Hooks & UGC from data",
      icon: Megaphone,
      angle: 30,
    },
    {
      num: "04",
      title: "LAUNCH",
      desc: "Clean live tracking",
      icon: Rocket,
      angle: 90,
    },
    {
      num: "05",
      title: "SIGNAL",
      desc: "Weekly decisions",
      icon: BarChart3,
      angle: 150,
    },
    {
      num: "06",
      title: "SCALE",
      desc: "Push winning economics",
      icon: TrendingUp,
      angle: 210,
    },
  ];

  // Stage-by-stage active state sequence switcher (2.5s per stage)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % stages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [stages.length]);

  const currentActiveIndex = hoveredStageIndex !== null ? hoveredStageIndex : activeStageIndex;

  // Arc path generator for connecting segments between cards
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
    <section className="relative min-h-[95vh] pt-32 pb-24 md:pt-36 md:pb-28 overflow-hidden bg-background border-b border-border-subtle flex items-center">
      
      {/* Background Ambient Animation (Soft radial glow, subtle waves, dot grid) */}
      <div className="absolute right-[-10%] top-[-10%] w-[85%] h-[85%] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] opacity-70 blur-[100px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute left-[-20%] bottom-[-20%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12)_0%,transparent_70%)] opacity-40 blur-[110px] pointer-events-none z-0" />

      {/* Subtle Dot Matrix Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.12] dark:opacity-[0.15] z-0" 
        style={{
          backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Flowing abstract background curves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40 dark:opacity-30">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hero-curve" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
              <stop offset="40%" stopColor="var(--accent)" stopOpacity="0.4" />
              <stop offset="70%" stopColor="var(--accent-dark)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--accent-hover)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M -100 450 C 400 200, 500 650, 1100 400 C 1400 250, 1600 700, 2200 450" fill="none" stroke="url(#hero-curve)" strokeWidth="3" />
          <path d="M -50 350 C 350 150, 450 550, 1000 320 C 1300 200, 1500 600, 2100 350" fill="none" stroke="url(#hero-curve)" strokeWidth="1" strokeDasharray="8 8" className="opacity-60" />
          <path d="M 200 600 C 600 700, 900 300, 1600 550" fill="none" stroke="url(#hero-curve)" strokeWidth="1.5" className="opacity-40" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Actions with smooth entrance animation */}
          <div className="lg:col-span-6 space-y-8 order-1 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft border border-accent/30 text-[10px] sm:text-[11px] font-mono tracking-widest text-accent uppercase font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PERFORMANCE · CREATIVE · CRO · SEO</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-text-primary tracking-tight leading-[1.1] font-sans-primary">
              Creative that{" "}
              <span className="font-serif-italic font-normal italic text-accent underline decoration-accent/30 decoration-wavy decoration-2">
                converts
              </span>
              .<br className="hidden sm:inline" /> Funnels that keep{" "}
              <span className="font-serif-italic font-normal italic text-accent underline decoration-accent/30 decoration-wavy decoration-2">
                converting
              </span>
              .
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-text-secondary max-w-xl font-normal leading-relaxed">
              Full-funnel growth for D2C brands. Ads, creative, website and search run by one team, so your numbers stop swinging and start compounding.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={openDaySchedule}
                className="w-full sm:w-auto btn-yellow px-6 py-3.5 text-sm sm:text-base font-extrabold inline-flex items-center justify-center gap-2.5 cursor-pointer rounded-full"
              >
                <span>Book a Growth Call</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
              <a
                href="#work"
                className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-bold inline-flex items-center justify-center gap-2 text-text-primary border border-border-subtle hover:border-accent/40 bg-surface rounded-full transition-all"
              >
                <span>See the Work</span>
              </a>
            </div>

            {/* Hero Stat Bar */}
            <div className="pt-6 border-t border-border-subtle grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-accent">100+</div>
                <div className="text-[10px] sm:text-xs font-mono text-text-secondary">D2C brands</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-text-primary">₹2.4 Cr+</div>
                <div className="text-[10px] sm:text-xs font-mono text-text-secondary">ad spend managed</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-emerald-400">8.6x</div>
                <div className="text-[10px] sm:text-xs font-mono text-text-secondary">average ROAS</div>
              </div>
            </div>

          </div>
          
          {/* Right Column: Full-Funnel Growth Loop Animated Visualization */}
          <div className="flex lg:col-span-6 justify-center items-center order-2 my-8 lg:my-0">
            <div className="relative w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] md:w-[500px] md:h-[500px] lg:w-[540px] lg:h-[540px] xl:w-[570px] xl:h-[570px] flex items-center justify-center">
              
              {/* SVG Animated Flow System */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }} viewBox="0 0 400 400">
                <defs>
                  {/* Arrowhead marker */}
                  <marker
                    id="hero-arrow"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--accent)" />
                  </marker>

                  {/* Gradient for active flow path */}
                  <linearGradient id="activeArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="var(--accent)" stopOpacity="1" />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.9" />
                  </linearGradient>

                  {/* Radial glow for central core */}
                  <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Subtle outer static guide circle */}
                <circle cx="200" cy="200" r="144" fill="none" stroke="var(--border)" strokeWidth="1.5" className="opacity-40" />

                {/* Rotating Inner Dash Ring (Central Hub Support) */}
                <circle
                  cx="200"
                  cy="200"
                  r="95"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  className="opacity-30 motion-safe:animate-spin"
                  style={{ animationDuration: '30s', animationTimingFunction: 'linear' }}
                />

                {/* Rotating Outer Dot Ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="118"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  strokeDasharray="2 10"
                  className="opacity-40 motion-safe:animate-spin"
                  style={{ animationDuration: '45s', animationTimingFunction: 'linear', animationDirection: 'reverse' }}
                />

                {/* Central Soft Pulse Backplate */}
                <circle cx="200" cy="200" r="75" fill="url(#centerGlow)" className="motion-safe:animate-pulse" style={{ animationDuration: '3.5s' }} />

                {/* 6 Arc Connectors & Directional Arrows */}
                {stages.map((_, idx) => {
                  const startAngle = idx * 60 - 90 + 17;
                  const endAngle = (idx + 1) * 60 - 90 - 17;
                  const arcPath = getArcPath(startAngle, endAngle, 144);
                  const isStageActive = currentActiveIndex === idx;

                  return (
                    <g key={idx}>
                      {/* Base Path Arc */}
                      <path
                        d={arcPath}
                        fill="none"
                        stroke={isStageActive ? "url(#activeArcGrad)" : "var(--accent)"}
                        strokeWidth={isStageActive ? "3.5" : "2"}
                        strokeDasharray={isStageActive ? "none" : "6 6"}
                        markerEnd="url(#hero-arrow)"
                        className={`transition-all duration-500 ${isStageActive ? "opacity-100 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" : "opacity-40"}`}
                      />

                      {/* Animated Flowing Line (Stroke Dash Offset) */}
                      <path
                        d={arcPath}
                        fill="none"
                        stroke={isStageActive ? "#93C5FD" : "var(--accent)"}
                        strokeWidth={isStageActive ? "3" : "1.5"}
                        strokeDasharray="4 8"
                        style={{
                          animation: 'dash 3s linear infinite',
                        }}
                        className="opacity-70"
                      />
                    </g>
                  );
                })}

                {/* Orbiting Flow Particle along the entire loop */}
                <g className="motion-safe:animate-spin" style={{ transformOrigin: '200px 200px', animationDuration: '12s', animationTimingFunction: 'linear' }}>
                  <circle cx="200" cy="56" r="4" fill="#60A5FA" className="drop-shadow-[0_0_8px_#3B82F6]" />
                  <circle cx="324.7" cy="272" r="3" fill="#93C5FD" className="opacity-80" />
                  <circle cx="75.3" cy="272" r="3" fill="#93C5FD" className="opacity-80" />
                </g>
              </svg>

              {/* Central Core Engine Panel */}
              <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-surface/90 backdrop-blur-md border-2 border-accent/40 flex flex-col items-center justify-center p-2 sm:p-3 text-center shadow-[0_0_35px_rgba(59,130,246,0.25)] z-10 transition-transform duration-500 hover:scale-105">
                {/* Central Soft Breathing Ring */}
                <div className="absolute inset-0 rounded-full border border-accent/30 motion-safe:animate-ping opacity-25 pointer-events-none" style={{ animationDuration: '4s' }} />

                <span className="text-text-secondary font-mono text-[8px] sm:text-[9.5px] tracking-wider uppercase font-semibold">
                  ADFRENZY MEDIA
                </span>
                <span className="text-accent font-extrabold text-[11px] sm:text-[13px] md:text-[14px] tracking-wider uppercase block mt-0.5 sm:mt-1 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                  FULL-FUNNEL
                </span>
                <span className="text-text-primary font-bold text-[9px] sm:text-[11px] tracking-wider uppercase block">
                  GROWTH LOOP
                </span>
              </div>

              {/* 6 Stage Cards (HEX/Ring Positioned) */}
              {stages.map((stage, idx) => {
                const rad = (stage.angle * Math.PI) / 180;
                const R_pct = 36;
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
                    className={`absolute z-20 flex items-center gap-2.5 p-2 sm:p-3 rounded-xl border transition-all duration-500 w-28 sm:w-36 md:w-40 shadow-xl bg-surface/90 backdrop-blur-md cursor-pointer group select-none ${
                      isActive 
                        ? "border-accent ring-2 ring-accent/40 scale-[1.04] shadow-[0_0_25px_rgba(59,130,246,0.35)]" 
                        : "border-border-subtle hover:border-accent/60 opacity-90 hover:opacity-100 hover:scale-[1.02]"
                    }`}
                  >
                    {/* Icon with subtle pulse ring on active */}
                    <div className={`relative shrink-0 p-1.5 sm:p-2 rounded-lg transition-colors ${
                      isActive ? "bg-accent text-white shadow-md shadow-accent/30" : "bg-accent/10 text-accent group-hover:bg-accent/20"
                    }`}>
                      <IconComponent className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
                      {isActive && (
                        <span className="absolute inset-0 rounded-lg border border-accent motion-safe:animate-ping opacity-50" />
                      )}
                    </div>

                    <div className="flex flex-col text-left min-w-0">
                      <span className={`text-[8.5px] sm:text-[10px] font-mono font-extrabold tracking-wider truncate ${isActive ? "text-accent" : "text-text-primary"}`}>
                        {stage.num} {stage.title}
                      </span>
                      <span className="text-[7.5px] sm:text-[9px] text-text-secondary leading-tight font-medium line-clamp-1 mt-0.5">
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
