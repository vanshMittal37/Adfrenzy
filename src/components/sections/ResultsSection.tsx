"use client";

import { useState } from "react";
import { BarChart3, TrendingUp, ShoppingBag, Layers } from "lucide-react";

export function ResultsSection() {
  const [activeTab, setActiveTab] = useState<"summary" | "meta" | "shopify">("summary");

  interface CampaignItem {
    name: string;
    spend: string;
    roas: string;
    value: string;
    isKaftanize?: boolean;
  }

  const campaigns: CampaignItem[] = [
    { name: "SM_LT_CAT_31 JUL (Run 02)", spend: "₹34,339.09", roas: "9.79x", value: "₹336,099.40" },
    { name: "SM | LLA NEW | 22 FEB (Run 02)", spend: "₹48,393.01", roas: "8.96x", value: "₹433,725.90" },
    { name: "SM_ABO_CT_4 JUNEE (Run 02)", spend: "₹186,831.29", roas: "8.89x", value: "₹1,661,650.00" },
    { name: "ATC | Retargeting | 180D (Run 01)", spend: "₹213,962.56", roas: "8.94x", value: "₹1,911,793.40" },
    { name: "SM_ABO_CT_4 JUNEE (Run 01)", spend: "₹329,734.01", roas: "8.30x", value: "₹2,738,166.00" },
    { name: "ATC | Retargeting | 180D (Run 02)", spend: "₹71,619.17", roas: "8.21x", value: "₹588,037.66" },
    { name: "SM | TOF | ABO | OLD | (Run 02)", spend: "₹110,699.92", roas: "7.83x", value: "₹866,351.39" }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-white/10" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
            MEASURABLE PERFORMANCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Real campaigns. Verified{" "}
            <span className="font-serif-italic font-normal italic text-accent">
              outcomes
            </span>
            .
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Direct screenshots from our accounts mapped into clean performance views. Every data point is a verified outcome of our creative-media loop.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
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
                    ? "bg-accent border-accent text-black shadow-lg shadow-accent/15"
                    : "bg-[#121212] border-white/10 text-neutral-400 hover:text-white hover:border-accent/40"
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
            <div className="glass-card p-6 border-l-4 border-l-accent space-y-2 bg-[#121212]/85 rounded-r-xl border border-white/5">
              <span className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase font-bold">SHOPIFY E-COMMERCE</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono break-all">₹14,208,972.14</div>
              <p className="text-xs text-neutral-400">Gross sales from the Shopify performance record with 8.6K orders.</p>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-accent space-y-2 bg-[#121212]/85 rounded-r-xl border border-white/5">
              <span className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase font-bold">META ADS PERFORMANCE</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-accent font-mono">8.79x</div>
              <p className="text-xs text-neutral-400">Average ROAS across 460 campaigns.</p>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-accent space-y-2 bg-[#121212]/85 rounded-r-xl border border-white/5">
              <span className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase font-bold">META ADS SPEND</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono break-all">₹480,718.79</div>
              <p className="text-xs text-neutral-400">Total spend across 460 campaigns.</p>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-accent space-y-2 bg-[#121212]/85 rounded-r-xl border border-white/5">
              <span className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase font-bold">PURCHASE CONVERSION VALUE</span>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono break-all">₹3,803,778.07</div>
              <p className="text-xs text-neutral-400">Total purchase conversion value shown in the latest 460-campaign Meta Ads record.</p>
            </div>
          </div>
        )}

        {/* TAB 2: META ADS PERFORMANCE */}
        {activeTab === "meta" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              
              <div className="glass-card p-6 space-y-4 bg-[#121212]/85 rounded-xl border border-white/5">
                <h4 className="text-xs font-mono text-accent font-bold tracking-wider uppercase">Results from 460 campaigns</h4>
                <div className="space-y-2 font-mono">
                  <div className="flex justify-between border-b border-white/10 pb-1"><span className="text-xs text-neutral-400">Total Spent</span><span className="text-sm font-bold text-white">₹750,800.80</span></div>
                  <div className="flex justify-between border-b border-white/10 pb-1"><span className="text-xs text-neutral-400">Average ROAS</span><span className="text-sm font-bold text-accent">8.79</span></div>
                  <div className="flex justify-between pb-1"><span className="text-xs text-neutral-400">Purchase Value</span><span className="text-sm font-bold text-emerald-400">₹6,600,367</span></div>
                </div>
              </div>

              <div className="glass-card p-6 space-y-4 bg-[#121212]/85 rounded-xl border border-white/5">
                <h4 className="text-xs font-mono text-accent font-bold tracking-wider uppercase">Results from 457 campaigns</h4>
                <div className="space-y-2 font-mono">
                  <div className="flex justify-between border-b border-white/10 pb-1"><span className="text-xs text-neutral-400">Purchases</span><span className="text-sm font-bold text-white">3,104</span></div>
                  <div className="flex justify-between border-b border-white/10 pb-1"><span className="text-xs text-neutral-400">Average ROAS</span><span className="text-sm font-bold text-accent">8.09</span></div>
                  <div className="flex justify-between pb-1"><span className="text-xs text-neutral-400">Purchase Value</span><span className="text-sm font-bold text-emerald-400">₹11,851,822.97</span></div>
                </div>
              </div>

              <div className="glass-card p-6 space-y-4 bg-[#121212]/85 rounded-xl border border-white/5">
                <h4 className="text-xs font-mono text-accent font-bold tracking-wider uppercase">Results from 10 campaigns</h4>
                <div className="space-y-2 font-mono">
                  <div className="flex justify-between border-b border-white/10 pb-1"><span className="text-xs text-neutral-400">Total Spent</span><span className="text-sm font-bold text-white">₹480,718.79</span></div>
                  <div className="flex justify-between border-b border-white/10 pb-1"><span className="text-xs text-neutral-400">Average ROAS</span><span className="text-sm font-bold text-accent">7.91</span></div>
                  <div className="flex justify-between pb-1"><span className="text-xs text-neutral-400">Purchase Value</span><span className="text-sm font-bold text-emerald-400">₹3,803,778.07</span></div>
                </div>
              </div>

              <div className="glass-card p-6 space-y-4 bg-[#121212]/85 rounded-xl border border-white/5">
                <h4 className="text-xs font-mono text-accent font-bold tracking-wider uppercase">Results from 10 campaigns</h4>
                <div className="space-y-2 font-mono">
                  <div className="flex justify-between border-b border-white/10 pb-1"><span className="text-xs text-neutral-400">Total Spent</span><span className="text-sm font-bold text-white">₹1,125,450.92</span></div>
                  <div className="flex justify-between border-b border-white/10 pb-1"><span className="text-xs text-neutral-400">Average ROAS</span><span className="text-sm font-bold text-accent">6.94</span></div>
                  <div className="flex justify-between pb-1"><span className="text-xs text-neutral-400">Purchase Value</span><span className="text-sm font-bold text-emerald-400">₹7,812,933.35</span></div>
                </div>
              </div>

            </div>

            {/* Campaign Table */}
            <div className="glass-card overflow-hidden bg-[#121212]/85 rounded-xl border border-white/5">
              <div className="p-6 border-b border-white/10">
                <h4 className="text-sm font-mono text-white font-bold uppercase">Meta Ads Campaign Performance Log</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#1a1a1a] border-b border-white/10 font-mono text-[10px] text-neutral-400 uppercase">
                      <th className="p-4">Campaign Name</th>
                      <th className="p-4">Amount Spent</th>
                      <th className="p-4">ROAS</th>
                      <th className="p-4">Purchases Value</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs font-mono divide-y divide-white/5 text-neutral-300">
                    {campaigns.map((c, idx) => (
                      <tr key={idx} className="hover:bg-white/5">
                        <td className="p-4 font-bold text-white flex items-center gap-2">
                          {c.name}
                          {c.isKaftanize && <span className="text-[9px] px-2 py-0.5 bg-accent/10 border border-accent/20 text-accent rounded font-bold">Kaftanize</span>}
                        </td>
                        <td className="p-4">{c.spend}</td>
                        <td className="p-4 font-bold text-accent">{c.roas}</td>
                        <td className="p-4 text-emerald-400">{c.value}</td>
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
            
            {/* RUN 01 CARD */}
            <div className="glass-card p-8 lg:col-span-1 space-y-6 flex flex-col justify-between bg-[#121212]/85 rounded-xl border border-white/5">
              <div>
                <span className="text-xs font-mono text-accent font-bold tracking-wider uppercase">SHOPIFY PERFORMANCE — RUN 01</span>
                <h3 className="text-3xl font-extrabold text-white mt-2 font-mono break-all">₹17,355,213.31</h3>
                <p className="text-xs text-neutral-400 mt-1">E-commerce Performance Gross Sales</p>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/10 font-mono text-xs">
                <div className="flex justify-between"><span className="text-neutral-400">Orders Fulfilled</span><span className="text-white font-bold">14.4K</span></div>
                <div className="flex justify-between"><span className="text-neutral-400">Returning Customer Rate</span><span className="text-white font-bold">24.39%</span></div>
                <div className="flex justify-between"><span className="text-neutral-400">Gross Sales</span><span className="text-white font-bold">₹17,355,213.31</span></div>
                <div className="flex justify-between"><span className="text-neutral-400">Discounts Applied</span><span className="text-white font-bold">-₹1,634,566.31</span></div>
                <div className="flex justify-between"><span className="text-neutral-400">Returns Value</span><span className="text-white font-bold">-₹1,472,544.35</span></div>
                <div className="flex justify-between border-t border-white/10 pt-2"><span className="text-neutral-400 font-bold">Net Sales</span><span className="text-accent font-bold">₹14,248,102.65</span></div>
              </div>
            </div>

            {/* RUN 02 CARD */}
            <div className="glass-card p-8 lg:col-span-2 space-y-6 flex flex-col justify-between bg-[#121212]/85 rounded-xl border border-white/5">
              <div>
                <span className="text-xs font-mono text-accent font-bold tracking-wider uppercase">SHOPIFY PERFORMANCE — RUN 02</span>
                <h3 className="text-3xl font-extrabold text-white mt-2 font-mono break-all">₹18,691,624.45</h3>
                <p className="text-xs text-neutral-400 mt-1">E-commerce Performance Gross Sales — Run 02</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-white/10 font-mono">
                <div className="space-y-1"><span className="text-[10px] text-neutral-400 uppercase">Gross Sales</span><div className="text-base font-bold text-white break-all">₹18,691,624.45</div></div>
                <div className="space-y-1"><span className="text-[10px] text-neutral-400 uppercase">Returning Customer</span><div className="text-base font-bold text-white">43.27%</div></div>
                <div className="space-y-1"><span className="text-[10px] text-neutral-400 uppercase">Orders</span><div className="text-base font-bold text-white">8,938</div></div>
                <div className="space-y-1"><span className="text-[10px] text-neutral-400 uppercase">Net Sales</span><div className="text-base font-bold text-accent break-all">₹13,501,533.15</div></div>
              </div>

              <p className="text-xs text-neutral-500 leading-relaxed">
                *These records represent verified merchant dashboard records collected over multiple campaign quarters. Brand mappings are kept private under NDA terms where requested.
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
