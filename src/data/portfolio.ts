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
    id: "iyka",
    slug: "iyka",
    title: "IYKA",
    clientName: "IYKA",
    category: "D2C Contemporary Apparel",
    industry: "Apparel & Fashion",
    thumbnail: "/assets/iyka.jpeg",
    website: "https://iyka.in",
    metrics: {
      primaryValue: "8.2x ROAS",
      primaryLabel: "Blended ROAS",
      bottomLabel: "Performance & Creative"
    },
    featured: true,
    shortDescription: "Omnichannel apparel scaling, Advantage+ consolidated ad structure, and conversion rate optimization."
  },
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
  {
    id: "the-emryo-store",
    slug: "the-emryo-store",
    title: "The Emryo Store",
    clientName: "The Emryo Store",
    category: "Anime Embroidery Streetwear",
    industry: "Apparel & Streetwear",
    thumbnail: "/clients/the-emryo-store.svg",
    website: "https://theemryostore.com",
    metrics: {
      primaryValue: "8.0x ROAS",
      primaryLabel: "Revenue Tripled",
      bottomLabel: "Media & CRO"
    },
    featured: true,
    shortDescription: "Targeted anime fanbase acquisition and high-converting streetwear drops."
  },
  {
    id: "kri-chikankari",
    slug: "kri-chikankari",
    title: "Kri Chikankari",
    clientName: "Kri Chikankari",
    category: "Ethnic Wear",
    industry: "Ethnic Wear",
    thumbnail: "/clients/kri-chikankari.svg",
    website: "https://krichikankari.com",
    metrics: {
      primaryValue: "9.0x ROAS",
      primaryLabel: "High Scale Funnel",
      bottomLabel: "Media Acquisition"
    },
    featured: true,
    shortDescription: "High-scale ethnic apparel media acquisition and conversion optimization."
  }
];
