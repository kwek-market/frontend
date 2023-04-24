import React, { Fragment } from "react";
import { useRouter } from "next/router";
import ExtraInfo from "@/shared/extraInfo/ExtraInfo";
import {
  ProductHead,
  ExtraGrid,
  ProductDesc,
  MoreCard,
} from "@/components/product";
import { MainLayout } from "@/layouts";
import Load from "@/components/Loader/Loader";
import { GetStaticPaths, GetStaticProps } from "next";
import { GetProduct } from "@/store/product/product.queries";
import { userFetcher } from "@/helpers";

const Page = function ({ product }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MainLayout title={id}>
      {router.isFallback ? (
        <Load />
      ) : (
        Object.keys(product).length && (
          <Fragment>
            <ProductHead product={product} />
            <ExtraGrid product={product} />
            <ProductDesc product={product} />
            <MoreCard
              similar={product.category.name}
              title="Similar Items you might Like"
            />
          </Fragment>
        )
      )}
      <ExtraInfo />
    </MainLayout>
  );
};

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { product: process.env.NEXT_PUBLIC_FALLBACK_PRODUCTID } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const payload = { id: context.params.product };
  const { product } = await userFetcher(GetProduct, payload);

  return {
    props: {
      product,
    },
  };
};
