import React from "react";
import styles from "./Header.module.scss";

import { connect, useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/user/user.actions";

import Link from "next/link";
import Image from "next/image";

import "antd/dist/antd.css";

import SearchBar from "./SearchBar";

import { Menu, Dropdown } from "antd";
import use from "@/components/sellerLanding/Use/use";

interface HeaderProps {
  user: any;
  logout: any;
  userNav: boolean;
  setUserNav: (showNavBar: boolean) => void;
  setShowNavBar: (showNavBar: boolean) => void;
  showMenu: boolean;
  openMenu: any
}

const Header = ({
  user,
  logout,
  setShowNavBar,
  setUserNav,
  userNav,
  showMenu,
  openMenu
}: HeaderProps) => {
  console.log(user)
  const menu = (
    <Menu>
      <Menu.Item>
        <Link href="/">
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
          <i className={`fas fa-bars ${styles.navBar_icon}`}></i>
        ) : (
          <i className={`fas fa-times ${styles.navBar_icon}`}></i>
        )}
      </div> 

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
                  Hi {user.fullName.split(" ")[0]}{" "} 
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

const mapStateToProps = (state: any) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
