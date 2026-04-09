import type { Metadata } from 'next';
import ExpertiseContent from '@/app/(site)/our-expertise/ExpertiseContent';

export const metadata: Metadata = {
    title: {
        absolute: "Our Expertise | GrowValley",
    },
    description: "A full suite of wealth management capabilities, built around you.",
    openGraph: {
        title: "Our Expertise | GrowValley",
        description: "Explore GrowValley's integrated wealth management and investment expertise.",
        url: "https://gv.ventures/our-expertise",
    },
};

export default function ExpertisePage() {
    return <ExpertiseContent />;
}
