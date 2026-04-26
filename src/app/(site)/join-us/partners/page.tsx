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
    absolute: "Partners | GrowValley",
  },
  description:
    "Explore partnership opportunities with GrowValley.",
  openGraph: {
    title: "Partners | GrowValley",
    description: "Explore partnership opportunities with GrowValley.",
    url: "https://gv.ventures/join-us/partners",
  },
};

export default async function PartnersPage() {
  let heroData = null;
  try {
    heroData = await client.fetch(heroQuery, { pageSlug: "careers" });
  } catch (err) {
    console.error("Partners Hero Fetch Error:", err);
  }

  const defaultHero = {
    eyebrow: "PARTNERS",
    headline: "Strategic Partnerships for Lasting Impact.",
    subheadline: "GrowValley sits at a rare intersection: wealth management, venture building, and active capital deployment. We look for partners who share our vision for long-term value creation and disciplined execution.",
    image: "/images/careers_hero.png",
  };

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image ? urlFor(heroData.image).url() : displayHero.image;

  return (
    <main>
      <Hero
        eyebrow="PARTNERS"
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
              We&apos;re a small, senior team. There&apos;s no hiding behind process here.
              Our partnerships are built on mutual trust and shared objectives.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 WHO WE LOOK FOR */}
      <section className={`section-padding ${styles.bgTertiary}`}>
        <div className="container">
          <div className={styles.whoWeLookFor}>
            <div className={styles.leftCol}>
              <span className={styles.eyebrow}>WHO WE PARTNER WITH</span>
              <h2 className={styles.heading}>
                We seek partners who are serious about the work and the outcomes.
              </h2>
            </div>
            <div className={styles.body}>
              <p>
                Whether you are an institution, a specialist firm, or an individual expert,
                we look for alignment in values and a commitment to excellence.
              </p>
              <p>
                We value independence, transparency, and the drive to change outcomes.
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
              <span className={styles.eyebrow}>GET IN TOUCH</span>
              <h2 className={styles.heading}>
                Interested in partnering with us?
              </h2>
              <div className={styles.openingCard}>
                <p>
                  We are always open to discussing strategic opportunities.
                  If you believe there is a synergy between your work and ours, let&apos;s start a conversation.
                </p>
                <Link href="mailto:partners@gv.ventures">
                  <Button variant="primary" size="lg">
                    Contact Our Partnership Team
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
