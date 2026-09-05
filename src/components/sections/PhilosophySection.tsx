import { ArrowRight } from "lucide-react";

export function PhilosophySection() {
  const steps = [
    "CREATIVE",
    "MEDIA",
    "DATA",
    "INSIGHT",
    "BETTER CREATIVE",
    "BETTER PERFORMANCE"
  ];

  return (
    <section className="py-24 bg-background border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="text-xs font-mono uppercase tracking-widest text-accent">
            OUR PHILOSOPHY
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight leading-tight">
            Creative without performance is{" "}
            <span className="font-serif-italic font-normal italic text-accent">
              guesswork
            </span>
            .<br /> Performance without creative eventually hits a{" "}
            <span className="font-serif-italic font-normal italic text-accent">
              ceiling
            </span>
            .
          </h2>

          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            That&apos;s why our creative strategists and media buyers work together in one loop instead of handing work off from one isolated department to another.
          </p>

          {/* Linear Flow Diagram */}
          <div className="py-8">
            <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs sm:text-sm font-bold">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="px-3.5 py-2 rounded-lg bg-surface border border-border-subtle text-text-primary shadow-sm">
                    {step}
                  </span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-accent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
