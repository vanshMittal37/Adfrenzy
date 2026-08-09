import { metricsData } from "@/data/metrics";

export function MetricsTicker() {
  const repeatedMetrics = [...metricsData, ...metricsData, ...metricsData, ...metricsData, ...metricsData, ...metricsData];

  return (
    <section className="py-6 bg-accent text-[var(--btn-text-primary)] overflow-hidden select-none border-y border-border-subtle">
      <div className="flex w-full overflow-hidden relative">
        <div className="flex items-center gap-12 whitespace-nowrap font-extrabold text-sm sm:text-base tracking-wider uppercase animate-marquee-ltr">
          {repeatedMetrics.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-4 shrink-0">
              <span>{metric.label}:</span>
              <span className="bg-[var(--btn-shadow)] text-accent px-2.5 py-0.5 rounded font-mono font-bold">
                {metric.value}
              </span>
              <span className="opacity-40">|</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
