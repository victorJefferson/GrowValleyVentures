"use client";

import React, { useState, useEffect } from "react";
import { Hero } from "@/components/ui/Hero";
import { DataSection } from "@/components/ui/DataSection";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  PieChart,
  Layers,
  Landmark,
  ShieldCheck,
  Globe,
  Target,
  Lightbulb,
  Network,
} from "lucide-react";
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
    eyebrow: "GrowValley",
    headline: "Your Wealth. Our Expertise. This Is GrowValley!",
    subheadline: "A 360° approach to managing your wealth.",
    ctaText: "Get in Touch",
    ctaHref: "/contact",
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
      title: "Wealth Management",
      subtitle:
        "Harnessing the wealth you have created to serve your risk-return objectives.",
      description: "",
      href: "/our-expertise/#wealth-management",
    },
    {
      id: "wealth-structuring-succession",
      title: "Wealth Structuring",
      subtitle:
        "Optimizing wealth holding structures and the intergenerational transfer of wealth.",
      description: "",
      href: "/our-expertise/#wealth-structuring",
    },
    {
      id: "additional-family-office",
      title: "Family Office Services",
      subtitle:
        "Facilitating ancillary wealth needs through curated partners and in-house coordination.",
      description: "",
      href: "/our-expertise/#family-office",
    },
    {
      id: "prive-access",
      title: "Privé Access",
      subtitle:
        "Unfolding institutional-grade opportunities through a dedicated Private Deals Desk.",
      description: "",
      href: "/our-expertise/#prive-access",
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
              GrowValley is a fully integrated wealth management powerhouse. We
              globally serve our wealth management and institutional client
              base. GrowValley&apos;s unique service model ensures that our
              Client&apos;s interests come first by removing the inherent
              conflict of interest typically prevalent in wealth management
              advice.
            </p>

            <div className={styles.whyCardGrid}>
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}>
                  <ShieldCheck size={48} strokeWidth={1} />
                </div>
                <div className={styles.whyCardContent}>
                  <div className={styles.whyCardLabel}>Wealth Management</div>
                  <p>
                    Harnessing the wealth you have created to serve your
                    risk-return objectives
                  </p>
                </div>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}>
                  <Layers size={48} strokeWidth={1} />
                </div>
                <div className={styles.whyCardContent}>
                  <div className={styles.whyCardLabel}>Wealth Structuring</div>
                  <p>
                    Optimizing wealth holding structures and intergenerational
                    transfer of wealth
                  </p>
                </div>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}>
                  <Target size={48} strokeWidth={1} />
                </div>
                <div className={styles.whyCardContent}>
                  <div className={styles.whyCardLabel}>
                    Family Office Services
                  </div>
                  <p>
                    Facilitating ancillary wealth needs through curated partners
                    and in-house coordination
                  </p>
                </div>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}>
                  <Network size={48} strokeWidth={1} />
                </div>
                <div className={styles.whyCardContent}>
                  <div className={styles.whyCardLabel}>Privé Access</div>
                  <p>
                    Unfolding institutional-grade opportunities through a
                    dedicated Private Deals Desk
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                  <p className={styles.description}>
                    {solutions[activeSolution].description}
                  </p>
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
                    <p className={styles.description}>{s.description}</p>
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
