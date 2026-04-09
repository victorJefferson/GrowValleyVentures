import type { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import styles from './Legal.module.scss';

export const metadata: Metadata = {
    title: {
        absolute: "Privacy Policy | GrowValley Ventures"
    },
    description: "GrowValley Ventures is committed to protecting the privacy and security of your personal data. Read our investment platform's privacy policy.",
    openGraph: {
        title: "Privacy Policy | GrowValley Ventures",
        description: "Institutional-grade data protection and privacy standards.",
        url: "https://gv.ventures/privacy-policy",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <main>
            <Hero
                eyebrow="Legal"
                headline="Privacy Policy"
                subheadline="Last updated: April 2026"
                image="/images/modern_boardroom.png"
            />

            <section className="section-padding">
                <div className="container">
                    <div className={styles.legalContent}>
                        <h2>1. Data Protection</h2>
                        <p>GrowValley Ventures is committed to protecting the privacy and security of your personal data. This policy outlines how we collect, use, and safeguard information provided by visitors to our investment platform.</p>

                        <h2>2. Information Collection</h2>
                        <p>We may collect information including, but not limited to, name, contact details, and institutional affiliation when you enquire about platform readiness or institutional capital partnerships.</p>

                        <h2>3. Use of Information</h2>
                        <p>Information provided is used solely for the purpose of assessing eligibility for platform participation and maintaining communication with qualified investors and institutional partners.</p>

                        <h2>4. Data Security</h2>
                        <p>We implement robust technical and organizational measures to ensure that your data is protected against unauthorized access, loss, or alteration.</p>

                        <h2>5. Contact</h2>
                        <p>For questions regarding our privacy practices, please contact our compliance department at compliance@gv.ventures.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
