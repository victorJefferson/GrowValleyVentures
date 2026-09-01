"use client";

import React, { useState } from "react";
import { Hero } from "@/components/ui/Hero";
import { DataSection } from "@/components/ui/DataSection";
import { ArrowRight, Layers, ShieldCheck, Target, Network } from "lucide-react";
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
  dataSectionData: any;
  pageSections?: any[];
  footerStatsData?: any;
}

const CARD_ICONS = [ShieldCheck, Layers, Target, Network];

export default function HomeContent({
  heroData,
  insights,
  dataSectionData,
  pageSections = [],
  footerStatsData,
}: HomeContentProps) {
  const whySection = pageSections.find((s) => s.sectionKey === "why-afaq");

  const defaultHero = {
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

  const defaultDataSection = {
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

  const defaultFooterStats = {
    stats: [
      { value: "$150M+", label: "Assets Under Management" },
      { value: "$3B+", label: "in Revenue Generated" },
      { value: "$1B+", label: "in Capital Funded" },
    ],
    supportingCopy:
      "These aren't portfolio projections. They're the result of decisions made, capital deployed, and businesses actually built.",
  };

  const flipCards = whySection?.items?.length
    ? whySection.items
    : [
        { label: "Wealth Management Services", body: "Portfolio construction built around your long-term objectives, not market noise, not product cycles, not what's easiest to explain in a brochure." },
        { label: "Family Office Services", body: "For families whose financial affairs have outgrown a single advisor. We coordinate the full picture, investments, structures, reporting, and relationships, so nothing slips through the gaps." },
        { label: "Private Access to Opportunities", body: "Through the AFAQ Partners network, select clients access private equity, venture, and real estate deals that don't circulate publicly. We've been inside these deals. We know what to look for." },
        { label: "Succession Planning Services", body: "Wealth takes decades to build. Losing it to poor structuring takes one bad decision. We design structures that protect, preserve, and pass it on, across borders, across generations." },
      ];

  const displayHero = heroData || defaultHero;
  const displayDataSection = dataSectionData || defaultDataSection;
  const displayFooterStats = footerStatsData || defaultFooterStats;

  const getHeroImage = () => {
    if (heroData?.image) {
      try {
        return urlFor(heroData.image).url();
      } catch (e) {
        return "/images/hero_model_v3.png";
      }
    }
    return "/images/hero_model_v3.png";
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
      <Hero
        eyebrow={displayHero.eyebrow}
        headline={displayHero.headline}
        subheadline={displayHero.subheadline}
        ctaText={displayHero.ctaText}
        ctaHref={displayHero.ctaHref}
        hasCTA={displayHero.hasCTA}
        image={getHeroImage()}
      />

      {displayHero.heroStats?.length > 0 && (
        <section className={styles.heroStats}>
          <div className="container">
            <div className={styles.heroStatsGrid}>
              {displayHero.heroStats.map((stat: { value: string; label: string }, i: number) => (
                <div key={i} className={styles.heroStatItem}>
                  <div className={styles.heroStatValue}>{stat.value}</div>
                  <div className={styles.heroStatLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding">
        <div className={`container ${styles.noPaddingMobile}`}>
          <div className={styles.whySection}>

            <div className={styles.whyCardGrid}>
              {flipCards.map((card: { label?: string; body?: string; title?: string }, idx: number) => {
                const Icon = CARD_ICONS[idx] || ShieldCheck;
                const label = card.label || card.title || "";
                return (
              <div key={idx} className={styles.whyCard}>
                <div className={styles.whyCardInner}>
                  <div className={styles.whyCardFront}>
                    <div className={styles.whyCardIcon}>
                      <Icon size={64} strokeWidth={1} />
                    </div>
                    <div className={styles.whyCardLabel}>{label}</div>
                  </div>
                  <div className={styles.whyCardBack}>
                    <p>{card.body}</p>
                  </div>
                </div>
              </div>
                );
              })}
            </div>

            <h2 className={styles.whyHeadingMain}>{whySection?.heading || "Why AFAQ Partners?"}</h2>
            <p className={styles.whySubheadlineMain}>
              {whySection?.subheading || "The wealth arm of a group that builds, funds, and operates businesses."}
            </p>
            <p className={styles.whyBodyMain}>
              {whySection?.body || "We manage money alongside people who've deployed capital into over 500 real projects, with no product commissions and no hidden incentives. Every decision we make is answerable to one thing: your outcome."}
            </p>

          </div>
        </div>
      </section>

      <section className={styles.miniCta}>
        <div className={styles.miniCtaInner}>
          <div className={styles.miniCtaText}>
            <h3>Partner with the best</h3>
          </div>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Talk to an Advisor
            </Button>
          </Link>
        </div>
      </section>
      <Solutions />
      <WhoWeWorkWith />
      {features.insights && (
        <InsightsCarousel
          title="Latest from AFAQ Partners"
          description="Perspectives on capital, investment and business performance."
          insights={dynamicInsights}
        />
      )}

      <DataSection
        headline={displayDataSection.headline}
        description={displayDataSection.description}
        stats={displayDataSection.stats}
      />
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

      <section className={styles.footerStatsSection}>
        <div className="container">
          <div className={styles.footerStatsGrid}>
            {displayFooterStats.stats?.map((s: { value: string; label: string }, i: number) => (
              <div key={i}>
                <strong>{s.value}</strong> {s.label}
              </div>
            ))}
          </div>
          {displayFooterStats.supportingCopy && (
            <p className={styles.footerStatsCopy}>{displayFooterStats.supportingCopy}</p>
          )}
          <p className={styles.footerStatsTagline}>
            AFAQ Partners — Dubai. Built by operators. Run for outcomes.
          </p>
        </div>
      </section>

    </main>
  );
}
