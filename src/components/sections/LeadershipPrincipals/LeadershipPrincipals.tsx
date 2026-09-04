"use client";

import React, { useEffect, useRef } from "react";
import styles from "./LeadershipPrincipals.module.scss";

export type LeadershipMember = {
  name: string;
  role: string;
  bio?: string[];
  imageUrl: string;
};

type LeadershipPrincipalsProps = {
  members: LeadershipMember[];
};

export function LeadershipPrincipals({ members }: LeadershipPrincipalsProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const rows = Array.from(
      root.querySelectorAll<HTMLElement>(`.${styles.principal}`)
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      rows.forEach((row) => row.classList.add(styles.isVisible));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.22, rootMargin: "0px 0px -8% 0px" }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, [members]);

  return (
    <section
      ref={sectionRef}
      className={`section-padding ${styles.section}`}
      aria-labelledby="principals-heading"
    >
      <div className="container">
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Leadership</p>
          <h2 id="principals-heading" className={styles.heading}>
            The principals.
          </h2>
        </header>

        <div className={styles.list}>
          {members.map((member, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                key={member.name}
                className={`${styles.principal} ${
                  reversed ? styles.isReversed : ""
                }`}
              >
                <div className={styles.portrait}>
                  <img src={member.imageUrl} alt={member.name} />
                </div>

                <div className={styles.copy}>
                  <p className={styles.role}>{member.role}</p>
                  <h3 className={styles.name}>{member.name}</h3>
                  <div className={styles.bio}>
                    {member.bio?.map((para, i) => (
                      <p
                        key={`${member.name}-bio-${i}`}
                        className={styles.bioParagraph}
                        style={
                          {
                            ["--bio-delay" as string]: `${0.22 + i * 0.04}s`,
                          } as React.CSSProperties
                        }
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
