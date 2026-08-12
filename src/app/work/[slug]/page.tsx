import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudiesData, CaseStudy } from "@/data/caseStudies";
import { portfolioData, PortfolioItem } from "@/data/portfolio";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowLeft, CheckCircle2, Globe, TrendingUp, Sparkles, Zap } from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Combine all slugs from both datasets to generate static params
  const slugs = new Set([
    ...Object.keys(caseStudiesData),
    ...portfolioData.map((item) => item.slug)
  ]);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  
  // 1. Try to find in detailed case studies
  let cs = caseStudiesData[slug];
  let portfolioItem = portfolioData.find((p) => p.slug === slug);

  // If not found in either, return 404
  if (!cs && !portfolioItem) {
    notFound();
  }

  // 2. If no detailed case study, build dynamic mock case study from portfolio item data
  if (!cs && portfolioItem) {
    cs = {
      slug: portfolioItem.slug,
      clientName: portfolioItem.clientName,
      industry: portfolioItem.industry,
      title: portfolioItem.title,
      tagline: portfolioItem.shortDescription,
      challenge: `Expanding digital presence and scaling purchase volumes. ${portfolioItem.clientName} required custom creatives and strategic media buying structures to acquire customers efficiently and lower overall acquisition costs.`,
      strategy: [
        "Conducted detailed funnel mapping and audience research to define target demographics.",
        "Launched high-performance catalog placements and custom collection formats.",
        "Monitored retention loops to encourage customer lifetime value improvements."
      ],
      execution: {
        creative: "Optimized direct response layouts, visual storytelling, and platform-specific formats.",
        media: "Structured ad accounts for scale with segmented test budgets and unified broad targeting.",
        cro: "Streamlined storefront entry corridors, layout navigation, and landing page pathways.",
        retention: "Established email engagement runs and custom automated follow-up sequences."
      },
      results: {
        metric1: { 
          label: "Performance Metric", 
          value: portfolioItem.metrics.roas || "Scale Enabled" 
        },
        metric2: { 
          label: "Revenue Growth", 
          value: portfolioItem.metrics.revenueGrowth || "Optimized" 
        },
        metric3: { 
          label: "Funnel Lift", 
          value: portfolioItem.metrics.cacReduction || portfolioItem.metrics.cvrUplift || "Conversion Focused" 
        }
      },
      heroImage: portfolioItem.thumbnail,
      videoUrl: portfolioItem.videoUrl
    };
  }

  return (
    <div className="pt-28 pb-16 bg-background border-b border-border-subtle text-text-primary transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Work</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 mb-12">
          <div className="inline-block bg-accent/10 border border-accent/25 text-accent px-3.5 py-1 rounded-md text-xs font-mono font-bold uppercase">
            {cs.industry} Case Study
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight leading-tight">
            {cs.title}
          </h1>
          <p className="text-text-secondary text-base sm:text-lg max-w-3xl leading-relaxed">
            {cs.tagline}
          </p>
        </div>

        {/* Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 border-t-2 border-t-accent text-center space-y-1">
            <span className="text-xs font-mono text-text-secondary uppercase">{cs.results.metric1.label}</span>
            <div className="font-mono text-3xl font-extrabold text-accent">{cs.results.metric1.value}</div>
          </div>
          <div className="glass-card p-6 border-t-2 border-t-emerald-500 dark:border-t-emerald-400 text-center space-y-1">
            <span className="text-xs font-mono text-text-secondary uppercase">{cs.results.metric2.label}</span>
            <div className="font-mono text-3xl font-extrabold text-emerald-500 dark:text-emerald-400">{cs.results.metric2.value}</div>
          </div>
          <div className="glass-card p-6 border-t-2 border-t-sky-500 dark:border-t-sky-400 text-center space-y-1">
            <span className="text-xs font-mono text-text-secondary uppercase">{cs.results.metric3.label}</span>
            <div className="font-mono text-3xl font-extrabold text-sky-500 dark:text-sky-400">{cs.results.metric3.value}</div>
          </div>
        </div>

        {/* Hero Image / Video */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border-subtle mb-16 bg-surface-secondary shadow-md">
          {cs.videoUrl ? (
            <video
              src={cs.videoUrl}
              controls
              className="w-full h-full object-cover"
              poster={cs.heroImage}
            />
          ) : (
            <Image src={cs.heroImage} alt={cs.title} fill className="object-cover" priority />
          )}
        </div>

        {/* Content Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-10">
            {/* Challenge */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase text-red-500 tracking-widest font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> THE CHALLENGE
              </h3>
              <h2 className="text-2xl font-bold text-text-primary">Scaling Bottlenecks & Ad Fatigue</h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">{cs.challenge}</p>
            </div>

            {/* Strategy */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase text-accent tracking-widest font-bold flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" /> THE STRATEGY
              </h3>
              <ul className="space-y-3">
                {cs.strategy.map((st, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-text-secondary">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-none mt-0.5" />
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Execution */}
            <div className="space-y-4 pt-4 border-t border-border-subtle">
              <h3 className="text-xs font-mono uppercase text-text-secondary tracking-widest font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> THE EXECUTION
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="glass-card p-4 space-y-1">
                  <span className="text-accent font-mono font-bold block">CREATIVE</span>
                  <p className="text-text-secondary">{cs.execution.creative}</p>
                </div>
                <div className="glass-card p-4 space-y-1">
                  <span className="text-accent font-mono font-bold block">MEDIA BUYING</span>
                  <p className="text-text-secondary">{cs.execution.media}</p>
                </div>
                <div className="glass-card p-4 space-y-1">
                  <span className="text-accent font-mono font-bold block">CRO & LANDERS</span>
                  <p className="text-text-secondary">{cs.execution.cro}</p>
                </div>
                <div className="glass-card p-4 space-y-1">
                  <span className="text-accent font-mono font-bold block">RETENTION</span>
                  <p className="text-text-secondary">{cs.execution.retention}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Testimonial */}
          <div className="lg:col-span-4">
            <div className="glass-card p-8 border-l-4 border-l-accent space-y-4 sticky top-28 shadow-sm">
              <h4 className="text-xs font-mono text-accent font-bold uppercase">Client Verdict</h4>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed italic">
                "{cs.testimonialQuote || `SparkMedia delivers direct results with absolute clarity. They operate as a true extension of our growth team.`}"
              </p>
              <div className="text-xs font-bold text-text-primary pt-2 border-t border-border-subtle font-mono">
                {cs.testimonialAuthor || `${cs.clientName} Growth Partner`}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FinalCTA />
    </div>
  );
}
