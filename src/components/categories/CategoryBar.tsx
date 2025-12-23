 "use client";

import styles from "./CategoryBar.module.css";

type CategoryBarProps = {
  categories: string[];
  selected: string;
  onSelect: (value: string) => void;
};

export function CategoryBar({ categories, selected, onSelect }: CategoryBarProps) {
  return (
    <div className={styles.wrapper} id="categories" aria-label="Filter by category">
      <div className={styles.scroller}>
        <button
          className={`${styles.pill} ${selected === "all" ? styles.active : ""}`}
          onClick={() => onSelect("all")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.pill} ${selected === category ? styles.active : ""}`}
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}



