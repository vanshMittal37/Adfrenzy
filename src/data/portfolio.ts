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
    id: "my-pooja-box",
    slug: "my-pooja-box",
    title: "My Pooja Box",
    clientName: "My Pooja Box",
    category: "Divine Decor & Gifts",
    industry: "Divine Decor",
    thumbnail: "/assets/my-pooja-box.jpg",
    website: "https://www.mypoojabox.in/",
    metrics: {
      primaryValue: "8.4x ROAS",
      primaryLabel: "Festive Scaling",
      bottomLabel: "Performance & Direct Response"
    },
    featured: true,
    shortDescription: "Festive decor scaling, catalog ads, and omnichannel customer acquisition."
  },
  {
    id: "shoe-mistri",
    slug: "shoe-mistri",
    title: "Shoe Mistri",
    clientName: "Shoe Mistri",
    category: "Footwear Care & Accessories",
    industry: "Footwear Care",
    thumbnail: "/assets/shoe-mistri.jpg",
    website: "https://shoemistri.com/",
    metrics: {
      primaryValue: "8.1x ROAS",
      primaryLabel: "Scale Engine",
      bottomLabel: "Creative & Media Buying"
    },
    featured: true,
    shortDescription: "High-velocity problem-solving creative hooks and footwear care scaling."
  },
  {
    id: "twirl-and-tote",
    slug: "twirl-and-tote",
    title: "Twirl & Tote",
    clientName: "Twirl & Tote",
    category: "Fashion Bags & Accessories",
    industry: "Fashion Bags",
    thumbnail: "/assets/twirl-and-tote.jpg",
    website: "https://twirlandtote.com/",
    metrics: {
      primaryValue: "8.6x ROAS",
      primaryLabel: "Creative Pipeline",
      bottomLabel: "Full-Funnel Scaling"
    },
    featured: true,
    shortDescription: "Aesthetic lifestyle handbag drops and rapid creative iteration engine."
  },
  {
    id: "label-mehu",
    slug: "label-mehu",
    title: "Label Mehu",
    clientName: "Label Mehu",
    category: "Designer Ethnic Wear",
    industry: "Designer Ethnic Wear",
    thumbnail: "/assets/label-mehu.jpg",
    website: "https://labelmehu.com/",
    metrics: {
      primaryValue: "8.5x ROAS",
      primaryLabel: "Monthly Scaling",
      bottomLabel: "CRO & Performance"
    },
    featured: true,
    shortDescription: "High-intent ethnic wear customer acquisition and PDP conversion optimization."
  },
  {
    id: "pawbasket",
    slug: "pawbasket",
    title: "PawBasket",
    clientName: "PawBasket",
    category: "Pet Supplies & Care",
    industry: "Pet Care",
    thumbnail: "/assets/pawbasket.jpg",
    website: "https://pawbasket.co/",
    metrics: {
      primaryValue: "8.2x ROAS",
      primaryLabel: "Repeat Order Growth",
      bottomLabel: "Retention & Acquisition"
    },
    featured: true,
    shortDescription: "Pet parent customer acquisition and automated recurring order retention loops."
  },
  {
    id: "aasa-by-simran",
    slug: "aasa-by-simran",
    title: "Aasa By Simran",
    clientName: "Aasa By Simran",
    category: "Luxury Ethnic Couture",
    industry: "Luxury Couture",
    thumbnail: "/assets/aasa-by-simran.jpg",
    website: "https://aasabysimran.com/",
    metrics: {
      primaryValue: "8.8x ROAS",
      primaryLabel: "High-Ticket Funnel",
      bottomLabel: "Luxury Positioning"
    },
    featured: true,
    shortDescription: "High average order value luxury ethnic apparel scaling & artisanal branding."
  },
  {
    id: "the-white-willow",
    slug: "the-white-willow",
    title: "The White Willow",
    clientName: "The White Willow",
    category: "Orthopedic Pillows & Comfort",
    industry: "Sleep & Home",
    thumbnail: "/assets/the-white-willow.jpg",
    website: "https://thewhitewillow.in/",
    metrics: {
      primaryValue: "8.3x ROAS",
      primaryLabel: "Category Leader Scale",
      bottomLabel: "Omnichannel Acquisition"
    },
    featured: true,
    shortDescription: "Ergonomic sleep product acquisition and PMax search dominance."
  },
  {
    id: "arkaye-jewels",
    slug: "arkaye-jewels",
    title: "Arkaye Jewels",
    clientName: "Arkaye Jewels",
    category: "Fine Handcrafted Jewelry",
    industry: "Fine Jewelry",
    thumbnail: "/assets/arkaye-jewels.jpg",
    website: "https://www.arkayejewels.com/",
    metrics: {
      primaryValue: "8.7x ROAS",
      primaryLabel: "Luxury Acquisition",
      bottomLabel: "Macro Visual Ads"
    },
    featured: true,
    shortDescription: "Fine handcrafted jewelry marketing and high-converting retargeting."
  },
  {
    id: "shaper-cult",
    slug: "shaper-cult",
    title: "Shaper Cult",
    clientName: "Shaper Cult",
    category: "Premium Shapewear",
    industry: "Active Shapewear",
    thumbnail: "/assets/shaper-cult.jpg",
    website: "https://shapercult.com/",
    metrics: {
      primaryValue: "8.4x ROAS",
      primaryLabel: "D2C Performance",
      bottomLabel: "P&L Media Buying"
    },
    featured: true,
    shortDescription: "Direct-response shapewear ad testing and size-guide conversion optimization."
  }
];
