import type { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutUs.module.scss';

export const metadata: Metadata = {
    title: {
        absolute: "About Us | GrowValley Ventures",
    },
    description: "Learn about the GrowValley investment platform, our governance-led approach to capital deployment, and our commitment to institutional discipline.",
    openGraph: {
        title: "About Us | GrowValley Ventures",
        description: "The investment platform of GrowValley Group, governed and built for long-term capital discipline.",
        url: "https://gv.ventures/about-us",
    },
};

export default function AboutUsPage() {
    const whatWeDo = [
        {
            title: "Direct Portfolio Investment",
            desc: "Governed readiness for curated portfolio positions, which are structured with defined terms and investment frameworks prior to participation."
        },
        {
            title: "Structured Co-Investment",
            desc: "Equity, hybrid, and co-investment frameworks for institutional partners participating alongside the principal investor."
        },
        {
            title: "Investment Structuring",
            desc: "Capital vehicles and structures designed for institutional-grade participation across the portfolio."
        },
        {
            title: "Portfolio Construction",
            desc: "Active portfolio built across ventures, operating businesses, and structured capital positions."
        },
        {
            title: "Institutional Capital Partnerships",
            desc: "Long-term capital partnerships with family offices and institutional allocators, which are governance-led and transparently reported."
        },
        {
            title: "Capital Governance",
            desc: "Investment governance, reporting standards, and portfolio oversight across all active positions."
        }
    ];

    return (
        <main>
            <Hero
                eyebrow="About GrowValley"
                headline="The investment platform of GrowValley Group."
                subheadline="GrowValley provides structured readiness for direct portfolio investment, co-investment opportunities, and institutional capital partnerships, governed, documented, and built for long-term capital discipline."
                image="/images/home_hero.png"
            />

            <section className="section-padding">
                <div className="container">
                    <div className={styles.positioningGrid}>
                        <div className={styles.pillar}>
                            <span className={styles.pillarLabel}>Direct Portfolio Investment</span>
                        </div>
                        <div className={styles.pillar}>
                            <span className={styles.pillarLabel}>Structured<br />Co-Investment</span>
                        </div>
                        <div className={styles.pillar}>
                            <span className={styles.pillarLabel}>Institutional Capital Partnerships</span>
                        </div>
                        <div className={styles.pillar}>
                            <span className={styles.pillarLabel}>Governance-Led Capital Deployment</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className={styles.roundedPanel}>
                        <div className={styles.splitIntro}>
                            <div className={styles.introContent}>
                                <span className={styles.eyebrow}>Who we are</span>
                                <h2 className={styles.heading}>GrowValley's investment platform</h2>
                                <p className={styles.body}>
                                    GrowValley's investment platform provides structured readiness for direct portfolio positions, co-investment opportunities, and institutional capital partnerships for family offices, qualified investors, and institutional allocators.
                                </p>
                            </div>
                            <div className={styles.introImage}>
                                <Image
                                    src="/images/leadership_collaboration.png"
                                    alt="Leadership Collaboration"
                                    width={600}
                                    height={400}
                                    className={styles.borderCard}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <span className={styles.eyebrow}>What we do</span>
                    <h2 className={styles.heading}>Core Capabilities</h2>
                    <div className={styles.functionGrid}>
                        {whatWeDo.map((item, idx) => (
                            <Card key={idx} className={styles.functionCard}>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`section-padding ${styles.bgNavy}`}>
                <div className="container text-center">
                    <div className={styles.groupContext}>
                        <span className={styles.eyebrowWhite}>Part of GrowValley Group</span>
                        <h2 className={styles.headingWhite}>Part of GrowValley Group</h2>
                        <p className={styles.bodyWhite}>
                            GrowValley Group operates across four verticals, including Consulting, Ventures, Works, and Studios. GrowValley's investment platform is the vehicle through which the Group deploys capital, structures investment readiness, and manages portfolio positions.
                        </p>
                        <div className={styles.ctaGroup}>
                            <Link href="/contact">
                                <Button size="lg" variant="secondary">Speak to an Expert</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
