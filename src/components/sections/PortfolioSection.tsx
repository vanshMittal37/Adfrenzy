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
    <section className="py-24 bg-[#0A0A0A] border-b border-white/10" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFE500]">
            SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Brands that{" "}
            <span className="font-serif-italic font-normal italic text-slate-200">
              grew with us
            </span>
            .
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Explore direct-response ad creative, video assets, landing pages, and growth campaigns built for ambitious brands.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold font-mono rounded-lg transition-all ${
                activeCategory === cat
                  ? "bg-[#FFE500] text-black shadow-md"
                  : "bg-[#151515] text-neutral-400 hover:text-white border border-white/10"
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
              className="glass-card overflow-hidden group flex flex-col justify-between"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono font-bold text-[#FFE500] uppercase border border-white/10">
                  {item.category}
                </div>
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 space-y-3">
                <div className="text-xs font-mono text-neutral-400 uppercase">
                  {item.clientName} · {item.industry}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#FFE500] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 line-clamp-2">
                  {item.shortDescription}
                </p>

                {/* Metrics Badges */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-[11px] font-mono">
                  {item.metrics.roas && (
                    <span className="bg-[#FFE500]/10 text-[#FFE500] px-2 py-0.5 rounded font-bold border border-[#FFE500]/20">
                      {item.metrics.roas}
                    </span>
                  )}
                  {item.metrics.revenueGrowth && (
                    <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-bold border border-emerald-500/20">
                      {item.metrics.revenueGrowth}
                    </span>
                  )}
                  {item.metrics.cacReduction && (
                    <span className="bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded font-bold border border-sky-500/20">
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
