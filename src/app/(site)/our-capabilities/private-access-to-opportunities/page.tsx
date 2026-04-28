import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { Zap, Briefcase, Building2, Layers, ShieldCheck } from "lucide-react";
import styles from "../Capabilities.module.scss";
import { CapabilitiesLeader } from '@/components/ui/CapabilitiesLeader';

export const metadata: Metadata = {
  title: "Private Market Access | GrowValley",
  description: "Through the GrowValley network, select clients access private market opportunities that never circulate publicly.",
};

export default function PrivateAccessPage() {
  return (
    <main>
      <Hero
        isShort
        eyebrow="Expertise — Private Market Access"
        headline={<>The best deals don&apos;t advertise.<br />We find them anyway.</>}
        subheadline="Through the GrowValley network, select clients access private market opportunities that never circulate publicly. We don't just pass deals along. We've been inside them."
        image="/images/private_access_hero.png"
        hasCTA={false}
      />

      {/* SECTION 2 — WHY THIS IS DIFFERENT */}
      <section className={`${styles.introSection} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.introContent}>
            <span className={styles.sectionEyebrow}>Why This Is Different</span>
            <h2 className={styles.introHeading}>
              Most firms show you a brochure.<br />
              We show you what we&apos;ve actually done.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center' }}>
              <p className={styles.introParagraph}>
                Private markets require judgment, not just access. Anyone can forward a deal memo.
              </p>
              <p className={styles.introParagraph}>
                Fewer people can tell you whether the exit makes sense. Whether the operator can deliver. Whether the structure holds when things get complicated.
              </p>
              <p className={styles.introParagraph}>
                We&apos;ve built businesses, deployed capital, and sat across the table from founders and boards across more than 500 projects. That history shows up in every deal we bring to clients.
              </p>
              <p className={styles.introParagraph}>
                <strong>No volume for the sake of it. No recycled deal flow. No passing along opportunities we wouldn&apos;t back ourselves.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE ACCESS */}
      <section className={styles.section} style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className={styles.sectionHeaderSimple} style={{ textAlign: 'center' }}>
            <h2 className="section-title">
              Three areas. One standard.<br />
              The exit has to make sense.
            </h2>
          </div>

          <div className={styles.serviceGrid}>
            <ServiceCard
              key="private-equity"
              title="Private Equity"
              description="Access to established businesses raising growth or buyout capital. We focus on fundamentals. Cash flow. Positioning. Realistic exit timelines."
              slug="private-equity"
              iconName="Briefcase"
            />
            <ServiceCard
              key="venture-capital"
              title="Venture Capital"
              description="High-growth private companies from early stage through to pre-IPO. We evaluate the team, the market, and the cap table. Not just the pitch."
              slug="venture-capital"
              iconName="Zap"
            />
            <ServiceCard
              key="real-estate-access"
              title="Real Estate"
              description="Direct and structured access to assets across the Middle East, Western Europe, and Asia. We work with operators who have a track record in their markets. Not just presence."
              slug="real-estate-access"
              iconName="Building2"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW WE WORK */}
      <section className={`${styles.processSection} ${styles.bgLight}`} style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className={styles.twoColumnHeader} style={{ alignItems: 'center' }}>

            {/* Left Column: Header */}
            <div className={styles.headerLeft} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingRight: '2rem' }}>
              <span className={styles.sectionEyebrow} style={{ marginBottom: 0 }}>How We Work</span>
              <h2 className={styles.mainTitle} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15, marginTop: '0.5rem', marginBottom: '2rem' }}>
                Three things we do that most firms skip.
              </h2>
              <div style={{ width: '200px', height: '200px', borderRadius: '50%', backgroundColor: 'var(--color-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary-navy)', border: '1px solid var(--color-surface-3)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                <ShieldCheck size={80} strokeWidth={1.2} />
              </div>
            </div>

            {/* Right Column: Cards */}
            <div className={styles.headerRight} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              <div style={{ backgroundColor: 'var(--color-white)', padding: '2.5rem', borderRadius: '1rem', border: '1px solid var(--color-surface-3)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', transition: 'transform 0.3s ease' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', marginBottom: '1rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--color-accent-blue)', marginRight: '0.75rem', fontWeight: 700 }}>I.</span>
                  Source with context
                </h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: '1.75', margin: 0 }}>
                  We source globally across private equity, venture, real estate, and corporate raises. Not from a database. From relationships built through years of active deal work.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--color-white)', padding: '2.5rem', borderRadius: '1rem', border: '1px solid var(--color-surface-3)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', transition: 'transform 0.3s ease' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', marginBottom: '1rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--color-accent-blue)', marginRight: '0.75rem', fontWeight: 700 }}>II.</span>
                  Vet with operator judgment
                </h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: '1.75', margin: 0 }}>
                  Every deal goes through people who have actually built and run businesses. We know what a good deal looks like. And what a well-structured bad one looks like.
                </p>
              </div>

              <div style={{ backgroundColor: 'var(--color-white)', padding: '2.5rem', borderRadius: '1rem', border: '1px solid var(--color-surface-3)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', transition: 'transform 0.3s ease' }}>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', marginBottom: '1rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--color-accent-blue)', marginRight: '0.75rem', fontWeight: 700 }}>III.</span>
                  Focus on your exit
                </h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: '1.75', margin: 0 }}>
                  We start with the exit logic. Not the entry story. If the return doesn&apos;t hold on the way out, we don&apos;t go in.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHO THIS IS FOR */}
      <section className={styles.section} style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Right Column: Header (Wraps to top on mobile) */}
            <div style={{ flex: '1 1 400px' }}>
              <span className={styles.sectionEyebrow} style={{ marginBottom: 0 }}>Who This Is For</span>
              <h2 className={styles.mainTitle} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15, marginTop: '0.5rem', color: 'var(--color-primary-navy)' }}>
                This is for clients who are serious about putting capital to work.
              </h2>
            </div>
            {/* Left Column: Body Text (Wraps to bottom on mobile) */}
            <div style={{ flex: '1 1 500px' }}>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.75', marginBottom: '1.5rem', opacity: 0.9 }}>
                Private market access is not about browsing opportunities. It&apos;s about making decisions with real capital behind them.
              </p>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.75', marginBottom: '1.5rem', opacity: 0.9 }}>
                We work with clients allocating meaningfully, not speculatively. Business owners, operators, and investors moving beyond public markets into situations that require conviction.
              </p>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.75', margin: 0, opacity: 0.9 }}>
                Every opportunity is presented with full documentation and our own view on risk, structure, and exit logic.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 5 — LEADER */}
      <CapabilitiesLeader
        eyebrow="The Leadership"
        title={<>Expertise rooted in<br />deal execution.</>}
        description="Our private market access team is led by practitioners who have built, scaled, and exited businesses. We bring the same rigour to your capital that we apply to our own operating mandates."
        image="/images/people/lucas_moreau.png"
        name="Lucas Moreau"
        designation="Transaction Readiness Advisor"
      />
      {/* SECTION 6 — CTA */}
      <section className={styles.ctaBanner} style={{ paddingBottom: 'var(--section-gap)' }}>
        <div className="container">
          <div className={styles.ctaBannerPanel} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '3rem', textAlign: 'left' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ color: 'var(--color-white)', marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, lineHeight: 1.15 }}>
                These opportunities don't wait. Neither should you.
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem', margin: 0, lineHeight: 1.6 }}>
                No commitment required. The first conversation is to understand whether there is a fit.
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
