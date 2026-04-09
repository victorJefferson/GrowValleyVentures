import type { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import styles from './Legal.module.scss';

export const metadata: Metadata = {
    title: {
        absolute: "Disclaimer | GrowValley Ventures"
    },
    description: "Important information regarding the informational nature of the GrowValley investment platform. Read our institutional-grade notice for qualified investors.",
    openGraph: {
        title: "Disclaimer | GrowValley Ventures",
        description: "Important notice and informational disclaimer for platform visitors.",
        url: "https://gv.ventures/disclaimer",
    },
};

export default function DisclaimerPage() {
    return (
        <main>
            <Hero
                eyebrow="Legal"
                headline="Disclaimer"
                subheadline="Last updated: April 2026"
                image="/images/modern_boardroom.png"
            />

            <section className="section-padding">
                <div className="container">
                    <div className={styles.legalContent}>
                        <h2>1. Important Notice</h2>
                        <p>
                            The information on this website is published by GrowValley Ventures for general informational purposes only. It does not constitute an offer, invitation, or solicitation to buy or sell any investment, security, or financial instrument in any jurisdiction.
                        </p>

                        <h2>2. No Financial Advice</h2>
                        <p>
                            Nothing on this website constitutes financial, legal, tax, or investment advice of any kind. GrowValley Ventures does not represent that it holds licences or regulatory approvals as a fund manager or investment entity in all jurisdictions in which this website may be accessed.
                        </p>

                        <h2>3. Risk Disclosure</h2>
                        <p>
                            Investments in private companies and ventures involve substantial risk, including the risk of total loss of capital. Past performance is not indicative of future results. Prospective investors should conduct independent due diligence and seek appropriate professional advice before making any investment decision.
                        </p>

                        <h2>4. Restricted Participation</h2>
                        <p>
                            Access to investment opportunities referenced on this website is available only to eligible institutional partners, family offices, and qualified investors meeting defined criteria under applicable law. This website is not directed at retail investors or persons in jurisdictions where its availability would be contrary to local law or regulation.
                        </p>

                        <h2>5. Modification</h2>
                        <p>
                            GrowValley Ventures reserves the right to amend the content of this website at any time without notice.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
