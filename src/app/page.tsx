import { FeatureStrip } from "@/components/features/FeatureStrip";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { HeroSlider } from "@/components/hero/HeroSlider";
import { Newsletter } from "@/components/newsletter/Newsletter";
import { ProductSection } from "@/components/products/ProductSection";
import { getAllProducts, getCategories } from "@/lib/api";
import { fallbackCategories, fallbackProducts } from "@/lib/fallbackData";
import { Product } from "@/types/fakestore";
import styles from "./page.module.css";

export default async function Home() {
  let products: Product[] = [];
  let categories: string[] = [];

  try {
    [products, categories] = await Promise.all([getAllProducts(), getCategories()]);
  } catch {
    products = fallbackProducts;
    categories = fallbackCategories;
  }

  return (
    <div className={styles.page}>
      <Header />
      <HeroSlider />
      <main className="container">
        <FeatureStrip />
        <ProductSection initialProducts={products} categories={categories} />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
