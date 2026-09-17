import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { caseStudiesData } from "@/data/caseStudies";
import { insightsData } from "@/data/insights";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  BookOpen,
  ArrowRight
} from "lucide-react";
import type { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

const TITLE_MAP: Record<string, string> = {
  "seo": "D2C SEO Services",
  "performance-marketing": "D2C Performance Marketing",
  "creative": "Performance Creative & UGC Ads",
  "cro": "eCommerce CRO & Landing Page Optimization",
  "web-design": "Shopify Web Design & eCommerce Development",
  "strategy": "D2C Growth Strategy",
};

const DESC_MAP: Record<string, string> = {
  "seo": "Scale organic revenue, reduce blended CAC, and rank high-intent commercial keywords with technical, on-page, and category SEO built specifically for D2C brands.",
  "performance-marketing": "Profit-focused media buying across Meta and Google Ads. Scaled around contribution margin, unit economics, and blended ROAS for D2C brands.",
  "creative": "High-converting UGC, direct-response video ads, and weekly creative hook testing designed to beat ad fatigue and drive profitable customer acquisition.",
  "cro": "Turn paid clicks into repeatable profit with dedicated direct response landing pages, high-converting PDP rebuilds, and checkout corridor optimization.",
  "web-design": "Fast, mobile-first Shopify and custom eCommerce storefronts engineered for sub-second load times, Core Web Vitals, and maximum checkout conversion.",
  "strategy": "Unit economics modeling, full-funnel marketing audits, and actionable 90-day scaling roadmaps for ambitious direct-to-consumer brand founders looking to break scaling ceilings.",
};

export async function generateStaticParams() {
  return servicesData.map((svc) => ({ slug: svc.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const title = TITLE_MAP[slug] || service.title;
  const fullTitle = `${title} | Adfrenzy Media`;
  const description = DESC_MAP[slug] || service.description;
  const url = `https://www.adfrenzymedia.com/services/${slug}`;

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
      type: "website",
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

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedCaseStudies = service.relatedCaseStudySlugs
    .map((s) => caseStudiesData[s])
    .filter(Boolean);

  const relatedArticles = service.relatedArticleSlugs
    .map((s) => insightsData.find((a) => a.slug === s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "provider": {
      "@type": "Organization",
      "name": "Adfrenzy Media",
      "url": "https://www.adfrenzymedia.com/"
    },
    "description": service.description,
    "url": `https://www.adfrenzymedia.com/services/${slug}`
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
        "name": "Services",
        "item": "https://www.adfrenzymedia.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://www.adfrenzymedia.com/services/${slug}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="pt-28 pb-16 bg-[#0A0A0A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-[#FFE500] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>

        {/* Header / Hero */}
        <div className="space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500] font-bold">
            SERVICE PILLAR
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-[#FFE500] text-lg font-semibold italic">
            &quot;{service.tagline}&quot;
          </p>
          <p className="text-neutral-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Section 1: Who This Is Built For */}
        <div className="mb-16">
          <div className="mb-6">
            <span className="text-xs font-mono text-[#FFE500] uppercase font-bold tracking-wider">
              CLIENT PROFILE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Who This Service Is Built For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.targetAudience.map((audience, idx) => (
              <div
                key={idx}
                className="glass-card p-5 rounded-xl border border-white/10 flex items-start gap-3.5"
              >
                <div className="w-2 h-2 rounded-full bg-[#FFE500] flex-none mt-2" />
                <p className="text-sm text-neutral-300 leading-relaxed font-medium">
                  {audience}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Bottlenecks We Solve */}
        <div className="mb-16">
          <div className="mb-6">
            <span className="text-xs font-mono text-red-400 uppercase font-bold tracking-wider">
              THE PAIN POINTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Core Scaling Bottlenecks We Solve
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.problemsSolved.map((prob, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-xl border-l-4 border-l-red-500 space-y-3"
              >
                <div className="flex items-center gap-2 text-red-400">
                  <AlertCircle className="w-4 h-4" />
                  <h3 className="text-base font-bold text-white">{prob.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Our 4-Stage Execution Process */}
        <div className="mb-16">
          <div className="mb-6">
            <span className="text-xs font-mono text-[#FFE500] uppercase font-bold tracking-wider">
              HOW WE OPERATE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Our 4-Stage Execution Methodology
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-xl border border-white/10 space-y-3 relative group hover:border-[#FFE500]/40 transition-all"
              >
                <div className="font-mono text-3xl font-extrabold text-[#FFE500]/40 group-hover:text-[#FFE500] transition-colors">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Capabilities & Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-8 border-l-4 border-l-[#FFE500] space-y-6 rounded-xl">
            <h3 className="text-xl font-extrabold text-white">Core Capabilities</h3>
            <ul className="space-y-3">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#FFE500] flex-none" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 border-l-4 border-l-emerald-400 space-y-6 rounded-xl">
            <h3 className="text-xl font-extrabold text-white">Deliverables & Support</h3>
            <ul className="space-y-3">
              {service.deliverables.map((del, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-none" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 5: Highlight Banner */}
        <div className="glass-card p-8 text-center space-y-3 mb-16 border-[#FFE500]/30 rounded-2xl">
          <span className="text-xs font-mono text-[#FFE500] font-bold uppercase">
            THE ADFRENZY MEDIA EDGE
          </span>
          <p className="text-xl font-bold text-white max-w-2xl mx-auto">
            {service.highlightText}
          </p>
        </div>

        {/* Section 6: Service-Specific FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#FFE500]" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Frequently Asked Questions about {service.title}
              </h2>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-xl border border-white/10 space-y-2"
                >
                  <h3 className="text-base font-bold text-white">{faq.question}</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 7: Related Case Studies */}
        {relatedCaseStudies.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-mono text-[#FFE500] uppercase font-bold tracking-wider">
                  PROVEN RESULTS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Relevant Case Studies
                </h2>
              </div>
              <Link
                href="/work"
                className="text-xs font-mono text-neutral-400 hover:text-[#FFE500] transition-colors inline-flex items-center gap-1"
              >
                <span>All Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCaseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/work/${cs.slug}`}
                  className="glass-card p-6 rounded-xl border border-white/10 hover:border-[#FFE500]/40 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono text-[#FFE500] font-bold uppercase">
                      {cs.industry}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FFE500] transition-colors">
                      {cs.clientName}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                      {cs.tagline}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-sm font-mono font-extrabold text-[#FFE500]">
                      {cs.results.metric1.value} {cs.results.metric1.label}
                    </span>
                    <span className="text-xs text-neutral-400 group-hover:text-white font-mono">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Section 8: Related Insights & Guides */}
        {relatedArticles.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-mono text-[#FFE500] uppercase font-bold tracking-wider">
                  OPERATING PLAYBOOKS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Recommended In-Depth Guides
                </h2>
              </div>
              <Link
                href="/insights"
                className="text-xs font-mono text-neutral-400 hover:text-[#FFE500] transition-colors inline-flex items-center gap-1"
              >
                <span>All Insights</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="glass-card p-6 rounded-xl border border-white/10 hover:border-[#FFE500]/40 transition-all group flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FFE500]/10 border border-[#FFE500]/20 flex items-center justify-center text-[#FFE500] flex-none mt-1">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <span className="text-[10px] font-mono uppercase text-[#FFE500] font-bold">
                      {article.category} · {article.readTime}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-[#FFE500] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <FinalCTA />
    </div>
  );
}
