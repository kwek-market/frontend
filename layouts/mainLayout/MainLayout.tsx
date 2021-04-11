import React from "react";

import Topbar from "../../shared/topBar/TopBar";
import Header from "../../shared/header/Header";
import Navbar from "../../shared/navBar/NavBar";
import Footer from "../../shared/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Topbar withLogo={false} />
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
