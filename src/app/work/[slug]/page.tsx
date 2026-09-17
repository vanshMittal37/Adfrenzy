import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudiesData } from "@/data/caseStudies";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Lightbox } from "@/components/sections/Lightbox";
import { ArrowLeft, CheckCircle2, TrendingUp, Sparkles, Zap } from "lucide-react";
import type { Metadata } from "next";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudiesData[slug];

  if (!cs) {
    return {
      title: "Case Study Not Found",
    };
  }

  const title = `${cs.clientName} Case Study`;
  const fullTitle = `${title} | Adfrenzy Media`;
  const description = cs.tagline;
  const url = `https://www.adfrenzymedia.com/work/${slug}`;
  const ogImg = cs.heroImage.startsWith("http")
    ? cs.heroImage
    : `https://www.adfrenzymedia.com${cs.heroImage}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "article",
      siteName: "Adfrenzy Media",
      images: [
        {
          url: ogImg,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImg],
    },
  };
}

const SCREENSHOT_MAP: Record<
  string,
  {
    src: string;
    sectionEyebrow: string;
    sectionTitle: string;
    sectionDesc: string;
    alt: string;
  }
> = {
  "iyka": {
    src: "/assets/iyka.jpeg",
    sectionEyebrow: "REVENUE PERFORMANCE",
    sectionTitle: "Sales & Performance Snapshot",
    sectionDesc: "A visual demonstration of campaign sales generation, scaling trajectory, and daily performance metrics.",
    alt: "Sales performance analytics dashboard"
  }
};

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const cs = caseStudiesData[slug];

  if (!cs) {
    notFound();
  }

  const screenshotInfo = SCREENSHOT_MAP[slug];

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": cs.title,
    "description": cs.tagline,
    "publisher": {
      "@type": "Organization",
      "name": "Adfrenzy Media",
      "url": "https://www.adfrenzymedia.com/"
    },
    "mainEntityOfPage": `https://www.adfrenzymedia.com/work/${slug}`,
    "image": cs.heroImage.startsWith("http")
      ? cs.heroImage
      : `https://www.adfrenzymedia.com${cs.heroImage}`
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.adfrenzymedia.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Work",
        "item": "https://www.adfrenzymedia.com/work"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": cs.clientName,
        "item": `https://www.adfrenzymedia.com/work/${slug}`
      }
    ]
  };

  return (
    <div className="pt-28 pb-16 bg-background border-b border-border-subtle text-text-primary transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Work</span>
        </Link>

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

        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border-subtle mb-16 bg-surface-secondary shadow-md">
          {cs.videoUrl ? (
            <video
              src={cs.videoUrl}
              controls
              className="w-full h-full object-cover"
              poster={cs.heroImage}
            />
          ) : (
            <Image 
              src={cs.heroImage} 
              alt={cs.title} 
              fill 
              className="object-cover" 
              priority 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
            />
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase text-red-500 tracking-widest font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> THE CHALLENGE
              </h3>
              <h2 className="text-2xl font-bold text-text-primary">Scaling Bottlenecks & Ad Fatigue</h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">{cs.challenge}</p>
            </div>

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

            {screenshotInfo && (
              <Lightbox
                src={screenshotInfo.src}
                alt={screenshotInfo.alt}
                sectionEyebrow={screenshotInfo.sectionEyebrow}
                sectionTitle={screenshotInfo.sectionTitle}
                sectionDesc={screenshotInfo.sectionDesc}
              />
            )}
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="glass-card p-8 border-l-4 border-l-accent space-y-4 shadow-sm">
              <h4 className="text-xs font-mono text-accent font-bold uppercase">Client Verdict</h4>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed italic">
                "{cs.testimonialQuote || `Adfrenzy Media delivers direct results with absolute clarity. They operate as a true extension of our growth team.`}"
              </p>
              <div className="text-xs font-bold text-text-primary pt-2 border-t border-border-subtle font-mono">
                {cs.testimonialAuthor || `${cs.clientName} Growth Partner`}
              </div>
            </div>

            {cs.servicesUsed && cs.servicesUsed.length > 0 && (
              <div className="glass-card p-6 border border-border-subtle space-y-4 shadow-sm">
                <h4 className="text-xs font-mono text-text-primary font-bold uppercase tracking-wider">
                  Services Deployed
                </h4>
                <div className="space-y-2.5">
                  {cs.servicesUsed.map((svc, idx) => (
                    <Link
                      key={idx}
                      href={`/services/${svc.slug}`}
                      className="block p-3 rounded-lg bg-surface-secondary/60 hover:bg-accent/10 border border-border-subtle hover:border-accent/40 transition-all text-sm font-semibold text-text-primary hover:text-accent group"
                    >
                      <div className="flex items-center justify-between">
                        <span>{svc.title}</span>
                        <span className="text-xs text-text-secondary group-hover:text-accent font-mono">Explore →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <FinalCTA />
    </div>
  );
}
