import { testimonialsData } from "@/data/testimonials";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500]">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted by brands that{" "}
            <span className="font-serif-italic font-normal italic text-slate-200">
              chose to grow
            </span>{" "}
            with us.
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Hear how our integrated creative + performance loop delivered growth for our partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="glass-card p-8 flex flex-col justify-between space-y-6 relative border-t-2 border-t-[#FFE500]"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#FFE500]/40" />
                <p className="text-neutral-200 text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-1">
                {t.metricsHighlight && (
                  <span className="inline-block bg-[#FFE500]/10 text-[#FFE500] px-2.5 py-0.5 rounded text-[11px] font-mono font-bold mb-2">
                    {t.metricsHighlight}
                  </span>
                )}
                <div className="font-bold text-white text-sm">
                  {t.authorName}
                </div>
                <div className="text-xs text-neutral-400 font-mono">
                  {t.authorTitle} · {t.companyName}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
