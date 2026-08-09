export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  category: "ADS" | "UGC" | "SOCIAL" | "VIDEO" | "LANDING PAGES" | "EMAIL" | "BRANDING" | "WEB";
  industry: string;
  thumbnail: string;
  videoUrl?: string;
  metrics: {
    roas?: string;
    revenueGrowth?: string;
    cacReduction?: string;
    cvrUplift?: string;
  };
  featured: boolean;
  shortDescription: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "work-1",
    slug: "apparel-dtc-growth",
    title: "Scaling Direct Response Video Ads for Premium Apparel",
    clientName: "[D2C Fashion Brand]",
    category: "ADS",
    industry: "Fashion & Lifestyle",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    metrics: {
      roas: "[XX.Xx] ROAS",
      revenueGrowth: "+[XX]% MoM",
      cacReduction: "-[XX]% CAC"
    },
    featured: true,
    shortDescription: "High-velocity UGC and PAS video creative framework deployed on Meta and TikTok."
  },
  {
    id: "work-2",
    slug: "skincare-ugc-funnel",
    title: "UGC & Interactive Landing Page Engine for Beauty Brand",
    clientName: "[Beauty & Skincare]",
    category: "UGC",
    industry: "Beauty & Wellness",
    thumbnail: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    metrics: {
      roas: "[XX.Xx] ROAS",
      cvrUplift: "+[XX]% CVR",
      revenueGrowth: "+[XX]% Revenue"
    },
    featured: true,
    shortDescription: "Authentic creator unboxing videos linked to speed-optimized Shopify landing pages."
  },
  {
    id: "work-3",
    slug: "ecommerce-web-redesign",
    title: "Conversion-First Shopify Redesign for Home Decor",
    clientName: "[Home Decor Brand]",
    category: "WEB",
    industry: "Home & Furniture",
    thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    metrics: {
      cvrUplift: "+[XX]% CVR",
      revenueGrowth: "+[XX]% AOV",
      roas: "[XX.Xx] MER"
    },
    featured: true,
    shortDescription: "Complete Shopify store overhaul focused on mobile UX, fast load times, and frictionless checkout."
  },
  {
    id: "work-4",
    slug: "klaviyo-retention-system",
    title: "Automated Lifecycle Email & SMS Revenue Machine",
    clientName: "[Wellness Brand]",
    category: "EMAIL",
    industry: "Health & Nutrition",
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    metrics: {
      revenueGrowth: "+[XX]% Email Rev",
      cvrUplift: "+[XX]% LTV",
      cacReduction: "-[XX]% Churn"
    },
    featured: true,
    shortDescription: "12-stage Klaviyo email flows and SMS broadcast campaign driving 35%+ repeat purchase revenue."
  },
  {
    id: "work-5",
    slug: "high-ticket-lander-cro",
    title: "Direct Response Landing Page for High-Ticket SaaS",
    clientName: "[B2B Tech Brand]",
    category: "LANDING PAGES",
    industry: "SaaS & Technology",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    metrics: {
      cvrUplift: "+[XX]% Lead Rate",
      cacReduction: "-[XX]% CPL"
    },
    featured: false,
    shortDescription: "Dark-mode, high-converting landing page built with Next.js and integrated booking funnels."
  },
  {
    id: "work-6",
    slug: "luxury-brand-identity",
    title: "Visual Identity & Product Launch Film for Accessories",
    clientName: "[Luxury Accessories]",
    category: "BRANDING",
    industry: "Jewelry & Luxury",
    thumbnail: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
    metrics: {
      revenueGrowth: "+[XX]% Launch Rev",
      roas: "[XX.Xx] ROAS"
    },
    featured: false,
    shortDescription: "Cinematic ad film and distinctive visual identity system for a premium product launch."
  },
  {
    id: "work-7",
    slug: "social-first-reels-engine",
    title: "Organic Social Media & Short-Form Video Strategy",
    clientName: "[Fitness Brand]",
    category: "SOCIAL",
    industry: "Sports & Fitness",
    thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    metrics: {
      revenueGrowth: "+[XX]% Engagement",
      roas: "[XX.Xx] Organic Reach"
    },
    featured: false,
    shortDescription: "Daily Instagram Reels and TikTok viral content strategy driving high organic brand recall."
  },
  {
    id: "work-8",
    slug: "pmax-google-scaling",
    title: "Full-Funnel Google Performance Max & Search Scale",
    clientName: "[Consumer Goods]",
    category: "VIDEO",
    industry: "Consumer Electronics",
    thumbnail: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=800&auto=format&fit=crop",
    metrics: {
      roas: "[XX.Xx] ROAS",
      revenueGrowth: "+[XX]% Sales"
    },
    featured: false,
    shortDescription: "High-intent Google Shopping and YouTube video ad strategy with automated bidding."
  }
];
