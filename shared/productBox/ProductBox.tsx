import React from "react";
import styles from "./ProductBox.module.scss";
import Link from "next/link";
import Image from "next/image";

const ProductBox = () => {
  return (
    <div className={styles.box}>
      <div className={styles.box_imageContainer}>
        <Image
          src="/images/product.png"
          width="329"
          height="284"
          alt="product"
        />
      </div>

      <Link href="/product/women-fashion-bag">
        <a>
          <div className={styles.box_details}>
            <p className={styles.box_productCategory}>Fashion</p>

            <p className={styles.box_productName}>
              Women’s fashion Shiny High Heels
            </p>

            <p className={styles.box_productPrice}>
              <span>$25.00</span>
              <span>$35.00</span>
            </p>

            <p className={styles.box_productRating}>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <small>(6 Reviews)</small>
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductBox;
