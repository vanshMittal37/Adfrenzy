import Image from "next/image";
import { teamData } from "@/data/team";
import { ExternalLink } from "lucide-react";

export function TeamGrid() {
  return (
    <section className="py-24 bg-[#0D0D0D] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500]">
            THE OPERATORS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The people behind the{" "}
            <span className="font-serif-italic font-normal italic text-slate-200">
              work
            </span>
            .
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Senior strategists, creative directors, and performance media buyers dedicated to scaling your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <div key={member.id} className="glass-card overflow-hidden group">
              <div className="relative aspect-square w-full bg-neutral-900 overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
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
