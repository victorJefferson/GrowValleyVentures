import React from 'react';
import { services } from "@/config/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Network } from "lucide-react";
import styles from "../Capabilities.module.scss";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Family Office Services | GrowValley",
  description: "Coordinating the full range of services that complex wealth demands, working with best-in-class specialists.",
};

export default function FamilyOfficePage() {
  return (
    <main>
      <section
        id="family-office"
        className={`${styles.section} ${styles.bgLight}`}
        style={{ paddingTop: '120px' }}
      >
        <div className="container">
          <div className={styles.twoColumnHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.headerIcon}>
                <div
                  className={`${styles.iconCircle} ${styles.circularColoured}`}
                >
                  <Network size={40} strokeWidth={1.5} />
                </div>
              </div>
              <h2 className={styles.mainTitle}>Family Office Services</h2>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.descriptorText}>
                Investment management is one dimension of wealth. Most families
                need more. We coordinate the full range of services that complex
                wealth demands, working with best-in-class specialists and
                managing every engagement on your behalf.
              </p>
            </div>
          </div>

          <div className={styles.serviceGrid}>
            {services
              .filter((s) => s.category === "Family Office Services")
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
