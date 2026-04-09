import type { Metadata } from "next";
import { client } from "@/lib/sanity";
import {
    featuredInsightQuery,
    editorsPickQuery,
    latestInsightsQuery,
    allInsightsForIndexQuery,
} from '@/lib/queries';
import InsightsContent from "./InsightsContent";

export const metadata: Metadata = {
    title: {
        absolute: "Insights | GrowValley Ventures"
    },
    description: "Perspectives on capital readiness, investment strategy, and portfolio construction from the GrowValley team.",
    openGraph: {
        title: "Insights | GrowValley Ventures",
        description: "Institutional-grade perspectives on investment and capital strategy.",
        url: "https://gv.ventures/insights",
        images: [
            {
                url: "/images/hero_model_v3.png",
                width: 1200,
                height: 630,
                alt: "GrowValley Insights",
            },
        ],
    },
};

export default async function InsightsPage() {
    let featured = null;
    let editorsPicks = [];
    let latest = [];
    let allInsights = [];

    try {
        [featured, editorsPicks, latest, allInsights] = await Promise.all([
            client.fetch(featuredInsightQuery),
            client.fetch(editorsPickQuery),
            client.fetch(latestInsightsQuery),
            client.fetch(allInsightsForIndexQuery),
        ]);
    } catch (error) {
        console.error("Error fetching Insights CMS data on Server:", error);
    }

    return (
        <InsightsContent
            featured={featured}
            editorsPicks={editorsPicks || []}
            latest={latest || []}
            allInsights={allInsights || []}
        />
    );
}
