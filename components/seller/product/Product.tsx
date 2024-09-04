import ProductEmpty from "@/components/emptyProduct/EmptyProduct";
import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import ProductFilled from "@/components/productFilled/ProductFilled";
import { userFetcher } from "@/helpers";
import useSellerProducts from "@/hooks/useSellerProducts";
import { PagePayload, ProductType } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import { GET_SELLER_PRODUCTS } from "@/store/seller/seller.queries";
import { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";

export default function Product() {
  const token = useSelector((state: RootState) => state.user?.token);
  const queryClient = useQueryClient();
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<ProductType[]>([] as ProductType[]);
  const [filter, setFilter] = useState<string>("-clicks");
  const payload: PagePayload = {
    token,
    page: currentPage,
    pageSize: 20,
    sortBy: filter,
    rating: -5,
  };
  const { status, data: productsData, error: productError } = useSellerProducts(payload);
  const [showProduct, setShowProduct] = useState(false);

  const product = productsData?.getSellerProducts?.objects as ProductType[];

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    queryClient.fetchQuery(["sellerProducts", payload], () =>
      userFetcher(GET_SELLER_PRODUCTS, payload)
    );
  }, [filter]);

  useEffect(() => {
    if (productsData?.getSellerProducts.hasNext) {
      // console.log("has more");
      queryClient.prefetchQuery(["sellerProducts", payload], () =>
        userFetcher(GET_SELLER_PRODUCTS, payload)
      );
    }

    // // console.log(`current page: ${currentPage}`);
    return () => {
      queryClient.cancelQueries(["sellerProducts", payload]);
    };
  }, [productsData, currentPage, queryClient, filter]);

  useEffect(() => {
    if (productsData) {
      setPageCount(productsData.getSellerProducts.pages);
      setCurrentItems(productsData.getSellerProducts.objects);
    }
  }, [productsData]);

  return (
    <Fragment>
      {status === "loading" && <Load />}
      {status === "error" && <ErrorInfo error={(productError as { message: string }).message} />}
      {product ? (
        <>
          <ProductFilled
            product={product}
            setShowProduct={setShowProduct}
            handlePageClick={handlePageClick}
            pageCount={pageCount}
            filter={filter}
            setFilter={setFilter}
            pageSize={payload.pageSize}
          />
          <div className='tw-mt-4'>
            <ReactPaginate
              nextLabel='next >'
              onPageChange={e => handlePageClick(e)}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel='< previous'
              pageClassName='tw-text-red-kwek100 tw-text-xl tw-px-2 tw-py-2'
              previousClassName={`tw-text-gray-50 tw-block tw-px-2 tw-py-2 tw-rounded-xl ${
                productsData?.getSellerProducts.hasPrev
                  ? "tw-bg-red-kwek100"
                  : "tw-bg-gray-kwek100 !tw-cursor-not-allowed"
              }`}
              nextClassName={`tw-text-gray-50 tw-block tw-px-2 tw-py-2 tw-rounded-xl ${
                productsData?.getSellerProducts.hasNext
                  ? "tw-bg-red-kwek100"
                  : "tw-bg-gray-kwek100 !tw-cursor-not-allowed"
              }`}
              breakLabel='...'
              breakClassName='page-item'
              breakLinkClassName='page-link'
              containerClassName='tw-w-full tw-flex tw-justify-center tw-items-center tw-list-none tw-space-x-5'
              className=''
              activeClassName='active'
              renderOnZeroPageCount={undefined}
            />
          </div>
        </>
      ) : (
        !showProduct && <ProductEmpty />
      )}
      {/* {showProduct && <SingleProduct setShowProduct={setShowProduct} product={product} />} */}
    </Fragment>
  );
}
