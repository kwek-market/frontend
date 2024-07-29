import React from "react";
import Image from "next/image";
import styles from "./EmptyProduct.module.scss";

const ProductEmpty = function () {
  return (
    <div className={styles.stock}>
      <div className={styles.stocks}>
        <div className="">
          <Image src="/images/stock.png" width="259.85" height="261.01" />
        </div>
        <h4 className={styles.current}>
          You currently have no products in your store
        </h4>
        <p className={styles.sell}>Start selling now on Kwekmarketplace</p>
        <button>Set up your shop</button>
      </div>
    </div>
  );
};

export default ProductEmpty;
