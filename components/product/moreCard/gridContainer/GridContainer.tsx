import React from 'react';
import styles from './GridContainer.module.scss';

import { TitleBlock, Card } from '../index';
import { ProductBox } from '@/shared';

interface GridContainerProps {
  title: string;
  cards?: any;
}

const GridContainer = function ({ title, cards }: GridContainerProps) {
  const products = [1, 2, 3, 4, 5];

  return (
    <div id={styles.categoryGrid}>
      <TitleBlock title={title} />
      <div className={styles.mainContainer__full}>
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
    </div>
  );
};

export default GridContainer;
