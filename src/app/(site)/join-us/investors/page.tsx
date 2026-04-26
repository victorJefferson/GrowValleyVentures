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
    absolute: "Investors | GrowValley",
  },
  description:
    "Access exclusive investment opportunities with GrowValley.",
  openGraph: {
    title: "Investors | GrowValley",
    description: "Access exclusive investment opportunities with GrowValley.",
    url: "https://gv.ventures/join-us/investors",
  },
};

export default async function InvestorsPage() {
  let heroData = null;
  try {
    heroData = await client.fetch(heroQuery, { pageSlug: "careers" });
  } catch (err) {
    console.error("Investors Hero Fetch Error:", err);
  }

  const defaultHero = {
    eyebrow: "INVESTORS",
    headline: "Exclusive Access to Direct Opportunities.",
    subheadline: "GrowValley provides qualified investors with access to transactions sourced through our deep network and relationships, not public listings. We focus on transparency, discipline, and alignment.",
    image: "/images/careers_hero.png",
  };

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image ? urlFor(heroData.image).url() : displayHero.image;

  return (
    <main>
      <Hero
        eyebrow="INVESTORS"
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
              We invest alongside our clients. Alignment of interest is not just a phrase for us; it&apos;s the foundation of how we operate.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 WHO WE LOOK FOR */}
      <section className={`section-padding ${styles.bgTertiary}`}>
        <div className="container">
          <div className={styles.whoWeLookFor}>
            <div className={styles.leftCol}>
              <span className={styles.eyebrow}>OUR INVESTOR PHILOSOPHY</span>
              <h2 className={styles.heading}>
                We look for long-term partners who value transparency and direct access.
              </h2>
            </div>
            <div className={styles.body}>
              <p>
                Our investors are looking for more than just a portfolio. They are looking for
                participation in high-conviction opportunities across venture building and private capital.
              </p>
              <p>
                We provide the framework and the execution. You provide the vision.
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
              <span className={styles.eyebrow}>INVESTOR INQUIRIES</span>
              <h2 className={styles.heading}>
                Ready to explore our investment platform?
              </h2>
              <div className={styles.openingCard}>
                <p>
                  If you are a qualified investor seeking access to our private opportunities,
                  get in touch with our investment relations team.
                </p>
                <Link href="mailto:investors@gv.ventures">
                  <Button variant="primary" size="lg">
                    Contact Investor Relations
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
