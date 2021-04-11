import React from "react";
import Image from "next/image";

const SearchBar = () => {
  return (
    <div id="searchbar">
      <form className="search-form">
        <Image
          width="18"
          height="20"
          src="/svg/search-icon.svg"
          className="search-form__icon"
        />
        <input
          type="search"
          className="search-form__input"
          placeholder="I'm searching for..."
        />
        <button className="btn search-form__btn bg-primary">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
