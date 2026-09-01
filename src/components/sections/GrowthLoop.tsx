"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Play, Pause, ChevronRight, ChevronLeft, RefreshCw, Zap } from "lucide-react";

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
      title: "DEEP DIVE",
      tagline: "Audit leaks before touching a single rupee of spend",
      description:
        "A 499 rupee face wash and an 18,000 rupee bridal set do not get bought the same way. We perform a complete audit of your ad accounts, landing page UX, CAC, and contribution margins to map exact conversion leaks.",
      highlights: [
        "Full funnel audit across Meta, Google & TikTok",
        "Funnel mapped to your real consideration cycle",
        "Unit economics & contribution margin calculation",
        "Leak detection on PDP, lander & checkout flows",
      ],
      deliverables: "Leak Audit Report · Unit Margin Blueprint · Pixel Audit",
    },
    {
      num: "02",
      title: "STRATEGY",
      tagline: "A written growth thesis tailored to your unit economics",
      description:
        "Before running ads, we engineer separate customer journeys for cold, warm, and returning buyers. Offers and dedicated landers are matched to each awareness stage rather than relying on account averages.",
      highlights: [
        "90-Day customized growth execution roadmap",
        "Cold vs warm vs retention audience segmentation",
        "Offer structure & AOV bump architecture",
        "Every stage judged on its own unit metrics",
      ],
      deliverables: "90-Day Growth Thesis · Offer Blueprint · Media Plan",
    },
    {
      num: "03",
      title: "CREATIVE",
      tagline: "High-velocity direct response creative & UGC pipeline",
      description:
        "Fatigue isn&apos;t a creative problem; it&apos;s a supply problem. We build a high-velocity production engine shipping tested video hooks, UGC, static visuals, and motion graphics on a weekly schedule before fatigue hits.",
      highlights: [
        "User Generated Content (UGC) production engine",
        "Weekly hook testing & deployment schedule",
        "Direct response video ads, statics & carousels",
        "Fatigue prevention: winners refreshed as variants",
      ],
      deliverables: "Weekly Creative Drop · Tested Hook Bank · Multi-format Assets",
    },
    {
      num: "04",
      title: "LAUNCH",
      tagline: "Clean campaign structure & precision tracking deployment",
      description:
        "We deploy controlled campaign structures with clean attribution signals. Budgets are scaled in disciplined steps without throwing algorithms into chaotic learning phases or single-ad dependency.",
      highlights: [
        "Custom Shopify & lander PDP build deployment",
        "Server-side CAPI & Pixel attribution setup",
        "Controlled step budget scaling framework",
        "No single ad allowed to carry over 30% account load",
      ],
      deliverables: "Live Campaign Architecture · Pixel Verification · Landers",
    },
    {
      num: "05",
      title: "SIGNAL",
      tagline: "Weekly decision reviews based on clean P&L signals",
      description:
        "Performance swings for fixable reasons. We review live data weekly, measuring blended ROAS, CAC, and contribution margin to make clean decisions on scaling winners and pausing fatigued ads.",
      highlights: [
        "Real-time attribution & unit margin tracking",
        "Weekly executive decision & action syncs",
        "Creative performance & hook conversion analytics",
        "Budget re-allocation based on net contribution margin",
      ],
      deliverables: "Weekly P&L Signal Report · Action Plan · ROAS Matrix",
    },
    {
      num: "06",
      title: "SCALE",
      tagline: "Compound profits into scalable acquisition channels",
      description:
        "Once the loop runs, growth compounds. Winning creatives are scaled into secondary channels (Search, Shopping, YouTube, Demand Gen) to build a multi-channel growth flywheel that keeps working continuously.",
      highlights: [
        "Omnichannel expansion (Meta + Google + YouTube)",
        "High-converting lander split-test scaling",
        "Blended CAC reduction through organic equity",
        "Predictable monthly revenue compounding",
      ],
      deliverables: "Omnichannel Scale Blueprint · Growth Model · Expansion Plan",
    },
  ];

  // Auto-advance loop timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const current = steps[activeStep];

  return (
    <section
      className="py-24 bg-background border-b border-border-subtle relative overflow-hidden"
      id="growth-loop"
    >
      <div id="about" className="absolute -top-24 left-0" />
      
      {/* Background Decorative Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-mono font-bold text-accent uppercase tracking-widest">
            <RefreshCw className={`w-3.5 h-3.5 ${isPlaying ? "animate-spin" : ""}`} style={{ animationDuration: "8s" }} />
            <span>FULL-FUNNEL GROWTH ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            Six steps. One continuous{" "}
            <span className="font-serif-italic font-normal italic text-accent underline decoration-accent/30 decoration-wavy decoration-2">
              growth loop
            </span>
            .
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Most brands don&apos;t have a performance problem—they have a consistency problem. Our 6-stage engine moves continuously from audit to scaling so your numbers stop swinging.
          </p>
        </div>

        {/* Step Navigation Bar (01 -> 06) */}
        <div className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {steps.map((st, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={st.num}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-300 relative group cursor-pointer ${
                    isActive
                      ? "bg-accent/15 border-accent text-text-primary shadow-lg shadow-accent/10 scale-[1.02]"
                      : "bg-surface border-border-subtle text-text-secondary hover:border-accent/40 hover:text-text-primary"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-xs font-mono font-extrabold ${
                        isActive ? "text-accent" : "text-text-secondary group-hover:text-accent"
                      }`}
                    >
                      {st.num}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                    )}
                  </div>
                  <div className="text-xs font-bold font-mono tracking-wider uppercase truncate">
                    {st.title}
                  </div>
                  {/* Progress Line */}
                  <div className="mt-2.5 h-1 w-full bg-surface-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-accent transition-all duration-300 ${
                        isActive ? "w-full" : idx < activeStep ? "w-full opacity-40" : "w-0"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Pointer & Details Card */}
        <div className="relative">
          
          {/* Pointer Arrow pointing to Active Card */}
          <div className="flex justify-around px-4 mb-2">
            {steps.map((_, idx) => (
              <div
                key={idx}
                className={`transition-all duration-300 flex flex-col items-center ${
                  activeStep === idx ? "opacity-100 scale-110" : "opacity-0 scale-75"
                }`}
              >
                <div className="w-4 h-4 rotate-45 bg-accent/20 border-t border-l border-accent" />
              </div>
            ))}
          </div>

          {/* Active Detail Card */}
          <div className="glass-card p-6 sm:p-10 rounded-2xl border-2 border-accent/40 bg-surface shadow-2xl relative overflow-hidden transition-all duration-300">
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Side: Step Header & Description */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-accent text-btn-text-primary text-xs font-mono font-extrabold uppercase">
                    STAGE {current.num}
                  </span>
                  <span className="text-xs font-mono uppercase text-accent font-bold tracking-widest">
                    {current.title}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight leading-tight">
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

              {/* Right Side: Highlights Checklist */}
              <div className="lg:col-span-5 bg-surface-secondary/80 p-6 rounded-xl border border-border-subtle space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                  <span className="text-xs font-mono uppercase font-bold text-text-primary tracking-wider flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accent" />
                    <span>Stage Capabilities</span>
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

            {/* Bottom Controls Bar */}
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

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-3 py-2 rounded-lg bg-surface-secondary border border-border-subtle text-xs font-mono font-bold text-text-primary hover:border-accent/40 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-accent" />
                      <span>Pause Auto-Loop</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-accent" />
                      <span>Auto Play Loop</span>
                    </>
                  )}
                </button>

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
