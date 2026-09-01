import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { heroQuery, teamMembersQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import styles from "../AboutUs.module.scss";

export const metadata: Metadata = {
  title: "Leadership | AFAQ Partners",
  description: "The leadership team at AFAQ Partners.",
};

export default async function LeadershipPage() {
  let heroData = null;
  let leadershipTeam: any[] = [];

  try {
    [heroData, leadershipTeam] = await Promise.all([
      client.fetch(heroQuery, { pageSlug: "leadership" }),
      client.fetch(teamMembersQuery, { memberType: "leadership" }),
    ]);
  } catch (err) {
    console.error("Leadership fetch error:", err);
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
    {
      name: "William J. Daly",
      role: "CIO & Partner",
      imagePath: "/images/people/william.jpg",
      bio: [
        "William J. Daly brings more than 40+ years of executive, investment, and entrepreneurial experience to AFAQ Partners.",
      ],
    },
    {
      name: "Jazeer Jamal",
      role: "CEO & Partner",
      imagePath: "/images/people/jazeer_jamal.jpg",
      bio: [
        "Jazeer Jamal brings 25+ years of entrepreneurial, executive, and investment experience to AFAQ Partners.",
      ],
    },
    {
      name: "Suhail Ismail",
      role: "CXO & Partner",
      imagePath: "/images/people/suhail.jpg",
      bio: [
        "Suhail Ismail brings over 15 years of operational experience to AFAQ Partners.",
      ],
    },
  ];

  const team = leadershipTeam.length ? leadershipTeam : fallbackTeam;
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
            <h2 className={styles.heading}>The principals.</h2>
          </div>

          <div className={styles.leadershipList}>
            {team.map((member: any, idx: number) => (
              <div key={idx} className={styles.leadershipBioCard}>
                <div className={styles.leadershipBioHeader}>
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
                  <div>
                    <h3>{member.name}</h3>
                    <p className={styles.role}>{member.role}</p>
                  </div>
                </div>
                {member.bio?.map((para: string, i: number) => (
                  <p key={i} className={styles.bioParagraph}>
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.groupPanel}>
            <h2 className={styles.headingWhite}>Join our team.</h2>
            <p className={styles.bodyWhite}>
              We are always looking for professionals who bring rigour, discretion, and a client-first approach to their work. If that describes you, we want to hear from you.
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
