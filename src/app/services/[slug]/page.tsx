import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((svc) => ({ slug: svc.slug }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-28 pb-16 bg-[#0A0A0A]">
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
