import React from 'react';
import { services } from "@/config/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Network, Target } from "lucide-react";
import styles from "../Capabilities.module.scss";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Wealth Management | GrowValley",
  description: "Disciplined execution from day one. Portfolio construction built around your long-term objectives.",
};

export default function WealthManagementPage() {
  return (
    <main>
      <section
        id="wealth-management"
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
                  <Target size={40} strokeWidth={1.5} />
                </div>
              </div>
              <h2 className={styles.mainTitle}>Wealth Management</h2>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.descriptorText}>
                Every mandate begins with your goals, your risk profile, and
                your time horizon. Your Relationship Manager, supported by our
                Investment Committee, constructs a strategy built for you
                specifically. No defaults. No templates. Disciplined execution
                from day one.
              </p>
            </div>
          </div>

          <div className={styles.serviceGrid}>
            {services
              .filter((s) => s.category === "Wealth Management")
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
