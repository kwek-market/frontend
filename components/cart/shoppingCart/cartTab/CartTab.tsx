import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import styles from './cartTab.module.scss';

const CartTab = function () {
  return (
    <div className={styles.tab_container}>
      <div className={styles.tab_content}>
        <div className={styles.active}>1. Shopping Cart</div>
        <i className="fas fa-angle-right" />
        <div>2. Checkout</div>
        <i className="fas fa-angle-right" />
        <div>3. Order Complete</div>
      </div>
    </div>
  );
};

export default CartTab;
