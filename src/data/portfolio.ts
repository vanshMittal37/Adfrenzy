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
