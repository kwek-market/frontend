import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ExtraInfo from "@/shared/extraInfo/ExtraInfo";
import {
  ProductHead,
  ExtraGrid,
  ProductDesc,
  MoreCard,
} from "@/components/product";
import { MainLayout } from "@/layouts";
import { userFetcher } from "@/helpers";
import { ProductType } from "@/interfaces/commonTypes";
import { GetProducts } from "@/store/product/product.queries";
import Loader from "react-loader-spinner";
import useProduct from "@/hooks/useProduct";

const Page = function () {
  const router = useRouter();
  const { product } = router.query;

  const payload = {
    search: product,
  };
  const {
    status: categoryStatus,
    data: categoryData,
    error: categoryError,
  } = useProduct(payload);

  const isLoading = categoryStatus === "loading" && (
    <div className="tw-w-full tw-py-7 tw-flex tw-justify-center">
      <Loader type="Audio" width={60} height={60} color="#FC476E" />
    </div>
  );

  const hasError = categoryStatus === "error" && (
    <div className="tw-w-full tw-py-5">
      <h1 className="tw-text-error tw-text-xl tw-font-bold tw-text-center">
        {categoryError}
      </h1>
    </div>
  );

  return (
    <MainLayout title={product}>
      {isLoading}
      {hasError}
      {categoryStatus === "success" && (
        <>
          <ProductHead product={categoryData.products[0]} />
          <ExtraGrid product={categoryData.products[0]} />
          <ProductDesc product={categoryData.products[0]} />
          <MoreCard
            similar={categoryData.products[0]?.category?.name}
            title="Similar Items you might Like"
          />
        </>
      )}
      <ExtraInfo />
    </MainLayout>
  );
};

export default Page;
