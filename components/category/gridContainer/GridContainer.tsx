import React, { useEffect, useState } from "react";
import styles from "./GridContainer.module.scss";

import { ActiveTabbar, Card, SideBar } from "../index";
import { v4 as uuid } from "uuid";
import CategoryProducts from "../CategoryProducts";
import { Filtering, ProductType } from "@/interfaces/commonTypes";
import { Rings } from "react-loader-spinner";
import ReactPaginate from "react-paginate";
import useProducts, { PayloadType } from "@/hooks/useProducts";
import { QueryClient, useQueryClient } from "react-query";
import { userFetcher } from "@/helpers";
import { GetProducts } from "@/store/product/product.queries";

const GridContainer = function ({ cards, category }: any) {
  const queryClient = useQueryClient();
  const queryClient2 = new QueryClient();
  const [filter, setFilter] = useState(false);
  const [filtering, setFiltering] = useState<Filtering>({
    priceRange: [],
    sizes: [],
    keyword: [],
    rating: -5,
  });
  const [sort, setSort] = useState("-clicks");
  const [currentItems, setCurrentItems] = useState<ProductType[]>(
    [] as ProductType[]
  );
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const payload: PayloadType = {
    page: currentPage,
    pageSize: 20,
    search: category,
    sortBy: sort,
  };
  const {
    status: categoryStatus,
    data: categoryData,
    error: categoryError,
    isFetching,
  } = useProducts(payload);

  useEffect(() => {
    const { keyword, priceRange, rating, sizes } = filtering;
    // check for the ones that have values and add them to the payload object, else remove them
    if (keyword.length > 0) payload.keyword = keyword;
    if (priceRange.length > 0) payload.priceRange = priceRange;
    if (sizes.length > 0) payload.sizes = sizes;
    payload.rating = rating;
    (async () => {
      try {
        const data = await queryClient2.fetchQuery(
          ["category-items", payload],
          () => userFetcher(GetProducts, payload)
        );
        if ((data as Record<string, any>)?.products?.hasNext) {
          queryClient.prefetchQuery(["category-items", payload], () =>
            userFetcher(GetProducts, payload)
          );
        }
        setPageCount((data as Record<string, any>)?.products.pages);
        setCurrentItems((data as Record<string, any>)?.products.objects);
      } catch (err) {
        console.error(err.message);
      }
    })();

    return () => {
      queryClient2.cancelQueries(["category-items", payload]);
    };
  }, [
    sort,
    filtering.priceRange,
    filtering.rating,
    filtering.sizes,
    filtering.keyword,
  ]);

  useEffect(() => {
    if ((categoryData as Record<string, any>)?.products?.hasNext) {
      queryClient.prefetchQuery(["category-items", payload], () =>
        userFetcher(GetProducts, payload)
      );
    }
    if (categoryData === undefined) return;
    setPageCount((categoryData as Record<string, any>)?.products?.pages);
    setCurrentItems((categoryData as Record<string, any>)?.products?.objects);
    // console.log(`current page: ${currentPage}`);
    return () => {
      queryClient.cancelQueries(["category-items", payload]);
    };
  }, [categoryData, currentPage, queryClient]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  const isLoading = categoryStatus === "loading" && (
    <div className="tw-w-full tw-py-7 tw-flex tw-justify-center">
      <Rings
        visible={true}
        height="60"
        width="60"
        color="#FC476E"
        ariaLabel="rings-loading"
      />
    </div>
  );

  const hasError = categoryStatus === "error" && (
    <div className="tw-w-full tw-py-5">
      <h1 className="tw-text-error tw-text-xl tw-font-bold tw-text-center">
        {(categoryError as { message: string }).message}
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
      <ActiveTabbar
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />

      <div className="tw-flex tw-gap-5 tw-w-full">
        {filter && (
          <aside className={styles.sidebarContainer}>
            <SideBar
              category={category}
              filtering={filtering}
              setFiltering={setFiltering}
            />
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
              <Rings
                visible={true}
                height="60"
                width="60"
                color="#FC476E"
                ariaLabel="rings-loading"
              />
            </div>
          ) : null}{" "}
        </div>
      </div>
    </div>
  );
};

export default GridContainer;
