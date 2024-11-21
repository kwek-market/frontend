import ProductEmpty from "@/components/emptyProduct/EmptyProduct";
import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import ProductFilled from "@/components/productFilled/ProductFilled";
import { userFetcher } from "@/helpers";
import useSellerProducts from "@/hooks/useSellerProducts";
import { PagePayload, ProductType } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import { GET_SELLER_PRODUCTS } from "@/store/seller/seller.queries";
import { Button } from "antd";
import Pagination from "rc-pagination";
import { Fragment, useEffect, useState } from "react";
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
            <Pagination
              pageSize={20}
              totalBoundaryShowSizeChanger={1}
              // pageSizeOptions={["1", "2", "3"]}
              nextIcon={<button>Next</button>}
              prevIcon={<button>Prev</button>}
              showLessItems={true}
              defaultCurrent={1}
              total={payload.pageSize * pageCount}
              className='tw-text-red-500 tw-overflow-x-scroll tw-scrollbar-none tw-py-5 px-6 tw-flex tw-space-x-2 tw-justify-center tw-items-center tw-w-full'
              role='button'
              locale={{}}
              itemRender={(page, type, element) => {
                if (type === "jump-next" || type === "jump-prev") {
                  return (
                    <Button onClick={() => setCurrentPage(page)} className='tw-px-3 tw-py-2'>
                      ...
                    </Button>
                  );
                }

                if (type === "next" || type === "prev") {
                  return (
                    <Button
                      onClick={() => setCurrentPage(page)}
                      className='tw-px-3 tw-py-2 tw-bg-red-kwek100 tw-text-white-100 tw-rounded-xl'
                    >
                      {type === "prev" ? <span className=''> {"<"} </span> : null}
                      {element}
                      {type === "next" ? <span className=''> {">"} </span> : null}
                    </Button>
                  );
                }

                return (
                  <Button onClick={() => setCurrentPage(page)} className='tw-px-3 tw-py-2'>
                    {page}
                  </Button>
                );
              }}
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
