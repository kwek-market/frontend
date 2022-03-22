import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import { userFetcher } from "@/helpers";
import useSellerOrders from "@/hooks/useSellerOrders";
import { OrderList } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import { GET_SELLER_ORDERS } from "@/store/seller/seller.queries";
import React, { Fragment, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { OrdersEmpty, OrdersFilled } from ".";

export default function Order() {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const queryClient = useQueryClient();
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<OrderList[]>(
    [] as OrderList[]
  );
  const [filter, setFilter] = useState<string>("-clicks");
  const payload = {
    token,
    page: currentPage,
    pageSize: 20,
    thisMonth: false,
  };
  const {
    status: ordersStatus,
    data: ordersData,
    error: ordersError,
  } = useSellerOrders(payload);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    queryClient.fetchQuery(["sellerOrders", payload]);
  }, [filter]);

  useEffect(() => {
    if (ordersData?.getSellerOrders.hasNext) {
      // console.log("has more");
      queryClient.prefetchQuery(["sellerOrders", payload], () =>
        userFetcher(GET_SELLER_ORDERS, payload)
      );
    }
    if (ordersData === undefined) return;
    setPageCount(ordersData.getSellerOrders.pages);
    setCurrentItems(ordersData.getSellerOrders.objects);
    // console.log(`current page: ${currentPage}`);
    return () => {
      queryClient.cancelQueries(["sellerOrders", payload]);
    };
  }, [ordersData, currentPage, queryClient, filter]);

  return (
    <Fragment>
      {ordersStatus === "loading" && <Load />}
      {ordersStatus === "error" && (
        <ErrorInfo error={(ordersError as { message: string }).message} />
      )}
      {ordersStatus === "success" &&
      ordersData !== undefined &&
      currentItems.length > 0 ? (
        <OrdersFilled
          orders={currentItems}
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          filter={filter}
          setFilter={setFilter}
        />
      ) : (
        <OrdersEmpty />
      )}
    </Fragment>
  );
}
