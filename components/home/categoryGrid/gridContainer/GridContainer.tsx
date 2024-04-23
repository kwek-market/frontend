import React from "react";
import { useRouter } from "next/router";
import styles from "./GridContainer.module.scss";

import { TitleBlock, Banner, Card, SideBar } from "../index";
import { ProductBox } from "@/shared";
import Button from "@/components/buttons/Button";
import Slider from "@/components/slider/slider";
import { v4 as uuid } from "uuid";
import { Spin } from "antd";
import useProducts from "@/hooks/useProducts";
import { ProductType } from "@/interfaces/commonTypes";

type GridContainerProps = {
  title: string;
  timer?: boolean;
  sidebar?: boolean;
  cards?: any[];
};

const GridContainer = function ({
  title,
  timer,
  sidebar,
  cards,
}: GridContainerProps) {
  const router = useRouter();

  const payload = {
    page: 1,
    pageSize: 4,
    search: title,
    sortBy: "-sales",
  };
  const {
    status: categoryStatus,
    data: categoryData,
    error: categoryError,
  } = useProducts(payload);

  const newBanner =
    !!(categoryData as Record<string, any>)?.products.objects !== undefined &&
    (categoryData as Record<string, any>)?.products.objects
      .slice(0, 2)
      .map((banner: ProductType) => (
        <Banner key={banner.id} product={banner} />
      ));
  const banner = [{ element: newBanner }];

  return (
    <div id={styles.categoryGrid}>
      <TitleBlock title={title} timer={timer} cards={cards} />
      <div
        className={sidebar ? styles.mainContainer : styles.mainContainer__full}
      >
        <div className={styles.products}>
          {categoryStatus === "error" && (
            <div className="tw-py-5 tw-w-full tw-text-center">
              <h1 className="tw-text-error tw-font-bold tw-text-2xl">
                {(categoryError as { message: string }).message}
              </h1>
            </div>
          )}
          {categoryStatus === "loading" && (
            <div className="tw-py-5 tw-w-full tw-text-center">
              <Spin size="large" />
            </div>
          )}
          {(categoryData as Record<string, any>)?.products.objects !==
            undefined &&
          (categoryData as Record<string, any>)?.products.objects.length ===
            0 ? (
            cards ? (
              cards.slice(0, 4).map((card) => (
                <div key={uuid()} className={styles.product}>
                  <ProductBox product={card} id={card.id} />
                </div>
              ))
            ) : (
              <div className="tw-py-5 tw-w-full tw-text-center">
                <h1>No Products Found</h1>
              </div>
            )
          ) : (
            (categoryData as Record<string, any>)?.products.objects !==
              undefined &&
            (categoryData as Record<string, any>).products.objects.map(
              (product: ProductType) => (
                <div key={uuid()} className={styles.product}>
                  <ProductBox product={product} id={product.id} />
                </div>
              )
            )
          )}

          <div className="tw-mx-auto tw-w-24 tw-flex md:tw-hidden">
            <Button
              buttonStyle="tw-bg-red-kwek100 tw-text-white-100 tw-p-2"
              text="view more"
              cmd={
                cards?.length > 0
                  ? () => router.push("/deals-of-the-day/1")
                  : () => router.push(`/category/${title}`)
              }
            />
          </div>
        </div>

        {cards && (
          <>
            <div className={styles.cards}>
              {cards.slice(0, 3).map((card: any) => (
                <div key={card.id} className={styles.card}>
                  <Card card={card} />
                </div>
              ))}
            </div>
            <Slider
              element={cards.map((card) => ({ element: <Card card={card} /> }))}
            />
          </>
        )}

        <>
          <div className={styles.banners}>
            {(categoryData as Record<string, any>)?.products.objects !==
              undefined &&
              (categoryData as Record<string, any>)?.products.objects
                .slice(0, 2)
                .map((banner: ProductType) => (
                  <div key={banner.id} className={styles.banner}>
                    <Banner product={banner} />
                  </div>
                ))}
          </div>
          <Slider element={banner} />
        </>
      </div>
      {sidebar && (
        <aside className={styles.sidebarContainer}>
          <SideBar title={title} />
        </aside>
      )}
    </div>
  );
};

export default GridContainer;
