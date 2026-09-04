"use client";

import React, { useEffect, useRef, useState } from "react";
import { CountUp } from "@/components/ui/CountUp";
import styles from "./page.module.scss";

const FOOTER_STATS = [
  { end: 150, prefix: "$", suffix: "M+", label: "Assets Under Management" },
  { end: 3, prefix: "$", suffix: "B+", label: "Revenue Generated" },
  { end: 1, prefix: "$", suffix: "B+", label: "Capital Funded" },
] as const;

const SUPPORTING_COPY =
  "These aren't portfolio projections. They're the result of decisions made, capital deployed, and businesses actually built.";

const TAGLINE = "AFAQ Partners — Dubai. Built by operators. Run for outcomes.";

export function FooterStats() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles.footerStatsSection} ${visible ? styles.footerStatsVisible : ""}`}
      aria-label="Operating outcomes"
    >
      <div className={`container ${styles.footerStatsInner}`}>
        <div className={styles.footerStatsGrid}>
          {FOOTER_STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={styles.footerStatItem}
              style={{ ["--stat-delay" as string]: `${0.1 + index * 0.12}s` }}
            >
              <span className={styles.footerStatValue}>
                {visible ? (
                  <CountUp
                    end={stat.end}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={1400}
                  />
                ) : (
                  `${stat.prefix}0${stat.suffix}`
                )}
              </span>
              <span className={styles.footerStatLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        <p className={styles.footerStatsCopy}>{SUPPORTING_COPY}</p>
        <p className={styles.footerStatsTagline}>{TAGLINE}</p>
      </div>
    </section>
  );
}
