import type { Metadata } from 'next';
import CookiePolicyContent from './CookiePolicyContent';

export const metadata: Metadata = {
    title: {
        absolute: "Cookie Policy | AFAQ Partners"
    },
    description: "AFAQ Partners uses cookies to improve your experience and provide institutional transparency. Read our detailed disclosure regarding digital privacy.",
    openGraph: {
        title: "Cookie Policy | AFAQ Partners",
        description: "AFAQ Partners uses cookies to improve your experience and provide institutional transparency.",
        url: "https://gv.ventures/cookie-policy",
    },
};

export default function CookiePolicyPage() {
    return <CookiePolicyContent />;
}
