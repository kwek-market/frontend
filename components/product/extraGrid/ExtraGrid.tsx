import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./extraGrid.module.scss";
import { ProductType } from "@/interfaces/commonTypes";
import StarRatingComponent from "react-star-rating-component";
import useAvgRating from "@/hooks/useAvgRating";

const ExtraGrid = function ({ product }: { product: ProductType }) {
  return (
    <div className={styles.extra_container}>
      <div className={styles.extra_info}>
        <Image
          src={
            product?.user?.sellerProfile[0]?.storeBannerUrl
              ? product?.user?.sellerProfile[0]?.storeBannerUrl
              : "/images/store.png"
          }
          
          width="100"
          height="100"
          className={styles.img}
        />
        <p>
          Sold by <span>{product?.user?.sellerProfile[0]?.shopName}</span>
        </p>
        <div className={styles.box_productRating}>
          <StarRatingComponent
            name="avg-rating"
            starCount={5}
            value={useAvgRating(product)}
            editing={false}
          />
          <small>({product.productRating.length} Reviews)</small>
        </div>
      </div>
      <div className={styles.extra_contact}>
        <Link href="/contact-us">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ExtraGrid;
