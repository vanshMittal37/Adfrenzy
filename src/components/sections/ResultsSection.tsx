import { metricsData } from "@/data/metrics";

export function ResultsSection() {
  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-white/10" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500]">
            MEASURABLE OUTCOMES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            We don't just make things look better. We{" "}
            <span className="font-serif-italic font-normal italic text-slate-200">
              measure what happens next
            </span>
            .
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Every dollar spent and creative asset shipped is tied directly to customer acquisition, return on spend, and bottom-line P&L growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {metricsData.map((m, idx) => (
            <div
              key={idx}
              className="glass-card p-6 text-center space-y-2 border-t-2 border-t-[#FFE500]"
            >
              <div className="font-mono text-3xl font-extrabold text-[#FFE500]">
                {m.value}
              </div>
              <div className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
