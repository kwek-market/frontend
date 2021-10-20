import React from "react";
import styles from "./Header.module.scss";

import Link from "next/link";
import Image from "next/image";

const Component = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.firstBox}>
        <div className={styles.content}>
          <div className={styles.profile}>
            <Image
              src="/images/store.png"
              width="160"
              height="160"
              className={styles.img}
            />
            <div className={styles.info}>
              <p className={styles.name}>Moda Stores</p>
              <p className={styles.sub}>Clothings for all ages.</p>
              <div className={styles.box_productRating}>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
              </div>
            </div>
          </div>
          <div className={styles.contact}>
            <a className={styles.reviewsbtn}>Read Reviews</a>
            <a className={styles.contactbtn}>Contact Us</a>
          </div>
        </div>
      </div>
      <div className={styles.secondBox}>
        <div className={styles.content}>
          <div className={styles.bars}>
            <div className={styles.progressbox}>
              <div>
                <p>PRODUCT QUALITY</p>
              </div>
              <div className={styles.barbox}>
                <div className={styles.progress}>
                  <div className={styles.bar}>60%</div>
                </div>
              </div>
            </div>
            <div className={styles.progressbox}>
              <div>
                <p>DELIVERY RATE</p>
              </div>
              <div className={styles.barbox}>
                <div className={styles.progress}>
                  <div className={styles.bar}>60%</div>
                </div>
              </div>
            </div>
            <div className={styles.progressbox}>
              <div>
                <p>RESPONSE TIME</p>
              </div>
              <div className={styles.barbox}>
                <div className={styles.progress}>
                  <div className={styles.bar}>60%</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.orderbox}>
            <Image
              src="/svg/discount.svg"
              width="40"
              height="40"
              className={styles.img}
            />
            <div className={styles.info}>
              <p className={styles.numbers}>2312</p>
              <p className={styles.sub}>Successful Orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
