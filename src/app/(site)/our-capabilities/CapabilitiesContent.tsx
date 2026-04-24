"use client";

import { Hero } from "@/components/ui/Hero";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { Solutions } from "@/components/sections/Solutions/Solutions";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith/WhoWeWorkWith";
import styles from "./Capabilities.module.scss";

export default function CapabilitiesContent({ heroData }: { heroData?: any }) {
  const defaultHero = {
    eyebrow: "GROWVALLEY",
    headline: "Our Capabilities",
    subheadline: "Four disciplines. One strategy. Total accountability.",
    image: "/images/capabilities_hero.png",
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

      {/* SECTION 2: PAGE INTRO */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introContent}>
            <h2 className={styles.introHeading}>Expertise that actually matters.</h2>
            <p className={styles.introParagraph}>
              Every service we offer exists for one reason, to make sure your money is working as hard as you did to earn it. No filler. No services we can't stand behind. Just focused, expert work across the areas that move the needle.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Solutions Section (dark green) */}
      <Solutions />

      {/* SECTION 4: WHO WE WORK WITH */}
      <WhoWeWorkWith />

      {/* SECTION 5: BOTTOM CTA */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaBannerPanel}>
            <h2 className={styles.speakToAnExpertBannerHeading}>
              Not sure where to start? That's what the first conversation is for.
            </h2>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Talk to an Advisor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
