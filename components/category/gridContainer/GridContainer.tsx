import React, { useEffect, useState } from "react";
import styles from "./GridContainer.module.scss";

import { ActiveTabbar, Card, SideBar } from "../index";
import { v4 as uuid } from "uuid";
import Pagination from "../../../shared/pagination/Pagination";
import { ProductBox } from "@/shared";
import { userFetcher } from "@/helpers";
import { GetProducts } from "@/store/product/product.queries";
import CategoryProducts from "../CategoryProducts";
import { ProductType } from "@/interfaces/commonTypes";
import Loader from "react-loader-spinner";

const GridContainer = function ({ cards, category }: any) {
  const [filter, setFilter] = useState(true);

  const [loading, setLoading] = useState(true);
  const [err, setError] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let isCancelled = false;
    (async () => {
      const { message } = await import("antd");
      try {
        const payload = {
          search: category,
        };
        const res = await userFetcher(GetProducts, payload);
        if (!isCancelled) {
          setLoading(false);
          setError("");
          setProducts(res.products);
          console.log(res);
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
          No products
        </h1>
      </div>
    ) : (
      products.map((product: ProductType) => (
        <div key={uuid()} className={styles.product}>
          <CategoryProducts id={product.id} product={product} />
        </div>
      ))
    );

  return (
    <div id={styles.categoryGrid}>
      <ActiveTabbar filter={filter} setFilter={setFilter} />

      {filter && (
        <aside className={styles.sidebarContainer}>
          <SideBar />
        </aside>
      )}

      <div
        className={filter ? styles.mainContainer : styles.mainContainer__full}
      >
        {loading ? (
          isLoading
        ) : err ? (
          hasError
        ) : (
          <div className={styles.products}>{isEmpty}</div>
        )}

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
      <Pagination />
    </div>
  );
};

export default GridContainer;
