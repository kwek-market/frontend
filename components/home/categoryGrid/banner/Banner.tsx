import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.scss';

const Banner = function () {
  return (
    <div className={styles.banner}>
      <div className={styles.textContainer}>
        <p className={styles.textSm}>New Products</p>
        <h3 className={styles.textLg}>Quality Laptops & Desktops</h3>
        <button className={`btn ${styles.btn}`}>
          Shop Now <span className="material-icons">chevron_right</span>
        </button>
      </div>

      <div className={styles.imageContainer}>
        <Image src="/images/banner-img.png" width="300" height="160" />
      </div>
    </div>
  );
};

export default Banner;
