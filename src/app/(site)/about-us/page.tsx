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
import { features } from "@/config/features";

export const metadata: Metadata = {
  title: {
    absolute: "About Us | AFAQ Partners",
  },
  description:
    "Learn about AFAQ Partners's 360° approach to wealth management and institutional capital discipline.",
  openGraph: {
    title: "About Us | AFAQ Partners",
    description: "AFAQ Partners investment platform and vertical integration.",
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
    eyebrow: "ABOUT US",
    headline:
      "Wealth is more than banking. AFAQ Partners brings experience building, managing, and scaling and we know what it takes to grow the assets we now manage.",
    subheadline:
      "We help our clients and partners build the relationships, market access, and investment ecosystems required to deploy and grow capital over the long term with our unfair advantage.",
    hasCTA: true,
    ctaText: "Talk to an Advisor",
    ctaHref: "/contact",
    image: "/images/home_hero.png",
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

  const displayHero = heroData || defaultHero;
  const displayDataSection = dataSectionData || defaultDataSection;
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
      {/* Vistra Inspired Solutions Section */}
      <AboutUsSolutions initialCategories={categories} initialServices={services} />

      {/* Case Studies Carousel */}
      {features.caseStudies && caseStudiesData && caseStudiesData.length > 0 && (
        <section className="section-padding">
          <div className="container">
            <CaseStudiesCarousel caseStudies={caseStudiesData} />
          </div>
        </section>
      )}
      <DataSection
        headline={displayDataSection.headline}
        description={displayDataSection.description}
        stats={displayDataSection.stats}
      />
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
