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
  const { id, product } = router.query;
  const payload = {
    id: id as unknown as string,
  };
  const productData = useProduct(payload);

  const isLoading = productData.loading && (
    <div className="tw-w-full tw-py-7 tw-flex tw-justify-center">
      <Loader type="Audio" width={60} height={60} color="#FC476E" />
    </div>
  );

  const hasError = productData.error && (
    <div className="tw-w-full tw-py-5">
      <h1 className="tw-text-error tw-text-xl tw-font-bold tw-text-center">
        {productData.error.message}
      </h1>
    </div>
  );

  return (
    <MainLayout title={product}>
      {isLoading}
      {hasError}
      {productData.loading === false &&
        productData.error === null &&
        Object.keys(productData.product).length && (
          <>
            <ProductHead product={productData.product} />
            <ExtraGrid product={productData.product} />
            <ProductDesc product={productData.product} />
            <MoreCard
              similar={productData.product?.category?.name}
              title="Similar Items you might Like"
            />
          </>
        )}
      <ExtraInfo />
    </MainLayout>
  );
};

export default Page;
