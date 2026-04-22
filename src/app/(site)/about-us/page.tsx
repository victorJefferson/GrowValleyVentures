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
import { heroQuery, leadershipQuery, caseStudiesQuery, serviceCategoriesQuery, allServicesQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";

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

  try {
    [heroData, leadershipData, caseStudiesData, categories, services] = await Promise.all([
      client.fetch(heroQuery, { pageSlug: "about" }),
      client.fetch(leadershipQuery),
      client.fetch(caseStudiesQuery),
      client.fetch(serviceCategoriesQuery),
      client.fetch(allServicesQuery)
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

  const defaultLeadership = {
    eyebrow: "LEADERSHIP",
    name: "Jazeer Jamal",
    title: "FOUNDER & CEO, GROWVALLEY GROUP",
    bio: [
      "Jazeer Jamal founded GrowValley Group to manage what most firms only advise on: the structural, operational, and financial foundations that allow businesses to form, function, and grow across jurisdictions.",
      "Over two decades, his work has spanned transactions exceeding $2 billion, assets under management of $350 million, and over $100 million in capital raised. His mandates have covered growth capital, restructuring, and direct investment across private families, institutional allocators, and government entities in the Middle East, South Asia, and beyond.",
      "He has built and scaled more than fifty ventures, worked directly with over five hundred startups, and operates today with active companies across the GrowValley portfolio. He is based in Sharjah, UAE.",
    ],
    stats: [
      { value: "$2B+", label: "Transactions across mandates" },
      { value: "$350M", label: "Assets under management" },
      { value: "$100M+", label: "Capital raised" },
      { value: "50+", label: "Ventures built and scaled" },
      { value: "500+", label: "Startups engaged directly" },
    ],
  };

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image
    ? urlFor(heroData.image).url()
    : displayHero.image;

  const displayLeadership = leadershipData || defaultLeadership;

  return (
    <main>
      <Hero
        eyebrow={displayHero.eyebrow}
        headline={displayHero.headline}
        subheadline={displayHero.subheadline}
        image={heroImage}
      />
      <section className="section-padding">
        <div className="container">
          <div className={styles.roundedPanel}>
            <div className={styles.splitIntro}>
              <div className={styles.introContent}>
                <h2 className={styles.heading}>Who we are</h2>
                <p className={styles.body}>
                  Most advisory practices are built around products. Ours is
                  built around you. GrowValley was founded on a simple
                  observation. Wealthy individuals, family offices, and
                  institutional allocators rarely lack access to financial
                  products. What they lack is one team that sees the full
                  picture, coordinates every dimension of their wealth, and is
                  accountable for how it all fits together. That is what we do.
                  Not one part of your wealth. All of it. One team. One
                  strategy. One point of accountability.
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
      <section className={styles.coreDisciplinesSection}>
        <div className="container">
          <div className={styles.coreDisciplinesHeader}>
            <span className={styles.coreDisciplinesEyebrow}>
              Our Core Disciplines
            </span>
          </div>

          <div className={styles.coreDisciplinesGrid}>
            {(categories.length > 0
              ? categories
              : [
                { title: "Wealth Management", sectionId: "wealth-management" },
                { title: "Family Office Services", sectionId: "family-office" },
                { title: "Private Access to Opportunities", sectionId: "private-access" },
                { title: "Succession Planning Services", sectionId: "succession-planning" },
              ]
            ).map((cat, i) => {
              // A robust fallback resolution when CMS 'sectionId' field is blank
              let targetHash = cat.sectionId;
              if (!targetHash) {
                const titleLower = (cat.title || "").toLowerCase();
                if (titleLower.includes("wealth")) targetHash = "wealth-management";
                else if (titleLower.includes("family")) targetHash = "family-office";
                else if (titleLower.includes("private")) targetHash = "private-access";
                else if (titleLower.includes("succession")) targetHash = "succession-planning";
                else targetHash = cat.slug || "";
              }

              return (
                <Link
                  href={`/our-expertise/#${targetHash}`}
                  className={styles.disciplineTile}
                  key={i}
                >
                  <span className={styles.tileIndex}>0{i + 1}</span>
                  <div className={styles.tileBottom}>
                    <h3 className={styles.tileTitle}>{cat.title}</h3>
                    <div className={styles.tileArrow}>
                      <ArrowRight />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

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
              Speak to a team you can trust
            </h2>
            <div className={styles.ctaGroup}>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="uppercase-button"
                >
                  Start a conversation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.roundedPanel}>
            <div className={styles.founderFlex}>
              <div className={styles.founderBio}>
                <span className={styles.founderEyebrow}>
                  {displayLeadership.eyebrow}
                </span>
                <h2 className={styles.founderName}>{displayLeadership.name}</h2>
                <span className={styles.founderTitle}>
                  {displayLeadership.title}
                </span>

                <div className={styles.bioText}>
                  {displayLeadership.bio.map((para: string, idx: number) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              <div className={styles.founderStats}>
                {displayLeadership.stats.map((stat: any, idx: number) => (
                  <div className={styles.statRow} key={idx}>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
