import React, { useState } from "react";
import styles from "./GridContainer.module.scss";

import { ActiveTabbar, Card, SideBar } from "../index";
import Pagination from '../../../shared/pagination/Pagination'
import { ProductBox } from "@/shared";

const GridContainer = ({ cards }: any) => {
  const [filter, setFilter] = useState(true)
  const products = [1, 2, 3, 4];

  return (
    <div id={styles.categoryGrid}>
      <ActiveTabbar filter={filter} setFilter={setFilter} />
      
      {filter && (
        <aside className={styles.sidebarContainer}>
          <SideBar />
        </aside>
      )}

      <div
        className={filter ? styles.mainContainer : styles.mainContainer__full}
      >
        <div className={styles.products}>
          {products.map((product: any) => (
            <div key={product} className={styles.product}>
              <ProductBox />
            </div>
          ))}
        </div>

        {cards && (
          <div className={styles.cards}>
            {cards.map((card: any) => (
              <div key={card} className={styles.card}>
                <Card />
              </div>
            ))}
          </div>
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default GridContainer;