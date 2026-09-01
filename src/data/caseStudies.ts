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
  "brand-1": {
    slug: "brand-1",
    clientName: "[Brand 1]",
    industry: "[Category]",
    title: "[Brand 1]",
    tagline: "[8.6x ROAS at scale]",
    challenge: "Scaling account-level spend while preserving contribution margins.",
    strategy: [
      "Integrated profit-first media buying structure across Meta and Google.",
      "Shipped weekly UGC and static creative hooks to eliminate ad fatigue.",
      "Optimized PDP landing pages for mobile checkout speed."
    ],
    execution: {
      creative: "Weekly hook testing and high-velocity UGC assets.",
      media: "Controlled step budget increases aligned with P&L CAC.",
      cro: "Mobile-first store optimization and friction removal.",
      retention: "Post-purchase sequences to increase repeat order value."
    },
    results: {
      metric1: { label: "Average ROAS", value: "8.6x" },
      metric2: { label: "Scale Benchmark", value: "Sustained" },
      metric3: { label: "Funnel Status", value: "Optimized" }
    },
    heroImage: "/assets/brand-analytics-sales.jpg"
  },
  "brand-2": {
    slug: "brand-2",
    clientName: "[Brand 2]",
    industry: "[Category]",
    title: "[Brand 2]",
    tagline: "[Revenue 29L to 1.2Cr in 5 months]",
    challenge: "Overcoming revenue stagnancy and scaling across core acquisition channels.",
    strategy: [
      "Rebuilt core landing pages for direct purchase conversion.",
      "Deployed high-velocity creative volume testing pipeline.",
      "Optimized contribution margin tracking."
    ],
    execution: {
      creative: "Direct-response video hooks and UGC assets.",
      media: "P&L-aligned capital allocation.",
      cro: "PDP and checkout flow friction removal.",
      retention: "Email & SMS flow optimization."
    },
    results: {
      metric1: { label: "Revenue Scale", value: "29L to 1.2Cr" },
      metric2: { label: "Timeframe", value: "5 Months" },
      metric3: { label: "Growth Status", value: "Compounding" }
    },
    heroImage: "/assets/brand-analytics-visitors.jpg"
  },
  "brand-3": {
    slug: "brand-3",
    clientName: "[Brand 3]",
    industry: "[Category]",
    title: "[Brand 3]",
    tagline: "[CAC down 38%]",
    challenge: "High customer acquisition costs on paid media channels.",
    strategy: [
      "Engineered full-funnel CRO to increase baseline conversion rates.",
      "Refreshed static and video ad creatives before fatigue.",
      "Optimized paid search and shopping targeting."
    ],
    execution: {
      creative: "High-contrast catalog overlays and motion graphics.",
      media: "Targeted media buying with strict bid controls.",
      cro: "A/B testing PDP layouts and quick buy steps.",
      retention: "Automated repurchase reminders."
    },
    results: {
      metric1: { label: "CAC Reduction", value: "-38%" },
      metric2: { label: "Conversion Rate", value: "Improved" },
      metric3: { label: "Blended ROAS", value: "Scaled" }
    },
    heroImage: "/assets/brand-meta-performance-01.jpg"
  },
  "brand-4": {
    slug: "brand-4",
    clientName: "[Brand 4]",
    industry: "[Category]",
    title: "[Brand 4]",
    tagline: "[Metric]",
    challenge: "Establishing consistent acquisition loop across search and social.",
    strategy: [
      "Unified performance marketing and creative execution.",
      "Technical SEO and category page optimization.",
      "Weekly performance review and decision framework."
    ],
    execution: {
      creative: "Tested hook bank deployment.",
      media: "Balanced acquisition budget allocation.",
      cro: "Mobile-first store speed tuning.",
      retention: "Customer LTV expansion."
    },
    results: {
      metric1: { label: "Performance Metric", value: "[Metric]" },
      metric2: { label: "Account Signal", value: "Stable" },
      metric3: { label: "Growth Loop", value: "Active" }
    },
    heroImage: "/assets/brand-meta-performance-02.jpg"
  }
};
