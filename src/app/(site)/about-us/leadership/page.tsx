import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { heroQuery, teamMembersQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity";
import {
  LeadershipPrincipals,
  type LeadershipMember,
} from "@/components/sections/LeadershipPrincipals/LeadershipPrincipals";
import styles from "../AboutUs.module.scss";

export const metadata: Metadata = {
  title: "Leadership | AFAQ Partners",
  description: "The leadership team at AFAQ Partners.",
};

const PLACEHOLDER_IMG = "/images/placeholderPerson.jpg";

function resolveMemberImage(member: {
  image?: unknown;
  imagePath?: string;
}): string {
  if (member.image) {
    try {
      return urlFor(member.image).url();
    } catch {
      // fall through
    }
  }
  return member.imagePath || PLACEHOLDER_IMG;
}

export default async function LeadershipPage() {
  let heroData = null;
  let leadershipTeam: any[] = [];

  try {
    [heroData, leadershipTeam] = await Promise.all([
      client.fetch(heroQuery, { pageSlug: "leadership" }),
      client.fetch(teamMembersQuery, { memberType: "leadership" }),
    ]);
  } catch (err) {
    console.error("Leadership fetch error:", err);
  }

  const defaultHero = {
    eyebrow: "OUR TEAM",
    headline: "The people behind every decision.",
    subheadline:
      "Every person at AFAQ Partners has been on the inside of real decisions, not just the advice that follows them. They have invested, structured, managed, and protected capital across markets and cycles. That is who you are working with at AFAQ Partners.",
    hasCTA: false,
    image: "/images/team_hero.png",
  };

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image
    ? urlFor(heroData.image).url()
    : displayHero.image;

  const fallbackTeam: LeadershipMember[] = [
    {
      name: "William J. Daly",
      role: "CIO & Partner",
      imageUrl: "/images/people/william.jpg",
      bio: [
        "William J. Daly brings more than 40+ years of executive, investment, and entrepreneurial experience to AFAQ Partners, with a career spanning real estate, economic zones, private equity, asset management, and sovereign investment.",
        "Over the course of his career, William has held senior leadership positions across property development, institutional investment, and asset management. His experience includes founding and scaling a major real estate group, leading complex investment platforms, and serving as Group Chief Investment Officer for a sovereign private office.",
        "At AFAQ Partners, William helps shape the firm's investment and growth agenda, leading strategic initiatives, institutional partnerships, and opportunities that connect capital, assets, and long-term enterprise value.",
      ],
    },
    {
      name: "Jazeer Jamal",
      role: "CEO & Partner",
      imageUrl: "/images/people/jazeer_jamal.jpg",
      bio: [
        "Jazeer Jamal brings 25+ years of entrepreneurial, executive, and investment experience to AFAQ Partners, spanning technology, private equity, venture capital, asset management, and institutional investment.",
        "A founder and business builder by background, Jazeer has established and scaled businesses, investment platforms, public-private partnerships, and family office initiatives across the region. His career has been defined by identifying opportunities at the intersection of capital, strategy, innovation, and growth, and translating them into scalable businesses and long-term partnerships.",
        "As CEO & Partner of AFAQ Partners, Jazeer leads the firm's overall strategic direction, platform and product development, strategic partnerships, and cross-functional growth agenda, with a focus on building new opportunities and creating enduring enterprise value.",
      ],
    },
    {
      name: "Suhail Ismail",
      role: "CXO & Partner",
      imageUrl: "/images/people/suhail.jpg",
      bio: [
        "Suhail Ismail brings over 15 years of operational experience to AFAQ Partners, ensuring strategy translates into consistent execution across all entities. His background spans from business advisory, to corporate turnaround, to business transformation, to business scaling across multiple markets.",
        "At AFAQ Partners, he leads the overall operations of the business, client experience, partnerships, and the firm's cross-functional growth strategy.",
      ],
    },
  ];

  const members: LeadershipMember[] = leadershipTeam.length
    ? leadershipTeam.map((member) => ({
        name: member.name,
        role: member.role,
        bio: member.bio,
        imageUrl: resolveMemberImage(member),
      }))
    : fallbackTeam;

  return (
    <main>
      <Hero
        eyebrow={displayHero.eyebrow}
        headline={displayHero.headline}
        subheadline={displayHero.subheadline}
        hasCTA={displayHero.hasCTA ?? false}
        image={heroImage}
      />

      <LeadershipPrincipals members={members} />

      <section className="section-padding">
        <div className="container">
          <div className={styles.groupPanel}>
            <h2 className={styles.headingWhite}>Join our team.</h2>
            <p className={styles.bodyWhite}>
              We are always looking for professionals who bring rigour, discretion, and a client-first approach to their work. If that describes you, we want to hear from you.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="/join-us/jobs">
                <Button variant="secondary" size="lg">
                  VIEW CAREERS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
