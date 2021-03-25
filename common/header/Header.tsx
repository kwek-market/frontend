import React from "react";
import Link from "next/link";
import Image from "next/image";

import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header id="main-header">
      <Link href="/">
        <a className="main-header__logo">
          <Image
            width="228"
            height="30"
            src="/svg/kweklogo.svg"
            layout="responsive"
            alt="Kwek logo"
          />
        </a>
      </Link>

      <SearchBar />

      <div className="main-header__shortcuts">
        <div className="main-header__shortcuts__shortcut">
          <Image width="22" height="24" src="/svg/user.svg" className='sign-in-icon' />
          <p>Sign In</p>
        </div>
        <div className="main-header__shortcuts__shortcut">
          <Image width="22" height="24" src="/svg/heart-filled.svg" />
          <p>Saved</p>
        </div>
        <div className="main-header__shortcuts__shortcut">
          <Image width="22" height="24" src="/svg/cart.svg" />
          <p>Cart</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
