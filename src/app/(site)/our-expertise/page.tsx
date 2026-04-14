import type { Metadata } from 'next';
import ExpertiseContent from '@/app/(site)/our-expertise/ExpertiseContent';

import { client } from '@/lib/sanity';
import { heroQuery } from '@/lib/queries';

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

export default async function ExpertisePage() {
    let heroData = null;
    try {
        heroData = await client.fetch(heroQuery, { pageSlug: "expertise" });
    } catch (err) {
        console.error("Expertise Hero Fetch Error:", err);
    }

    return <ExpertiseContent heroData={heroData} />;
}
