import type { Metadata } from "next";
import { client } from "@/lib/sanity";
import { heroQuery, insightsQuery, dataSectionQuery, pageSectionsByPageQuery, footerStatsQuery } from "@/lib/queries";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
    title: {
        absolute: "AFAQ Partners",
    },
    description: "A 360° approach to managing your wealth.",
    openGraph: {
        title: "AFAQ Partners",
        description: "Your Wealth. Our Expertise. This Is AFAQ Partners!",
        url: "https://gv.ventures",
        images: [
            {
                url: "/images/afaq-og.png",
                width: 1200,
                height: 630,
                alt: "AFAQ Partners",
            },
        ],
    },
};

export default async function Home() {
    let heroData = null;
    let insights = [];

    let dataSectionData = null;

    let pageSections: any[] = [];
    let footerStatsData = null;

    try {
        [heroData, insights, dataSectionData, pageSections, footerStatsData] = await Promise.all([
            client.fetch(heroQuery, { pageSlug: "home" }),
            client.fetch(insightsQuery),
            client.fetch(dataSectionQuery),
            client.fetch(pageSectionsByPageQuery, { pageSlug: "home" }),
            client.fetch(footerStatsQuery),
        ]);
    } catch (error) {
        console.error("Error fetching CMS data on Server:", error);
    }

    return (
        <HomeContent
            heroData={heroData}
            insights={insights}
            dataSectionData={dataSectionData}
            pageSections={pageSections}
            footerStatsData={footerStatsData}
        />
    );
}
