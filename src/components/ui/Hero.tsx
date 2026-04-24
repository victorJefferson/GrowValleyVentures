import React from 'react';
import styles from './Hero.module.scss';
import { Button } from './Button';
import Link from 'next/link';

import { urlFor } from '@/lib/sanity';

interface HeroProps {
    eyebrow?: React.ReactNode;
    headline: React.ReactNode;
    subheadline?: React.ReactNode;
    ctaText?: string;
    ctaHref?: string;
    hasCTA?: boolean;
    image?: any;
}

export function Hero({ eyebrow, headline, subheadline, ctaText, ctaHref, hasCTA = true, image }: HeroProps) {
    const heroImageSrc = typeof image === 'string' ? image : (image?.asset ? urlFor(image).url() : "/images/home_hero.png");

    return (
        <section className={styles.heroWrapper}>
            <div className={styles.heroOuter}>
                <div className={styles.heroContentWrapper}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
                            <h1 className={styles.headline}>
                                {headline}
                            </h1>
                            {subheadline && (
                                <p className={styles.subheadline}>
                                    {subheadline}
                                </p>
                            )}
                            {hasCTA && ctaText && ctaHref && (
                                <div className={styles.ctaGroup}>
                                    <Link href={ctaHref}>
                                        <Button className='text-bold' variant="secondary" size="lg">{ctaText}</Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.heroArtDecoration}>
                    <img
                        src={heroImageSrc}
                        alt="Hero Model"
                        className={styles.heroImage}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </section>
    );
}
