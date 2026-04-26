import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import styles from "../JoinUs.module.scss";
import { client } from "@/lib/sanity";
import { heroQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Experts | GrowValley",
  },
  description:
    "Join the GrowValley network of industry specialists and experts.",
  openGraph: {
    title: "Experts | GrowValley",
    description: "Join the GrowValley network of industry specialists and experts.",
    url: "https://gv.ventures/join-us/experts",
  },
};

export default async function ExpertsPage() {
  let heroData = null;
  try {
    heroData = await client.fetch(heroQuery, { pageSlug: "careers" });
  } catch (err) {
    console.error("Experts Hero Fetch Error:", err);
  }

  const defaultHero = {
    eyebrow: "EXPERTS",
    headline: "A Network of Specialists. A Collective of Excellence.",
    subheadline: "GrowValley's strength lies in our ability to assemble the right minds for the right problems. We are constantly looking for industry veterans, technical specialists, and visionary thinkers to join our network.",
    image: "/images/careers_hero.png",
  };

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image ? urlFor(heroData.image).url() : displayHero.image;

  return (
    <main>
      <Hero
        eyebrow="EXPERTS"
        headline={defaultHero.headline}
        subheadline={defaultHero.subheadline}
        ctaText={displayHero.ctaText}
        ctaHref={displayHero.ctaHref}
        hasCTA={displayHero.hasCTA}
        image={heroImage}
      />

      {/* SECTION 2 INTRODUCTION */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.pullQuote}>
            <div className={styles.pullQuoteAccent} />
            <p className={styles.pullQuoteText}>
              We don&apos;t just consult; we build. Our experts are active participants in the creation of value across our portfolio companies and services.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 WHO WE LOOK FOR */}
      <section className={`section-padding ${styles.bgTertiary}`}>
        <div className="container">
          <div className={styles.whoWeLookFor}>
            <div className={styles.leftCol}>
              <span className={styles.eyebrow}>THE EXPERT NETWORK</span>
              <h2 className={styles.heading}>
                We look for deep domain expertise and a practical, outcome-driven mindset.
              </h2>
            </div>
            <div className={styles.body}>
              <p>
                Whether your expertise is in finance, technology, operations, or a specific industry vertical,
                we provide a platform where your insights can have a tangible impact.
              </p>
              <p>
                We value independence and the ability to cut through noise to find signal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 CONTACT */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.roundedPanel}>
            <div className={styles.openings}>
              <div className={styles.sectionIcon} style={{ margin: '0 auto 1.5rem' }}>
                <Mail />
              </div>
              <span className={styles.eyebrow}>JOIN THE NETWORK</span>
              <h2 className={styles.heading}>
                Interested in joining our expert network?
              </h2>
              <div className={styles.openingCard}>
                <p>
                  We are always looking to expand our collective of specialists.
                  Tell us about your expertise and how you think you can contribute to the GrowValley ecosystem.
                </p>
                <Link href="mailto:experts@gv.ventures">
                  <Button variant="primary" size="lg">
                    Submit Your Profile
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
