import Load from "@/components/Loader/Loader";
import { ExtraGrid, MoreCard, ProductDesc, ProductHead } from "@/components/product";
import { userFetcher } from "@/helpers";
import { MainLayout } from "@/layouts";
import ExtraInfo from "@/shared/extraInfo/ExtraInfo";
import { GetProduct } from "@/store/product/product.queries";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { ONE_HOUR } from "../../constants/constants";

const Page = function ({ product }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MainLayout title={id}>
      {router.isFallback ? <Load /> : null}

      {product
        ? Object.keys(product).length && (
            <Fragment>
              <ProductHead product={product} />
              <ExtraGrid product={product} />
              <ProductDesc product={product} />
              <MoreCard similar={product.category.name} title='Similar Items you might Like' />
            </Fragment>
          )
        : null}

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
  let product = null;

  try {
    const data = await userFetcher(GetProduct, payload);
    product = data?.product;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      product,
    },
    revalidate: ONE_HOUR,
  };
};
