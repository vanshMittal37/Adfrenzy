import { Check, X } from "lucide-react";

export function ComparisonTable() {
  const comparisonRows = [
    { feature: "Creative + Performance Unified Loop", spark: true, media: false, creative: false },
    { feature: "Full Growth Strategy & P&L Alignment", spark: true, media: false, creative: false },
    { feature: "High-Volume Performance Creative & UGC", spark: true, media: false, creative: true },
    { feature: "Paid Media Buying (Meta, Google, TikTok)", spark: true, media: true, creative: false },
    { feature: "CRO & High-Converting Landing Pages", spark: true, media: false, creative: false },
    { feature: "Email / SMS Retention & LTV Expansion", spark: true, media: false, creative: false },
    { feature: "Social Content & Brand Campaigns", spark: true, media: false, creative: true },
    { feature: "Embedded Senior Growth Team", spark: true, media: false, creative: false },
    { feature: "Data-Driven Creative Feedback Loop", spark: true, media: false, creative: false },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500]">
            WHY SPARKMEDIA
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            More than an agency. Your{" "}
            <span className="font-serif-italic font-normal italic text-slate-200">
              growth team
            </span>
            .
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Paid media agencies manage ads. Creative shops make assets. We own the entire growth loop.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="glass-card overflow-x-auto border border-white/10 rounded-2xl">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-white/10 bg-[#111111]">
                <th className="p-6 text-sm font-bold text-white uppercase tracking-wider w-2/5">
                  Capability / Approach
                </th>
                <th className="p-6 text-sm font-extrabold text-[#FFE500] uppercase tracking-wider bg-[#FFE500]/10 text-center w-1/5 border-x border-[#FFE500]/30">
                  SparkMedia.ad
                </th>
                <th className="p-6 text-sm font-semibold text-neutral-400 uppercase tracking-wider text-center w-1/5">
                  Media Agency
                </th>
                <th className="p-6 text-sm font-semibold text-neutral-400 uppercase tracking-wider text-center w-1/5">
                  Creative Agency
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 font-medium text-neutral-200">
                    {row.feature}
                  </td>
                  <td className="p-5 text-center bg-[#FFE500]/5 border-x border-[#FFE500]/20">
                    {row.spark ? (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#FFE500] text-black">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                    ) : (
                      <X className="w-5 h-5 mx-auto text-neutral-600" />
                    )}
                  </td>
                  <td className="p-5 text-center">
                    {row.media ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-neutral-300">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <X className="w-4 h-4 mx-auto text-neutral-600" />
                    )}
                  </td>
                  <td className="p-5 text-center">
                    {row.creative ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-neutral-300">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <X className="w-4 h-4 mx-auto text-neutral-600" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8 font-mono text-xs text-neutral-400">
          ⚡ One team. One strategy. One feedback loop.
        </div>
      </div>
    </section>
  );
}
