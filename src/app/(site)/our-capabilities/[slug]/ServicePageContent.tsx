"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { 
  Building2, BarChart3, Heart, Briefcase, Globe, Palette, 
  Zap, Users, ShieldCheck, Layers, ScrollText, Plane,
  LineChart, Network, Target, Route, RefreshCw
} from "lucide-react";
import { ServiceDetail } from "@/config/services";
import { Button } from "@/components/ui/Button";
import styles from "./ServicePage.module.scss";

const iconMap: Record<string, any> = {
  Building2, BarChart3, Heart, Briefcase, Globe, Palette,
  Zap, Users, ShieldCheck, Layers, ScrollText, Plane,
  LineChart, Network, Target, Route, RefreshCw
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
  problemImageText?: string;
  howWeHelpSubtitle: string;
  helpCards: { iconName: string; title: string; desc: string }[];
  featureEyebrow: string;
  featureHeadline: string;
  featureBody: string;
  featureBullets: string[];
  stats: { num: string; desc: string }[];
  whatsIncluded: {
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
}> = {
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
            <Link href={`/our-capabilities/${service.category.toLowerCase().replace(/\s+/g, '-')}`}>{service.category}</Link>
            <ChevronRight className={styles.separator} size={14} />
            <span className={styles.current}>{service.title}</span>
          </nav>

          {/* 50/50 Hero Split */}
          <div className={styles.heroSplit}>
            <div className={styles.heroLeft}>
              <h1>{service.title}</h1>
              <p>{service.description}</p>
              <Link href="/contact">
                <Button size="lg">{content.heroCtaLabel || content.ctaButtonLabel || "SPEAK TO AN EXPERT"}</Button>
              </Link>
            </div>
            <div className={styles.heroRight}>
              <img src={img} alt={service.title} />
              <div className={styles.heroRightOverlay} />
              <div className={styles.heroCaption}>
                <span>{(content.overlayLabel || service.category)} / {service.title}</span>
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
                <Button variant="outline">{content.featureCtaLabel || content.ctaButtonLabel || "Enquire about this service"}</Button>
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
