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
        <div className="tw-px-8">
          <img src="/svg/stones.svg" alt="electronics" />
          <p className="tw-font-normal tw-text-xs tw-text-brown-kwek200 tw-mt-2">
            Beauty
          </p>
        </div>
        <div className="tw-px-8">
          <img src="/svg/car.svg" alt="electronics" />
          <p className="tw-font-normal tw-text-xs tw-text-brown-kwek200 tw-mt-2">
            Automobile
          </p>
        </div>
        <div className="tw-px-8">
          <img src="/svg/electronics.svg" alt="electronics" />
          <p className="tw-font-normal tw-text-xs tw-text-brown-kwek200 tw-mt-2">
            Electronics
          </p>
        </div>
        <div className="tw-px-8">
          <img src="/svg/toys.svg" alt="electronics" />
          <p className="tw-font-normal tw-text-xs tw-text-brown-kwek200 tw-mt-2">
            Toys
          </p>
        </div>
        <div className="tw-px-8">
          <img src="/svg/home.svg" alt="electronics" />
          <p className="tw-font-normal tw-text-xs tw-text-brown-kwek200 tw-mt-2">
            Home
          </p>
        </div>
        <div className="tw-px-8">
          <img src="/svg/sports.svg" alt="electronics" />
          <p className="tw-font-normal tw-text-xs tw-text-brown-kwek200 tw-mt-2">
            Sporting
          </p>
        </div>
        <div className="tw-px-8">
          <img src="/svg/others.svg" alt="electronics" />
          <p className="tw-font-normal tw-text-xs tw-text-brown-kwek200 tw-mt-2">
            Others
          </p>
        </div>
      </section>
    </>
  );
};

export default CategoryMenu;
