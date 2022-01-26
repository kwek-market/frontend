import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

interface NavProps {
  showNavBar: boolean;
  setShowNavBar: (showNavBar: boolean) => void;
}

const NavBar = function ({ showNavBar, setShowNavBar }: NavProps) {
  const menu = [
    {
      title: "Shop",
      url: "/shop",
    },
    {
      title: "About Us",
      url: "/aboutUs",
    },
    {
      title: "Sell On Kwek",
      url: "/sell",
    },
    {
      title: "Registry",
      url: "/registry",
    },
    {
      title: "Gift Cards",
      url: "/gift-cards",
    },
    {
      title: "Customer Service",
      url: "/customer-service",
    },
    {
      title: "Vendors",
      url: "/vendors",
    },
  ];
  return (
    <nav
      id={styles.mainNav}
      className="bg-primary"
      style={{ transform: showNavBar && "translateX(0)" }}
    >
      <div className={styles.close} onClick={() => setShowNavBar(false)}>
        <i className={`fas fa-times ${styles.close_icon}`} />
      </div>

      <ul className={styles.nav}>
        {menu.map((item, index) => (
          <li className={styles.nav_item} key={index}>
            <Link href={item.url}>
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
