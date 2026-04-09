import type { Metadata } from "next";
import { client } from "@/lib/sanity";
import { heroQuery, insightsQuery } from "@/lib/queries";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
    title: {
        absolute: "GrowValley Ventures",
    },
    description: "GrowValley structures and governs capital readiness for family offices, institutional allocators, and qualified investors, applying the discipline of an established investment platform.",
    openGraph: {
        title: "GrowValley Ventures",
        description: "Direct investment readiness. Institutional capital discipline.",
        url: "https://gv.ventures",
        images: [
            {
                url: "/images/hero_model_v3.png",
                width: 1200,
                height: 630,
                alt: "GrowValley Ventures",
            },
        ],
    },
};

export default async function Home() {
    let heroData = null;
    let insights = [];

    try {
        [heroData, insights] = await Promise.all([
            client.fetch(heroQuery),
            client.fetch(insightsQuery)
        ]);
    } catch (error) {
        console.error("Error fetching CMS data on Server:", error);
    }

    return (
        <HomeContent
            heroData={heroData}
            insights={insights}
        />
    );
}
