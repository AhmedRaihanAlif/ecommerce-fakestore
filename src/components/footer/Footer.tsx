import Link from "next/link";
import styles from "./Footer.module.css";

const footerLinks = [
  { label: "About", href: "#top" },
  { label: "FAQ", href: "#contact" },
  { label: "Returns", href: "#contact" },
  { label: "Privacy", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.logo}>MoMagic Shop</div>
            <p className={styles.muted}>
              Built with Next.js and FakeStore API. Designed for the assignment brief and
              ready for Vercel deploy.
            </p>
          </div>
          <div className={styles.links}>
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className={styles.contact}>
            <p className={styles.muted}>Questions? hello@momagic.shop</p>
            <p className={styles.muted}>© {year} MoMagic. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}



