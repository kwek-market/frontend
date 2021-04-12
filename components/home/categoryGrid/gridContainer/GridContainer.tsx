import React from "react";
import styles from "./GridContainer.module.scss";

import { TitleBlock, Banner, Card } from "../index";
import { ProductBox } from '@/shared/'

const GridContainer = () => {
  return (
    <div id={styles.categoryGrid}>
      <TitleBlock />
      <div className={styles.mainContainer}>
        <div className={styles.products}>
          <div className={styles.product}>
            <ProductBox />
          </div>
        </div>
      </div>
      <aside className={styles.sidebarContainer}></aside>
    </div>
  );
};

export default GridContainer;
