export interface ServiceDetail {
  slug: string;
  title: string;
  description: string;
  category: string;
  iconName: string;
  content: string;
  features: string[];
  stats: { label: string; value: string }[];
}

export const services: ServiceDetail[] = [
  // Wealth Management
  {
    slug: "discretionary-mandate",
    title: "Discretionary Mandate",
    description: "You set the boundaries. We manage within them. Every decision, every day, without pulling you in for approval.",
    category: "Wealth Management",
    iconName: "ShieldCheck",
    content: "You set the boundaries. We manage within them. Every decision, every day, without pulling you in for approval.",
    features: ["Parameters set upfront", "No approval cycles", "Full accountability"],
    stats: [{ label: "AUM", value: "$150M+" }]
  },
  {
    slug: "advisory-mandate",
    title: "Advisory Mandate",
    description: "You make every decision. We make sure they're the right ones. GrowValley's advisory mandate gives you a dedicated expert who's sat on both sides of the table — as operators, founders, and institutional executives — not just advisors.",
    category: "Wealth Management",
    iconName: "BarChart3",
    content: "You make every decision. We make sure they're the right ones. GrowValley's advisory mandate gives you a dedicated expert who's sat on both sides of the table — as operators, founders, and institutional executives — not just advisors.",
    features: ["Advice from operators", "No product mandates", "Full decision authority"],
    stats: [{ label: "Experience", value: "50+ Years" }]
  },
  {
    slug: "financial-planning",
    title: "Financial Planning",
    description: "Most people manage money without a clear destination. We start with where you want to end up, build a strategy backwards from there, and stay close enough to adjust when things change.",
    category: "Wealth Management",
    iconName: "Target",
    content: "Most people manage money without a clear destination. We start with where you want to end up, build a strategy backwards from there, and stay close enough to adjust when things change.",
    features: ["Goals defined with precision", "Strategy built backwards", "Ongoing adjustment"],
    stats: [{ label: "AUM", value: "$150M+" }]
  },
  // Family Office Services
  {
    slug: "family-office-setup-and-incubation",
    title: "Family Office Setup & Incubation",
    description: "For families ready to formalise their wealth management structure. We design, build, and incubate a Single Family Office from the ground up.",
    category: "Family Office Services",
    iconName: "Building2",
    content: "We design, build, and incubate a Single Family Office from the ground up: governance, reporting framework, staffing model, and operating mandate. We stay close through the first operating cycle, then hand over with full documentation.",
    features: ["Governance Framework", "Staffing Model", "Operating Mandate"],
    stats: [{ label: "Structure", value: "Custom" }, { label: "Focus", value: "Incubation" }]
  },
  {
    slug: "wealth-consolidation-reporting",
    title: "Wealth Consolidation & Reporting",
    description: "A full view of your wealth in one place. We consolidate holdings across asset classes, custodians, and geographies into a single reporting framework.",
    category: "Family Office Services",
    iconName: "BarChart3",
    content: "Most families with complex wealth have never seen everything in one document. This changes that. We provide unified reporting across all assets and entities with full visibility and no blind spots.",
    features: ["Multi-asset View", "Consolidated Reporting", "Global Visibility"],
    stats: [{ label: "Visibility", value: "100%" }, { label: "Accuracy", value: "Verified" }]
  },
  {
    slug: "philanthropy",
    title: "Philanthropy",
    description: "Structured giving aligned to your values and your legacy. We help design philanthropic mandates and coordinate giving across causes and geographies.",
    category: "Family Office Services",
    iconName: "Heart",
    content: "We help design philanthropic mandates, establish the right vehicles, and coordinate giving across causes and geographies so it is as deliberate as the rest of your financial life.",
    features: ["Legacy Planning", "Impact Measurement", "Vehicle Selection"],
    stats: [{ label: "Impact", value: "Global" }]
  },
  {
    slug: "ma-and-ipo-advisory",
    title: "M&A & IPO Advisory",
    description: "For families with operating assets considering a transaction. We provide advisory support through acquisitions, business sales, and public listings.",
    category: "Family Office Services",
    iconName: "Briefcase",
    content: "We provide advisory support through acquisitions, business sales, and public listings, sitting alongside your legal and banking advisors with the operating perspective they do not have.",
    features: ["Transaction Advisory", "Operating Perspective", "Exit Strategy"],
    stats: [{ label: "Expertise", value: "End-to-End" }]
  },
  {
    slug: "social-impact-investing",
    title: "Social Impact Investing",
    description: "Capital deployed with a defined purpose beyond financial return. We identify and structure social impact opportunities.",
    category: "Family Office Services",
    iconName: "Globe",
    content: "We identify and structure social impact opportunities that meet financial criteria alongside the values-based ones, so you are not trading one for the other.",
    features: ["ESG Integration", "Purpose-Driven", "Direct Investments"],
    stats: [{ label: "Metric", value: "Dual-Return" }]
  },
  {
    slug: "collectibles-and-art",
    title: "Collectibles & Art",
    description: "Advisory support for families holding significant collections: valuation context, storage, insurance, and estate planning.",
    category: "Family Office Services",
    iconName: "Palette",
    content: "We address the questions most wealth managers avoid: valuation context, storage and insurance coordination, and the estate planning implications of non-financial assets.",
    features: ["Art Advisory", "Valuation", "Coordination"],
    stats: [{ label: "Asset Type", value: "Alternative" }]
  },

  // Private Market Access
  {
    slug: "private-equity",
    title: "Private Equity",
    description: "Access to established businesses raising growth or buyout capital. We focus on fundamentals. Cash flow. Positioning. Realistic exit timelines.",
    category: "Private Access to Opportunities",
    iconName: "Briefcase",
    content: "Access to established businesses raising growth or buyout capital. We focus on fundamentals. Cash flow. Positioning. Realistic exit timelines.",
    features: ["Growth capital", "Buyout opportunities", "Cash flow focus"],
    stats: [{ label: "Capital Deployed", value: "$1B+" }]
  },
  {
    slug: "venture-capital",
    title: "Venture Capital",
    description: "High-growth private companies from early stage through to pre-IPO. We evaluate the team, the market, and the cap table. Not just the pitch.",
    category: "Private Access to Opportunities",
    iconName: "Zap",
    content: "High-growth private companies from early stage through to pre-IPO. We evaluate the team, the market, and the cap table. Not just the pitch.",
    features: ["Pre-IPO access", "High-growth potential", "Deep vetting"],
    stats: [{ label: "Projects", value: "500+" }]
  },
  {
    slug: "real-estate-access",
    title: "Real Estate Access",
    description: "We source property deals that don't circulate publicly, structure them around what you walk away with, and give you access to markets we know from the inside.",
    category: "Private Access to Opportunities",
    iconName: "Building2",
    content: "We source property deals that don't circulate publicly, structure them around what you walk away with, and give you access to markets we know from the inside. No listings. No queues. No second-hand opportunities.",
    features: ["Off-market sourcing", "Exit-focused structure", "Direct developer access"],
    stats: [{ label: "AUM", value: "$150M+" }]
  },

  // Succession Planning Services
  {
    slug: "wealth-transfer-architecture",
    title: "Wealth Transfer Architecture",
    description: "Most families assume wealth will reach the right people in the right form. Without a designed structure, it rarely does. We map what you hold, define who receives what and under what conditions, and build the architecture that makes it enforceable across every jurisdiction that matters.",
    category: "Wealth & Succession Planning",
    iconName: "Layers",
    content: "Most families assume wealth will reach the right people in the right form. Without a designed structure, it rarely does. We map what you hold, define who receives what and under what conditions, and build the architecture that makes it enforceable across every jurisdiction that matters.",
    features: ["Asset mapping", "Ownership logic", "Jurisdictional coordination"],
    stats: [{ label: "Capital Deployed", value: "$1B+" }]
  },
  {
    slug: "shariah-compliant-succession",
    title: "Shariah-Compliant Succession",
    description: "Islamic inheritance law defines the shares. It does not resolve the questions that arise when assets span multiple jurisdictions, business interests do not divide cleanly, or wealth includes instruments that require careful structuring.",
    category: "Wealth & Succession Planning",
    iconName: "ScrollText",
    content: "Islamic inheritance law defines the shares. It does not resolve the questions that arise when assets span multiple jurisdictions, business interests do not divide cleanly, or wealth includes instruments that require careful structuring.",
    features: ["Faraid compliance", "Wasiyyah design", "Waqf structuring"],
    stats: [{ label: "AUM", value: "$150M+" }]
  },
  {
    slug: "family-governance",
    title: "Family Governance",
    description: "Shared wealth without shared structure becomes contested wealth. We design the decision-making frameworks, role definitions, and governance systems that keep families aligned after the transfer, not just during it.",
    category: "Wealth & Succession Planning",
    iconName: "Users",
    content: "Shared wealth without shared structure becomes contested wealth. We design the decision-making frameworks, role definitions, and governance systems that keep families aligned after the transfer, not just during it.",
    features: ["Decision rights", "Family councils", "Dispute resolution"],
    stats: [{ label: "Projects", value: "500+" }]
  }
];
