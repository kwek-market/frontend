import React from "react";
import styles from "./activeTabbar.module.scss";

import Link from "next/link";

const ActiveTabbar = ({ filter, setFilter }) => {
  return (
    <div className={styles.bar_container}>
      <div className={styles.bar_content}>
        {filter ? (
          <div className={styles.filter} onClick={() => setFilter(!filter)}>
            <a>
              <i className="fas fa-angle-left"></i>
              Hide Filters
            </a>
          </div>
        ) : (
          <div className={styles.filter__red} onClick={() => setFilter(!filter)}>
            <a>
              Filters
              <i className="fas fa-angle-right"></i>
            </a>
          </div>
        )}

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
              <i className="fas fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveTabbar;
