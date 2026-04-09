"use client";

import React, { useState, useEffect } from "react";
import { Hero } from "@/components/ui/Hero";
import { Button } from "@/components/ui/Button";
import { ChevronDown, Network } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Expertise.module.scss";

const MandateCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className={`${styles.mandateCard} ${isExpanded ? styles.expanded : ""}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={styles.cardHeader}>
        <h3>{title}</h3>
        <div className={styles.icon}>
          <ChevronDown size={20} />
        </div>
      </div>
      {isExpanded && (
        <div className={styles.cardContent}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default function ExpertiseContent() {
  const [activeSection, setActiveSection] = useState("wealth-management");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "wealth-management",
        "prive-access",
        "wealth-structuring",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  return (
    <main>
      <Hero
        eyebrow="GROWVALLEY"
        headline="Our Expertise"
        subheadline="A full suite of wealth management capabilities, built around you."
        image="/images/capabilities_hero.png"
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
              className={activeSection === "prive-access" ? styles.active : ""}
              onClick={() => scrollTo("prive-access")}
            >
              Privé Access
            </li>
            <li
              className={
                activeSection === "wealth-structuring" ? styles.active : ""
              }
              onClick={() => scrollTo("wealth-structuring")}
            >
              Wealth Structuring
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
              GrowValley provides a 360° holistic coverage of your wealth needs
              through a comprehensive suite of Capabilities by serving as a
              Confidante in Managing Clients&apos; needs and avoiding conflicts
              of interest prevalent in traditional wealth management.
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
                  <Image
                    src="/images/taurus-hand-icon.png"
                    alt="Wealth Management"
                    width={120}
                    height={120}
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
                Engagement framework is entirely Client-centric with FAs/RMs,
                supported by ICs, bringing deep insights and expertise in
                managing Clients&apos; risk-return objectives by leveraging a
                unique and bespoke framework for ideation while always keeping
                risk management centric to our approach.
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

          <div className={styles.subContentSection}>
            <h3 className={styles.subHeading}>Wealth Management</h3>
            <p className={styles.subParagraph}>
              GrowValley operates either under the terms of a discretionary or
              an advisory management mandate. After reviewing your needs, we
              fully customize a strategy matching your profile, investment
              objectives and specific risk tolerance.
            </p>

            <div className={styles.mandateGrid}>
              <MandateCard
                title="Discretionary Mandate"
                content="Entrusting the management of your portfolio to our specialist investment professionals while our back office manages trade execution and necessary reconciliations. Assuring you of dynamic adaptation to markets in order to minimise losses during volatile phases."
              />
              <MandateCard
                title="Advisory Mandate"
                content="Active and dynamic advice on asset allocation, single securities and investment vehicles. A consolidated and holistic approach to deciphering the 'noise' and guiding you to tailor your investments in keeping with your needs."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Privé Access */}
      <section
        id="prive-access"
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
                Privé Access to Private Equity, Venture Capital and Real Estate
                Opportunities
              </h2>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.descriptorText}>
                Unfolding opportunities through a dedicated Institutional and
                Private Deals Desk.
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
                GrowValley&apos;s Institutional Desk is sourcing, structuring,
                developing and introducing global market opportunities in:
              </p>
              <ul>
                <li>Pre IPO-Investment Opportunities</li>
                <li>Real Estate Investment structuring and distribution</li>
                <li>
                  Capital Raise (Venture Capital, Private Equity and Corporate)
                </li>
              </ul>
            </div>
            <div className={styles.pillarCard}>
              <span className={styles.pillarNum}>2</span>
              <h4>Highly qualified industry experts</h4>
              <p>
                Leverages the skillset of highly qualified industry experts with
                a strong track record in deal origination and placement
              </p>
            </div>
            <div className={styles.pillarCard}>
              <span className={styles.pillarNum}>3</span>
              <h4>Capital sustainability</h4>
              <p>
                The overriding focus of the Institutional Desk is on
                &quot;capital sustainability&quot;, with the view to introducing
                opportunities with potentially attractive exit multiples through
                specialized access
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
                    Cultivation of a network of specialist access partners with
                    a commendable track record in real estate investment across
                    Western Europe, Middle East and Asia
                  </p>
                </div>
              </div>
              <div className={styles.gridItem}>
                <div className={styles.bulletDot}></div>
                <div>
                  <strong>Identifying</strong>
                  <p>
                    Identifying and sourcing undervalued Grade-A assets with a
                    deep understanding of local markets based on investor
                    interest
                  </p>
                </div>
              </div>
              <div className={styles.gridItem}>
                <div className={styles.bulletDot}></div>
                <div>
                  <strong>Returns</strong>
                  <p>
                    Superior returns from realizing value through bespoke
                    structures and corporate guarantees
                  </p>
                </div>
              </div>
              <div className={styles.gridItem}>
                <div className={styles.bulletDot}></div>
                <div>
                  <strong>Arrangements</strong>
                  <p>
                    Arrangements with select developers also for direct access
                    to marquee projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Wealth Structuring & Succession Planning */}
      <section id="wealth-structuring" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeaderSimple}>
            <h2 className={styles.mainTitle}>
              Wealth Structuring & Succession Planning
            </h2>
            <p className={styles.introSubText}>
              Optimizing Wealth Holding Structures and Intergenerational
              Transfer of Wealth
            </p>
          </div>

          <div className={styles.structuringGrid}>
            <div className={styles.structuringItem}>
              <h4>Wealth Structuring</h4>
              <p>
                Optimize and restructure holding of assets to deliver cost
                efficient solutions
              </p>
            </div>
            <div className={styles.structuringItem}>
              <h4>Succession Planning</h4>
              <p>
                Leverage strong network of professionals to guide and facilitate
                your Succession plan
              </p>
            </div>
            <div className={styles.structuringItem}>
              <h4>Citizenship & Residency Services</h4>
              <p>
                Access to firms that can assist obtaining various residency
                status and passports (e.g., EB5 and Portugal Golden Visa)
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
