import React from "react";

import Link from "next/link";
import styles from "./cartTab.module.scss";

const CartTab = function () {
  return (
    <div className={styles.tab_container}>
      <div className={styles.tab_content}>
        <Link href="/cart" className={styles.active}>
          1. Shopping Cart<i className="fas fa-angle-right" />

        </Link>
        <Link href={"/cart/checkout"} className={styles.active}>
          2. Checkout<i className="fas fa-angle-right" />

        </Link>
        3. Order Complete
      </div>
    </div>
  );
};

export default CartTab;
