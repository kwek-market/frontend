import Load from "@/components/Loader/Loader";
import { ExtraGrid, MoreCard, ProductDesc, ProductHead } from "@/components/product";
import { userFetcher } from "@/helpers";
import { MainLayout } from "@/layouts";
import ExtraInfo from "@/shared/extraInfo/ExtraInfo";
import { GetProduct } from "@/store/product/product.queries";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";

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
            <MoreCard similar={product.category.name} title='Similar Items you might Like' />
          </Fragment>
        )
      )}
      <ExtraInfo />
    </MainLayout>
  );
};

export default Page;

export const getStaticPaths: GetStaticPaths = async context => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const payload = { id: context.params.product };
  const { product } = await userFetcher(GetProduct, payload);

  return {
    props: {
      product,
    },
  };
};
