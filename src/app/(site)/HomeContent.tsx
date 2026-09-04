"use client";

import React from "react";
import { Hero } from "@/components/ui/Hero";
import { Layers, ShieldCheck, Target, Network } from "lucide-react";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import {
  InsightsCarousel,
  InsightItem,
} from "@/components/ui/InsightsCarousel";
import { Solutions } from "@/components/sections/Solutions/Solutions";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith/WhoWeWorkWith";
import styles from "./page.module.scss";
import { Button } from "@/components/ui/Button";
import { features } from "@/config/features";

interface HomeContentProps {
  heroData: any;
  insights: any[];
  pageSections?: any[];
  footerStatsData?: any;
}

const CARD_ICONS = [ShieldCheck, Layers, Target, Network];

/**
 * Home page uses Umar's Section 02–09 copy as the hard source of truth.
 * CMS may still supply the hero image and Insights cards; it must not blank
 * out stats or replace home copy with stale GrowValley documents.
 */
const HOME_HERO = {
  eyebrow: "AFAQ PARTNERS",
  headline: "Wealth managed by people who've actually built it.",
  subheadline:
    "Operated. Invested. Built. Now managing your capital the same way.",
  ctaText: "Talk to an Advisor",
  ctaHref: "/contact",
  hasCTA: true,
  image: "/images/hero_model_v3.png",
  heroStats: [
    { value: "$5B+", label: "Transactions" },
    { value: "$2B+", label: "Capital" },
    { value: "$350M", label: "Assets Under Management" },
    { value: "500+", label: "Projects Delivered" },
  ],
};

const WHY_FLIP_CARDS = [
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
];

const FOOTER_STATS = {
  stats: [
    { value: "$150M+", label: "Assets Under Management" },
    { value: "$3B+", label: "in Revenue Generated" },
    { value: "$1B+", label: "in Capital Funded" },
  ],
  supportingCopy:
    "These aren't portfolio projections. They're the result of decisions made, capital deployed, and businesses actually built.",
};

export default function HomeContent({
  heroData,
  insights,
}: HomeContentProps) {
  const getHeroImage = () => {
    if (heroData?.image) {
      try {
        return urlFor(heroData.image).url();
      } catch {
        return HOME_HERO.image;
      }
    }
    return HOME_HERO.image;
  };

  const dynamicInsights: InsightItem[] = insights.map((item: any) => ({
    id: item._id,
    title: item.title,
    date: item.publishedAt
      ? new Date(item.publishedAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "",
    tag: item.tag || "Insight",
    image: item.mainImage ? urlFor(item.mainImage).url() : "",
    slug: item.slug,
  }));

  return (
    <main>
      {/* SECTION 02 — HERO BANNER */}
      <Hero
        eyebrow={HOME_HERO.eyebrow}
        headline={HOME_HERO.headline}
        subheadline={HOME_HERO.subheadline}
        ctaText={HOME_HERO.ctaText}
        ctaHref={HOME_HERO.ctaHref}
        hasCTA={HOME_HERO.hasCTA}
        image={getHeroImage()}
        heroStats={HOME_HERO.heroStats}
        statsPlacement="afterHeadline"
      />

      {/* SECTION 03 — WHY AFAQ Partners? */}
      <section className="section-padding">
        <div className={`container ${styles.noPaddingMobile}`}>
          <div className={styles.whySection}>
            <div className={styles.whyCardGrid}>
              {WHY_FLIP_CARDS.map((card, idx) => {
                const Icon = CARD_ICONS[idx] || ShieldCheck;
                return (
                  <div key={card.label} className={styles.whyCard}>
                    <div className={styles.whyCardInner}>
                      <div className={styles.whyCardFront}>
                        <div className={styles.whyCardIcon}>
                          <Icon size={64} strokeWidth={1} />
                        </div>
                        <div className={styles.whyCardLabel}>{card.label}</div>
                      </div>
                      <div className={styles.whyCardBack}>
                        <p>{card.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <h2 className={styles.whyHeadingMain}>Why AFAQ Partners?</h2>
            <p className={styles.whySubheadlineMain}>
              The wealth arm of a group that builds, funds, and operates businesses.
            </p>
            <p className={styles.whyBodyMain}>
              We manage money alongside people who&apos;ve deployed capital into over 500 real projects, with no product commissions and no hidden incentives. Every decision we make is answerable to one thing: your outcome.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 04 — PARTNER WITH THE BEST */}
      <section className={styles.miniCta}>
        <div className={styles.miniCtaInner}>
          <div className={styles.miniCtaText}>
            <h3>PARTNER WITH THE BEST</h3>
          </div>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Talk to an Advisor
            </Button>
          </Link>
        </div>
      </section>

      {/* SECTION 05 — Solutions (4 dark expanded cards) */}
      <Solutions />

      {/* SECTION 06 — Who we work with */}
      <WhoWeWorkWith />

      {/* SECTION 07 — Latest from AFAQ Partners */}
      {features.insights && (
        <InsightsCarousel
          title="Latest from AFAQ Partners"
          description="Perspectives on capital, investment and business performance."
          insights={dynamicInsights}
        />
      )}

      {/* SECTION 08 — Bottom CTA */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <h2 className={styles.speakToAnExpertBannerHeading}>
            You&apos;ve built something real. Your wealth manager should understand what that means.
          </h2>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Talk to an Advisor
            </Button>
          </Link>
        </div>
      </section>

      {/* SECTION 09 — Footer stats (home-only bar; site Footer is Updated Footer) */}
      <section className={styles.footerStatsSection}>
        <div className="container">
          <div className={styles.footerStatsGrid}>
            {FOOTER_STATS.stats.map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong> {s.label}
              </div>
            ))}
          </div>
          <p className={styles.footerStatsCopy}>{FOOTER_STATS.supportingCopy}</p>
          <p className={styles.footerStatsTagline}>
            AFAQ Partners — Dubai. Built by operators. Run for outcomes.
          </p>
          <div className={styles.footerStatsLinks}>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
