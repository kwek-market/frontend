import React from "react";
// import CartGrid from 'cartgridcomponent.module.scss'
import styles from "./cartGrid.module.scss";
import mobileStyles from "./cartgridcomponent.module.scss";
import Image from "next/image";

function CartGridComponent() {
  return (
    <>
      <div className={`${styles.items_content} tw-hidden md:tw-flex`}>
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
      <div
        className={`${mobileStyles.cartContainer} tw-border-b tw-pb-5 tw-border-gray-kwek100 tw-flex md:tw-hidden `}
      >
        <div className={mobileStyles.imageWrapper}>
          <Image src="/images/store.png" width="120" height="150" />
          <button className={mobileStyles.closeBtn}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="tw-ml-7">
          <div>
            <span className="tw-text-xs tw-text-gray-kwek100">
              Seller: Nike Store
            </span>
          </div>
          <div className="tw-mb-4">
            <span className="tw-text-black-stock tw-text-sm tw-font-semibold">
              Solid pattern in fashion summer dress
            </span>
          </div>
          <div className="">
            <span className="tw-border tw-py-2 tw-px-2.5 tw-rounded-l">-</span>
            <span className="tw-border tw-py-2 tw-px-6">1</span>
            <span className="tw-border tw-p-2 tw-px-2.5 tw-rounded-r">+</span>
          </div>
        </div>
        <div className="tw-flex tw-flex-col">
          <span className="tw-text-base tw-text-black-stock tw-font-semibold">
            $250
          </span>
          <span className="tw-text-sm tw-line-through tw-text-gray-review">
            $150
          </span>
        </div>
      </div>
    </>
  );
}

export default CartGridComponent;
