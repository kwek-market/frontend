import React from "react";
import Image from "next/legacy/image";
import styles from "./reviews.module.scss";
import { Rate } from "antd";

function ReviewItem({ name, date, reviewBody, rating, sellerPic }) {
  return (
    <div className={styles.reviewer}>
      <Image
        src="https://randomuser.me/api/portraits/women/10.jpg"
        alt="reviewer"
        width="80"
        height="80"
        className={styles.img}
      />
      <div className={styles.reviewer_content}>
        <div className={styles.user}>
          <div className={styles.infouser}>
            <p className={styles.name}>{name}</p>
            <p className={styles.date}>{date}</p>
          </div>
          <Rate disabled value={rating} defaultValue={rating} />
        </div>
        <p className={styles.review_body}>{reviewBody}</p>
        {/* <div className={styles.seller_reply}>
          <Image
            src="https://via.placeholder.com/150"
            width="24"
            height="24"
            className={styles.img}
          />
          <input
            type="text"
            placeholder="Write a reply..."
            className={styles.reply_box}
          />
        </div> */}
      </div>
    </div>
  );
}

export default ReviewItem;
