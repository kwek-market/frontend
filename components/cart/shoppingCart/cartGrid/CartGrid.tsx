import React, { useMemo } from "react";

import Link from "next/link";
import styles from "./cartGrid.module.scss";
import CartTab from "../cartTab/CartTab";
import CartGridComponent from "./cartGridComponent";
import Button from "@/components/buttons/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { useRouter } from "next/router";

const CartGrid = function () {
  const { cart } = useSelector((state: RootState) => state);
  const router = useRouter();

  const result = useMemo(() => {
    let initial = 0;
    cart.cart.forEach((item) => {
      const current = item.price;
      initial += current;
    });
    return initial;
  }, [cart.cart]);

  return (
    <section>
      <div className="tw-flex tw-flex-col">
        <nav>
          <CartTab />
        </nav>
        <section>
          <div className={`${styles.items_container}`}>
            <div className={`${styles.items_content} ${styles.hideShow}`}>
              <div className={styles.grid}>
                <div className={styles.firstBox}>
                  <p className={styles.title}>PRODUCT</p>
                </div>
                <div className={styles.secondBox}>
                  <p className={styles.title}>PRICE</p>
                </div>
                <div className={styles.thirdBox}>
                  <p className={styles.title}>QUANTITY</p>
                </div>
                <div className={styles.forthBox}>
                  <p className={styles.title}>SUBTOTAL</p>
                </div>
              </div>
            </div>
            <CartGridComponent />
            <div className={styles.bottom_part}>
              <div className={styles.content}>
                <form className={styles.coupon_box}>
                  <input
                    type="text"
                    name="Coupon Code"
                    placeholder="Coupon Code"
                  />
                  <button type="submit">Apply Coupon</button>
                </form>
                <p>
                  Total: <span>₦{result}</span>
                </p>
              </div>
              <p>Delivery Fee is not included yet</p>
              <Link href="/cart/checkout">
                <a>
                  <button className={styles.checkout_btn}>
                    Proceed to Checkout
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <div className="tw-flex tw-flex-row tw-shadow-md tw-bg-white-100 tw-fixed tw-w-full tw-z-10 tw-bottom-0 tw-left-0 tw-right-0 tw-justify-between tw-items-center tw-p-3 md:tw-hidden">
          <div>
            <i className="fas fa-angle-up tw-text-green-success tw-text-base" />
          </div>
          <div className="tw-flex tw-flex-col">
            <span className="tw-text-sm tw-text-black-stock">Total</span>
            <span className="tw-text-gray-kwek200 tw-text-lg tw-font-medium">
              ₦{result}
            </span>
            <span className="tw-text-error tw-text-xs">
              * Delivery fee is not included
            </span>
          </div>
          <Button
            buttonStyle="tw-bg-green-success tw-text-white-100 tw-py-5 tw-px-10 tw-rounded"
            text="checkout"
            cmd={() => router.push("/cart/checkout")}
          />
        </div>
      </div>
    </section>
  );
};

export default CartGrid;
