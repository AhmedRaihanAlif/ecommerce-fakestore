 "use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Shop", href: "#shop" },
  { label: "Categories", href: "#categories" },
  { label: "Featured", href: "#featured" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 960) setMenuOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      id="top"
    >
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.brand} aria-label="MoMagic Home">
            <span className={styles.dot} />
            MoMagic Shop
          </Link>
          <nav
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className={styles.actions}>
            <Link className={styles.ghostBtn} href="#featured">
              Deals
            </Link>
            <Link className={styles.primaryBtn} href="#shop">
              Shop now
            </Link>
            <button
              aria-label="Toggle navigation menu"
              className={styles.burger}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}



