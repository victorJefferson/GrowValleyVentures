"use client";

import React, { useEffect, useState } from "react";
import styles from "./Hero.module.scss";
import { Button } from "./Button";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";

export interface HeroStat {
  value: string;
  label: string;
}

interface HeroProps {
  eyebrow?: React.ReactNode;
  headline: React.ReactNode;
  subheadline?: React.ReactNode;
  body?: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
  hasCTA?: boolean;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  image?: any;
  isShort?: boolean;
  heroStats?: HeroStat[];
  /** Home banner: put stats between headline and subheadline */
  statsPlacement?: "afterHeadline" | "bottom";
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Parse values like "$5B+", "$350M", "500+" into prefix / number / suffix. */
function parseStatValue(raw: string): {
  prefix: string;
  number: number;
  suffix: string;
  decimals: number;
} {
  const match = raw.trim().match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) {
    return { prefix: "", number: 0, suffix: raw, decimals: 0 };
  }
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return {
    prefix,
    number: parseFloat(numStr),
    suffix,
    decimals,
  };
}

function HeroStatValue({
  value,
  delayMs,
}: {
  value: string;
  delayMs: number;
}) {
  const parsed = parseStatValue(value);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (prefersReducedMotion() || !parsed.number) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let startAt = 0;
    const duration = 1100;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const timeout = window.setTimeout(() => {
      startAt = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - startAt) / duration);
        const current = parsed.number * easeOut(progress);
        const formatted =
          parsed.decimals > 0
            ? current.toFixed(parsed.decimals)
            : String(Math.round(current));
        setDisplay(`${parsed.prefix}${formatted}${parsed.suffix}`);
        if (progress < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setDisplay(value);
        }
      };
      raf = requestAnimationFrame(tick);
    }, delayMs);

    return () => {
      window.clearTimeout(timeout);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, delayMs, parsed.number, parsed.prefix, parsed.suffix, parsed.decimals]);

  return <span className={styles.heroStatValue}>{display}</span>;
}

function HeadlineContent({ headline }: { headline: React.ReactNode }) {
  if (typeof headline !== "string") {
    return <span className={styles.headlineBlock}>{headline}</span>;
  }

  const words = headline.split(/(\s+)/).filter((part) => part.length > 0);
  let wordIndex = 0;

  return (
    <>
      {words.map((part, i) => {
        if (/^\s+$/.test(part)) {
          return <React.Fragment key={`ws-${i}`}>{part}</React.Fragment>;
        }
        const delay = 0.12 + wordIndex * 0.055;
        wordIndex += 1;
        return (
          <span
            key={`w-${i}`}
            className={styles.headlineWord}
            style={{ ["--hero-delay" as string]: `${delay}s` }}
          >
            {part}
          </span>
        );
      })}
    </>
  );
}

export function Hero({
  eyebrow,
  headline,
  subheadline,
  body,
  ctaText,
  ctaHref,
  hasCTA = true,
  secondaryCtaText,
  secondaryCtaHref,
  image,
  isShort = false,
  heroStats,
  statsPlacement = "bottom",
}: HeroProps) {
  const heroImageSrc =
    typeof image === "string"
      ? image
      : image?.asset
        ? urlFor(image).url()
        : "/images/home_hero.png";

  const hasStats = Boolean(heroStats && heroStats.length > 0);
  const statsAfterHeadline = hasStats && statsPlacement === "afterHeadline";
  const statsAtBottom = hasStats && statsPlacement !== "afterHeadline";
  const fillLayout = statsAfterHeadline;

  const statsPanel = hasStats ? (
    <div className={styles.heroStatsPanel} aria-label="Key metrics">
      <div className={styles.heroStatsGrid}>
        {heroStats!.map((stat, index) => {
          const delay = 0.45 + index * 0.1;
          return (
            <div
              key={`${stat.label}-${index}`}
              className={styles.heroStatItem}
              style={{ ["--hero-delay" as string]: `${delay}s` }}
            >
              <HeroStatValue value={stat.value} delayMs={delay * 1000} />
              <span className={styles.heroStatLabel}>{stat.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  ) : null;

  const ctaBlock =
    hasCTA && ctaText && ctaHref ? (
      <div
        className={styles.ctaGroup}
        style={{ ["--hero-delay" as string]: fillLayout ? "1.15s" : "0.55s" }}
      >
        <Link href={ctaHref}>
          <Button variant="secondary" size="lg">
            {ctaText}
          </Button>
        </Link>
        {secondaryCtaText && secondaryCtaHref && (
          <Link href={secondaryCtaHref}>
            <Button variant="outline" size="lg">
              {secondaryCtaText}
            </Button>
          </Link>
        )}
      </div>
    ) : null;

  const content = fillLayout ? (
    <div className={`${styles.heroContent} ${styles.heroContentFill}`}>
      <div className={styles.heroBandTop}>
        {eyebrow && (
          <span
            className={styles.eyebrow}
            style={{ ["--hero-delay" as string]: "0s" }}
          >
            {eyebrow}
          </span>
        )}
        <h1 className={styles.headline}>
          <HeadlineContent headline={headline} />
        </h1>
      </div>

      <div className={styles.heroBandMid}>{statsPanel}</div>

      <div className={styles.heroBandBottom}>
        {subheadline && (
          <p
            className={styles.subheadline}
            style={{ ["--hero-delay" as string]: "0.95s" }}
          >
            {subheadline}
          </p>
        )}
        {body && (
          <p
            className={styles.body}
            style={{ ["--hero-delay" as string]: "1.05s" }}
          >
            {body}
          </p>
        )}
        {ctaBlock}
      </div>
    </div>
  ) : (
    <div className={styles.heroContent}>
      {eyebrow && (
        <span
          className={styles.eyebrow}
          style={{ ["--hero-delay" as string]: "0s" }}
        >
          {eyebrow}
        </span>
      )}

      <h1 className={styles.headline}>
        <HeadlineContent headline={headline} />
      </h1>

      {subheadline && (
        <p
          className={styles.subheadline}
          style={{ ["--hero-delay" as string]: "0.35s" }}
        >
          {subheadline}
        </p>
      )}

      {body && (
        <p
          className={styles.body}
          style={{ ["--hero-delay" as string]: "0.45s" }}
        >
          {body}
        </p>
      )}

      {ctaBlock}
    </div>
  );

  return (
    <section
      className={`${styles.heroSection} ${isShort ? styles.isShort : ""} ${
        hasStats ? styles.withStats : ""
      } ${fillLayout ? styles.fillViewport : ""}`}
    >
      <img
        src={heroImageSrc}
        alt=""
        aria-hidden="true"
        className={styles.heroBg}
      />

      <div className={styles.heroOverlay} aria-hidden="true" />

      <div className={styles.heroInner}>
        {content}
        {statsAtBottom && statsPanel}
      </div>
    </section>
  );
}
