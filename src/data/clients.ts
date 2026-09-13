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
  // FEATURED BRANDS
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
  {
    id: "rootz-organics",
    name: "Rootz Organics",
    website: "https://www.rootzorganics.com/categories/veg-and-fruits",
    category: "D2C Organic Produce",
    owner: "Founder",
    logo: "/clients/rootz-organics.svg",
    logoAlt: "Rootz Organics",
    approvedForLogo: true,
    approvedForTestimonial: true,
    metric: {
      value: "8.2x ROAS",
      label: "Fresh Organic Scale"
    }
  },
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
  {
    id: "atulya-karigari",
    name: "Atulya Karigari",
    website: "https://www.atulyakarigari.com",
    category: "D2C Handcrafted Heritage",
    owner: "Founder",
    logo: "/clients/atulya-karigari.svg",
    logoAlt: "Atulya Karigari",
    approvedForLogo: true,
    approvedForTestimonial: true,
    metric: {
      value: "8.5x ROAS",
      label: "Heritage Scale"
    }
  },
  {
    id: "velviore",
    name: "Velviore",
    website: "https://velviore.com",
    category: "D2C Luxury Apparel",
    owner: "Founder",
    logo: "/clients/velviore.svg",
    logoAlt: "Velviore",
    approvedForLogo: true,
    approvedForTestimonial: true,
    metric: {
      value: "8.1x ROAS",
      label: "New Launch Scale"
    }
  },

  // NEWLY ADDED BRANDS
  {
    id: "my-pooja-box",
    name: "My Pooja Box",
    website: "https://www.mypoojabox.in/",
    category: "Divine Decor & Gifts",
    logo: "/clients/my-pooja-box.svg",
    logoAlt: "My Pooja Box",
    approvedForLogo: true,
    approvedForTestimonial: false,
    metric: {
      value: "8.4x ROAS",
      label: "Festival Scaling"
    }
  },
  {
    id: "shoe-mistri",
    name: "Shoe Mistri",
    website: "https://shoemistri.com/",
    category: "Footwear Care & Accessories",
    logo: "/clients/shoe-mistri.svg",
    logoAlt: "Shoe Mistri",
    approvedForLogo: true,
    approvedForTestimonial: false,
    metric: {
      value: "8.1x ROAS",
      label: "Scale Engine"
    }
  },
  {
    id: "twirl-and-tote",
    name: "Twirl & Tote",
    website: "https://twirlandtote.com/",
    category: "Fashion Bags & Totes",
    logo: "/clients/twirl-and-tote.svg",
    logoAlt: "Twirl & Tote",
    approvedForLogo: true,
    approvedForTestimonial: false,
    metric: {
      value: "8.6x ROAS",
      label: "Creative Pipeline"
    }
  },
  {
    id: "label-mehu",
    name: "Label Mehu",
    website: "https://labelmehu.com/",
    category: "Designer Ethnic Wear",
    logo: "/clients/label-mehu.svg",
    logoAlt: "Label Mehu",
    approvedForLogo: true,
    approvedForTestimonial: false,
    metric: {
      value: "8.5x ROAS",
      label: "Monthly Scaling"
    }
  },
  {
    id: "pawbasket",
    name: "PawBasket",
    website: "https://pawbasket.co/",
    category: "Pet Supplies & Care",
    logo: "/clients/pawbasket.svg",
    logoAlt: "PawBasket",
    approvedForLogo: true,
    approvedForTestimonial: false,
    metric: {
      value: "8.2x ROAS",
      label: "Repeat Order Growth"
    }
  },
  {
    id: "aasa-by-simran",
    name: "Aasa By Simran",
    website: "https://aasabysimran.com/",
    category: "Luxury Ethnic Couture",
    logo: "/clients/aasa-by-simran.svg",
    logoAlt: "Aasa By Simran",
    approvedForLogo: true,
    approvedForTestimonial: false,
    metric: {
      value: "8.8x ROAS",
      label: "High-Ticket Funnel"
    }
  },
  {
    id: "the-white-willow",
    name: "The White Willow",
    website: "https://thewhitewillow.in/",
    category: "Orthopedic Pillows & Comfort",
    logo: "/clients/the-white-willow.svg",
    logoAlt: "The White Willow",
    approvedForLogo: true,
    approvedForTestimonial: false,
    metric: {
      value: "8.3x ROAS",
      label: "Category Leader Scale"
    }
  },
  {
    id: "arkaye-jewels",
    name: "Arkaye Jewels",
    website: "https://www.arkayejewels.com/",
    category: "Fine Handcrafted Jewelry",
    logo: "/clients/arkaye-jewels.svg",
    logoAlt: "Arkaye Jewels",
    approvedForLogo: true,
    approvedForTestimonial: false,
    metric: {
      value: "8.7x ROAS",
      label: "Luxury Acquisition"
    }
  },
  {
    id: "shaper-cult",
    name: "Shaper Cult",
    website: "https://shapercult.com/",
    category: "Premium Shapewear",
    logo: "/clients/shaper-cult.svg",
    logoAlt: "Shaper Cult",
    approvedForLogo: true,
    approvedForTestimonial: false,
    metric: {
      value: "8.4x ROAS",
      label: "D2C Performance"
    }
  },

  // PREVIOUSLY EXISTING APPROVED BRANDS
  {
    id: "the-emryo-store",
    name: "The Emryo Store",
    website: "https://theemryostore.com",
    category: "Anime embroidery streetwear",
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
    id: "jabon",
    name: "Jabon",
    website: "https://www.jabon.co.in",
    category: "D2C Brand",
    logo: "/clients/jabon.svg",
    logoAlt: "Jabon",
    approvedForLogo: true,
    approvedForTestimonial: false
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
    "my-pooja-box",
    "shoe-mistri",
    "twirl-and-tote",
    "label-mehu",
    "pawbasket",
    "the-emryo-store",
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
    "aasa-by-simran",
    "the-white-willow",
    "arkaye-jewels",
    "shaper-cult",
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
