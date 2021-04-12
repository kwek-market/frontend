import React, { useState } from "react";
import styles from './Header.module.scss'

import Link from "next/link";
import Image from "next/image";

import "antd/dist/antd.css";

import SearchBar from "./SearchBar";

import { Menu, Dropdown } from "antd";

const Header = () => {
  const [auth, setAuth] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item>
        <Link href="/">
          <a>Account</a>
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link href="/">
          <a onClick={() => setAuth(false)}>Logout</a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header id={styles.mainHeader}>
      <Link href="/">
        <a className={styles.logo}>
          <Image
            width="180"
            height="30"
            src="/svg/kweklogo.svg"
            alt="Kwek logo"
            className={styles.logo_image}
          />
        </a>
      </Link>

      <SearchBar />

      <div className={styles.shortcuts}>
        {auth ? (
          <div className={styles.shortcuts_item}>
            <Image
              width="16"
              height="18"
              src="/svg/user.svg"
              className={styles.shortcuts_icon}
            />
            <Dropdown overlay={menu} className={styles.shortcuts_label}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                Hi Alison <i className="fas fa-chevron-down"></i>
              </a>
            </Dropdown>
          </div>
        ) : (
          <Link href="/login">
            <a className={styles.shortcuts_item} onClick={() => setAuth(true)}>
              <Image
                width="16"
                height="18"
                src="/svg/user.svg"
                className={styles.shortcuts_icon}
              />
              <p className={styles.shortcuts_label}>Sign In</p>
            </a>
          </Link>
        )}

        <Link href="/">
          <a className={styles.shortcuts_item}>
            <Image
              width="16"
              height="18"
              src="/svg/heart-filled.svg"
              className={styles.shortcuts_icon}
            />
            <p className={styles.shortcuts_label}>Saved</p>
          </a>
        </Link>
        <Link href="/">
          <a className={styles.shortcuts_item}>
            <div className={styles.shortcuts_iconWrap}>
              <Image
                width="16"
                height="18"
                src="/svg/cart.svg"
                className={styles.shortcuts_icon}
              />
              <span className={styles.shortcuts_iconSuper}>4</span>
            </div>
            <p className={styles.shortcuts_label}>Cart</p>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
