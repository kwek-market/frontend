import React from "react";
import Link from "next/link";

const NavBar = () => {
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
    <nav id="main-nav" className="bg-primary">
      <ul className="nav">
        {menu.map((item, index) => (
          <li className="nav__item" key={index}>
            <Link href="/">
              <a className="nav__link"> {item.title} </a>
            </Link>
          </li>
        ))}
      </ul>

      <div className="extra">
        <Link href="/">
          <a className="extra__link">Kwek’s Response to COVID-19</a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
