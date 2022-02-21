import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import useProducts from "@/hooks/useProducts";

type SearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = function ({ search, setSearch }: SearchProps) {
  const { status, data, error } = useProducts({
    page: 1,
    pageSize: 20,
    search,
  });

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <div id={styles.searchbar}>
      <form className={styles.searchForm}>
        <Image
          width="18"
          height="20"
          src="/svg/search-icon.svg"
          className={styles.searchForm_icon}
        />
        <input
          type="search"
          className={styles.searchForm_input}
          placeholder="I'm searching for..."
          value={search}
          onChange={(e) => handleSearch(e)}
        />
        <button className={`btn bg-primary ${styles.searchForm_btn}`}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
