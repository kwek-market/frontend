import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "./CategoryMenu.module.scss";
import CategoryMobile from "./CategoryMobile";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";

const CategoryMenu = function () {
  const [showCat, setShowCat] = useState<boolean>(false);
  const { categories } = useSelector((state: RootState) => state);

  return (
    <>
      <section id={styles.category_menu}>
        <div className={styles.category_menuTitle}>
          <i className={`fas fa-bars ${styles.burger_icon}`} />
          <h4 className={styles.category_menuHeading}>All Categories</h4>
          <div
            className={styles.category_showMore_icon}
            onClick={() => setShowCat(!showCat)}
          >
            <i
              className={`fas fa-chevron-right ${styles.chevron_down}`}
              style={{ transform: showCat && "rotate(-90deg)" }}
            />
          </div>
        </div>
        <ul
          className={styles.category_list}
          style={{ maxHeight: showCat && "325px" }}
        >
          {categories.categories.slice(0, 8).map((item, index) => (
            <li key={index} className={styles.menu_item}>
              <Link href={`/category/${item.name}`}>
                <a className={styles.menu_link}>
                  <Image
                    src="/svg/cat-icon-electronics.svg"
                    width="20"
                    height="20"
                    className="tw-flex-[0.2]"
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
          imgSrc="/svg/all.svg"
          text="All"
          style="tw-max-w-none"
        />
        {categories.categories.slice(0, 8).map((item, index) => (
          <CategoryMobile
            key={index}
            imgSrc={"/svg/cat-icon-electronics.svg"}
            text={item.name}
          />
        ))}
      </section>
    </>
  );
};

export default CategoryMenu;
