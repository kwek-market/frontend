import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./GridContainer.module.scss";

import { TitleBlock, Card } from "../index";
import { ProductBox } from "@/shared";
import { userFetcher } from "@/helpers";
import { GetProducts } from "@/store/product/product.queries";
import Loader from "react-loader-spinner";
import { ProductType } from "@/interfaces/commonTypes";

interface GridContainerProps {
  title: string;
  cards?: any;
  similar: string;
}

const GridContainer = function ({ title, cards, similar }: GridContainerProps) {
  const [products, setProducts] = useState([] as ProductType[]);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState("");

  // check for the product by the category name
  useEffect(() => {
    let isCancelled = false;
    (async () => {
      const { message } = await import("antd");
      try {
        const payload = {
          search: similar,
        };
        const res = await userFetcher(GetProducts, payload);
        if (!isCancelled) {
          setLoading(false);
          setError("");
          setProducts(res.products);
          console.log(res);
        }
      } catch (error) {
        console.log(error.message);
        message.error(error.message);
        if (!isCancelled) {
          setLoading(false);
          setError(error.message);
          setProducts([] as ProductType[]);
        }
      }
    })();

    return () => {
      isCancelled = true;
    };
  }, []);

  const isLoading = !!loading && (
    <div className="tw-w-full tw-py-7 tw-flex tw-justify-center">
      <Loader type="Rings" width={60} height={60} color="#FC476E" />
    </div>
  );

  const hasError = !!err && (
    <div className="tw-w-full tw-py-5">
      <h1 className="tw-text-error tw-text-xl tw-font-bold tw-text-center">
        {err}
      </h1>
    </div>
  );

  const isEmpty =
    products.length === 0 ? (
      <div className="tw-w-full tw-py-5">
        <h1 className="tw-text-error tw-text-xl tw-font-bold tw-text-center">
          No products found
        </h1>
      </div>
    ) : (
      products.slice(0, 5).map((product) => (
        <div key={uuid()} className={styles.product}>
          <ProductBox id={product.id} product={product} />
        </div>
      ))
    );

  return (
    <div id={styles.categoryGrid}>
      <TitleBlock title={title} />
      <div className={styles.mainContainer__full}>
        <div className={styles.products}>
          {loading ? isLoading : err ? hasError : isEmpty}
        </div>

        {cards && (
          <div className={styles.cards}>
            {cards.map((card: any) => (
              <div key={card} className={styles.card}>
                <Card />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GridContainer;
