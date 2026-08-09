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
}

export const caseStudiesData: Record<string, CaseStudy> = {
  "apparel-dtc-growth": {
    slug: "apparel-dtc-growth",
    clientName: "[D2C Fashion Brand]",
    industry: "Apparel & Accessories",
    title: "Scaling Direct Response Video Ads for Premium Apparel",
    tagline: "How an integrated creative + media loop unlocked profitable scaling on Meta & TikTok.",
    challenge: "The brand hit a revenue wall due to severe ad fatigue. Existing static creative was driving high Customer Acquisition Costs (CAC), preventing profitable scaling beyond initial budgets.",
    strategy: [
      "Built a high-velocity UGC video testing framework with 20+ hooks per month.",
      "Restructured Meta ad accounts into ABO testing and CBO scaling campaigns.",
      "Optimised product pages for mobile conversion and cart bundle incentives."
    ],
    execution: {
      creative: "Produced 30+ vertical UGC videos, unboxing reels, and direct response benefit-focused ads.",
      media: "Consolidated Meta & TikTok campaigns, isolating winning creative hooks for scaled spend.",
      cro: "Implemented dynamic offer popups, sticky add-to-cart buttons, and bundle discounts.",
      retention: "Set up 4-part post-purchase Klaviyo flow and win-back automation."
    },
    results: {
      metric1: { label: "Blended ROAS", value: "[XX.Xx]" },
      metric2: { label: "YoY Revenue Growth", value: "+[XX]%" },
      metric3: { label: "Reduction in CAC", value: "-[XX]%" }
    },
    testimonialQuote: "SparkMedia aligned creative production directly with media buying data. The feedback loop was seamless.",
    testimonialAuthor: "[CMO, D2C Apparel Brand]",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
  },
  "skincare-ugc-funnel": {
    slug: "skincare-ugc-funnel",
    clientName: "[Beauty & Skincare]",
    industry: "Beauty & Wellness",
    title: "UGC & Interactive Landing Page Engine for Beauty Brand",
    tagline: "Combining authentic creator content with dedicated conversion landers.",
    challenge: "High traffic bounce rates on default store pages and low initial conversion rates were eroding paid ad profitability.",
    strategy: [
      "Designed dedicated, fast-loading direct-response advertorial landing pages.",
      "Recruited and managed a specialized network of beauty creators for UGC.",
      "Implemented Klaviyo email and SMS welcome sequences."
    ],
    execution: {
      creative: "Captured raw before-and-after footage, texture close-ups, and routine tutorials.",
      media: "Deployed Meta CAPI tracking and scaled retargeting with customer testimonials.",
      cro: "Built high-speed Next.js landing pages with embedded social proof.",
      retention: "Automated replenishment reminders at 30-day customer usage intervals."
    },
    results: {
      metric1: { label: "Conversion Rate Uplift", value: "+[XX]%" },
      metric2: { label: "Peak ROAS", value: "[XX.Xx]" },
      metric3: { label: "LTV Expansion", value: "+[XX]%" }
    },
    testimonialQuote: "The landing pages transformed our traffic into actual profitable customers.",
    testimonialAuthor: "[Founder, Skincare Brand]",
    heroImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
  }
};
