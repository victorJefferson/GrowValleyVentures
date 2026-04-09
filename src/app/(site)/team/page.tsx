import type { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import styles from './Team.module.scss';

export const metadata: Metadata = {
    title: {
        absolute: "Our Team | GrowValley Ventures"
    },
    description: "Meet the GrowValley investment team, professionals across investment, capital markets, and enterprise, deploying and structuring capital with institutional discipline.",
    openGraph: {
        title: "Our Team | GrowValley Ventures",
        description: "Capital professionals and investment practitioners with institutional discipline.",
        url: "https://gv.ventures/team",
    },
};

export default function TeamPage() {
    const team = [
        { name: "Executive Leadership", title: "Principal Partner", bio: "Leading the GrowValley Group's strategic capital allocation and institutional partnerships." },
        { name: "Investment Director", title: "Head of Portfolio", bio: "Specializing in direct venture participation and structured co-investment frameworks." },
        { name: "Capital Markets", title: "Director of Structuring", bio: "Designing institutional-grade vehicles and hybrid capital instruments for global allocators." },
        { name: "Portfolio Manager", title: "Senior Associate", bio: "Managing active positions across the GrowValley operating businesses and venture ecosystem." },
        { name: "Legal & Governance", title: "Head of Compliance", bio: "Ensuring all investment readiness meets established governance and documentation standards." },
        { name: "Operations", title: "Platform Manager", bio: "Overseeing the technical and operational infrastructure of the GrowValley investment platform." }
    ];

    return (
        <main>
            <Hero
                eyebrow="Our Team"
                headline="Capital professionals. Investment practitioners."
                subheadline="Professionals across investment, capital markets, and enterprise, deploying and structuring capital with institutional discipline."
                image="/images/team_hero.png"
            />

            <section className="section-padding">
                <div className="container">
                    <div className={styles.intro}>
                        <span className={styles.eyebrow}>Institutional Discipline</span>
                        <h2 className={styles.heading}>Building aligned capital partnerships.</h2>
                        <p className={styles.body}>
                            Our team brings decades of combined experience across global capital markets, private equity, and venture construction. We approach every position with the rigour of a principal investor.
                        </p>
                    </div>

                    <div className={styles.teamGrid}>
                        {team.map((member, idx) => (
                            <Card key={idx} className={styles.teamCard}>
                                <div className={styles.cardHeader}>
                                    <h3>{member.name}</h3>
                                    <span className={styles.title}>{member.title}</span>
                                </div>
                                <p>{member.bio}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`section-padding ${styles.bgSecondary}`}>
                <div className="container text-center">
                    <h2 className={styles.heading}>Join our team</h2>
                    <p className={styles.body}>We are always looking for investment professionals who bring rigour, discretion, and long-term orientation to their work.</p>
                    <Link href="/careers">
                        <Button variant="secondary" size="lg">View Careers</Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
