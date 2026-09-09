export interface CaseStudy {
  slug: string;
  clientName: string;
  industry: string;
  title: string;
  tagline: string;
  challenge: string;
  strategy: string[];
  execution: {
    creative: string;
    media: string;
    cro: string;
    retention: string;
  };
  results: {
    metric1: { label: string; value: string };
    metric2: { label: string; value: string };
    metric3: { label: string; value: string };
  };
  testimonialQuote?: string;
  testimonialAuthor?: string;
  heroImage: string;
  videoUrl?: string;
}

export const caseStudiesData: Record<string, CaseStudy> = {
  "my-pooja-box": {
    slug: "my-pooja-box",
    clientName: "My Pooja Box",
    industry: "Divine Decor & Gifts",
    title: "My Pooja Box — Festive Season Scale & Customer Acquisition",
    tagline: "Omnichannel scaling & direct-response campaigns for premium decor.",
    challenge: "High customer acquisition costs during peak festive demand windows.",
    strategy: [
      "Built festive-centric visual story ad hooks.",
      "Optimized Google Performance Max & Meta Advantage+ catalog ads.",
      "Improved storefront checkout flow for impulse buyers."
    ],
    execution: {
      creative: "High-contrast product showcase reels and gift box unboxing videos.",
      media: "P&L-aligned capital allocation with strict ROAS floor rules.",
      cro: "Mobile quick-checkout buttons and cart urgency cues.",
      retention: "Festive replenishment and seasonal collection messaging."
    },
    results: {
      metric1: { label: "ROAS Benchmark", value: "8.4x" },
      metric2: { label: "Category Rank", value: "#1 Festive Gift" },
      metric3: { label: "Creative Pipeline", value: "Weekly Drops" }
    },
    heroImage: "/assets/my-pooja-box.jpg"
  },
  "shoe-mistri": {
    slug: "shoe-mistri",
    clientName: "Shoe Mistri",
    industry: "Footwear Care & Accessories",
    title: "Shoe Mistri — High-Velocity Performance Scaling",
    tagline: "Direct-to-consumer acquisition for specialty shoe care products.",
    challenge: "Educating users on specialized shoe care while maintaining low CAC.",
    strategy: [
      "Deployed before/after video hooks demonstrating product effectiveness.",
      "Structured targeted bundlings on key product detail pages.",
      "Retargeted multi-pair footwear owners across search & social."
    ],
    execution: {
      creative: "Problem-solution short clips and ASMR shoe cleaning reels.",
      media: "Consolidated Meta broad targeting and search intent campaigns.",
      cro: "Bundle add-to-cart widgets and fast checkout corridors.",
      retention: "Subscription refills & shoe care tip series."
    },
    results: {
      metric1: { label: "ROAS Benchmark", value: "8.1x" },
      metric2: { label: "CAC Reduction", value: "32% Lower" },
      metric3: { label: "Repeat Sales", value: "Continuous" }
    },
    heroImage: "/assets/shoe-mistri.jpg"
  },
  "twirl-and-tote": {
    slug: "twirl-and-tote",
    clientName: "Twirl & Tote",
    industry: "Fashion Bags & Accessories",
    title: "Twirl & Tote — Aesthetic Lifestyle Media Acquisition",
    tagline: "Accelerating handbag drops with creative storytelling.",
    challenge: "Ad creative fatigue due to fast-moving trend cycles in fashion accessories.",
    strategy: [
      "Shipped weekly UGC and aesthetic lifestyle creative variations.",
      "Engineered look-based styling funnels on store landing pages.",
      "Optimized cross-sell bundles for totes and matching pouches."
    ],
    execution: {
      creative: "Outfit-pairing videos and handbag capacity demonstrations.",
      media: "Broad visual interest targeting with dynamic creative optimization.",
      cro: "Mobile-first PDP layout with seamless media embedding.",
      retention: "New collection pre-launch VIP SMS broadcasts."
    },
    results: {
      metric1: { label: "ROAS Benchmark", value: "8.6x" },
      metric2: { label: "Creative Turnaround", value: "Same-Week" },
      metric3: { label: "Scale Target", value: "Multi-Crore" }
    },
    heroImage: "/assets/twirl-and-tote.jpg"
  },
  "label-mehu": {
    slug: "label-mehu",
    clientName: "Label Mehu",
    industry: "Designer Ethnic Wear",
    title: "Label Mehu — High-Intent Ethnic Wear Funnels",
    tagline: "Scaling handcrafted couture with sustainable margins.",
    challenge: "High drop-off rates on premium price point ethnic outfits.",
    strategy: [
      "Integrated trust badges and customer video reviews directly on PDPs.",
      "Synchronized performance creative with seasonal ethnic collections.",
      "Implemented high-converting retargeting flows across WhatsApp & Meta."
    ],
    execution: {
      creative: "Fabric detail close-ups and royal ethnic outfit styling.",
      media: "High-income audience segmenting and retargeting automation.",
      cro: "Custom size-guide popups and instant WhatsApp consultation.",
      retention: "Personalized wedding & occasion styling outreach."
    },
    results: {
      metric1: { label: "ROAS Benchmark", value: "8.5x" },
      metric2: { label: "Conversion Rate", value: "+45% Lift" },
      metric3: { label: "ROAS Floor", value: "8.0x Minimum" }
    },
    heroImage: "/assets/label-mehu.jpg"
  },
  "pawbasket": {
    slug: "pawbasket",
    clientName: "PawBasket",
    industry: "Pet Supplies & Care",
    title: "PawBasket — Pet Parent Acquisition & Lifetime Value",
    tagline: "Building recurring revenue for essential pet care and treats.",
    challenge: "Standing out in a crowded pet care market while driving repeat purchases.",
    strategy: [
      "Focused ad hooks on pet health benefits and premium ingredient transparency.",
      "Optimized subscription and bundle purchasing options at checkout.",
      "Deployed automated pet age-based re-order reminders."
    ],
    execution: {
      creative: "Cute pet reaction videos and nutritional comparison infographics.",
      media: "Pet parent interest targeting coupled with broad dynamic search.",
      cro: "One-click subscription add to cart and quick checkout.",
      retention: "Automated monthly replenishment email & WhatsApp flows."
    },
    results: {
      metric1: { label: "ROAS Benchmark", value: "8.2x" },
      metric2: { label: "Repeat Rate", value: "Strong LTV" },
      metric3: { label: "Growth Signal", value: "Compounding" }
    },
    heroImage: "/assets/pawbasket.jpg"
  },
  "aasa-by-simran": {
    slug: "aasa-by-simran",
    clientName: "Aasa By Simran",
    industry: "Luxury Ethnic Couture",
    title: "Aasa By Simran — High-Ticket Couture Acquisition",
    tagline: "Scaling luxury ethnic apparel with high average order value.",
    challenge: "Long buyer consideration windows for premium handcrafted ethnic wear.",
    strategy: [
      "Crafted luxury story-driven video ads highlighting artisanal craftsmanship.",
      "Rearchitected store product detail pages for luxury positioning.",
      "Deployed multi-touch retention messaging across email and social."
    ],
    execution: {
      creative: "Cinematic studio showcases and embroidery detail macro shots.",
      media: "Targeted luxury shopper segments with broad dynamic fallback.",
      cro: "VIP consultation booking & seamless checkout corridor.",
      retention: "Exclusive collection preview invites."
    },
    results: {
      metric1: { label: "ROAS Benchmark", value: "8.8x" },
      metric2: { label: "AOV Growth", value: "High Ticket" },
      metric3: { label: "Brand Scale", value: "Sustained" }
    },
    heroImage: "/assets/aasa-by-simran.jpg"
  },
  "the-white-willow": {
    slug: "the-white-willow",
    clientName: "The White Willow",
    industry: "Orthopedic Pillows & Comfort",
    title: "The White Willow — Sleep Tech & Ergonomic Scale",
    tagline: "Dominating the ergonomic pillow category with performance ads.",
    challenge: "Differentiating memory foam products from low-cost competitors.",
    strategy: [
      "Created ergonomic benefit-driven visual ads and sleep doctor testimonials.",
      "Optimized storefront comparison charts for pillow density and posture.",
      "Scaled Meta and Google Shopping campaigns concurrently."
    ],
    execution: {
      creative: "3D foam posture diagrams and customer unboxing reactions.",
      media: "Health & wellness broad interest targeting with strict CAC caps.",
      cro: "Pillow finder quiz widget and 100-night trial messaging.",
      retention: "Cross-sell pillow covers and sleep spray accessories."
    },
    results: {
      metric1: { label: "ROAS Benchmark", value: "8.3x" },
      metric2: { label: "Category Rank", value: "Top Sleep D2C" },
      metric3: { label: "Conversion Lift", value: "+38%" }
    },
    heroImage: "/assets/the-white-willow.jpg"
  },
  "arkaye-jewels": {
    slug: "arkaye-jewels",
    clientName: "Arkaye Jewels",
    industry: "Fine Handcrafted Jewelry",
    title: "Arkaye Jewels — Fine Jewelry Performance & Creative Engine",
    tagline: "Driving high ROAS for handcrafted statement jewelry drops.",
    challenge: "Navigating visual ad fatigue in fast-paced fashion jewelry.",
    strategy: [
      "Deployed weekly lifestyle jewelry pairing video ads.",
      "Optimized storefront mobile gallery speed and zoom features.",
      "Structured retargeting funnels for abandoned cart visitors."
    ],
    execution: {
      creative: "Macro detail shots of gemstone settings and sparkle lighting.",
      media: "Audience targeting tuned for luxury & fashion buyers.",
      cro: "High-resolution PDP zoom and gift box selection options.",
      retention: "Birthday and anniversary gift reminder campaigns."
    },
    results: {
      metric1: { label: "ROAS Benchmark", value: "8.7x" },
      metric2: { label: "Ad Turnaround", value: "Agile Production" },
      metric3: { label: "ROAS Floor", value: "8.0x Minimum" }
    },
    heroImage: "/assets/arkaye-jewels.jpg"
  },
  "shaper-cult": {
    slug: "shaper-cult",
    clientName: "Shaper Cult",
    industry: "Premium Shapewear",
    title: "Shaper Cult — Shapewear Acquisition & P&L Scaling",
    tagline: "High-volume conversion optimization for active shapewear.",
    challenge: "Overcoming sizing uncertainty and post-purchase returns.",
    strategy: [
      "Built real-body transformation before/after ad creatives.",
      "Implemented intelligent interactive size guides on storefront.",
      "Optimized contribution margin bidding on Meta ad campaigns."
    ],
    execution: {
      creative: "Wear-under-outfit demonstrations and comfort test reels.",
      media: "Broad women's lifestyle targeting with automated bid ceilings.",
      cro: "Instant size recommendation popup and bundle discounts.",
      retention: "Multi-style shapewear wardrobe upgrade sequences."
    },
    results: {
      metric1: { label: "ROAS Benchmark", value: "8.4x" },
      metric2: { label: "Return Rate", value: "Reduced 25%" },
      metric3: { label: "Growth Signal", value: "Scaling Rapidly" }
    },
    heroImage: "/assets/shaper-cult.jpg"
  }
};
