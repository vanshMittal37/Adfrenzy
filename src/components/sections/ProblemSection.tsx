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
    <section className="py-24 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF3B30]">
            THE PROBLEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Your marketing shouldn't work in{" "}
            <span className="font-serif-italic font-normal italic text-neutral-300">
              silos
            </span>
            .
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
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
                className="glass-card p-8 relative flex flex-col justify-between group border-l-4 border-l-[#FF3B30]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-[#FF3B30]">
                      {prob.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#FF3B30]/10 text-[#FF3B30] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                    {prob.title}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    "{prob.desc}"
                  </p>
                </div>
                <p className="text-xs text-neutral-400 border-t border-white/10 pt-4 font-mono">
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
