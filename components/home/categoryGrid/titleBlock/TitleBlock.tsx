import React from "react";
import styles from "./TitleBlock.module.scss";

const TitleBlock = () => {
  return (
    <div className={styles.title}>
      <h3 className={styles.title_heading}>Deals Of The day</h3>
      <div className={styles.title_timer}>
        <div className={styles.title_timerSection}>
          <p className={styles.title_timerCount}>00</p>
          <small className={styles.title_timerPeriod}>Days</small>
        </div>

        <div className={styles.title_timerSection}>
          <p className={styles.title_timerCount}>12</p>
          <small className={styles.title_timerPeriod}>Hours</small>
        </div>

        <div className={styles.title_timerSection}>
          <p className={styles.title_timerCount}>04</p>
          <small className={styles.title_timerPeriod}>Minutes</small>
        </div>

        <div className={styles.title_timerSection}>
          <p className={styles.title_timerCount}>03</p>
          <small className={styles.title_timerPeriod}>Seconds</small>
        </div>
      </div>

      <button className={`btn btn--naked ${styles.title_btn}`}>
        View More <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default TitleBlock;
