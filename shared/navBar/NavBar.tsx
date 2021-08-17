import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

interface NavProps {
  showNavBar: boolean;
  setShowNavBar: (showNavBar: boolean) => void;
}

const NavBar: React.FC<NavProps> = ({ showNavBar, setShowNavBar }) => {
  const menu = [
    {
      title: "Shop",
      url: "/",
    },
    {
      title: "About Us",
      url: "/",
    },
    {
      title: "Sell On Kwek",
      url: "/",
    },
    {
      title: "Registry",
      url: "/",
    },
    {
      title: "Gift Cards",
      url: "/",
    },
    {
      title: "Customer Service",
      url: "/",
    },
    {
      title: "Reviews",
      url: "/",
    },
    {
      title: "Vendors",
      url: "/",
    },
  ];
  return (
    <nav
      id={styles.mainNav}
      className="bg-primary"
      style={{ transform: showNavBar && "translateX(0)" }}
    >
      <div className={styles.close} onClick={() => setShowNavBar(false)}>
        <i className={`fas fa-times ${styles.close_icon}`}></i>
      </div>

      <ul className={styles.nav}>
        {menu.map((item, index) => (
          <li className={styles.nav_item} key={index}>
            <Link href="/">
              <a className={styles.nav_link}> {item.title} </a>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.extra}>
        <Link href="/">
          <a className={styles.extra_link}>Kwek’s Response to COVID-19</a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
