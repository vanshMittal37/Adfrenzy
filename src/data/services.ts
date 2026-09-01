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
  tags: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "performance-marketing",
    slug: "performance-marketing",
    title: "Performance Marketing",
    tagline: "Run as a growth strategy, not a button-pushing job.",
    description: "Meta and Google, run as a growth strategy and not a button-pushing job. We build around CAC, contribution margin and blended ROAS. Scaling decisions are made on the P&L, not on the dashboard.",
    tags: ["Meta", "Google", "YouTube", "Demand Gen"],
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Google Search & Shopping (Performance Max)",
      "YouTube Ads & Demand Gen",
      "CAC & Contribution Margin Tracking",
      "Blended ROAS Optimization",
      "P&L-Focused Capital Allocation"
    ],
    deliverables: [
      "Custom Campaign Architecture",
      "Weekly Attribution Reviews",
      "Real-Time Analytics Dashboard",
      "P&L Growth Roadmap"
    ],
    icon: "TrendingUp",
    highlightText: "Profit-first media buying that scales around your contribution margins."
  },
  {
    id: "creative",
    slug: "creative",
    title: "Performance Creative & UGC",
    tagline: "Ads built to sell, not to win awards.",
    description: "Ads built to sell, not to win awards. Hooks tested weekly, UGC, statics, motion, ad films. We ship volume because volume is the only real way to find a winner.",
    tags: ["UGC", "Statics", "Video", "Hook testing"],
    features: [
      "User Generated Content (UGC) Production",
      "Direct Response High-Converting Video Ads",
      "Static & Carousel Visual Assets",
      "Weekly Hook Testing Engine",
      "Motion Graphics & Ad Films",
      "Creative Fatigue Prevention Pipeline"
    ],
    deliverables: [
      "Weekly Creative Ship Schedule",
      "Tested Hook Bank Deployment",
      "Raw & Formatted Assets (9:16, 4:5, 1:1)",
      "Creative Performance Analysis"
    ],
    icon: "Video",
    highlightText: "High-velocity creative shipping so fatigue is solved before it hits."
  },
  {
    id: "web-design",
    slug: "web-design",
    title: "Website Design & Development",
    tagline: "If it doesn't help someone buy, it doesn't ship.",
    description: "Fast, mobile-first Shopify and custom builds. Every section earns its place. If it doesn't help someone buy, it doesn't ship.",
    tags: ["Shopify", "Custom", "Speed", "Mobile-first"],
    features: [
      "Custom Shopify & Shopify Plus Builds",
      "Mobile-First Responsive Architecture",
      "Ultra-Fast Core Web Vitals Speed Tuning",
      "High-Converting PDP & Checkout UX",
      "Custom App Integrations & Tech Stack",
      "Clean Modular Codebase"
    ],
    deliverables: [
      "Full Mobile-Optimized Storefront",
      "Custom UI/UX Kit & Wireframes",
      "Page Speed Guarantee",
      "Handover & Management Guide"
    ],
    icon: "Layout",
    highlightText: "Built specifically for high-volume conversion and mobile shopping speed."
  },
  {
    id: "cro",
    slug: "cro",
    title: "CRO & Landing Pages",
    tagline: "Get more from the traffic you already bought.",
    description: "Before you pay more for traffic, get more from the traffic you already bought. We rebuild PDPs, landers and checkout flows and test them properly.",
    tags: ["Landers", "PDP", "Checkout", "A/B testing"],
    features: [
      "Direct Response Dedicated Landing Pages",
      "Product Detail Page (PDP) Rebuilds",
      "Checkout Flow & Friction Removal",
      "A/B Split Testing & Variant Strategy",
      "Mobile UX Optimization",
      "AOV & Bundle Offer Architecture"
    ],
    deliverables: [
      "High-Speed Custom Landers",
      "Figma UI Designs & Production Code",
      "A/B Test Variant Setup",
      "Weekly Conversion Audits"
    ],
    icon: "Zap",
    highlightText: "Turn wasted clicks into revenue before spending another rupee on ads."
  },
  {
    id: "seo",
    slug: "seo",
    title: "SEO & Organic Growth",
    tagline: "The layer that keeps working after you pause the ads.",
    description: "The layer that keeps working after you pause the ads. Technical fixes, category pages, content that ranks and blended CAC that finally comes down.",
    tags: ["Technical", "On-page", "Content", "Local"],
    features: [
      "Technical SEO Audits & Fixes",
      "Category Page Optimization",
      "High-Intent Organic Content Strategy",
      "Local & Brand Search Optimization",
      "Internal Linking & Site Structure",
      "Blended CAC Reduction Engine"
    ],
    deliverables: [
      "Technical Health Fixes",
      "Keyword & Intent Hierarchy",
      "Content Publishing Pipeline",
      "Organic Revenue Attribution Reports"
    ],
    icon: "Target",
    highlightText: "Build lasting organic equity to lower your blended customer acquisition cost."
  },
  {
    id: "strategy",
    slug: "strategy",
    title: "Growth Consultation",
    tagline: "For founders who need someone who has seen the next stage.",
    description: "For founders who have a team but need someone who has seen the next stage. Audit, roadmap, unit economics, hiring plan. Sometimes you need a plan more than another vendor.",
    tags: ["Audit", "Roadmap", "Unit economics"],
    features: [
      "Full Account & Funnel Audit",
      "90-Day Execution Growth Roadmap",
      "Unit Economics & Margin Modeling",
      "Marketing Hiring & Team Plan",
      "Omnichannel Acquisition Strategy",
      "Executive Growth Advisory Syncs"
    ],
    deliverables: [
      "90-Day Tailored Growth Blueprint",
      "Unit Economics Model",
      "Ad Agency & In-House Hiring Blueprint",
      "Weekly Executive Syncs"
    ],
    icon: "Target",
    highlightText: "A clear, actionable plan from operators who have scaled D2C brands."
  }
];
