import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { heroQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Get Started | AFAQ Partners",
  description: "Start a conversation with AFAQ Partners.",
};

const steps = [
  {
    n: "01",
    title: "Book a time",
    body: "Use the link below to pick a slot that works for you. You'll get a confirmation with a short note on what to expect.",
  },
  {
    n: "02",
    title: "We come prepared",
    body: "Before the call, we'll look at any context you've shared and think about your situation. We don't show up cold.",
  },
  {
    n: "03",
    title: "A direct conversation",
    body: "We ask the questions that matter. You ask whatever you need to. No scripted sequence, just an honest exchange between people who take this seriously.",
  },
  {
    n: "04",
    title: "A clear next step",
    body: "By the end of the call, you'll know exactly what we'd propose and how we'd structure things. No vague follow ups.",
  },
];

export default async function GetStartedPage() {
  let heroData = null;
  try {
    heroData = await client.fetch(heroQuery, { pageSlug: "get-started" });
  } catch (e) {
    console.error(e);
  }

  const displayHero = heroData || {
    eyebrow: "GET STARTED",
    headline: "The first conversation is where it starts.",
    subheadline:
      "We'll want to understand where you are, what you're building towards, and what good looks like for you.",
    hasCTA: true,
    ctaText: "Talk to an Advisor",
    ctaHref: "/contact",
    image: "/images/home_hero.png",
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
        <div className="container">
          <h2 style={{ marginBottom: "2rem" }}>Four steps. No surprises.</h2>
          <div style={{ display: "grid", gap: "2rem", maxWidth: 800 }}>
            {steps.map((s) => (
              <div key={s.n}>
                <strong>{s.n}</strong>
                <h3 style={{ margin: "0.5rem 0" }}>{s.title}</h3>
                <p style={{ lineHeight: 1.7, color: "var(--color-text-muted)" }}>{s.body}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "3rem" }}>
            <Link href="/contact">
              <Button size="lg" variant="secondary">Book a time — Contact us</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
