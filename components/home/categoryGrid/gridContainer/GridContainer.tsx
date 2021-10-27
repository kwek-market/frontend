import React from "react";
import styles from "./GridContainer.module.scss";

import { TitleBlock, Banner, Card, SideBar } from "../index";
import { ProductBox } from "@/shared";
import Button from "@/components/buttons/Button";
import { useRouter } from "next/router";
import Carousel from "@/components/Carousel/Carousel";

const GridContainer = ({ title, timer, sidebar, cards, banners }: any) => {
  const products = [1, 2, 3, 4];
  const router = useRouter();

  const slides = [
    { element: <Card /> },
    { element: <Card /> },
    { element: <Card /> },
  ];

  const banner = [
    {element: <Banner />},
    {element: <Banner />}  
  ]

  return (
    <div id={styles.categoryGrid}>
      <TitleBlock title={title} timer={timer} />
      <div
        className={sidebar ? styles.mainContainer : styles.mainContainer__full}
      >
        <div className={styles.products}>
          {products.map((product: any) => (
            <div key={product} className={styles.product}>
              <ProductBox />
            </div>
          ))}
          <div className="tw-mx-auto tw-w-24 tw-flex md:tw-hidden">
            <Button
              buttonStyle={"tw-bg-red-kwek100 tw-text-white-100 tw-p-2"}
              text={"view more"}
              cmd={() => router.push("/product")}
            />
          </div>
        </div>

        {cards && (
          <>
            <div className={styles.cards}>
              {cards.map((card: any) => (
                <div key={card} className={styles.card}>
                  <Card />
                </div>
              ))}
            </div>
            <Carousel slides={slides} height="200px" />
          </>
        )}

        {banners && (
          <>
          <div className={styles.banners}>
            {banners.map((banner: any) => (
              <div key={banner} className={styles.banner}>
                <Banner />
              </div>
            ))}
          </div>
          <Carousel slides={banner} height="200px" />
          </>
        )}
      </div>
      {sidebar && (
        <aside className={styles.sidebarContainer}>
          <SideBar />
        </aside>
      )}
    </div>
  );
};

export default GridContainer;
