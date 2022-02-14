import React from "react";
import Image from "next/image";
import styles from "./Banner.module.scss";
import { useRouter } from "next/router";
import { ProductType } from "@/interfaces/commonTypes";

const Banner = function ({ product }: { product: ProductType }) {
  const router = useRouter();
  return (
    <div className={styles.banner}>
      <div className={styles.textContainer}>
        <p className={styles.textSm}>New Products</p>
        <h3 className={styles.textLg}>{product?.subcategory.name}</h3>
        <button
          onClick={() =>
            router.push(`/product/${product?.productTitle}?id=${product?.id}`)
          }
          className={`btn ${styles.btn}`}
        >
          Shop Now <span className="material-icons">chevron_right</span>
        </button>
      </div>

      <div className={styles.imageContainer}>
        <Image src={product?.image[0].imageUrl} width="300" height="160" />
      </div>
    </div>
  );
};

export default Banner;
