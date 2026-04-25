"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  Building2, BarChart3, Heart, Briefcase, Globe, Palette,
  Zap, Users, ShieldCheck, Layers, ScrollText, Plane,
  LineChart, Network, Target, Route, RefreshCw,
  Search, Key
} from "lucide-react";
import { ServiceDetail } from "@/config/services";
import { Button } from "@/components/ui/Button";
import styles from "./ServicePage.module.scss";

const iconMap: Record<string, any> = {
  Building2, BarChart3, Heart, Briefcase, Globe, Palette,
  Zap, Users, ShieldCheck, Layers, ScrollText, Plane,
  LineChart, Network, Target, Route, RefreshCw,
  Search, Key
};

// Per-service content blocks
const servicePageContent: Record<string, {
  heroHeadline?: string;
  heroSubheadline?: string;
  valuePropHeadline: string;
  valuePropAccent: string;
  valuePropBody: string;
  problemHighlight: string;
  problemHeadline: string;
  problemBody: string;
  problemBullets: string[];
  problemImageText?: string;
  howWeHelpSubtitle: string;
  helpCards?: { iconName: string; title: string; desc: string }[];
  featureEyebrow: string;
  featureHeadline: string;
  featureBody: string;
  featureBullets: string[];
  stats?: { num: string; desc: string }[];
  whatsIncluded?: {
    column1: string[];
    column2: string[];
  };
  ctaHeadline?: string;
  ctaBody?: string;
  ctaButtonLabel?: string;
  heroCtaLabel?: string;
  problemCtaLabel?: string;
  featureCtaLabel?: string;
  bottomCtaLabel?: string;
  overlayLabel?: string;
  categoryLabel?: string;
  workflow?: { title: string; desc: string }[];
}> = {
  "wealth-transfer-architecture": {
    heroHeadline: "Your intentions don't transfer. Your structure does.",
    heroSubheadline: "Most families assume wealth will reach the right people in the right form. Without a designed structure, it rarely does. We map what you hold, define who receives what and under what conditions, and build the architecture that makes it enforceable across every jurisdiction that matters.",
    valuePropHeadline: "Your intentions don't transfer.",
    valuePropAccent: "Your structure does.",
    valuePropBody: "A clear, documented framework covering what you hold, how it is held, who receives it, in what form, and under what conditions. Built around your actual situation, not a template carried forward from the last client.",
    problemHighlight: "IS YOUR WEALTH STRUCTURED TO SURVIVE YOU?",
    problemHeadline: "Without a designed transfer structure, your intentions are just assumptions.",
    problemBody: "Most wealth transfer failures are not the result of bad intentions. They are the result of no structure. Assets held in the wrong name. No documented logic for who receives what. Family members left to interpret rather than follow.\n\nThe outcome is predictable: delay, dispute, and value lost in the process. Not because anyone wanted it that way, but because no one built the framework that would have prevented it.\n\nWe design the transfer architecture before it is needed. We map the logic clearly across every asset class and jurisdiction to ensure your intentions are given a form that holds.",
    problemBullets: [
      "Ownership and transfer logic mapped clearly across every asset class and jurisdiction",
      "Conditional structures for beneficiaries where appropriate: phased, protected, or restricted",
      "A framework your legal team can implement and your family can follow without confusion"
    ],
    problemImageText: "Is your wealth structured to survive you?",
    howWeHelpSubtitle: "We design the structure. You define the outcome.",
    helpCards: [
      { iconName: "Layers", title: "Asset Mapping and Ownership Review", desc: "We document exactly what you hold and how it is structured. Ownership gaps and jurisdictional conflicts become visible before they become problems." },
      { iconName: "Layers", title: "Transfer Framework Design", desc: "We define who receives what, in what form, and under what conditions. Built around your specific family situation, not a standard model." },
      { iconName: "ShieldCheck", title: "Conditional and Phased Distribution", desc: "We design structured distribution mechanisms: phased releases, protected interests, or access tied to specific events or timelines." }
    ],
    featureEyebrow: "MAP. DESIGN. IMPLEMENT.",
    featureHeadline: "Transfer architecture built around your reality, not a template.",
    featureBody: "GrowValley has operated across complex, multi-jurisdictional structures and deployed capital through more than 500 projects. That operating history means we understand how transfer structures perform under real conditions, not just how they read on paper.",
    featureBullets: [
      "Full asset mapping across entities, jurisdictions, and ownership layers",
      "Transfer framework covering liquid, illiquid, and business interests",
      "Conditional and phased distribution design where required",
      "Cross-border coordination covering UAE, GCC, Europe, and Asia",
      "Shariah-compliant transfer design for Muslim clients and family offices",
      "Coordination brief for clean handoff to legal and fiduciary advisors"
    ],
    stats: [
      { num: "500+", desc: "Projects where capital structure and asset protection were real decisions" },
      { num: "$1B+", desc: "Capital deployed across structures we have helped design" },
      { num: "8+", desc: "Jurisdictions where GrowValley clients hold active structured positions" },
      { num: "Zero", desc: "Product commissions or conflicts of interest, on any engagement, ever" }
    ],
    whatsIncluded: {
      column1: [
        "Full asset inventory and ownership review",
        "Transfer framework design across all asset classes",
        "Beneficiary mapping and sequencing",
        "Conditional and phased distribution structure design"
      ],
      column2: [
        "Cross-border transfer coordination across UAE, GCC, Europe, and Asia",
        "Shariah-compliant transfer architecture where applicable",
        "Documentation brief for legal and fiduciary implementation",
        "Ongoing review as your asset base or family structure changes"
      ]
    },
    ctaHeadline: "Ready to start a conversation?",
    ctaBody: "Tell us what you hold, how it is currently structured, and what you want to happen when the time comes. We will map the gaps, design the framework, and tell you exactly what needs to be in place.",
    ctaButtonLabel: "CONTACT US",
    heroCtaLabel: "SPEAK TO AN EXPERT",
    overlayLabel: "WEALTH & SUCCESSION PLANNING / Wealth Transfer Architecture",
    categoryLabel: "Wealth & Succession Planning"
  },
  "shariah-compliant-succession": {
    heroHeadline: "Your faith defines the intention. The structure makes it hold.",
    heroSubheadline: "Islamic inheritance law defines the shares. It does not resolve the questions that arise when assets span multiple jurisdictions, business interests do not divide cleanly, or wealth includes instruments that require careful structuring. We design the complete framework, built to be enforceable and complete.",
    valuePropHeadline: "Your faith defines the intention.",
    valuePropAccent: "The structure makes it hold.",
    valuePropBody: "Faraid-compliant distribution logic across your actual asset base. Wasiyyah structuring for assets outside the faraid rules. Waqf design where endowment is part of the intention. Built around your specific situation, not a generic template.",
    problemHighlight: "IS YOUR SUCCESSION TRULY SHARIAH-COMPLIANT?",
    problemHeadline: "The intention to comply is not the same as a structure that achieves it.",
    problemBody: "Faraid specifies the shares. It does not resolve what happens when assets sit across three countries, a business interest cannot be divided without destroying its value, or wealth includes products that require Shariah screening before they can be distributed.\n\nMany families carry a sincere intention to comply but have no structure that actually achieves it. The result is ambiguity at the point of transfer, disagreement over what was intended, and assets passing in ways that do not reflect the family's values.\n\nWe design the complete framework to ensure your obligations are met and your legacy is protected.",
    problemBullets: [
      "Faraid-compliant distribution structure mapped across all asset classes and jurisdictions",
      "Wasiyyah design for assets and beneficiaries outside the faraid framework",
      "Waqf structure design for charitable and endowment purposes where required"
    ],
    problemImageText: "Is your succession truly Shariah-compliant?",
    howWeHelpSubtitle: "We build the structure. The intention was already there.",
    helpCards: [
      { iconName: "Layers", title: "Faraid Distribution Framework", desc: "We apply faraid principles across your actual asset base. Where assets do not divide simply, we design the mechanism that achieves the correct outcome." },
      { iconName: "ScrollText", title: "Wasiyyah and Discretionary Structuring", desc: "We structure the wasiyyah for assets and beneficiaries outside the faraid framework, respecting the one-third limit." },
      { iconName: "Building2", title: "Waqf and Endowment Design", desc: "Where a client wishes to establish a waqf, we define the structure, asset class, purpose, and governance for durability across generations." }
    ],
    featureEyebrow: "FARAID. WASIYYAH. WAQF.",
    featureHeadline: "Succession designed for clients who hold both faith and complexity.",
    featureBody: "GrowValley works with Muslim families and family offices across the GCC and MENA region. Shariah-compliant succession is not a single document or a box to check. It is a framework that must hold across assets, jurisdictions, and generations.",
    featureBullets: [
      "Faraid-compliant distribution logic across all asset classes and jurisdictions",
      "Wasiyyah structuring for discretionary bequests within permitted limits",
      "Waqf design for charitable and perpetual endowment structures",
      "Cross-border succession coordination covering UAE, GCC, and international jurisdictions",
      "Alignment with conventional legal structures in mixed-jurisdiction estates",
      "Coordination brief for handoff to Shariah-certified legal and fiduciary advisors"
    ],
    stats: [
      { num: "$150M+", desc: "Assets under active management and structuring" },
      { num: "$3B+", desc: "In revenue generated across our operating history" },
      { num: "500+", desc: "Projects built, funded, and structured across industries" },
      { num: "8+", desc: "Years managing wealth built by operators, not academics" }
    ],
    whatsIncluded: {
      column1: [
        "Faraid distribution review and structure design",
        "Asset mapping for Shariah-compliant distribution",
        "Wasiyyah design for discretionary bequests",
        "Waqf structure and governance design"
      ],
      column2: [
        "Cross-border coordination across UAE, GCC, and international jurisdictions",
        "Alignment with conventional legal structures in mixed-jurisdiction estates",
        "Coordination brief for Shariah-certified legal advisors",
        "Ongoing review as your assets or family structure evolves"
      ]
    },
    ctaHeadline: "Ready to start a conversation?",
    ctaBody: "Tell us about your estate, your family, and how you intend for your wealth to be distributed. We will review the current structure honestly, identify where the approach falls short, and design a framework that actually holds.",
    ctaButtonLabel: "CONTACT US",
    heroCtaLabel: "SPEAK TO AN EXPERT",
    overlayLabel: "WEALTH & SUCCESSION PLANNING / Shariah-Compliant Succession",
    categoryLabel: "Wealth & Succession Planning"
  },
  "family-governance": {
    heroHeadline: "The transfer is a moment. Governance is what comes after.",
    heroSubheadline: "Shared wealth without shared structure becomes contested wealth. We design the decision-making frameworks, role definitions, and governance systems that keep families aligned after the transfer, not just during it.",
    valuePropHeadline: "The transfer is a moment.",
    valuePropAccent: "Governance is what comes after.",
    valuePropBody: "Decision rights, family council structure, meeting cadence, and a dispute resolution protocol that resolves conflict without involving courts. The framework that keeps shared wealth working.",
    problemHighlight: "WHO DECIDES WHEN THERE IS NO CLEAR ANSWER?",
    problemHeadline: "Most succession plans stop at the transfer. The real test comes after.",
    problemBody: "A well-designed succession plan transfers wealth clearly. But once wealth is shared across a family, new questions emerge. Who makes investment decisions? Who has authority over the business? What happens when two family members disagree about a distribution?\n\nMost plans never address these questions. The result is conflict at exactly the point when the family is least prepared for it. We design the governance layer before those questions become disputes.",
    problemBullets: [
      "Decision rights and authority mapped clearly across family members and entities",
      "Family council structure and meeting cadence designed before they are needed",
      "A dispute resolution protocol that resolves conflicts before they escalate"
    ],
    problemImageText: "Who decides when there is no clear answer?",
    howWeHelpSubtitle: "Structure before the questions become conflicts.",
    helpCards: [
      { iconName: "Target", title: "Decision Rights and Authority Framework", desc: "We map who has authority over investment decisions, business oversight, and distributions. Clear, documented, and agreed before it is tested." },
      { iconName: "Users", title: "Family Council and Meeting Design", desc: "We design how family members convene, how decisions are made collectively, and how information flows across the family." },
      { iconName: "ShieldCheck", title: "Dispute Resolution Protocol", desc: "We design the mechanism for resolving disagreements before they escalate. Clear steps, agreed process, defined outcomes." }
    ],
    featureEyebrow: "RIGHTS. STRUCTURE. PROTOCOL.",
    featureHeadline: "Governance designed to hold across generations.",
    featureBody: "GrowValley has worked with business owners and families navigating the gap between personal wealth and shared family assets. Governance failures are rarely the result of bad intentions. They are the result of no agreed framework.",
    featureBullets: [
      "Decision rights mapping across family members, trustees, and structures",
      "Family council design: meeting structure, agenda, and voting",
      "Dispute resolution protocol covering all major conflict scenarios",
      "Family charter design for multi-generational governance",
      "Integration with existing trusts and legal arrangements",
      "Ongoing review as family membership and ownership evolve"
    ],
    stats: [
      { num: "500+", desc: "Projects where structure and governance were real decisions" },
      { num: "$1B+", desc: "Capital navigated across multi-family structures" },
      { num: "8+", desc: "Jurisdictions where clients hold active structured positions" },
      { num: "Zero", desc: "Product commissions or conflicts of interest, ever" }
    ],
    whatsIncluded: {
      column1: [
        "Decision rights mapping and authority framework",
        "Family council structure and meeting cadence design",
        "Voting and consensus protocol design",
        "Family charter and governance documentation"
      ],
      column2: [
        "Dispute resolution protocol covering major conflict scenarios",
        "Integration with existing trusts and legal arrangements",
        "Cross-border governance coordination where assets span jurisdictions",
        "Ongoing review as family structure or ownership changes"
      ]
    },
    ctaHeadline: "Ready to start a conversation?",
    ctaBody: "Tell us about your family, your assets, and how decisions currently get made. We will identify where the gaps are, design the framework that fills them, and make sure the structure holds when it is actually tested.",
    ctaButtonLabel: "CONTACT US",
    heroCtaLabel: "SPEAK TO AN EXPERT",
    overlayLabel: "WEALTH & SUCCESSION PLANNING / Family Governance",
    categoryLabel: "Wealth & Succession Planning"
  },
  "discretionary-mandate": {
    valuePropHeadline: "By the time you've approved it,",
    valuePropAccent: "the opportunity is already gone.",
    valuePropBody: "Waiting for approvals is a structural disadvantage built into most advisory relationships. Markets move fast. Opportunity doesn't wait for your sign-off.",
    problemHighlight: "Still approving every trade?",
    problemHeadline: "Advisory mandates cost you more than just time.",
    problemBody: "Every decision that requires your sign-off is a decision that could be late. Markets move fast. Waiting for approvals is a structural disadvantage built into most advisory relationships, and most clients don't realise it until something slips.\n\nA discretionary mandate changes the model. You agree the parameters once. We execute within them, continuously. Nothing gets delayed. Nothing gets missed.",
    problemBullets: [
      "Parameters set upfront, in writing, by you",
      "No approval cycles on day-to-day decisions",
      "Full accountability for execution sits with us"
    ],
    problemImageText: "Still approving every trade?",
    howWeHelpSubtitle: "Built for people who want results, not involvement in every move.",
    helpCards: [
      { iconName: "Briefcase", title: "Parameters You Control", desc: "Before we manage a single position, we document your risk profile, goals, and boundaries. The mandate is yours. We operate within it." },
      { iconName: "BarChart3", title: "Decisions Made in Time", desc: "We monitor your portfolio continuously and act when conditions require it. No delays, no approval cycles, no missed windows." },
      { iconName: "Layers", title: "Reporting You Can Read", desc: "Quarterly reports that show you exactly what happened, what changed, and why. No jargon. No padding." }
    ],
    featureEyebrow: "BUILT. MANAGED. REPORTED.",
    featureHeadline: "Agreed once. Executed continuously. Reviewed quarterly.",
    featureBody: "We've been on both sides of capital decisions. That operating experience is what we bring to every portfolio we manage on your behalf.",
    featureBullets: [
      "Mandate framework built around your situation, not a template",
      "No product commissions, no incentive to overtrade",
      "Senior-led management throughout, not delegated down",
      "Cross-asset view informed by real deployment experience",
      "Reports that show performance, allocation, and activity clearly",
      "Formal review every quarter, or sooner if your situation changes"
    ],
    stats: [
      { num: "$150M+", desc: "Assets under management" },
      { num: "Senior", desc: "Every mandate is managed at partner level" },
      { num: "100%", desc: "Fee-only. No commissions, ever" },
      { num: "Direct", desc: "One advisor. No handoffs." }
    ],
    whatsIncluded: {
      column1: [
        "Initial financial assessment",
        "Risk profiling session",
        "Mandate agreement documentation",
        "Portfolio construction and implementation"
      ],
      column2: [
        "Ongoing active portfolio management",
        "Quarterly performance and allocation reports",
        "Annual mandate review",
        "Direct senior advisor access throughout"
      ]
    },
    ctaHeadline: "Ready to start a conversation?",
    ctaBody: "Tell us about your situation. We'll tell you honestly whether a discretionary mandate is the right structure for you.",
    ctaButtonLabel: "SPEAK TO AN EXPERT"
  },
  "advisory-mandate": {
    valuePropHeadline: "Your wealth. Your call.",
    valuePropAccent: "Our expertise behind every move.",
    valuePropBody: "GrowValley's advisory mandate is built differently. Our leadership has managed billion-dollar portfolios, advised sovereign institutions, and built ventures from the ground up across the GCC.",
    problemHighlight: "Who's actually advising you?",
    problemHeadline: "Most advisors have never built what you're protecting.",
    problemBody: "The problem isn't access to financial advice — it's the quality of the thinking behind it. Generic recommendations, product-driven incentives, and advisors who've never operated a business at any real scale add up to counsel that sounds professional but costs you in ways that don't show up on a statement.\n\nGrowValley's advisory mandate is built differently. Our leadership has managed billion-dollar portfolios, advised sovereign institutions, and built ventures from the ground up across the GCC. When we sit alongside you, we're not reading from a playbook — we're drawing from a career of doing exactly what you're navigating.",
    problemBullets: [
      "Advice from operators who've run businesses, not just analysed them",
      "No product mandates. No quotas. No hidden incentives.",
      "Full decision authority stays with you at every stage"
    ],
    problemImageText: "Who's actually advising you?",
    howWeHelpSubtitle: "A thinking partner with a track record — not a relationship manager with a script.",
    helpCards: [
      { iconName: "LineChart", title: "Portfolio Review Grounded in Real Context", desc: "We review your holdings, allocation, and performance against what you're actually trying to achieve — not a generic benchmark. You leave every review knowing exactly where you stand and why." },
      { iconName: "ShieldCheck", title: "Risk Caught Before It Moves Against You", desc: "We identify concentration risk, liquidity gaps, and structural exposure early — before the market makes the decision for you. This is built into the mandate from the start, not flagged after the fact." },
      { iconName: "Network", title: "Opportunities From a Network Most Can't Access", desc: "GrowValley's leadership is embedded across GCC founder networks, institutional investment circles, and sovereign-level relationships. Relevant opportunities reach you before they reach the market." }
    ],
    featureEyebrow: "ADVISE. ASSESS. ALIGN.",
    featureHeadline: "Counsel built around your convictions.",
    featureBody: "GrowValley's co-founders bring over 50 years of combined experience across institutional investment, venture building, and sovereign advisory. This isn't a firm that learned wealth management from a textbook — it was built by people who've sat in the rooms where capital decisions actually get made.",
    featureBullets: [
      "Independent advice with zero product distribution conflicts",
      "Leadership with active board seats across GCC investment portfolios",
      "Direct access to a network spanning sovereign funds, family offices, and founder ecosystems",
      "Full documentation of every recommendation and the rationale behind it",
      "Macro and sector intelligence filtered to what's relevant to your specific position",
      "Advisory structure tailored to your goals — not a packaged tier"
    ],
    stats: [
      { num: "50+", desc: "Years of combined leadership experience across the founding team" },
      { num: "Independent", desc: "No proprietary products. No distribution targets. Advice that answers to you only." },
      { num: "Regional Depth", desc: "Active relationships across sovereign funds, family offices, and institutional investors in the GCC" },
      { num: "Written", desc: "Every recommendation comes with documented rationale — not just a phone call" }
    ],
    whatsIncluded: {
      column1: [
        "Dedicated relationship manager, single point of contact",
        "Regular portfolio reviews with written outcome summaries",
        "Risk and concentration analysis updated each review cycle",
        "Macro and sector briefings filtered to your actual holdings"
      ],
      column2: [
        "On-demand advisory access between scheduled sessions",
        "Opportunity alerts drawn from GrowValley's active network",
        "Full documentation of every recommendation and rationale given",
        "Annual mandate review against your original objectives"
      ]
    },
    ctaHeadline: "Ready to start a conversation?",
    ctaBody: "An advisory mandate starts with one conversation — your current position, where you want to go, and whether GrowValley is the right fit. No pitch decks. No obligations. Just a direct discussion with someone who's been in the room before.",
    ctaButtonLabel: "TALK TO AN ADVISOR"
  },
  "financial-planning": {
    valuePropHeadline: "Most wealth is built without a plan.",
    valuePropAccent: "Most wealth is lost the same way.",
    valuePropBody: "The real cost of poor financial planning is not a single bad investment. It is a decade of decisions that never connected: retirement that arrives underfunded, a business exit with no structure ready, wealth that dissolves in the next generation because no one drew a map.",
    problemHighlight: "No plan. No direction.",
    problemHeadline: "Money without direction works against itself.",
    problemBody: "The real cost of poor financial planning is not a single bad investment. It is a decade of decisions that never connected: retirement that arrives underfunded, a business exit with no structure ready, wealth that dissolves in the next generation because no one drew a map.\n\nWe build that map. Your goals, your timeline, your actual financial position. Then we connect every decision to a specific outcome so nothing is left to chance or good intentions.",
    problemBullets: [
      "Retirement, education, and succession goals tied to real numbers and timelines",
      "Strategies aligned to your goals, not to what is easiest to sell",
      "One team coordinating every piece of the picture"
    ],
    problemImageText: "No plan. No direction.",
    howWeHelpSubtitle: "Every client gets a plan built around their situation, not a standard template.",
    helpCards: [
      { iconName: "Target", title: "Goals defined with precision", desc: "We start by getting specific. Retirement age, education costs, succession timing, liquidity needs. Vague goals produce strategies that drift. Precise ones produce decisions that compound." },
      { iconName: "Route", title: "Strategy built backwards from the outcome", desc: "Once your goals are defined, we build the investment strategy around them. Every allocation connects back to a specific milestone and a specific timeline, not to what performed well last quarter." },
      { iconName: "RefreshCw", title: "A plan that updates as your life does", desc: "Goals shift. Markets move. Circumstances change. We review and adjust your plan as your situation evolves so the strategy stays accurate throughout, not just at the start." }
    ],
    featureEyebrow: "MAP. BUILD. PROTECT.",
    featureHeadline: "A plan built around your life, not a template.",
    featureBody: "GrowValley's financial planning practice is built by people who have deployed capital across real businesses and real markets. That operating background changes how we think about timelines, risk, and what a plan that actually holds up looks like.",
    featureBullets: [
      "Goal-based planning across retirement, education, succession, and liquidity events",
      "Full financial position intake covering assets, liabilities, income, and future obligations",
      "No product commissions and no incentivised recommendations, ever",
      "Investment strategies selected for fit, not for margin",
      "Regular plan reviews tied to life milestones and market conditions",
      "Coordination with structuring, estate planning, and investment teams where needed"
    ],
    stats: [
      { num: "$150M+", desc: "Assets under management across client portfolios" },
      { num: "$3B+", desc: "In revenue generated through the GrowValley network" },
      { num: "500+", desc: "Projects deployed across real businesses and capital structures" }
    ],
    whatsIncluded: {
      column1: [
        "Full financial position review covering assets, liabilities, income, and obligations",
        "Goal mapping with specific milestones, amounts, and timelines",
        "Investment strategy aligned to each goal's horizon and risk tolerance",
        "Retirement planning with income modelling and drawdown structure"
      ],
      column2: [
        "Education and succession funding analysis",
        "Coordination with wealth structuring and estate planning where relevant",
        "Ongoing plan reviews as your situation evolves",
        "Clear documentation of every decision and the reasoning behind it"
      ]
    },
    ctaHeadline: "Ready to start a conversation?",
    ctaBody: "Financial planning works best before the pressure arrives. Reach out and we will begin with a direct conversation about where you are, where you want to be, and what it will take to bridge the gap.",
    heroCtaLabel: "SPEAK TO AN EXPERT",
    problemCtaLabel: "LET'S TALK",
    featureCtaLabel: "ENQUIRE ABOUT THIS SERVICE",
    bottomCtaLabel: "CONTACT US",
    overlayLabel: "OUR EXPERTISE"
  },
  "private-equity": {
    valuePropHeadline: "The highest-returning private equity deals",
    valuePropAccent: "close within networks, not on platforms.",
    valuePropBody: "Access to established businesses raising growth or buyout capital. We focus on fundamentals. Cash flow. Positioning. Realistic exit timelines. Select clients get direct access to growth-stage opportunities, vetted by a team that has operated inside over 500 businesses.",
    problemHighlight: "PRIVATE EQUITY ACCESS",
    problemHeadline: "The best private deals don't have an application process.",
    problemBody: "Private equity returns are distributed by access, not merit. The deals that perform sit inside a narrow circuit of relationships. By the time an opportunity reaches a public platform, the founding terms are gone and the early tranches are filled.\n\nMost wealth managers give you what they can access. GrowValley gives you what we're inside. Our network is built on 500+ projects and $1B+ in capital deployed across the Middle East, Europe, and Asia. We bring clients into those conversations before they become public.",
    problemBullets: [
      "Access to established businesses raising growth or buyout capital",
      "Direct network relationships with deal principals",
      "Exit-focused vetting by experienced operators"
    ],
    problemImageText: "Why do the best deals always go to someone else?",
    howWeHelpSubtitle: "We bring clients into private equity the way insiders access them.",
    helpCards: [
      { iconName: "Network", title: "First access, not filtered leftovers", desc: "Deal flow reaches clients directly from our network, not after it's been packaged. Direct access to growth equity and buyout opportunities." },
      { iconName: "ShieldCheck", title: "Vetting that goes past the model", desc: "Every deal goes through people who have built, funded, and exited businesses themselves. You get a view that financial analysis alone doesn't give you." },
      { iconName: "Target", title: "Structured around how you get out", desc: "Entry terms matter. Exit terms matter more. We evaluate deal structure, liquidity profile, and return pathway before any opportunity is presented." }
    ],
    featureEyebrow: "SOURCE. VET. STRUCTURE.",
    featureHeadline: "Deal access built on operating history, not just relationships.",
    featureBody: "GrowValley is the wealth arm of a group that has deployed over $1B in capital and generated $3B+ in revenue across 500+ businesses. That operating track record is what makes our deal vetting different. We know what to look for and what to walk away from.",
    featureBullets: [
      "Direct deal flow from private equity networks across the Middle East, Europe, and Asia",
      "Access to growth equity and buyout opportunities that don't circulate publicly",
      "In-house vetting by operators who have built and exited businesses",
      "Structural review covering entry terms, dilution, and exit pathway",
      "No product shelf, no placement fees: every deal is evaluated on its own merits",
      "Full conflict-free mandate"
    ],
    stats: [
      { num: "$1B+", desc: "Capital deployed across operating businesses and ventures" },
      { num: "500+", desc: "Projects built, funded, and operated through the network" },
      { num: "$3B+", desc: "Revenue generated by businesses we've worked inside" },
      { num: "Global", desc: "Deal flow sourced across Middle East, Europe, and Asia" }
    ],
    whatsIncluded: {
      column1: [
        "Curated private equity deal flow",
        "Growth and buyout stage access",
        "Direct principal relationships",
        "Geographic coverage: ME, Europe, and Asia"
      ],
      column2: [
        "Operator-led due diligence review",
        "Deal structure analysis (dilution, control, exit)",
        "Minimum ticket guidance",
        "Ongoing visibility from entry through to exit"
      ]
    },
    ctaHeadline: "Ready to start a conversation?",
    ctaBody: "Private market access starts with understanding your capital position and what you're actually trying to achieve. Reach out and we'll give you a direct view of what's currently in our deal pipeline and whether it fits.",
    ctaButtonLabel: "CONTACT US",
    heroCtaLabel: "SPEAK TO AN EXPERT",
    overlayLabel: "PRIVATE MARKET ACCESS / Private Equity",
    categoryLabel: "Private Market Access"
  },
  "venture-capital": {
    heroHeadline: "By the time a deal is publicly available, the return has usually been priced out.",
    heroSubheadline: "We source private company opportunities early, because we've been operating inside the same markets long enough to know where the real ones surface.",
    valuePropHeadline: "We evaluate deals the way operators do,",
    valuePropAccent: "not analysts.",
    valuePropBody: "Most wealth firms pass VC opportunities to clients based on fund reputation and third-party write-ups. We work differently.\n\nGrowValley Group has spent years building, funding, and scaling businesses across industries. Over 500 projects. $3B+ in revenue generated. $1B+ in capital deployed into real operating situations. That history changes what we see in a deal. It also changes what we walk away from.",
    problemHighlight: "SEED TO PRE-IPO",
    problemHeadline: "Seed to pre-IPO. Private by design.",
    problemBody: "Through the GrowValley deals desk, select clients access high-growth private companies at stages where the return is still available. Early growth rounds in technology, fintech, healthtech, and B2B software. Late-stage and pre-IPO situations where the path to liquidity is clear and the terms are structured to make sense on the exit, not just on paper at entry.\n\nThese deals come through relationships built inside the same ecosystems we've operated within. They don't circulate publicly. That's the point.",
    problemBullets: [
      "Access to high-growth private companies at stages where return is still available",
      "Direct deal flow from relationships built inside operating ecosystems",
      "Deals that don't circulate publicly by design"
    ],
    problemImageText: "Seed to pre-IPO.",
    howWeHelpSubtitle: "Direct access. Deal by deal.",
    helpCards: [
      { iconName: "Zap", title: "Direct Execution", desc: "You're not buying into a pooled vehicle. We execute cleanly on your decision." },
      { iconName: "Target", title: "Exit Alignment", desc: "We structure terms to make sense on the exit, not just the entry story." },
      { iconName: "ShieldCheck", title: "Operator Vetting", desc: "Reviewed by people who've actually run businesses, not just analysts." }
    ],
    featureEyebrow: "HOW WE VET",
    featureHeadline: "We know what a well-dressed bad deal looks like.",
    featureBody: "Every opportunity is reviewed by people who've actually run businesses, not just analysts working from pitch decks. We look at what the capital actually did. What the unit economics say once the optimistic assumptions are stripped out. What the exit looks like in a flat scenario, not just the upside one.\n\nIf it doesn't hold up under that, it doesn't reach you.",
    featureBullets: [
      "Analysis of actual capital utility versus projected milestones",
      "Unit economics stress-testing (stripping optimistic assumptions)",
      "Flat-scenario exit modelling (downside protection)",
      "Cap table integrity and founder alignment review",
      "Direct access to companies we have operating context within",
      "Full transparency on thesis, terms, and risk profile"
    ],
    stats: [
      { num: "$1B+", desc: "Capital deployed into real operating situations" },
      { num: "500+", desc: "Projects built, funded, and operated through the group" },
      { num: "$3B+", desc: "Revenue generated by businesses we've worked inside" },
      { num: "Global", desc: "Venture deals sourced across ME, Europe, and Asia" }
    ],
    whatsIncluded: {
      column1: [
        "Curated venture capital deal flow",
        "Pre-IPO and early-stage access",
        "Founders and lead investor relationships",
        "Geographic coverage: ME, Europe, and Asia"
      ],
      column2: [
        "Operator-led due diligence review",
        "Deal structure analysis (dilution, exit)",
        "Minimum ticket guidance",
        "Ongoing visibility from entry through to exit"
      ]
    },
    ctaHeadline: "You've built capital worth deploying. It should go into deals that are actually worth it.",
    ctaBody: "Reach out and we'll give you a direct view of what's currently in our venture capital pipeline and whether it fits your portfolio.",
    ctaButtonLabel: "Let's Talk About Your Capital",
    heroCtaLabel: "SPEAK TO AN EXPERT",
    overlayLabel: "PRIVATE MARKET ACCESS / Venture Capital",
    categoryLabel: "Private Market Access"
  },
  "real-estate-access": {
    valuePropHeadline: "The right property. The right market.",
    valuePropAccent: "Evaluated by people who've deployed real capital into both.",
    valuePropBody: "We source property deals that don't circulate publicly, structure them around what you walk away with, and give you access to markets we know from the inside. No listings. No queues. No second-hand opportunities.",
    problemHighlight: "WHERE ARE THE REAL DEALS?",
    problemHeadline: "By the time it's listed, the best entry is already gone.",
    problemBody: "Quality real estate moves through relationships, not platforms. The assets worth holding are sourced, structured, and allocated before they appear in any brochure. If your access starts at the listing stage, you are choosing from what others passed on.\n\nGrowValley has spent years building direct relationships with real estate specialists, developers, and operators across the Middle East, Western Europe, and Asia. We use that network to find assets before they circulate widely and structure each deal around the numbers that matter on the way out.",
    problemBullets: [
      "Access to off-market assets in markets we understand directly",
      "Deal structures built around your exit, not just your entry",
      "Direct developer relationships for first access to select projects"
    ],
    problemImageText: "Where are the real deals?",
    howWeHelpSubtitle: "We do the hard work before the deal reaches you.",
    helpCards: [
      { iconName: "Search", title: "Off-Market Deal Sourcing", desc: "We source property opportunities through relationships built over years across three regions. You see deals that never appear on platforms or in sales materials." },
      { iconName: "Layers", title: "Deal Structuring for Returns", desc: "Every deal is structured to maximise what you walk away with at exit. We work through ownership vehicles, financing, and entry terms before you commit to anything." },
      { iconName: "Key", title: "Direct Developer Access", desc: "In select markets, we hold direct relationships with developers that put you ahead of the market, not behind it. First access to marquee projects before they are offered publicly." }
    ],
    featureEyebrow: "SOURCE. STRUCTURE. DELIVER.",
    featureHeadline: "Operator knowledge applied to every deal.",
    featureBody: "GrowValley has operated, funded, and built businesses across three regions. That history shapes how we evaluate real estate: not as instruments on a spreadsheet, but as assets that need to make sense on the ground, at the entry price, and at the exit.",
    featureBullets: [
      "Off-market sourcing across the Middle East, Western Europe, and Asia",
      "Specialist partner network with verified, market-specific track records",
      "Deal structuring focused on exit value, not just acquisition price",
      "Direct developer relationships for pre-market project access",
      "Cross-border ownership vehicle selection and structuring guidance",
      "Deal analysis from a team that has deployed real capital, not just modelled it"
    ],
    stats: [
      { num: "$150M+", desc: "Assets under active management across client portfolios" },
      { num: "$3B+", desc: "In revenue generated through capital deployed by GrowValley Group" },
      { num: "$1B+", desc: "In capital funded across 500+ real projects and ventures" },
      { num: "3", desc: "Regions covered: Middle East, Western Europe, and Asia" }
    ],
    whatsIncluded: {
      column1: [
        "Off-market deal pipeline access",
        "Specialist partner introductions with verified regional track records",
        "Asset evaluation and due diligence review",
        "Ownership vehicle recommendations by market and jurisdiction"
      ],
      column2: [
        "Deal structure design tailored to your investment position",
        "Entry and exit term review before any commitment is made",
        "Direct developer first-access in select markets",
        "Ongoing deal flow updates as new opportunities are identified"
      ]
    },
    ctaHeadline: "Ready to start a conversation?",
    ctaBody: "Tell us where you are looking to invest and what the deal needs to deliver. We will tell you honestly what is available through our network and whether it is the right fit for your position.",
    ctaButtonLabel: "CONTACT US",
    heroCtaLabel: "SPEAK TO AN EXPERT",
    overlayLabel: "PRIVATE ACCESS / Real Estate Access",
    categoryLabel: "Private Market Access"
  },
  "family-office-setup-and-incubation": {
    valuePropHeadline: "Your family's wealth has reached the point where it needs its own structure.",
    valuePropAccent: "We build it.",
    valuePropBody: "A Family Office is not just a legal entity. It is an operating system for your family's wealth. Done properly, it gives you control, continuity, and clarity across every financial decision, every generation, and every jurisdiction you operate in. Done poorly, it adds cost and bureaucracy with none of the benefit.\n\nThe difference is usually how it was designed, not how it is run.",
    problemHighlight: "WHO THIS IS FOR",
    problemHeadline: "This is the right move when:",
    problemBody: "A Family Office is the right move for families navigating multi-jurisdictional complexity, advisor fragmentation, or major transitions.",
    problemBullets: [
      "Your wealth spans multiple assets, entities, or jurisdictions with no central coordination",
      "You have advisors who do not talk to each other",
      "A transition is approaching: generational, transactional, or structural, and the current setup is not ready for it",
      "You have managed things informally for too long and the informality is starting to cost you"
    ],
    problemImageText: "Who this is for",
    howWeHelpSubtitle: "From blank page to operational structure. We take a Single Family Office from concept to operation. That means six things, in this order.",
    featureEyebrow: "WHAT MAKES THIS WORK",
    featureHeadline: "We have been on both sides of a family office setup. That changes what we prioritise.",
    featureBody: "Most advisors who design family offices have studied them. We have operated inside them, built businesses alongside them, and watched what goes wrong when governance is an afterthought. The technical elements: entities, structures, reporting, are the easy part. The part that determines whether a family office actually works is the governance model, particularly how it handles disagreement, succession, and the moment when the founding generation is no longer the decision-maker. That is where most setups fail. It is where we start.",
    featureBullets: [],
    ctaHeadline: "Setting up a Family Office is a once-in-a-generation decision. Let's design it properly.",
    ctaButtonLabel: "LET'S TALK ABOUT YOUR FAMILY OFFICE",
    categoryLabel: "Family Office Services",
    workflow: [
      { title: "Mandate definition", desc: "We start by defining what the office is actually for. Investment management. Succession. Philanthropy. Operating asset oversight. Or a combination. Scope drives every decision that follows, and most families skip this step." },
      { title: "Governance design", desc: "We design the governance model: who sits on the family investment committee, how decisions are made, what is delegated, and how conflicts between family members are handled before they happen rather than after." },
      { title: "Operating model and staffing", desc: "We define whether the office is fully staffed, partially staffed, or built on a managed-service model with external providers. We help you decide what to build internally and what to outsource permanently." },
      { title: "Entity and structure setup", desc: "We coordinate with legal and tax advisors to establish the right entities: holding companies, trusts, foundations, or a combination, depending on jurisdiction, tax profile, and succession intent. We do not draft the documents. We make sure the right people do, with the right brief." },
      { title: "Reporting infrastructure", desc: "We implement a consolidated reporting framework so the family sees everything in one place from day one. This is often the most neglected part of the setup. We treat it as the most important." },
      { title: "Incubation and handover", desc: "We stay through the first full operating cycle. We troubleshoot. We refine. When the structure is running properly, we hand over with full documentation and a governance calendar that keeps it on track without us." }
    ]
  },
  "wealth-consolidation-reporting": {
    valuePropHeadline: "Most wealthy families do not have a wealth problem.",
    valuePropAccent: "They have a visibility problem.",
    valuePropBody: "Assets spread across banks, custodians, asset managers, and private deals. Statements arriving in four different formats on four different schedules. No single document showing the full picture.\n\nDecisions made without complete information are not just uncomfortable. They are expensive.\n\nWe fix the visibility problem first.",
    problemHighlight: "EVERY ASSET CLASS",
    problemHeadline: "Everything in scope. Nothing left out.",
    problemBody: "A proper consolidated view covers every asset class across every entity and geography:",
    problemBullets: [
      "Listed and unlisted equities",
      "Fixed income and private debt positions",
      "Real estate holdings: direct and through vehicles",
      "Private equity and venture capital positions",
      "Cash and treasury positions across banks",
      "Insurance policies and structured products",
      "Collectibles, art, and other non-financial assets"
    ],
    problemImageText: "Everything in scope.",
    howWeHelpSubtitle: "Four steps. One view at the end.",
    featureEyebrow: "WHY THIS MATTERS",
    featureHeadline: "You cannot manage what you cannot see.",
    featureBody: "Fragmented visibility is one of the most consistent sources of wealth erosion. It creates blind spots in risk management, inconsistencies in estate planning, and gaps in succession documents. When the time comes for a transaction or a generational transfer, incomplete information is the issue that delays everything and costs the most.\n\nConsolidation is not an administrative task. It is a governance decision that makes every other financial decision more defensible.",
    featureBullets: [],
    ctaHeadline: "Let's start with a full picture.",
    ctaButtonLabel: "Let's Talk About Your Family Office",
    categoryLabel: "Family Office Services",
    workflow: [
      { title: "Asset inventory", desc: "We map every holding across every custodian, entity, and geography. This is often the first time the full picture has been assembled in one place. The exercise itself surfaces gaps: missing documents, outdated structures, untracked positions." },
      { title: "Valuation methodology", desc: "We agree on how each asset class is valued, on what basis, and how often. Illiquid assets require different treatment than listed securities. Getting this right at the start prevents disputes and discrepancies later." },
      { title: "Reporting design", desc: "We build a reporting format designed for how the family actually uses information: a summary view for the principal, detailed attribution for the investment committee, and compliance-ready outputs for legal and tax advisors." },
      { title: "Ongoing cadence", desc: "We establish a reporting rhythm: monthly, quarterly, or event-triggered. Reports arrive on a fixed schedule in a format the family has approved. There are no surprises in how the information is presented." }
    ]
  },
  "ma-and-ipo-advisory": {
    valuePropHeadline: "You built the business.",
    valuePropAccent: "We have been on both sides of that decision.",
    valuePropBody: "Selling a business is not a financial event. It is one of the most complex decisions a family makes, with implications across tax, succession, governance, and what the next generation inherits: assets, or something more complicated.\n\nAn IPO compounds the complexity. More scrutiny, more permanence, more preparation required, and a public disclosure process that does not pause while the family figures out what it wants.\n\nWe do not replace your investment bank or your lawyers. We sit alongside you with an operating perspective they do not have, and we make sure the decisions being made actually serve the family, not just the transaction.",
    problemHighlight: "WHO THIS IS FOR",
    problemHeadline: "This is the right conversation when:",
    problemBody: "",
    problemBullets: [
      "You have a family business and a transaction is being considered, whether buyer-led or owner-initiated",
      "You have received an unsolicited offer and need an independent perspective before engaging",
      "A listing is being planned and the family governance is not yet ready for the scrutiny that follows",
      "The transaction advisors are aligned on deal terms but no one is focused on what the family actually wants out of it"
    ],
    problemImageText: "Who this is for",
    howWeHelpSubtitle: "Across the full lifecycle, not just the moment of signing.",
    featureEyebrow: "FOR IPO SPECIFICALLY",
    featureHeadline: "Going public changes the family's relationship with information. Permanently.",
    featureBody: "An IPO is not a larger version of a private sale. The disclosure requirements, the lock-up structures, the ongoing governance obligations, and the family dynamics around a public entity are all different categories of challenge.\n\nWe work with families preparing for a listing on three things: governance readiness for the board and public reporting obligations, family cohesion around what the IPO means for control and succession, and alignment with the investment bank on narrative versus the actual operating reality of the business.\n\nWe do not run the listing. We make sure the family is prepared for what comes after it.",
    featureBullets: [],
    ctaHeadline: "The best transactions start well before the term sheet arrives.",
    ctaButtonLabel: "Let's Talk About Your Situation",
    categoryLabel: "Family Office Services",
    workflow: [
      {
        title: "Pre-transaction",
        desc: "This is where the most important work happens. We start with a readiness assessment: Is the business ready? Is the structure clean? Is the family governance in place? We also align family objectives early to resolve misalignments before advisors are selected."
      },
      {
        title: "During transaction",
        desc: "We act as a thought partner through negotiation, translating advisor recommendations and stress-testing them against original family objectives. We review deal terms with an operator's perspective and keep succession planning aligned in real time."
      },
      {
        title: "Post-transaction",
        desc: "Liquidity creates its own set of decisions. We work on capital redeployment planning, governance adjustment for the new structure, and integration of the transaction outcome into the broader Family Office mandate."
      }
    ]
  }
};

const UNSPLASH_IMAGES: Record<string, string> = {
  "discretionary-mandate": "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1400&auto=format&fit=crop",
  "advisory-mandate": "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop",
  "financial-planning": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400&auto=format&fit=crop",
};

export default function ServicePageContent({ service }: { service: ServiceDetail }) {
  if (!service) return null;

  const content = servicePageContent[service.slug];
  const img = UNSPLASH_IMAGES[service.slug] ?? "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop";

  return (
    <main>
      {/* ── 1. Hero Section (breadcrumb + 50/50 split, contact page pattern) ── */}
      <section className={styles.heroSection}>
        <div className="container">
          {/* Breadcrumb — same pattern as Contact page */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight className={styles.separator} size={14} />
            <Link href="/our-capabilities">Our Capabilities</Link>
            <ChevronRight className={styles.separator} size={14} />
            <Link href={`/our-capabilities/${service.category.toLowerCase().replace(/\s+/g, '-')}`}>
              {content.categoryLabel || service.category}
            </Link>
            <ChevronRight className={styles.separator} size={14} />
            <span className={styles.current}>{service.title}</span>
          </nav>

          {/* 50/50 Hero Split */}
          <div className={styles.heroSplit}>
            <div className={styles.heroLeft}>
              <h1 className={content.heroHeadline && content.heroHeadline.length > 50 ? styles.longHeadline : ""}>
                {content.heroHeadline || service.title}
              </h1>
              <p>{content.heroSubheadline || service.description}</p>
              <Link href="/contact">
                <Button size="lg">{content.heroCtaLabel || content.ctaButtonLabel || "SPEAK TO AN EXPERT"}</Button>
              </Link>
            </div>
            <div className={styles.heroRight}>
              <img src={img} alt={service.title} />
              <div className={styles.heroRightOverlay} />
              <div className={styles.heroCaption}>
                <div className={styles.overlayBreadcrumb}>
                  <span className={styles.categoryPart}>{content.categoryLabel || service.category}</span>
                  <span className={styles.separatorPart}> / </span>
                  <span className={styles.titlePart}>{service.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Value Prop: 2-column text ────────── */}
      <section className={styles.valueProp}>
        <div className="container">
          <div className={styles.vpGrid}>
            <div className={styles.vpLeft}>
              <h2>
                {content.valuePropHeadline}{" "}
                <em>{content.valuePropAccent}</em>
              </h2>
            </div>
            <div className={styles.vpRight}>
              <p>{content.valuePropBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Workflow Section (Optional) ────────── */}
      {content.workflow && (
        <section className={styles.howWeHelp}>
          <div className="container">
            <div className={styles.hwHead}>
              <h2>What we do</h2>
              <p>{content.howWeHelpSubtitle}</p>
            </div>
            <div className={styles.processGrid}>
              {content.workflow.map((step, i) => (
                <div key={i} className={styles.processStep}>
                  <div className={styles.stepNumber}>{i + 1}</div>
                  <div className={styles.stepContent}>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. Problem Section: split card ─────── */}
      <section className={styles.problemSection}>
        <div className="container">
          <div className={styles.problemCard}>
            <div className={styles.problemImageCol}>
              <img src={img} alt={service.title} />
              <div className={styles.problemHighlight}>
                <strong>{content.problemImageText || content.problemHighlight}</strong>
                <span className={styles.underlineAccent} />
              </div>
            </div>
            <div className={styles.problemContent}>
              <h3>{content.problemHeadline}</h3>
              <p>{content.problemBody}</p>
              <ul>
                {content.problemBullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <Link href="/contact">
                <Button variant="outline">{content.problemCtaLabel || content.ctaButtonLabel || "LET'S TALK"}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. How We Help (Hidden if Workflow exists) ── */}
      {!content.workflow && (
        <section className={styles.howWeHelp}>
          <div className="container">
            <div className={styles.hwHead}>
              <h2>How we help</h2>
              <p>{content.howWeHelpSubtitle}</p>
            </div>
            <div className={styles.hwGrid}>
              {content.helpCards?.map((card, i) => {
                const Icon = iconMap[card.iconName] || Briefcase;
                return (
                  <div key={i} className={styles.hwCard}>
                    <div className={styles.hwIcon}>
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. Feature Showcase: left visual, right content ── */}
      {content.featureHeadline && (
        <section className={styles.featureShowcase}>
          <div className="container">
            <div className={styles.fsGrid}>
              <div className={styles.fsVisual}>
                <img src={img} alt={service.title} />
                <div className={styles.fsVisualPattern} />
              </div>
              <div className={styles.fsContent}>
                <span className={styles.fsEyebrow}>{content.featureEyebrow}</span>
                <h2>{content.featureHeadline}</h2>
                <p>{content.featureBody}</p>
                <ul>
                  {content.featureBullets && content.featureBullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <Link href="/contact">
                  <Button variant="outline">{content.featureCtaLabel || content.ctaButtonLabel || "Enquire about this service"}</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 6. Stats: "You're in good hands" ────── */}
      {content.stats && content.stats.length > 0 && (
        <section className={styles.statsSection}>
          <div className="container">
            <div className={styles.statsHead}>
              <h2>You&apos;re in good hands</h2>
            </div>
            <div className={styles.statsGrid}>
              {content.stats.map((s, i) => (
                <div key={i} className={styles.statCard}>
                  <span className={styles.statNum}>{s.num}</span>
                  <p className={styles.statDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 7. What's Included: left list, right image ── */}
      {content.whatsIncluded && (
        <section className={styles.whatsIncluded}>
          <div className="container">
            <div className={styles.wiCard}>
              <div className={styles.wiContent}>
                <h3>What&apos;s included with GrowValley&apos;s {service.title}</h3>
                <p className={styles.wiSubtext}>Everything required to manage your portfolio properly, from day one.</p>
                <div className={styles.wiGrid}>
                  <ul>
                    {content.whatsIncluded.column1.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <ul>
                    {content.whatsIncluded.column2.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.wiImage}>
                <img src={img} alt={service.title} />
                <div className={styles.wiImageOverlay} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 8. CTA Banner ──────────────────────── */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2>{content.ctaHeadline || "Ready to start a conversation?"}</h2>
            <p>
              {content.ctaBody || "Our advisors are ready to discuss your specific requirements with discretion and depth."}
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">{content.bottomCtaLabel || content.ctaButtonLabel || "CONTACT US"}</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
