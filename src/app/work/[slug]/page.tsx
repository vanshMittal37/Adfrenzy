import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudiesData } from "@/data/caseStudies";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const cs = caseStudiesData[slug];

  if (!cs) {
    notFound();
  }

  return (
    <div className="pt-28 pb-16 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-[#FFE500] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Work</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 mb-12">
          <div className="inline-block bg-[#FFE500]/10 text-[#FFE500] px-3 py-1 rounded text-xs font-mono font-bold uppercase border border-[#FFE500]/20">
            {cs.industry} Case Study
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {cs.title}
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl">
            {cs.tagline}
          </p>
        </div>

        {/* Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 border-t-2 border-t-[#FFE500] text-center space-y-1">
            <span className="text-xs font-mono text-neutral-400 uppercase">{cs.results.metric1.label}</span>
            <div className="font-mono text-3xl font-extrabold text-[#FFE500]">{cs.results.metric1.value}</div>
          </div>
          <div className="glass-card p-6 border-t-2 border-t-emerald-400 text-center space-y-1">
            <span className="text-xs font-mono text-neutral-400 uppercase">{cs.results.metric2.label}</span>
            <div className="font-mono text-3xl font-extrabold text-emerald-400">{cs.results.metric2.value}</div>
          </div>
          <div className="glass-card p-6 border-t-2 border-t-sky-400 text-center space-y-1">
            <span className="text-xs font-mono text-neutral-400 uppercase">{cs.results.metric3.label}</span>
            <div className="font-mono text-3xl font-extrabold text-sky-400">{cs.results.metric3.value}</div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 mb-16 bg-neutral-900">
          <Image src={cs.heroImage} alt={cs.title} fill className="object-cover" priority />
        </div>

        {/* Content Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-10">
            {/* Challenge */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase text-[#FF3B30] tracking-widest font-bold">THE CHALLENGE</h3>
              <h2 className="text-2xl font-bold text-white">Scaling Bottlenecks & Ad Fatigue</h2>
              <p className="text-neutral-300 text-sm leading-relaxed">{cs.challenge}</p>
            </div>

            {/* Strategy */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase text-[#FFE500] tracking-widest font-bold">THE STRATEGY</h3>
              <ul className="space-y-3">
                {cs.strategy.map((st, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                    <CheckCircle2 className="w-5 h-5 text-[#FFE500] flex-none mt-0.5" />
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Execution */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-xs font-mono uppercase text-neutral-400 tracking-widest font-bold">THE EXECUTION</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="glass-card p-4 space-y-1">
                  <span className="text-[#FFE500] font-mono font-bold block">CREATIVE</span>
                  <p className="text-neutral-300">{cs.execution.creative}</p>
                </div>
                <div className="glass-card p-4 space-y-1">
                  <span className="text-[#FFE500] font-mono font-bold block">MEDIA BUYING</span>
                  <p className="text-neutral-300">{cs.execution.media}</p>
                </div>
                <div className="glass-card p-4 space-y-1">
                  <span className="text-[#FFE500] font-mono font-bold block">CRO & LANDERS</span>
                  <p className="text-neutral-300">{cs.execution.cro}</p>
                </div>
                <div className="glass-card p-4 space-y-1">
                  <span className="text-[#FFE500] font-mono font-bold block">RETENTION</span>
                  <p className="text-neutral-300">{cs.execution.retention}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Testimonial */}
          <div className="lg:col-span-4">
            <div className="glass-card p-8 border-l-4 border-l-[#FFE500] space-y-4 sticky top-28">
              <h4 className="text-xs font-mono text-[#FFE500] font-bold uppercase">Client Verdict</h4>
              <p className="text-neutral-200 text-sm leading-relaxed italic">
                "{cs.testimonialQuote}"
              </p>
              <div className="text-xs font-bold text-white pt-2 border-t border-white/10 font-mono">
                {cs.testimonialAuthor}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FinalCTA />
    </div>
  );
}
