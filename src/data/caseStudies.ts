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
  "sales-performance-analytics": {
    slug: "sales-performance-analytics",
    clientName: "E-Commerce Retailer",
    industry: "E-Commerce",
    title: "Sales Performance Analytics",
    tagline: "A detailed view of sales performance, revenue trends, order activity, and overall commercial performance.",
    challenge: "Optimizing overall sales pipeline and tracking revenue distribution over complex scaling phases without attribution loss.",
    strategy: [
      "Integrated precise client-side tracking to capture exact purchase value data.",
      "Optimized scaling budgets towards high-margin collections.",
      "Consolidated order activity metrics to streamline inventory allocation."
    ],
    execution: {
      creative: "Deployed high-contrast catalog assets focusing on top-selling SKUs.",
      media: "Scaled broad search and social campaigns to capture active market demand.",
      cro: "Improved product page checkout steps to maximize average order value.",
      retention: "Established cart abandonment flows to capture missed purchase opportunities."
    },
    results: {
      metric1: { label: "Gross Sales", value: "₹18,691,624.45" },
      metric2: { label: "Tracking Accuracy", value: "99.8%" },
      metric3: { label: "Optimization", value: "Revenue Focus" }
    },
    heroImage: "/assets/brand-analytics-sales.jpg"
  },
  "customer-visitor-analytics": {
    slug: "customer-visitor-analytics",
    clientName: "Direct-to-Consumer Brand",
    industry: "D2C Brand",
    title: "Customer & Visitor Analytics",
    tagline: "Performance insights covering visitor trends, customer behavior, sales activity, and overall store performance.",
    challenge: "Identifying core drop-off patterns in visitor sessions to improve the overall conversion rate of new customer acquisitions.",
    strategy: [
      "Monitored hourly traffic density to structure optimal ad schedule patterns.",
      "Segmented returning visitors from new audiences to customize lander experience.",
      "Analyzed page response times across different devices to reduce friction."
    ],
    execution: {
      creative: "Designed mobile-optimized direct response video creatives.",
      media: "Allocated custom budget parameters for retargeting high-intent visitor sessions.",
      cro: "Simplified mobile menu navigation and product search functions.",
      retention: "Nurtured first-time visitors with custom welcome sequences."
    },
    results: {
      metric1: { label: "Gross Sales", value: "₹17,355,213.31" },
      metric2: { label: "Visitor Insights", value: "Fully Monitored" },
      metric3: { label: "Audience Growth", value: "D2C Scale" }
    },
    heroImage: "/assets/brand-analytics-visitors.jpg"
  },
  "campaign-performance-overview": {
    slug: "campaign-performance-overview",
    title: "Campaign Performance Overview",
    clientName: "Fashion Retailer",
    industry: "Fashion Retailer",
    tagline: "A performance marketing dashboard showing campaign spend, purchase value, ROAS, conversions, and acquisition efficiency.",
    challenge: "Scaling account-level daily budget limits without experiencing performance degradation or ROAS drops.",
    strategy: [
      "Structured ad account into clean top-of-funnel testing sets and retargeting sets.",
      "Maintained strict bid controls to optimize cost per purchase.",
      "Rotated catalog templates to prevent creative ad fatigue."
    ],
    execution: {
      creative: "Created catalog overlays highlighting dynamic pricing and discount features.",
      media: "Scaled high-performing campaign sets up to 8.30 ROAS benchmarks.",
      cro: "Added quick-add-to-cart buttons directly on collection grids.",
      retention: "Re-engaged past purchasers with automatic cross-sell catalogs."
    },
    results: {
      metric1: { label: "Ad Account ROAS", value: "8.30" },
      metric2: { label: "Conversion Value", value: "₹2,738,166.00" },
      metric3: { label: "Cost Efficiency", value: "Optimized" }
    },
    heroImage: "/assets/brand-meta-performance-01.jpg"
  },
  "paid-media-performance": {
    slug: "paid-media-performance",
    title: "Paid Media Performance",
    clientName: "Consumer Goods Brand",
    industry: "Consumer Goods",
    tagline: "Campaign-level performance analysis focused on advertising spend, purchase value, ROAS, and cost efficiency.",
    challenge: "Lowering acquisition costs while scaling overall ad spend footprint across major platforms.",
    strategy: [
      "Utilized Advantage+ campaign targeting to unlock lower CPM markets.",
      "Tested vertical short-form product videos against static product graphics.",
      "Optimized bidding towards highest-volume conversion signals."
    ],
    execution: {
      creative: "Produced high-velocity direct-response social assets.",
      media: "Scaled media spend while sustaining a premium 8.94 ROAS performance.",
      cro: "Streamlined single-page checkouts to minimize purchasing friction.",
      retention: "Deployed customized post-purchase confirmation discount offers."
    },
    results: {
      metric1: { label: "Campaign ROAS", value: "8.94" },
      metric2: { label: "Purchase Value", value: "₹1,911,793.40" },
      metric3: { label: "Acquisition Cost", value: "Reduced" }
    },
    heroImage: "/assets/brand-meta-performance-02.jpg"
  },
  "catalog-campaign-strategy": {
    slug: "catalog-campaign-strategy",
    title: "Catalog Campaign Strategy",
    clientName: "Apparel Brand",
    industry: "Apparel & Fashion",
    tagline: "A visual showcase of catalog-driven campaign execution designed around product discovery, audience engagement, and purchase intent.",
    challenge: "Presenting a vast product catalog efficiently to diverse audience segments with high commercial intent.",
    strategy: [
      "Implemented dynamic product group sets tailored to real-time viewer trends.",
      "Leveraged lookalike audiences based on highest-tier purchasers.",
      "Monitored catalog sync health daily to avoid broken landing links."
    ],
    execution: {
      creative: "Curated high-resolution lifestyle product imagery for carousels.",
      media: "Allocated performance budget to Advantage+ catalogs achieving 8.09 ROAS.",
      cro: "Optimized storefront speed and product category filters.",
      retention: "Programmed behavioral-based product recommendation emails."
    },
    results: {
      metric1: { label: "Average ROAS", value: "8.09" },
      metric2: { label: "Purchase Value", value: "₹11,851,822.97" },
      metric3: { label: "Total Purchases", value: "3,104" }
    },
    heroImage: "/assets/kaftanize-campaign.jpg"
  },
  "performance-campaign-results": {
    slug: "performance-campaign-results",
    title: "Performance Campaign Results",
    clientName: "Athleisure Brand",
    industry: "Athleisure",
    tagline: "A campaign performance view highlighting advertising investment, purchase outcomes, ROAS, and overall campaign efficiency.",
    challenge: "Maximizing the efficiency of scale budgets and maintaining steady ROAS performance throughout seasonal changes.",
    strategy: [
      "Designed and tested strict budget scaling structures to prevent ad dilution.",
      "Optimized lookalike audiences based on customer engagement metrics.",
      "Sustained stable cost metrics across broad geographic regions."
    ],
    execution: {
      creative: "Created high-impact social layouts showcasing products in motion.",
      media: "Managed scale spend profiles achieving 8.14 average ROAS.",
      cro: "Refined lander landing steps to boost conversion velocity.",
      retention: "Maintained automated email flows for product replenishment cycles."
    },
    results: {
      metric1: { label: "Average ROAS", value: "8.14" },
      metric2: { label: "Total Spent", value: "₹507,909.66" },
      metric3: { label: "Sales Conversion", value: "Scale Achieved" }
    },
    heroImage: "/assets/kaftanize-performance-01.jpg"
  }
};
