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

interface HomeContentProps {
  heroData: any;
  insights: any[];
  dataSectionData: any;
}

export default function HomeContent({
  heroData,
  insights,
  dataSectionData,
}: HomeContentProps) {
  const defaultHero = {
    eyebrow: "GROWVALLEY",
    headline: "The only call you need to make.",
    subheadline:
      "We bring every dimension of your wealth under one team, one strategy, and one point of accountability.",
    ctaText: "See How We Work",
    ctaHref: "/our-expertise",
    image: "/images/hero_model_v3.png",
  };

  const defaultDataSection = {
    headline: "Wealth managed. Clients served.",
    description:
      "GrowValley is a fully integrated wealth management powerhouse. We globally serve our wealth management and institutional client base.",
    stats: [
      { prefix: "$", number: 2, suffix: "B+", label: "Assets under Advice" },
      { number: 50, suffix: "+", label: "Wealth Management Specialists" },
      { prefix: "$", number: 150, suffix: "M", label: "AUM Across Portfolio" },
      { number: 60, suffix: "+", label: "Connected Professionals" },
    ],
  };

  const displayHero = heroData || defaultHero;
  const displayDataSection = dataSectionData || defaultDataSection;

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
        image={getHeroImage()}
      />

      <section className="section-padding">
        <div className={`container ${styles.noPaddingMobile}`}>
          <div className={styles.whySection}>

            <div className={styles.whyCardGrid}>
              <div className={styles.whyCard}>
                <div className={styles.whyCardInner}>
                  <div className={styles.whyCardFront}>
                    <div className={styles.whyCardIcon}>
                      <ShieldCheck size={64} strokeWidth={1} />
                    </div>
                    <div className={styles.whyCardLabel}>
                      Wealth Management Services
                    </div>
                  </div>
                  <div className={styles.whyCardBack}>
                    <p>
                      Portfolio construction built around your long-term objectives, not market noise, not product cycles, not what's easiest to explain in a brochure.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.whyCard}>
                <div className={styles.whyCardInner}>
                  <div className={styles.whyCardFront}>
                    <div className={styles.whyCardIcon}>
                      <Layers size={64} strokeWidth={1} />
                    </div>
                    <div className={styles.whyCardLabel}>
                      Family Office Services
                    </div>
                  </div>
                  <div className={styles.whyCardBack}>
                    <p>
                      For families whose financial affairs have outgrown a single advisor.
                      We coordinate the full picture, investments, structures, reporting, and relationships, so nothing slips through the gaps.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.whyCard}>
                <div className={styles.whyCardInner}>
                  <div className={styles.whyCardFront}>
                    <div className={styles.whyCardIcon}>
                      <Target size={64} strokeWidth={1} />
                    </div>
                    <div className={styles.whyCardLabel}>
                      Private Access to Opportunities
                    </div>
                  </div>
                  <div className={styles.whyCardBack}>
                    <p>
                      Through the GrowValley network, select clients access private equity, venture, and real estate deals that don't circulate publicly.
                      We've been inside these deals. We know what to look for.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.whyCard}>
                <div className={styles.whyCardInner}>
                  <div className={styles.whyCardFront}>
                    <div className={styles.whyCardIcon}>
                      <Network size={64} strokeWidth={1} />
                    </div>
                    <div className={styles.whyCardLabel}>
                      Succession Planning Services
                    </div>
                  </div>
                  <div className={styles.whyCardBack}>
                    <p>
                      Wealth takes decades to build. Losing it to poor structuring takes one bad decision.
                      We design structures that protect, preserve, and pass it on, across borders, across generations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className={styles.whyHeadingMain}>Why GrowValley?</h2>
            <p className={styles.whySubheadlineMain}>
              The wealth arm of a group that builds, funds, and operates businesses.
            </p>
            <p className={styles.whyBodyMain}>
              We manage money alongside people who've deployed capital into over 500
              real projects, with no product commissions and no hidden incentives.
              Every decision we make is answerable to one thing: your outcome.
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
      <InsightsCarousel
        title="Latest from GrowValley"
        description="Perspectives on capital, investment and business performance."
        insights={dynamicInsights}
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

      <DataSection
        headline={displayDataSection.headline}
        description={displayDataSection.description}
        stats={displayDataSection.stats}
      />
    </main>
  );
}
