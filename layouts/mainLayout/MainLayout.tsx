import React from "react";
import styles from './MainLayout.module.scss'
import { Topbar, Header, Navbar, Footer, PageTitle } from "@/shared";

const MainLayout = ({ children, title }: any) => {
  return (
    <div>
      <Topbar withLogo={false} />
      <Header />
      <Navbar />
      {title && <PageTitle title={title} />}
      <main className={styles.main_container}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
