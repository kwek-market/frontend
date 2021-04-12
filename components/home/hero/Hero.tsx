import React from "react";
import styles from "./Hero.module.scss";

import { CategoryMenu } from "../index";

const Hero = () => {
  return (
    <div id={styles.hero}>
      <CategoryMenu />
      <div className={styles.banner}>
        <div
          className={`${styles.banner_section} ${styles.banner_section__one}`}
        >
          <div className={styles.banner_textContainer}>
            <p className={styles.banner_text}>BUY TWO, Get</p>
            <button className={`${styles.btn} btn`}>☆ 1 FREE ☆</button>
          </div>

          <div className={styles.banner_textContainer}>
            <h3 className={styles.banner_heading}>FOR WOMEN</h3>
            <p className={styles.banner_text}>
              <b>Get up to 30% Off</b> on all Products
            </p>
            <small className={styles.banner_subtext}>
              Get Free Shipping on all orders over $99.90
            </small>
          </div>

          <div className={styles.banner_textContainer}>
            <button className={`${styles.btn} btn`}>
              SHOP NOW <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div
          className={`${styles.banner_section} ${styles.banner_section__two}`}
        >
          <img src="/svg/hero-woman.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
