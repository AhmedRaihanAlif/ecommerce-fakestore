 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./HeroSlider.module.css";

const slides = [
  {
    title: "Minimal streetwear that works everywhere.",
    subtitle: "New season · curated for comfort",
    description:
      "Layerable essentials, premium fabrics, and silhouettes inspired by the latest drop on our Figma brief.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80",
    ctaLabel: "Shop collection",
    ctaHref: "#shop",
    badge: "New arrivals",
  },
  {
    title: "Fine jewelry that shines every day.",
    subtitle: "Timeless · crafted · reliable",
    description:
      "From modern chains to heirloom-ready pieces, discover styles that elevate every look.",
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1600&q=80",
    ctaLabel: "Explore jewelry",
    ctaHref: "#featured",
    badge: "Curated picks",
  },
  {
    title: "Gadgets and gear for the workspace.",
    subtitle: "Ergonomic · wireless · smart",
    description:
      "Electronics that make productivity effortless—headphones, keyboards, tablets, and more.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
    ctaLabel: "Upgrade desk",
    ctaHref: "#shop",
    badge: "Editor’s choice",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      6500,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} aria-label="Featured promotions">
      <div className={styles.slides}>
        {slides.map((slide, index) => (
          <article
            key={slide.title}
            className={`${styles.slide} ${
              index === current ? styles.active : ""
            }`}
          >
            <div className={styles.imageWrap}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
              />
              <div className={styles.overlay} />
            </div>
            <div className="container">
              <div className={styles.copy}>
                <span className={styles.badge}>{slide.badge}</span>
                <p className={styles.subtitle}>{slide.subtitle}</p>
                <h1 className={styles.title}>{slide.title}</h1>
                <p className={styles.description}>{slide.description}</p>
                <div className={styles.actions}>
                  <Link className={styles.primary} href={slide.ctaHref}>
                    {slide.ctaLabel}
                  </Link>
                  <Link className={styles.secondary} href="#categories">
                    Browse categories
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.dots} role="tablist" aria-label="Hero slides">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            className={`${styles.dot} ${index === current ? styles.dotActive : ""}`}
            aria-label={`Show slide ${index + 1}`}
            aria-pressed={index === current}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}



