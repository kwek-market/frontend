import { SidebarProps } from "@/interfaces/commonTypes";
import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";

export function Price({ setFiltering, filtering }: SidebarProps) {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(10000000);

  useEffect(() => {
    setFiltering({ ...filtering, priceRange: [low, high] });
  }, [low, high]);

  return (
    <div className={styles.sidebar_content}>
      <p className={styles.header}>PRICE ( ₦ )</p>
      <div className={styles.subMenu}>
        <div className={styles.sliderBox}>
          <input type="range" min="1" max="100" className={styles.slider} />
        </div>
        <div className={styles.priceInput}>
          <input
            type="number"
            placeholder="0"
            value={low}
            onChange={(e) => setLow(e.target.valueAsNumber)}
          />
          <p>-</p>
          <input
            type="number"
            placeholder="100000"
            value={high}
            onChange={(e) => setHigh(e.target.valueAsNumber)}
          />
        </div>
      </div>
    </div>
  );
}
