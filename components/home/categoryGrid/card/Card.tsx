import React from "react";
import Image from "next/image";
import styles from "./Card.module.scss";

const Card = function ({ card }) {
  return (
    <div className={styles.card}>
      <div className={styles.card_textContainer}>
        <div className={styles.card_text}>
          <p className={styles.card_textSm}>Category</p>
          <p className={styles.card_textLg}>{card.productTitle}</p>
        </div>

        <div className={styles.card_text}>
          <p className={styles.card_textSm}>Starting at</p>
          <p className={styles.card_textMd}>
            ₦{card.options[0].discountedPrice}
          </p>
        </div>
      </div>

      <div className={styles.card_imageContainer}>
        <Image src={card.image[0].imageUrl} width="188" height="161" />
      </div>
    </div>
  );
};

export default Card;
