import Search from "@/components/search/Search";
import { verifyTokenFunc } from "@/helpers";
import { Footer, Header, Menu, Navbar, PageTitle } from "@/shared";
import MobileSearchBar from "@/shared/header/MobileSearchBar";
import { clearCart, getCartFunc } from "@/store/cart/cart.actions";
import { getCategories } from "@/store/category/categories.actions";
import { RootState } from "@/store/rootReducer";
import { getSellerData } from "@/store/seller/seller.action";
import { getUserData, logout } from "@/store/user/user.actions";
import { clearWishlist, getWishList } from "@/store/wishlist/wishlist.actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MainLayout.module.scss";
// import Pusher from "react-pusher";
import Pusher from "pusher-js";

type MainLayoutType = {
  children: React.ReactNode;
  title?: string | string[];
};

const MainLayout = function ({ children, title }: MainLayoutType) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [showNavBar, setShowNavBar] = useState<boolean>(false);
  const [userNav, setUserNav] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [check, setCheck] = useState<boolean>(false);

  function openMenu() {
    setShowMenu(!showMenu);
  }

  const userId = user?.id ? user?.id : "";
  const key = process.env.NEXT_PUBLIC_PUSHER_KEY;
  // Pusher.logToConsole = true;
  const pusherClient = new Pusher(key, {
    cluster: "mt1",
  });
  useEffect(() => {
    const channel = pusherClient.subscribe(userId);
    channel.bind(userId, data => {
      console.log(data.message);
    });
    getCategories()(dispatch);
  }, []);

  useEffect(() => {
    getCartFunc(user.token)(dispatch);
    (async () => {
      try {
        const data = await verifyTokenFunc(user.token ? user.token : "");
        if (data.verifyToken.status) {
          user.token && getUserData(user.token)(dispatch);
          user.token && user.user.isSeller && getSellerData(user.token)(dispatch);
          user.token && getWishList(user.token)(dispatch);
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
      {/* <Pusher channel={userId || ""} event={userId} onUpdate={(e) => log(e)} /> */}
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
      />{" "}
      <div className='tw-px-4 tw-mt-4'>
        <MobileSearchBar search={search} setSearch={setSearch} check={check} setCheck={setCheck} />
      </div>
      <Navbar showNavBar={showNavBar} setShowNavBar={setShowNavBar} />
      {showMenu && <Menu />}
      {title && <PageTitle title={title as string} />}
      {check ? (
        <Search search={search} check={check} />
      ) : (
        <main id='main-container'>
          <main className={styles.main_container}>{children}</main>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default MainLayout;
