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
  // Family Office Services
  {
    slug: "single-family-office-setup",
    title: "Single Family Office Setup",
    description: "Structuring and establishing a dedicated family office for clients ready to formalise their wealth governance.",
    category: "Family Office Services",
    iconName: "Building2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    features: ["Governance Framework", "Operational Setup", "Talent Acquisition"],
    stats: [{ label: "Structure", value: "Custom" }, { label: "Focus", value: "Long-term" }]
  },
  {
    slug: "wealth-consolidation-reporting",
    title: "Wealth Consolidation and Reporting",
    description: "Unified reporting across all assets and entities. Full visibility. No blind spots.",
    category: "Family Office Services",
    iconName: "BarChart3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    features: ["Multi-asset View", "Real-time Monitoring", "Tax Efficiency"],
    stats: [{ label: "Visibility", value: "100%" }, { label: "Accuracy", value: "Verified" }]
  },
  {
    slug: "philanthropy",
    title: "Philanthropy",
    description: "Structured giving, aligned to your values and your tax position.",
    category: "Family Office Services",
    iconName: "Heart",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: ["Legacy Planning", "Impact Measurement", "Tax Optimization"],
    stats: [{ label: "Impact", value: "Global" }]
  },
  {
    slug: "ma-and-ipo",
    title: "M&A and IPO",
    description: "Advisory coordination for clients navigating corporate transactions alongside their personal wealth.",
    category: "Family Office Services",
    iconName: "Briefcase",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: ["Transaction Advisory", "Due Diligence", "Exit Strategy"],
    stats: [{ label: "Expertise", value: "End-to-End" }]
  },
  {
    slug: "social-impact-investing",
    title: "Social Impact Investing",
    description: "Capital deployed with intention. Returns measured in more than one currency.",
    category: "Family Office Services",
    iconName: "Globe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: ["ESG Integration", "Sustainable Returns", "Direct Investments"],
    stats: [{ label: "Metric", value: "Dual-Return" }]
  },
  {
    slug: "collectibles-and-art",
    title: "Collectibles and Art",
    description: "Specialist access to valuation, acquisition, and estate planning for alternative assets.",
    category: "Family Office Services",
    iconName: "Palette",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: ["Art Advisory", "Valuation", "Secure Custody"],
    stats: [{ label: "Asset Type", value: "Alternative" }]
  },

  // Private Access to Opportunities
  {
    slug: "institutional-desk",
    title: "GrowValley's Institutional Desk",
    description: "We originate, structure, and place capital-market opportunities across pre-IPO, real estate, and capital raises.",
    category: "Private Access to Opportunities",
    iconName: "Zap",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: ["Pre-IPO Access", "Real Estate Structuring", "Venture Capital"],
    stats: [{ label: "Reach", value: "Global" }]
  },
  {
    slug: "proven-practitioners",
    title: "Proven Practitioners",
    description: "Our team has originated, structured, and placed transactions. Not merely advised on them.",
    category: "Private Access to Opportunities",
    iconName: "Users",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: ["Execution Focus", "Deep Network", "Both Sides of Deal"],
    stats: [{ label: "Experience", value: "Hands-on" }]
  },
  {
    slug: "capital-sustainability",
    title: "Capital Sustainability",
    description: "Every opportunity is evaluated against capital durability, exit visibility, and risk-adjusted return.",
    category: "Private Access to Opportunities",
    iconName: "ShieldCheck",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: ["Risk Alignment", "Exit Visibility", "Durability Analysis"],
    stats: [{ label: "Focus", value: "Resilience" }]
  },

  // Succession Planning Services
  {
    slug: "wealth-structuring",
    title: "Wealth Structuring",
    description: "Redesigning holding arrangements to improve efficiency, reduce cost, and strengthen wealth integrity.",
    category: "Succession Planning Services",
    iconName: "Layers",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: ["Efficiency Analysis", "Cost Reduction", "Integrity Check"],
    stats: [{ label: "Result", value: "Optimized" }]
  },
  {
    slug: "succession-planning",
    title: "Succession Planning",
    description: "Constructing frameworks that protect your family and reflect your intentions across generations.",
    category: "Succession Planning Services",
    iconName: "ScrollText",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: ["Legacy Framework", "Fiduciary Selection", "Next Gen Prep"],
    stats: [{ label: "Protection", value: "Generational" }]
  },
  {
    slug: "citizenship-residency-services",
    title: "Citizenship & Residency Services",
    description: "Navigating residency and citizenship programmes, including EB-5 and Portugal Golden Visa.",
    category: "Succession Planning Services",
    iconName: "Plane",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: ["Program Guidance", "Discreet Navigation", "Global Access"],
    stats: [{ label: "Program", value: "Golden Visa / EB-5" }]
  }
];
