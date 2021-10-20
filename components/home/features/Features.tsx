import React from 'react'
import styles from './Features.module.scss'

import Image from 'next/image'

const Features = () => {
  return (
    <div id={styles.features}>
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
  )
}

export default Features
