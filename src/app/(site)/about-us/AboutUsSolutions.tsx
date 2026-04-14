"use client";

import React, { useState } from "react";
import styles from "./AboutUs.module.scss";

const solutionsData = [
  {
    category: "Wealth Management",
    headline: "Wealth Management Services",
    intro: "For clients who want their wealth managed with the same rigour applied to institutional capital.",
    solutions: [
      { title: "Strategy", desc: "Institutional-grade strategy design based on your unique goals." },
      { title: "Execution", desc: "Disciplined implementation from day one with total accountability." },
      { title: "Ongoing Oversight", desc: "Continuous monitoring and review of your entire wealth position." },
      { title: "One Accountable Team", desc: "Every dimension of wealth delivered by a single integrated unit." },
    ],
  },
  {
    category: "Family Office",
    headline: "Family Office Services",
    intro: "For clients whose needs extend beyond investment. We coordinate every engagement on your behalf.",
    solutions: [
      { title: "Legal & Fiduciary", desc: "Coordinating specialist legal advice for complex wealth demands." },
      { title: "Philanthropy", desc: "Structured giving aligned to your legacy and values." },
      { title: "M&A", desc: "Advisory coordination for corporate transactions and liquidity events." },
      { title: "Reporting", desc: "Unified reporting across all assets, entities, and jurisdictions." },
    ],
  },
  {
    category: "Private Access",
    headline: "Private Access to Opportunities",
    intro: "For qualified investors who expect more than the open market offers.",
    solutions: [
      { title: "PE Transactions", desc: "Access to private equity deals sourced through deep relationships." },
      { title: "VC Transactions", desc: "Venture deals structured and placed by proven practitioners." },
      { title: "Real Estate Access", desc: "Off-market real estate transactions spanning global jurisdictions." },
      { title: "Relationship Based", desc: "Opportunities sourced through networks, not public listings." },
    ],
  },
  {
    category: "Succession Planning",
    headline: "Succession Planning Services",
    intro: "For clients who want their wealth to outlast them across generations.",
    solutions: [
      { title: "Protect Assets", desc: "Holding structures designed to safeguard wealth integrity." },
      { title: "Minimise Cost", desc: "Redesigning arrangements to reduce unnecessary operational costs." },
      { title: "Wealth Transfer", desc: "Constructing succession frameworks that hold for generations." },
      { title: "Robust Planning", desc: "Precision planning that reflects your intentions and protects family." },
    ],
  },
];

export function AboutUsSolutions() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.solutionsSection}>
      <div className="container">
        <div className={styles.solutionsSplit}>
          <div className={styles.solutionsInfo}>
            <span className={styles.eyebrow}>Our solutions</span>
            <h2 className={styles.heading}>{solutionsData[activeTab].headline}</h2>
            <p className={styles.body}>
              {solutionsData[activeTab].intro}
            </p>

            <div className={styles.solutionsTabs}>
              {solutionsData.map((tab, idx) => (
                <button
                  key={idx}
                  className={`${styles.tabTrigger} ${
                    activeTab === idx ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab(idx)}
                >
                  {tab.category}
                </button>
              ))}
            </div>

            <div className={styles.serviceGridSub}>
              {solutionsData[activeTab].solutions.map((item, idx) => (
                <div key={idx} className={styles.serviceItemCard}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.solutionsImageWrapper}>
            <img
              src="/images/modern_boardroom.png"
              alt="GrowValley Solutions"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
