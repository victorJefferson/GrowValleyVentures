import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: {
        absolute: "Contact Us | GrowValley Ventures"
    },
    description: "Get in touch with the GrowValley Ventures team for institutional partnership enquiries, direct portfolio investment, and capital governance advisory.",
    openGraph: {
        title: "Contact Us | GrowValley Ventures",
        description: "Capital starts with a conversation. Reach out to our investment team.",
        url: "https://gv.ventures/contact",
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
