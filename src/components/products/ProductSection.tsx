 "use client";

import { useEffect, useMemo, useState } from "react";
import { getProductsByCategory } from "@/lib/api";
import { Product } from "@/types/fakestore";
import { CategoryBar } from "../categories/CategoryBar";
import { ProductCard } from "./ProductCard";
import styles from "./ProductSection.module.css";

type Props = {
  initialProducts: Product[];
  categories: string[];
};

export function ProductSection({ initialProducts, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        if (selectedCategory === "all") {
          setProducts(initialProducts);
          return;
        }

        setLoading(true);
        const nextProducts = await getProductsByCategory(selectedCategory);
        setProducts(nextProducts);
      } catch {
        setError("Unable to load products right now. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    void fetchData();
  }, [selectedCategory, initialProducts]);

  const headline = useMemo(() => {
    if (selectedCategory === "all") return "Trending across the store";
    return `Top picks in ${selectedCategory}`;
  }, [selectedCategory]);

  const productCountLabel =
    selectedCategory === "all"
      ? `${products.length} products live`
      : `${products.length} styles in ${selectedCategory}`;

  return (
    <section className={styles.section} id="shop">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Curated for you</p>
          <h2 className={styles.title}>{headline}</h2>
          <p className={styles.subtitle}>
            Dynamic data pulled from FakeStore API with graceful fallbacks for missing
            fields.
          </p>
        </div>
        <div className={styles.count}>{productCountLabel}</div>
      </div>

      <CategoryBar
        categories={categories}
        selected={selectedCategory}
        onSelect={(value) => setSelectedCategory(value)}
      />

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.grid}>
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div className={styles.skeleton} key={`skeleton-${index}`} />
            ))
          : products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>

      {!loading && products.length === 0 && !error ? (
        <p className={styles.empty}>
          No items found in this category. Check back soon for new drops.
        </p>
      ) : null}
    </section>
  );
}

