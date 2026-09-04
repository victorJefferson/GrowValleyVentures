import type { Metadata } from "next";
import { client } from "@/lib/sanity";
import { officeLocationsQuery, siteSettingsQuery } from "@/lib/queries";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: {
        absolute: "CONTACT | AFAQ Partners"
    },
    description: "Get in touch with AFAQ Partners for wealth management, family office, and private market enquiries.",
    openGraph: {
        title: "CONTACT | AFAQ Partners",
        description: "Connect with AFAQ Partners.",
        url: "https://afaqpartners.com/contact",
    },
};

export default async function ContactPage() {
    let offices: any[] = [];
    let contactEmail = "reach@afaqpartners.com";

    try {
        const [officeData, settings] = await Promise.all([
            client.fetch(officeLocationsQuery),
            client.fetch(siteSettingsQuery),
        ]);
        offices = officeData || [];
        if (settings?.contactEmail) contactEmail = settings.contactEmail;
    } catch (e) {
        console.error("Contact CMS fetch error:", e);
    }

    return <ContactContent offices={offices} contactEmail={contactEmail} />;
}
