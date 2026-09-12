export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface ProblemSolved {
  title: string;
  desc: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
  icon: string;
  highlightText: string;
  tags: string[];
  targetAudience: string[];
  problemsSolved: ProblemSolved[];
  processSteps: ServiceProcessStep[];
  faqs: ServiceFAQ[];
  relatedCaseStudySlugs: string[];
  relatedArticleSlugs: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "performance-marketing",
    slug: "performance-marketing",
    title: "Performance Marketing",
    tagline: "Run as a growth strategy, not a button-pushing job.",
    description: "Profit-focused media buying across Meta and Google Ads. We build around CAC, contribution margin, and blended ROAS so scaling decisions are anchored in real P&L net profit, not vanity dashboard numbers.",
    tags: ["Meta Ads", "Google Ads", "Advantage+", "PMax", "CAC Reduction"],
    features: [
      "Meta Ads (Facebook & Instagram) Advantage+ Architecture",
      "Google Search, Shopping & Performance Max (PMax)",
      "YouTube Ads & Demand Gen Scaling Corridors",
      "Real-Time Contribution Margin (CM1 & CM2) Tracking",
      "Blended ROAS (MER) Optimization",
      "P&L-Focused Capital Allocation Guardrails"
    ],
    deliverables: [
      "Custom Multi-Channel Campaign Architecture",
      "Weekly Attribution & Creative Performance Reviews",
      "Live Blended MER & P&L Dashboard",
      "90-Day Scaling & Capital Allocation Roadmap"
    ],
    icon: "TrendingUp",
    highlightText: "Profit-first media buying that scales spend only when contribution margin benchmarks are held.",
    targetAudience: [
      "D2C brands generating ₹15L to ₹1Cr+ monthly who hit scaling ceilings on Meta or Google",
      "Founders tired of vanity dashboard ROAS that doesn't reflect in their bank balance",
      "Brands suffering from constant ad fatigue and wild month-to-month revenue swings",
      "eCommerce operators seeking unified Meta + Google cross-channel attribution"
    ],
    problemsSolved: [
      {
        title: "Rising Customer Acquisition Cost (CAC)",
        desc: "Consolidating fragmented ad sets into broad Advantage+ and ASC frameworks pools data faster, drops auction CPMs, and lowers blended CAC."
      },
      {
        title: "Severe Day-to-Day Performance Volatility",
        desc: "Eliminating micro-budget edits and implementing disciplined 48-hour vertical scaling rules prevents the algorithm from constantly resetting."
      },
      {
        title: "Attribution Discrepancies & Phantom ROAS",
        desc: "We manage accounts on blended MER (Shopify Net Revenue ÷ Total Ad Spend) and Contribution Margin rather than self-reported platform numbers."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Account & Unit Economics Audit",
        desc: "We inspect your historical ad spend, creative fatigue curves, COGS, shipping, COD RTO rates, and true contribution margins."
      },
      {
        step: "02",
        title: "Consolidated Campaign Architecture",
        desc: "We eliminate auction overlap and rebuild your account into dynamic testing (DCT), broad scaling (ASC/CBO), and lean catalog corridors."
      },
      {
        step: "03",
        title: "High-Velocity Creative Integration",
        desc: "Every Monday, freshly validated direct-response UGC hooks are pumped into testing sandboxes to identify winners before ad fatigue hits."
      },
      {
        step: "04",
        title: "P&L Scaling & Margin Protection",
        desc: "Budgets are scaled vertically by 15-20% only when 7-day blended MER targets and cash-flow contribution margins are satisfied."
      }
    ],
    faqs: [
      {
        question: "How do you manage ad spend differently than other agencies?",
        answer: "Most agencies measure success on in-platform ROAS, which double-counts revenue across Meta and Google. We manage your ad accounts based on Contribution Margin 1 (Net Sales minus COGS, shipping, payment fees, and ad spend) and blended MER across your entire Shopify store."
      },
      {
        question: "How long does it take to see lower CAC and stable ROAS?",
        answer: "In the first 14 days, we fix leaky campaign architecture and test initial creative hook batches. Measurable improvements in blended CAC and conversion stability typically occur within 3 to 4 weeks, compounding strongly by month two."
      },
      {
        question: "What platforms do you manage?",
        answer: "We primarily run Meta (Instagram & Facebook) and Google Ads (Performance Max, Shopping, Search, YouTube), synchronizing budgets dynamically between the two based on marginal return."
      }
    ],
    relatedCaseStudySlugs: ["iyka", "shoe-mistri", "wine-chateau"],
    relatedArticleSlugs: ["how-to-reduce-cac-for-d2c-brands", "meta-ads-scaling-framework-d2c", "blended-roas-vs-in-platform-roas"]
  },
  {
    slug: "creative",
    id: "creative",
    title: "Performance Creative & UGC",
    tagline: "Ads built to sell, not to win awards.",
    description: "High-converting UGC, direct-response video ads, and weekly creative hook testing designed to beat ad fatigue and drive profitable customer acquisition at scale.",
    tags: ["UGC Video", "Direct Response", "Hook Testing", "Motion Graphics", "Thumb-Stoppers"],
    features: [
      "User Generated Content (UGC) Creator Sourcing & Direction",
      "Direct Response High-Converting Video Ads",
      "High-Contrast Static & Carousel Visual Assets",
      "Weekly Hook Testing Engine (PAS, Social Proof, Unboxing)",
      "Motion Graphics & Dynamic Product Feature Highlights",
      "Creative Fatigue Prevention & Asset Depletion Tracking"
    ],
    deliverables: [
      "Weekly Creative Drops (15–30 tested variations monthly)",
      "Tested Hook Bank Deployment",
      "Native Aspect Ratios (9:16 Reels/Stories, 4:5 Feed, 1:1 Square)",
      "Creative Metric Audits (Hook Rate & Hold Rate Reports)"
    ],
    icon: "Video",
    highlightText: "High-velocity creative shipping so fatigue is solved before performance dips.",
    targetAudience: [
      "Brands whose ad performance crashes after 2 weeks of running the same creative",
      "Founders who struggle to get reliable, high-converting content from creators",
      "eCommerce accounts spending ₹10L+ monthly needing 5-10 fresh ad assets weekly",
      "Businesses transitioning from generic product photography to direct-response video"
    ],
    problemsSolved: [
      {
        title: "Ad Fatigue Crashing Account ROAS",
        desc: "When frequency climbs and CTR drops, our weekly hook engine deploys tested backup variations to hold acquisition costs steady."
      },
      {
        title: "Low Thumb-Stop & High Drop-Off Rates",
        desc: "We engineer the first 3 seconds of every video around psychological thumb-stops (curiosity gaps, visual disruption, counter-intuitive claims)."
      },
      {
        title: "Slow, Painful Creative Turnaround Times",
        desc: "Our modular scripting system turns 1 creator shoot into 15 to 20 unique testing variations within 48 to 72 hours."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Customer Psychology & Competitor Teardown",
        desc: "We analyze your 1-star reviews, competitor bestsellers, and top comments to identify real emotional triggers and purchase objections."
      },
      {
        step: "02",
        title: "Modular Scripting & Creator Briefing",
        desc: "We script 4-part modular videos: 5 distinct 3-second hooks, 2 core problem-solution demos, and 2 frictionless CTAs."
      },
      {
        step: "03",
        title: "Rapid Post-Production & Editing",
        desc: "Our direct-response editors add native kinetic typography, jump cuts, visual callouts, and audio trends optimized for mobile."
      },
      {
        step: "04",
        title: "Sandboxed Testing & Hook Iteration",
        desc: "Ads enter Dynamic Creative Testing (DCT). We track 3-second hook rate (>30%) and hold rate to greenlight scale-ready winners."
      }
    ],
    faqs: [
      {
        question: "Do you find the creators or do we have to provide them?",
        answer: "We handle creator sourcing, vetting, scripting, contracts, and shipping briefs completely in-house. You only provide the product inventory."
      },
      {
        question: "How many creative assets do we receive each month?",
        answer: "Depending on your growth tier, we deliver between 15 and 30 production-ready ad variations monthly, ensuring your ad accounts never run dry."
      },
      {
        question: "Why does UGC convert better than studio commercial shoots?",
        answer: "Consumers scroll past polished brand commercials because they trigger immediate sales resistance. Native UGC mimics peer recommendations and looks organic inside the Instagram Reels and TikTok feed."
      }
    ],
    relatedCaseStudySlugs: ["twirl-and-tote", "shaper-cult", "iyka"],
    relatedArticleSlugs: ["high-velocity-ugc-creative-framework", "how-to-reduce-cac-for-d2c-brands"]
  },
  {
    slug: "cro",
    id: "cro",
    title: "CRO & Landing Pages",
    tagline: "Get more from the traffic you already bought.",
    description: "Turn paid clicks into repeatable profit with dedicated direct response landing pages, high-converting PDP rebuilds, and checkout corridor optimization.",
    tags: ["Landing Pages", "PDP Rebuild", "A/B Testing", "Checkout UX", "AOV Bundles"],
    features: [
      "Direct Response Dedicated Campaign Landing Pages",
      "Product Detail Page (PDP) Mobile-First Rebuilds",
      "Checkout Friction Removal & 1-Click Buy Corridors",
      "A/B Split Testing Strategy & Statistical Significance Tracking",
      "Bundle, Tiered & Multi-Pack Offer Architecture",
      "Cart Drawer Cross-Sell & Free Shipping Progress Engines"
    ],
    deliverables: [
      "High-Speed Custom Landers (Sub-second load times)",
      "Production-Ready Figma UI Designs & Frontend Code",
      "A/B Test Variant Setup & Ongoing Conversion Audits",
      "AOV Expansion & Sticky Cart Integration"
    ],
    icon: "Zap",
    highlightText: "Turn wasted clicks into revenue before spending another rupee on paid ads.",
    targetAudience: [
      "Stores with strong ad traffic (50k+ monthly visits) but sub-2% conversion rates",
      "Brands whose mobile drop-off rate between 'Add to Cart' and 'Purchased' exceeds 75%",
      "Founders wanting to increase Average Order Value (AOV) without raising prices",
      "eCommerce teams looking for dedicated campaign landers for hero product drops"
    ],
    problemsSolved: [
      {
        title: "High Checkout Corridor Abandonment",
        desc: "We eliminate mandatory account creation, add OTP 1-click checkouts, and surface transparent delivery timelines to stop cart abandonment."
      },
      {
        title: "Cold Traffic Bouncing Immediately",
        desc: "Dedicated direct-response landers match the specific ad hook that was clicked, preserving intent and answering key objections before purchase."
      },
      {
        title: "Low Average Order Value (AOV)",
        desc: "We engineer pre-selected tiered bundles ('Buy 2 Save 15%') and in-cart slide-out upsells to boost unit economics on every checkout."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Quantitative Heatmap & Funnel Teardown",
        desc: "We analyze Hotjar heatmaps, session recordings, Google Analytics 4 drop-off funnels, and scroll-depth analytics."
      },
      {
        step: "02",
        title: "Wireframing & Conversion Architecture",
        desc: "We rebuild the mobile PDP layout: above-the-fold value prop, sticky buy bar, trust badges, customer reviews, and clear bundle savings."
      },
      {
        step: "03",
        title: "Frontend Engineering & Speed Optimization",
        desc: "We write clean, lightweight code that loads in under 1 second without third-party app dependencies that slow down the store."
      },
      {
        step: "04",
        title: "A/B Testing & Iterative Deployment",
        desc: "Variants are tested against the control until 95%+ statistical significance is reached, locking in permanent conversion lifts."
      }
    ],
    faqs: [
      {
        question: "What kind of conversion rate lift can we realistically expect?",
        answer: "Most stores experience a +20% to +45% lift in mobile conversion rate and a 15% to 25% increase in Average Order Value (AOV) following a full PDP and checkout corridor overhaul."
      },
      {
        question: "Will you build on our existing Shopify theme?",
        answer: "Yes. We can optimize within your existing Shopify theme, build custom Liquid templates, or deploy standalone headless landing pages built on Next.js."
      },
      {
        question: "How do you test changes safely without hurting current sales?",
        answer: "We run split-traffic A/B tests using tools like Intelligems or native Shopify testing so only a portion of traffic sees the variant until statistical superiority is proven."
      }
    ],
    relatedCaseStudySlugs: ["label-mehu", "the-white-willow", "shaper-cult"],
    relatedArticleSlugs: ["ecommerce-cro-checklist-conversions", "shopify-core-web-vitals-speed-optimization"]
  },
  {
    slug: "web-design",
    id: "web-design",
    title: "Website Design & Development",
    tagline: "If it doesn't help someone buy, it doesn't ship.",
    description: "Fast, mobile-first Shopify and custom eCommerce storefronts engineered for sub-second load times, Core Web Vitals, and maximum checkout conversion.",
    tags: ["Shopify Plus", "Mobile UX", "Sub-Second Speed", "Custom Liquid", "Headless Next.js"],
    features: [
      "Custom Shopify & Shopify Plus Storefront Architecture",
      "Mobile-First Responsive Design for High-Velocity D2C",
      "Sub-Second Core Web Vitals Speed Tuning (LCP, INP, CLS)",
      "High-Converting PDP & Slide-Out Cart UX",
      "Seamless Third-Party App & ERP Tech Stack Integrations",
      "Modular, Clean Codebase Built for Easy In-House Updates"
    ],
    deliverables: [
      "Full Mobile-Optimized eCommerce Storefront",
      "Figma UI/UX Component Library & Design System",
      "Page Speed Guarantee (Sub-1s Mobile LCP)",
      "Comprehensive Handover Guide & Video Walkthroughs"
    ],
    icon: "Layout",
    highlightText: "Built specifically for high-volume conversion and mobile shopping speed.",
    targetAudience: [
      "Growing brands whose slow or dated website is limiting ad performance",
      "D2C brands outgrowing off-the-shelf basic Shopify templates",
      "Founders wanting a distinctive aesthetic that still operates as a conversion machine",
      "Stores with heavy app bloat looking to clean up code and restore 90+ PageSpeed scores"
    ],
    problemsSolved: [
      {
        title: "Slow Storefront Load Times (3s+)",
        desc: "We strip out unnecessary third-party scripts, optimize critical CSS, and preload hero assets to achieve sub-second load times."
      },
      {
        title: "Clunky Mobile Navigation & Sizing UX",
        desc: "Over 85% of shoppers buy on phones; our mobile-first design makes finding products, choosing variants, and checkout completely seamless."
      },
      {
        title: "Cookie-Cutter Generic Agency Designs",
        desc: "We craft custom brand identities with bespoke typography and layout hierarchy that convey premium value without hurting speed."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Brand Discovery & UX Architecture",
        desc: "We define your store's user flows, catalog taxonomy, brand typography, and conversion hotspots."
      },
      {
        step: "02",
        title: "Figma UI/UX Wireframes & Prototyping",
        desc: "We design every key screen—Homepage, Collection, PDP, Cart, About—focused on mobile interaction simplicity."
      },
      {
        step: "03",
        title: "Shopify Theme Engineering",
        desc: "We build native custom Liquid components or headless Next.js frontends with zero app bloat."
      },
      {
        step: "04",
        title: "Speed Audits, QA & Launch",
        desc: "Rigorous testing across iOS, Android, tablets, and desktop devices to verify flawless responsive behavior and sub-second load times."
      }
    ],
    faqs: [
      {
        question: "How long does a complete custom Shopify build take?",
        answer: "A complete custom storefront build typically takes 3 to 5 weeks from initial design kickoff to final QA and live DNS cutover."
      },
      {
        question: "Can our in-house team manage products and banners after launch?",
        answer: "Absolutely. We build modular Shopify custom sections so your marketing team can change banners, launch new products, and update copy easily without touching code."
      },
      {
        question: "Do you guarantee high PageSpeed and Core Web Vitals scores?",
        answer: "Yes. We engineer every store to pass Google's Core Web Vitals with sub-second LCP and high performance scores on modern mobile devices."
      }
    ],
    relatedCaseStudySlugs: ["iyka", "fig-living", "velviore"],
    relatedArticleSlugs: ["shopify-core-web-vitals-speed-optimization", "ecommerce-cro-checklist-conversions"]
  },
  {
    slug: "seo",
    id: "seo",
    title: "SEO & Organic Growth",
    tagline: "The layer that keeps working after you pause the ads.",
    description: "Scale organic revenue, reduce blended CAC, and rank high-intent commercial keywords with technical, on-page, and category SEO built specifically for D2C brands.",
    tags: ["D2C SEO", "Technical SEO", "Category Pages", "Topical Authority", "Schema Markup"],
    features: [
      "Technical SEO Audits, Canonical Cleanup & Indexation Fixes",
      "eCommerce Category & Collection Page Optimization",
      "High-Intent Commercial Keyword Hierarchy & Content Strategy",
      "Structured Data & Schema Markup (Product, Organization, FAQ)",
      "Internal Linking & Hub-and-Spoke Topical Mesh",
      "Blended CAC Reduction Engine via Organic Demand Capture"
    ],
    deliverables: [
      "Full Technical SEO Health Fixes & Crawl Budget Optimization",
      "Keyword & Intent Hierarchy Matrix",
      "10-Part Long-Form Topical Content Blueprint",
      "Monthly Organic Search Revenue Attribution Reports"
    ],
    icon: "Target",
    highlightText: "Build lasting organic equity to lower your blended customer acquisition cost.",
    targetAudience: [
      "D2C brands currently relying 100% on paid ads whose margins are squeezed by rising CPMs",
      "Stores with duplicate content or canonical errors hurting Google indexing",
      "Brands wanting to own high-volume category searches in their product niche",
      "eCommerce businesses looking to capture high-intent buyers ready to purchase"
    ],
    problemsSolved: [
      {
        title: "100% Dependency on Rented Ad Channels",
        desc: "When ad platforms get expensive, our SEO foundation captures organic searchers continuously without marginal media cost."
      },
      {
        title: "Duplicate URLs & Index Bloat",
        desc: "Shopify naturally generates duplicate tag, collection, and product URLs. We implement strict self-referencing canonicals to focus Google's crawl budget."
      },
      {
        title: "Missing Bottom-of-Funnel Commercial Intent",
        desc: "Instead of vanity blog posts, we optimize category pages and commercial comparison guides that drive direct checkout revenue."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Technical Crawl & Canonical Audit",
        desc: "We audit your robots.txt, XML sitemaps, canonical tags, redirects, 404s, Core Web Vitals, and schema markup."
      },
      {
        step: "02",
        title: "Commercial Keyword Mapping",
        desc: "We map high-intent transactional search terms to dedicated collection pages and product hubs."
      },
      {
        step: "03",
        title: "On-Page Category Optimization",
        desc: "We structure category pages with descriptive H1s, keyword-aligned metadata, buyer FAQs, and internal links."
      },
      {
        step: "04",
        title: "Topical Authority & Content Engine",
        desc: "We produce in-depth buying guides and hub-and-spoke content clusters that build lasting search engine trust."
      }
    ],
    faqs: [
      {
        question: "How does SEO help lower my customer acquisition cost (CAC)?",
        answer: "When someone sees your Meta ad and later searches for your brand or category, SEO captures that buyer on Google without paying a second CPC. Organic revenue blends with paid spend to drop your overall CAC."
      },
      {
        question: "How long before we see rankings and organic sales increase?",
        answer: "Technical fixes and on-page collection updates often see ranking jumps in 4 to 8 weeks. Substantial organic traffic compounding and revenue inflection typically occur within 3 to 6 months."
      },
      {
        question: "Do you focus on blog posts or collection pages?",
        answer: "We prioritize collection and category pages first because they convert at 3x to 5x higher rates than top-of-funnel blog posts. Informational articles are built strategically to support those commercial hubs."
      }
    ],
    relatedCaseStudySlugs: ["the-white-willow", "rootz-organics", "pawbasket"],
    relatedArticleSlugs: ["d2c-seo-strategy-ecommerce-growth", "how-to-reduce-cac-for-d2c-brands"]
  },
  {
    slug: "strategy",
    id: "strategy",
    title: "Growth Consultation",
    tagline: "For founders who need someone who has seen the next stage.",
    description: "Unit economics modeling, full-funnel marketing audits, and actionable 90-day scaling roadmaps for ambitious direct-to-consumer brand founders looking to break scaling ceilings.",
    tags: ["Unit Economics", "Audits", "90-Day Roadmap", "Contribution Margin", "P&L Scaling"],
    features: [
      "Full Account, Funnel & Creative Pipeline Audit",
      "Actionable 90-Day Execution Growth Roadmap",
      "Unit Economics, COGS & Contribution Margin Modeling",
      "In-House Marketing Hiring & Team Structure Plan",
      "Omnichannel Acquisition Strategy (Meta, Google, SEO, WhatsApp)",
      "Weekly Strategic Growth Syncs with Senior Operators"
    ],
    deliverables: [
      "90-Day Tailored Growth & Acquisition Blueprint",
      "Custom Unit Economics & Margin Financial Model",
      "Marketing Org & In-House Team Structure Matrix",
      "Weekly Strategic Operator Syncs"
    ],
    icon: "Target",
    highlightText: "A clear, actionable roadmap from operators who have actually scaled D2C brands.",
    targetAudience: [
      "Founders who have an in-house team but need senior executive direction",
      "Brands preparing to scale from ₹25L to ₹1Cr+ monthly ad spend",
      "Businesses struggling with shrinking margins, high returns, or unclear cash flow",
      "Founders preparing for investor diligence or unit-economics restructuring"
    ],
    problemsSolved: [
      {
        title: "Scaling Spend While Losing Money",
        desc: "We diagnose unit economics, shipping, payment gateway fees, and RTO rates to establish a clear contribution margin floor before scaling."
      },
      {
        title: "In-House Team Lacking Strategic Direction",
        desc: "We provide your in-house team with daily operational checklists, creative testing quotas, and media buying frameworks."
      },
      {
        title: "Uncertainty on Capital Allocation",
        desc: "We show you exactly how much capital to allocate between top-of-funnel Meta, Google Shopping, retention, and new product launches."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Full P&L & Account Deep Dive",
        desc: "We analyze your historical revenue, spend, returns, margins, and customer cohort retention data over the last 12 months."
      },
      {
        step: "02",
        title: "Unit Economics Financial Modeling",
        desc: "We build an interactive model determining your exact break-even ROAS, Contribution Margin 1 & 2, and target CAC thresholds."
      },
      {
        step: "03",
        title: "90-Day Execution Roadmap",
        desc: "We map out clear weekly sprints across creative production, media buying architecture, CRO fixes, and retention flows."
      },
      {
        step: "04",
        title: "Weekly Strategic Governance",
        desc: "Weekly executive syncs to review blended MER, diagnose bottlenecks, and adjust capital allocation in real time."
      }
    ],
    faqs: [
      {
        question: "How is consultation different from full service management?",
        answer: "Growth Consultation is designed for brands that already have an in-house team or media buyers but lack high-level strategic direction, unit economics modeling, and creative architecture."
      },
      {
        question: "Can you help us build our internal marketing team?",
        answer: "Yes. We help design job descriptions, screen candidate portfolios, and establish daily operating rhythms for in-house media buyers and video editors."
      },
      {
        question: "What financial metrics do we review together?",
        answer: "We review Contribution Margin 1 & 2, Blended MER, First-Order CAC, 60-day cohort retention, inventory turn velocity, and net cash flow."
      }
    ],
    relatedCaseStudySlugs: ["shoe-mistri", "wine-chateau", "pawbasket"],
    relatedArticleSlugs: ["d2c-unit-economics-contribution-margin", "blended-roas-vs-in-platform-roas"]
  }
];
