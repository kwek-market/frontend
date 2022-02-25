import React from "react";

import styles from "./ordersFilled.module.scss";

const OrderHeader = function () {
  return (
    <thead>
      <tr className={styles.grid}>
        <th>
          <input type="checkbox" name="" id="" />
        </th>
        <th>
          <span className={styles.title}>Order ID</span>
        </th>
        <th>
          <span className={styles.title}>Created</span>
        </th>
        <th>
          <span className={styles.title}>Customer</span>
        </th>
        <th>
          <span className={styles.title}>Total</span>
        </th>
        <th>
          <span className={styles.title}>Profit</span>
        </th>
        <th>
          <span className={styles.title}>Payment</span>
        </th>
        <th>
          <span className={styles.title}>Status</span>
        </th>
      </tr>
    </thead>
  );
};

export default OrderHeader;
