export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  category: string;
  industry: string;
  thumbnail: string;
  website: string;
  videoUrl?: string;
  metrics: {
    primaryValue: string;
    primaryLabel: string;
    secondaryValue?: string;
    secondaryLabel?: string;
    bottomLabel?: string;
  };
  featured: boolean;
  shortDescription: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "wine-chateau",
    slug: "wine-chateau",
    title: "Wine Chateau",
    clientName: "Wine Chateau",
    category: "D2C Wine & Spirits",
    industry: "Wine & Spirits",
    thumbnail: "/assets/wine-chateau-product.jpg",
    website: "https://winechateau.com",
    metrics: {
      primaryValue: "8.0x+ ROAS",
      primaryLabel: "US Market Scale",
      bottomLabel: "Performance & Creative"
    },
    featured: true,
    shortDescription: "US market scale & profitable customer acquisition for premium wine catalog."
  },
  {
    id: "rootz-organics",
    slug: "rootz-organics",
    title: "Rootz Organics",
    clientName: "Rootz Organics",
    category: "Organic Fruits & Veggies",
    industry: "Organic Produce",
    thumbnail: "/assets/rootz-organics-product.jpg",
    website: "https://www.rootzorganics.com/categories/veg-and-fruits",
    metrics: {
      primaryValue: "8.2x ROAS",
      primaryLabel: "Fresh Organic Scale",
      bottomLabel: "Retention & Acquisition"
    },
    featured: true,
    shortDescription: "Fresh organic produce D2C performance scaling and recurring subscription loops."
  },
  {
    id: "label-pikake",
    slug: "label-pikake",
    title: "Label Pikake",
    clientName: "Label Pikake",
    category: "Ethnic & Designer Wear",
    industry: "Designer Fashion",
    thumbnail: "/assets/label-pikake-product.jpg",
    website: "https://www.labelpikake.com",
    metrics: {
      primaryValue: "8.5x ROAS",
      primaryLabel: "Monthly Growth",
      bottomLabel: "Creative Pipeline"
    },
    featured: true,
    shortDescription: "Consistent month-over-month ethnic apparel acquisition and high-converting ad funnels."
  },
  {
    id: "ai-by-prerna",
    slug: "ai-by-prerna",
    title: "AI by Prerna",
    clientName: "AI by Prerna",
    category: "D2C Couture & Fashion",
    industry: "Couture & Fashion",
    thumbnail: "/assets/ai-by-prerna-product.jpg",
    website: "https://aibyprerna.com",
    metrics: {
      primaryValue: "8.4x ROAS",
      primaryLabel: "Revenue Doubled",
      bottomLabel: "Full-Funnel Scaling"
    },
    featured: true,
    shortDescription: "High-velocity creative testing pipeline and doubled revenue scale."
  },
  {
    id: "atulya-karigari",
    slug: "atulya-karigari",
    title: "Atulya Karigari",
    clientName: "Atulya Karigari",
    category: "Handcrafted Heritage Wear",
    industry: "Heritage Craft",
    thumbnail: "/assets/atulya-karigari-product.jpg",
    website: "https://www.atulyakarigari.com",
    metrics: {
      primaryValue: "8.5x ROAS",
      primaryLabel: "Heritage Scale",
      bottomLabel: "Store & Performance"
    },
    featured: true,
    shortDescription: "Craft-focused narrative marketing and high-intent customer acquisition."
  },
  {
    id: "velviore",
    slug: "velviore",
    title: "Velviore",
    clientName: "Velviore",
    category: "Luxury D2C Apparel",
    industry: "Luxury Apparel",
    thumbnail: "/assets/velviore-product.jpg",
    website: "https://velviore.com",
    metrics: {
      primaryValue: "8.1x ROAS",
      primaryLabel: "New Launch Scale",
      bottomLabel: "Media & CRO"
    },
    featured: true,
    shortDescription: "Rapid customer acquisition strategy for luxury apparel D2C storefront."
  },

  // ADDITIONAL WORK CARDS
  {
    id: "iyka",
    slug: "iyka",
    title: "IYKA",
    clientName: "IYKA",
    category: "Women's Ethnic Wear",
    industry: "Women's Ethnic Wear",
    thumbnail: "/assets/iyka.jpeg",
    website: "https://iyka.co.in",
    metrics: {
      primaryValue: "Full-Funnel Growth",
      primaryLabel: "Ethnic Wear",
      bottomLabel: "Performance & Creative"
    },
    featured: true,
    shortDescription: "Full-funnel ethnic wear acquisition & high-velocity creative testing."
  },
  {
    id: "kaftanize",
    slug: "kaftanize",
    title: "Kaftanize",
    clientName: "Kaftanize",
    category: "Indo-Western & Kurta Sets",
    industry: "Indo-Western",
    thumbnail: "/assets/kaftanize.jpeg",
    website: "https://kaftanize.com",
    metrics: {
      primaryValue: "Creative & CRO",
      primaryLabel: "Indo-Western",
      bottomLabel: "Storefront & Media"
    },
    featured: true,
    shortDescription: "Unified performance marketing and store conversion optimization."
  },
  {
    id: "the-emryo-store",
    slug: "the-emryo-store",
    title: "The Emryo Store",
    clientName: "The Emryo Store",
    category: "Anime Embroidery Streetwear",
    industry: "Streetwear",
    thumbnail: "/assets/theepisode.jpeg",
    website: "https://theemryostore.com",
    metrics: {
      primaryValue: "Performance Scaling",
      primaryLabel: "Anime Streetwear",
      bottomLabel: "Drop Creative Pipeline"
    },
    featured: true,
    shortDescription: "High-drop creative cadence and anime streetwear scaling."
  },
  {
    id: "etiquette-apparel",
    slug: "etiquette-apparel",
    title: "Etiquette Apparel",
    clientName: "Etiquette Apparel",
    category: "D2C Apparel",
    industry: "Apparel",
    thumbnail: "/assets/etiquetteapperel.jpeg",
    website: "https://etiquetteapparel.com",
    metrics: {
      primaryValue: "D2C Growth",
      primaryLabel: "Performance Marketing",
      bottomLabel: "Profit-First Strategy"
    },
    featured: true,
    shortDescription: "Profitable scaling with P&L-aligned media buying frameworks."
  },
  {
    id: "fig-living",
    slug: "fig-living",
    title: "FIG Living",
    clientName: "FIG Living",
    category: "D2C Brand",
    industry: "Lifestyle",
    thumbnail: "/assets/figLiving.jpeg",
    website: "https://www.figliving.com",
    metrics: {
      primaryValue: "CRO & Performance",
      primaryLabel: "D2C Growth",
      bottomLabel: "Funnel Optimization"
    },
    featured: true,
    shortDescription: "Direct-to-consumer storefront optimization and paid media execution."
  },
  {
    id: "wild-cherry",
    slug: "wild-cherry",
    title: "Wild Cherry",
    clientName: "Wild Cherry",
    category: "D2C Brand",
    industry: "Lifestyle",
    thumbnail: "/assets/wildcherry.jpeg",
    website: "https://wildcherry.in",
    metrics: {
      primaryValue: "Creative & Media",
      primaryLabel: "Performance Growth",
      bottomLabel: "Rapid Creative Iteration"
    },
    featured: true,
    shortDescription: "Rapid ad creative deployment and multi-channel acquisition."
  }
];
