import type { Metadata } from "next";
import { AboutUsSolutions } from "./AboutUsSolutions";
import { Hero } from "@/components/ui/Hero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CaseStudiesCarousel } from "@/components/ui/CaseStudiesCarousel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./AboutUs.module.scss";
import { client } from "@/lib/sanity";
import { heroQuery, leadershipQuery, caseStudiesQuery, serviceCategoriesQuery, allServicesQuery, dataSectionQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { DataSection } from "@/components/ui/DataSection";

export const metadata: Metadata = {
  title: {
    absolute: "About Us | GrowValley",
  },
  description:
    "Learn about GrowValley's 360° approach to wealth management and institutional capital discipline.",
  openGraph: {
    title: "About Us | GrowValley",
    description: "GrowValley investment platform and vertical integration.",
    url: "https://gv.ventures/about-us",
  },
};

export default async function AboutUsPage() {
  let heroData = null;
  let leadershipData = null;
  let caseStudiesData: any[] = [];
  let categories: any[] = [];
  let services: any[] = [];
  let dataSectionData = null;

  try {
    [heroData, leadershipData, caseStudiesData, categories, services, dataSectionData] = await Promise.all([
      client.fetch(heroQuery, { pageSlug: "about" }),
      client.fetch(leadershipQuery),
      client.fetch(caseStudiesQuery),
      client.fetch(serviceCategoriesQuery),
      client.fetch(allServicesQuery),
      client.fetch(dataSectionQuery)
    ]);
  } catch (err) {
    console.error("About Us Data Fetch Error:", err);
  }

  const defaultHero = {
    eyebrow: "ABOUT GROWVALLEY",
    headline: "Who is GrowValley",
    subheadline: "Built on independence. Measured by outcomes.",
    image: "/images/home_hero.png",
  };

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image
    ? urlFor(heroData.image).url()
    : displayHero.image;

  return (
    <main>
      <Hero
        eyebrow={displayHero.eyebrow}
        headline={displayHero.headline}
        subheadline={displayHero.subheadline}
        ctaText={displayHero.ctaText}
        ctaHref={displayHero.ctaHref}
        hasCTA={displayHero.hasCTA}
        image={heroImage}
      />
      <section className="section-padding">
        <div className="container">
          <div className={styles.roundedPanel}>
            <div className={styles.splitIntro}>
              <div className={styles.introContent}>
                <span className={styles.eyebrow}>OUR EDGE</span>
                <h2 className={styles.heading}>Most wealth managers study markets. We&apos;ve operated inside them.</h2>
                <p className={styles.body}>
                  We&apos;ve worked directly with founders, builders, operators and leaders,
                  helping scale revenues, raise capital, and launch new businesses from the ground up.
                </p>
              </div>
              <div className={styles.introImage}>
                <img
                  src="/images/leadership_collaboration.png"
                  alt="Leadership Collaboration"
                  width="600"
                  height="400"
                  className={styles.borderCard}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <DataSection
        headline={dataSectionData.headline}
        description={dataSectionData.description}
        stats={dataSectionData.stats}
      />
      {/* Vistra Inspired Solutions Section */}
      <AboutUsSolutions initialCategories={categories} initialServices={services} />

      {/* Case Studies Carousel */}
      {caseStudiesData && caseStudiesData.length > 0 && (
        <section className="section-padding">
          <div className="container">
            <CaseStudiesCarousel caseStudies={caseStudiesData} />
          </div>
        </section>
      )}

      <section className="section-padding">
        <div className="container">
          <div className={styles.groupPanel}>
            <h2 className={styles.headingWhite}>
              You've worked hard to build what you have. Let's make sure it's in the right hands.
            </h2>
            <div className={styles.ctaGroup}>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="uppercase-button"
                >
                  Talk to an Advisor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
