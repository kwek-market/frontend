import React from "react";
import Image from "next/image";
import styles from "./reviews.module.scss";

function ReviewItem({ name, date, reviewBody, sellerPic }) {
  return (
    <div className={styles.reviewer}>
      <Image
        src="/images/reviewer.png"
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
          <div className={styles.star_container}>
            <span className={`material-icons ${styles.star_filled}`}>star</span>
            <span className={`material-icons ${styles.star_filled}`}>star</span>
            <span className={`material-icons ${styles.star_filled}`}>star</span>
            <span className={`material-icons ${styles.star_filled}`}>star</span>
            <span className={`material-icons ${styles.star_filled}`}>star</span>
          </div>
        </div>
        <p className={styles.review_body}>{reviewBody}</p>
        <div className={styles.seller_reply}>
          <Image
            src={"/images/reviewer1.png"}
            width="24"
            height="24"
            className={styles.img}
          />
          <input
            type="text"
            placeholder="Write a reply..."
            className={styles.reply_box}
          />
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
