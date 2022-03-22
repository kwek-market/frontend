import React, { useState } from "react";
import styles from "./mobilesearchbar.module.scss";
import { SearchBarProps } from "./SearchBar";

const MobileSearchBar = function ({
  search,
  setSearch,
  check,
  setCheck,
}: SearchBarProps) {
  return (
    <div className={styles.searchBox}>
      <button onClick={() => setCheck(!check)}>
        <i className={`${styles.searchIcon} fas fa-search fa-2x`} />
      </button>

      <input
        className={styles.searchInput}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search for products, brands and categories"
      />
    </div>
  );
};

export default MobileSearchBar;
