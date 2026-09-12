import Link from "next/link";
import { insightsData } from "@/data/insights";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "D2C Growth Insights & Performance Marketing Guides",
  description:
    "Explore in-depth playbooks, unit economics frameworks, Meta ads scaling guides, CRO checklists, and SEO strategies for direct-to-consumer brands.",
  alternates: {
    canonical: "https://www.adfrenzymedia.com/insights",
  },
  openGraph: {
    title: "D2C Growth Insights & Performance Marketing Guides | Adfrenzy Media",
    description:
      "Explore in-depth playbooks, unit economics frameworks, Meta ads scaling guides, CRO checklists, and SEO strategies for direct-to-consumer brands.",
    url: "https://www.adfrenzymedia.com/insights",
    type: "website",
    siteName: "Adfrenzy Media",
    images: [
      {
        url: "https://www.adfrenzymedia.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adfrenzy Media Insights & Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D2C Growth Insights & Performance Marketing Guides | Adfrenzy Media",
    description:
      "Explore in-depth playbooks, unit economics frameworks, Meta ads scaling guides, CRO checklists, and SEO strategies for direct-to-consumer brands.",
  },
};

export default function InsightsPage() {
  const featuredArticle = insightsData[0];
  const otherArticles = insightsData.slice(1);

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
      }
    ]
  };

  return (
    <div className="pt-28 pb-20 bg-[#0A0A0A] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500] font-bold">
            RESOURCES & PLAYBOOKS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Operating guides for{" "}
            <span className="font-serif-italic font-normal italic text-[#FFE500]">
              ambitious D2C brands
            </span>
            .
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            No generic fluff or shallow theories. Practical frameworks, unit economics math, and scaling systems engineered from managing ₹2.4 Cr+ in ad spend.
          </p>
        </div>

        {/* Featured Article Card */}
        {featuredArticle && (
          <div className="mb-16">
            <Link
              href={`/insights/${featuredArticle.slug}`}
              className="glass-card rounded-2xl border border-[#FFE500]/30 hover:border-[#FFE500]/60 p-8 sm:p-12 block transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles className="w-24 h-24 text-[#FFE500]" />
              </div>

              <div className="max-w-3xl space-y-4 relative z-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-[#FFE500] text-black text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
                    Featured Playbook
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {featuredArticle.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">·</span>
                  <span className="text-xs font-mono text-neutral-400 inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-[#FFE500] transition-colors leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-4 flex items-center gap-2 text-sm font-bold text-[#FFE500] font-mono group-hover:translate-x-1 transition-transform">
                  <span>Read Complete Playbook</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Grid of Other Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {otherArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#FFE500]/40 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="text-[#FFE500] font-bold uppercase">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#FFE500] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.publishDate}
                </span>
                <span className="text-[#FFE500] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>

      <FinalCTA />
    </div>
  );
}
