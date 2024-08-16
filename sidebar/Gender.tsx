import React from "react";
import styles from "./Sidebar.module.scss";

export function Gender({}) {
  return <div className={styles.sidebar_content}>
        <p className={styles.header}>GENDER</p>
        <div className={styles.subMenu}>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>Baby</p>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>Boys</p>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>Girls</p>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>Men</p>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>Women</p>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>Unisex</p>
          </div>
          <div className={styles.checkSub}>
            <input className={styles.inputSquare} type="checkbox" />
            <p>Sport & Fitness wears</p>
          </div>
        </div>
      </div>;
}
  