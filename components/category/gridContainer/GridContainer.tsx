import React, { memo, useEffect, useState } from "react";
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
import { useQuery } from "react-query";
import ReactPaginate from "react-paginate";
import useProduct from "@/hooks/useProduct";

const itemsPerPage = 20;

const GridContainer = function ({ cards, category }: any) {
  const [filter, setFilter] = useState(true);

  // for pagination
  const [currentItems, setCurrentItems] = useState<ProductType[]>(
    [] as ProductType[]
  );
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const payload = {
    search: category,
  };
  const {
    status: categoryStatus,
    data: categoryData,
    error: categoryError,
  } = useProduct(payload);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    if (categoryData === undefined) return;
    setCurrentItems(categoryData.products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(categoryData.products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, categoryData]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset =
      (event.selected * itemsPerPage) % categoryData.products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
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
      </div>
    </div>
  );
};

export default GridContainer;
