/**
 * AFAQ Partners seed data — Track A assumptions applied.
 * Used by scripts/seed-sanity.ts with createOrReplace + stable _id values.
 */

export const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  siteName: "AFAQ Partners",
  tagline: "AFAQ Partners — Dubai. Built by operators. Run for outcomes.",
  navCtaText: "Talk to an Advisor",
  navCtaHref: "/contact",
  contactEmail: "reach@afaqpartners.com",
};

export const heroes = [
  {
    _id: "hero-home",
    _type: "hero",
    pageSlug: "home",
    eyebrow: "AFAQ PARTNERS",
    headline: "Wealth managed by people who've actually built it.",
    subheadline:
      "Operated. Invested. Built. Now managing your capital the same way.",
    hasCTA: true,
    ctaText: "Talk to an Advisor",
    ctaHref: "/contact",
    heroStats: [
      { value: "$5B+", label: "Transactions" },
      { value: "$2B+", label: "Capital" },
      { value: "$350M", label: "Assets Under Management" },
      { value: "500+", label: "Projects Delivered" },
    ],
  },
  {
    _id: "hero-about",
    _type: "hero",
    pageSlug: "about",
    eyebrow: "ABOUT US",
    headline:
      "Wealth is more than banking. AFAQ Partners brings experience building, managing, and scaling and we know what it takes to grow the assets we now manage.",
    body: "AFAQ Partners is a private wealth and investment platform connecting families, entrepreneurs, and private capital with exceptional opportunities across markets. As a subsidiary of AFAQ Group, AFAQ Partners comes with 30+ years of reputation and unfair access to regional business owners, family offices, and private investor ecosystems.",
    subheadline:
      "We help our clients and partners build the relationships, market access, and investment ecosystems required to deploy and grow capital over the long term with our unfair advantage.",
    hasCTA: true,
    ctaText: "Talk to an Advisor",
    ctaHref: "/contact",
    heroStats: [
      { value: "$5B+", label: "Transactions" },
      { value: "$2B+", label: "Mandates" },
      { value: "$350M", label: "Assets Under Management" },
      { value: "500+", label: "Projects Delivered" },
    ],
  },
  {
    _id: "hero-expertise",
    _type: "hero",
    pageSlug: "expertise",
    eyebrow: "OUR EXPERTISE",
    headline: "Expertise that actually matters.",
    subheadline:
      "Every service we offer exists for one reason, to make sure your money is working as hard as you did to earn it. No filler. No services we can't stand behind. Just focused, expert work across the areas that move the needle.",
    hasCTA: true,
    ctaText: "Talk to an Advisor",
    ctaHref: "/contact",
  },
  {
    _id: "hero-team",
    _type: "hero",
    pageSlug: "team",
    eyebrow: "OUR TEAM",
    headline: "The people behind every decision.",
    subheadline:
      "Every person at AFAQ Partners has been on the inside of real decisions, not just the advice that follows them. They have invested, structured, managed, and protected capital across markets and cycles. That is who you are working with at AFAQ Partners.",
    hasCTA: false,
  },
  {
    _id: "hero-leadership",
    _type: "hero",
    pageSlug: "leadership",
    eyebrow: "OUR TEAM",
    headline: "The people behind every decision.",
    subheadline:
      "Every person at AFAQ Partners has been on the inside of real decisions, not just the advice that follows them. They have invested, structured, managed, and protected capital across markets and cycles. That is who you are working with at AFAQ Partners.",
    hasCTA: false,
  },
  {
    _id: "hero-careers",
    _type: "hero",
    pageSlug: "careers",
    eyebrow: "CAREERS",
    headline: "We don't hire for roles. We hire for impact.",
    subheadline:
      "AFAQ Partners sits at a rare intersection, wealth management, venture building, and active capital deployment. That means the people who thrive here aren't looking for a quiet corner of finance. They're looking for a place where their thinking actually changes outcomes.",
    hasCTA: true,
    ctaText: "Send Us Your CV",
    ctaHref: "/contact",
  },
  {
    _id: "hero-digital",
    _type: "hero",
    pageSlug: "digital",
    eyebrow: "DIGITAL",
    headline: "The wealth industry is changing.",
    subheadline:
      "Most wealth firms treat technology as a back office upgrade. We see it differently. The way capital is accessed, deployed, and managed is being fundamentally reshaped, and the clients who benefit most will be the ones working with those who saw it coming.",
    hasCTA: true,
    ctaText: "Join the Waitlist",
    ctaHref: "/contact",
  },
  {
    _id: "hero-get-started",
    _type: "hero",
    pageSlug: "get-started",
    eyebrow: "GET STARTED",
    headline: "The first conversation is where it starts.",
    subheadline:
      "We'll want to understand where you are, what you're building towards, and what good looks like for you. From there, we'll give you a straight answer on whether we're the right fit and if we are, exactly what working together looks like.",
    hasCTA: true,
    ctaText: "Talk to an Advisor",
    ctaHref: "/contact",
  },
  {
    _id: "hero-insights",
    _type: "hero",
    pageSlug: "insights",
    eyebrow: "INSIGHTS",
    headline: "We write what we actually think. Not what sounds good in a newsletter.",
    subheadline:
      "Most wealth management content is designed to reassure, not inform. The thinking we publish here comes from people who are actively managing capital, working with operators, and watching markets without the pressure of a product to sell.",
    hasCTA: false,
  },
];

export const dataSection = {
  _id: "dataSection-main",
  _type: "dataSection",
  headline: "That's the operating history we bring to every conversation.",
  description:
    "AFAQ Partners is a fully integrated wealth management powerhouse. We globally serve our wealth management and institutional client base.",
  stats: [
    { prefix: "$", number: 5, suffix: "B+", label: "Transactions" },
    { prefix: "$", number: 2, suffix: "B+", label: "Capital" },
    { prefix: "$", number: 350, suffix: "M", label: "Assets Under Management" },
    { number: 500, suffix: "+", label: "Projects Delivered" },
  ],
};

export const footerStats = {
  _id: "footerStats-home",
  _type: "footerStats",
  stats: [
    { value: "$150M+", label: "Assets Under Management" },
    { value: "$3B+", label: "in Revenue Generated" },
    { value: "$1B+", label: "in Capital Funded" },
  ],
  supportingCopy:
    "These aren't portfolio projections. They're the result of decisions made, capital deployed, and businesses actually built.",
  disclaimer: "",
};

export const pageSections = [
  {
    _id: "pageSection-home-why",
    _type: "pageSection",
    pageSlug: "home",
    sectionKey: "why-afaq",
    heading: "Why AFAQ Partners?",
    subheading: "The wealth arm of a group that builds, funds, and operates businesses.",
    body: "We manage money alongside people who've deployed capital into over 500 real projects, with no product commissions and no hidden incentives. Every decision we make is answerable to one thing: your outcome.",
    items: [
      {
        label: "Wealth Management",
        body: "Portfolio construction built around your long-term objectives, not market noise, not product cycles, not what's easiest to explain in a brochure.",
      },
      {
        label: "Family Office Services",
        body: "For families whose financial affairs have outgrown a single advisor. We coordinate the full picture, investments, structures, reporting, and relationships, so nothing slips through the gaps.",
      },
      {
        label: "Private Access to Opportunities",
        body: "Through the AFAQ Partners network, select clients access private equity, venture, and real estate deals that don't circulate publicly. We've been inside these deals. We know what to look for.",
      },
      {
        label: "Succession Planning Services",
        body: "Wealth takes decades to build. Losing it to poor structuring takes one bad decision. We design structures that protect, preserve, and pass it on, across borders, across generations.",
      },
    ],
  },
  {
    _id: "pageSection-home-solutions",
    _type: "pageSection",
    pageSlug: "home",
    sectionKey: "solutions",
    heading: "We don't sell products. We don't take commissions. We build strategies.",
    body: "Our process is direct, we start with your capital, your risk profile, and where you actually want to end up. Then we build backwards from there. Just a clear mandate, consistent execution, and a team that's been on both sides of the table.",
  },
  {
    _id: "pageSection-home-who",
    _type: "pageSection",
    pageSlug: "home",
    sectionKey: "who-we-work-with",
    heading: "Who we work with",
    items: [
      { title: "HNW individuals and families building toward specific long-term goals" },
      { title: "Ultra-HNW families requiring full family office coordination" },
      { title: "Business owners and entrepreneurs deploying capital following a liquidity event" },
      { title: "Qualified investors seeking direct access to private market opportunities" },
      { title: "International clients requiring cross-border structuring and succession planning" },
    ],
  },
  {
    _id: "pageSection-about-offerings",
    _type: "pageSection",
    pageSlug: "about",
    sectionKey: "offerings",
    heading: "Our Offerings",
    items: [
      { title: "Investment Advisory" },
      { title: "Wealth Management" },
      { title: "Family Office Services" },
      { title: "Private Investments" },
      { title: "Strategic Market Access" },
      { title: "Strategic Partnerships" },
    ],
  },
  {
    _id: "pageSection-about-access",
    _type: "pageSection",
    pageSlug: "about",
    sectionKey: "access-metrics",
    items: [
      { title: "Access to 350+ Family Offices" },
      { title: "Access to 500+ Investment Networks" },
      { title: "Access to 200+ Business Ecosystems" },
    ],
  },
  {
    _id: "pageSection-about-edge",
    _type: "pageSection",
    pageSlug: "about",
    sectionKey: "our-edge",
    heading: "Most wealth managers study markets. We've operated inside them.",
    body: "We've worked directly with founders, builders, operators and leaders, helping scale revenues, raise capital, and launch new businesses from the ground up.",
  },
  {
    _id: "pageSection-insights-intro",
    _type: "pageSection",
    pageSlug: "insights",
    sectionKey: "intro",
    body: "We do it differently. The thinking we publish here comes from people who are actively managing capital, working with operators, and watching markets without the pressure of a product to sell. That means what we write is useful, not just readable.",
  },
];

export const teamMembers = [
  {
    _id: "team-sofia-alvarez",
    _type: "teamMember",
    name: "Sofia Alvarez",
    role: "Capital Strategy and Investment Readiness Advisor",
    memberType: "advisory",
    imagePath: "/images/people/sofia_alvarez.png",
    order: 1,
  },
  {
    _id: "team-aarav-malhotra",
    _type: "teamMember",
    name: "Aarav Malhotra",
    role: "Senior Growth and Transformation Advisor",
    memberType: "advisory",
    imagePath: "/images/people/aarav_malhotra.bmp",
    order: 2,
  },
  {
    _id: "team-nadia-el-sayed",
    _type: "teamMember",
    name: "Nadia El-Sayed",
    role: "Investment Readiness Advisor",
    memberType: "advisory",
    imagePath: "/images/people/nadia.bmp",
    order: 3,
  },
  {
    _id: "team-priya-menon",
    _type: "teamMember",
    name: "Priya Menon",
    role: "Capital Structuring Advisor",
    memberType: "advisory",
    imagePath: "/images/people/priya_menon.bmp",
    order: 4,
  },
  {
    _id: "team-lucas-moreau",
    _type: "teamMember",
    name: "Lucas Moreau",
    role: "Transaction Readiness Advisor",
    memberType: "advisory",
    imagePath: "/images/people/lucas_moreau.png",
    order: 5,
  },
  {
    _id: "team-daniel-fischer",
    _type: "teamMember",
    name: "Daniel Fischer",
    role: "Capital Strategy Advisor",
    memberType: "advisory",
    imagePath: "/images/people/daniel_fischer.bmp",
    order: 6,
  },
  {
    _id: "team-william-daly",
    _type: "teamMember",
    name: "William J. Daly",
    role: "CIO & Partner",
    memberType: "leadership",
    imagePath: "/images/people/william.jpg",
    order: 1,
    bio: [
      "William J. Daly brings more than 40+ years of executive, investment, and entrepreneurial experience to AFAQ Partners, with a career spanning real estate, economic zones, private equity, asset management, and sovereign investment.",
      "Over the course of his career, William has held senior leadership positions across property development, institutional investment, and asset management. His experience includes founding and scaling a major real estate group, leading complex investment platforms, and serving as Group Chief Investment Officer for a sovereign private office.",
      "At AFAQ Partners, William helps shape the firm's investment and growth agenda, leading strategic initiatives, institutional partnerships, and opportunities that connect capital, assets, and long-term enterprise value.",
    ],
  },
  {
    _id: "team-jazeer-jamal",
    _type: "teamMember",
    name: "Jazeer Jamal",
    role: "CEO & Partner",
    memberType: "leadership",
    imagePath: "/images/people/jazeer_jamal.jpg",
    order: 2,
    bio: [
      "Jazeer Jamal brings 25+ years of entrepreneurial, executive, and investment experience to AFAQ Partners, spanning technology, private equity, venture capital, asset management, and institutional investment.",
      "A founder and business builder by background, Jazeer has established and scaled businesses, investment platforms, public-private partnerships, and family office initiatives across the region. His career has been defined by identifying opportunities at the intersection of capital, strategy, innovation, and growth, and translating them into scalable businesses and long-term partnerships.",
      "As CEO & Partner of AFAQ Partners, Jazeer leads the firm's overall strategic direction, platform and product development, strategic partnerships, and cross-functional growth agenda, with a focus on building new opportunities and creating enduring enterprise value.",
    ],
  },
  {
    _id: "team-suhail-ismail",
    _type: "teamMember",
    name: "Suhail Ismail",
    role: "CXO & Partner",
    memberType: "leadership",
    imagePath: "/images/people/suhail.jpg",
    order: 3,
    bio: [
      "Suhail Ismail brings over 15 years of operational experience to AFAQ Partners, ensuring strategy translates into consistent execution across all entities. His background spans from business advisory, to corporate turnaround, to business transformation, to business scaling across multiple markets.",
      "At AFAQ Partners, he leads the overall operations of the business, client experience, partnerships, and the firm's cross-functional growth strategy.",
    ],
  },
  {
    _id: "team-priya-menon-principal",
    _type: "teamMember",
    name: "Priya Menon",
    role: "Family Office Advisor",
    memberType: "principal",
    serviceSlug: "family-office-services",
    order: 1,
  },
  {
    _id: "team-sofia-principal",
    _type: "teamMember",
    name: "Sofia Alvarez",
    role: "Capital Strategy & Investment Readiness Advisor",
    memberType: "principal",
    serviceSlug: "wealth-management",
    order: 2,
  },
  {
    _id: "team-lucas-principal",
    _type: "teamMember",
    name: "Lucas Moreau",
    role: "Transaction Readiness Advisor",
    memberType: "principal",
    serviceSlug: "private-access-to-opportunities",
    order: 3,
  },
  {
    _id: "team-amelia-principal",
    _type: "teamMember",
    name: "Amelia Brooks",
    role: "Leadership & Governance Advisor",
    memberType: "principal",
    serviceSlug: "succession-planning-services",
    order: 4,
  },
];

export const serviceCategories = [
  {
    _id: "serviceCategory-wealth-management",
    _type: "serviceCategory",
    title: "Wealth Management",
    slug: { _type: "slug", current: "wealth-management" },
    sectionId: "wealth-management",
    order: 1,
  },
  {
    _id: "serviceCategory-family-office",
    _type: "serviceCategory",
    title: "Family Office Services",
    slug: { _type: "slug", current: "family-office-services" },
    sectionId: "family-office-services",
    order: 2,
  },
  {
    _id: "serviceCategory-private-access",
    _type: "serviceCategory",
    title: "Private Access to Opportunities",
    slug: { _type: "slug", current: "private-access-to-opportunities" },
    sectionId: "private-access-to-opportunities",
    order: 3,
  },
  {
    _id: "serviceCategory-succession",
    _type: "serviceCategory",
    title: "Succession Planning Services",
    slug: { _type: "slug", current: "succession-planning-services" },
    sectionId: "succession-planning-services",
    order: 4,
  },
];

export const services = [
  { _id: "service-discretionary-mandate", _type: "service", title: "Discretionary Mandate", slug: { _type: "slug", current: "discretionary-mandate" }, category: { _type: "reference", _ref: "serviceCategory-wealth-management" }, iconName: "ShieldCheck", order: 1 },
  { _id: "service-advisory-mandate", _type: "service", title: "Advisory Mandate", slug: { _type: "slug", current: "advisory-mandate" }, category: { _type: "reference", _ref: "serviceCategory-wealth-management" }, iconName: "BarChart3", order: 2 },
  { _id: "service-financial-planning", _type: "service", title: "Financial Planning", slug: { _type: "slug", current: "financial-planning" }, category: { _type: "reference", _ref: "serviceCategory-wealth-management" }, iconName: "Target", order: 3 },
  { _id: "service-family-office-setup", _type: "service", title: "Family Office Setup & Incubation", slug: { _type: "slug", current: "family-office-setup-and-incubation" }, category: { _type: "reference", _ref: "serviceCategory-family-office" }, iconName: "Building2", order: 4 },
  { _id: "service-wealth-consolidation", _type: "service", title: "Wealth Consolidation & Reporting", slug: { _type: "slug", current: "wealth-consolidation-reporting" }, category: { _type: "reference", _ref: "serviceCategory-family-office" }, iconName: "BarChart3", order: 5 },
  { _id: "service-philanthropy", _type: "service", title: "Philanthropy", slug: { _type: "slug", current: "philanthropy" }, category: { _type: "reference", _ref: "serviceCategory-family-office" }, iconName: "Heart", order: 6 },
  { _id: "service-ma-ipo", _type: "service", title: "M&A & IPO Advisory", slug: { _type: "slug", current: "ma-and-ipo-advisory" }, category: { _type: "reference", _ref: "serviceCategory-family-office" }, iconName: "Briefcase", order: 7 },
  { _id: "service-social-impact", _type: "service", title: "Social Impact Investing", slug: { _type: "slug", current: "social-impact-investing" }, category: { _type: "reference", _ref: "serviceCategory-family-office" }, iconName: "Globe", order: 8 },
  { _id: "service-collectibles", _type: "service", title: "Collectibles & Art", slug: { _type: "slug", current: "collectibles-and-art" }, category: { _type: "reference", _ref: "serviceCategory-family-office" }, iconName: "Palette", order: 9 },
  { _id: "service-private-equity", _type: "service", title: "Private Equity & Venture Capital", slug: { _type: "slug", current: "private-equity" }, category: { _type: "reference", _ref: "serviceCategory-private-access" }, iconName: "TrendingUp", order: 10 },
  { _id: "service-real-estate", _type: "service", title: "Real Estate Access", slug: { _type: "slug", current: "real-estate-access" }, category: { _type: "reference", _ref: "serviceCategory-private-access" }, iconName: "Building", order: 11 },
  { _id: "service-venture-capital", _type: "service", title: "Venture Capital", slug: { _type: "slug", current: "venture-capital" }, category: { _type: "reference", _ref: "serviceCategory-private-access" }, iconName: "Rocket", order: 12 },
  { _id: "service-wealth-transfer", _type: "service", title: "Wealth Transfer Architecture", slug: { _type: "slug", current: "wealth-transfer-architecture" }, category: { _type: "reference", _ref: "serviceCategory-succession" }, iconName: "Layers", order: 13 },
  { _id: "service-shariah", _type: "service", title: "Shariah-Compliant Succession", slug: { _type: "slug", current: "shariah-compliant-succession" }, category: { _type: "reference", _ref: "serviceCategory-succession" }, iconName: "Scale", order: 14 },
  { _id: "service-family-governance", _type: "service", title: "Family Governance", slug: { _type: "slug", current: "family-governance" }, category: { _type: "reference", _ref: "serviceCategory-succession" }, iconName: "Users", order: 15 },
];

export const officeLocations = [
  {
    _id: "office-abu-dhabi",
    _type: "officeLocation",
    name: "Head Quarter — Abu Dhabi",
    label: "Dubai Head Office",
    order: 1,
    addressLines: [
      "Afaq Al Khaleej Engineering Resources LLC",
      "Office 2501 & 2504, 25th Floor, Shining Tower, Khalidiyah, Abu Dhabi, UAE",
      "PO Box 45993 · info@afaqgroup.ae",
    ],
  },
  {
    _id: "office-dubai",
    _type: "officeLocation",
    name: "Dubai Office",
    order: 2,
    addressLines: [
      "Office 401 (401, 407, 408), Building A4, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE",
      "PO Box 122896 · dxb@afaqgroup.ae",
    ],
  },
  {
    _id: "office-oman",
    _type: "officeLocation",
    name: "Oman Office",
    order: 3,
    addressLines: [
      "Al Jood Tower, 18th November Street, Office No 3, Muscat, Oman",
      "aljood@afaqgroup.ae",
    ],
  },
  {
    _id: "office-qatar",
    _type: "officeLocation",
    name: "Qatar Office",
    order: 4,
    addressLines: [
      "Afaq Al Khaleej Engineering Resources WLL",
      "Hotel Plaza Corner Building, Muntaza, Office No 106, Doha, Qatar",
      "admin@afaqalkhaleej.com",
    ],
  },
  {
    _id: "office-india",
    _type: "officeLocation",
    name: "AFAQ India",
    order: 5,
    addressLines: [
      "Fortum Investrade LLP, Fortum Space, Marottichuvadu, Edappally, 3rd Floor, Office No 3, Ernakulam, Kerala, India",
      "info@fortuminvestrade.com",
    ],
    email: "info@fortuminvestrade.com",
  },
];

export const caseStudySeed = {
  _id: "caseStudy-strategic-wealth",
  _type: "caseStudy",
  title: "Strategic Wealth Consolidation: Streamlining a Multi-Generational Family Office",
  order: 1,
};

export function allSeedDocuments() {
  return [
    siteSettings,
    dataSection,
    footerStats,
    ...heroes,
    ...pageSections,
    ...teamMembers,
    ...serviceCategories,
    ...services,
    ...officeLocations,
    caseStudySeed,
  ];
}
