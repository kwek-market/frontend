import ProductEmpty from "@/components/emptyProduct/EmptyProduct";
import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import ProductFilled from "@/components/productFilled/ProductFilled";
import SingleProduct from "@/components/singleProduct/SingleProduct";
import { userFetcher } from "@/helpers";
import useSellerProducts from "@/hooks/useSellerProducts";
import { PagePayload, ProductType } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import { GET_SELLER_PRODUCTS } from "@/store/seller/seller.queries";
import React, { Fragment, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";

export default function Product() {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const queryClient = useQueryClient();
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<ProductType[]>(
    [] as ProductType[]
  );
  const [filter, setFilter] = useState<string>("-clicks");
  const payload: PagePayload = {
    token,
    page: currentPage,
    pageSize: 20,
    sortBy: filter,
    rating: -5
  };
  const {
    status,
    data: productsData,
    error: productError,
  } = useSellerProducts(payload);
  const [showProduct, setShowProduct] = useState(false);
  const [product, setProduct] = useState<ProductType>({} as ProductType);

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
    if (productsData === undefined) return;
    setPageCount(productsData.getSellerProducts.pages);
    setCurrentItems(productsData.getSellerProducts.objects);
    // console.log(`current page: ${currentPage}`);
    return () => {
      queryClient.cancelQueries(["sellerProducts", payload]);
    };
  }, [productsData, currentPage, queryClient, filter]);

  return (
    <Fragment>
      {status === "loading" && <Load />}
      {status === "error" && (
        <ErrorInfo error={(productError as { message: string }).message} />
      )}
      {status === "success" &&
      currentItems !== undefined &&
      currentItems.length > 0
        ? !showProduct && (
            <ProductFilled
              product={currentItems}
              setShowProduct={setShowProduct}
              setProduct={setProduct}
              handlePageClick={handlePageClick}
              pageCount={pageCount}
              filter={filter}
              setFilter={setFilter}
            />
          )
        : !showProduct && <ProductEmpty />}
      {showProduct && (
        <SingleProduct setShowProduct={setShowProduct} product={product} />
      )}
    </Fragment>
  );
}
