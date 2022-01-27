import React from "react";
import Image from "next/image";
import styles from "./list.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getIp } from "@/helpers";
import { AddToCartPayload } from "@/interfaces/commonTypes";
import { addToCartFunc, getCartFunc } from "@/store/cart/cart.actions";
import { RootState } from "@/store/rootReducer";

const ListComponent = function ({
  listStyle,
  imgSrc,
  altText,
  itemName,
  itemPrice,
  itemDate,
  inStock,
  itemId,
}) {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state);

  async function addToCart(id: string) {
    const payload: AddToCartPayload = {
      ipAddress: await getIp(),
      productOptionId: id,
      token: user.token,
    };
    dispatch(addToCartFunc(payload, user.token));
    dispatch(getCartFunc(user.token));
  }

  return (
    <>
      <div className={listStyle}>
        <div className={styles.first_grid}>
          <Image
            src={imgSrc}
            alt={altText}
            width="100"
            height="80"
            className={styles.img}
          />
        </div>
        <div className={styles.second_grid}>
          <p className={styles.item_name}>{itemName}</p>
          <p className={styles.item_price}>₦{itemPrice}</p>
          <p className={styles.date}>{itemDate}</p>
        </div>
        <div className={styles.third_grid}>
          <p className={inStock ? styles.stock : styles.stock_out}>
            {inStock ? "In Stock" : "Out Of Stock"}
          </p>
          <a className={styles.buy} onClick={() => addToCart(itemId)}>
            Buy Product
          </a>
        </div>
      </div>
      <div className={styles.list_grid_mobile}>
        <div className={styles.picture_grid}>
          <div className={styles.heartImg}>
            <Image
              src="/svg/heart-filled.svg"
              alt={altText}
              width={12}
              height={10.68}
              className={styles.heart}
              // layout="responsive"
            />
          </div>
          <Image
            src={imgSrc}
            alt={altText}
            width="100%"
            height="100%"
            layout="responsive"
            className={styles.img}
          />
        </div>
        <div className={styles.content_box}>
          <p className={inStock ? styles.stock : styles.stock_out}>
            {inStock ? "In Stock" : "Out Of Stock"}
          </p>
          <p className={styles.item_name}>{itemName}</p>
          <p className={styles.item_price}>₦{itemPrice}</p>
          <p className={styles.star}>
            <span className={`material-icons ${styles.star_filled}`}>star</span>
            <span className={`material-icons ${styles.star_filled}`}>star</span>
            <span className={`material-icons ${styles.star_filled}`}>star</span>
            <span className={`material-icons ${styles.star_filled}`}>star</span>
            <span className={`material-icons ${styles.star_filled}`}>star</span>
            <span className={styles.reviews}>(6 reviews)</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ListComponent;
