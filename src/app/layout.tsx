import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../styles/globals.scss";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gv.ventures'),
  title: {
    default: "AFAQ Partners",
    template: "%s | AFAQ Partners"
  },
  description: "AFAQ Partners provide structured readiness for direct portfolio investment, co-investment opportunities, and institutional capital partnerships, governed, documented, and built for long-term capital discipline.",
  keywords: ["Venture Capital", "Capital Structuring", "Direct Portfolio Investment", "Co-investment", "Family Office Investment", "Investment Governance", "AFAQ Partners"],
  authors: [{ name: "AFAQ Partners" }],
  creator: "AFAQ Partners",
  publisher: "AFAQ Partners",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gv.ventures",
    siteName: "AFAQ Partners",
    title: "AFAQ Partners",
    description: "Institutional-grade investment platform for family offices and qualified investors.",
    images: [
      {
        url: "/images/growValleyVentures.png",
        width: 1200,
        height: 630,
        alt: "AFAQ Partners Investment Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AFAQ Partners",
    description: "AFAQ Partners structures and governs capital readiness with institutional discipline.",
    images: ["/images/growValleyVentures.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
