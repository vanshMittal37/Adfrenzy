"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";

export function GrowthLoop() {
  const openDaySchedule = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-dayschedule"));
    }
  };

  const pillars = [
    {
      num: "01",
      title: "A funnel built around your brand, not a template",
      description:
        "A 499 rupee face wash and an 18,000 rupee bridal set do not get bought the same way. One converts on the first click. The other takes nine touches and a WhatsApp conversation before anyone pays.",
      points: [
        "Funnel mapped to your real consideration cycle",
        "Separate journeys for cold, warm and returning buyers",
        "Offers and landers matched to the stage, not to the brand average",
        "Every stage judged on its own number, not on account ROAS",
      ],
    },
    {
      num: "02",
      title: "Creative fatigue handled before it lands",
      description:
        "Fatigue isn&apos;t a creative problem. It&apos;s a supply problem. Accounts fall over because the replacement wasn&apos;t ready, not because the ad suddenly stopped working.",
      points: [
        "Creative ships weekly, on a schedule you can see",
        "Tested hook bank ready to deploy, always",
        "Winners refreshed as variants before they burn out",
        "Fatigue caught by the numbers, not by a hunch",
      ],
    },
    {
      num: "03",
      title: "Fluctuation engineered out",
      description:
        "Performance swings for boring, fixable reasons. One ad carrying 70% of revenue. Budgets doubled overnight and thrown straight back into learning. One audience quietly saturating. A structure that gets torn up every time somebody panics on a Monday.",
      points: [
        "No single ad allowed to carry the account",
        "Budget changes in controlled steps",
        "Stable structure, so the signal stays clean",
        "Weekly review that ends in a decision",
      ],
    },
  ];

  return (
    <section
      className="py-24 bg-background border-b border-border-subtle relative overflow-hidden"
      id="growth-loop"
    >
      <div id="about" className="absolute -top-24 left-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            THE PART NOBODY TALKS ABOUT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            A good month is easy. Twelve in a row is the{" "}
            <span className="font-serif-italic font-normal italic text-accent">
              job
            </span>
            .
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Most brands don&apos;t have a performance problem. They have a consistency problem. One month is 6x, the next is 2.1x, and nobody can explain what changed. That isn&apos;t bad luck. It&apos;s three missing parts.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-2xl border-l-4 border-l-accent flex flex-col justify-between space-y-6 shadow-md bg-[var(--card-bg)] border-[var(--card-border)]"
            >
              <div className="space-y-4">
                <span className="font-mono text-2xl font-extrabold text-accent">
                  {item.num}
                </span>
                <h3 className="text-xl font-bold text-text-primary leading-snug">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-4 border-t border border-border-subtle space-y-2">
                  {item.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-2.5 text-xs text-text-secondary"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing & CTA */}
        <div className="text-center space-y-6 max-w-xl mx-auto border-t border-border-subtle pt-12">
          <p className="text-lg font-bold text-text-primary font-mono">
            The goal isn&apos;t a screenshot month. It&apos;s a graph you can plan a business on.
          </p>
          <div>
            <button
              onClick={openDaySchedule}
              className="btn-yellow px-8 py-3.5 text-sm font-extrabold inline-flex items-center justify-center gap-2.5 rounded-full cursor-pointer"
            >
              <span>Book a Growth Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

