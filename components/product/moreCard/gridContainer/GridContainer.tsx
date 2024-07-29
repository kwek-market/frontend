import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./GridContainer.module.scss";

import { userFetcher } from "@/helpers";
import { ProductType } from "@/interfaces/commonTypes";
import { ProductBox } from "@/shared";
import { GetProducts } from "@/store/product/product.queries";
import { Rings } from "react-loader-spinner";
import { QueryClient } from "react-query";
import { Card, TitleBlock } from "../index";

interface GridContainerProps {
  title: string;
  cards?: any;
  similar: string;
}

const GridContainer = function ({ title, cards, similar }: GridContainerProps) {
  const queryClient = new QueryClient();
  const [products, setProducts] = useState([] as ProductType[]);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState("");

  // check for the product by the category name
  useEffect(() => {
    (async () => {
      const { message } = await import("antd");
      const payload = {
        search: similar,
        page: 1,
        pageSize: 5,
      };
      try {
        setLoading(true);
        const data = await queryClient.fetchQuery("category-items", () =>
          userFetcher(GetProducts, payload)
        );
        setLoading(false);
        setProducts(data.products.objects);
      } catch (err) {
        message.error(err.message);
        setError(err.message);
      }
    })();
  }, []);

  const isLoading = !!loading && (
    <div className='tw-w-full tw-py-7 tw-flex tw-justify-center'>
      <Rings width={60} height={60} color='#FC476E' />
    </div>
  );

  const hasError = !!err && (
    <div className='tw-w-full tw-py-5'>
      <h1 className='tw-text-error tw-text-xl tw-font-bold tw-text-center'>{err}</h1>
    </div>
  );

  const isEmpty =
    products.length === 0 ? (
      <div className='tw-w-full tw-py-5'>
        <h1 className='tw-text-error tw-text-xl tw-font-bold tw-text-center'>No products found</h1>
      </div>
    ) : (
      products.slice(0, 5).map(product => (
        <div key={uuid()} className={styles.product}>
          <ProductBox id={product.id} product={product} />
        </div>
      ))
    );

  return (
    <div id={styles.categoryGrid}>
      <TitleBlock title={title} />
      <div className={styles.mainContainer__full}>
        <div className={styles.products}>{loading ? isLoading : err ? hasError : isEmpty}</div>

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
