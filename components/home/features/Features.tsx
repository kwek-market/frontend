import React from "react";
import styles from "./Features.module.scss";

import Image from "next/image";
import Carousel from "@/components/Carousel/Carousel";

const Features = () => {
  const slides = [
    {
      element: (
        <div className="tw-flex tw-flex-row">
          <Image src="/svg/features-delivery.svg" width="120" height="120" />
          <div className="ml-2 tw-flex tw-flex-col tw-justify-center">
            <h4 className="tw-text-white-100 tw-text-lg">Free Delivery</h4>
            <p className="tw-text-white-100 tw-text-base">
              When order from $500
            </p>
          </div>
        </div>
      ),
    },
    {
      element: (
        <div className="tw-flex tw-flex-row">
          <Image src="/svg/features-return.svg" width="120" height="120" />
          <div className="ml-2 tw-flex tw-flex-col tw-justify-center">
            <h4 className="tw-text-white-100 tw-text-lg">Return Policy</h4>
            <p className="tw-text-white-100 tw-text-base">
              Free Shipping on all order
            </p>
          </div>
        </div>
      ),
    },
    {
      element: (
        <div className="tw-flex tw-flex-row">
          <Image src="/svg/features-support.svg" width="120" height="120" />
          <div className="ml-2 tw-flex tw-flex-col tw-justify-center">
            <h4 className="tw-text-white-100 tw-text-lg">24/7 Support</h4>
            <p className="tw-text-white-100 tw-text-base">
              Free Shipping on all order
            </p>
          </div>
        </div>
      ),
    },
    {
      element: (
        <div className="tw-flex tw-flex-row">
          <Image src="/svg/features-payment.svg" width="120" height="120" />
          <div className="ml-2 tw-flex tw-flex-col tw-justify-center">
            <h4 className="tw-text-white-100 tw-text-lg">Secure Payment</h4>
            <p className="tw-text-white-100 tw-text-base">
              When order from $500
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
            <p className={styles.feature_description}>
              Free Shipping on all order
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <Image src="/svg/features-support.svg" width="56" height="56" />
          <div className={styles.feature_details}>
            <h4 className={styles.feature_title}>24/7 Support</h4>
            <p className={styles.feature_description}>
              Free Shipping on all order
            </p>
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
      <div className="tw-block md:tw-hidden">
      <Carousel
        slides={slides}
        height="250px"
        background={`#ffffff url("/images/features-bg.png") no-repeat center / cover`}
      />
      </div>
      
    </>
  );
};

export default Features;
