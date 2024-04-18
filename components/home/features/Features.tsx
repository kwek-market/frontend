import React from 'react';
import Image from "next/legacy/image";
import styles from './Features.module.scss';

import Carousel from '@/components/Carousel/Carousel';
import Slider from '@/components/slider/slider';

const Features = function () {
  const slides = [
    {
      element: (
        <div
          className="tw-grid tw-grid-cols-kwek-2 tw-text-center tw-gap-5 tw-mr-5 tw-p-3 tw-rounded-lg"
          style={{
            background: `#ffffff url("/images/features-bg.png") no-repeat center / cover`,
          }}
        >
          <Image src="/svg/features-delivery.svg" width="120" height="120" />
          <div className="tw-flex tw-flex-col tw-justify-center">
            <h4 className="tw-text-white-100 tw-text-lg tw-text-left">Free Delivery</h4>
            <p className="tw-text-white-100 tw-text-base tw-text-left">When you order from $500</p>
          </div>
        </div>
      ),
    },
    {
      element: (
        <div
          className="tw-grid tw-grid-cols-kwek-2 tw-text-center tw-gap-5 tw-mr-5 tw-p-3 tw-rounded-lg"
          style={{
            background: `#ffffff url("/images/features-bg.png") no-repeat center / cover`,
          }}
        >
          <Image src="/svg/features-return.svg" width="120" height="120" />
          <div className="tw-flex tw-flex-col tw-justify-center">
            <h4 className="tw-text-white-100 tw-text-lg tw-text-left">Return Policy</h4>
            <p className="tw-text-white-100 tw-text-base tw-text-left">Free Shipping on all order</p>
          </div>
        </div>
      ),
    },
    {
      element: (
        <div
          className="tw-grid tw-grid-cols-kwek-2 tw-text-center tw-gap-5 tw-mr-5 tw-p-3 tw-rounded-lg"
          style={{
            background: `#ffffff url("/images/features-bg.png") no-repeat center / cover`,
          }}
        >
          <Image src="/svg/features-support.svg" width="120" height="120" />
          <div className="tw-flex tw-flex-col tw-justify-center">
            <h4 className="tw-text-white-100 tw-text-lg tw-text-left">24/7 Support</h4>
            <p className="tw-text-white-100 tw-text-base tw-text-left">Free Shipping on all order</p>
          </div>
        </div>
      ),
    },
    {
      element: (
        <div
          className="tw-grid tw-grid-cols-kwek-2 tw-text-center tw-gap-5 tw-p-3 tw-rounded-lg"
          style={{
            background: `#ffffff url("/images/features-bg.png") no-repeat center / cover`,
          }}
        >
          <Image src="/svg/features-payment.svg" width="120" height="120" />
          <div className="tw-flex tw-flex-col tw-justify-center">
            <h4 className="tw-text-white-100 tw-text-lg tw-text-left">Secure Payment</h4>
            <p className="tw-text-white-100 tw-text-base tw-text-left">When order from $500</p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div id={`${styles.features}`}>
        <div className={styles.feature}>
          <Image src="/svg/features-delivery.svg" width="56" height="56" />
          <div className={styles.feature_details}>
            <h4 className={styles.feature_title}>Free Delivery</h4>
            <p className={styles.feature_description}>When order from $500</p>
          </div>
        </div>

        <div className={styles.feature}>
          <Image src="/svg/features-return.svg" width="56" height="56" />
          <div className={styles.feature_details}>
            <h4 className={styles.feature_title}>Return Policy</h4>
            <p className={styles.feature_description}>Free Shipping on all order</p>
          </div>
        </div>

        <div className={styles.feature}>
          <Image src="/svg/features-support.svg" width="56" height="56" />
          <div className={styles.feature_details}>
            <h4 className={styles.feature_title}>24/7 Support</h4>
            <p className={styles.feature_description}>Free Shipping on all order</p>
          </div>
        </div>

        <div className={styles.feature}>
          <Image src="/svg/features-payment.svg" width="56" height="56" />
          <div className={styles.feature_details}>
            <h4 className={styles.feature_title}>Secure Payment</h4>
            <p className={styles.feature_description}>When order from $500</p>
          </div>
        </div>
      </div>
      <div className="tw-block md:tw-hidden tw-mt-5">
        <Slider element={slides} />
      </div>
    </>
  );
};

export default Features;
