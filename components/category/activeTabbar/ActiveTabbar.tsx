import React from "react";
import styles from "./activeTabbar.module.scss";

type ActiveTabbarProps = {
  filter: boolean;
  setFilter: React.Dispatch<React.SetStateAction<boolean>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
};

const ActiveTabbar = function ({
  filter,
  setFilter,
  sort,
  setSort,
}: ActiveTabbarProps) {
  return (
    <div className={styles.bar_container}>
      <div className={styles.bar_content}>
        {filter ? (
          <div className={styles.filter} onClick={() => setFilter(!filter)}>
            <a>
              <i className="fas fa-angle-left" />
              Hide Filters
            </a>
          </div>
        ) : (
          <div
            className={styles.filter__red}
            onClick={() => setFilter(!filter)}
          >
            <a>
              Filters
              <i className="fas fa-angle-right" />
            </a>
          </div>
        )}

        <div className={styles.sortPart}>
          <p>Sort By:</p>
          <div className={styles.select}>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="-clicks">Popularity</option>
              <option value="-date_created">Newest Arrivals</option>
              <option value="sales">Price: Low to High</option>
              <option value="-sales">Price: High to Low</option>
              <option value="-5">Product Rating</option>
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
