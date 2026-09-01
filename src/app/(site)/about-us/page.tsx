import type { Metadata } from "next";
import { AboutUsSolutions } from "./AboutUsSolutions";
import { Hero } from "@/components/ui/Hero";
import { Button } from "@/components/ui/Button";
import { CaseStudiesCarousel } from "@/components/ui/CaseStudiesCarousel";
import Link from "next/link";
import styles from "./AboutUs.module.scss";
import { client } from "@/lib/sanity";
import {
  heroQuery,
  caseStudiesQuery,
  serviceCategoriesQuery,
  allServicesQuery,
  dataSectionQuery,
  pageSectionsByPageQuery,
} from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { features } from "@/config/features";

export const metadata: Metadata = {
  title: {
    absolute: "About Us | AFAQ Partners",
  },
  description:
    "Learn about AFAQ Partners' 360° approach to wealth management and institutional capital discipline.",
  openGraph: {
    title: "About Us | AFAQ Partners",
    description: "AFAQ Partners investment platform and vertical integration.",
    url: "https://gv.ventures/about-us",
  },
};

export default async function AboutUsPage() {
  let heroData = null;
  let caseStudiesData: any[] = [];
  let categories: any[] = [];
  let services: any[] = [];
  let dataSectionData = null;
  let pageSections: any[] = [];

  try {
    [heroData, caseStudiesData, categories, services, dataSectionData, pageSections] =
      await Promise.all([
        client.fetch(heroQuery, { pageSlug: "about" }),
        client.fetch(caseStudiesQuery),
        client.fetch(serviceCategoriesQuery),
        client.fetch(allServicesQuery),
        client.fetch(dataSectionQuery),
        client.fetch(pageSectionsByPageQuery, { pageSlug: "about" }),
      ]);
  } catch (err) {
    console.error("About Us Data Fetch Error:", err);
  }

  const offeringsSection = pageSections.find((s) => s.sectionKey === "offerings");
  const accessSection = pageSections.find((s) => s.sectionKey === "access-metrics");
  const edgeSection = pageSections.find((s) => s.sectionKey === "our-edge");

  const defaultHero = {
    eyebrow: "ABOUT US",
    headline:
      "Wealth is more than banking. AFAQ Partners brings experience building, managing, and scaling and we know what it takes to grow the assets we now manage.",
    body: "AFAQ Partners is a private wealth and investment platform connecting families, entrepreneurs, and private capital with exceptional opportunities across markets. As a subsidiary of AFAQ Group, AFAQ Partners comes with 30+ years of reputation and unfair access to regional business owners, family offices, and private investor ecosystems.",
    subheadline:
      "We help our clients and partners build the relationships, market access, and investment ecosystems required to deploy and grow capital over the long term with our unfair advantage.",
    hasCTA: true,
    ctaText: "Talk to an Advisor",
    ctaHref: "/contact",
    image: "/images/home_hero.png",
    heroStats: [
      { value: "$5B+", label: "Transactions" },
      { value: "$2B+", label: "Mandates" },
      { value: "$350M", label: "Assets Under Management" },
      { value: "500+", label: "Projects Delivered" },
    ],
  };

  const defaultOfferings = [
    "Investment Advisory",
    "Wealth Management",
    "Family Office Services",
    "Private Investments",
    "Strategic Market Access",
    "Strategic Partnerships",
  ];

  const defaultAccessMetrics = [
    "Access to 350+ Family Offices",
    "Access to 500+ Investment Networks",
    "Access to 200+ Business Ecosystems",
  ];

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image
    ? urlFor(heroData.image).url()
    : displayHero.image;

  const offerings =
    offeringsSection?.items?.map((item: { title?: string }) => item.title).filter(Boolean) ||
    defaultOfferings;

  const accessMetrics =
    accessSection?.items?.map((item: { title?: string }) => item.title).filter(Boolean) ||
    defaultAccessMetrics;

  const dataHeadline =
    dataSectionData?.headline ||
    "That's the operating history we bring to every conversation.";

  return (
    <main>
      <Hero
        eyebrow={displayHero.eyebrow}
        headline={displayHero.headline}
        body={displayHero.body}
        subheadline={displayHero.subheadline}
        ctaText={displayHero.ctaText}
        ctaHref={displayHero.ctaHref}
        hasCTA={displayHero.hasCTA}
        image={heroImage}
        heroStats={displayHero.heroStats}
      />

      <section className="section-padding">
        <div className="container">
          <div className={styles.offeringsRow}>
            <span className={styles.eyebrow}>OUR OFFERINGS</span>
            <ul className={styles.offeringsList}>
              {offerings.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`section-padding ${styles.bgTertiary}`}>
        <div className="container">
          <div className={styles.accessMetricsGrid}>
            {accessMetrics.map((metric: string) => (
              <div key={metric} className={styles.accessMetric}>
                {metric}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.roundedPanel}>
            <div className={styles.splitIntro}>
              <div className={styles.introContent}>
                <span className={styles.eyebrow}>OUR EDGE</span>
                <h2 className={styles.heading}>
                  {edgeSection?.heading ||
                    "Most wealth managers study markets. We've operated inside them."}
                </h2>
                <p className={styles.body}>
                  {edgeSection?.body ||
                    "We've worked directly with founders, builders, operators and leaders, helping scale revenues, raise capital, and launch new businesses from the ground up."}
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

      <AboutUsSolutions initialCategories={categories} initialServices={services} />

      {features.caseStudies && caseStudiesData && caseStudiesData.length > 0 && (
        <section className="section-padding">
          <div className="container">
            <CaseStudiesCarousel caseStudies={caseStudiesData} />
          </div>
        </section>
      )}

      <section className={`section-padding ${styles.quoteSection}`}>
        <div className="container">
          <blockquote className={styles.quoteBlock}>{dataHeadline}</blockquote>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.groupPanel}>
            <h2 className={styles.headingWhite}>
              You&apos;ve worked hard to build what you have. Let&apos;s make sure it&apos;s in the right hands.
            </h2>
            <div className={styles.ctaGroup}>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="uppercase-button">
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
