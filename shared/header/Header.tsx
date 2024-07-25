import React from "react";
import styles from "./Header.module.scss";

import { useDispatch, useSelector } from "react-redux";

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
import { Menu } from "antd";

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

  return (
    <header id={styles.mainHeader} className='tw-flex tw-flex-col tw-justify-between'>
      Hello
    </header>
  );
};

export default Header;
