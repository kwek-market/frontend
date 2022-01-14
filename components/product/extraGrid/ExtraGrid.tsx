import React from "react";
import Image from "next/image";
import styles from "./extraGrid.module.scss";
import { ProductType } from "@/interfaces/commonTypes";

const ExtraGrid = function ({ product }: { product: ProductType }) {
  return (
    <div className={styles.extra_container}>
      <div className={styles.extra_info}>
        <Image
          src="/images/store.png"
          width="100"
          height="100"
          className={styles.img}
        />
        <p>
          Sold by <span>{product?.user?.sellerprofileSet[0]?.shopName}</span>
        </p>
        <div className={styles.box_productRating}>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <small>(6 Reviews)</small>
        </div>
      </div>
      <div className={styles.extra_contact}>
        <a>Contact Us</a>
      </div>
    </div>
  );
};

export default ExtraGrid;
