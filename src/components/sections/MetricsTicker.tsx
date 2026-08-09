import { metricsData } from "@/data/metrics";

export function MetricsTicker() {
  return (
    <section className="py-6 bg-[#FFE500] text-[#0A0A0A] overflow-hidden select-none">
      <div className="flex w-full whitespace-nowrap overflow-hidden">
        <div className="flex items-center gap-12 animate-rise-up whitespace-nowrap font-extrabold text-sm sm:text-base tracking-wider uppercase">
          {[...metricsData, ...metricsData, ...metricsData].map((metric, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span>{metric.label}:</span>
              <span className="bg-[#0A0A0A] text-[#FFE500] px-2.5 py-0.5 rounded font-mono font-bold">
                {metric.value}
              </span>
              <span className="text-black/40">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
