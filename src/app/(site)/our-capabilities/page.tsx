import type { Metadata } from 'next';
import CapabilitiesContent from '@/app/(site)/our-capabilities/CapabilitiesContent';

export const metadata: Metadata = {
    title: {
        absolute: "Our Capabilities | GrowValley Ventures",
    },
    description: "Explore the internal investment capabilities of GrowValley, ranging from capital deployment and investment structuring to family office and institutional co-investment readiness.",
    openGraph: {
        title: "Our Capabilities | GrowValley Ventures",
        description: "Four core investment capabilities. Allocating capital with discipline and structuring readiness with precision.",
        url: "https://gv.ventures/our-capabilities",
    },
};

export default function CapabilitiesPage() {
    return <CapabilitiesContent />;
}
