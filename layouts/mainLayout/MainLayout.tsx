import React, { useEffect, useState } from "react";
import styles from "./MainLayout.module.scss";
import { Topbar, Header, Navbar, Footer, PageTitle, Menu } from "@/shared";
import { useDispatch, useSelector } from "react-redux";
import { getSellerData } from "@/store/seller/seller.action";
import { RootState } from "@/store/rootReducer";
import { getUserData } from "@/store/user/user.actions";

const MainLayout = function ({ children, title }: any) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [showNavBar, setShowNavBar] = useState<boolean>(false);
  const [userNav, setUserNav] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  function openMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    user.token && dispatch(getUserData(user.token));
    user.token && dispatch(getSellerData(user.token));
  }, []);

  return (
    <div>
      <Topbar withLogo={false} />
      <Header
        setUserNav={setUserNav}
        userNav={userNav}
        showMenu={showMenu}
        openMenu={openMenu}
      />
      {/* <Navbar showNavBar={showNavBar} setShowNavBar={setShowNavBar} /> */}
      {showMenu && <Menu />}

      {title && <PageTitle title={title} />}
      <main className={styles.main_container}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
