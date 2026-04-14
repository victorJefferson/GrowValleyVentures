import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import styles from "./AboutUs.module.scss";
import { client } from "@/lib/sanity";
import { heroQuery, leadershipQuery } from "@/lib/queries";
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

  try {
    [heroData, leadershipData] = await Promise.all([
      client.fetch(heroQuery, { pageSlug: "about" }),
      client.fetch(leadershipQuery),
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

  const whatWeDo = [
    {
      title: "Wealth Management Services",
      desc: "For clients who want their wealth managed with the same rigour applied to institutional capital. Strategy, execution, and ongoing oversight, delivered by one accountable team.",
    },
    {
      title: "Family Office Services",
      desc: "For clients whose needs extend beyond investment. We bring in the right specialists, across legal, philanthropy, M&A, and reporting, and coordinate every engagement on your behalf",
    },
    {
      title: "Private Access to Opportunities",
      desc: "For qualified investors who expect more than the open market offers. Our DealsDesk sources and structures opportunities before they reach general circulation.",
    },
    {
      title: "Succession Planning Services",
      desc: "For clients who want their wealth to outlast them. We design holding structures that protect assets, minimise unnecessary cost, and transfer wealth across generations with precision.",
    },
  ];

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
          <div className={styles.positioningGrid}>
            <div className={styles.pillar}>
              <span className={styles.pillarLabel}>
                Wealth Management Services
              </span>
            </div>
            <div className={styles.pillar}>
              <span className={styles.pillarLabel}>Family Office Services</span>
            </div>
            <div className={styles.pillar}>
              <span className={styles.pillarLabel}>
                Private Access to Opportunities
              </span>
            </div>
            <div className={styles.pillar}>
              <span className={styles.pillarLabel}>
                Succession Planning Services
              </span>
            </div>
          </div>
        </div>
      </section>

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
                  strategy. One point of accountability
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

      <section className="section-padding">
        <div className="container">
          <span className={styles.eyebrow}>WHAT WE DO</span>
          <h2 className={styles.heading}>Our Services</h2>
          <div className={styles.functionGrid}>
            {whatWeDo.map((item, idx) => (
              <Card key={idx} className={styles.functionCard}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
                <h2 className={styles.founderName}>
                  {displayLeadership.name}
                </h2>
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
