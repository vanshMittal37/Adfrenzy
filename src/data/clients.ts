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

// APPROVED MASTER LIST (20 BRANDS):
// 1. IYKA
// 2. The Emryo Store
// 3. Valkyre Clothing
// 4. Forever Chique
// 5. FIG Living
// 6. Alankaara
// 7. Wild Cherry
// 8. Kaftanize
// 9. Etiquette Apparel
// 10. Dakauz
// 11. Femi9 by AS
// 12. Elayee
// 13. Velviore
// 14. Atulya Karigari
// 15. Jabon
// 16. AI by Prerna
// 17. Kri Chikankari
// 18. Label Pikake
// 19. Leaf Ortho
// 20. Wine Chateau

export const clients: ClientBrand[] = [
  // 1. IYKA
  {
    id: "iyka",
    name: "IYKA",
    website: "https://iyka.in",
    category: "D2C Contemporary Apparel",
    logo: "/clients/iyka.svg",
    logoAlt: "IYKA",
    approvedForLogo: true,
    approvedForTestimonial: false,
    metric: {
      value: "8.2x ROAS",
      label: "Blended ROAS"
    }
  },
  // 2. The Emryo Store
  {
    id: "the-emryo-store",
    name: "The Emryo Store",
    website: "https://theemryostore.com",
    category: "Anime Embroidery Streetwear",
    owner: "Sajid",
    knownPriceRange: "₹999 to ₹4999",
    logo: "/clients/the-emryo-store.svg",
    logoAlt: "The Emryo Store",
    approvedForLogo: true,
    approvedForTestimonial: true,
    metric: {
      value: "8.0x ROAS",
      label: "Revenue Tripled"
    }
  },
  // 3. Valkyre Clothing
  {
    id: "valkyre-clothing",
    name: "Valkyre Clothing",
    website: "https://valkyreclothing.in",
    category: "D2C Apparel",
    logo: "/clients/valkyre-clothing.svg",
    logoAlt: "Valkyre Clothing",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  // 4. Forever Chique
  {
    id: "forever-chique",
    name: "Forever Chique",
    website: "https://foreverchiquestore.com",
    category: "D2C Fashion",
    logo: "/clients/forever-chique.svg",
    logoAlt: "Forever Chique",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  // 5. FIG Living
  {
    id: "fig-living",
    name: "FIG Living",
    website: "https://figliving.com",
    category: "D2C Home & Living",
    logo: "/clients/fig-living.svg",
    logoAlt: "FIG Living",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  // 6. Alankaara
  {
    id: "alankaara",
    name: "Alankaara",
    website: "https://alankaara.in",
    category: "D2C Botanical Jewelry",
    logo: "/clients/alankaara.svg",
    logoAlt: "Alankaara",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  // 7. Wild Cherry
  {
    id: "wild-cherry",
    name: "Wild Cherry",
    website: "https://wildcherry.in",
    category: "D2C Fashion & Apparel",
    logo: "/clients/wild-cherry.svg",
    logoAlt: "Wild Cherry",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  // 8. Kaftanize
  {
    id: "kaftanize",
    name: "Kaftanize",
    website: "https://kaftanize.com",
    category: "D2C Resortwear & Kaftans",
    logo: "/clients/kaftanize.svg",
    logoAlt: "Kaftanize",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  // 9. Etiquette Apparel
  {
    id: "etiquette-apparel",
    name: "Etiquette Apparel",
    website: "https://etiquetteapparel.com",
    category: "D2C Contemporary Fashion",
    logo: "/clients/etiquette-apparel.svg",
    logoAlt: "Etiquette Apparel",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  // 10. Dakauz
  {
    id: "dakauz",
    name: "Dakauz",
    website: "https://dakauz.com",
    category: "D2C Apparel",
    logo: "/clients/dakauz.svg",
    logoAlt: "Dakauz",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  // 11. Femi9 by AS
  {
    id: "femi9-by-as",
    name: "Femi9 by AS",
    website: "https://femi9byas.com",
    category: "D2C Women's Wear",
    logo: "/clients/femi9-by-as.svg",
    logoAlt: "Femi9 by AS",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  // 12. Elayee
  {
    id: "elayee",
    name: "Elayee",
    website: "https://elayee.com",
    category: "D2C Ethnic Wear",
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
  // 13. Velviore
  {
    id: "velviore",
    name: "Velviore",
    website: "https://velviore.com",
    category: "D2C Luxury Apparel",
    owner: "Abhay",
    logo: "/clients/velviore.svg",
    logoAlt: "Velviore",
    approvedForLogo: true,
    approvedForTestimonial: true,
    metric: {
      value: "8.1x ROAS",
      label: "New Launch Scale"
    }
  },
  // 14. Atulya Karigari
  {
    id: "atulya-karigari",
    name: "Atulya Karigari",
    website: "https://www.atulyakarigari.com",
    category: "D2C Handcrafted Heritage",
    owner: "Annapurna",
    logo: "/clients/atulya-karigari.svg",
    logoAlt: "Atulya Karigari",
    approvedForLogo: true,
    approvedForTestimonial: true,
    metric: {
      value: "8.5x ROAS",
      label: "Heritage Scale"
    }
  },
  // 15. Jabon
  {
    id: "jabon",
    name: "Jabon",
    website: "https://www.jabon.co.in",
    category: "D2C Footwear",
    logo: "/clients/jabon.svg",
    logoAlt: "Jabon",
    approvedForLogo: true,
    approvedForTestimonial: false
  },
  // 16. AI by Prerna
  {
    id: "ai-by-prerna",
    name: "AI by Prerna",
    website: "https://aibyprerna.com",
    category: "D2C Couture & Apparel",
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
  // 17. Kri Chikankari
  {
    id: "kri-chikankari",
    name: "Kri Chikankari",
    website: "https://krichikankari.com",
    category: "D2C Ethnic Wear",
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
  // 18. Label Pikake
  {
    id: "label-pikake",
    name: "Label Pikake",
    website: "https://www.labelpikake.com",
    category: "D2C Designer Ethnic Wear",
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
  // 19. Leaf Ortho
  {
    id: "leaf-ortho",
    name: "Leaf Ortho",
    website: "https://leafortho.com",
    category: "D2C Wellness & Ortho",
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
  // 20. Wine Chateau
  {
    id: "wine-chateau",
    name: "Wine Chateau",
    website: "https://winechateau.com",
    category: "D2C Wine & Spirits",
    owner: "Som",
    logo: "/clients/wine-chateau.svg",
    logoAlt: "Wine Chateau",
    approvedForLogo: true,
    approvedForTestimonial: true,
    metric: {
      value: "8.0x+ ROAS",
      label: "US Market Scale"
    }
  },

  // ADDITIONAL DATA PRESERVED IN CENTRAL DATA STORE (HIDDEN FROM PUBLIC LOGO WALL)
  {
    id: "rootz-organics",
    name: "Rootz Organics",
    website: "https://www.rootzorganics.com/categories/veg-and-fruits",
    category: "D2C Organic Produce",
    owner: "Ashwini Khatavate",
    logo: "/clients/rootz-organics.svg",
    logoAlt: "Rootz Organics",
    approvedForLogo: false,
    approvedForTestimonial: false,
    metric: {
      value: "8.2x ROAS",
      label: "Fresh Organic Scale"
    }
  },
  {
    id: "my-pooja-box",
    name: "My Pooja Box",
    website: "https://www.mypoojabox.in/",
    category: "Divine Decor & Gifts",
    logo: "/clients/my-pooja-box.svg",
    logoAlt: "My Pooja Box",
    approvedForLogo: false,
    approvedForTestimonial: false
  },
  {
    id: "shoe-mistri",
    name: "Shoe Mistri",
    website: "https://shoemistri.com/",
    category: "Footwear Care & Accessories",
    logo: "/clients/shoe-mistri.svg",
    logoAlt: "Shoe Mistri",
    approvedForLogo: false,
    approvedForTestimonial: false
  },
  {
    id: "twirl-and-tote",
    name: "Twirl & Tote",
    website: "https://twirlandtote.com/",
    category: "Fashion Bags & Totes",
    logo: "/clients/twirl-and-tote.svg",
    logoAlt: "Twirl & Tote",
    approvedForLogo: false,
    approvedForTestimonial: false
  },
  {
    id: "label-mehu",
    name: "Label Mehu",
    website: "https://labelmehu.com/",
    category: "Designer Ethnic Wear",
    logo: "/clients/label-mehu.svg",
    logoAlt: "Label Mehu",
    approvedForLogo: false,
    approvedForTestimonial: false
  },
  {
    id: "pawbasket",
    name: "PawBasket",
    website: "https://pawbasket.co/",
    category: "Pet Supplies & Care",
    logo: "/clients/pawbasket.svg",
    logoAlt: "PawBasket",
    approvedForLogo: false,
    approvedForTestimonial: false
  },
  {
    id: "aasa-by-simran",
    name: "Aasa By Simran",
    website: "https://aasabysimran.com/",
    category: "Luxury Ethnic Couture",
    logo: "/clients/aasa-by-simran.svg",
    logoAlt: "Aasa By Simran",
    approvedForLogo: false,
    approvedForTestimonial: false
  },
  {
    id: "the-white-willow",
    name: "The White Willow",
    website: "https://thewhitewillow.in/",
    category: "Orthopedic Pillows & Comfort",
    logo: "/clients/the-white-willow.svg",
    logoAlt: "The White Willow",
    approvedForLogo: false,
    approvedForTestimonial: false
  },
  {
    id: "arkaye-jewels",
    name: "Arkaye Jewels",
    website: "https://www.arkayejewels.com/",
    category: "Fine Handcrafted Jewelry",
    logo: "/clients/arkaye-jewels.svg",
    logoAlt: "Arkaye Jewels",
    approvedForLogo: false,
    approvedForTestimonial: false
  },
  {
    id: "shaper-cult",
    name: "Shaper Cult",
    website: "https://shapercult.com/",
    category: "Premium Shapewear",
    logo: "/clients/shaper-cult.svg",
    logoAlt: "Shaper Cult",
    approvedForLogo: false,
    approvedForTestimonial: false
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
  const approved = getApprovedLogos();
  return approved.slice(0, Math.ceil(approved.length / 2));
};

export const getRow2Logos = (): ClientBrand[] => {
  const approved = getApprovedLogos();
  return approved.slice(Math.ceil(approved.length / 2));
};
