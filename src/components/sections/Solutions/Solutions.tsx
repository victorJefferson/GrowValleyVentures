"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Solutions.module.scss";

const solutions = [
  {
    id: "wealth-management-services",
    title: "Wealth Management Services",
    subtitle:
      "We start by understanding what you have, what you need, and what risk means to you personally. Then we build a strategy around that, not a template, not a default portfolio. Discretionary Mandate: you hand us the wheel within agreed boundaries, we make the calls and report back clearly. Advisory Mandate: we bring the thinking, you make the final call, we execute.",
    href: "/our-capabilities/wealth-management",
  },
  {
    id: "family-office-services",
    title: "Family Office Services",
    subtitle:
      "Some clients need more than investment management. They need someone who sees the whole picture across structures, reporting, philanthropy, and situations that don't fit neatly into a category. Whether we do it directly or bring in the right specialist, nothing gets left unmanaged.",
    href: "/our-capabilities/family-office-services",
  },
  {
    id: "private-access-to-opportunities",
    title: "Private Access to Opportunities",
    subtitle:
      "Through AFAQ Partners' deals desk, select clients access private market opportunities that never reach the public. We don't just pass these deals along, we've operated, built, and invested in businesses ourselves. We source the deals, vet them through people who've actually built businesses, and focus on your exit.",
    href: "/our-capabilities/private-access-to-opportunities",
  },
  {
    id: "succession-planning-services",
    title: "Succession Planning Services",
    subtitle:
      "How your wealth is held matters as much as how it's invested. We help you set up structures that protect your assets and make it straightforward to pass wealth to the next generation. We restructure where it makes sense, for protection, efficiency, and cost.",
    href: "/our-capabilities/succession-planning-services",
  },
];

export const Solutions = () => {
  return (
    <section className={styles.solutionsWrapper}>
      <div className={styles.solutionsPanel}>
        <div className="container">
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionHeadline}>
              We don&apos;t sell products. We don&apos;t take commissions. We build strategies.
            </h2>
            <p className={styles.sectionBody}>
              Our process is direct, we start with your capital, your risk profile, and where you actually want to end up. Then we build backwards from there. Just a clear mandate, consistent execution, and a team that&apos;s been on both sides of the table.
            </p>
          </header>

          <div className={styles.cardsGrid}>
            {solutions.map((s, idx) => (
              <article key={s.id} className={styles.solutionsCard}>
                <span className={styles.cardIndex}>0{idx + 1}</span>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitleH2}>{s.title}</h3>
                  <p className={styles.subtitle}>{s.subtitle}</p>
                </div>
                <Link href={s.href} className={styles.learnMore}>
                  Learn more <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
