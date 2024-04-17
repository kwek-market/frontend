import React from "react";
import Image from "next/image";
import styles from "./ordersEmpty.module.scss";
import Link from "next/link";

const OrdersEmpty = function () {
  return (
    <div className={styles.empty_container}>
      <h3 className={styles.title}>Orders</h3>

      <div className={styles.empty_content}>
        <div className={styles.img}>
          <Image src="/svg/orderEmpty.svg" width="200" height="200" />
        </div>
        <p className={styles.head}>You currently have no orders</p>
        <p className={styles.sub}>Start selling now on Kwekmarketplace</p>

        <Link href="/seller/upload-new-product" className={styles.setShopBtn}>
          Set up your shop
        </Link>
      </div>
    </div>
  );
};

export default OrdersEmpty;
