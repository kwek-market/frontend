import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import styles from "./Header.module.scss";

import { useDispatch, useSelector } from "react-redux";

import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";

// import "antd/dist/antd.css";

import { clearAccount } from "@/store/account/account.actions";
import { clearCart } from "@/store/cart/cart.actions";
import { clearCategories } from "@/store/category/categories.actions";
import { clearSubs } from "@/store/newsletter/newsletter.actions";
import { clearProduct } from "@/store/product/product.action";
import { RootState } from "@/store/rootReducer";
import { clearSeller } from "@/store/seller/seller.action";
import { logout } from "@/store/user/user.actions";
import { clearWishlist } from "@/store/wishlist/wishlist.actions";
import { Dropdown, Menu } from "antd";
import SearchBar from "./SearchBar";

interface HeaderProps {
  userNav: boolean;
  setUserNav: (showNavBar: boolean) => void;
  showMenu: boolean;
  openMenu: any;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = function ({
  setUserNav,
  userNav,
  showMenu,
  openMenu,
  search,
  setSearch,
  check,
  setCheck,
}: HeaderProps) {
  const dispatch = useDispatch();
  const { user, cart, wishlist } = useSelector((state: RootState) => state);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  function handleLogout() {
    dispatch(logout());
    dispatch(clearSubs());
    dispatch(clearAccount());
    dispatch(clearSeller());
    dispatch(clearCategories());
    dispatch(clearProduct());
    dispatch(clearWishlist());
    dispatch(clearCart());
    router.push("/login");
  }
  const menu = (
    <Menu>
      <Menu.Item>
        <Link href='/profile/account'>Account</Link>
      </Menu.Item>

      <Menu.Item>
        <Link href='/' onClick={() => handleLogout()}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    if (user?.id) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, [user?.id]);

  return (
    <header
      id={styles.mainHeader}
      className='tw-flex tw-flex-col tw-justify-between'
      suppressHydrationWarning
    >
      <div onClick={() => openMenu()} className='md:tw-hidden'>
        {!showMenu ? (
          <i style={{}} className={`fas fa-bars fa-2x md:tw-hidden ${styles.navBar_icon}`} />
        ) : (
          <i style={{}} className={`fas fa-times fa-2x ${styles.navBar_icon}`} />
        )}
      </div>

      <Link href='/' className={`${styles.logo} tw-px-2`}>
        <Image
          width='180'
          height='30'
          src='/svg/kweklogo.svg'
          alt='Kwek logo'
          className={styles.logo_image}
        />
      </Link>

      <div className={`${styles.headerControls} tw-flex`}>
        <Link href='/wishlist'>
          <FiHeart
            className='tw-text-black-stock'
            style={{ height: "28px", width: "28px", marginRight: "1.5rem" }}
          />
        </Link>
        <Link href='/cart'>
          <AiOutlineShoppingCart
            className='tw-text-black-stock'
            style={{ height: "28px", width: "30px" }}
          />
        </Link>
      </div>

      <div className={styles.headerNav}>
        {/* <div className={styles.close} onClick={() => setUserNav(false)}>
          <i className={`fas fa-times ${styles.close_icon}`} />
        </div> */}

        <SearchBar search={search} setSearch={setSearch} check={check} setCheck={setCheck} />

        <div className={styles.shortcuts} suppressHydrationWarning>
          {isUserLoggedIn ? (
            <div className={styles.shortcuts_item} suppressHydrationWarning>
              <Image
                width='16'
                height='18'
                src='/svg/user.svg'
                className={styles.shortcuts_icon}
                suppressHydrationWarning
              />
              <Dropdown overlay={menu} className={styles.shortcuts_label}>
                <a
                  className='ant-dropdown-link'
                  onClick={e => e.preventDefault()}
                  suppressHydrationWarning
                >
                  Hi {user.user.fullName.split(" ")[0]} <i className='fas fa-chevron-down' />
                </a>
              </Dropdown>
            </div>
          ) : null}

          {!isUserLoggedIn ? (
            <Link href='/login' className={styles.shortcuts_item} suppressHydrationWarning>
              <Image
                width='16'
                height='18'
                src='/svg/user.svg'
                className={styles.shortcuts_icon}
                suppressHydrationWarning
              />
              <p className={styles.shortcuts_label} suppressHydrationWarning>
                Sign In
              </p>
            </Link>
          ) : null}

          <Link href='/wishlist' className={styles.shortcuts_item}>
            <div className={styles.shortcuts_iconWrap}>
              <Image
                width='16'
                height='18'
                src='/svg/heart-filled.svg'
                className={styles.shortcuts_icon}
              />
              <span className={styles.shortcuts_iconSuper} suppressHydrationWarning>
                {wishlist.wishlists?.length}
              </span>
            </div>
            <p className={styles.shortcuts_label}>Saved</p>
          </Link>
          <Link href='/cart' className={styles.shortcuts_item}>
            <div className={styles.shortcuts_iconWrap}>
              <Image width='16' height='18' src='/svg/cart.svg' className={styles.shortcuts_icon} />
              <span className={styles.shortcuts_iconSuper} suppressHydrationWarning>
                {cart.cart?.length}
              </span>
            </div>
            <p className={styles.shortcuts_label}>Cart</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
