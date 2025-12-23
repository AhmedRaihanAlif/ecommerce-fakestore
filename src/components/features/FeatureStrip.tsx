import styles from "./FeatureStrip.module.css";

const features = [
  {
    title: "Free shipping",
    description: "On every order over $50 with tracked delivery.",
  },
  {
    title: "30-day returns",
    description: "Try at home. Easy refunds with no questions asked.",
  },
  {
    title: "Secure checkout",
    description: "Protected payments with SSL and leading providers.",
  },
  {
    title: "Live support",
    description: "Chat with a stylist Monday–Saturday, 9am–7pm.",
  },
];

export function FeatureStrip() {
  return (
    <section className={styles.strip} id="featured">
      {features.map((feature) => (
        <article key={feature.title} className={styles.item}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </section>
  );
}


