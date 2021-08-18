import React, { useState } from "react";
import styles from "./MainLayout.module.scss";
import { Topbar, Header, Navbar, Footer, PageTitle } from "@/shared";

const MainLayout = ({ children, title }: any) => {
  const [showNavBar, setShowNavBar] = useState<boolean>(false);
  const [userNav, setUserNav] = useState<boolean>(false);

  return (
    <div>
      <Topbar withLogo={false} />
      <Header
        setShowNavBar={setShowNavBar}
        setUserNav={setUserNav}
        userNav={userNav}
      />
      <Navbar showNavBar={showNavBar} setShowNavBar={setShowNavBar} />
      {title && <PageTitle title={title} />}
      <main className={styles.main_container}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
