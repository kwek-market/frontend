import React from "react";
import styles from "./Header.module.scss";

import { connect } from "react-redux";
import { setUser } from "@/store/user/user.actions";

import Link from "next/link";
import Image from "next/image";

import "antd/dist/antd.css";

import SearchBar from "./SearchBar";

import { Menu, Dropdown } from "antd";

const Header = ({ user, setUser }) => {

  const menu = (
    <Menu>
      <Menu.Item>
        <Link href="/">
          <a>Account</a>
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link href="/">
          <a onClick={() => setUser({ id: null, name: null })}>
            Logout
          </a>
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
                Hi {user.name} <i className="fas fa-chevron-down"></i>
              </a>
            </Dropdown>
          </div>
        ) : (
          <Link href="/login">
            <a className={styles.shortcuts_item} onClick={() => setUser({ id: "jUIninujIinfA", name: "Alison" })}>
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

const mapStateToProps = (state: any) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: any) => ({
  setUser: (user: any) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
