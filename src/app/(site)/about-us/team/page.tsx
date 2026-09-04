import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { heroQuery, teamMembersQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import styles from "../AboutUs.module.scss";

export const metadata: Metadata = {
  title: "Our Team | AFAQ Partners",
  description: "The people behind every decision at AFAQ Partners.",
};

export default async function TeamPage() {
  let heroData = null;
  let advisoryTeam: any[] = [];

  try {
    [heroData, advisoryTeam] = await Promise.all([
      client.fetch(heroQuery, { pageSlug: "team" }),
      client.fetch(teamMembersQuery, { memberType: "advisory" }),
    ]);
  } catch (err) {
    console.error("Team fetch error:", err);
  }

  const defaultHero = {
    eyebrow: "OUR TEAM",
    headline: "The people behind every decision.",
    subheadline:
      "Every person at AFAQ Partners has been on the inside of real decisions, not just the advice that follows them. They have invested, structured, managed, and protected capital across markets and cycles. That is who you are working with at AFAQ Partners.",
    hasCTA: false,
    image: "/images/team_hero.png",
  };

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image
    ? urlFor(heroData.image).url()
    : displayHero.image;

  const fallbackTeam = [
    { name: "Sofia Alvarez", role: "Capital Strategy and Investment Readiness Advisor", imagePath: "/images/people/sofia_alvarez.png" },
    { name: "Aarav Malhotra", role: "Senior Growth and Transformation Advisor", imagePath: "/images/people/aarav_malhotra.bmp" },
    { name: "Nadia El-Sayed", role: "Investment Readiness Advisor", imagePath: "/images/people/nadia.bmp" },
    { name: "Priya Menon", role: "Capital Structuring Advisor", imagePath: "/images/people/priya_menon.bmp" },
    { name: "Lucas Moreau", role: "Transaction Readiness Advisor", imagePath: "/images/people/lucas_moreau.png" },
    { name: "Daniel Fischer", role: "Capital Strategy Advisor", imagePath: "/images/people/daniel_fischer.bmp" },
  ];

  const team = advisoryTeam.length ? advisoryTeam : fallbackTeam;
  const placeholderImg = "/images/placeholderPerson.jpg";

  return (
    <main>
      <Hero
        eyebrow={displayHero.eyebrow}
        headline={displayHero.headline}
        subheadline={displayHero.subheadline}
        hasCTA={displayHero.hasCTA ?? false}
        image={heroImage}
      />

      <section className="section-padding">
        <div className="container">
          <div className={`${styles.sectionHeader} text-center`}>
            <h2 className={styles.heading}>Our advisory team.</h2>
          </div>

          <div className={styles.teamGrid}>
            {team.map((member: any, idx: number) => (
              <div key={idx} className={styles.teamMemberCard}>
                <div className={styles.memberImage}>
                  <img
                    src={
                      member.image
                        ? urlFor(member.image).url()
                        : member.imagePath || placeholderImg
                    }
                    alt={member.name}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.groupPanel}>
            <h2 className={styles.headingWhite}>Join our team</h2>
            <p className={styles.bodyWhite}>
              We are always looking for wealth management professionals who bring rigour, discretion, and a client-first approach to their work.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/join-us/jobs">
                <Button variant="secondary" size="lg">
                  VIEW CAREERS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
