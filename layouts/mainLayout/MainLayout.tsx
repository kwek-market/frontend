import React, { useEffect, useState } from "react";
import styles from "./MainLayout.module.scss";
import { Topbar, Header, Navbar, Footer, PageTitle, Menu } from "@/shared";
import { useDispatch, useSelector } from "react-redux";
import { getSellerData } from "@/store/seller/seller.action";
import { RootState } from "@/store/rootReducer";
import { getUserData, logout } from "@/store/user/user.actions";
import { getCategories } from "@/store/category/categories.actions";
import { clearCart, getCartFunc } from "@/store/cart/cart.actions";
import { verifyTokenFunc } from "@/helpers";
import { clearWishlist, getWishList } from "@/store/wishlist/wishlist.actions";
import Search from "@/components/search/Search";
import MobileSearchBar from "@/shared/header/MobileSearchBar";

const MainLayout = function ({ children, title }: any) {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state);
  const [showNavBar, setShowNavBar] = useState<boolean>(false);
  const [userNav, setUserNav] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [check, setCheck] = useState<boolean>(false);

  function openMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    dispatch(getCartFunc(user.token));
    (async () => {
      try {
        const data = await verifyTokenFunc(user.token);
        if (data.verifyToken.status) {
          user.token && dispatch(getUserData(user.token));
          user.token &&
            user.user.isSeller &&
            dispatch(getSellerData(user.token));
          user.token && dispatch(getWishList(user.token));
        } else {
          dispatch(logout());
          dispatch(clearCart());
          dispatch(clearWishlist());
        }
      } catch (err) {}
    })();
  }, [user.token]);

  return (
    <div>
      {/* <Topbar withLogo={false} /> */}
      <Header
        setUserNav={setUserNav}
        userNav={userNav}
        showMenu={showMenu}
        openMenu={openMenu}
        search={search}
        setSearch={setSearch}
        check={check}
        setCheck={setCheck}
      />
      <Navbar showNavBar={showNavBar} setShowNavBar={setShowNavBar} />
      {showMenu && <Menu />}

      {title && <PageTitle title={title} />}

      <div className="tw-px-4 tw-mt-4">
        <MobileSearchBar
          search={search}
          setSearch={setSearch}
          check={check}
          setCheck={setCheck}
        />
      </div>

      {check ? (
        <Search search={search} check={check} />
      ) : (
        <main id="main-container">
          <main className={styles.main_container}>{children}</main>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default MainLayout;
