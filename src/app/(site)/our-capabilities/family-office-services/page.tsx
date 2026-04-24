import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CapabilitiesLeader } from "@/components/ui/CapabilitiesLeader";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Layers, BarChart3, Heart, Briefcase, Building2 } from "lucide-react";
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
        headline={<>Managing complexity so<br />you don&apos;t have to.</>}
        subheadline="Here&apos;s exactly what we take off your plate."
        image="/images/corporate_headquarters.png"
        hasCTA={false}
      />

      {/* SECTION 2 — THE FULL PICTURE */}
      <section className={`${styles.introSection} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.introContent}>
            <span className={styles.sectionEyebrow}>Our Philosophy</span>
            <h2 className={styles.introHeading}>
              We take responsibility for the full picture.<br />
              Across every structure and decision.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
              <p className={styles.introParagraph}>
                We don&apos;t manage the parts that are convenient to manage. We take responsibility for the full picture, across every structure, relationship, and decision that touches your family&apos;s wealth.
              </p>
              <p className={styles.introParagraph}>
                We don&apos;t take commissions. We don&apos;t receive referral fees from third-party managers. We have no product shelf to clear. Our fee is transparent, agreed upfront, and tied entirely to the quality of work we do for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SIX AREAS */}
      <section className={styles.section} style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className={styles.sectionHeaderSimple} style={{ textAlign: 'center' }}>
            <h2 className="section-title">
              We cover six areas. All of them.<br />
              Nothing left unmanaged.
            </h2>
          </div>

          <div className={styles.serviceGrid}>
            <ServiceCard
              key="investment-oversight"
              title="Investment Oversight"
              description="Your portfolio is built around your family's objectives, timeline, and risk position. Not a product menu, not a template. Discretionary or advisory, the mandate answers only to you, and we monitor it continuously."
              slug=""
              iconName="ShieldCheck"
            />
            <ServiceCard
              key="wealth-structuring"
              title="Wealth Structuring and Succession"
              description="How your assets are held is as important as what they're invested in. We review your existing structures, holding companies, trusts, and foundations, and rebuild where it makes sense, across borders and across generations."
              slug=""
              iconName="Layers"
            />
            <ServiceCard
              key="consolidated-reporting"
              title="Consolidated Reporting and Advisor Coordination"
              description="You shouldn't need three logins and two spreadsheets to understand your own net worth. We aggregate everything into one clean view. And where you already have a lawyer, an accountant, or a banker, we manage those relationships on your behalf."
              slug=""
              iconName="BarChart3"
            />
            <ServiceCard
              key="philanthropy"
              title="Philanthropy"
              description="Structured giving, aligned to your values and your tax position. We help you create a lasting legacy through strategic philanthropic initiatives and impact measurement."
              slug=""
              iconName="Heart"
            />
            <ServiceCard
              key="ma-and-ipo"
              title="M&A and IPO"
              description="Advisory coordination for clients navigating corporate transactions alongside their personal wealth. We ensure your business transitions align with your family's long-term objectives."
              slug=""
              iconName="Briefcase"
            />
            <ServiceCard
              key="family-office-setup"
              title="Single Family Office Setup"
              description="Structuring and establishing a dedicated family office for clients ready to formalise their wealth governance. We provide the blueprint for operational excellence and talent acquisition."
              slug=""
              iconName="Building2"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — PULL QUOTE */}
      <section className={`${styles.bgLight}`} style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ fontSize: '5rem', color: 'var(--color-accent-blue)', opacity: 0.2, lineHeight: 0, display: 'block', marginBottom: '2rem', fontFamily: 'serif' }}>&ldquo;</span>
            <blockquote style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--color-primary-navy)', lineHeight: 1.4, fontWeight: 500, fontStyle: 'italic', margin: 0 }}>
              Most family office firms come from banking. We came from building and operating businesses. Over 500 projects. $3B+ in revenue generated. $1B+ in capital deployed. That history is in the room every time we advise on your wealth.
            </blockquote>
            <cite style={{ display: 'block', marginTop: '2.5rem', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-accent-blue)', textTransform: 'uppercase', letterSpacing: '0.1em', fontStyle: 'normal' }}>
              GrowValley Ventures
            </cite>
          </div>
        </div>
      </section>

      {/* SECTION 5 — LEADER */}
      <CapabilitiesLeader
        eyebrow="The Leadership"
        title={<>Expertise rooted in<br />operational success.</>}
        description="Our family office services are led by practitioners who have managed both corporate and personal wealth at scale. We bring the same rigour to your family's assets that we apply to our own operating businesses."
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
                Legacy is complex. Managing it shouldn&apos;t have to be.
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
