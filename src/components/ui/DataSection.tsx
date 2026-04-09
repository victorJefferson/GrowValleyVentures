import React from 'react';
import Link from 'next/link';
import styles from './DataSection.module.scss';
import { Button } from './Button';
import { CountUp } from './CountUp';

export const DataSection = () => {
    return (
        <section className={`${styles.dataSection}`}>
            <div className={styles.dataSectionInner}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.leftColumn}>
                        <h2 className={styles.headline}>Capital deployed. Mandates delivered.</h2>
                        <p className={styles.description}>
                            GrowValley structures and governs capital readiness for family offices, institutional allocators, and qualified investors, applying the discipline of an established investment platform.
                        </p>
                    </div>
                    <div className={styles.rightColumn}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}><CountUp prefix="$" end={2} suffix="B+" /></span>
                            <span className={styles.statLabel}>Transactions Guided</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}><CountUp end={10} suffix="+" /></span>
                            <span className={styles.statLabel}>Public Sector Projects</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}><CountUp prefix="$" end={150} suffix="M" /></span>
                            <span className={styles.statLabel}>AUM Across Portfolio</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}><CountUp end={50} suffix="+" /></span>
                            <span className={styles.statLabel}>Experts & Operators</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
