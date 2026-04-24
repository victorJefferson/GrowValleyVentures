"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./Navbar.module.scss";
import { Button } from "../ui/Button";
import { Menu as MenuIcon, X, Mail, ArrowRight } from "lucide-react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";

export function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about-us",
      children: [
        { name: "About GrowValley", href: "/about-us", description: "Built on independence. Measured by outcomes." },
        { name: "Team", href: "/about-us/team", description: "A collective of specialists dedicated to excellence." },
        { name: "Leadership", href: "/about-us/leadership", description: "Guided by experience. Driven by innovation." },
      ]
    },
    { name: "Our Expertise", href: "/our-expertise" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
  ];
  const pathname = usePathname();

  return (
    <Disclosure as="header" className={styles.header}>
      {({ open, close }) => (
        <>
          <div className={`container ${styles.navContainer}`}>
            <div className={styles.logo}>
              <Link href="/">
                <img
                  src="/gv-logo-green.png"
                  alt="GrowValley Logo"
                  width="160"
                  height="60"
                  className={styles.logoImage}
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className={styles.links}>
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                if (link.children) {
                  return (
                    <Popover key={link.name} className={styles.popover}>
                      {({ open, close }) => (
                        <>
                          <PopoverButton
                            className={`${styles.popoverTrigger} ${isActive ? styles.active : ""} ${open ? styles.open : ""}`}
                          >
                            {link.name}
                            <ChevronDown size={14} className={styles.chevron} />
                          </PopoverButton>

                          <PopoverPanel transition className={styles.megaMenu}>
                            <div className={`container ${styles.megaMenuContent}`}>

                              <div className={styles.megaMenuGrid}>
                                {link.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    className={styles.megaMenuItem}
                                    onClick={() => close()}
                                  >
                                    <div className={styles.megaMenuItemLabel}>{child.name}</div>
                                    <div className={styles.megaMenuItemDesc}>{child.description}</div>
                                  </Link>
                                ))}
                              </div>
                              <div className={styles.megaMenuFeatured}>
                                <div className={styles.featuredTag}>Featured Content</div>
                                <div className={styles.featuredCard}>
                                  <img src="/images/leadership_collaboration.png" alt="Featured" />
                                  <div className={styles.featuredInfo}>
                                    <Link
                                      href="/insights"
                                      className={styles.featuredLink}
                                      onClick={() => close()}
                                    >
                                      Click here to read our latest Insights<ArrowRight size={12} />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </>
                      )}
                    </Popover>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={isActive ? styles.active : ""}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className={styles.desktopCta}>
              <Link href="/contact">
                <Button size="sm">Contact Us</Button>
              </Link>
            </div>

            <div className={styles.mobileActions}>
              <Link href="/contact" className={styles.mobileContactBtn}>
                <Mail size={20} strokeWidth={1.5} />
              </Link>

              {/* Mobile Menu Toggle */}
              <DisclosureButton className={styles.hamburger}>
                <span className="sr-only">
                  {open ? "Close menu" : "Open menu"}
                </span>
                {open ? (
                  <X size={28} color="var(--color-primary-navy)" />
                ) : (
                  <div className={styles.vistraHamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
              </DisclosureButton>
            </div>
          </div>

          {/* Mobile Dropdown Nav */}
          <DisclosurePanel className={styles.mobileNav}>
            <nav className={styles.mobileLinks}>
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                if (link.children) {
                  return (
                    <Disclosure key={link.name} as="div" className={styles.mobileSubmenu}>
                      {({ open }) => (
                        <>
                          <DisclosureButton className={`${styles.mobileSubmenuTrigger} ${isActive ? styles.active : ""}`}>
                            {link.name}
                            <ChevronDown size={20} className={`${styles.chevron} ${open ? styles.rotate : ""}`} />
                          </DisclosureButton>
                          <DisclosurePanel className={styles.mobileSubmenuPanel}>
                            {link.children.map((child) => (
                              <Link key={child.name} href={child.href} onClick={() => close()}>
                                <DisclosureButton as="span" className={styles.mobileSubLink}>
                                  <div className={styles.subLinkLabel}>{child.name}</div>
                                  <div className={styles.subLinkDesc}>{child.description}</div>
                                </DisclosureButton>
                              </Link>
                            ))}
                            <Link href="/about-us" onClick={() => close()}>
                              <DisclosureButton as="span" className={styles.mobileOverviewLink}>
                                About us Overview <ArrowRight size={16} />
                              </DisclosureButton>
                            </Link>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  );
                }

                return (
                  <Link key={link.name} href={link.href} onClick={() => close()}>
                    <DisclosureButton
                      as="span"
                      className={isActive ? styles.active : ""}
                    >
                      {link.name}
                    </DisclosureButton>
                  </Link>
                );
              })}
            </nav>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
