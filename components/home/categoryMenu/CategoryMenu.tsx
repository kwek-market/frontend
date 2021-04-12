import React from "react";
import styles from "./CategoryMenu.module.scss";

import Link from "next/link";
import Image from 'next/image'

const CategoryMenu = () => {
  const categories: any[] = [
    { name: "Electronics" },
    { name: "Beauty & Health" },
    { name: "Toy & Kids" },
    { name: "Fashion" },
    { name: "Home & Garden" },
    { name: "Sporting Goods" },
    { name: "Automobile" },
    { name: "Others" },
  ];

  return (
    <ul id={styles.category_menu}>
      <div className={styles.category_menuTitle}>
        <i className="fas fa-bars"></i>
        <h4 className={styles.category_menuHeading}>All Categories</h4>
      </div>
      {categories.map((item, index) => (
        <li key={index} className={styles.menu_item}>
          <Link href="/">
            <a className={styles.menu_link}>
              <Image src='/svg/cat-icon-electronics.svg' width='20' height='20'  />
               <span className={styles.menu_text}> {item.name} </span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryMenu;
