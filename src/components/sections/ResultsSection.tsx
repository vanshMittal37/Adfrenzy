import { metricsData } from "@/data/metrics";

export function ResultsSection() {
  return (
    <section className="py-24 bg-background border-b border-border-subtle" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            THE NUMBERS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            What the work adds up{" "}
            <span className="font-serif-italic font-normal italic text-accent">
              to
            </span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            No vanity metrics. Every number here comes out of a live account.
          </p>
        </div>

        {/* Confirmed & Placeholder Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {metricsData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 border-l-4 border-l-accent space-y-2 bg-surface rounded-r-2xl border border-border-subtle shadow-md"
            >
              <span className="text-[10px] font-mono tracking-wider text-text-secondary uppercase font-bold">
                {item.label}
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-text-primary font-mono">
                {item.value}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
