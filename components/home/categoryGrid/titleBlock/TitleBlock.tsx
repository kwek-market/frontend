import { countdown } from "@/helpers/index";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "./TitleBlock.module.scss";

type TitleBlockType = {
  title: string;
  timer?: boolean;
  cards?: any[];
};

const TitleBlock = function ({ title, timer, cards }: TitleBlockType) {
  // console.log("🚀 ~~ TitleBlock ~~ title, timer, cards:", title, timer, cards);

  const router = useRouter();
  const [time, setTime] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { days, hours, minutes, seconds } = time;

  useEffect(() => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const date = new Date().getDate();
    const interval = setInterval(() => {
      const { days, hours, minutes, seconds } = countdown(new Date(year, month, date), new Date());

      // console.log(days, hours, minutes, seconds);

      setTime({ days, hours: 24 - hours, minutes: 60 - minutes, seconds: 60 - seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className={styles.title}>
      <h3 className={styles.title_heading}>{title}</h3>

      {timer && (
        <div className={styles.title_timer}>
          {/* <div className={styles.title_timerSection}>
            <p className={styles.title_timerCount}>{days}</p>
            <small className={styles.title_timerPeriod}>Days</small>
          </div> */}

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
        View More <i className='fas fa-chevron-right' />
      </button>
    </div>
  );
};

export default TitleBlock;
