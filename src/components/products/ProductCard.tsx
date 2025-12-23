import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/fakestore";
import styles from "./ProductCard.module.css";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const price = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  const ratingLabel = product.rating
    ? `${product.rating.rate.toFixed(1)} · ${product.rating.count} reviews`
    : "Popular item";

  return (
    <article className={styles.card}>
      <Link href={`/product/${product.id}`} className={styles.imageWrap}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1100px) 33vw, 25vw"
        />
      </Link>
      <div className={styles.body}>
        <div className={styles.topRow}>
          <span className={styles.category}>{product.category}</span>
          <span className={styles.rating}>{ratingLabel}</span>
        </div>
        <Link href={`/product/${product.id}`} className={styles.title}>
          {product.title}
        </Link>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.footer}>
          <div>
            <p className={styles.price}>{price}</p>
            <p className={styles.subtext}>Ships in 2-4 days</p>
          </div>
          <Link href={`/product/${product.id}`} className={styles.cta}>
            View
          </Link>
        </div>
      </div>
    </article>
  );
}



