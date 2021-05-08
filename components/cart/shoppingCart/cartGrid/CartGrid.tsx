import React from "react";
import styles from "./cartGrid.module.scss";

import Link from "next/link";
import Image from "next/image";
import CartTab from "../cartTab/CartTab";

const CartGrid = () => {
  return (
    <div>
      <CartTab />
      <div className={styles.items_container}>
        <div className={styles.items_content}>
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
        <div className={styles.items_content}>
          <div className={styles.grid}>
            <div className={styles.firstBox}>
              <div className={styles.imgbox}>
                <Image
                  src="/images/store.png"
                  width="120"
                  height="120"
                  className={styles.img}
                />
                <button>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className={styles.item_desc}>
                <p className={styles.seller}>Seller: Nike Stores</p>
                <p className={styles.name}>
                  Solid pattern in fashion summer dress
                </p>
              </div>
            </div>
            <div className={styles.secondBox}>
              <p className={styles.discount_price}>$129.99</p>
              <p className={styles.current_price}>$129.99</p>
            </div>
            <div className={styles.thirdBox}>
              <div className={styles.addbtn}>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
            <div className={styles.forthBox}>
              <p className={styles.subtotal}>$129.99</p>
            </div>
          </div>
        </div>
        <div className={styles.items_content}>
          <div className={styles.grid}>
            <div className={styles.firstBox}>
              <div className={styles.imgbox}>
                <Image
                  src="/images/store.png"
                  width="120"
                  height="120"
                  className={styles.img}
                />
                <button>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className={styles.item_desc}>
                <p className={styles.seller}>Seller: Nike Stores</p>
                <p className={styles.name}>
                  Solid pattern in fashion summer dress
                </p>
              </div>
            </div>
            <div className={styles.secondBox}>
              <p className={styles.discount_price}>$129.99</p>
              <p className={styles.current_price}>$129.99</p>
            </div>
            <div className={styles.thirdBox}>
              <div className={styles.addbtn}>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
            <div className={styles.forthBox}>
              <p className={styles.subtotal}>$129.99</p>
            </div>
          </div>
        </div>
        <div className={styles.items_content}>
          <div className={styles.grid}>
            <div className={styles.firstBox}>
              <div className={styles.imgbox}>
                <Image
                  src="/images/store.png"
                  width="120"
                  height="120"
                  className={styles.img}
                />
                <button>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className={styles.item_desc}>
                <p className={styles.seller}>Seller: Nike Stores</p>
                <p className={styles.name}>
                  Solid pattern in fashion summer dress
                </p>
              </div>
            </div>
            <div className={styles.secondBox}>
              <p className={styles.discount_price}>$129.99</p>
              <p className={styles.current_price}>$129.99</p>
            </div>
            <div className={styles.thirdBox}>
              <div className={styles.addbtn}>
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
            <div className={styles.forthBox}>
              <p className={styles.subtotal}>$129.99</p>
            </div>
          </div>
        </div>
        <div className={styles.bottom_part}>
          <div className={styles.content}>
            <form className={styles.coupon_box}>
              <input type="text" name="Coupon Code" placeholder="Coupon Code" />
              <button type="submit">Apply Coupon</button>
            </form>
            <p>
              Total: <span>$129999.99</span>
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
    </div>
  );
};

export default CartGrid;
