import React from "react";
import styles from './MainLayout.module.scss'
import { Topbar, Header, Navbar, Footer } from "@/shared/";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Topbar withLogo={false} />
      <Header />
      <Navbar />
      <main className={styles.main_container}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
