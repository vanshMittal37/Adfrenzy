import { LeadQualificationForm } from "@/components/forms/LeadQualificationForm";

export function StrategyCallSection() {
  const steps = [
    { num: "01", title: "Understand.", desc: "We look at your spend, creative and conversion path." },
    { num: "02", title: "Diagnose.", desc: "We show you where the money is leaking and why." },
    { num: "03", title: "Recommend.", desc: "The highest-leverage fixes, in order." },
    { num: "04", title: "Plan.", desc: "A 90 day roadmap. Yours to keep either way." }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-white/10" id="book-a-call">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500]">
            READY WHEN YOU ARE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's find what's actually holding the{" "}
            <span className="font-serif-italic font-normal italic text-slate-200">
              growth back
            </span>
            .
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Book a call and we'll go through your ad account, your site and your funnel. You get a 90 day roadmap out of it whether you work with us or not.
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
