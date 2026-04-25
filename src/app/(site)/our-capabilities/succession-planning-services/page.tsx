"use client";

import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CapabilitiesLeader } from "@/components/ui/CapabilitiesLeader";
import { Button } from "@/components/ui/Button";
import { Layers, ScrollText, Users } from "lucide-react";
import styles from "../Capabilities.module.scss";

export default function SuccessionPlanningPage() {
  return (
    <main>
      <Hero
        isShort
        eyebrow="Services"
        headline="Wealth & Succession Planning"
        subheadline="Succession planning is not a document. It's a system that defines how your wealth is held, how it transfers, and what happens when decisions need to be made without you."
        image="/images/succession_planning_hero.png"
        hasCTA={false}
      />

      {/* SECTION 2 — PHILOSOPHY */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.splitIntro}>
            <div>
              <span className={styles.sectionEyebrow}>Our Philosophy</span>
              <h2 className={styles.introHeading}>
                You spent a lifetime building it. Make sure it survives you.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p className={styles.introParagraph}>
                Most families don’t lose wealth to bad markets. They lose it to poor structuring, unclear succession, and decisions left too late.
              </p>
              <p className={styles.introParagraph}>
                Succession planning is not a document. It’s a system.
              </p>
              <p className={styles.introParagraph}>
                One that defines how your wealth is held, how it transfers, and what happens when decisions need to be made without you.
              </p>
              <p className={styles.introParagraph}>
                Without that system, things break. Assets get tied up. Families disagree. Value gets lost in the process.
              </p>
              <p className={styles.introParagraph} style={{ fontWeight: 600, color: 'var(--color-primary-navy)' }}>
                We build the structure before you need it. Not after.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE COVER */}
      <section className={styles.section} style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className={styles.sectionHeaderSimple} style={{ textAlign: 'center' }}>
            <h2 className="section-title">
              Three areas. One outcome. Continuity without friction.
            </h2>
          </div>

          <div className={styles.serviceGrid}>
            <ServiceCard
              key="wealth-transfer"
              title="Wealth Transfer Architecture"
              description="Who receives what. In what form. Under what conditions. Across borders. Across generations. The structure matches your intentions. Not assumptions."
              slug="wealth-transfer-architecture"
              iconName="Layers"
            />
            <ServiceCard
              key="shariah-compliant"
              title="Shariah-Compliant Succession"
              description="For clients following Islamic inheritance frameworks. We structure succession in line with faraid, wasiyyah, and waqf where required."
              slug="shariah-compliant-succession"
              iconName="ScrollText"
            />
            <ServiceCard
              key="family-governance"
              title="Family Governance"
              description="Structures don’t hold without clarity. We define roles, decision rights, and how disagreements are handled. Before they become expensive."
              slug="family-governance"
              iconName="Users"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW WE WORK */}
      <section className={`${styles.bgLight}`} style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className={styles.splitIntro}>
            <div>
              <span className={styles.sectionEyebrow}>How We Work</span>
              <h2 className={styles.introHeading}>
                Structured properly. Not rushed at the end.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p className={styles.introParagraph} style={{ textAlign: 'left', margin: 0 }}>
                We start by mapping what you actually have. Assets, structures, jurisdictions, family dynamics.
              </p>
              <p className={styles.introParagraph} style={{ textAlign: 'left', margin: 0 }}>
                Then we identify where things break. Gaps in ownership. Conflicts across jurisdictions. Missing clarity on decision-making.
              </p>
              <p className={styles.introParagraph} style={{ textAlign: 'left', margin: 0 }}>
                We design the framework around your situation. Not a template. Not a standard structure.
              </p>
              <p className={styles.introParagraph} style={{ textAlign: 'left', margin: 0 }}>
                Then we coordinate with legal and tax specialists to implement it properly.
              </p>
              <p className={styles.introParagraph} style={{ fontWeight: 600, color: 'var(--color-primary-navy)', textAlign: 'left', margin: 0 }}>
                As your situation evolves, the structure evolves with it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — LEADER */}
      <CapabilitiesLeader
        eyebrow="The Leadership"
        title={<>Expertise rooted in<br />continuity.</>}
        description="Our succession services are led by practitioners who understand the delicate balance between technical structuring and family dynamics. We ensure your legacy is protected through frameworks that work across generations."
        image="/images/placeholderPerson.jpg"
        name="John Doe"
        designation="Designation"
      />

      {/* SECTION 6 — CTA */}
      <section className={styles.ctaBanner} style={{ paddingBottom: 'var(--section-gap)' }}>
        <div className="container">
          <div className={styles.ctaBannerPanel} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '3rem', textAlign: 'left' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ color: 'var(--color-white)', marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, lineHeight: 1.15 }}>
                If your succession structure hasn&apos;t been reviewed recently, that&apos;s the risk.
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem', margin: 0, lineHeight: 1.6 }}>
                The first conversation is to understand your goals and how we can best support your family&apos;s wealth journey.
              </p>
            </div>
            <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'flex-start' }}>
              <Link href="/contact" style={{ display: 'inline-block' }}>
                <Button size="lg" variant="secondary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', borderRadius: '3rem' }}>
                  Talk to an Advisor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
