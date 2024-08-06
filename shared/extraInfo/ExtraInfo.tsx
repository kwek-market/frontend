import Image from "next/legacy/image";
import styles from "./extraInfo.module.scss";

const Component = function () {
  return (
    <section>
      <div className={styles.info_container}>
        <div className={styles.info_content}>
          <div className={styles.info_box}>
            <Image width='56' height='56' src='/svg/Delivery.svg' alt='delivery' />
            <div className={styles.info_box_content}>
              <p className={styles.head}>24 hrs Delivery</p>
              <p className={styles.sub}>weekday delivery in 24-hours</p>
            </div>
          </div>
          <div className={styles.info_box}>
            <Image width='56' height='56' src='/svg/Return.svg' alt='delivery' />
            <div className={styles.info_box_content}>
              <p className={styles.head}>Return Policy</p>
              <p className={styles.sub}>Easy returns, no hassles—shop with confidence!</p>
            </div>
          </div>
          <div className={styles.info_box}>
            <Image width='56' height='56' src='/svg/Support.svg' alt='delivery' />
            <div className={styles.info_box_content}>
              <p className={styles.head}>24/7 Support</p>
              <p className={styles.sub}>We're here anytime—24/7 support at your service!</p>
            </div>
          </div>
          <div className={styles.info_box}>
            <Image width='56' height='56' src='/svg/Payment.svg' alt='delivery' />
            <div className={styles.info_box_content}>
              <p className={styles.head}>Secure Payment</p>
              <p className={styles.sub}>Shop safely with our secure payment guarantee!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component;
