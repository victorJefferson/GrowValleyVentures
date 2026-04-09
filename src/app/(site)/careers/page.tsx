import type { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import styles from './Careers.module.scss';

export const metadata: Metadata = {
    title: {
        absolute: "Careers | GrowValley"
    },
    description: "Join the GrowValley team and contribute to institutional-grade wealth management and investment excellence.",
    openGraph: {
        title: "Careers | GrowValley",
        description: "Explore career opportunities at GrowValley.",
        url: "https://gv.ventures/careers",
    },
};

export default function CareersPage() {
    const roles = [
        { title: "Investment Professionals", desc: "Portfolio management, capital allocation, and investment analysis." },
        { title: "Capital Markets", desc: "Structuring, transaction, and institutional markets experience." },
        { title: "Operations & Governance", desc: "Fund administration, investment operations, and governance." }
    ];

    return (
        <main>
            <Hero
                eyebrow="Careers"
                headline="Join the GrowValley investment platform."
                subheadline="We build careers for investment professionals who bring rigour, discretion, and long-term orientation to their work."
                image="/images/careers_hero.png"
            />

            <section className="section-padding">
                <div className="container">
                    <div className={styles.intro}>
                        <span className={styles.eyebrow}>Who we look for</span>
                        <h2 className={styles.heading}>Institutional talent. Long-term orientation.</h2>
                        <p className={styles.body}>
                            GrowValley seeks professionals who understand the discipline of principal investment and the complexity of institutional capital structuring.
                        </p>
                    </div>

                    <div className={styles.roleGrid}>
                        {roles.map((role, idx) => (
                            <div key={idx} className={styles.roleTile}>
                                <h3>{role.title}</h3>
                                <p>{role.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className={styles.roundedPanel}>
                        <div className={styles.openings}>
                            <h2 className={styles.heading}>Current Openings</h2>
                            <div className={styles.openingCard}>
                                <div className={styles.statusPill}>ACTIVE</div>
                                <h3 className={styles.subtext}>No current openings.</h3>
                                <p>We are always open to hearing from exceptional investment talent. Speculative applications are welcome.</p>
                                <a href="mailto:careers@gv.ventures" className={styles.email}>careers@gv.ventures</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
