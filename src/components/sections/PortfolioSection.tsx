"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData, PortfolioItem } from "@/data/portfolio";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

export function PortfolioSection() {
  const [showAll, setShowAll] = useState<boolean>(false);

  // Show 3 items initially, all 6 if showAll is true
  const displayedItems = showAll ? portfolioData : portfolioData.slice(0, 3);

  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-white/10" id="work">
      <style dangerouslySetInnerHTML={{__html: `
        .portfolio-metrics-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          width: 100%;
          box-sizing: border-box;
        }
        .portfolio-metric-value-yellow {
          font-size: clamp(16px, 5vw, 21px);
          font-weight: 700;
          white-space: nowrap;
          overflow: visible;
          min-width: 0;
        }
        .portfolio-metric-value-green {
          font-size: clamp(16px, 5vw, 21px);
          font-weight: 700;
          white-space: nowrap;
          overflow: visible;
          min-width: 0;
        }
        @media (min-width: 640px) {
          .portfolio-metrics-grid {
            grid-template-columns: 0.7fr 1.3fr !important;
            gap: 16px !important;
          }
          .portfolio-metric-value-yellow {
            font-size: clamp(17px, 1.5vw, 22px) !important;
          }
          .portfolio-metric-value-green {
            font-size: clamp(17px, 1.5vw, 22px) !important;
          }
        }
      `}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            CASE STUDIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Measurable{" "}
            <span className="font-serif-italic font-normal italic text-accent">
              performance
            </span>
            . Real results.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Explore campaign analytics, paid media strategy, and catalog performance optimization across our six core case studies.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item: PortfolioItem) => (
            <Link
              key={item.id}
              href={`/work/${item.slug}`}
              className="glass-card flex flex-col rounded-2xl border border-white/10 bg-[#121212]/95 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(250,204,21,0.08)] group w-full h-full min-h-[520px] lg:min-h-[560px] sm:min-h-[520px] min-h-[0px] md:min-h-[520px]"
              style={{ height: '100%', minWidth: 0, boxSizing: 'border-box' }}
            >
              {/* Media Container */}
              <div className="relative w-full overflow-hidden rounded-t-2xl bg-neutral-900 border-b border-white/10 flex-shrink-0 lg:h-[250px] sm:h-[220px] h-[210px] md:h-[220px]">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Dark Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Arrow Icon */}
                <div className="absolute top-4 right-4 bg-accent text-black p-2 rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>

              {/* Card Content Container */}
              <div 
                className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-6"
                style={{ width: '100%', minWidth: 0, boxSizing: 'border-box' }}
              >
                
                {/* Info Text */}
                <div className="space-y-4">
                  {/* Category */}
                  <div className="text-xs font-mono font-bold text-accent uppercase tracking-wider">
                    {item.category}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {item.shortDescription}
                  </p>
                </div>

                {/* Metrics Footer Section */}
                <div className="mt-auto space-y-4" style={{ width: '100%', minWidth: 0 }}>
                  {/* Separator */}
                  <hr className="border-white/10" />

                  {/* Metric(s) */}
                  {item.metrics.secondaryValue ? (
                    <div className="portfolio-metrics-grid">
                      <div className="space-y-1" style={{ minWidth: 0, width: '100%' }}>
                        <div className="portfolio-metric-value-yellow text-accent tracking-tight group-hover:brightness-110 transition-all duration-300">
                          {item.metrics.primaryValue}
                        </div>
                        <div className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest font-semibold leading-normal">
                          {item.metrics.primaryLabel}
                        </div>
                      </div>
                      
                      <div 
                        className="space-y-1 sm:border-l sm:border-white/10 sm:pl-6 lg:pl-8 border-l-0 pl-0"
                        style={{ minWidth: 0, width: '100%' }}
                      >
                        <div className="portfolio-metric-value-green text-emerald-400 tracking-tight group-hover:brightness-110 transition-all duration-300">
                          {item.metrics.secondaryValue}
                        </div>
                        <div className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest font-semibold leading-normal">
                          {item.metrics.secondaryLabel}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3" style={{ minWidth: 0, width: '100%' }}>
                      <div className="space-y-1" style={{ minWidth: 0, width: '100%' }}>
                        <div 
                          className="text-2xl sm:text-[clamp(18px,1.5vw,24px)] lg:text-2xl font-extrabold font-mono text-accent tracking-tight group-hover:brightness-110 transition-all duration-300"
                          style={{ minWidth: 0, maxWidth: '100%', overflowWrap: 'anywhere', wordBreak: 'break-word', whiteSpace: 'normal' }}
                        >
                          {item.metrics.primaryValue}
                        </div>
                        <div className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest font-semibold">
                          {item.metrics.primaryLabel}
                        </div>
                      </div>
                      
                      {item.metrics.bottomLabel && (
                        <div className="text-xs font-mono text-neutral-500 font-medium">
                          {item.metrics.bottomLabel}
                        </div>
                      )}
                    </div>
                  )}
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* See More / See Less Toggle Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-yellow px-8 py-3.5 text-sm font-extrabold rounded-full inline-flex items-center gap-2 cursor-pointer shadow-md transition-all duration-300 hover:scale-105"
          >
            <span>{showAll ? "See Less" : "See More"}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

      </div>
    </section>
  );
}
