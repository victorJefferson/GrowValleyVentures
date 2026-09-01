import type { Metadata } from 'next';
import { Hero } from '@/components/ui/Hero';
import styles from './Legal.module.scss';

export const metadata: Metadata = {
    title: {
        absolute: "Privacy Policy | AFAQ Partners"
    },
    description: "AFAQ Partners is committed to protecting the privacy and security of your personal data.",
    openGraph: {
        title: "Privacy Policy | AFAQ Partners",
        description: "AFAQ Partners' commitment to data privacy and security.",
        url: "https://gv.ventures/privacy-policy",
    },
};

const sections = [
    {
        title: "1. Introduction",
        body: "AFAQ Partners LLC (\"AFAQ Partners\", \"we\", \"us\", or \"our\") is committed to protecting the privacy and security of your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website or contact us. Effective date: [DATE — TBC legal review].",
    },
    {
        title: "2. Data Controller",
        body: "The data controller responsible for your personal data is AFAQ Partners LLC, Dubai, United Arab Emirates. For privacy enquiries, contact [privacy@afaqpartners.com — TBC legal review] or reach@afaqpartners.com.",
    },
    {
        title: "3. Information We Collect",
        body: "We may collect: (a) identity and contact data you provide through forms (name, email, phone, country, enquiry type, message); (b) technical data such as IP address, browser type, device information, and pages visited; (c) communication records when you correspond with us; and (d) marketing preferences where you opt in.",
    },
    {
        title: "4. How We Use Your Information",
        body: "We use personal data to respond to enquiries, provide requested services, improve our website, comply with legal obligations, and — where permitted — send relevant communications. We do not sell personal data to third parties for marketing purposes.",
    },
    {
        title: "5. Legal Basis for Processing",
        body: "Depending on context, we process personal data on the basis of: consent; performance of a contract or steps prior to entering a contract; compliance with legal obligations; and legitimate interests in operating and securing our business. Specific legal bases per processing activity: [TBC — legal review].",
    },
    {
        title: "6. Data Sharing and International Transfers",
        body: "We may share data with service providers who assist with hosting, analytics, CRM, email delivery, and compliance — subject to appropriate safeguards. Where data is transferred outside your jurisdiction, we implement measures consistent with applicable law. [TBC — list of subprocessors and transfer mechanisms].",
    },
    {
        title: "7. Data Retention",
        body: "We retain personal data only as long as necessary for the purposes described in this policy, unless a longer period is required by law. Typical retention periods: enquiry records [5 — TBC] years; marketing consent records [7 — TBC] years; technical logs [10 — TBC] days/months as applicable.",
    },
    {
        title: "8. Your Rights",
        body: "Depending on applicable law, you may have rights to access, rectify, erase, restrict, or object to processing of your personal data, and to data portability or withdrawal of consent. To exercise these rights, contact reach@afaqpartners.com. You may also lodge a complaint with a supervisory authority.",
    },
    {
        title: "9. Cookies and Analytics",
        body: "We use cookies and similar technologies to operate the site, remember preferences, and understand usage. Analytics may be provided by [analytics tool name — TBC legal review]. You can manage cookies through your browser settings and our Cookie Policy.",
    },
    {
        title: "10. Contact Us",
        body: "For questions regarding this Privacy Policy or our privacy practices, contact reach@afaqpartners.com or write to AFAQ Partners LLC, Dubai, United Arab Emirates.",
    },
];

export default function PrivacyPolicyPage() {
    return (
        <main>
            <Hero
                eyebrow="Legal"
                headline="Privacy Policy"
                subheadline="Last updated: [DATE — TBC legal review]"
                image="/images/modern_boardroom.png"
                isShort
                hasCTA={false}
            />

            <section className="section-padding">
                <div className="container">
                    <div className={styles.legalContent}>
                        {sections.map((section) => (
                            <div key={section.title}>
                                <h2>{section.title}</h2>
                                <p>{section.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
