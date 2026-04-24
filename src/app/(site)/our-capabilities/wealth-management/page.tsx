import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CapabilitiesLeader } from "@/components/ui/CapabilitiesLeader";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, BarChart3, Target } from "lucide-react";
import styles from "../Capabilities.module.scss";

export const metadata: Metadata = {
  title: "Wealth Management | GrowValley",
  description: "Built around you. Not around what's easiest to sell. Custom wealth strategies that put your outcomes first.",
};

export default function WealthManagementPage() {
  return (
    <main>
      <Hero
        isShort
        eyebrow="Expertise — Wealth Management"
        headline={<>Wealth Management</>}
        subheadline="Built around you. Not around what's easiest to sell."
        image="/images/modern_boardroom.png"
        hasCTA={false}
      />

      {/* SECTION 2 — PHILOSOPHY */}
      <section className={`${styles.introSection} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.introContent}>
            <span className={styles.sectionEyebrow}>Our Philosophy</span>
            <h2 className={styles.introHeading}>
              We start by understanding what you have, what you need, and what risk means to you personally.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
              <p className={styles.introParagraph}>
                Then we build a strategy around that, not a template, not a default portfolio.
              </p>
              <p className={styles.introParagraph}>
                We don&apos;t earn from what we put you in. No commissions, no products to push, no structures that serve us before they serve you. Every decision is answerable to one thing: your outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SERVICES */}
      <section className={styles.section} style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className={styles.sectionHeaderSimple} style={{ textAlign: 'center' }}>
            <h2 className="section-title">
              We offer services in three areas.
            </h2>
          </div>

          <div className={styles.serviceGrid}>
            <ServiceCard
              key="discretionary-mandate"
              title="Discretionary Mandate"
              description="You set the parameters: risk tolerance, liquidity needs, return objectives. Within those boundaries, we manage the portfolio entirely. Every decision is ours to make and ours to own."
              slug="discretionary-mandate"
              iconName="ShieldCheck"
            />
            <ServiceCard
              key="advisory-mandate"
              title="Advisory Mandate"
              description="We provide active, dynamic guidance on asset allocation, individual securities, and investment vehicles. We cut through the noise, present a clear view, and give you a tailored recommendation. You make the final call."
              slug="advisory-mandate"
              iconName="BarChart3"
            />
            <ServiceCard
              key="financial-planning"
              title="Financial Planning"
              description="Retirement. Education. Wealth transfer. Business exit. We work backwards from where you want to be and build a strategy to get you there, with clear milestones, realistic timelines, and no generic assumptions."
              slug="financial-planning"
              iconName="Target"
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
              Most wealth firms study markets. We&apos;ve operated inside them, building, scaling, and closing real companies. When we advise on your capital, that experience is in the room.
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
        title={<>Experience rooted in<br />building businesses.</>}
        description="Our wealth management team brings years of market experience to every mandate. We provide the same rigour to your capital that we apply to our own operating businesses."
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
                Let&apos;s talk about wealth.
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem', margin: 0, lineHeight: 1.6 }}>
                The first conversation is to understand your goals and how we can best support your wealth journey.
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
