"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 6);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const openCalendly = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-calendly"));
    }
  };

  const stages = [
    { num: "01", title: "STRATEGY", desc: "Deep dive & growth plan", angle: -90 },
    { num: "02", title: "CREATIVE", desc: "Scroll-stopping ads", angle: -30 },
    { num: "03", title: "LAUNCH", desc: "Put ideas into market", angle: 30 },
    { num: "04", title: "LEARN", desc: "Read the signal", angle: 90 },
    { num: "05", title: "OPTIMISE", desc: "Sharpen the winners", angle: 150 },
    { num: "06", title: "SCALE", desc: "Compound growth", angle: 210 },
  ];

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
      
      
      {/* Layer 2: Soft radial glow behind the Growth Loop */}
      <div className="absolute right-[-10%] top-[-10%] w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle_at_center,var(--accent-soft)_0%,transparent_70%)] opacity-60 dark:opacity-40 blur-[90px] pointer-events-none z-0" />
      <div className="absolute left-[-20%] bottom-[-20%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle_at_center,var(--accent-soft)_0%,transparent_70%)] opacity-30 dark:opacity-20 blur-[100px] pointer-events-none z-0" />

      {/* Layer 3: Flowing abstract curves / light trails */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40 dark:opacity-30">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hero-curve" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
              <stop offset="40%" stopColor="var(--accent)" stopOpacity="0.45" />
              <stop offset="70%" stopColor="var(--accent-dark)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--accent-hover)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Main flow vector curves */}
          <path d="M -100 450 C 400 200, 500 650, 1100 400 C 1400 250, 1600 700, 2200 450" fill="none" stroke="url(#hero-curve)" strokeWidth="3" />
          <path d="M -50 350 C 350 150, 450 550, 1000 320 C 1300 200, 1500 600, 2100 350" fill="none" stroke="url(#hero-curve)" strokeWidth="1" strokeDasharray="8 8" className="opacity-60" />
          <path d="M 200 600 C 600 700, 900 300, 1600 550" fill="none" stroke="url(#hero-curve)" strokeWidth="1.5" className="opacity-40" />
        </svg>
      </div>

      {/* Layer 4: Particle field (slow, floating neon stars/points) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-[15%] w-2 h-2 rounded-full bg-accent opacity-75 animate-ping duration-[6s]" />
        <div className="absolute top-1/3 left-[40%] w-1.5 h-1.5 rounded-full bg-accent opacity-60 animate-pulse duration-[4s]" />
        <div className="absolute top-2/3 left-[10%] w-2.5 h-2.5 rounded-full bg-accent-soft opacity-50 animate-bounce duration-[8s]" />
        <div className="absolute top-3/4 left-[45%] w-2 h-2 rounded-full bg-accent opacity-40 animate-pulse duration-[5s]" />
        <div className="absolute top-1/2 left-[85%] w-3 h-3 rounded-full bg-accent-soft opacity-60 animate-ping duration-[7s]" />
        <div className="absolute top-[85%] left-[80%] w-1.5 h-1.5 rounded-full bg-accent opacity-50 animate-pulse duration-[3s]" />
      </div>

      {/* Layer 6: Extremely subtle noise / secondary texture (opacity under 3%) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.02] dark:opacity-[0.015] z-0" style={{
        backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Actions (45% on desktop) */}
          <div className="lg:col-span-6 space-y-8 order-1">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft border border-accent/25 text-[10px] sm:text-[11px] font-mono tracking-widest text-accent uppercase font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CREATIVE × PERFORMANCE × SCALING</span>
            </div>

            {/* Headline with elegant mixed serif typography */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-text-primary tracking-tight leading-[1.1] font-sans-primary">
              Creative that{" "}
              <span className="font-serif-italic font-normal italic text-accent underline decoration-accent/30 decoration-wavy decoration-2">
                connects
              </span>
              .<br className="hidden sm:inline" /> Marketing that{" "}
              <span className="font-serif-italic font-normal italic text-accent underline decoration-accent/30 decoration-wavy decoration-2">
                performs
              </span>
              .
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-text-secondary max-w-xl font-normal leading-relaxed">
              SparkMedia.ad combines high-impact creative production, performance media buying, and conversion optimization into a single growth loop. We build compounding engines to acquire customers and scale brands profitably.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={openCalendly}
                className="w-full sm:w-auto btn-yellow px-8 py-4 text-base font-bold inline-flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="/work"
                className="w-full sm:w-auto btn-ghost px-8 py-4 text-base font-semibold inline-flex items-center justify-center gap-2"
              >
                <span>See Our Work</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </Link>
            </div>

            {/* Colorized Trust Badge Row */}
            <div className="space-y-4 pt-6 border-t border-border-subtle">
              <p className="text-[12px] sm:text-[13px] text-text-primary font-mono tracking-widest uppercase font-bold flex items-center gap-1.5">
                <span className="text-accent">⚡</span> TRUSTED SCALE PARTNERS
              </p>
              
              <div className="flex flex-wrap items-center gap-3">
                {/* Meta */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-subtle bg-surface-secondary/60 text-[10px] sm:text-[11px] font-bold text-text-primary hover:border-[#0064E0]/45 hover:shadow-[0_2px_12px_rgba(0,100,224,0.15)] transition-all duration-300">
                  <svg className="w-3.5 h-3.5 text-[#0064E0] fill-current" viewBox="0 0 24 24">
                    <path d="M16.48 7.37c-1.12 0-2.18.52-2.88 1.41a4.29 4.29 0 00-2.88-1.41c-2.43 0-4.43 1.94-4.43 4.33s2 4.33 4.43 4.33c1.12 0 2.18-.52 2.88-1.41a4.29 4.29 0 002.88 1.41c2.43 0 4.43-1.94 4.43-4.33s-2-4.33-4.43-4.33zm-4.78 4.33c0-1.28.98-2.31(2.21-2.31s2.21 1.03 2.21 2.31-.98 2.31-2.21 2.31-2.21-1.03-2.21-2.31zm6.98 0c0 1.28-.98 2.31-2.21 2.31s-2.21-1.03-2.21-2.31.98-2.31 2.21-2.31 2.21 1.03 2.21 2.31z" />
                  </svg>
                  <span>Meta Business Partner</span>
                </div>
                
                {/* Google */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-subtle bg-surface-secondary/60 text-[10px] sm:text-[11px] font-bold text-text-primary hover:border-[#4285F4]/45 hover:shadow-[0_2px_12px_rgba(66,133,244,0.15)] transition-all duration-300">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span>Google Partner</span>
                </div>

                {/* Shopify */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-subtle bg-surface-secondary/60 text-[10px] sm:text-[11px] font-bold text-text-primary hover:border-[#95BF47]/45 hover:shadow-[0_2px_12px_rgba(149,191,71,0.15)] transition-all duration-300">
                  <svg className="w-3.5 h-3.5 text-[#95BF47] fill-current" viewBox="0 0 24 24">
                    <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z" />
                  </svg>
                  <span>Shopify Partner</span>
                </div>

                {/* GoKwik */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-subtle bg-surface-secondary/60 text-[10px] sm:text-[11px] font-bold text-text-primary hover:border-[#FF6B00]/45 hover:shadow-[0_2px_12px_rgba(255,107,0,0.15)] transition-all duration-300">
                  <svg className="w-2.5 h-3.5 text-[#FF6B00] fill-current" viewBox="0 0 24 24">
                    <path d="M19 9h-6l2.35-8.31a.5.5 0 00-.81-.46l-10 12.5a.5.5 0 00.39.81h6l-2.35 8.31a.5.5 0 00.81.46l10-12.5a.5.5 0 00-.39-.81z" />
                  </svg>
                  <span>GoKwik Partner</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Large Growth Ecosystem (55% on desktop) */}
          <div className="hidden lg:flex lg:col-span-6 justify-center items-center order-2 lg:order-2">
            
            {/* Main Outer container sized for layout presence */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[480px] md:h-[480px] lg:w-[520px] lg:h-[520px] xl:w-[550px] xl:h-[550px] flex items-center justify-center">
              
              {/* Layer 5: Dynamic orbital paths & clockwise flow arrows */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }} viewBox="0 0 400 400">
                <defs>
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
                </defs>

                {/* Main orbits paths aligned to cards percentage (r=144 aligned to 36% radius of 400 size container) */}
                <circle cx="200" cy="200" r="144" fill="none" stroke="var(--border)" strokeWidth="1.5" />
                <circle cx="200" cy="200" r="115" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 6" className="animate-spin" style={{ animationDuration: '40s', animationTimingFunction: 'linear' }} />
                <circle cx="200" cy="200" r="85" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="5 5" className="animate-spin" style={{ animationDuration: '25s', animationTimingFunction: 'linear', animationDirection: 'reverse' }} />

                {/* Clockwise flow arrows linking stages */}
                {stages.map((_, idx) => {
                  const startAngle = idx * 60 - 90 + 17;
                  const endAngle = (idx + 1) * 60 - 90 - 17;
                  const arcPath = getArcPath(startAngle, endAngle, 144);
                  return (
                    <path
                      key={idx}
                      d={arcPath}
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2.5"
                      strokeDasharray="6 6"
                      markerEnd="url(#hero-arrow)"
                      className="opacity-80"
                      style={{
                        strokeDashoffset: 0,
                        animation: "dash 2.5s linear infinite"
                      }}
                    />
                  );
                })}
              </svg>

              {/* Center Core Title Panel */}
              <div className="absolute w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-surface border border-accent/30 flex flex-col items-center justify-center p-3 text-center shadow-xl z-10">
                <span className="text-text-secondary font-mono text-[9px] sm:text-[10px] tracking-wider uppercase">
                  SPARKMEDIA
                </span>
                <span className="text-accent font-extrabold text-[11px] sm:text-[12px] md:text-[13px] tracking-wider uppercase block mt-1">
                  ONE TEAM.
                </span>
                <span className="text-text-primary font-bold text-[11px] sm:text-[12px] md:text-[13px] tracking-wider uppercase block">
                  ONE LOOP.
                </span>
              </div>

              {/* Orbiting HTML Node Cards (Placed on a responsive 36% container radius) */}
              {stages.map((stage, idx) => {
                const rad = (stage.angle * Math.PI) / 180;
                const R_pct = 36;
                const x_pct = (R_pct * Math.cos(rad)).toFixed(3);
                const y_pct = (R_pct * Math.sin(rad)).toFixed(3);
                const isActive = activeNode === idx;

                return (
                  <div
                    key={idx}
                    style={{
                      left: `calc(50% + ${x_pct}%)`,
                      top: `calc(50% + ${y_pct}%)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className={`absolute z-20 flex flex-col text-left p-3 rounded-xl border transition-all duration-300 w-28 sm:w-32 md:w-36 shadow-lg bg-[var(--card-bg)] border-[var(--card-border)] shadow-[var(--card-shadow)] group ${
                      isActive 
                        ? "border-accent scale-105 shadow-accent/15" 
                        : "hover:border-accent/60"
                    }`}
                  >
                    <span className={`text-[9px] font-mono font-bold tracking-wider ${isActive ? "text-accent" : "text-text-secondary"}`}>
                      {stage.num} {stage.title}
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-text-secondary mt-0.5 leading-tight font-medium">
                      {stage.desc}
                    </span>
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
