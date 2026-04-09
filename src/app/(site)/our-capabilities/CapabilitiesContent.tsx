"use client";

import React, { useState, useEffect } from 'react';
import { Hero } from '@/components/ui/Hero';
import { Button } from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import styles from './Capabilities.module.scss';

const MandateCard = ({ title, content }: { title: string; content: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div
            className={`${styles.mandateCard} ${isExpanded ? styles.expanded : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className={styles.cardHeader}>
                <h3>{title}</h3>
                <div className={styles.icon}>
                    <ChevronDown size={20} />
                </div>
            </div>
            {isExpanded && (
                <div className={styles.cardContent}>
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

export default function CapabilitiesContent() {
    const [activeSection, setActiveSection] = useState('capital-deployment');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['capital-deployment', 'investment-structuring', 'family-office-institutional', 'direct-investment-readiness'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120,
                behavior: 'smooth'
            });
        }
    };

    return (
        <main>
            <Hero
                eyebrow="Our Capabilities"
                headline="How we deploy and structure capital."
                subheadline="Four core investment capabilities. Each allocates capital with discipline and structures readiness with precision."
                image="/images/capabilities_hero.png"
            />

            {/* Sticky Navigation */}
            <nav className={styles.stickyNav}>
                <div className="container">
                    <ul className={styles.navList}>
                        <li className={activeSection === 'capital-deployment' ? styles.active : ''} onClick={() => scrollTo('capital-deployment')}>
                            Capital Deployment
                        </li>
                        <li className={activeSection === 'investment-structuring' ? styles.active : ''} onClick={() => scrollTo('investment-structuring')}>
                            Investment Structuring
                        </li>
                        <li className={activeSection === 'family-office-institutional' ? styles.active : ''} onClick={() => scrollTo('family-office-institutional')}>
                            Family & Institutional
                        </li>
                        <li className={activeSection === 'direct-investment-readiness' ? styles.active : ''} onClick={() => scrollTo('direct-investment-readiness')}>
                            Direct Investment readiness
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Section 1 */}
            <section id="capital-deployment" className={styles.section}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2>Capital Deployment</h2>
                        <p>GrowValley deploys capital as a principal investor, rather than a passive allocator. Every capital position is governed by a defined investment thesis, risk framework, and return objective.</p>
                    </div>
                    <div className={styles.panelGrid}>
                        <div className={styles.panel}><strong>Direct Investment</strong> Direct capital positions in established businesses and growth-stage ventures.</div>
                        <div className={styles.panel}><strong>Portfolio Company Funding</strong> Capital deployed into GrowValley Group companies at every growth stage.</div>
                        <div className={styles.panel}><strong>Venture Participation</strong> Capital into ecosystem ventures at formation and early growth.</div>
                        <div className={styles.panel}><strong>Strategic Co-Investment</strong> Co-investment alongside institutional partners into thesis-aligned opportunities.</div>
                        <div className={styles.panel}><strong>Sector Allocation</strong> Capital allocated across sectors aligned to GrowValley Group strategy.</div>
                        <div className={styles.panel}><strong>Thesis-Driven Deployment</strong> All deployment governed by investment thesis, risk framework, and return objective.</div>
                    </div>

                    <div className={styles.mandateGrid}>
                        <MandateCard
                            title="Principal Investment"
                            content="GrowValley takes direct equity positions as principal, with defined governance rights, return expectations, and structured exit provisions from inception."
                        />
                        <MandateCard
                            title="Co-Investment Access"
                            content="Institutional partners and qualified investors may participate alongside GrowValley on defined co-investment terms, which are thesis-aligned, documented, and governed."
                        />
                    </div>

                    <div className={styles.outcome}>
                        Outcome: Capital deployed as a principal investor, rather than a passive allocator.
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section id="investment-structuring" className={styles.section}>
                <div className="container">
                    <div className={styles.roundedPanel}>
                        <div className={styles.sectionHeader}>
                            <h2>Investment Structuring</h2>
                            <p>We design the investment vehicles and structures through which institutional partners access GrowValley opportunities. Every structure is built for the specific participation objective, such as equity, hybrid, or co-investment, with governance and exit provisions defined from the outset.</p>
                        </div>
                        <div className={styles.panelGrid}>
                            <div className={styles.panel}><strong>Equity Structures</strong> Equity investment vehicles across portfolio companies and direct opportunities.</div>
                            <div className={styles.panel}><strong>Hybrid Instruments</strong> Hybrid capital instruments balancing return, risk, and governance.</div>
                            <div className={styles.panel}><strong>Co-Investment Frameworks</strong> Co-investment structures for partners participating alongside GrowValley.</div>
                            <div className={styles.panel}><strong>Shareholder Frameworks</strong> Shareholder agreements, dilution models, and governance terms.</div>
                            <div className={styles.panel}><strong>Exit & Liquidity Planning</strong> Defined exit pathways and liquidity provisions structured from inception.</div>
                            <div className={styles.panel}><strong>Investment Governance</strong> Governance and reporting standards maintained across all structured positions.</div>
                        </div>

                        <div className={styles.mandateGrid}>
                            <MandateCard
                                title="Equity Participation"
                                content="Structured equity positions across portfolio companies and direct investment opportunities, with defined governance rights, reporting obligations, and exit mechanics."
                            />
                            <MandateCard
                                title="Hybrid & Co-Investment Structures"
                                content="Hybrid capital instruments and co-investment frameworks for institutional partners seeking exposure alongside GrowValley with defined risk-return parameters."
                            />
                        </div>

                        <div className={styles.outcome}>
                            Outcome: Investment structures built for institutional rigour and long-term capital discipline.
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section id="family-office-institutional" className={styles.section}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2>Family Office & Institutional Capital</h2>
                        <p>GrowValley provides a structured co-investment readiness framework for family offices and institutional allocators, built around long-term capital orientation, portfolio transparency, and governance alignment.</p>
                    </div>
                    <div className={styles.panelGrid}>
                        <div className={styles.panel}><strong>Family Office Partnerships</strong> Long-term partnerships with single and multi-family offices deploying patient capital.</div>
                        <div className={styles.panel}><strong>Institutional Co-Investment</strong> Structured co-investment readiness to curated GrowValley portfolio opportunities.</div>
                        <div className={styles.panel}><strong>Capital Governance</strong> All positions governed by defined documentation, frameworks, and reporting.</div>
                        <div className={styles.panel}><strong>Portfolio Transparency</strong> Clear visibility over positions, performance, and capital activity.</div>
                        <div className={styles.panel}><strong>Aligned Structures</strong> Structures designed to align institutional objectives with portfolio performance.</div>
                        <div className={styles.panel}><strong>Long-Term Orientation</strong> Capital partnerships built on patient, long-term investment alignment.</div>
                    </div>

                    <div className={styles.mandateGrid}>
                        <MandateCard
                            title="Family Office Mandate"
                            content="Long-term capital partnership for single and multi-family offices, including co-investment readiness across curated GrowValley portfolio positions, with defined governance and transparent reporting throughout."
                        />
                        <MandateCard
                            title="Institutional Allocator Framework"
                            content="Structured access for institutional allocators, featuring portfolio transparency, aligned return frameworks, and defined co-investment terms across active GrowValley opportunities."
                        />
                    </div>

                    <div className={styles.outcome}>
                        Outcome: Institutional capital partnerships built on governance, transparency, and alignment.
                    </div>
                </div>
            </section>

            {/* Section 4 */}
            <section id="direct-investment-readiness" className={styles.section}>
                <div className="container">
                    <div className={styles.roundedPanel}>
                        <div className={styles.sectionHeader}>
                            <h2>Direct Investment readiness</h2>
                            <p>GrowValley provides qualified investors with governed readiness to curated portfolio opportunities, which are selected, structured, and fully documented before being made available.</p>
                        </div>
                        <div className={styles.panelGrid}>
                            <div className={styles.panel}><strong>Curated Opportunities</strong> Selected and structured before availability.</div>
                            <div className={styles.panel}><strong>Full Documentation</strong> Terms and governance frameworks provided.</div>
                            <div className={styles.panel}><strong>Qualified Readiness</strong> For institutional partners meeting defined criteria.</div>
                            <div className={styles.panel}><strong>Defined Terms</strong> Size, governance rights, and return frameworks clearly structured.</div>
                            <div className={styles.panel}><strong>Active Oversight</strong> Positions monitored through the investment lifecycle.</div>
                            <div className={styles.panel}><strong>Structured Exit</strong> Pathways and liquidity provisions included in all opportunities.</div>
                        </div>

                        <div className={styles.mandateGrid}>
                            <MandateCard
                                title="Privé Portfolio Access"
                                content="Curated direct investment opportunities made available to qualified investors, which are fully structured, documented, and governed before participation opens. Every opportunity includes defined terms, active oversight, and structured exit provisions."
                            />
                            <MandateCard
                                title="Governed Participation Framework"
                                content="Eligibility criteria, participation terms, and governance rights defined upfront. Qualified investors access GrowValley portfolio positions through a structured framework, rather than open-ended discretion."
                            />
                        </div>

                        <div className={styles.outcome}>
                            Outcome: Direct investment readiness, curated, structured, and governed.
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaBanner}>
                <div className="container">
                    <h2 className={styles.speakToAnExpertBannerHeading}>Serious about capital? <br /> Start with the right structure.</h2>
                    <Link href="/contact">
                        <Button size="lg" variant="secondary">Speak to an Expert</Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
