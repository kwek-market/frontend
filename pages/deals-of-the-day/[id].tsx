import CategoryProducts from "@/components/category/CategoryProducts";
import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import { userFetcher } from "@/helpers";
import { ProductType } from "@/interfaces/commonTypes";
import { MainLayout } from "@/layouts";
import { DEALS_OF_THE_DAY } from "@/store/seller/seller.queries";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import ReactPaginate from "react-paginate";
import { v4 } from "uuid";

export default function page({ dealsOfTheDay, pageCount }) {
  const router = useRouter();

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    router.push(`/deals-of-the-day/${event.selected + 1}`);
  };

  return (
    <MainLayout title="deals of the day">
      {router.isFallback ? (
        <Load />
      ) : dealsOfTheDay.objects.length > 0 ? (
        dealsOfTheDay.objects.map((product: ProductType) => (
          <div
            key={v4()}
            className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-5 tw-mb-8"
          >
            <CategoryProducts id={product.id} product={product} />
          </div>
        ))
      ) : (
        <ErrorInfo error="No product" />
      )}
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
    </MainLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const payload = {
    page: context.params.id,
    pageSize: 20,
  };
  const { dealsOfTheDay } = await userFetcher(DEALS_OF_THE_DAY, payload);
  return {
    props: {
      dealsOfTheDay,
      pageCount: dealsOfTheDay.pages,
    },
    revalidate: 1,
  };
};
