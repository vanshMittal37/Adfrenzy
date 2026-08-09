import { LeadQualificationForm } from "@/components/forms/LeadQualificationForm";

export function StrategyCallSection() {
  const steps = [
    { num: "01", title: "UNDERSTAND", desc: "Audit your current ad spend, creatives, and conversion funnel." },
    { num: "02", title: "DIAGNOSE", desc: "Pinpoint where your spend is leaking and why ROAS is plateauing." },
    { num: "03", title: "RECOMMEND", desc: "Identify high-leverage creative, CRO, and retention opportunities." },
    { num: "04", title: "PLAN", desc: "Deliver a clear 90-day growth roadmap, yours to keep either way." }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-white/10" id="book-a-call">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500]">
            READY TO GROW?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's find what's holding your{" "}
            <span className="font-serif-italic font-normal italic text-slate-200">
              growth back
            </span>
            .
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            We'll look at your current marketing, creative, funnel and conversion journey and identify the biggest opportunities.
          </p>
        </div>

        {/* 4 Steps Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
          {steps.map((s, idx) => (
            <div key={idx} className="glass-card p-5 border-l-2 border-l-[#FFE500] space-y-2">
              <span className="font-mono text-xs font-bold text-[#FFE500]">{s.num}</span>
              <h4 className="font-bold text-white text-sm tracking-wide">{s.title}</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <LeadQualificationForm />
      </div>
    </section>
  );
}
