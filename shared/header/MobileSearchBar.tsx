import React, { useState } from "react";
import styles from "./mobilesearchbar.module.scss";

function MobileSearchBar() {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className={styles.searchBox}>
      <i className={`${styles.searchIcon} fas fa-search fa-2x`} />
      <input
        className={styles.searchInput}
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="search for products, brands and categories"
      />
    </div>
  );
}

export default MobileSearchBar;
