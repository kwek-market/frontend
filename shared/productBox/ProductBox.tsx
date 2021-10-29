import React from "react";
import styles from "./ProductBox.module.scss";
import Link from "next/link";
import Image from "next/image";

const ProductBox = () => {
  return (
    <div className={styles.box}>
      <div className={`${styles.box_imageContainer} tw-relative`}>
        <Image
          src="/images/product.png"
          width="329"
          height="284"
          alt="product"
        />
        <span className="tw-absolute tw-top-3/4 tw-right-0 tw-mr-3 tw-flex tw-flex-row hover:tw-hidden">
          <i className="fas fa-shopping-cart tw-p-1 tw-bg-white-100 tw-rounded-full fa-0.5x fa-xs tw-mr-2 tw-text-gray-kwek100" />
          <i className="fas fa-heart tw-p-1 tw-bg-white-100 tw-rounded-full fa-0.5x tw-text-red-kwek100 fa-xs" />
        </span>
        <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 overlay tw-z-20 tw-bg-brown-kwek300">
          <span className="tw-absolute tw-right-0 tw-m-3 tw-flex tw-flex-col">
            <i className="fas fa-shopping-cart tw-p-1 tw-bg-white-100 tw-rounded-full fa-0.5x fa-xs tw-mb-2 tw-text-gray-kwek100" />
            <i className="fas fa-heart tw-p-1 tw-bg-white-100 tw-rounded-full fa-0.5x tw-text-red-kwek100 fa-xs" />
          </span>
          <Link href="/product/women-fashion-bag">
            <a className="tw-bg-red-kwek200 tw-absolute tw-left-0 tw-right-0 tw-bottom-0 tw-p-2 tw-text-center tw-text-white-100 tw-uppercase tw-opacity-100">
              details
            </a>
          </Link>
        </div>
      </div>

      <Link href="/product/women-fashion-bag">
        <a>
          <div className={styles.box_details}>
            <p className="tw-text-sm tw-w-4/5 tw-text-gray-kwek400">
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
