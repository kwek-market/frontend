import React from 'react';
import styles from './GridContainer.module.scss';

import { Card, ActiveTabbar } from '../index';
import Pagination from '../../pagination/Pagination';
import { ProductBox } from '@/shared';

const GridContainer = function ({ sidebar, cards }: any) {
  const products = [1, 2, 3, 4, 5];

  return (
    <div id={styles.categoryGrid}>
      <ActiveTabbar />
      <div className={sidebar ? styles.mainContainer : styles.mainContainer__full}>
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
