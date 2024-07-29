import React from 'react';
import Link from 'next/link';
import styles from './activeTabbar.module.scss';

const ActiveTabbar = function () {
  return (
    <div className={styles.bar_container}>
      <div className={styles.bar_content}>
        <Link href="/seller/profile" legacyBehavior>
          <div className={styles.filter}>
            <a>
              <i className="fas fa-angle-left" />
              Hide Filters
            </a>
          </div>
        </Link>
        <div className={styles.sortPart}>
          <p>Sort By:</p>
          <div className={styles.select}>
            <select>
              <option>Popularity</option>
              <option>Newest Arrivals</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Product Rating</option>
            </select>
            <div className={styles.arrow_down}>
              <i className="fas fa-angle-down" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveTabbar;
