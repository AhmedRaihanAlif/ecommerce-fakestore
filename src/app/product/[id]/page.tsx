import Image from "next/image";
import Link from "next/link";
import { getProductById } from "@/lib/api";
import { fallbackProducts } from "@/lib/fallbackData";
import { Product } from "@/types/fakestore";
import styles from "./product.module.css";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  try {
    const product = await getProductById(id);
    return {
      title: `${product.title} | MoMagic Shop`,
      description: product.description,
    };
  } catch {
    return {
      title: "Product | MoMagic Shop",
      description: "Product detail from FakeStore API.",
    };
  }
}

async function loadProduct(id: string): Promise<Product> {
  try {
    const product = await getProductById(id);
    if (!product) {
      notFound(); // redirect to 404 page
    }
    return product;
  } catch {
    const fallback = fallbackProducts.find(
      (product) => String(product.id) === String(id)
    );
    if (fallback) return fallback;

    notFound(); // if no fallback, show 404
  }
}

export default async function ProductDetail({ params }: PageProps) {
  const { id } = await params;
  const product = await loadProduct(id);
  const price = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  return (
    <div className={styles.page}>
      <div className="container">
        <Link href="/" className={styles.back}>
          ← Back to store
        </Link>

        <div className={styles.card}>
          <div className={styles.imageWrap}>
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className={styles.details}>
            <span className={styles.category}>{product.category}</span>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.price}>{price}</p>
            {product.rating ? (
              <p className={styles.rating}>
                {product.rating.rate.toFixed(1)} rating · {product.rating.count} reviews
              </p>
            ) : (
              <p className={styles.rating}>Popular pick</p>
            )}
            <p className={styles.description}>{product.description}</p>
            <div className={styles.actions}>
              <button className={styles.primary}>Add to cart</button>
              <button className={styles.secondary}>Add to wishlist</button>
            </div>
            <ul className={styles.meta}>
              <li>Delivery: 2–4 business days</li>
              <li>Returns: 30-day easy returns</li>
              <li>Support: hello@momagic.shop</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

