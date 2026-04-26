import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import styles from "../AboutUs.module.scss";

export const metadata: Metadata = {
  title: "Leadership | GrowValley",
  description: "The leadership team at GrowValley Ventures.",
};

export default function LeadershipPage() {
  const leadershipTeam = [
    {
      name: "Jazeer Jamal",
      role: "Group Chairman and CEO, GrowValley Group",
    },
    {
      name: "William J. Daly",
      role: "Co-Founder and CXO, GrowValley Group",
    },
    {
      name: "Suhail Ismail",
      role: "Group COO, GrowValley",
    },
  ];

  const advisoryTeam = [
    {
      name: "Sofia Alvarez",
      role: "Capital Strategy and Investment Readiness Advisor",
    },
    {
      name: "Aarav Malhotra",
      role: "Senior Growth and Transformation Advisor",
    },
    {
      name: "Nadia El-Sayed",
      role: "Investment Readiness Advisor",
    },
    {
      name: "Priya Menon",
      role: "Capital Structuring Advisor",
    },
    {
      name: "Lucas Moreau",
      role: "Transaction Readiness Advisor",
    },
    {
      name: "Daniel Fischer",
      role: "Capital Strategy Advisor",
    },
  ];

  const placeholderImg = "/images/placeholderPerson.jpg";

  return (
    <main>
      <Hero
        eyebrow="OUR TEAM"
        headline="The people behind every decision."
        subheadline="Every person at GrowValley Ventures has been on the inside of real decisions, not just the advice that follows them. They have invested, structured, managed, and protected capital across markets and cycles. That is who you are working with at GrowValley."
        hasCTA={false}
        image="/images/team_hero.png"
      />

      <section className="section-padding">
        <div className="container">
          <div className={`${styles.sectionHeader} text-center`}>
            <h2 className={styles.heading}>The Principals</h2>
          </div>

          <div className={styles.teamGrid}>
            {leadershipTeam.map((member, idx) => (
              <div key={idx} className={styles.teamMemberCard}>
                <div className={styles.memberImage}>
                  <img src={placeholderImg} alt={member.name} />
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

      <section className="section-padding" style={{ borderTop: '1px solid hsla(var(--primary-h), var(--primary-s), var(--primary-l), 0.1)' }}>
        <div className="container">
          <div className={`${styles.sectionHeader} text-center`}>
            <h2 className={styles.heading}>Our Advisory Team</h2>
          </div>

          <div className={styles.teamGrid}>
            {advisoryTeam.map((member, idx) => (
              <div key={idx} className={styles.teamMemberCard}>
                <div className={styles.memberImage}>
                  <img src={placeholderImg} alt={member.name} />
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
              We are always looking for wealth management professionals who bring
              rigour, discretion, and a client-first approach to their work.
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
