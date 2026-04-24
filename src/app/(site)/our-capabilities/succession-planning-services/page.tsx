import React from 'react';
import { services } from "@/config/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ScrollText } from "lucide-react";
import styles from "../Capabilities.module.scss";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Succession Planning Services | GrowValley",
  description: "Constructing frameworks that protect your family and reflect your intentions across generations.",
};

export default function SuccessionPlanningPage() {
  return (
    <main>
      <section
        id="succession-planning"
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
                  <ScrollText size={40} strokeWidth={1.5} />
                </div>
              </div>
              <h2 className={styles.mainTitle}>Succession Planning Services</h2>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.descriptorText}>
                How you hold wealth determines how much of it endures. Every
                succession plan we design is built to protect your family and
                reflect your intentions across generations, ensuring your
                legacy remains intact.
              </p>
            </div>
          </div>

          <div className={styles.serviceGrid}>
            {services
              .filter((s) => s.category === "Succession Planning Services")
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
