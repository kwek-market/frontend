import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

const Component = function () {
  return (
    <div>
      <div className={styles.second_banner}>
        <div className={styles.discountDesc}>
          <span>THRIFT THURSDAY</span>
          <p>20% OFF LEATHER BAGS</p>
          <Link href="/" className={styles.shopButton}>
            SHOP NOW
          </Link>
        </div>
        <div className={styles.discountImg}>
          <div>
            <Image width="764" height="512" src="/images/bag.png" alt="bag" className={styles.bag_image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
