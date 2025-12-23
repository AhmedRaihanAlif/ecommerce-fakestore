 "use client";

import styles from "./Newsletter.module.css";

export function Newsletter() {
  return (
    <section className={styles.section} id="contact">
      <div>
        <p className={styles.eyebrow}>Stay in the loop</p>
        <h3 className={styles.title}>Get drops and styling tips first.</h3>
        <p className={styles.subtitle}>
          We send one thoughtful email per week. Unsubscribe anytime.
        </p>
        <form
          className={styles.form}
          onSubmit={(event) => {
            event.preventDefault();
            alert("Thanks for subscribing! (Demo only)");
          }}
        >
          <input
            type="email"
            required
            name="email"
            placeholder="Enter your email"
            aria-label="Email address"
          />
          <button type="submit">Subscribe</button>
        </form>
        <p className={styles.helper}>We’ll never share your email.</p>
      </div>
      <div className={styles.card}>
        <p className={styles.cardTitle}>Need styling help?</p>
        <p className={styles.cardBody}>
          Chat with our team for personalized recommendations based on your vibe and
          the Figma brief.
        </p>
        <a className={styles.cardLink} href="mailto:hello@momagic.shop">
          Email support
        </a>
      </div>
    </section>
  );
}

