import React from "react";

import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import styles from "./list.module.scss";
import ListComponent from "./ListComponent";
import { WishlistType } from "@/interfaces/commonTypes";

import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

export type WishlistProps = {
  wishlists: WishlistType;
};

const Component = function ({ wishlists }: WishlistProps) {
  return (
    <ListComponent
      imgSrc={wishlists.product.image[0].imageUrl}
      listStyle={styles.list_grid}
      altText={wishlists.product.productTitle}
      itemName={wishlists.product.productTitle}
      itemPrice={wishlists.product.options[0]?.discountedPrice}
      itemDate={dayjs(wishlists.wishlist.createdAt).format("LL")}
      inStock={wishlists.product.options.length}
      itemId={wishlists.product.options[0]?.id}
      options={wishlists.product.options}
      productId={wishlists?.product?.id}
    />
  );
};

export default Component;
