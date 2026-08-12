"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData, PortfolioItem } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", "ADS", "UGC", "SOCIAL", "VIDEO", "LANDING PAGES", "EMAIL", "BRANDING", "WEB"];

  const filteredItems = activeCategory === "ALL"
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section className="py-24 bg-background border-b border-border-subtle" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            Brands that{" "}
            <span className="font-serif-italic font-normal italic text-accent">
              grew with us
            </span>
            .
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Explore direct-response ad creative, video assets, landing pages, and growth campaigns built for ambitious brands.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-sm sm:text-base font-extrabold font-mono rounded-full border transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-accent text-background border-accent shadow-[0_4px_16px_var(--accent-soft)] scale-105"
                  : "bg-surface/80 text-accent/80 border-accent/25 hover:text-accent hover:border-accent hover:shadow-[0_2px_12px_var(--accent-soft)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item: PortfolioItem) => (
            <Link
              key={item.id}
              href={`/work/${item.slug}`}
              className="glass-card overflow-hidden group flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-secondary border-b border-border-subtle">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                {/* Tags */}
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold font-mono text-accent uppercase border border-accent/30 shadow-[0_2px_10px_var(--accent-soft)]">
                  {item.category}
                </div>
                
                {/* Arrow Icon */}
                <div className="absolute top-4 right-4 bg-accent text-background p-2 rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-mono text-text-secondary uppercase tracking-wider">
                    {item.clientName} · {item.industry}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed">
                    {item.shortDescription}
                  </p>
                </div>

                {/* Metrics Badges */}
                <div className="pt-4 mt-4 border-t border-border-subtle flex flex-wrap gap-2 text-xs sm:text-sm font-mono font-extrabold">
                  {item.metrics.roas && (
                    <span className="bg-accent/10 text-accent px-3.5 py-1.5 rounded-full border border-accent/25 shadow-[0_2px_8px_var(--accent-soft)]">
                      {item.metrics.roas}
                    </span>
                  )}
                  {item.metrics.revenueGrowth && (
                    <span className="bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 px-3.5 py-1.5 rounded-full border border-emerald-500/25">
                      {item.metrics.revenueGrowth}
                    </span>
                  )}
                  {item.metrics.cacReduction && (
                    <span className="bg-sky-500/10 text-sky-500 dark:text-sky-400 px-3.5 py-1.5 rounded-full border border-sky-500/25">
                      {item.metrics.cacReduction}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
