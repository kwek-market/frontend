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

const Page = function () {
  const router = useRouter();
  const { product } = router.query;

  const [loading, setLoading] = useState(true);
  const [err, setError] = useState("");
  const [products, setProducts] = useState<ProductType>({} as ProductType);

  useEffect(() => {
    let isCancelled: boolean = false;
    (async () => {
      const { message } = await import("antd");
      try {
        const payload = {
          search: product,
        };
        console.log(payload.search);
        const res = await userFetcher(GetProducts, payload);
        if (!isCancelled) {
          console.log(res);
          setLoading(false);
          setError("");
          setProducts(res.products[0]);
        }
      } catch (error) {
        console.log(error.message);
        message.error(error.message);
        if (!isCancelled) {
          setLoading(false);
          setError(error.message);
          setProducts({} as ProductType);
        }
      }
    })();

    return () => {
      isCancelled = true;
    };
  }, [product]);

  const isLoading = !!loading && (
    <div className="tw-w-full tw-py-7 tw-flex tw-justify-center">
      <Loader type="Audio" width={60} height={60} color="#FC476E" />
    </div>
  );

  const hasError = !!err && (
    <div className="tw-w-full tw-py-5">
      <h1 className="tw-text-error tw-text-xl tw-font-bold tw-text-center">
        {err}
      </h1>
    </div>
  );

  return (
    <MainLayout title={product}>
      {loading ? (
        isLoading
      ) : err ? (
        hasError
      ) : (
        <>
          <ProductHead product={products} />
          <ExtraGrid product={products} />
          <ProductDesc product={products} />
          <MoreCard
            similar={products?.category?.name}
            title="Similar Items you might Like"
          />
        </>
      )}
      <ExtraInfo />
    </MainLayout>
  );
};

export default Page;
