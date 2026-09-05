export interface ClientBrand {
  id: string;
  name: string;
  website: string;
  category: string;
  owner?: string;
  knownPriceRange?: string;
  logo: string;
  logoAlt: string;
  approvedForLogo: boolean;
  approvedForTestimonial: boolean;
  metric?: {
    value: string;
    label: string;
  };
}

export const clients: ClientBrand[] = [
  // MAIN 15 BRANDS
  {
    id: "iyka",
    name: "IYKA",
    website: "https://iyka.co.in",
    category: "Women's ethnic wear, kurtis and co-ords",
    owner: "Vishnu",
    knownPriceRange: "₹449 to ₹999",
    logo: "https://iyka.co.in/cdn/shop/files/logo.png",
    logoAlt: "IYKA",
    approvedForLogo: true,
    approvedForTestimonial: false,
    metric: {
      value: "8.0x ROAS",
      label: "Scaled to 1 Cr"
    }
  },
  {
    id: "the-emryo-store",
    name: "The Emryo Store",
    website: "https://theemryostore.com",
    category: "Anime embroidery streetwear, tees and hoodies",
    owner: "Sajid",
    knownPriceRange: "₹999 to ₹4999",
    logo: "https://theemryostore.com/cdn/shop/files/dscfacaqcxax.png",
    logoAlt: "The Emryo Store",
    approvedForLogo: true,
    approvedForTestimonial: true,
    metric: {
      value: "8.0x ROAS",
      label: "Revenue Tripled"
    }
  },
  {
    id: "valkyre-clothing",
    name: "Valkyre Clothing",
    website: "https://valkyreclothing.in",
    category: "D2C Brand",
    logo: "/clients/valkyre-clothing.svg",
    logoAlt: "Valkyre Clothing",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  {
    id: "forever-chique",
    name: "Forever Chique",
    website: "https://foreverchiquestore.com",
    category: "D2C Brand",
    logo: "/clients/forever-chique.svg",
    logoAlt: "Forever Chique",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  {
    id: "fig-living",
    name: "FIG Living",
    website: "https://www.figliving.com",
    category: "D2C Brand",
    logo: "/clients/fig-living.svg",
    logoAlt: "FIG Living",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  {
    id: "alankaara",
    name: "Alankaara",
    website: "https://alankaara.in",
    category: "D2C Brand",
    logo: "/clients/alankaara.svg",
    logoAlt: "Alankaara",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  {
    id: "wild-cherry",
    name: "Wild Cherry",
    website: "https://wildcherry.in",
    category: "D2C Brand",
    logo: "/clients/wild-cherry.svg",
    logoAlt: "Wild Cherry",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  {
    id: "kaftanize",
    name: "Kaftanize",
    website: "https://kaftanize.com",
    category: "Indo-western, co-ords and kurta sets",
    owner: "Rahul Aggarwal",
    logo: "/clients/kaftanize.svg",
    logoAlt: "Kaftanize",
    approvedForLogo: true,
    approvedForTestimonial: false,
    metric: {
      value: "8.3x ROAS",
      label: "Full-Funnel Growth"
    }
  },
  {
    id: "etiquette-apparel",
    name: "Etiquette Apparel",
    website: "https://etiquetteapparel.com",
    category: "D2C Brand",
    owner: "Rupesh",
    logo: "/clients/etiquette-apparel.svg",
    logoAlt: "Etiquette Apparel",
    approvedForLogo: true,
    approvedForTestimonial: false,
    metric: {
      value: "8.0x ROAS",
      label: "Revenue Doubled"
    }
  },
  {
    id: "dakauz",
    name: "Dakauz",
    website: "https://dakauz.com",
    category: "D2C Brand",
    logo: "/clients/dakauz.svg",
    logoAlt: "Dakauz",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  {
    id: "femi9-by-as",
    name: "Femi9 by AS",
    website: "https://femi9byas.com",
    category: "D2C Brand",
    logo: "/clients/femi9-by-as.svg",
    logoAlt: "Femi9 by AS",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  {
    id: "elayee",
    name: "Elayee",
    website: "https://elayee.com",
    category: "D2C Brand",
    owner: "Bharat",
    logo: "/clients/elayee.svg",
    logoAlt: "Elayee",
    approvedForLogo: true,
    approvedForTestimonial: true,
    metric: {
      value: "8.6x ROAS",
      label: "Consistent Growth"
    }
  },
  {
    id: "velviore",
    name: "Velviore",
    website: "https://velviore.com",
    category: "D2C Brand",
    logo: "/clients/velviore.svg",
    logoAlt: "Velviore",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  {
    id: "atulya-karigari",
    name: "Atulya Karigari",
    website: "https://www.atulyakarigari.com",
    category: "D2C Brand",
    logo: "/clients/atulya-karigari.svg",
    logoAlt: "Atulya Karigari",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  {
    id: "jabon",
    name: "Jabon",
    website: "https://www.jabon.co.in",
    category: "D2C Brand",
    logo: "/clients/jabon.svg",
    logoAlt: "Jabon",
    approvedForLogo: true,
    approvedForTestimonial: false
  },

  // ADDITIONAL 5 BRANDS
  {
    id: "ai-by-prerna",
    name: "AI by Prerna",
    website: "https://aibyprerna.com",
    category: "D2C Brand",
    owner: "Prerna Khanna",
    logo: "/clients/ai-by-prerna.svg",
    logoAlt: "AI by Prerna",
    approvedForLogo: true,
    approvedForTestimonial: true,
    metric: {
      value: "8.4x ROAS",
      label: "Revenue Doubled"
    }
  },
  {
    id: "kri-chikankari",
    name: "Kri Chikankari",
    website: "https://krichikankari.com",
    category: "D2C Brand",
    owner: "Shubh",
    logo: "/clients/kri-chikankari.svg",
    logoAlt: "Kri Chikankari",
    approvedForLogo: true,
    approvedForTestimonial: true,
    metric: {
      value: "9.0x ROAS",
      label: "High Scale Funnel"
    }
  },
  {
    id: "label-pikake",
    name: "Label Pikake",
    website: "https://labelpikake.com",
    category: "D2C Brand",
    owner: "Vandana",
    logo: "/clients/label-pikake.svg",
    logoAlt: "Label Pikake",
    approvedForLogo: true,
    approvedForTestimonial: true,
    metric: {
      value: "8.5x ROAS",
      label: "Monthly Growth"
    }
  },
  {
    id: "leaf-ortho",
    name: "Leaf Ortho",
    website: "https://leafortho.com",
    category: "D2C Brand",
    owner: "Dhruv",
    logo: "/clients/leaf-ortho.svg",
    logoAlt: "Leaf Ortho",
    approvedForLogo: true,
    approvedForTestimonial: false,
    metric: {
      value: "8.2x ROAS",
      label: "CAC Reduced"
    }
  },
  {
    id: "wine-chateau",
    name: "Wine Chateau",
    website: "https://winechateau.com",
    category: "D2C Brand",
    owner: "Som",
    logo: "/clients/wine-chateau.svg",
    logoAlt: "Wine Chateau",
    approvedForLogo: true,
    approvedForTestimonial: true,
    metric: {
      value: "8.0x+ ROAS",
      label: "US Market Scale"
    }
  }
];

// Helper functions
export const getApprovedLogos = (): ClientBrand[] => {
  return clients.filter((c) => c.approvedForLogo);
};

export const getApprovedTestimonials = (): ClientBrand[] => {
  return clients.filter((c) => c.approvedForTestimonial);
};

export const getRow1Logos = (): ClientBrand[] => {
  const row1Ids = [
    "iyka",
    "the-emryo-store",
    "fig-living",
    "kaftanize",
    "etiquette-apparel",
    "wild-cherry",
    "ai-by-prerna",
    "kri-chikankari",
    "label-pikake",
    "femi9-by-as"
  ];
  return row1Ids
    .map((id) => clients.find((c) => c.id === id))
    .filter((c): c is ClientBrand => Boolean(c && c.approvedForLogo));
};

export const getRow2Logos = (): ClientBrand[] => {
  const row2Ids = [
    "valkyre-clothing",
    "forever-chique",
    "alankaara",
    "dakauz",
    "elayee",
    "velviore",
    "atulya-karigari",
    "jabon",
    "leaf-ortho",
    "wine-chateau"
  ];
  return row2Ids
    .map((id) => clients.find((c) => c.id === id))
    .filter((c): c is ClientBrand => Boolean(c && c.approvedForLogo));
};
