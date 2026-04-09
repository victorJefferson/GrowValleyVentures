"use client";

import React, { useState, useEffect } from 'react';
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
  Network
} from 'lucide-react';
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { InsightsCarousel, InsightItem } from "@/components/ui/InsightsCarousel";
import styles from "./page.module.scss";
import { Button } from '@/components/ui/Button';

interface HomeContentProps {
  heroData: any;
  insights: any[];
}

export default function HomeContent({ heroData, insights }: HomeContentProps) {
  const [activeSolution, setActiveSolution] = useState(0);

  const defaultHero = {
    eyebrow: "INVESTMENT PLATFORM",
    headline: "Direct investment readiness. Institutional capital discipline.",
    subheadline: "GrowValley structures and governs capital readiness for family offices, institutional allocators, and qualified investors, applying the discipline of an established investment platform.",
    ctaText: "Get in touch",
    ctaHref: "/contact",
    image: "/images/hero_model_v3.png"
  };

  const displayHero = heroData || defaultHero;

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
      id: "capital-deployment",
      title: "Capital Deployment",
      subtitle: "Deploying capital as a principal investor into businesses and ventures.",
      description: "Governed by investment thesis, risk framework, and return objective.",
      href: "/our-capabilities/#capital-deployment"
    },
    {
      id: "investment-structuring",
      title: "Investment Structuring",
      subtitle: "Designing investment vehicles and structures for institutional partners.",
      description: "Equity, hybrid, co-investment frameworks, and governance terms.",
      href: "/our-capabilities/#investment-structuring"
    },
    {
      id: "family-office-institutional",
      title: "Family Office & Institutional",
      subtitle: "Partnering with family offices and institutional allocators.",
      description: "Structured co-investment readiness, governance-led and transparently reported.",
      href: "/our-capabilities/#family-office-institutional"
    },
    {
      id: "direct-investment-readiness",
      title: "Direct Investment Readiness",
      subtitle: "Providing qualified investors with governed readiness.",
      description: "Curated, structured, and documented from the outset.",
      href: "/our-capabilities/#direct-investment-readiness"
    }
  ];

  const dynamicInsights: InsightItem[] = insights.map((item: any) => ({
    id: item._id,
    title: item.title,
    date: item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : "",
    tag: item.tag || "Insight",
    image: item.mainImage ? urlFor(item.mainImage).url() : "",
    slug: item.slug
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
              Capital decisions require governance, not guesswork. GrowValley brings institutional discipline to every structure, mandate, and opportunity, without passive allocation and without compromising on rigour.
            </p>

            <div className={styles.whyCardGrid}>
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}><ShieldCheck size={48} strokeWidth={1} /></div>
                <div className={styles.whyCardContent}>
                  <div className={styles.whyCardLabel}>Governance-Led Platform</div>
                  <p>Every capital position is governed by defined terms, documentation, and reporting standards, all established before participation opens.</p>
                </div>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}><Layers size={48} strokeWidth={1} /></div>
                <div className={styles.whyCardContent}>
                  <div className={styles.whyCardLabel}>Institutional Discipline</div>
                  <p>GrowValley operates with the rigour of an established capital platform, rather than a discretionary advisor or passive allocator.</p>
                </div>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}><Target size={48} strokeWidth={1} /></div>
                <div className={styles.whyCardContent}>
                  <div className={styles.whyCardLabel}>Structured Access</div>
                  <p>Opportunities are curated, structured, and fully documented before being made available to qualifying investors.</p>
                </div>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyCardIcon}><Network size={48} strokeWidth={1} /></div>
                <div className={styles.whyCardContent}>
                  <div className={styles.whyCardLabel}>Long-Term Orientation</div>
                  <p>Built for family offices and institutional allocators with patient capital mandates and long-term return objectives.</p>
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
                    className={`${styles.solutionsTrigger} ${activeSolution === idx ? styles.active : ''}`}
                    onClick={() => {
                      setActiveSolution(idx);
                      const element = document.getElementById(`mobile-${s.id}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
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
                    <h2 className={styles.cardTitleH2}>{solutions[activeSolution].title}</h2>
                    <p className={styles.subtitle}>{solutions[activeSolution].subtitle}</p>
                  </div>
                  <p className={styles.description}>{solutions[activeSolution].description}</p>
                  <Link href={solutions[activeSolution].href} className={styles.learnMore}>
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Mobile: All cards in a list */}
              <div className={styles.mobileOnly}>
                {solutions.map((s) => (
                  <div id={`mobile-${s.id}`} key={s.id} className={styles.solutionsCard}>
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
                  <p>Qualified investors accessing direct portfolio opportunities</p>
                </div>
              </div>

              <div className={`${styles.bentoCard} ${styles.cardSquare}`}>
                <div className={styles.bentoContent}>
                  <p>Private investors meeting defined eligibility criteria</p>
                </div>
              </div>

              <div className={`${styles.bentoCard} ${styles.cardWide}`}>
                <div className={styles.bentoContent}>
                  <p>Institutional investors seeking structured co-investment readiness</p>
                </div>
              </div>

              <div className={`${styles.bentoCard} ${styles.cardPanorama}`}>
                <div className={styles.bentoContent}>
                  <p>Institutional allocators building exposure to governed portfolio positions</p>
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
          <h2 className={styles.speakToAnExpertBannerHeading}>Serious about capital? <br /> Start with the right structure.</h2>
          <Link href="/contact">
            <Button size="lg" variant="secondary">Speak to an Expert</Button>
          </Link>
        </div>
      </section>

      <DataSection />
    </main>
  );
}
