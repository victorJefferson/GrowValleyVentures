"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/ui/Hero";
import { Button } from "@/components/ui/Button";
import { Network } from "lucide-react";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import styles from "./Expertise.module.scss";

export default function ExpertiseContent({ heroData }: { heroData?: any }) {
  const [activeSection, setActiveSection] = useState("wealth-management");

  const defaultHero = {
    eyebrow: "GROWVALLEY",
    headline: "Our Expertise",
    subheadline: "Four disciplines. One strategy. Total accountability.",
    image: "/images/capabilities_hero.png",
  };

  const displayHero = heroData || defaultHero;
  const heroImage = heroData?.image
    ? urlFor(heroData.image).url()
    : displayHero.image;

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "wealth-management",
        "family-office",
        "private-access",
        "succession-planning",
      ];
      const scrollPosition = window.scrollY + 250; // Adjusted offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
          }
        }
      }

      // Handle the bottom of the page specifically for the last section
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setActiveSection("succession-planning");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id); // Set active immediately on click
      window.scrollTo({
        top: element.offsetTop - 120, // Keep in sync with sticky nav height
        behavior: "smooth",
      });
    }
  };

  return (
    <main>
      <Hero
        eyebrow={displayHero.eyebrow}
        headline={displayHero.headline}
        subheadline={displayHero.subheadline}
        image={heroImage}
      />

      {/* Sticky Navigation */}
      <nav className={styles.stickyNav}>
        <div className="container">
          <ul className={styles.navList}>
            <li
              className={
                activeSection === "wealth-management" ? styles.active : ""
              }
              onClick={() => scrollTo("wealth-management")}
            >
              Wealth Management
            </li>
            <li
              className={activeSection === "family-office" ? styles.active : ""}
              onClick={() => scrollTo("family-office")}
            >
              Family Office Services
            </li>
            <li
              className={
                activeSection === "private-access" ? styles.active : ""
              }
              onClick={() => scrollTo("private-access")}
            >
              Private Access to Opportunities
            </li>
            <li
              className={
                activeSection === "succession-planning" ? styles.active : ""
              }
              onClick={() => scrollTo("succession-planning")}
            >
              Succession Planning Services
            </li>
          </ul>
        </div>
      </nav>

      {/* Section 2: Our Services Intro */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introContent}>
            <h2 className={styles.introHeading}>Our Services</h2>
            <p className={styles.introParagraph}>
              Most firms specialise in a product. We specialise in you. Across
              every dimension of wealth management, from strategy to execution
              to review, our practice operates as one integrated unit. No
              conflicts. Outcome-focused.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Wealth Management Services */}
      <section id="wealth-management" className={styles.section}>
        <div className="container">
          <div className={styles.twoColumnHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.headerIcon}>
                <div className={`${styles.iconCircle} ${styles.noBg}`}>
                  <img
                    src="/images/taurus-hand-icon.png"
                    alt="Wealth Management"
                    width="120"
                    height="120"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <h2
                className={`${styles.mainTitle} ${styles.primaryHeadingStack}`}
              >
                <span>Wealth</span>
                <span>Management</span>
                <span>Services</span>
              </h2>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.descriptorText}>
                Every mandate begins with your goals, your risk profile, and
                your time horizon. Your Relationship Manager, supported by our
                Investment Committee, constructs a strategy built for you
                specifically. No defaults. No templates. Disciplined execution
                from day one.
              </p>
            </div>
          </div>

          <div className={styles.processSection}>
            <ol className={styles.processList}>
              <li>Understand</li>
              <li>Devise</li>
              <li>Implement</li>
              <li>Monitor</li>
              <li>Adjust</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section 4: Family Office Services */}
      <section
        id="family-office"
        className={`${styles.section} ${styles.bgLight}`}
      >
        <div className="container">
          <div className={styles.twoColumnHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.headerIcon}>
                <div
                  className={`${styles.iconCircle} ${styles.circularColoured}`}
                >
                  <Network size={40} strokeWidth={1.5} />
                </div>
              </div>
              <h2 className={styles.mainTitle}>Family Office Services</h2>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.descriptorText}>
                Investment management is one dimension of wealth. Most families
                need more. We coordinate the full range of services that complex
                wealth demands, working with best-in-class specialists and
                managing every engagement on your behalf.
              </p>
            </div>
          </div>

          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h4>Single Family Office Setup</h4>
              <p>
                Structuring and establishing a dedicated family office for
                clients ready to formalise their wealth governance.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h4>Wealth Consolidation and Reporting</h4>
              <p>
                Unified reporting across all assets and entities. Full
                visibility. No blind spots.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h4>Philanthropy</h4>
              <p>
                Structured giving, aligned to your values and your tax position.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h4>M&A and IPO</h4>
              <p>
                Advisory coordination for clients navigating corporate
                transactions alongside their personal wealth.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h4>Social Impact Investing</h4>
              <p>
                Capital deployed with intention. Returns measured in more than
                one currency.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h4>Collectibles and Art</h4>
              <p>
                Specialist access to valuation, acquisition, and estate planning
                for alternative assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Private access */}
      <section
        id="private-access"
        className={`${styles.section} ${styles.bgLight}`}
      >
        <div className="container">
          <div className={styles.twoColumnHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.headerIcon}>
                <div
                  className={`${styles.iconCircle} ${styles.circularColoured}`}
                >
                  <Network size={40} strokeWidth={1.5} />
                </div>
              </div>
              <h2 className={styles.mainTitle}>
                Private Access to Opportunities
              </h2>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.descriptorText}>
                The most valuable opportunities are distributed before the
                market opens. GrowValley&apos;s Deals Desk gives clients access
                to PE, VC, and real estate transactions that are sourced through
                relationships, not listings.
              </p>
            </div>
          </div>

          <div className={styles.pillarGrid}>
            <div className={styles.pillarCard}>
              <span className={styles.pillarNum}>1</span>
              <h4 className={styles.pillarTitle}>
                GrowValley&apos;s Institutional desk
              </h4>
              <p>
                We originate, structure, and place capital-market opportunities
                across three areas: pre-IPO investment, real estate structuring
                and distribution, and capital raises spanning venture, private
                equity, and corporate mandates.
              </p>
            </div>
            <div className={styles.pillarCard}>
              <span className={styles.pillarNum}>2</span>
              <h4>Proven Practitioners</h4>
              <p>
                Our team has originated, structured, and placed transactions.
                Not merely advised on them. Clients benefit from people who have
                sat on both sides of a deal.
              </p>
            </div>
            <div className={styles.pillarCard}>
              <span className={styles.pillarNum}>3</span>
              <h4>Capital sustainability</h4>
              <p>
                Volume is not the objective. Every opportunity is evaluated
                against capital durability, exit visibility, and risk-adjusted
                return. We present fewer deals. The ones we present are worth
                looking at.
              </p>
            </div>
          </div>

          <div className={styles.realEstateSection}>
            <h3 className={styles.realEstateHeading}>
              Specialized Real Estate Access
            </h3>
            <div className={styles.realEstateGrid}>
              <div className={styles.gridItem}>
                <div className={styles.bulletDot}></div>
                <div>
                  <strong>Cultivation</strong>
                  <p>
                    Our real estate network was built over years, not assembled
                    overnight. It spans Western Europe, the Middle East, and
                    Asia. Every relationship in it was earned.
                  </p>
                </div>
              </div>
              <div className={styles.gridItem}>
                <div className={styles.bulletDot}></div>
                <div>
                  <strong>Identifying</strong>
                  <p>
                    Grade-A assets in markets others overlook. We source against
                    client mandates, not against inventory we need to move.
                  </p>
                </div>
              </div>
              <div className={styles.gridItem}>
                <div className={styles.bulletDot}></div>
                <div>
                  <strong>Returns</strong>
                  <p>
                    No standardised structures. Every deal is built to maximise
                    value for the investor, with corporate guarantees applied
                    where they are available and warranted.
                  </p>
                </div>
              </div>
              <div className={styles.gridItem}>
                <div className={styles.bulletDot}></div>
                <div>
                  <strong>Arrangements</strong>
                  <p>
                    Direct developer access. Clients secure positions in marquee
                    projects before they reach general market release.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Wealth Structuring & Succession Planning */}
      <section id="succession-planning" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeaderSimple}>
            <h2 className={styles.mainTitle}>Succession Planning Services</h2>
            <p className={styles.introSubText}>
              How you hold wealth determines how much of it endures.
            </p>
          </div>

          <div className={styles.structuringGrid}>
            <div className={styles.structuringItem}>
              <h4>Wealth Structuring</h4>
              <p>
                The structure surrounding your assets is as important as the
                assets themselves. We redesign holding arrangements to improve
                efficiency, reduce unnecessary cost, and strengthen the overall
                integrity of your wealth position.
              </p>
            </div>
            <div className={styles.structuringItem}>
              <h4>Succession Planning</h4>
              <p>
                Wealth transfers poorly without a plan. We engage the right
                legal and fiduciary professionals to construct a succession
                framework that protects your family, reflects your intentions,
                and holds across generations.
              </p>
            </div>
            <div className={styles.structuringItem}>
              <h4>Citizenship & Residency Services</h4>
              <p>
                Jurisdictional flexibility is a legitimate dimension of wealth
                planning. We connect clients with specialist firms that navigate
                residency and citizenship programmes, including EB-5 and
                Portugal Golden Visa, with precision and discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaBannerPanel}>
            <h2 className={styles.speakToAnExpertBannerHeading}>
              Ready to start a conversation?
            </h2>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
