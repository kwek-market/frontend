import React from "react";
import styles from "./Header.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/user/user.actions";

import Link from "next/link";
import Image from "next/image";

import "antd/dist/antd.css";

import SearchBar from "./SearchBar";

import { Menu, Dropdown } from "antd";
import use from "@/components/sellerLanding/Use/use";
import { RootState } from "@/store/rootReducer";

interface HeaderProps {
  userNav: boolean;
  setUserNav: (showNavBar: boolean) => void;
  showMenu: boolean;
  openMenu: any;
}

const Header = ({ setUserNav, userNav, showMenu, openMenu }: HeaderProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const menu = (
    <Menu>
      <Menu.Item>
        <Link href="/profile/account">
          <a>Account</a>
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link href="/">
          <a onClick={() => logout()}>Logout</a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header id={styles.mainHeader}>
      <div onClick={() => openMenu()}>
        {!showMenu ? (
          <i className={`fas fa-bars fa-2x ${styles.navBar_icon}`}></i>
        ) : (
          <i className={`fas fa-times fa-2x ${styles.navBar_icon}`}></i>
        )}
      </div>

      <Link href="/">
        <a className={`${styles.logo} tw-px-2`}>
          <Image
            width="180"
            height="30"
            src="/svg/kweklogo.svg"
            alt="Kwek logo"
            className={styles.logo_image}
          />
        </a>
      </Link>

      <div className={`${styles.headerControls} tw-flex`}>
        <FiHeart style={{ height: "28px", width: "30px" }} />
        <AiOutlineShoppingCart style={{ height: "28px", width: "30px" }} />
      </div>

      <div
        className={styles.headerNav}
        style={{ transform: userNav && "translateX(0)" }}
      >
        <div className={styles.close} onClick={() => setUserNav(false)}>
          <i className={`fas fa-times ${styles.close_icon}`}></i>
        </div>

        <SearchBar />

        <div className={styles.shortcuts}>
          {user.id ? (
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
                  Hi {user.user.fullName.split(" ")[0]}{" "}
                  <i className="fas fa-chevron-down"></i>
                </a>
              </Dropdown>
            </div>
          ) : (
            <Link href="/login">
              <a className={styles.shortcuts_item}>
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

          <Link href="/wishlist">
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
          <Link href="/cart">
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
      </div>
    </header>
  );
};

export default Header;
