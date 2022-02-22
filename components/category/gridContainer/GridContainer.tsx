import React, { memo, useEffect, useState } from "react";
import styles from "./GridContainer.module.scss";

import { ActiveTabbar, Card, SideBar } from "../index";
import { v4 as uuid } from "uuid";
import CategoryProducts from "../CategoryProducts";
import { ProductType } from "@/interfaces/commonTypes";
import Loader from "react-loader-spinner";
import ReactPaginate from "react-paginate";
import useProducts from "@/hooks/useProducts";
import { useQueryClient } from "react-query";
import { userFetcher } from "@/helpers";
import { GetProducts } from "@/store/product/product.queries";

const GridContainer = function ({ cards, category }: any) {
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState(true);
  const [currentItems, setCurrentItems] = useState<ProductType[]>(
    [] as ProductType[]
  );
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const payload = {
    page: currentPage,
    pageSize: 20,
    search: category,
  };
  const {
    status: categoryStatus,
    data: categoryData,
    error: categoryError,
    isFetching,
  } = useProducts(payload);

  useEffect(() => {
    if (categoryData?.products.hasNext) {
      console.log("has more");
      console.log(payload);
      queryClient.prefetchQuery(["category-items", payload], () =>
        userFetcher(GetProducts, payload)
      );
    }
    if (categoryData === undefined) return;
    console.log(categoryData.products);
    setPageCount(categoryData.products.pages);
    setCurrentItems(categoryData.products.objects);
    console.log(`current page: ${currentPage}`);
  }, [categoryData, currentPage, queryClient]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  const isLoading = categoryStatus === "loading" && (
    <div className="tw-w-full tw-py-7 tw-flex tw-justify-center">
      <Loader type="Rings" width={60} height={60} color="#FC476E" />
    </div>
  );

  const hasError = categoryStatus === "error" && (
    <div className="tw-w-full tw-py-5">
      <h1 className="tw-text-error tw-text-xl tw-font-bold tw-text-center">
        {categoryError}
      </h1>
    </div>
  );

  const isEmpty =
    categoryStatus == "success" && currentItems.length === 0 ? (
      <div className="tw-w-full tw-py-5">
        <h1 className="tw-text-error tw-text-xl tw-font-bold tw-text-center">
          No products
        </h1>
      </div>
    ) : (
      currentItems.map((product: ProductType) => (
        <div key={uuid()} className={styles.product}>
          <CategoryProducts id={product.id} product={product} />
        </div>
      ))
    );

  return (
    <div id={styles.categoryGrid}>
      <ActiveTabbar filter={filter} setFilter={setFilter} />

      <div className="tw-flex tw-gap-5 tw-w-full">
        {filter && (
          <aside className={styles.sidebarContainer}>
            <SideBar category={category} />
          </aside>
        )}

        <div
          className={filter ? styles.mainContainer : styles.mainContainer__full}
        >
          {isLoading}
          {hasError}
          <div className={styles.products}>{isEmpty}</div>
          {cards && (
            <div className={styles.cards}>
              {cards.map((card: any) => (
                <div key={card} className={styles.card}>
                  <Card />
                </div>
              ))}
            </div>
          )}
          <ReactPaginate
            nextLabel="next >"
            onPageChange={(e) => handlePageClick(e)}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={undefined}
          />
          {isFetching ? (
            <div className="tw-w-full tw-py-7 tw-flex tw-justify-center">
              <Loader type="Rings" width={60} height={60} color="#FC476E" />
            </div>
          ) : null}{" "}
        </div>
      </div>
    </div>
  );
};

export default GridContainer;
