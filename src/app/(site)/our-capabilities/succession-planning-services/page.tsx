import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CapabilitiesLeader } from "@/components/ui/CapabilitiesLeader";
import { Button } from "@/components/ui/Button";
import { Network, FileText, ShieldCheck, Globe, Scale, Users } from "lucide-react";
import styles from "../Capabilities.module.scss";

export const metadata: Metadata = {
  title: "Succession Planning | GrowValley",
  description: "Succession planning is not a document. It's a system that defines how your wealth is held, how it transfers, and what happens when decisions need to be made without you.",
};

export default function SuccessionPlanningPage() {
  return (
    <main>
      <Hero
        isShort
        eyebrow="Expertise — Succession Planning"
        headline={<>You spent a lifetime building it.<br />Make sure it survives you.</>}
        subheadline="Most families don’t lose wealth to bad markets. They lose it to poor structuring, unclear succession, and decisions left too late."
        image="/images/succession_planning_hero.png"
        hasCTA={false}
      />

      {/* SECTION 2 — PHILOSOPHY */}
      <section className={`${styles.introSection} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.introContent}>
            <span className={styles.sectionEyebrow}>Our Philosophy</span>
            <h2 className={styles.introHeading}>
              Succession planning is not a document.<br />
              It&apos;s a system.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
              <p className={styles.introParagraph}>
                One that defines how your wealth is held, how it transfers, and what happens when decisions need to be made without you.
              </p>
              <p className={styles.introParagraph}>
                Without that system, things break. Assets get tied up. Families disagree. Value gets lost in the process.
              </p>
              <p className={styles.introParagraph}>
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
              Six areas. One outcome.<br />
              Continuity without friction.
            </h2>
          </div>

          <div className={styles.serviceGrid}>
            <ServiceCard
              key="wealth-transfer"
              title="Wealth Transfer Architecture"
              description="Who receives what. In what form. Under what conditions. Across borders. Across generations. The structure matches your intentions. Not assumptions."
              slug=""
              iconName="Network"
            />
            <ServiceCard
              key="wills-legal"
              title="Wills and Legal Frameworks"
              description="A will is the foundation. We work alongside legal partners to ensure your documentation is enforceable across the jurisdictions that matter. No gaps. No ambiguity."
              slug=""
              iconName="FileText"
            />
            <ServiceCard
              key="trust-structures"
              title="Trust Structures"
              description="Where a will is not enough, trusts add control and protection. We define when they make sense and how they should be structured."
              slug=""
              iconName="ShieldCheck"
            />
            <ServiceCard
              key="cross-border"
              title="Cross-Border Considerations"
              description="If your assets span jurisdictions, your succession plan has to as well. We identify conflicts early and coordinate the right specialists to resolve them."
              slug=""
              iconName="Globe"
            />
            <ServiceCard
              key="shariah-compliant"
              title="Shariah-Compliant Succession"
              description="For clients following Islamic inheritance frameworks. We structure succession in line with faraid, wasiyyah, and waqf where required."
              slug=""
              iconName="Scale"
            />
            <ServiceCard
              key="family-governance"
              title="Family Governance"
              description="Structures don’t hold without clarity. We define roles, decision rights, and how disagreements are handled. Before they become expensive."
              slug=""
              iconName="Users"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW WE WORK */}
      <section className={`${styles.introSection} ${styles.bgLight}`} style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className={styles.introContent}>
            <span className={styles.sectionEyebrow}>How We Work</span>
            <h2 className={styles.introHeading}>
              Structured Properly.<br />
              Not rushed at the end.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
              <p className={styles.introParagraph}>
                We start by mapping what you actually have. Assets, structures, jurisdictions, family dynamics. Then we identify where things break. Gaps in ownership. Conflicts across jurisdictions. Missing clarity on decision-making.
              </p>
              <p className={styles.introParagraph}>
                We design the framework around your situation. Not a template. Not a standard structure. Then we coordinate with legal and tax specialists to implement it properly.
              </p>
              <p className={styles.introParagraph}>
                As your situation evolves, the structure evolves with it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — LEADER */}
      <CapabilitiesLeader
        eyebrow="The Leadership"
        title={<>Expertise rooted in<br />continuity and legacy.</>}
        description="Our succession planning services are led by experts who understand the intersection of law, tax, and family dynamics. We ensure your legacy is protected through every transition."
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
                If your succession structure hasn’t been reviewed recently, that’s the risk.
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem', margin: 0, lineHeight: 1.6 }}>
                Talk to an advisor to ensure your wealth survives you as intended.
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
