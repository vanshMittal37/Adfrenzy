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
    id: "zazu",
    slug: "zazu-growth",
    title: "Generating ₹3.1Cr in Sales through Tailored Performance Marketing",
    clientName: "ZAZU",
    category: "ADS",
    industry: "Fashion & E-Commerce",
    thumbnail: "/assets/brand-analytics-sales.jpg",
    videoUrl: "/testimonial2.mp4",
    metrics: {
      roas: "Focused ROAS",
      revenueGrowth: "₹3.1Cr Sales"
    },
    featured: true,
    shortDescription: "High-performance marketing campaigns built around desired ROAS goals and tailored creative assets."
  },
  {
    id: "kaftanize",
    slug: "kaftanize-scaling",
    title: "TOF catalog & Link Click Campaigns",
    clientName: "Kaftanize",
    category: "ADS",
    industry: "Fashion & Lifestyle",
    thumbnail: "/assets/kaftanize.jpeg",
    metrics: {
      roas: "TOF | Link Click"
    },
    featured: true,
    shortDescription: "Advantage+ shopping catalogs and custom top-of-funnel campaign structures."
  },
  {
    id: "fig-living",
    slug: "fig-living",
    title: "Premium Home Decor & Visual Curation",
    clientName: "FIG Living",
    category: "BRANDING",
    industry: "Home & Lifestyle",
    thumbnail: "/assets/figLiving.jpeg",
    metrics: {
      revenueGrowth: "Visual Curation"
    },
    featured: true,
    shortDescription: "Showcasing premium aesthetics and digital identity for high-end home decor."
  },
  {
    id: "sanctuary-living",
    slug: "sanctuary-living",
    title: "Lifestyle Curation & Product Showcase",
    clientName: "Sanctuary Living",
    category: "WEB",
    industry: "Home & Decor",
    thumbnail: "/assets/sanctuaryliving.jpeg",
    metrics: {
      cvrUplift: "Creative Showcase"
    },
    featured: true,
    shortDescription: "Bringing design elegance and premium lifestyle products to life online."
  },
  {
    id: "panila-fashion",
    slug: "panila-fashion",
    title: "Creative Showcasing for Fashion Collections",
    clientName: "Panila Fashion",
    category: "UGC",
    industry: "Apparel & Fashion",
    thumbnail: "/assets/panillafashion.jpeg",
    metrics: {
      roas: "E-comm Portfolio"
    },
    featured: false,
    shortDescription: "Scroll-stopping direct response creative assets customized for premium e-commerce apparel."
  },
  {
    id: "etiquette-apparel",
    slug: "etiquette-apparel",
    title: "Brand Strategy and Lifestyle Content Creation",
    clientName: "Etiquette Apparel",
    category: "SOCIAL",
    industry: "Apparel & Fashion",
    thumbnail: "/assets/etiquetteapperel.jpeg",
    metrics: {
      revenueGrowth: "Lifestyle Ads"
    },
    featured: false,
    shortDescription: "Fashion-first content creation optimized for social proof and conversion loops."
  },
  {
    id: "bhama-designs",
    slug: "bhama-designs",
    title: "Traditional Aesthetics Meet Modern Growth Loops",
    clientName: "Bhama Designs",
    category: "EMAIL",
    industry: "Fashion & Apparel",
    thumbnail: "/assets/kaftanize.jpeg",
    metrics: {
      cvrUplift: "Fashion Portfolio"
    },
    featured: false,
    shortDescription: "Scaling ethnic fashion and premium designs with data-backed media placements."
  },
  {
    id: "iyka",
    slug: "iyka",
    title: "Modern Minimalist Fashion Ads & Placement",
    clientName: "IYKA",
    category: "ADS",
    industry: "Apparel & Fashion",
    thumbnail: "/assets/iyka.jpeg",
    metrics: {
      roas: "Conversion Testing"
    },
    featured: false,
    shortDescription: "Clean, high-performance visual catalog ads built for the modern shopper."
  },
  {
    id: "the-episode",
    slug: "the-episode",
    title: "Dynamic Storytelling & Digital Showroom",
    clientName: "The Episode",
    category: "VIDEO",
    industry: "Fashion & Lifestyle",
    thumbnail: "/assets/theepisode.jpeg",
    metrics: {
      revenueGrowth: "Storytelling Video"
    },
    featured: false,
    shortDescription: "Cinematic, high-velocity creative campaigns tailored to drive customer acquisitions."
  },
  {
    id: "femi9-by-as",
    slug: "femi9-by-as",
    title: "Empowering Fashion Branding & Acquisition",
    clientName: "Femi9 by AS",
    category: "BRANDING",
    industry: "Apparel & Fashion",
    thumbnail: "/assets/panillafashion.jpeg",
    metrics: {
      roas: "Scale Ready"
    },
    featured: false,
    shortDescription: "Tailoring digital creatives to appeal directly to highly-engaged demographics."
  },
  {
    id: "fashion-floor-india",
    slug: "fashion-floor-india",
    title: "Broad Catalog Performance Campaigns",
    clientName: "Fashion Floor India",
    category: "ADS",
    industry: "E-Commerce Fashion",
    thumbnail: "/assets/fashionfloorindia.jpeg",
    metrics: {
      cvrUplift: "Broad Targeting"
    },
    featured: false,
    shortDescription: "Deploying high-velocity Advantage+ catalogs to lower overall cost per acquisition."
  },
  {
    id: "wild-cherry",
    slug: "wild-cherry",
    title: "Bold Creative Testing & Ad Scaling",
    clientName: "Wild Cherry",
    category: "UGC",
    industry: "Fashion & E-Commerce",
    thumbnail: "/assets/wildcherry.jpeg",
    metrics: {
      roas: "High Velocity"
    },
    featured: false,
    shortDescription: "Vibrant creative design and visual product advertising to expand market reach."
  },
  {
    id: "muddnme",
    slug: "muddnme",
    title: "Clean Aesthetics for Lifestyle E-Commerce",
    clientName: "MuddnMe",
    category: "WEB",
    industry: "Lifestyle & Apparel",
    thumbnail: "/assets/muddnme.jpeg",
    metrics: {
      revenueGrowth: "Lifestyle Design"
    },
    featured: false,
    shortDescription: "Highlighting organic lifestyles and minimal design aesthetic to drive high purchase value."
  }
];
