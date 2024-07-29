import React from "react";

import Link from "next/link";
import styles from "./cartTab.module.scss";

const CartTab = function () {
  return (
    <div className={styles.tab_container}>
      <div className={styles.tab_content}>
        <Link href="/cart">
          <a className={styles.active}>
            1. Shopping Cart
            <i className="fas fa-angle-right" />
          </a>
        </Link>
        <Link href={"/cart/checkout"}>
          <a className={styles.active}>
            2. Checkout
            <i className="fas fa-angle-right" />
          </a>
        </Link>
        <a>3. Order Complete</a>
      </div>
    </div>
  );
};

export default CartTab;
