import { useRouter } from "next/router";
import React, { useMemo } from "react";
import styles from "./TitleBlock.module.scss";
import { countdown } from "@/helpers/index";

type TitleBlockType = {
  title: string;
  timer?: boolean;
  cards?: any[];
};

const TitleBlock = function ({ title, timer, cards }: TitleBlockType) {
  const router = useRouter();

  const { days, hours, minutes, seconds } = useMemo(() => {
    return countdown(new Date(2022, 3, 15), new Date(2022, 3, 27));
  }, []);

  return (
    <div className={styles.title}>
      <h3
        className={
          timer ? styles.title_heading : styles.title_heading__noBorder
        }
      >
        {title}
      </h3>

      {timer && (
        <div className={styles.title_timer}>
          <div className={styles.title_timerSection}>
            <p className={styles.title_timerCount}>{days}</p>
            <small className={styles.title_timerPeriod}>Days</small>
          </div>

          <div className={styles.title_timerSection}>
            <p className={styles.title_timerCount}>{hours}</p>
            <small className={styles.title_timerPeriod}>Hours</small>
          </div>

          <div className={styles.title_timerSection}>
            <p className={styles.title_timerCount}>{minutes}</p>
            <small className={styles.title_timerPeriod}>Minutes</small>
          </div>

          <div className={styles.title_timerSection}>
            <p className={styles.title_timerCount}>{seconds}</p>
            <small className={styles.title_timerPeriod}>Seconds</small>
          </div>
        </div>
      )}

      <button
        onClick={
          cards?.length > 0
            ? () => router.push("/deals-of-the-day/1")
            : () => router.push(`/category/${title}`)
        }
        className={`btn btn--naked ${styles.title_btn}`}
      >
        View More <i className="fas fa-chevron-right" />
      </button>
    </div>
  );
};

export default TitleBlock;
