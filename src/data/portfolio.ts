export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  category: string;
  industry: string;
  thumbnail: string;
  videoUrl?: string;
  metrics: {
    primaryValue: string;
    primaryLabel: string;
    secondaryValue?: string;
    secondaryLabel?: string;
    bottomLabel?: string; // used for single-metric cards secondary label at the very bottom
  };
  featured: boolean;
  shortDescription: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "sales-performance-analytics",
    slug: "sales-performance-analytics",
    title: "Sales Performance Analytics",
    clientName: "E-Commerce Retailer",
    category: "REVENUE ANALYTICS",
    industry: "E-Commerce",
    thumbnail: "/assets/brand-analytics-sales.jpg",
    metrics: {
      primaryValue: "₹18,691,624.45",
      primaryLabel: "Gross Sales",
      bottomLabel: "Revenue Analytics"
    },
    featured: true,
    shortDescription: "A detailed view of sales performance, revenue trends, order activity, and overall commercial performance."
  },
  {
    id: "customer-visitor-analytics",
    slug: "customer-visitor-analytics",
    title: "Customer & Visitor Analytics",
    clientName: "Direct-to-Consumer Brand",
    category: "CUSTOMER ANALYTICS",
    industry: "D2C Brand",
    thumbnail: "/assets/brand-analytics-visitors.jpg",
    metrics: {
      primaryValue: "₹17,355,213.31",
      primaryLabel: "Gross Sales",
      bottomLabel: "Customer Analytics"
    },
    featured: true,
    shortDescription: "Performance insights covering visitor trends, customer behavior, sales activity, and overall store performance."
  },
  {
    id: "campaign-performance-overview",
    slug: "campaign-performance-overview",
    title: "Campaign Performance Overview",
    clientName: "Fashion & Lifestyle Brand",
    category: "PERFORMANCE MARKETING",
    industry: "Fashion Retailer",
    thumbnail: "/assets/brand-meta-performance-01.jpg",
    metrics: {
      primaryValue: "8.30 ROAS",
      primaryLabel: "Average Campaign ROAS",
      secondaryValue: "₹2,738,166.00",
      secondaryLabel: "Purchase Conversion Value"
    },
    featured: true,
    shortDescription: "A performance marketing dashboard showing campaign spend, purchase value, ROAS, conversions, and acquisition efficiency."
  },
  {
    id: "paid-media-performance",
    slug: "paid-media-performance",
    title: "Paid Media Performance",
    clientName: "Lifestyle Accessories Brand",
    category: "PAID MEDIA",
    industry: "Consumer Goods",
    thumbnail: "/assets/brand-meta-performance-02.jpg",
    metrics: {
      primaryValue: "8.94 ROAS",
      primaryLabel: "Average Campaign ROAS",
      secondaryValue: "₹1,911,793.40",
      secondaryLabel: "Purchase Conversion Value"
    },
    featured: true,
    shortDescription: "Campaign-level performance analysis focused on advertising spend, purchase value, ROAS, and cost efficiency."
  },
  {
    id: "catalog-campaign-strategy",
    slug: "catalog-campaign-strategy",
    title: "Catalog Campaign Strategy",
    clientName: "Apparel Brand",
    category: "CATALOG CAMPAIGN",
    industry: "Apparel & Fashion",
    thumbnail: "/assets/kaftanize-campaign.jpg",
    metrics: {
      primaryValue: "8.09 ROAS",
      primaryLabel: "Average Campaign ROAS",
      secondaryValue: "₹11,851,822.97",
      secondaryLabel: "Purchase Conversion Value"
    },
    featured: true,
    shortDescription: "A visual showcase of catalog-driven campaign execution designed around product discovery, audience engagement, and purchase intent."
  },
  {
    id: "performance-campaign-results",
    slug: "performance-campaign-results",
    title: "Performance Campaign Results",
    clientName: "Activewear Brand",
    category: "CAMPAIGN PERFORMANCE",
    industry: "Athleisure",
    thumbnail: "/assets/kaftanize-performance-01.jpg",
    metrics: {
      primaryValue: "8.14 ROAS",
      primaryLabel: "Average Campaign ROAS",
      secondaryValue: "₹507,909.66",
      secondaryLabel: "Total Spent"
    },
    featured: true,
    shortDescription: "A campaign performance view highlighting advertising investment, purchase outcomes, ROAS, and overall campaign efficiency."
  }
];
