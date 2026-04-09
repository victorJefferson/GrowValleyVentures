import React from 'react';
import styles from './Hero.module.scss';
import { Button } from './Button';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface HeroProps {
    eyebrow?: React.ReactNode;
    headline: React.ReactNode;
    subheadline?: React.ReactNode;
    ctaText?: string;
    ctaHref?: string;
    image?: any;
}

export function Hero({ eyebrow, headline, subheadline, ctaText, ctaHref, image }: HeroProps) {
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
                            {ctaText && ctaHref && (
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
                    <Image
                        src={heroImageSrc}
                        alt="Hero Model"
                        fill
                        priority
                        className={styles.heroImage}
                        sizes="(max-width: 1024px) 100vw, 35vw"
                    />
                </div>
            </div>
        </section>
    );
}
