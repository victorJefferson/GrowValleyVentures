import React from "react";
import styles from "./WhoWeWorkWith.module.scss";

export const WhoWeWorkWith = () => {
  return (
    <section className={styles.whoWeWorkWithPremium}>
      <div className={styles.whoWeWorkWithInner}>
        <div className="container">
          <h2 className={styles.sectionHeading}>Who we work with</h2>
          <div className={styles.partnerCardsBento}>
            <div className={`${styles.bentoCard} ${styles.cardHero}`}>
              <div className={styles.bentoContent}>
                <p>HNW individuals and families building toward specific long-term goals</p>
              </div>
            </div>

            <div className={`${styles.bentoCard} ${styles.cardSquare}`}>
              <div className={styles.bentoContent}>
                <p>Qualified investors seeking direct access to private market opportunities</p>
              </div>
            </div>

            <div className={`${styles.bentoCard} ${styles.cardSquare}`}>
              <div className={styles.bentoContent}>
                <p>International clients requiring cross-border structuring and succession planning</p>
              </div>
            </div>

            <div className={`${styles.bentoCard} ${styles.cardWide}`}>
              <div className={styles.bentoContent}>
                <p>Ultra-HNW families requiring full family office coordination</p>
              </div>
            </div>

            <div className={`${styles.bentoCard} ${styles.cardPanorama}`}>
              <div className={styles.bentoContent}>
                <p>Business owners and entrepreneurs deploying capital following a liquidity event</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
