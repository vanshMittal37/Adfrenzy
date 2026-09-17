import Link from "next/link";
import { notFound } from "next/navigation";
import { insightsData } from "@/data/insights";
import { servicesData } from "@/data/services";
import { caseStudiesData } from "@/data/caseStudies";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  BookOpen
} from "lucide-react";
import type { Metadata } from "next";

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightsData.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const title = article.title;
  const fullTitle = `${article.title} | Adfrenzy Media`;
  const description = article.excerpt;
  const url = `https://www.adfrenzymedia.com/insights/${slug}`;

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
      publishedTime: article.publishDate,
      authors: [article.author.name],
      siteName: "Adfrenzy Media",
      images: [
        {
          url: "https://www.adfrenzymedia.com/og-image.png",
          width: 1024,
          height: 1024,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["https://www.adfrenzymedia.com/og-image.png"],
    },
  };
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": article.publishDate,
    "author": {
      "@type": "Organization",
      "name": "Adfrenzy Media",
      "url": "https://www.adfrenzymedia.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Adfrenzy Media",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.adfrenzymedia.com/Logo_Adfrenzy_dark.png"
      }
    },
    "mainEntityOfPage": `https://www.adfrenzymedia.com/insights/${slug}`,
    "image": "https://www.adfrenzymedia.com/og-image.png"
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
        "name": "Insights",
        "item": "https://www.adfrenzymedia.com/insights"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://www.adfrenzymedia.com/insights/${slug}`
      }
    ]
  };

  const relatedCaseStudies = article.relatedCaseStudies
    .map((csRef) => caseStudiesData[csRef.slug])
    .filter((cs): cs is NonNullable<typeof cs> => Boolean(cs));

  const relatedServices = article.relatedServices
    .map((svcRef) => servicesData.find((s) => s.slug === svcRef.slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div className="pt-28 pb-20 bg-[#0A0A0A] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-[#FFE500] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Insights</span>
        </Link>

        {/* Header */}
        <header className="space-y-6 mb-12 border-b border-white/10 pb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#FFE500]/10 border border-[#FFE500]/30 text-[#FFE500] text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
              {article.category}
            </span>
            <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-neutral-500" />
              {article.readTime}
            </span>
            <span className="text-neutral-600">·</span>
            <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-neutral-500" />
              {article.publishDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#FFE500] font-medium leading-relaxed">
            {article.headline}
          </p>

          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#FFE500] border border-white/15">
              <User className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">{article.author.name}</div>
              <div className="text-xs text-neutral-400 font-mono">{article.author.role}</div>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#FFE500] font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>Table of Contents</span>
          </h2>
          <nav className="space-y-2">
            {article.tableOfContents.map((toc) => (
              <a
                key={toc.id}
                href={`#${toc.id}`}
                className="block text-sm text-neutral-300 hover:text-[#FFE500] transition-colors py-1 font-medium"
              >
                {toc.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Main Content Body */}
        <div className="space-y-12 text-neutral-200 leading-relaxed text-base sm:text-lg">
          
          {/* Intro */}
          <div className="p-6 rounded-xl bg-white/[0.03] border-l-4 border-l-[#FFE500] italic text-neutral-300">
            {article.content.intro}
          </div>

          {/* Sections */}
          {article.content.sections.map((sec) => (
            <section key={sec.id} id={sec.id} className="space-y-6 scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-4 border-t border-white/10">
                {sec.heading}
              </h2>

              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}

              {sec.bulletPoints && (
                <ul className="space-y-3 pl-2">
                  {sec.bulletPoints.map((bp, bpIdx) => (
                    <li key={bpIdx} className="flex items-start gap-3 text-neutral-300 text-sm sm:text-base">
                      <CheckCircle2 className="w-5 h-5 text-[#FFE500] flex-none mt-0.5" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}

              {sec.takeawayBox && (
                <div className="glass-card p-6 rounded-xl border border-[#FFE500]/30 space-y-2 bg-[#FFE500]/[0.02]">
                  <div className="text-xs font-mono font-bold uppercase text-[#FFE500] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Key Strategic Takeaway</span>
                  </div>
                  <p className="text-sm sm:text-base text-white font-medium">
                    {sec.takeawayBox}
                  </p>
                </div>
              )}
            </section>
          ))}

          {/* Conclusion */}
          <div className="pt-8 border-t border-white/10 space-y-4">
            <h3 className="text-xl font-bold text-white">Summary & Next Steps</h3>
            <p className="text-neutral-300 leading-relaxed">
              {article.content.conclusion}
            </p>
          </div>
        </div>

        {/* Cross-Linking: Services Deployed */}
        {relatedServices.length > 0 && (
          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-xs font-mono uppercase text-[#FFE500] tracking-widest font-bold mb-6">
              Relevant Adfrenzy Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedServices.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="glass-card p-6 rounded-xl border border-white/10 hover:border-[#FFE500]/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-bold text-white group-hover:text-[#FFE500] transition-colors">
                      {svc.title}
                    </h4>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-[#FFE500] group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-neutral-400 line-clamp-2">
                    {svc.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Cross-Linking: Case Studies */}
        {relatedCaseStudies.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xs font-mono uppercase text-[#FFE500] tracking-widest font-bold mb-6">
              Case Studies Proving This Framework
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedCaseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/work/${cs.slug}`}
                  className="glass-card p-6 rounded-xl border border-white/10 hover:border-[#FFE500]/40 transition-all group"
                >
                  <div className="text-[11px] font-mono text-[#FFE500] uppercase font-bold mb-1">
                    {cs.industry}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-bold text-white group-hover:text-[#FFE500] transition-colors">
                      {cs.clientName}
                    </h4>
                    <span className="text-xs font-mono font-bold text-[#FFE500]">
                      {cs.results.metric1.value}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 line-clamp-2">
                    {cs.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </article>

      <div className="mt-20">
        <FinalCTA />
      </div>
    </div>
  );
}
