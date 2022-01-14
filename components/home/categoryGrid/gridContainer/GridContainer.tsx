import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./GridContainer.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { TitleBlock, Banner, Card, SideBar } from "../index";
import { ProductBox } from "@/shared";
import Button from "@/components/buttons/Button";
import Carousel from "@/components/Carousel/Carousel";
import Slider from "@/components/slider/slider";
import { v4 as uuid } from "uuid";
import { RootState } from "@/store/rootReducer";
import { GetProducts } from "@/store/product/product.queries";
import { userFetcher } from "@/helpers";
import { Spin } from "antd";

const GridContainer = function ({
  title,
  timer,
  sidebar,
  cards,
  banners,
}: any) {
  const { product } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState("");
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const prod = [1, 2, 3, 4];

  const slides = [
    { element: <Card /> },
    { element: <Card /> },
    { element: <Card /> },
  ];

  const banner = [{ element: <Banner /> }, { element: <Banner /> }];

  useEffect(() => {
    let isCancelled = false;
    (async () => {
      const { message } = await import("antd");
      try {
        const payload = {
          search: title,
        };
        const res = await userFetcher(GetProducts, payload);
        if (!isCancelled) {
          setLoading(false);
          setError("");
          setProducts(res.products);
        }
      } catch (error) {
        message.error(error.message);
        if (!isCancelled) {
          setError(error.message);
          setProducts([]);
          setLoading(false);
        }
      }
    })();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div id={styles.categoryGrid}>
      <TitleBlock title={title} timer={timer} />
      <div
        className={sidebar ? styles.mainContainer : styles.mainContainer__full}
      >
        <div className={styles.products}>
          {title === "Deals Of The day" &&
            prod.map((item) => (
              <div key={uuid()} className={styles.product}>
                <ProductBox />
              </div>
            ))}
          {!!err && (
            <div className="tw-py-5 tw-w-full tw-text-center">
              <h1 className="tw-text-error tw-font-bold tw-text-2xl">{err}</h1>
            </div>
          )}
          {title !== "Deals Of The day" && loading ? (
            <div className="tw-py-5 tw-w-full tw-text-center">
              <Spin size="large" />
            </div>
          ) : products.length === 0 ? (
            <div className="tw-py-5 tw-w-full tw-text-center">
              <h1>No Products Found</h1>
            </div>
          ) : (
            products.slice(0, 4).map((product: any) => (
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
