import React from "react";
import styles from "./CategoryMenu.module.scss";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CategoryMobile from "./CategoryMobile";

const CategoryMenu = () => {
  const [showCat, setShowCat] = useState<boolean>(false);

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
    <>
      <section id={styles.category_menu}>
        <div className={styles.category_menuTitle}>
          <i className={`fas fa-bars ${styles.burger_icon}`}></i>
          <h4 className={styles.category_menuHeading}>All Categories</h4>
          <div
            className={styles.category_showMore_icon}
            onClick={() => setShowCat(!showCat)}
          >
            <i
              className={`fas fa-chevron-right ${styles.chevron_down}`}
              style={{ transform: showCat && "rotate(-90deg)" }}
            ></i>
          </div>
        </div>
        <ul
          className={styles.category_list}
          style={{ maxHeight: showCat && "325px" }}
        >
          {categories.map((item, index) => (
            <li key={index} className={styles.menu_item}>
              <Link href="/">
                <a className={styles.menu_link}>
                  <Image
                    src="/svg/cat-icon-electronics.svg"
                    width="20"
                    height="20"
                  />
                  <span className={styles.menu_text}> {item.name} </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="tw-flex md:tw-hidden tw-overflow-x-auto tw-overflow-y-hidden">
        <CategoryMobile
          imgSrc={"/svg/all.svg"}
          text={"All"}
          style={"tw-max-w-none"}
        />
        <CategoryMobile
          imgSrc={"/svg/dress.svg"}
          text={"Fashion"}
        />
        <CategoryMobile
          imgSrc={"/svg/stones.svg"}
          text={"Stones"}
        />
        <CategoryMobile
          imgSrc={"/svg/car.svg"}
          text={"Automobile"}
        />
        <CategoryMobile
          imgSrc={"/svg/toys.svg"}
          text={"Toys"}
        />
        <CategoryMobile
          imgSrc={"/svg/electronics.svg"}
          text={"Electronics"}
        />
        <CategoryMobile
          imgSrc={"/svg/home.svg"}
          text={"Home"}
        />
        <CategoryMobile
          imgSrc={"/svg/sports.svg"}
          text={"Sporting"}
        />
        <CategoryMobile
          imgSrc={"/svg/others.svg"}
          text={"Others"}
        />
      </section>
    </>
  );
};

export default CategoryMenu;
