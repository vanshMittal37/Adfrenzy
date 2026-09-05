"use client";

import Image from "next/image";
import Link from "next/link";
import { portfolioData, PortfolioItem } from "@/data/portfolio";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export function PortfolioSection() {
  return (
    <section className="py-24 bg-background border-b border-border-subtle" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            Real accounts. Real numbers.
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            A selection of brands we&apos;ve worked with across performance marketing, creative, CRO and growth.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioData.map((item: PortfolioItem) => (
            <div
              key={item.id}
              className="glass-card flex flex-col rounded-2xl border border-border-subtle bg-surface shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 group overflow-hidden"
            >
              {/* Media Container */}
              <div className="relative w-full h-60 bg-neutral-900 border-b border-border-subtle overflow-hidden">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit ${item.clientName} official website`}
                    className="bg-background/80 backdrop-blur-md text-text-secondary hover:text-white p-2 rounded-full border border-border-subtle transition-all duration-300 hover:scale-110"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link
                    href={`/work/${item.slug}`}
                    className="bg-accent text-background p-2 rounded-full opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-md"
                  >
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </Link>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-5">
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-accent uppercase tracking-wider">
                    {item.clientName} · {item.category}
                  </div>
                  <h3 className="text-xl font-extrabold text-text-primary group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                  <div>
                    <div className="text-base font-extrabold font-mono text-accent">
                      {item.metrics.primaryValue}
                    </div>
                    <div className="text-[11px] font-mono text-text-secondary">
                      {item.metrics.primaryLabel}
                    </div>
                  </div>

                  <Link
                    href={`/work/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline font-mono"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Work Button */}
        <div className="mt-16 text-center">
          <Link
            href="/work"
            className="btn-yellow px-8 py-3.5 text-sm font-extrabold rounded-full inline-flex items-center gap-2 cursor-pointer shadow-md transition-all duration-300 hover:scale-105"
          >
            <span>See all work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
