export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
  icon: string;
  highlightText: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "performance-marketing",
    slug: "performance-marketing",
    title: "Performance Marketing",
    tagline: "Turn advertising spend into measurable, profitable growth.",
    description: "Paid acquisition engineered around unit economics, contribution margin, and customer acquisition cost (CAC). We manage Meta, Google, and TikTok ads as an integrated growth strategy.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Google Search & Shopping (Performance Max)",
      "YouTube Ads & Video Action",
      "TikTok Ads & Spark Ads",
      "Retargeting & Multi-Touch Funnels",
      "Conversion Tracking & CAPI Setup",
      "Budget Allocation & Bidding Optimisation",
      "Weekly Attribution & P&L Reporting"
    ],
    deliverables: [
      "Custom Campaign Architecture",
      "Weekly Performance Reviews",
      "Real-time Analytics Dashboard",
      "Audience Research & Persona Mapping"
    ],
    icon: "TrendingUp",
    highlightText: "Profit-first media buying that scales profitably without ad fatigue."
  },
  {
    id: "creative",
    slug: "creative",
    title: "Performance Creative",
    tagline: "Creative that earns attention and moves customers to action.",
    description: "We don't create content just to look pretty. We produce high-velocity direct response video, UGC, motion graphics, and statics built to convert strangers into buyers.",
    features: [
      "User Generated Content (UGC) Production",
      "High-Converting Video Ads (PAS & Direct Response)",
      "Static Image & Carousel Ad Design",
      "Instagram Reels & TikTok Vertical Videos",
      "3D Product Visualisation & Motion Graphics",
      "Founder Story & Brand Ad Films",
      "Creative Strategy & Hook Testing Framework",
      "AI-Augmented Visual Assets"
    ],
    deliverables: [
      "20–50+ New Ad Assets Monthly",
      "Scriptwriting & Concept Development",
      "Raw & Formatted Assets (9:16, 4:5, 1:1)",
      "Weekly Creative Performance Analysis"
    ],
    icon: "Video",
    highlightText: "Continuous creative velocity so your ad accounts never hit creative fatigue."
  },
  {
    id: "cro",
    slug: "cro",
    title: "CRO & Landing Pages",
    tagline: "More traffic isn't always the answer — convert what you have.",
    description: "Before spending more on paid acquisition, optimize your conversion rate. We design and build high-converting landing pages and checkout flows.",
    features: [
      "Custom Direct-Response Landing Pages",
      "Shopify & Custom Web Conversion Audits",
      "A/B Split Testing & Multivariate Testing",
      "Product Page (PDP) Layout Optimisation",
      "Cart & Checkout Friction Removal",
      "Mobile UX & Page Speed Optimisation",
      "Heatmap & User Behavior Tracking",
      "AOV Boosting Offer Structures"
    ],
    deliverables: [
      "High-Speed Mobile Landers",
      "Figma UI Wireframes & Code",
      "A/B Test Variant Setup",
      "Conversion Rate Growth Audits"
    ],
    icon: "Zap",
    highlightText: "Unlock extra revenue from existing ad traffic before scaling spend."
  },
  {
    id: "web-design",
    slug: "web-design",
    title: "Web Design & Development",
    tagline: "Websites engineered to convert visitors into customers.",
    description: "Your website is your digital flagship storefront. We build ultra-fast, mobile-optimized Shopify stores and custom web platforms designed for growth.",
    features: [
      "Custom Shopify & Shopify Plus Stores",
      "Modern Web Applications (Next.js / React)",
      "Conversion-Focused UI/UX Design",
      "Mobile-First Responsive Layouts",
      "Custom App Integration & APIs",
      "Core Web Vitals & Speed Tuning",
      "SEO-Optimised Architecture",
      "Seamless CMS Content Management"
    ],
    deliverables: [
      "Full Custom Website Development",
      "Mobile & Desktop UI Kits",
      "Speed & Accessibility Guarantee",
      "CMS Training & Handover Support"
    ],
    icon: "Layout",
    highlightText: "Stunning aesthetics paired with conversion-tested UX architecture."
  },
  {
    id: "strategy",
    slug: "strategy",
    title: "Growth Strategy",
    tagline: "Strategy before execution — clear roadmaps to scale.",
    description: "We start by auditing your business economics, unit metrics, and conversion bottlenecks before recommending where to invest your growth capital.",
    features: [
      "Full Funnel & Unit Economics Audit",
      "Competitor & Market Research",
      "Ideal Customer Profile (ICP) Mapping",
      "Omnichannel Acquisition Roadmap",
      "Retention & LTV Expansion Strategy",
      "90-Day Execution Timelines",
      "P&L & Contribution Margin Modeling",
      "Executive Growth Advisory Calls"
    ],
    deliverables: [
      "Comprehensive 90-Day Growth Blueprint",
      "Unit Economics Calculator",
      "Creative Briefing Frameworks",
      "Bi-weekly Executive Strategy Syncs"
    ],
    icon: "Target",
    highlightText: "Eliminating guesswork so every marketing dollar is spent strategically."
  }
];
