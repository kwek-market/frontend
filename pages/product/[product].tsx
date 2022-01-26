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
import Loader from "react-loader-spinner";
import useProduct from "@/hooks/useProduct";

const Page = function () {
  const router = useRouter();
  console.log(router.query);
  const { id, product } = router.query;

  const payload = {
    id: id as unknown as string,
  };
  const {
    status: categoryStatus,
    data: categoryData,
    error: categoryError,
  } = useProduct(payload);

  console.log(categoryData);

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
          <ProductHead product={categoryData.product} />
          <ExtraGrid product={categoryData.product} />
          <ProductDesc product={categoryData.product} />
          <MoreCard
            similar={categoryData.product?.category?.name}
            title="Similar Items you might Like"
          />
        </>
      )}
      <ExtraInfo />
    </MainLayout>
  );
};

export default Page;
