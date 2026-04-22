"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { 
  Building2, BarChart3, Heart, Briefcase, Globe, Palette, 
  Zap, Users, ShieldCheck, Layers, ScrollText, Plane 
} from "lucide-react";
import { ServiceDetail } from "@/config/services";
import { Button } from "@/components/ui/Button";
import styles from "./ServicePage.module.scss";

const iconMap: Record<string, any> = {
  Building2, BarChart3, Heart, Briefcase, Globe, Palette,
  Zap, Users, ShieldCheck, Layers, ScrollText, Plane
};

// Per-service content blocks
const servicePageContent: Record<string, {
  valuePropHeadline: string;
  valuePropAccent: string;
  valuePropBody: string;
  problemHighlight: string;
  problemHeadline: string;
  problemBody: string;
  problemBullets: string[];
  howWeHelpSubtitle: string;
  helpCards: { iconName: string; title: string; desc: string }[];
  featureEyebrow: string;
  featureHeadline: string;
  featureBody: string;
  featureBullets: string[];
  stats: { num: string; desc: string }[];
  whatsIncludedItems: string[];
}> = {
  "single-family-office-setup": {
    valuePropHeadline: "One structure. One vision. Yours,",
    valuePropAccent: "built to endure.",
    valuePropBody: "Establishing a family office is a statement of permanence. It signals that your family intends to govern its wealth with the same discipline applied to building it. We design the governance architecture, select the service providers, and stand up the entire operation — so you can focus on what matters.",
    problemHighlight: "Fragmented wealth governance?",
    problemHeadline: "Complexity is the enemy of wealth preservation.",
    problemBody: "When advisors, accountants, and investment managers operate in silos, gaps emerge. Oversight fails. Costs compound. A properly constituted family office eliminates that fragmentation.",
    problemBullets: ["Disjointed reporting across advisors", "No single accountability point", "Governance gaps compound over time"],
    howWeHelpSubtitle: "The smart way to govern complex wealth",
    helpCards: [
      { iconName: "Building2", title: "Governance Architecture", desc: "Custom frameworks built around your family's values, legacy goals, and risk posture." },
      { iconName: "Users", title: "Service Provider Selection", desc: "We curate the right accountants, lawyers, and investment teams — and manage them on your behalf." },
      { iconName: "ShieldCheck", title: "Operational Excellence", desc: "Policies, processes, and controls that protect your assets and your family's privacy." }
    ],
    featureEyebrow: "One framework to give you complete control",
    featureHeadline: "Structure. Govern. Protect.",
    featureBody: "GrowValley's family office setup process is built on decades of experience across jurisdictions. We handle the complexity so your family doesn't have to.",
    featureBullets: ["Custom investment policy statements", "Board and committee governance design", "Consolidated reporting infrastructure", "Staff hiring and oversight", "Technology stack selection", "Annual governance reviews"],
    stats: [
      { num: "30+", desc: "Family offices established across jurisdictions" },
      { num: "100%", desc: "Custom-built for each family mandate" },
      { num: "3–6", desc: "Months from brief to operational" },
      { num: "1", desc: "Dedicated GrowValley relationship lead throughout" }
    ],
    whatsIncludedItems: ["Legal structure review", "Governance framework design", "Service provider selection", "Staff recruiting support", "Consolidated reporting setup", "Technology platform selection", "Annual review process", "Fiduciary oversight"]
  },
  "wealth-consolidation-reporting": {
    valuePropHeadline: "Everything, everywhere, at once —",
    valuePropAccent: "with no blind spots.",
    valuePropBody: "Wealth spread across banks, brokers, real estate, and private holdings is difficult to see clearly. We aggregate, reconcile, and present a single picture of your net worth — updated, accurate, and actionable.",
    problemHighlight: "Scattered assets?",
    problemHeadline: "What you can't see, you can't protect.",
    problemBody: "When assets are held across multiple institutions and jurisdictions, reporting lags. Risk concentrations go undetected. Tax exposure builds silently. We eliminate the blind spots.",
    problemBullets: ["No unified view of net worth", "Multiple custodian statements to reconcile", "Undetected concentration risk"],
    howWeHelpSubtitle: "The smart way to see your wealth clearly",
    helpCards: [
      { iconName: "BarChart3", title: "Multi-Asset Aggregation", desc: "Equities, fixed income, private equity, property, and alternatives — one consolidated view." },
      { iconName: "ShieldCheck", title: "Risk Monitoring", desc: "Real-time alerts on concentration, liquidity gaps, and currency exposure across your portfolio." },
      { iconName: "Layers", title: "Tax Transparency", desc: "Reporting structured to support your advisors and reduce year-end surprises." }
    ],
    featureEyebrow: "One platform to give you complete visibility",
    featureHeadline: "Consolidate. Clarify. Control.",
    featureBody: "Our reporting infrastructure connects to your custodians, advisors, and direct holdings — delivering a single source of truth you can share with your team.",
    featureBullets: ["Daily portfolio valuation", "Asset class breakdown and allocation drift", "Currency and geography exposure mapping", "Tax lot tracking across jurisdictions", "Benchmarking and performance attribution", "Secure family portal access"],
    stats: [
      { num: "100%", desc: "Visibility across all asset classes" },
      { num: "Daily", desc: "Portfolio valuation and reconciliation" },
      { num: "40+", desc: "Custodian data feeds supported" },
      { num: "0", desc: "Blind spots" }
    ],
    whatsIncludedItems: ["Custodian data aggregation", "Daily reconciliation", "Net worth dashboard", "Risk heat maps", "Currency exposure reporting", "Performance attribution", "Tax lot reporting", "Family portal access"]
  },
  "philanthropy": {
    valuePropHeadline: "Giving, structured to reflect your values —",
    valuePropAccent: "and honour your taxes.",
    valuePropBody: "Meaningful giving requires more than generosity. It requires structure. We design philanthropic vehicles that maximise your impact, minimise your tax exposure, and endure across generations.",
    problemHighlight: "Unstructured giving?",
    problemHeadline: "Generosity without structure is just cost.",
    problemBody: "Ad-hoc donations leave value on the table. Without the right structures, families give more to the taxman than to the causes they care about. We change that.",
    problemBullets: ["Donation tax benefits not optimised", "No legacy or succession dimension to giving", "Impact is unmeasured and unaccountable"],
    howWeHelpSubtitle: "The thoughtful approach to structured giving",
    helpCards: [
      { iconName: "Heart", title: "Philanthropic Vehicles", desc: "Donor-advised funds, charitable trusts, and foundations designed for your goals and jurisdiction." },
      { iconName: "Globe", title: "Impact Measurement", desc: "Define, track, and report on the real-world outcomes of your giving." },
      { iconName: "ShieldCheck", title: "Tax Optimisation", desc: "Coordinate your giving with your tax position to maximise efficiency across years." }
    ],
    featureEyebrow: "One framework to give with purpose and precision",
    featureHeadline: "Give. Measure. Endure.",
    featureBody: "GrowValley designs philanthropic programmes that are as sophisticated as your investment portfolio — structured to deliver impact and build legacy.",
    featureBullets: ["Philanthropic vehicle selection and setup", "Grant-making governance frameworks", "Impact reporting and beneficiary assessment", "Integration with estate and succession planning", "Multi-generational giving programmes", "Tax efficiency optimisation"],
    stats: [
      { num: "100%", desc: "Giving aligned with your tax position" },
      { num: "3", desc: "Philanthropic vehicle types available" },
      { num: "Global", desc: "Beneficiary reach and impact" },
      { num: "1", desc: "Integrated philanthropy and wealth plan" }
    ],
    whatsIncludedItems: ["Philanthropic vehicle design", "Foundation setup", "Grant governance", "Beneficiary due diligence", "Impact reporting", "Tax efficiency review", "Estate integration", "Next-gen engagement"]
  },
  "ma-and-ipo": {
    valuePropHeadline: "Corporate transactions demand coordination —",
    valuePropAccent: "we provide it.",
    valuePropBody: "An M&A event or IPO is not just a corporate milestone. It changes your personal wealth picture overnight. We sit alongside your legal and banking advisors to ensure your personal wealth strategy evolves in step with your corporate one.",
    problemHighlight: "M&A wealth risk?",
    problemHeadline: "Corporate events create personal wealth complexity.",
    problemBody: "Liquidity events, lock-up periods, tax crystallisation, and estate implications all converge at the moment of a corporate transaction. Without personal advisory coordination, value is left on the table.",
    problemBullets: ["Lock-up periods misaligned with personal liquidity needs", "Tax crystallisation not pre-planned", "Estate implications of new share structures unaddressed"],
    howWeHelpSubtitle: "Coordinating your personal and corporate wealth through every transaction",
    helpCards: [
      { iconName: "Briefcase", title: "Transaction Coordination", desc: "We interface with your M&A advisors, lawyers, and bankers to keep your personal wealth strategy aligned throughout." },
      { iconName: "Layers", title: "Tax Pre-Planning", desc: "Structures designed before the event to reduce the tax drag on your liquidity event." },
      { iconName: "ShieldCheck", title: "Post-Transaction Wealth Design", desc: "Once the deal closes, we restructure your portfolio around the new reality." }
    ],
    featureEyebrow: "One team alongside you through every stage",
    featureHeadline: "Advise. Coordinate. Execute.",
    featureBody: "GrowValley provides personal wealth advisory at every stage of a corporate transaction — so you arrive at the closing table with a plan, not questions.",
    featureBullets: ["Pre-transaction wealth review", "Tax structure design", "Lock-up period planning", "Investment strategy for liquidity proceeds", "Estate and philanthropy integration", "Post-transaction reporting framework"],
    stats: [
      { num: "Full", desc: "Transaction-to-portfolio advisory coverage" },
      { num: "Pre", desc: "Tax planning initiated before close" },
      { num: "Both", desc: "Corporate and personal advisors coordinated" },
      { num: "Post", desc: "Wealth restructure delivered at close" }
    ],
    whatsIncludedItems: ["Pre-transaction wealth review", "Tax structure design", "Proceeds investment plan", "Lock-up management", "Estate integration", "Philanthropy coordination", "Post-close reporting", "Ongoing wealth advisory"]
  },
  "social-impact-investing": {
    valuePropHeadline: "Capital with a conscience —",
    valuePropAccent: "and a return to match.",
    valuePropBody: "Impact investing is not charity. It is disciplined capital allocation to investments where financial return and societal benefit are not in competition. We build ESG-integrated portfolios that perform on both dimensions.",
    problemHighlight: "Impact vs return?",
    problemHeadline: "You shouldn't have to choose between returns and impact.",
    problemBody: "Most investors believe they must sacrifice financial performance for purpose. The evidence says otherwise. We construct portfolios where both objectives are explicit and measured.",
    problemBullets: ["No clear impact mandate defined", "ESG claims not independently verified", "Returns not benchmarked against risk-adjusted peers"],
    howWeHelpSubtitle: "Capital deployed where it matters most",
    helpCards: [
      { iconName: "Globe", title: "ESG Portfolio Construction", desc: "Frameworks that integrate environmental, social, and governance metrics into every investment decision." },
      { iconName: "BarChart3", title: "Impact Measurement", desc: "Dual-return reporting: financial and impact outcomes, presented with the same rigour." },
      { iconName: "ShieldCheck", title: "Verified Standards", desc: "We apply recognised international frameworks across all impact mandates." }
    ],
    featureEyebrow: "One portfolio. Two performance dimensions.",
    featureHeadline: "Return. Responsibility. Rigour.",
    featureBody: "GrowValley's social impact framework applies the same investment rigour to impact selection as to any other asset class — because your values deserve a sound investment process.",
    featureBullets: ["Impact thesis and mandate definition", "ESG-screened public equity portfolios", "Private impact fund access", "Dual-return performance reporting", "UN SDG alignment mapping", "Annual impact audit and verification"],
    stats: [
      { num: "Dual", desc: "Financial and impact returns — both measured" },
      { num: "100%", desc: "Transparent ESG screening process" },
      { num: "Global", desc: "Impact across multiple geographies" },
      { num: "0", desc: "Compromise between return and responsibility" }
    ],
    whatsIncludedItems: ["Impact mandate definition", "ESG screening framework", "Public equity portfolios", "Private impact funds", "Dual-return reporting", "SDG alignment mapping", "Annual impact audit", "Stakeholder reporting"]
  },
  "collectibles-and-art": {
    valuePropHeadline: "Alternative assets deserve the same rigour —",
    valuePropAccent: "as any other class.",
    valuePropBody: "Art, wine, classic cars, and rare collectibles are increasingly significant components of ultra-high-net-worth portfolios. We provide specialist access to valuation, acquisition advisory, and estate integration for every alternative asset you hold.",
    problemHighlight: "Unmanaged alternatives?",
    problemHeadline: "Passion assets become estate complications.",
    problemBody: "Without proper valuation, insurance, and succession documentation, passion assets become liabilities rather than legacies. We bring institutional rigour to personal collections.",
    problemBullets: ["No current independent valuations on file", "Collections not integrated into estate plans", "Insurance coverage based on outdated appraisals"],
    howWeHelpSubtitle: "The specialist approach to alternative assets",
    helpCards: [
      { iconName: "Palette", title: "Valuation & Appraisal", desc: "Independent, market-credible valuations for insurance, estate, and transaction purposes." },
      { iconName: "Briefcase", title: "Acquisition Advisory", desc: "Access to private sales, gallery relationships, and auction preview intelligence." },
      { iconName: "ScrollText", title: "Estate Integration", desc: "Collectibles documented, valued, and integrated into your broader succession framework." }
    ],
    featureEyebrow: "One framework to govern all you collect",
    featureHeadline: "Acquire. Protect. Bequeath.",
    featureBody: "GrowValley's collectibles and art service gives clients institutional-quality advisory for assets that are deeply personal. Because passion and precision are not mutually exclusive.",
    featureBullets: ["Independent valuation and appraisal", "Private sale and auction access", "Insurance documentation support", "Provenance and title verification", "Estate planning integration", "Secure storage and logistics coordination"],
    stats: [
      { num: "Expert", desc: "Independent appraisers across multiple categories" },
      { num: "Private", desc: "Pre-auction and private sale access" },
      { num: "Full", desc: "Estate integration for all collectible classes" },
      { num: "Secure", desc: "Storage and custody coordination" }
    ],
    whatsIncludedItems: ["Independent valuation", "Provenance verification", "Insurance documentation", "Private sale access", "Auction advisory", "Secure storage", "Estate integration", "Annual collection review"]
  },
  "institutional-desk": {
    valuePropHeadline: "The best deals never reach the public market —",
    valuePropAccent: "but they reach our clients.",
    valuePropBody: "GrowValley's institutional desk originates, structures, and distributes capital-market opportunities that are not accessible through conventional channels. We sit on the origination side — not the distribution side.",
    problemHighlight: "Missing the real deals?",
    problemHeadline: "The most valuable transactions are never advertised.",
    problemBody: "Pre-IPO allocations, private real estate placements, and venture raises are distributed through relationships — not listings. Clients without institutional access miss the vintage years.",
    problemBullets: ["No relationship-based deal access", "Dependent on public market timing", "Only seeing deals that others have already passed on"],
    howWeHelpSubtitle: "Institutional-grade deal access, delivered to private clients",
    helpCards: [
      { iconName: "Zap", title: "Pre-IPO Investment", desc: "Allocations in companies approaching public markets — at pre-listing valuations." },
      { iconName: "Building2", title: "Real Estate Structuring", desc: "Developer-direct access to marquee assets across Western Europe, Middle East, and Asia." },
      { iconName: "Globe", title: "Capital Raises", desc: "Venture, private equity, and corporate mandates originated through our deal network." }
    ],
    featureEyebrow: "One desk. Three access points.",
    featureHeadline: "Originate. Structure. Place.",
    featureBody: "We do not aggregate or re-package third-party deals. Every opportunity placed with GrowValley clients has been originated or co-structured by our team — aligned with our own capital at risk.",
    featureBullets: ["Pre-IPO equity allocations", "Developer-direct real estate access", "Venture and growth equity", "Private credit mandates", "Corporate capital raises", "Co-investment structures"],
    stats: [
      { num: "3", desc: "Core access channels: pre-IPO, real estate, capital raises" },
      { num: "Both", desc: "Sides of every deal represented by our team" },
      { num: "Fewer", desc: "Deals presented — each rigorously evaluated" },
      { num: "Aligned", desc: "GrowValley capital participates alongside clients" }
    ],
    whatsIncludedItems: ["Pre-IPO allocations", "Real estate placements", "VC and PE access", "Corporate mandates", "Co-investment structures", "Private credit", "Deal documentation", "Post-investment monitoring"]
  },
  "proven-practitioners": {
    valuePropHeadline: "Advice from people who have done it —",
    valuePropAccent: "not just studied it.",
    valuePropBody: "Our team has sat on both sides of a deal. They have originated, structured, and executed transactions — not merely advised on them. Your outcomes benefit from that experience directly.",
    problemHighlight: "Advisory without execution?",
    problemHeadline: "Experience at the table changes the outcome.",
    problemBody: "Most advisory relationships involve people who have studied transactions. Our relationships involve people who have executed them. That distinction is material when capital is at risk.",
    problemBullets: ["Advisors who have never executed a deal", "No accountability for outcomes", "Pattern-matching from theory, not practice"],
    howWeHelpSubtitle: "Practitioners, not theorists",
    helpCards: [
      { iconName: "Users", title: "Deal Experience", desc: "Team members who have originated, structured, and placed transactions across multiple cycles." },
      { iconName: "Briefcase", title: "Both Sides of the Table", desc: "We have been operators, investors, and advisors. We understand the dynamics of each." },
      { iconName: "ShieldCheck", title: "Outcome Accountability", desc: "We invest alongside our clients. Our incentives are aligned with your returns." }
    ],
    featureEyebrow: "One team. Every perspective.",
    featureHeadline: "Originated. Structured. Placed.",
    featureBody: "The GrowValley team's track record spans corporate advisory, institutional investment, and direct deal execution. We bring the full range of that experience to every client engagement.",
    featureBullets: ["Transaction origination expertise", "Deal structuring and documentation", "Institutional distribution networks", "Cross-border execution experience", "Post-investment portfolio management", "Exit and liquidity strategy"],
    stats: [
      { num: "Both", desc: "Origination and execution experience" },
      { num: "Multi", desc: "Market cycles navigated by the team" },
      { num: "Skin", desc: "In the game — capital aligned with clients" },
      { num: "Full", desc: "Lifecycle support from deal to exit" }
    ],
    whatsIncludedItems: ["Deal sourcing", "Structuring expertise", "Due diligence support", "Legal coordination", "Distribution capability", "Post-close monitoring", "Exit advisory", "Co-investment access"]
  },
  "capital-sustainability": {
    valuePropHeadline: "We present fewer deals —",
    valuePropAccent: "the ones we present are worth looking at.",
    valuePropBody: "Volume is not the objective at GrowValley. Every opportunity that reaches a client has been evaluated against capital durability, exit visibility, and risk-adjusted return. We apply institutional-grade diligence to every deal.",
    problemHighlight: "Too many deals?",
    problemHeadline: "Deal flow is not the problem. Quality is.",
    problemBody: "The private markets are full of opportunities. Most of them are not worth considering. Our discipline is in the selection — ensuring every deal placed meets a rigorous set of agreed criteria.",
    problemBullets: ["No framework for evaluating deal quality", "Exit timelines unclear at point of entry", "Risk-adjusted return not formally assessed"],
    howWeHelpSubtitle: "Capital durability as the primary lens",
    helpCards: [
      { iconName: "ShieldCheck", title: "Durability Analysis", desc: "Every opportunity evaluated against stress scenarios, capital structure, and downside protection." },
      { iconName: "BarChart3", title: "Exit Visibility", desc: "We only place deals where the liquidity path is credible and clearly defined at entry." },
      { iconName: "Zap", title: "Risk-Adjusted Return", desc: "Return targets set against a formally assessed risk profile — not optimistic projections." }
    ],
    featureEyebrow: "Discipline before opportunity",
    featureHeadline: "Evaluate. Protect. Return.",
    featureBody: "GrowValley's capital sustainability framework applies a consistent, documented process to every deal evaluated — ensuring that client capital is only deployed where the risk/return is genuinely compelling.",
    featureBullets: ["Formal capital durability assessment", "Stress-tested return projections", "Liquidity path documentation", "Downside protection analysis", "Portfolio concentration limits", "Ongoing monitoring and reporting"],
    stats: [
      { num: "Fewer", desc: "Deals presented — quality over volume" },
      { num: "100%", desc: "Of deals formally assessed before client presentation" },
      { num: "Clear", desc: "Exit path required at point of entry" },
      { num: "Risk", desc: "Adjusted returns — not gross projections" }
    ],
    whatsIncludedItems: ["Capital durability analysis", "Exit path assessment", "Risk framework application", "Return stress testing", "Portfolio limits", "Concentration review", "Ongoing monitoring", "Quarterly reporting"]
  },
  "wealth-structuring": {
    valuePropHeadline: "The structure around your assets —",
    valuePropAccent: "matters as much as the assets.",
    valuePropBody: "Holding structures that made sense when wealth was smaller often become inefficient, costly, and vulnerable as wealth grows. We redesign holding arrangements to improve efficiency, reduce unnecessary cost, and strengthen the overall integrity of your wealth position.",
    problemHighlight: "Inefficient structures?",
    problemHeadline: "Poor structure is a slow erosion of wealth.",
    problemBody: "Tax drag, unnecessary duplication, and fragile holding arrangements compound silently over time. By the time the problem is visible, significant value has already been lost.",
    problemBullets: ["Multiple entities with no clear purpose", "Tax drag from suboptimal holding structures", "No visibility on cost of current arrangements"],
    howWeHelpSubtitle: "Structural clarity for complex wealth",
    helpCards: [
      { iconName: "Layers", title: "Holding Structure Review", desc: "Comprehensive analysis of all legal entities, trusts, and holding vehicles — with clear recommendations." },
      { iconName: "ShieldCheck", title: "Efficiency Improvement", desc: "Restructure designed to reduce operational cost, tax exposure, and administrative burden." },
      { iconName: "BarChart3", title: "Integrity Assessment", desc: "Ensure your structure performs as intended under stress — legally, operationally, and financially." }
    ],
    featureEyebrow: "One review. Structural transformation.",
    featureHeadline: "Simplify. Strengthen. Sustain.",
    featureBody: "GrowValley's wealth structuring review is a complete audit of your holding arrangements — delivered with a prioritised roadmap for improvement and implementation.",
    featureBullets: ["Legal entity mapping and assessment", "Cost of structure analysis", "Tax efficiency review", "Jurisdictional holding optimisation", "Implementation roadmap", "Annual structural health review"],
    stats: [
      { num: "Full", desc: "Entity-by-entity structural review" },
      { num: "Cost", desc: "Reduction identified in first engagement" },
      { num: "Clear", desc: "Implementation roadmap delivered" },
      { num: "Annual", desc: "Ongoing structural health monitoring" }
    ],
    whatsIncludedItems: ["Entity mapping", "Cost analysis", "Tax efficiency review", "Jurisdiction optimisation", "Trust structure review", "Asset protection review", "Implementation plan", "Annual review"]
  },
  "succession-planning": {
    valuePropHeadline: "Wealth transfers poorly without a plan —",
    valuePropAccent: "we build the plan.",
    valuePropBody: "Succession is not an event. It is a process. One that begins years before any transfer of wealth occurs. We engage the right legal and fiduciary professionals to construct a framework that protects your family and holds across generations.",
    problemHighlight: "No succession plan?",
    problemHeadline: "Generational wealth requires generational planning.",
    problemBody: "Without a documented succession framework, families face unnecessary tax, avoidable family conflict, and structures that fail under pressure. The time to plan is well before the plan is needed.",
    problemBullets: ["No written succession framework in place", "Legal documents not updated to reflect current wishes", "Next generation not prepared for wealth stewardship"],
    howWeHelpSubtitle: "A succession framework built to endure",
    helpCards: [
      { iconName: "ScrollText", title: "Legal Framework", desc: "Wills, trusts, and shareholder agreements designed to reflect your intentions and withstand challenge." },
      { iconName: "Users", title: "Family Governance", desc: "Family charters, council structures, and next-generation education programmes." },
      { iconName: "ShieldCheck", title: "Fiduciary Selection", desc: "We identify and engage the right trustees, executors, and guardians for your specific requirements." }
    ],
    featureEyebrow: "One framework. Your legacy, protected.",
    featureHeadline: "Plan. Protect. Transfer.",
    featureBody: "GrowValley's succession planning process is collaborative, thorough, and designed to produce documentation that holds — legally, practically, and across generations.",
    featureBullets: ["Succession strategy design", "Will and trust documentation", "Family governance charter", "Fiduciary provider selection", "Next-generation wealth education", "Regular review and update process"],
    stats: [
      { num: "Full", desc: "Legal and fiduciary coverage" },
      { num: "Next", desc: "Generation prepared for wealth stewardship" },
      { num: "Annual", desc: "Review to reflect life changes" },
      { num: "Zero", desc: "Gaps in your succession framework" }
    ],
    whatsIncludedItems: ["Succession strategy", "Will preparation coordination", "Trust structuring", "Family charter", "Governance council", "Next-gen education", "Fiduciary selection", "Annual review"]
  },
  "citizenship-residency-services": {
    valuePropHeadline: "Jurisdictional flexibility —",
    valuePropAccent: "is a legitimate dimension of wealth planning.",
    valuePropBody: "Residency and citizenship decisions carry profound implications for tax, estate planning, and personal mobility. We connect clients with the specialist firms best placed to navigate these programmes — with precision and discretion.",
    problemHighlight: "Jurisdictional complexity?",
    problemHeadline: "The wrong residency decision is expensive to undo.",
    problemBody: "EB-5, Golden Visa, and other citizenship-by-investment programmes involve significant capital commitments, legal complexity, and personal disclosure. Expert navigation is not optional.",
    problemBullets: ["Programme requirements change frequently", "Tax implications of residency change not pre-modelled", "Personal information exposure without proper legal guidance"],
    howWeHelpSubtitle: "The right programme. The right firm. The right outcome.",
    helpCards: [
      { iconName: "Plane", title: "Programme Selection", desc: "We match your objectives — tax, mobility, lifestyle — to the most appropriate programme available." },
      { iconName: "ShieldCheck", title: "Specialist Firm Access", desc: "We connect clients with pre-vetted legal and immigration specialists who navigate these programmes daily." },
      { iconName: "Globe", title: "Tax Pre-Modelling", desc: "Residency change implications modelled before any commitment is made." }
    ],
    featureEyebrow: "Precision navigation for complex decisions",
    featureHeadline: "Select. Navigate. Establish.",
    featureBody: "GrowValley coordinates the residency and citizenship planning process — from programme selection through to completion — in partnership with specialists across the relevant jurisdictions.",
    featureBullets: ["EB-5 investor visa navigation", "Portugal Golden Visa programme", "Other EU residency programmes", "Tax pre-modelling before commitment", "Legal and immigration specialist coordination", "Ongoing compliance support post-establishment"],
    stats: [
      { num: "Global", desc: "Programme access across multiple jurisdictions" },
      { num: "Pre", desc: "Tax modelling before any capital commitment" },
      { num: "Vetted", desc: "Legal and immigration specialists only" },
      { num: "Discreet", desc: "Complete confidentiality at every stage" }
    ],
    whatsIncludedItems: ["Programme assessment", "Tax pre-modelling", "EB-5 coordination", "Golden Visa guidance", "Legal firm referral", "Application support", "Compliance monitoring", "Post-establishment review"]
  }
};

const UNSPLASH_IMAGES: Record<string, string> = {
  "single-family-office-setup": "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1400&auto=format&fit=crop",
  "wealth-consolidation-reporting": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop",
  "philanthropy": "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1400&auto=format&fit=crop",
  "ma-and-ipo": "https://images.unsplash.com/photo-1444653389962-8149286c578a?q=80&w=1400&auto=format&fit=crop",
  "social-impact-investing": "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1400&auto=format&fit=crop",
  "collectibles-and-art": "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?q=80&w=1400&auto=format&fit=crop",
  "institutional-desk": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
  "proven-practitioners": "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop",
  "capital-sustainability": "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1400&auto=format&fit=crop",
  "wealth-structuring": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400&auto=format&fit=crop",
  "succession-planning": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop",
  "citizenship-residency-services": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1400&auto=format&fit=crop",
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
            <span>/</span>
            <Link href="/our-expertise">Our Expertise</Link>
            <span>/</span>
            <span>{service.title}</span>
          </nav>

          {/* 50/50 Hero Split */}
          <div className={styles.heroSplit}>
            <div className={styles.heroLeft}>
              <h1>{service.title}</h1>
              <p>{service.description}</p>
              <Link href="/contact">
                <Button size="lg">Speak to an expert</Button>
              </Link>
            </div>
            <div className={styles.heroRight}>
              <img src={img} alt={service.title} />
              <div className={styles.heroRightOverlay} />
              <div className={styles.heroCaption}>
                <span>{service.category}</span>
                <p>{service.title}</p>
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

      {/* ── 3. Problem Section: split card ─────── */}
      <section className={styles.problemSection}>
        <div className="container">
          <div className={styles.problemCard}>
            <div className={styles.problemImageCol}>
              <img src={img} alt={service.title} />
              <div className={styles.problemHighlight}>
                <strong>{content.problemHighlight}</strong>
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
                <Button variant="outline">Let&apos;s fix this</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. How We Help: 3-card grid ─────────── */}
      <section className={styles.howWeHelp}>
        <div className="container">
          <div className={styles.hwHead}>
            <h2>How we help</h2>
            <p>{content.howWeHelpSubtitle}</p>
          </div>
          <div className={styles.hwGrid}>
            {content.helpCards.map((card, i) => {
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

      {/* ── 5. Feature Showcase: left visual, right content ── */}
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
                {content.featureBullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <Link href="/contact">
                <Button variant="outline">Enquire about this service</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Stats: "You're in good hands" ────── */}
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

      {/* ── 7. What's Included: left list, right image ── */}
      <section className={styles.whatsIncluded}>
        <div className="container">
          <div className={styles.wiCard}>
            <div className={styles.wiContent}>
              <h3>What&apos;s included with GrowValley&apos;s {service.title} service</h3>
              <p className={styles.wiSubtext}>Everything you need, delivered as one integrated mandate.</p>
              <ul>
                {content.whatsIncludedItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.wiImage}>
              <img src={img} alt={service.title} />
              <div className={styles.wiImageOverlay} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CTA Banner ──────────────────────── */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2>Ready to start a conversation?</h2>
            <p>
              Our advisors are ready to discuss your specific requirements with discretion and depth.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
