import React from "react";
import styles from "./GridContainer.module.scss";

import { TitleBlock, Banner, Card, SideBar } from "../index";
import { ProductBox } from "shared";

const GridContainer = () => {
  const products = [1, 2, 3, 4];
  const cards = [1, 2, 3];
  const banners = [1, 2];

  return (
    <div id={styles.categoryGrid}>
      <TitleBlock />
      <div className={styles.mainContainer}>
        <div className={styles.products}>
          {products.map(() => (
            <div className={styles.product}>
              <ProductBox />
            </div>
          ))}
        </div>

        <div className={styles.cards}>
          {cards.map(() => (
            <div className={styles.card}>
              <Card />
            </div>
          ))}
        </div>

        <div className={styles.banners}>
          {banners.map(() => (
            <div className={styles.banner}>
              <Banner />
            </div>
          ))}
        </div>
      </div>
      <aside className={styles.sidebarContainer}>
        <SideBar />
      </aside>
    </div>
  );
};

export default GridContainer;
