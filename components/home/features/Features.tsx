import React from "react";
import Image from "next/legacy/image";
import styles from "./Features.module.scss";

import Carousel from "@/components/Carousel/Carousel";
import Slider from "@/components/slider/slider";

const Features = function () {
  const slides = [
    {
      element: (
        <div
          className='tw-grid tw-grid-cols-kwek-2 tw-text-center tw-gap-5 tw-mr-5 tw-p-3 tw-rounded-lg'
          style={{
            background: `#ffffff url("/images/features-bg.png") no-repeat center / cover`,
          }}
        >
          <Image src='/svg/features-delivery.svg' width='120' height='120' />
          <div className='tw-flex tw-flex-col tw-justify-center'>
            <h4 className='tw-text-white-100 tw-text-lg tw-text-left'>24hrs Delivery</h4>
            <p className='tw-text-white-100 tw-text-base tw-text-left'>
              weekday delivery in 24-hours
            </p>
          </div>
        </div>
      ),
    },
    {
      element: (
        <div
          className='tw-grid tw-grid-cols-kwek-2 tw-text-center tw-gap-5 tw-mr-5 tw-p-3 tw-rounded-lg'
          style={{
            background: `#ffffff url("/images/features-bg.png") no-repeat center / cover`,
          }}
        >
          <Image src='/svg/features-return.svg' width='120' height='120' />
          <div className='tw-flex tw-flex-col tw-justify-center'>
            <h4 className='tw-text-white-100 tw-text-lg tw-text-left'>Return Policy</h4>
            <p className='tw-text-white-100 tw-text-base tw-text-left'>
              Easy returns, no hassles—shop with confidence!
            </p>
          </div>
        </div>
      ),
    },
    {
      element: (
        <div
          className='tw-grid tw-grid-cols-kwek-2 tw-text-center tw-gap-5 tw-mr-5 tw-p-3 tw-rounded-lg'
          style={{
            background: `#ffffff url("/images/features-bg.png") no-repeat center / cover`,
          }}
        >
          <Image src='/svg/features-support.svg' width='120' height='120' />
          <div className='tw-flex tw-flex-col tw-justify-center'>
            <h4 className='tw-text-white-100 tw-text-lg tw-text-left'>24/7 Support</h4>
            <p className='tw-text-white-100 tw-text-base tw-text-left'>
              We're here anytime—24/7 support at your service!
            </p>
          </div>
        </div>
      ),
    },
    {
      element: (
        <div
          className='tw-grid tw-grid-cols-kwek-2 tw-text-center tw-gap-5 tw-p-3 tw-rounded-lg'
          style={{
            background: `#ffffff url("/images/features-bg.png") no-repeat center / cover`,
          }}
        >
          <Image src='/svg/features-payment.svg' width='120' height='120' />
          <div className='tw-flex tw-flex-col tw-justify-center'>
            <h4 className='tw-text-white-100 tw-text-lg tw-text-left'>Secure Payment</h4>
            <p className='tw-text-white-100 tw-text-base tw-text-left'>
              Shop safely with our secure payment guarantee!
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div id={`${styles.features}`}>
        <div className={styles.feature}>
          <Image src='/svg/features-delivery.svg' width='56' height='56' />
          <div className={styles.feature_details}>
            <h4 className={styles.feature_title}>24hrs Delivery</h4>
            <p className={styles.feature_description}>weekday delivery in 24-hours</p>
          </div>
        </div>

        <div className={styles.feature}>
          <Image src='/svg/features-return.svg' width='56' height='56' />
          <div className={styles.feature_details}>
            <h4 className={styles.feature_title}>Return Policy</h4>
            <p className={styles.feature_description}>
              Easy returns, no hassles—shop with confidence!
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <Image src='/svg/features-support.svg' width='56' height='56' />
          <div className={styles.feature_details}>
            <h4 className={styles.feature_title}>24/7 Support</h4>
            <p className={styles.feature_description}>
              We're here anytime—24/7 support at your service!
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <Image src='/svg/features-payment.svg' width='56' height='56' />
          <div className={styles.feature_details}>
            <h4 className={styles.feature_title}>Secure Payment</h4>
            <p className={styles.feature_description}>Shop safely with our secure payment guarantee!</p>
          </div>
        </div>
      </div>
      <div className='tw-hidden tw-mt-5'>
        <Slider element={slides} />
      </div>
    </>
  );
};

export default Features;
