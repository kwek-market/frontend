import React from "react";
import styles from "./GridContainer.module.scss";

import { TitleBlock, Banner, Card, SideBar } from "../index";
import { ProductBox } from "@/shared";

const GridContainer = ({ title, timer, sidebar, cards, banners }: any) => {
  const products = [1, 2, 3, 4];

  return (
    <div id={styles.categoryGrid}>
      <TitleBlock title={title} timer={timer} />
      <div
        className={sidebar ? styles.mainContainer : styles.mainContainer__full}
      >
        <div className={styles.products}>
          {products.map(() => (
            <div className={styles.product}>
              <ProductBox />
            </div>
          ))}
        </div>

        {cards && (
          <div className={styles.cards}>
            {cards.map(() => (
              <div className={styles.card}>
                <Card />
              </div>
            ))}
          </div>
        )}

        {banners && (
          <div className={styles.banners}>
            {banners.map(() => (
              <div className={styles.banner}>
                <Banner />
              </div>
            ))}
          </div>
        )}
      </div>
      {sidebar && (
        <aside className={styles.sidebarContainer}>
          <SideBar />
        </aside>
      )}
    </div>
  );
};

export default GridContainer;
