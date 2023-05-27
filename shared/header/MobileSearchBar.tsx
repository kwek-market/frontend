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
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.8633 11.2036L8.93474 8.27504C9.66269 7.39966 10.1012 6.27558 10.1012 5.05078C10.1012 2.26577 7.83554 0 5.05065 0C2.26571 0 0 2.26577 0 5.05078C0 7.83561 2.26571 10.1012 5.05065 10.1012C6.27539 10.1012 7.39953 9.66269 8.27491 8.93474L11.2036 11.8633C11.2946 11.9545 11.4141 12 11.5334 12C11.6528 12 11.7723 11.9545 11.8634 11.8633C12.0456 11.6811 12.0456 11.3858 11.8633 11.2036ZM0.933106 5.05078C0.933106 2.78028 2.78022 0.933107 5.05065 0.933107C7.32103 0.933107 9.16808 2.78028 9.16808 5.05078C9.16808 7.32109 7.32103 9.16808 5.05065 9.16808C2.78022 9.16808 0.933106 7.32109 0.933106 5.05078Z"
            fill="#A88C8A"
          />
        </svg>
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
