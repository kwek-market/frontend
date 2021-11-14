import React from 'react';
import Image from 'next/image';
import styles from './Card.module.scss';

const Card = function () {
  return (
    <div className={styles.card}>
      <div className={styles.card_textContainer}>
        <div className={styles.card_text}>
          <p className={styles.card_textSm}>Category</p>
          <p className={styles.card_textLg}>
            Luxury at its <br /> Finest
          </p>
        </div>

        <div className={styles.card_text}>
          <p className={styles.card_textSm}>Starting at</p>
          <p className={styles.card_textMd}>$59.99</p>
        </div>
      </div>

      <div className={styles.card_imageContainer}>
        <Image src="/images/card-image.png" width="188" height="161" />
      </div>
    </div>
  );
};

export default Card;
