import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { heroQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Digital | AFAQ Partners",
  description: "Digital capabilities for AFAQ Partners clients.",
};

export default async function DigitalPage() {
  let heroData = null;
  try {
    heroData = await client.fetch(heroQuery, { pageSlug: "digital" });
  } catch (e) {
    console.error(e);
  }

  const displayHero = heroData || {
    eyebrow: "DIGITAL",
    headline: "The wealth industry is changing.",
    subheadline:
      "Most wealth firms treat technology as a back office upgrade. We see it differently.",
    hasCTA: true,
    ctaText: "Join the Waitlist",
    ctaHref: "/contact",
    image: "/images/platform_hero.png",
  };

  const heroImage = heroData?.image ? urlFor(heroData.image).url() : displayHero.image;

  return (
    <main>
      <Hero
        eyebrow={displayHero.eyebrow}
        headline={displayHero.headline}
        subheadline={displayHero.subheadline}
        ctaText={displayHero.ctaText}
        ctaHref={displayHero.ctaHref}
        hasCTA={displayHero.hasCTA}
        image={heroImage}
      />
      <section className="section-padding">
        <div className="container" style={{ maxWidth: 720 }}>
          <h2>We&apos;re building something.</h2>
          <p style={{ marginTop: "1rem", lineHeight: 1.7 }}>
            We&apos;re currently developing digital capabilities that will give AFAQ Partners clients broader access and a sharper experience. If you want to be the first to know, get in touch.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/contact">
              <Button variant="secondary" size="lg">Join the Waitlist</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
