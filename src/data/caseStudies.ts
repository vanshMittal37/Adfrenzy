export interface CaseStudy {
  slug: string;
  clientName: string;
  industry: string;
  title: string;
  tagline: string;
  challenge: string;
  strategy: string[];
  execution: {
    creative: string;
    media: string;
    cro: string;
    retention: string;
  };
  results: {
    metric1: { label: string; value: string };
    metric2: { label: string; value: string };
    metric3: { label: string; value: string };
  };
  testimonialQuote?: string;
  testimonialAuthor?: string;
  heroImage: string;
  videoUrl?: string;
}

export const caseStudiesData: Record<string, CaseStudy> = {
  "iyka": {
    slug: "iyka",
    clientName: "IYKA",
    industry: "Women's Ethnic Wear",
    title: "IYKA — Scaling Ethnic Wear to 1 Cr with Sustained ROAS",
    tagline: "Four months to 1 Cr while maintaining strict profit margin requirements.",
    challenge: "Scaling paid ad budgets rapidly in competitive women's ethnic wear without encountering ad fatigue or diminishing return on ad spend.",
    strategy: [
      "Built a high-velocity UGC creative testing engine for kurti and co-ord drops.",
      "Integrated full-funnel media buying across Meta and Google Shopping.",
      "Streamlined storefront conversion pathways for mobile users."
    ],
    execution: {
      creative: "Weekly static & video hook testing focused on texture, fit, and ethnic styling.",
      media: "P&L-aligned capital allocation with strict bid ceiling controls.",
      cro: "Mobile-first store speed optimization and quick-buy checkout flow.",
      retention: "Automated repurchase and collection launch notifications."
    },
    results: {
      metric1: { label: "ROAS Benchmark", value: "8.0x+" },
      metric2: { label: "Scaling Target", value: "1 Cr Scaled" },
      metric3: { label: "Creative Pipeline", value: "Weekly Drops" }
    },
    testimonialQuote: "Four months. Zero to 1 crore, and ROAS never dropped below 8. What actually surprised me was how calm they stayed while scaling.",
    testimonialAuthor: "Vishnu, Founder of IYKA",
    heroImage: "/assets/iyka.jpeg"
  },
  "kaftanize": {
    slug: "kaftanize",
    clientName: "Kaftanize",
    industry: "Indo-Western & Kurta Sets",
    title: "Kaftanize — Synchronized Creative & Storefront Optimization",
    tagline: "Unifying ads and landing pages to unlock higher conversion rates.",
    challenge: "High storefront drop-offs caused by disconnected ad messaging and unoptimized mobile product pages.",
    strategy: [
      "Redesigned key product detail pages and landing page corridors.",
      "Synchronized performance ad messaging directly with store landing pages.",
      "Deployed automated retention flows for repeat orders."
    ],
    execution: {
      creative: "Aesthetic lifestyle showcases and feature-highlight static ads.",
      media: "Consolidated Meta ad account structure with broad audience targeting.",
      cro: "Simultaneous website layout and checkout friction fixes.",
      retention: "Email & WhatsApp post-purchase review and repurchase triggers."
    },
    results: {
      metric1: { label: "ROAS Benchmark", value: "8.3x" },
      metric2: { label: "Funnel Status", value: "Synchronized" },
      metric3: { label: "Conversion Rate", value: "Optimized" }
    },
    testimonialQuote: "They fixed the website and the ads at the same time. Same traffic, much better conversion, and we're sitting at 8.3x now.",
    testimonialAuthor: "Rahul Aggarwal, Founder of Kaftanize",
    heroImage: "/assets/kaftanize.jpeg"
  },
  "the-emryo-store": {
    slug: "the-emryo-store",
    clientName: "The Emryo Store",
    industry: "Anime Streetwear",
    title: "The Emryo Store — High-Drop Streetwear Acquisition Engine",
    tagline: "Tripled monthly revenue with continuous anime embroidery creative refreshes.",
    challenge: "Anime embroidery streetwear relies on new collection drops; static ad creative quickly fatigues if not refreshed constantly.",
    strategy: [
      "Deployed a rapid creative pipeline to mirror new drop schedules.",
      "Targeted passionate anime sub-cultures with high-converting video hooks.",
      "Optimized contribution margin tracking across all campaign tiers."
    ],
    execution: {
      creative: "High-volume video hooks highlighting detailed embroidery craftsmanship.",
      media: "Dynamic product catalog ads combined with top-of-funnel video acquisition.",
      cro: "Drop-specific collection pages designed for rapid mobile checkout.",
      retention: "VIP drop alerts via SMS and email."
    },
    results: {
      metric1: { label: "Revenue Scale", value: "3x Growth" },
      metric2: { label: "ROAS Benchmark", value: "8.0x+" },
      metric3: { label: "Ad Fatigue", value: "Eliminated" }
    },
    testimonialQuote: "Anime streetwear lives on new drops, so the ads have to keep moving. They ship enough creative that nothing ever goes stale.",
    testimonialAuthor: "Sajid, Founder of The Emryo Store",
    heroImage: "/assets/theepisode.jpeg"
  },
  "etiquette-apparel": {
    slug: "etiquette-apparel",
    clientName: "Etiquette Apparel",
    industry: "D2C Apparel",
    title: "Etiquette Apparel — Profitable Scale & Transparent Reporting",
    tagline: "Doubled brand revenue while maintaining rigid CAC benchmarks.",
    challenge: "Uncertainty in previous agency reporting and rising customer acquisition costs.",
    strategy: [
      "Implemented strict profit-first contribution margin tracking.",
      "Replaced fatigued ad creatives with fresh direct-response angles.",
      "Established weekly decision-driven reporting reviews."
    ],
    execution: {
      creative: "Clean apparel detail overlays and lifestyle motion graphics.",
      media: "Targeted scaling with controlled budget step increases.",
      cro: "Landing page speed optimization and navigation refinement.",
      retention: "Customer lifetime value expansion flows."
    },
    results: {
      metric1: { label: "Revenue Growth", value: "2x Scale" },
      metric2: { label: "ROAS Benchmark", value: "8.0x+" },
      metric3: { label: "Reporting", value: "100% Clear" }
    },
    testimonialQuote: "We've more than doubled since they came in, with ROAS above 8 the whole way. They also tell me what failed and why.",
    testimonialAuthor: "Rupesh, Founder of Etiquette Apparel",
    heroImage: "/assets/etiquetteapperel.jpeg"
  },
  "fig-living": {
    slug: "fig-living",
    clientName: "FIG Living",
    industry: "D2C Brand",
    title: "FIG Living — Storefront Architecture & Funnel Scaling",
    tagline: "Rebuilt conversion corridors before expanding paid ad spend.",
    challenge: "Paid media budget inefficiency due to unoptimized store conversion rates.",
    strategy: [
      "Rearchitected core product pages before scaling ad spend.",
      "Launched direct-response creative assets tailored to high-intent shoppers.",
      "Unified performance marketing with SEO category visibility."
    ],
    execution: {
      creative: "Minimalist product highlight videos and high-contrast static images.",
      media: "Balanced acquisition budget split across search and social.",
      cro: "Full storefront UX overhaul for frictionless purchasing.",
      retention: "Automated replenishment reminders."
    },
    results: {
      metric1: { label: "ROAS Benchmark", value: "8.0x+" },
      metric2: { label: "Conversion Rate", value: "Significantly Higher" },
      metric3: { label: "Store Velocity", value: "Optimized" }
    },
    heroImage: "/assets/figLiving.jpeg"
  },
  "wild-cherry": {
    slug: "wild-cherry",
    clientName: "Wild Cherry",
    industry: "D2C Brand",
    title: "Wild Cherry — Agile Execution & High-Velocity Ad Testing",
    tagline: "Fast creative iterations resulting in steady compounding growth.",
    challenge: "Slow ad production turnarounds holding back account expansion.",
    strategy: [
      "Established same-day creative iteration workflows.",
      "Monitored hourly performance metrics to protect contribution margins.",
      "Expanded multi-channel ad reach across Meta and Google."
    ],
    execution: {
      creative: "Agile static and short-form video creative variations.",
      media: "Dynamic ad set scaling with strict performance kill rules.",
      cro: "PDP mobile layout optimization.",
      retention: "Re-engagement email workflows."
    },
    results: {
      metric1: { label: "ROAS Benchmark", value: "8.0x+" },
      metric2: { label: "Turnaround Time", value: "Same-Day" },
      metric3: { label: "Growth Signal", value: "Steady" }
    },
    testimonialQuote: "Fastest team I've worked with. I flag something in the morning, it's fixed by evening. ROAS has stayed above 8 the whole time.",
    testimonialAuthor: "Founder, Wild Cherry",
    heroImage: "/assets/wildcherry.jpeg"
  }
};
