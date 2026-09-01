"use client";

import React from 'react';
import styles from './Hero.module.scss';
import { Button } from './Button';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';

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
    /** Optional second CTA */
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
    image?: any;
    isShort?: boolean;
    heroStats?: HeroStat[];
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
}: HeroProps) {
    const heroImageSrc =
        typeof image === 'string'
            ? image
            : image?.asset
                ? urlFor(image).url()
                : '/images/home_hero.png';

    return (
        <section className={`${styles.heroSection} ${isShort ? styles.isShort : ''}`}>
            {/* Full-bleed background image */}
            <img
                src={heroImageSrc}
                alt=""
                aria-hidden="true"
                className={styles.heroBg}
            />

            {/* Dark gradient overlay */}
            <div className={styles.heroOverlay} aria-hidden="true" />

            {/* Content */}
            <div className={styles.heroInner}>
                <div className={styles.heroContent}>
                    {eyebrow && (
                        <span className={styles.eyebrow}>{eyebrow}</span>
                    )}

                    <h1 className={styles.headline}>{headline}</h1>

                    {subheadline && (
                        <p className={styles.subheadline}>{subheadline}</p>
                    )}

                    {body && (
                        <p className={styles.body}>{body}</p>
                    )}

                    {hasCTA && ctaText && ctaHref && (
                        <div className={styles.ctaGroup}>
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
                    )}
                </div>

                {heroStats && heroStats.length > 0 && (
                    <div className={styles.heroStatsPanel} aria-label="Key metrics">
                        <div className={styles.heroStatsGrid}>
                            {heroStats.map((stat, index) => (
                                <div
                                    key={`${stat.label}-${index}`}
                                    className={styles.heroStatItem}
                                    style={{ animationDelay: `${0.15 + index * 0.1}s` }}
                                >
                                    <span className={styles.heroStatValue}>{stat.value}</span>
                                    <span className={styles.heroStatLabel}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
