"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./Navbar.module.scss";
import { Button } from "../ui/Button";
import { Menu, X, Mail } from "lucide-react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Expertise", href: "/our-expertise" },
    { name: "Insights", href: "/insights" },
    // { name: 'Platform', href: '/platform' },
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/careers" },
  ];
  const pathname = usePathname();

  return (
    <Disclosure as="header" className={styles.header}>
      {({ open }) => (
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
                return (
                  <Link key={link.name} href={link.href}>
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
