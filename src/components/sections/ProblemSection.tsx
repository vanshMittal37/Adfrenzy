import { AlertTriangle, TrendingDown, EyeOff } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      num: "01",
      title: "CREATIVE FATIGUE",
      desc: "Your best ads stop performing when fresh creative doesn't arrive fast enough.",
      icon: EyeOff,
      detail: "Without high-velocity creative testing, Meta and Google ad fatigue causes CAC to spike rapidly."
    },
    {
      num: "02",
      title: "EXPENSIVE ACQUISITION",
      desc: "Increasing ad spend doesn't always mean increasing profitable revenue.",
      icon: TrendingDown,
      detail: "Scaling media budgets without unit economics modeling quickly erodes net contribution margin."
    },
    {
      num: "03",
      title: "LOST CONVERSIONS",
      desc: "Great traffic means little if your landing page, website or checkout doesn't convert.",
      icon: AlertTriangle,
      detail: "High bounce rates and slow mobile stores waste paid ad traffic before buyers can complete checkout."
    }
  ];

  return (
    <section className="py-28 bg-background border-b border-border-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-accent/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full font-bold">
            THE PROBLEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight leading-tight">
            Your marketing shouldn't work in{" "}
            <span className="font-serif-italic font-normal italic text-accent drop-shadow-[0_2px_10px_var(--accent-soft)]">
              silos
            </span>
            .
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Your media team needs better creative. Your creative team needs better data. Your website needs to convert the traffic you're already paying for. When every part works separately, growth becomes slower, more expensive and harder to predict. SparkMedia connects the entire journey — from the first impression to the final conversion.
          </p>
        </div>

        {/* 3 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="relative bg-[var(--card-bg)] border border-[var(--card-border)] shadow-[var(--card-shadow)] p-8 rounded-[20px] flex flex-col justify-between group problem-card overflow-hidden"
              >
                {/* Internal card accent radial hover glow */}
                <div className="absolute -right-20 -top-20 w-44 h-44 bg-accent/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-3xl font-extrabold text-accent tracking-tighter">
                      {prob.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[var(--card-icon-bg)] text-[var(--card-icon-color)] flex items-center justify-center border border-[var(--card-border)] group-hover:scale-110 group-hover:bg-accent group-hover:text-background transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-extrabold text-text-primary mb-4 tracking-wide group-hover:text-accent transition-colors duration-300">
                    {prob.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 italic">
                    "{prob.desc}"
                  </p>
                </div>
                
                <p className="text-xs text-text-secondary border-t border-[var(--card-border)] pt-5 font-mono leading-relaxed">
                  {prob.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
