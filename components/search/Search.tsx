import useProducts from "@/hooks/useProducts";
import { ProductType } from "@/interfaces/commonTypes";
import React, { Fragment } from "react";
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
  const { status, data, error } =
    check &&
    useProducts({
      page: 1,
      pageSize: 20,
      search,
    });
  console.log(data, status);
  const num =
    status === "success" &&
    Number(data.products.objects.length).toLocaleString();

  return (
    <section className="tw-px-2 md:tw-px-5 lg:tw-px-12 tw-flex md:tw-flex-row tw-flex-col tw-mt-5">
      <section className="tw-flex-1">
        <div className="tw-hidden md:tw-block">
          <span>Home</span>
          <span>All Products</span>
          <span>{search}</span>
        </div>
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
          <button className="tw-bg-red-kwek100 tw-rounded-md tw-font-medium tw-text-white-400 tw-text-base tw-py-1 tw-px-4">
            Filters
          </button>
          <label>
            <select className="tw-rounded-md tw-py-1 tw-px-8">
              <option>Most Popular</option>
            </select>
          </label>
        </nav>
        <main className="tw-grid tw-mt-5">
          {status === "loading" && <Load />}
          {status === "error" && (
            <ErrorInfo error="An error occurred, try again" />
          )}
          {status === "success" &&
          data !== undefined &&
          data.products.objects.length > 0 ? (
            <div className="tw-grid tw-grid-cols-kwek-6 tw-gap-2">
              {data.products.objects.map((product: ProductType) => (
                <Product key={v4()} product={product} />
              ))}
            </div>
          ) : (
            <ErrorInfo error="No items found" />
          )}
        </main>
      </section>
    </section>
  );
}
