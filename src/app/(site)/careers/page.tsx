import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import styles from "./Careers.module.scss";
import { client } from "@/lib/sanity";
import { heroQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";

export const metadata: Metadata = {
  title: {
    absolute: "Careers | GrowValley",
  },
  description:
    "Join the GrowValley team and contribute to institutional-grade wealth management and investment excellence.",
  openGraph: {
    title: "Careers | GrowValley",
    description: "Explore career opportunities at GrowValley.",
    url: "https://gv.ventures/careers",
  },
};

export default async function CareersPage() {
  let heroData = null;
  try {
    heroData = await client.fetch(heroQuery, { pageSlug: "careers" });
  } catch (err) {
    console.error("Careers Hero Fetch Error:", err);
  }

  const defaultHero = {
    eyebrow: "CAREERS",
    headline: "Join GrowValley.",
    subheadline: "We are always looking for wealth management professionals who bring rigour, discretion, and a client-first approach to their work.",
    image: "/images/careers_hero.png",
  };

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image ? urlFor(heroData.image).url() : displayHero.image;

  const roles = [
    {
      title: "Wealth Management Professionals",
      desc: "Portfolio management, client advisory, and wealth planning.",
    },
    {
      title: "Capital Markets",
      desc: "Structuring, transaction, and wealth markets experience.",
    },
    {
      title: "Operations & Governance",
      desc: "Fund administration, compliance, and client relationship management.",
    },
  ];

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
          <div className={styles.intro}>
            <h2 className={styles.heading}>Who we look for</h2>
          </div>

          <div className={styles.roleGrid}>
            {roles.map((role, idx) => (
              <div key={idx} className={styles.roleTile}>
                <h3>{role.title}</h3>
                <p>{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.roundedPanel}>
            <div className={styles.openings}>
              <h2 className={styles.heading}>Current Openings</h2>
              <div className={styles.openingCard}>
                <h3 className={styles.subtext}>No current openings.</h3>
                <p>
                  We are always open to hearing from exceptional talent.
                  Speculative applications are welcome.
                </p>
                <a href="mailto:careers@gv.ventures" className={styles.email}>
                  careers@gv.ventures
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
