import React from "react";
import styles from "./extraInfo.module.scss";

import Link from "next/link";
import Image from "next/image";

const Component = () => {
  return (
    <div className={styles.info_container}>
      <div className={styles.info_content}>
        <div className={styles.info_box}>
          <Image
            width="56"
            height="56"
            src="/svg/Delivery.svg"
            alt="delivery"
          />
          <div className={styles.info_box_content}>
            <p className={styles.head}>24 hrs Delivery</p>
            <p className={styles.sub}>When order from $500</p>
          </div>
        </div>
        <div className={styles.info_box}>
          <Image width="56" height="56" src="/svg/Return.svg" alt="delivery" />
          <div className={styles.info_box_content}>
            <p className={styles.head}>Return Policy</p>
            <p className={styles.sub}>Free Shipping on all order</p>
          </div>
        </div>
        <div className={styles.info_box}>
          <Image width="56" height="56" src="/svg/Support.svg" alt="delivery" />
          <div className={styles.info_box_content}>
            <p className={styles.head}>24/7 Support</p>
            <p className={styles.sub}>When order from $500</p>
          </div>
        </div>
        <div className={styles.info_box}>
          <Image width="56" height="56" src="/svg/Payment.svg" alt="delivery" />
          <div className={styles.info_box_content}>
            <p className={styles.head}>Secure Payment</p>
            <p className={styles.sub}>When order from $500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
