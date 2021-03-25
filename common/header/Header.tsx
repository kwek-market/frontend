import React from "react";
import Link from "next/link";
import Image from "next/image";

import SearchBar from "./SearchBar";

import { Menu, Dropdown } from "antd";

const Header = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link href="/">
          <a>Account</a>
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link href="/">
          <a>Logout</a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header id="main-header">
      <Link href="/">
        <a className="logo">
          <Image
            width="228"
            height="30"
            src="/svg/kweklogo.svg"
            layout="responsive"
            alt="Kwek logo"
            className="logo___image"
          />
        </a>
      </Link>

      <SearchBar />

      <div className="shortcuts">
        <div className="shortcuts__item">
          <Image
            width="16"
            height="18"
            src="/svg/user.svg"
            className="shortcuts__icon"
          />
          <Dropdown overlay={menu} className="shortcuts__label">
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Hi Alison <i className="fas fa-chevron-down"></i>
            </a>
          </Dropdown>
        </div>

        <Link href="/">
          <a className="shortcuts__item">
            <Image
              width="16"
              height="18"
              src="/svg/heart-filled.svg"
              className="shortcuts__icon"
            />
            <p className="shortcuts__label">Saved</p>
          </a>
        </Link>
        <Link href="/">
          <a className="shortcuts__item">
            <Image
              width="16"
              height="18"
              src="/svg/cart.svg"
              className="shortcuts__icon"
            />
            <p className="shortcuts__label">Cart</p>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
