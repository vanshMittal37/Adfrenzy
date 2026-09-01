"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData, PortfolioItem } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

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
            Data-driven case studies highlighting scalable growth across D2C brands.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {portfolioData.map((item: PortfolioItem) => (
            <Link
              key={item.id}
              href={`/work/${item.slug}`}
              className="glass-card flex flex-col rounded-2xl border border-border-subtle bg-surface shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 group overflow-hidden"
            >
              {/* Media Container */}
              <div className="relative w-full h-56 bg-neutral-900 border-b border-border-subtle">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                <div className="absolute top-4 right-4 bg-accent text-background p-2 rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-accent uppercase tracking-wider">
                    {item.clientName} · {item.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-text-primary group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                  <div className="text-lg font-extrabold font-mono text-accent">
                    {item.metrics.primaryValue}
                  </div>
                  <div className="text-xs font-mono text-text-secondary">
                    {item.metrics.primaryLabel}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* See All Work Button */}
        <div className="mt-16 text-center">
          <Link
            href="/work"
            className="btn-yellow px-8 py-3.5 text-sm font-extrabold rounded-xl inline-flex items-center gap-2 cursor-pointer shadow-md transition-all duration-300 hover:scale-105"
          >
            <span>See all work</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
