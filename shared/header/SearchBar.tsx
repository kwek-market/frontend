import React from "react";
import Image from "next/image";
import styles from "./Header.module.scss";

type SearchBarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchBar = function ({ search, setSearch, setCheck }: SearchBarProps) {
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleForm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (search === "" || search === null) return;
    setCheck(true);
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
        <button
          className={`btn bg-primary ${styles.searchForm_btn}`}
          onClick={(e) => handleForm(e)}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
