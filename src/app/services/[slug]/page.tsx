import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

const TITLE_MAP: Record<string, string> = {
  "seo": "SEO Services for D2C Brands | Adfrenzy Media",
  "strategy": "Performance Marketing Strategy for D2C Brands | Adfrenzy Media",
  "performance-marketing": "Performance Marketing Strategy for D2C Brands | Adfrenzy Media",
  "creative": "D2C Creative & UGC Services | Adfrenzy Media",
  "web-design": "D2C Website & CRO Services | Adfrenzy Media",
  "cro": "D2C Website & CRO Services | Adfrenzy Media",
};

const DESC_MAP: Record<string, string> = {
  "seo": "SEO services for D2C brands focused on improving organic visibility, qualified traffic and sustainable growth with Adfrenzy Media.",
  "strategy": "Performance marketing strategy for D2C brands covering creative, paid media, funnels, measurement and growth opportunities.",
  "performance-marketing": "Performance marketing strategy for D2C brands covering creative, paid media, funnels, measurement and growth opportunities.",
  "creative": "D2C creative and UGC services producing direct-response video ads, static hooks, and motion graphics built to scale revenue.",
  "web-design": "Shopify storefront design and development engineered for high-volume conversion and mobile shopping speed.",
  "cro": "Direct response landing pages, PDP rebuilds, and checkout flow optimization to convert existing traffic into revenue.",
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

  const title = TITLE_MAP[slug] || `${service.title} | Adfrenzy Media`;
  const description = DESC_MAP[slug] || service.description;
  const url = `https://adfrenzymedia.com/services/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Adfrenzy Media",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "provider": {
      "@type": "Organization",
      "name": "Adfrenzy Media",
      "url": "https://adfrenzymedia.com/"
    },
    "description": service.description,
    "url": `https://adfrenzymedia.com/services/${slug}`
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://adfrenzymedia.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://adfrenzymedia.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://adfrenzymedia.com/services/${slug}`
      }
    ]
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-[#FFE500] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500]">
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

        {/* Deliverables & Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Capabilities */}
          <div className="glass-card p-8 border-l-4 border-l-[#FFE500] space-y-6">
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

          {/* Deliverables */}
          <div className="glass-card p-8 border-l-4 border-l-emerald-400 space-y-6">
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

        {/* Highlight Banner */}
        <div className="glass-card p-8 text-center space-y-3 mb-16 border-[#FFE500]/30">
          <span className="text-xs font-mono text-[#FFE500] font-bold uppercase">THE ADFRENZY MEDIA EDGE</span>
          <p className="text-xl font-bold text-white max-w-2xl mx-auto">
            {service.highlightText}
          </p>
        </div>
      </div>

      <FinalCTA />
    </div>
  );
}
