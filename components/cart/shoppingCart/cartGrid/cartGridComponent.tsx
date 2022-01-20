import React, { useCallback, useEffect, useRef, useState } from "react";
// import CartGrid from 'cartgridcomponent.module.scss'
import Image from "next/image";
import styles from "./cartGrid.module.scss";
import mobileStyles from "./cartgridcomponent.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import {
  addToCartFunc,
  deleteCartItem,
  getCartFunc,
} from "@/store/cart/cart.actions";
import { AddToCartPayload } from "@/interfaces/commonTypes";
import { getIp } from "@/helpers";
import { v4 } from "uuid";

const CartGridComponent = function () {
  const dispatch = useDispatch();
  const { user, cart } = useSelector((state: RootState) => state);

  function deleteItemFromCart(itemId: string, cartId: string) {
    const payload = {
      itemId,
      cartId,
      token: user.token,
    };
    dispatch(deleteCartItem(payload));
    dispatch(getCartFunc(user.token));
  }

  async function increaseQuantity(productId: string) {
    const payload: AddToCartPayload = {
      productOptionId: productId,
      token: user.token,
      ipAddress: await getIp(),
    };
    dispatch(addToCartFunc(payload, user.token));
    dispatch(getCartFunc(user.token));
  }

  function decreaseQuantity() {
    dispatch(getCartFunc(user.token));
  }

  return (
    <>
      <div
        className={`${styles.items_content} tw-hidden md:tw-flex tw-flex-col`}
      >
        {cart.cart.map((item) => (
          <div key={item.id} className={styles.grid}>
            <div className={styles.firstBox}>
              <div className={styles.imgbox}>
                <Image
                  src={item.product.image[0].imageUrl}
                  width="120"
                  height="120"
                  className={styles.img}
                />
                <button
                  onClick={() => deleteItemFromCart(item.id, item.cart.id)}
                >
                  <i className="fas fa-times" />
                </button>
              </div>
              <div className={styles.item_desc}>
                <p className={styles.seller}>
                  Seller: {item.product.user.sellerprofileSet[0].shopName}
                </p>
                <p className={styles.name}>{item.product.productTitle}</p>
              </div>
            </div>
            <div className={styles.secondBox}>
              <p className={styles.discount_price}>$129.99</p>
              <p className={styles.current_price}>₦{item.price}</p>
            </div>
            <div className={styles.thirdBox}>
              <div className={styles.addbtn}>
                <button onClick={() => decreaseQuantity()}>-</button>
                <p className={styles.qty}>{item.quantity}</p>
                <button
                  onClick={() => increaseQuantity(item.product.options[0].id)}
                >
                  +
                </button>
              </div>
            </div>
            <div className={styles.forthBox}>
              <p className={styles.subtotal}>₦{item.quantity * item.price}</p>
            </div>
          </div>
        ))}
      </div>
      {cart.cart.map((item, index: number) => (
        <div
          key={v4()}
          className={`${mobileStyles.cartContainer} tw-border-b tw-pb-5 tw-mt-5 tw-border-gray-kwek100 tw-flex md:tw-hidden `}
        >
          <div className={mobileStyles.imageWrapper}>
            <Image
              src={item.product.image[0].imageUrl}
              width="120"
              height="150"
            />
            <button
              className={mobileStyles.closeBtn}
              onClick={() => deleteItemFromCart(item.id, item.cart.id)}
            >
              <i className="fas fa-times" />
            </button>
          </div>
          <div className="tw-ml-7">
            <div>
              <span className="tw-text-xs tw-text-gray-kwek100">
                Seller: {item.product.user.sellerprofileSet[0].shopName}
              </span>
            </div>
            <div className="tw-mb-4">
              <span className="tw-text-black-stock tw-text-sm tw-font-semibold">
                {item.product.productTitle}
              </span>
            </div>
            <div className="">
              <span className="tw-border tw-py-2 tw-px-2.5 tw-rounded-l">
                {" "}
                -
              </span>
              <span className="tw-border tw-py-2 tw-px-6 tw-font-semibold">
                {item.quantity}
              </span>
              <span className="tw-border tw-p-2 tw-px-2.5 tw-rounded-r">+</span>
            </div>
          </div>
          <div className="tw-flex tw-flex-col">
            <span className="tw-text-base tw-text-black-stock tw-font-semibold">
              ₦{item.quantity * item.price}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartGridComponent;
