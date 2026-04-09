import type { Metadata } from 'next';
import CapabilitiesContent from '@/app/(site)/our-capabilities/CapabilitiesContent';

export const metadata: Metadata = {
    title: {
        absolute: "Our Capabilities | GrowValley",
    },
    description: "A 360° approach to managing your wealth through integrated services and institutional discipline.",
    openGraph: {
        title: "Our Capabilities | GrowValley",
        description: "Explore GrowValley's integrated wealth management and investment capabilities.",
        url: "https://gv.ventures/our-capabilities",
    },
};

export default function CapabilitiesPage() {
    return <CapabilitiesContent />;
}
