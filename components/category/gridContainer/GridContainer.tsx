import { useEffect, useState } from "react";
import styles from "./GridContainer.module.scss";

import { userFetcher } from "@/helpers";
import useProducts, { PayloadType } from "@/hooks/useProducts";
import { Filtering, ProductType } from "@/interfaces/commonTypes";
import { GetProducts } from "@/store/product/product.queries";
import Link from "next/link";
import { useRouter } from "next/router";
import Pagination from "rc-pagination";
import { Rings } from "react-loader-spinner";
import { QueryClient, useQueryClient } from "react-query";
import { v4 as uuid } from "uuid";
import CategoryProducts from "../CategoryProducts";
import { ActiveTabbar, Card, SideBar } from "../index";

const GridContainer = function ({ cards, category }: any) {
  const { query, asPath, pathname, basePath } = useRouter();
  const categoryName = query?.category;
  console.log("🚀 ~~ GridContainer ~~ categoryId:", categoryName);

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
  const [currentItems, setCurrentItems] = useState<ProductType[]>([] as ProductType[]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState((query?.page as any as number) || 1);
  console.log("🚀 ~~ GridContainer ~~ query?.page:", query?.page);

  const payload: PayloadType = {
    page: Number(query?.page) || 1,
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
        const data = await queryClient2.fetchQuery(["category-items", payload], () =>
          userFetcher(GetProducts, payload)
        );
        if (data?.products?.hasNext) {
          queryClient.prefetchQuery(["category-items", payload], () =>
            userFetcher(GetProducts, payload)
          );
        }
        setPageCount(data?.products.pages);
        setCurrentItems(data?.products.objects);
      } catch (err) {
        console.error(err.message);
      }
    })();

    return () => {
      queryClient2.cancelQueries(["category-items", payload]);
    };
  }, [sort, filtering.priceRange, filtering.rating, filtering.sizes, filtering.keyword]);

  useEffect(() => {
    if (categoryData?.products?.hasNext) {
      queryClient.prefetchQuery(["category-items", payload], () =>
        userFetcher(GetProducts, payload)
      );
    }
    if (categoryData === undefined) return;
    setPageCount(categoryData?.products?.pages);
    setCurrentItems(categoryData?.products?.objects);
    // console.log(`current page: ${currentPage}`);
    return () => {
      queryClient.cancelQueries(["category-items", payload]);
    };
  }, [categoryData, currentPage, queryClient, query]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  const isLoading = categoryStatus === "loading" && (
    <div className='tw-w-full tw-py-7 tw-flex tw-justify-center'>
      <Rings width={60} height={60} color='#FC476E' />
    </div>
  );

  const hasError = categoryStatus === "error" && (
    <div className='tw-w-full tw-py-5'>
      <h1 className='tw-text-error tw-text-xl tw-font-bold tw-text-center'>
        {(categoryError as { message: string }).message}
      </h1>
    </div>
  );

  const isEmpty =
    categoryStatus == "success" && currentItems.length === 0 ? (
      <div className='tw-w-full tw-py-5'>
        <h1 className='tw-text-error tw-text-xl tw-font-bold tw-text-center'>No products</h1>
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
      <ActiveTabbar filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />

      <div className='tw-flex tw-gap-5 tw-w-full'>
        {filter && (
          <aside className={styles.sidebarContainer}>
            <SideBar category={category} filtering={filtering} setFiltering={setFiltering} />
          </aside>
        )}

        <div className={filter ? styles.mainContainer : styles.mainContainer__full}>
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
          <div className='tw-w-full tw-overflow-x-scroll tw-scrollbar-none'>
            <Pagination
              pageSize={20}
              totalBoundaryShowSizeChanger={1}
              // pageSizeOptions={["1", "2", "3"]}
              nextIcon={<button>Next</button>}
              prevIcon={<button>Prev</button>}
              showLessItems={true}
              defaultCurrent={1}
              total={payload.pageSize * pageCount}
              itemRender={(page, type, element) => {
                if (type === "jump-next" || type === "jump-prev") {
                  return (
                    <Link
                      href={{
                        pathname: `/category/${categoryName}`,

                        query: { page },
                      }}
                      className='tw-px-3 tw-py-2'
                    >
                      ...
                    </Link>
                  );
                }

                if (type === "next" || type === "prev") {
                  return (
                    <Link
                      href={{
                        pathname: `/category/${categoryName}`,

                        query: { page: page == 0 ? 1 : page },
                      }}
                      className='tw-px-3 tw-py-2 tw-bg-red-kwek100 tw-text-white-100 tw-rounded-xl'
                    >
                      {type === "prev" ? <span className=''> {"<"} </span> : null}
                      {element}
                      {type === "next" ? <span className=''> {">"} </span> : null}
                    </Link>
                  );
                }

                return (
                  <Link
                    href={{ pathname: `/category/${categoryName}`, query: { page } }}
                    className='tw-px-3 tw-py-2'
                  >
                    {page}
                  </Link>
                );
              }}
              className='tw-text-red-500 tw-overflow-x-scroll tw-w-max tw-py-5 px-6 tw-flex tw-space-x-2 tw-justify-center tw-items-center'
              role='button'
              locale={{}}
            />
          </div>
          {isFetching ? (
            <div className='tw-w-full tw-py-7 tw-flex tw-justify-center'>
              <Rings width={60} height={60} color='#FC476E' />
            </div>
          ) : null}{" "}
        </div>
      </div>
    </div>
  );
};

export default GridContainer;
