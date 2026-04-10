import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

import Link from "next/link";
import styles from "./AboutUs.module.scss";

export const metadata: Metadata = {
  title: {
    absolute: "About Us | GrowValley",
  },
  description:
    "Learn about GrowValley's 360° approach to wealth management and institutional capital discipline.",
  openGraph: {
    title: "About Us | GrowValley",
    description: "GrowValley investment platform and vertical integration.",
    url: "https://gv.ventures/about-us",
  },
};

export default function AboutUsPage() {
  const whatWeDo = [
    {
      title: "Wealth Management Services",
      desc: "Harnessing the wealth you have created, to serve your risk-return objectives",
    },
    {
      title: "Wealth Structuring & Succession Planning",
      desc: "Optimizing Wealth Holding Structures and Intergenerational Transfer of Wealth",
    },
    {
      title: "Additional Family Office Services",
      desc: "Facilitating ancillary wealth management needs through best in breed service providers & in-house coordination capabilities",
    },
    {
      title: "Privé Access to PE, VC & Real Estate Opportunities",
      desc: "Unfolding opportunities through a dedicated Institutional and Private Deals Desk",
    },
  ];

  return (
    <main>
      <Hero
        eyebrow="ABOUT GROWVALLEY"
        headline="Who is GrowValley"
        subheadline="GrowValley is a fully integrated wealth management powerhouse."
        image="/images/home_hero.png"
      />

      <section className="section-padding">
        <div className="container">
          <div className={styles.positioningGrid}>
            <div className={styles.pillar}>
              <span className={styles.pillarLabel}>
                Wealth Management Services
              </span>
            </div>
            <div className={styles.pillar}>
              <span className={styles.pillarLabel}>
                Wealth Structuring &<br />
                Succession Planning
              </span>
            </div>
            <div className={styles.pillar}>
              <span className={styles.pillarLabel}>
                Additional Family Office
                <br />
                Services
              </span>
            </div>
            <div className={styles.pillar}>
              <span className={styles.pillarLabel}>
                Privé Access to
                <br />
                PE, VC &<br />
                Real Estate
                <br />
                Opportunities
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.roundedPanel}>
            <div className={styles.splitIntro}>
              <div className={styles.introContent}>
                <span className={styles.eyebrow}>WHO WE ARE</span>
                <h2 className={styles.heading}>Who we are</h2>
                <p className={styles.body}>
                  GrowValley is a fully integrated wealth management powerhouse.
                  We globally serve our wealth management and institutional
                  client base. GrowValley&apos;s unique service model ensures
                  that our Client&apos;s interests come first by removing the
                  inherent conflict of interest typically prevalent in wealth
                  management advice.
                </p>
              </div>
              <div className={styles.introImage}>
                <img
                  src="/images/leadership_collaboration.png"
                  alt="Leadership Collaboration"
                  width="600"
                  height="400"
                  className={styles.borderCard}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <span className={styles.eyebrow}>WHAT WE DO</span>
          <h2 className={styles.heading}>Our Services</h2>
          <div className={styles.functionGrid}>
            {whatWeDo.map((item, idx) => (
              <Card key={idx} className={styles.functionCard}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.groupPanel}>
            <h2 className={styles.headingWhite}>
              Speak to a team you can trust
            </h2>
            <div className={styles.ctaGroup}>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="uppercase-button"
                >
                  Start a conversation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
