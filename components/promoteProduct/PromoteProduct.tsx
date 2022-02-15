import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./PromoteProduct.module.scss";

const PromoteProduct = function () {
  return (
    <div className={styles.promote}>
      <div className={styles.session1}>
        <form className={styles.form}>
          <div className={styles.board}>
            <h4 className={styles.duration}>Duration</h4>
            <div className={styles.key}>
              <Image
                src="/images/board.png"
                width="20"
                height="20"
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.parallel}>
            <div className={styles.day}>
              <p className={styles.count}>Days</p>
              <input
                placeholder="Day"
                type={"number"}
                className={styles.number}
              ></input>
            </div>
            <div className={styles.date}>
              <p className={styles.count}>End date</p>
              <input type={"date"} className={styles.number}></input>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.boarder}>
            <h4>Total Budget</h4>
            <div className={styles.key}>
              <Image
                src="/images/board.png"
                width="20"
                height="20"
                className={styles.img}
              />
            </div>
          </div>
          <p className={styles.estimate}>
            Estimated 3k - 9.2k people reached daily
          </p>
          <div className={styles.span}>
            <p className={styles.spaner}>NGN</p>
            <h2>4,098.00</h2>
          </div>

          <div>
            <input type={"range"} className={styles.range}></input>
          </div>
        </form>
        <div className={styles.method}>
          <h4 className={styles.pay}>Payment Method</h4>
          <div className={styles.money}>
            <div className={styles.balance}>
              <p>Available Balance</p>
              <h6>NGN 4.49</h6>
            </div>
            <div className={styles.add}>
              <Image src="/images/money.png" width="168" height="48" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.session2}>
        <h4 className={styles.preview}>Ad Preview</h4>
        <div>
          <div className={styles.product}>
            <Image src="/images/product.png" width="329" height="284" />
          </div>
          <div className={styles.promoted}>
            <Image src="/images/promoted.png" width="136" height="32" />
          </div>
          <p className={styles.fash}>Women’s fashion Shiny High Heels</p>
          <p className={styles.shiny}>
            $25.00<span className={styles.heel}>$35.00</span>
          </p>

          <div className={styles.revs}>
            <div className={styles.box_productRating}>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
            </div>
            <p className={styles.six}>(6 Reviews)</p>
          </div>
        </div>

        <div className={styles.liner}></div>
        <h4 className={styles.summary}>Payment Summary</h4>
        <p className={styles.run}>Your ad will run for 4 days</p>
        <div className={styles.budget}>
          <p>Total budget</p>
          <p className={styles.ad}>NGN 4,098.00</p>
        </div>
      </div>
    </div>
  );
};

export default PromoteProduct;
