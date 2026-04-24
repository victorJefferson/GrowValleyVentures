import React from 'react';
import { services } from "@/config/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Zap } from "lucide-react";
import styles from "../Capabilities.module.scss";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Private Access to Opportunities | GrowValley",
  description: "Access to PE, VC, and real estate transactions sourced through relationships, not listings.",
};

export default function PrivateAccessPage() {
  return (
    <main>
      <section
        id="private-access"
        className={`${styles.section}`}
        style={{ paddingTop: '120px' }}
      >
        <div className="container">
          <div className={styles.twoColumnHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.headerIcon}>
                <div
                  className={`${styles.iconCircle} ${styles.circularColoured}`}
                >
                  <Zap size={40} strokeWidth={1.5} />
                </div>
              </div>
              <h2 className={styles.mainTitle}>
                Private Access to Opportunities
              </h2>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.descriptorText}>
                The most valuable opportunities are distributed before the
                market opens. GrowValley&apos;s Deals Desk gives clients access
                to PE, VC, and real estate transactions that are sourced through
                relationships, not listings.
              </p>
            </div>
          </div>

          <div className={styles.serviceGrid}>
            {services
              .filter((s) => s.category === "Private Access to Opportunities")
              .map((service) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  description={service.description}
                  slug={service.slug}
                  iconName={service.iconName}
                />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
