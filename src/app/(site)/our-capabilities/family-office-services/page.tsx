import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CapabilitiesLeader } from "@/components/ui/CapabilitiesLeader";
import { Button } from "@/components/ui/Button";
import { Building2, BarChart3, Heart, Briefcase, Globe, Palette } from "lucide-react";
import styles from "../Capabilities.module.scss";

export const metadata: Metadata = {
  title: "Family Office Services | GrowValley",
  description: "Taking responsibility for the full picture, across every structure, relationship, and decision that touches your family's wealth.",
};

export default function FamilyOfficePage() {
  return (
    <main>
      <Hero
        isShort
        eyebrow="Expertise — Family Office"
        headline="Family Office Services"
        subheadline="Coordinating the full picture for families whose financial affairs have outgrown a single relationship."
        image="/images/corporate_headquarters.png"
        hasCTA={false}
      />

      {/* SECTION 2 — OPENING */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.splitIntro}>
            <div>
              <span className={styles.sectionEyebrow}>Our Philosophy</span>
              <h2 className={styles.introHeading}>
                When your wealth is too complex for one conversation, we coordinate all of it.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p className={styles.introParagraph}>
                Some clients arrive with a single question. Others arrive with a structure that spans four jurisdictions, three advisors, a holding company, and a portfolio that no one has seen in full.
              </p>
              <p className={styles.introParagraph}>
                That is a family office problem. And it requires a different kind of firm.
              </p>
              <p className={styles.introParagraph}>
                GrowValley acts as the central coordination layer for families whose financial affairs have outgrown a single relationship. We manage the full picture: structures, reporting, advisors, transactions, and the situations that do not fit a standard mandate.
              </p>
              <p className={styles.introParagraph}>
                We work directly where we have the expertise. We bring in the right specialist where they are better placed. And we make sure nothing slips through the gaps.
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
              Three areas. One point of accountability.
            </h2>
          </div>

          <div className={styles.serviceGrid}>
            <ServiceCard
              key="family-office-setup"
              title="Family Office Setup & Incubation"
              description="For families ready to formalise their wealth management structure. We design, build, and incubate a Single Family Office from the ground up: governance, reporting framework, staffing model, and operating mandate. We stay close through the first operating cycle, then hand over with full documentation."
              slug="family-office-setup-and-incubation"
              iconName="Building2"
            />
            <ServiceCard
              key="wealth-consolidation"
              title="Wealth Consolidation & Reporting"
              description="A full view of your wealth in one place. We consolidate holdings across asset classes, custodians, and geographies into a single reporting framework. Most families with complex wealth have never seen everything in one document. This changes that."
              slug="wealth-consolidation-reporting"
              iconName="BarChart3"
            />
            <ServiceCard
              key="ma-ipo"
              title="M&A & IPO Advisory"
              description="For families with operating assets considering a transaction. We provide advisory support through acquisitions, business sales, and public listings, sitting alongside your legal and banking advisors with the operating perspective they do not have."
              slug="ma-and-ipo-advisory"
              iconName="Briefcase"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW WE WORK */}
      <section className={`${styles.bgLight}`} style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className={styles.sectionEyebrow}>How We Work</span>
            <h2 className={styles.introHeading} style={{ marginBottom: '2rem' }}>
              One mandate. Complete coverage.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
              <p className={styles.introParagraph}>
                Every family office engagement starts with a full picture review. We map what you have, who manages it, how it is structured, and what is missing.
              </p>
              <p className={styles.introParagraph}>
                From there, we build a coordination model that puts everything under one point of accountability without removing the specialists who are already doing good work.
              </p>
              <p className={styles.introParagraph} style={{ fontWeight: 600, color: 'var(--color-primary-navy)' }}>
                We do not replace. We coordinate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — LEADER */}
      <CapabilitiesLeader
        eyebrow="The Leadership"
        title={<>Expertise rooted in<br />operational success.</>}
        description="Our family office services are led by practitioners who have managed both corporate and personal wealth at scale. We bring the same rigour to your family's assets that we apply to our own operating businesses."
        image="/images/people/priya_shah.png"
        name="Priya Shah"
        designation="Family Office Advisor"
      />

      {/* SECTION 6 — CTA */}
      <section className={styles.ctaBanner} style={{ paddingBottom: 'var(--section-gap)' }}>
        <div className="container">
          <div className={styles.ctaBannerPanel} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '3rem', textAlign: 'left' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ color: 'var(--color-white)', marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, lineHeight: 1.15 }}>
                Your wealth deserves more than fragmented management.
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem', margin: 0, lineHeight: 1.6 }}>
                The first conversation is to understand your goals and how we can best support your family&apos;s wealth journey.
              </p>
            </div>
            <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'flex-start' }}>
              <Link href="/contact" style={{ display: 'inline-block' }}>
                <Button size="lg" variant="secondary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', borderRadius: '3rem' }}>
                  Let&apos;s Talk About Your Family Office
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
