import React from "react";
import { useRouter } from "next/router";
import styles from "./GridContainer.module.scss";

import { TitleBlock, Banner, Card, SideBar } from "../index";
import { ProductBox } from "@/shared";
import Button from "@/components/buttons/Button";
import Slider from "@/components/slider/slider";
import { v4 as uuid } from "uuid";
import { Spin } from "antd";
import useProduct from "@/hooks/useProducts";

const GridContainer = function ({
  title,
  timer,
  sidebar,
  cards,
  banners,
}: any) {
  const router = useRouter();

  const slides = [
    { element: <Card /> },
    { element: <Card /> },
    { element: <Card /> },
  ];

  const banner = [{ element: <Banner /> }, { element: <Banner /> }];

  const payload = {
    search: title,
  };
  const {
    status: categoryStatus,
    data: categoryData,
    error: categoryError,
  } = useProduct(payload);

  return (
    <div id={styles.categoryGrid}>
      <TitleBlock title={title} timer={timer} />
      <div
        className={sidebar ? styles.mainContainer : styles.mainContainer__full}
      >
        <div className={styles.products}>
          {categoryStatus === "error" && (
            <div className="tw-py-5 tw-w-full tw-text-center">
              <h1 className="tw-text-error tw-font-bold tw-text-2xl">
                {categoryError}
              </h1>
            </div>
          )}
          {categoryStatus === "loading" ? (
            <div className="tw-py-5 tw-w-full tw-text-center">
              <Spin size="large" />
            </div>
          ) : categoryData.products.length === 0 ? (
            <div className="tw-py-5 tw-w-full tw-text-center">
              <h1>No Products Found</h1>
            </div>
          ) : (
            categoryData.products !== undefined &&
            categoryData.products.slice(0, 4).map((product: any) => (
              <div key={uuid()} className={styles.product}>
                <ProductBox product={product} id={product.id} />
              </div>
            ))
          )}

          <div className="tw-mx-auto tw-w-24 tw-flex md:tw-hidden">
            <Button
              buttonStyle="tw-bg-red-kwek100 tw-text-white-100 tw-p-2"
              text="view more"
              cmd={() => router.push(`/category/${title}`)}
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
            <Slider element={slides} />
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
            <Slider element={banner} />
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
