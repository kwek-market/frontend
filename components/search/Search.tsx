import { userFetcher } from "@/helpers";
import useProducts from "@/hooks/useProducts";
import { ProductType } from "@/interfaces/commonTypes";
import { GetProducts } from "@/store/product/product.queries";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { QueryClient } from "react-query";
import { v4 } from "uuid";
import { CategoryMenu } from "../home";
import ErrorInfo from "../Loader/ErrorInfo";
import Load from "../Loader/Loader";
import Product from "../product/Product";

type SearchProps = {
  search: string;
  check: boolean;
};

export default function Search({ search, check }: SearchProps) {
  const payload = {
    page: 1,
    pageSize: 20,
    search,
    sortBy: "-sales",
  };
  const { status, data } = check && useProducts(payload);
  const queryClient = new QueryClient();
  const [currentItems, setCurrentItems] = useState<ProductType[]>(
    [] as ProductType[]
  );
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const num =
    status === "success" &&
    Number(data.products.objects.length).toLocaleString();

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    if (data?.products.hasNext) {
      console.log("has more");
      queryClient.prefetchQuery(["category-items", payload], () =>
        userFetcher(GetProducts, payload)
      );
    }
    if (data === undefined) return;
    console.log(data.products);
    setPageCount(data.products.pages);
    setCurrentItems(data.products.objects);
    console.log(`current page: ${currentPage}`);
  }, [data, currentPage, queryClient]);

  return (
    <section className="tw-px-2 md:tw-px-5 lg:tw-px-12 tw-flex md:tw-flex-row tw-flex-col tw-my-5 tw-gap-3 md:tw-gap-5 lg:tw-gap-12">
      <section className="tw-flex-1">
        <div className="tw-hidden md:tw-block tw-mb-3">
          <span className="tw-font-medium tw-text-sm tw-text-gray-900 tw-mr-2">
            Home
          </span>
          <i className="fas fa-angle-right tw-mr-2" />
          <span className="tw-font-medium tw-text-sm tw-text-gray-900 tw-mr-2">
            All Products
          </span>
          <i className="fas fa-angle-right tw-mr-2" />
          <span className="tw-font-medium tw-text-sm tw-text-gray-900 tw-mr-2 tw-capitalize">
            {search}
          </span>
        </div>
        <CategoryMenu />
      </section>
      <section className="tw-flex-[3]">
        <header className="tw-flex tw-text-center md:tw-text-justify md:tw-flex-row tw-flex-col tw-justify-between">
          <p className="tw-font-semibold tw-text-lg md:tw-text-xl lg:tw-text-3xl tw-text-gray-kwek200">
            Shop Online in Nigeria
          </p>
          <p className="tw-text-opacity-70 tw-text-gray-kwek200 tw-text-lg md:tw-text-xl">
            {num} products found
          </p>
        </header>
        <nav className="tw-flex tw-justify-between">
          <button className="tw-bg-red-kwek100 tw-rounded-md tw-font-medium tw-text-white-400 tw-text-base tw-py-2 tw-px-4">
            Filters <i className="fas fa-angle-right tw-ml-2" />
          </button>
          <label>
            <select className="tw-rounded-md tw-py-2 tw-px-8">
              <option>Most Popular</option>
            </select>
          </label>
        </nav>
        <main className="tw-grid tw-my-5">
          {status === "loading" && <Load />}
          {status === "error" && (
            <ErrorInfo error="An error occurred, try again" />
          )}
          {status === "success" &&
          data !== undefined &&
          data.products.objects.length > 0 ? (
            <div className="tw-grid tw-grid-cols-kwek-8 tw-gap-2 tw-justify-center">
              {data.products.objects.map((product: ProductType) => (
                <Product key={v4()} product={product} />
              ))}
            </div>
          ) : (
            <ErrorInfo error="No items found" />
          )}
        </main>
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
      </section>
    </section>
  );
}
