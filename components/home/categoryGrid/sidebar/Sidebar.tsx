import React from 'react';
import Image from 'next/image';
import styles from './Sidebar.module.scss';

const Sidebar = function () {
  const products = [1, 2, 3, 4, 5];

  return (
    <div className={styles.sidebar}>
      <h3 className={styles.header}>Best Selling</h3>

      <div className={styles.products}>
        {products.map((product) => (
          <div key={product} className={styles.product}>
            <div className={styles.product_imageContainer}>
              <Image src="/images/sidebar-product.png" width="96" height="110" />
            </div>

            <div className={styles.product_details}>
              <p className={styles.textSm}>Asus Zenpad 10 Android 64GB 2GB 10 Inch 9Hours</p>
              <p className={styles.textMd}>$39</p>
              <p className={styles.product_rating}>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className="material-icons">star</span>
                <span className={`material-icons ${styles.blank}`}>star</span>
                <span className={`material-icons ${styles.blank}`}>star</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
