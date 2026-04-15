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
  const [activeSolution, setActiveSolution] = useState(0);

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

  const solutions = [
    {
      id: "wealth-management-services",
      title: "Wealth Management Services",
      subtitle:
        "Your goals. Your risk tolerance. Your timeline. We build the strategy and execute it with full discipline.",
      href: "/our-expertise/#wealth-management",
    },
    {
      id: "family-office-services",
      title: "Family Office Services",
      subtitle:
        "Beyond investment. We coordinate the full complexity of your financial life, from philanthropy to M&A, through one accountable team.",
      href: "/our-expertise/#family-office-services",
    },
    {
      id: "private-access-to-opportunities",
      title: "Private Access to Opportunities",
      subtitle:
        "Institutional-grade PE, VC, and real estate opportunities. Sourced, structured, and presented through our dedicated Deals Desk.",
      href: "/our-expertise/#private-access-to-opportunities",
    },
    {
      id: "succession-planning-services",
      title: "Succession Planning Services",
      subtitle:
        "How you hold wealth matters as much as how it grows. We design structures built for efficiency, succession, and longevity.",
      href: "/our-expertise/#succession-planning-services",
    },
  ];

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
        <div className="container">
          <div className={styles.whySection}>
            <h2 className={styles.whyHeadingMain}>Why GrowValley?</h2>
            <p className={styles.whyBodyMain}>
              Most wealthy individuals are not underserved by the financial
              industry. They are over-advised by too many parts of it. An advisor
              here. A banker there. A lawyer who has never spoken to either.
              Nobody responsible for how it all fits together. GrowValley was
              built to solve that. One team. Every dimension of your wealth. One
              relationship. Total accountability.
            </p>

            <div className={styles.whyCardGrid}>
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}>
                  <ShieldCheck size={48} strokeWidth={1} />
                </div>
                <div className={styles.whyCardContent}>
                  <div className={styles.whyCardLabel}>
                    Wealth Management Services
                  </div>
                  <p>
                    A strategy built around your goals. Executed with full
                    discipline. Reviewed continuously.
                  </p>
                </div>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}>
                  <Layers size={48} strokeWidth={1} />
                </div>
                <div className={styles.whyCardContent}>
                  <div className={styles.whyCardLabel}>
                    Family Office Services
                  </div>
                  <p>
                    One team coordinating every dimension of your wealth, from
                    philanthropy to M&A.
                  </p>
                </div>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}>
                  <Target size={48} strokeWidth={1} />
                </div>
                <div className={styles.whyCardContent}>
                  <div className={styles.whyCardLabel}>
                    Private Access to Opportunities
                  </div>
                  <p>
                    PE, VC, and real estate deals sourced before they reach the
                    open market.
                  </p>
                </div>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}>
                  <Network size={48} strokeWidth={1} />
                </div>
                <div className={styles.whyCardContent}>
                  <div className={styles.whyCardLabel}>
                    Succession Planning Services
                  </div>
                  <p>
                    Structures designed to protect your wealth and transfer it
                    cleanly across generations.
                  </p>
                </div>
              </div>
            </div>
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
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      {/* Solutions Section (Vistra Style) */}
      <section className={styles.solutionsWrapper}>
        <div className={styles.solutionsPanel}>
          <div className={`container ${styles.solutionsContainer}`}>
            <div className={styles.solutionsNav}>
              <div className={styles.solutionsList}>
                {solutions.map((s, idx) => (
                  <button
                    key={s.id}
                    className={`${styles.solutionsTrigger} ${activeSolution === idx ? styles.active : ""}`}
                    onClick={() => {
                      setActiveSolution(idx);
                      const element = document.getElementById(`mobile-${s.id}`);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.solutionsContent}>
              {/* Desktop: One Card at a time */}
              <div className={styles.desktopOnly}>
                <div className={styles.solutionsCard} key={activeSolution}>
                  <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitleH2}>
                      {solutions[activeSolution].title}
                    </h2>
                    <p className={styles.subtitle}>
                      {solutions[activeSolution].subtitle}
                    </p>
                  </div>
                  <Link
                    href={solutions[activeSolution].href}
                    className={styles.learnMore}
                  >
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Mobile: All cards in a list */}
              <div className={styles.mobileOnly}>
                {solutions.map((s) => (
                  <div
                    id={`mobile-${s.id}`}
                    key={s.id}
                    className={styles.solutionsCard}
                  >
                    <div className={styles.cardHeader}>
                      <h2 className={styles.cardTitleH2}>{s.title}</h2>
                      <p className={styles.subtitle}>{s.subtitle}</p>
                    </div>
                    <Link href={s.href} className={styles.learnMore}>
                      Learn more <ArrowRight size={16} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whoWeWorkWithPremium}>
        <div className={styles.whoWeWorkWithInner}>
          <div className="container">
            <h2 className={styles.sectionHeading}>Who we work with</h2>
            <div className={styles.partnerCardsBento}>
              <div className={`${styles.bentoCard} ${styles.cardHero}`}>
                <div className={styles.bentoContent}>
                  <p>Family offices deploying patient, long-term capital</p>
                </div>
              </div>

              <div className={`${styles.bentoCard} ${styles.cardSquare}`}>
                <div className={styles.bentoContent}>
                  <p>
                    Qualified investors accessing direct portfolio opportunities
                  </p>
                </div>
              </div>

              <div className={`${styles.bentoCard} ${styles.cardSquare}`}>
                <div className={styles.bentoContent}>
                  <p>Private investors meeting defined eligibility criteria</p>
                </div>
              </div>

              <div className={`${styles.bentoCard} ${styles.cardWide}`}>
                <div className={styles.bentoContent}>
                  <p>
                    Institutional investors seeking structured co-investment
                    readiness
                  </p>
                </div>
              </div>

              <div className={`${styles.bentoCard} ${styles.cardPanorama}`}>
                <div className={styles.bentoContent}>
                  <p>
                    Institutional allocators building exposure to governed
                    portfolio positions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InsightsCarousel
        title="Latest from GrowValley"
        description="Perspectives on capital, investment, and portfolio construction."
        insights={dynamicInsights}
      />

      <section className={styles.ctaBanner}>
        <div className="container">
          <h2 className={styles.speakToAnExpertBannerHeading}>
            Ready to start a conversation?
          </h2>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Speak with an Expert
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
