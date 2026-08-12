"use client";

import { useState } from "react";
import { BarChart3, TrendingUp, ShoppingBag, Percent, RefreshCw, Layers } from "lucide-react";

export function ResultsSection() {
  const [activeTab, setActiveTab] = useState<"summary" | "meta" | "shopify">("summary");

  const campaigns = [
    { name: "SM | TOF | SM | Jan Full Stock Catalog", spend: "₹262,408.82", roas: "13.56x", value: "₹846,475.14" },
    { name: "SM_LT_CAT_31 JUL", spend: "₹34,339.09", roas: "9.79x", value: "₹336,099.40" },
    { name: "SM_ABO_CT_4 JUNE", spend: "₹186,831.29", roas: "8.89x", value: "₹1,661,650.00" },
    { name: "ATC | Retargeting | 180D", spend: "₹71,619.17", roas: "8.21x", value: "₹588,037.66" },
    { name: "SM_ROAS_GOAL_29 MAY", spend: "₹76,122.85", roas: "7.62x", value: "₹580,290.40" },
    { name: "SM | TOF | ABO | OLD |", spend: "₹137,776.72", roas: "6.93x", value: "₹954,226.18" },
    { name: "TOF | SM | Kaftanize - 1st feb - link click", spend: "₹16,976.17", roas: "0.16x", value: "₹8,374.50", isKaftanize: true }
  ];

  return (
    <section className="py-24 bg-background border-b border-border-subtle" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            MEASURABLE PERFORMANCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            Real campaigns. Verified{" "}
            <span className="font-serif-italic font-normal italic text-accent">
              outcomes
            </span>
            .
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Direct screenshots from our accounts mapped into clean performance views. Every data point is a verified outcome of our creative-media loop.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { id: "summary", label: "Overview", icon: Layers },
            { id: "meta", label: "Meta Ads Performance", icon: BarChart3 },
            { id: "shopify", label: "Shopify E-Commerce", icon: ShoppingBag }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-accent border-accent text-[var(--btn-text-primary)] shadow-lg shadow-accent/15"
                    : "bg-surface border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent/40"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "summary" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 border-l-4 border-l-accent space-y-2">
              <span className="text-[10px] font-mono tracking-wider text-text-secondary uppercase">FEATURED BRAND RESULT</span>
              <div className="text-3xl font-extrabold text-text-primary">₹3.1Cr</div>
              <p className="text-xs text-text-secondary">Sales generated for ZAZU over 8 months.</p>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-accent space-y-2">
              <span className="text-[10px] font-mono tracking-wider text-text-secondary uppercase">CAMPAIGN PERFORMANCE</span>
              <div className="text-3xl font-extrabold text-text-primary">8.79x</div>
              <p className="text-xs text-text-secondary">Average ROAS across 460 campaigns.</p>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-accent space-y-2">
              <span className="text-[10px] font-mono tracking-wider text-text-secondary uppercase">E-COMMERCE PERFORMANCE</span>
              <div className="text-3xl font-extrabold text-text-primary">₹17.35M</div>
              <p className="text-xs text-text-secondary">Gross sales Shopify record (14.4K orders).</p>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-accent space-y-2">
              <span className="text-[10px] font-mono tracking-wider text-text-secondary uppercase">10-CAMPAIGN BENCHMARK</span>
              <div className="text-3xl font-extrabold text-text-primary">7.91x</div>
              <p className="text-xs text-text-secondary">Average ROAS on ₹480K spend.</p>
            </div>
          </div>
        )}

        {/* TAB 2: META ADS PERFORMANCE */}
        {activeTab === "meta" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              
              <div className="glass-card p-6 space-y-4">
                <h4 className="text-xs font-mono text-accent font-bold tracking-wider uppercase">460 Campaigns Set A</h4>
                <div className="space-y-2">
                  <div className="flex justify-between border-b border-border-subtle pb-1"><span className="text-xs text-text-secondary">Total Spend</span><span className="text-sm font-bold text-text-primary">₹750,800.80</span></div>
                  <div className="flex justify-between border-b border-border-subtle pb-1"><span className="text-xs text-text-secondary">Average ROAS</span><span className="text-sm font-bold text-accent">8.79x</span></div>
                  <div className="flex justify-between pb-1"><span className="text-xs text-text-secondary">Purchase Value</span><span className="text-sm font-bold text-text-primary">≈ ₹6.60M</span></div>
                </div>
              </div>

              <div className="glass-card p-6 space-y-4">
                <h4 className="text-xs font-mono text-accent font-bold tracking-wider uppercase">460 Campaigns Set B</h4>
                <div className="space-y-2">
                  <div className="flex justify-between border-b border-border-subtle pb-1"><span className="text-xs text-text-secondary">Total Spend</span><span className="text-sm font-bold text-text-primary">₹507,909.66</span></div>
                  <div className="flex justify-between border-b border-border-subtle pb-1"><span className="text-xs text-text-secondary">Average ROAS</span><span className="text-sm font-bold text-accent">8.14x</span></div>
                  <div className="flex justify-between pb-1"><span className="text-xs text-text-secondary">Purchase Value</span><span className="text-sm font-bold text-text-primary">≈ ₹4.13M</span></div>
                </div>
              </div>

              <div className="glass-card p-6 space-y-4">
                <h4 className="text-xs font-mono text-accent font-bold tracking-wider uppercase">10 Campaigns Set 01</h4>
                <div className="space-y-2">
                  <div className="flex justify-between border-b border-border-subtle pb-1"><span className="text-xs text-text-secondary">Total Spend</span><span className="text-sm font-bold text-text-primary">₹480,718.79</span></div>
                  <div className="flex justify-between border-b border-border-subtle pb-1"><span className="text-xs text-text-secondary">Average ROAS</span><span className="text-sm font-bold text-accent">7.91x</span></div>
                  <div className="flex justify-between pb-1"><span className="text-xs text-text-secondary">Purchase Value</span><span className="text-sm font-bold text-text-primary">₹3,803,778.07</span></div>
                </div>
              </div>

              <div className="glass-card p-6 space-y-4">
                <h4 className="text-xs font-mono text-accent font-bold tracking-wider uppercase">10 Campaigns Set 02</h4>
                <div className="space-y-2">
                  <div className="flex justify-between border-b border-border-subtle pb-1"><span className="text-xs text-text-secondary">Total Spend</span><span className="text-sm font-bold text-text-primary">₹1,125,450.92</span></div>
                  <div className="flex justify-between border-b border-border-subtle pb-1"><span className="text-xs text-text-secondary">Average ROAS</span><span className="text-sm font-bold text-accent">6.94x</span></div>
                  <div className="flex justify-between pb-1"><span className="text-xs text-text-secondary">Purchase Value</span><span className="text-sm font-bold text-text-primary">₹7,812,933.35</span></div>
                </div>
              </div>

            </div>

            {/* Campaign Table */}
            <div className="glass-card overflow-hidden">
              <div className="p-6 border-b border-border-subtle">
                <h4 className="text-sm font-mono text-text-primary font-bold uppercase">Meta Ads Campaign Performance Log</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface border-b border-border-subtle font-mono text-[10px] text-text-secondary uppercase">
                      <th className="p-4">Campaign Name</th>
                      <th className="p-4">Amount Spent</th>
                      <th className="p-4">ROAS</th>
                      <th className="p-4">Purchases Value</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs font-mono divide-y divide-border-subtle">
                    {campaigns.map((c, idx) => (
                      <tr key={idx} className="hover:bg-surface/50">
                        <td className="p-4 font-bold text-text-primary flex items-center gap-2">
                          {c.name}
                          {c.isKaftanize && <span className="text-[9px] px-2 py-0.5 bg-accent/10 border border-accent/20 text-accent rounded font-bold">Kaftanize</span>}
                        </td>
                        <td className="p-4 text-text-secondary">{c.spend}</td>
                        <td className="p-4 font-bold text-accent">{c.roas}</td>
                        <td className="p-4 text-text-primary">{c.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SHOPIFY E-COMMERCE */}
        {activeTab === "shopify" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="glass-card p-8 lg:col-span-1 space-y-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-accent font-bold tracking-wider uppercase">Shopify Overview</span>
                <h3 className="text-3xl font-extrabold text-text-primary mt-2">₹17.35M</h3>
                <p className="text-xs text-text-secondary mt-1">E-commerce Performance Gross Sales</p>
              </div>

              <div className="space-y-3 pt-6 border-t border-border-subtle font-mono text-xs">
                <div className="flex justify-between"><span className="text-text-secondary">Orders Fulfilled</span><span className="text-text-primary font-bold">14.4K</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">Returning Customer Rate</span><span className="text-text-primary font-bold">24.39%</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">Gross Sales</span><span className="text-text-primary font-bold">₹17,355,213.31</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">Discounts Applied</span><span className="text-text-primary font-bold">-₹1.63M</span></div>
                <div className="flex justify-between"><span className="text-text-secondary">Returns Value</span><span className="text-text-primary font-bold">-₹1.47M</span></div>
                <div className="flex justify-between border-t border-border-subtle pt-2"><span className="text-text-secondary font-bold">Net Sales</span><span className="text-accent font-bold">₹14,248,102.65</span></div>
              </div>
            </div>

            <div className="glass-card p-8 lg:col-span-2 space-y-6 flex flex-col justify-between bg-gradient-to-br from-surface to-surface-secondary">
              <div>
                <span className="text-xs font-mono text-accent font-bold tracking-wider uppercase">Secondary Performance Run</span>
                <h3 className="text-3xl font-extrabold text-text-primary mt-2">₹18.69M</h3>
                <p className="text-xs text-text-secondary mt-1">E-commerce Performance Gross Sales Run 02</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-border-subtle">
                <div className="space-y-1"><span className="text-[10px] font-mono text-text-secondary uppercase">Gross Sales</span><div className="text-base font-bold text-text-primary">₹18.69M</div></div>
                <div className="space-y-1"><span className="text-[10px] font-mono text-text-secondary uppercase">Returning Cust.</span><div className="text-base font-bold text-text-primary">43.27%</div></div>
                <div className="space-y-1"><span className="text-[10px] font-mono text-text-secondary uppercase">Orders</span><div className="text-base font-bold text-text-primary">8,938</div></div>
                <div className="space-y-1"><span className="text-[10px] font-mono text-text-secondary uppercase">Net Sales</span><div className="text-base font-bold text-accent">₹13.50M</div></div>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed">
                *These records represent verified merchant dashboard records collected over multiple campaign quarters. Brand mappings are kept private under NDA terms where requested.
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
