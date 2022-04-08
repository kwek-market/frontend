import React, { useMemo } from "react";
import Image from "next/image";
import styles from "../checkGrid/checkGrid.module.scss";
import { RootState } from "@/store/rootReducer";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { ProductType } from "@/interfaces/commonTypes";

function CartInfo() {
  const { cart } = useSelector((state: RootState) => state);

  const result = useMemo(() => {
    let initial = 0;
    cart.cart.forEach((item) => {
      const current = item.price;
      initial += current;
    });
    return initial;
  }, [cart.cart]);

  return (
    <div className={styles.second_box}>
      <p className={styles.title}>YOUR ORDER</p>
      <div className={styles.card_box}>
        {cart.cart.map((item) => (
          <div key={v4()} className={styles.card}>
            <Image
              src={item.product.image[0].imageUrl}
              width="144"
              height="144"
              className={styles.img}
            />
            <div className={styles.info}>
              <p className={styles.seller}>
                Seller: {item.product.user.sellerprofileSet[0].shopName}
              </p>
              <p className={styles.name}>{item.product.productTitle}</p>
              <div className={styles.item_info}>
                <p className={styles.qty}>Qty: {item.quantity}</p>
                <p className={styles.price}>₦{item.price}</p>
              </div>
              <div className={styles.item_info}>
                <p className={styles.qty}>Color:</p>
                <p className={styles.price}>{item.product.color}</p>
              </div>
              <div className={styles.item_info}>
                <p className={styles.qty}>Size:</p>
                <p className={styles.price}>
                  {item.product.options[0].size}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.subtotal_box}>
        <p className={styles.head}>Subtotal</p>
        <p className={styles.price}>₦{result}</p>
      </div>
      <div className={styles.charge_box}>
        <p className={styles.head}>Delivery Charges</p>
        <p className={styles.price}>₦100</p>
      </div>
      <div className={styles.total_box}>
        <p className={styles.head}>Total</p>
        <p className={styles.price}>₦{result + 100}</p>
      </div>
    </div>
  );
}

export default CartInfo;
