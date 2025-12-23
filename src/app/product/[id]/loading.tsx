import styles from "./product.module.css";

export default function LoadingProduct() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.imageWrap} />
          <div className={styles.details}>
            <div className={styles.skeleton} />
          </div>
        </div>
      </div>
    </div>
  );
}

