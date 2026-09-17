import { teamData } from "@/data/team";
import { ExternalLink, TrendingUp, Sparkles, Zap } from "lucide-react";

export function TeamGrid() {
  const getIcon = (type: string) => {
    switch (type) {
      case "strategy":
        return <TrendingUp className="w-10 h-10 text-accent" />;
      case "creative":
        return <Sparkles className="w-10 h-10 text-purple-400" />;
      case "media":
        return <Zap className="w-10 h-10 text-blue-400" />;
      default:
        return <TrendingUp className="w-10 h-10 text-accent" />;
    }
  };

  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500]">
            THE OPERATING PILLARS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How we structure your{" "}
            <span className="font-serif-italic font-normal italic text-slate-200">
              growth team
            </span>
            .
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Senior growth strategists, creative directors, and performance media buyers dedicated to scaling your D2C brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <div key={member.id} className="glass-card overflow-hidden group p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-surface-secondary flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {getIcon(member.iconType)}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-extrabold text-white">{member.name}</h3>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-400 hover:text-[#FFE500] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <div className="text-xs font-mono text-[#FFE500] font-semibold">
                    {member.role}
                  </div>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed pt-2">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
