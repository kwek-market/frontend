import Revenue from "./Revenue";
import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import useHomeCard from "@/hooks/useHomeCard";
import useReviewCard from "@/hooks/useReviewCards";
import useSellerOrders from "@/hooks/useSellerOrders";
import useSellerProducts from "@/hooks/useSellerProducts";
import { RootState } from "@/store/rootReducer";
import React, { Fragment, useMemo } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import ProgressText from "./ProgressText";

export default function Home() {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const {
    status: productStatus,
    data: productData,
    error: productError,
  } = useSellerProducts({ token, page: 1, pageSize: 100, sortBy: "-clicks" });
  const {
    status: prodStatus,
    data: prodData,
    error: prodErr,
  } = useSellerProducts({
    token,
    page: 1,
    pageSize: 100,
    thisMonth: true,
    sortBy: "-clicks",
  });
  const {
    status: ordersStatus,
    data: ordersData,
    error: ordersError,
  } = useSellerOrders({ token, thisMonth: false, page: 1, pageSize: 100 });
  const {
    status: ordStatus,
    data: ordData,
    error: ordError,
  } = useSellerOrders({ token, thisMonth: true, page: 1, pageSize: 100 });
  const {
    "0": { data: salesData, status: salesStatus, error: salesError },
    "1": { data: qualityData, status: qualityStatus, error: qualityError },
    "2": { data: rateData, status: rateStatus, error: rateError },
  } = useReviewCard(token, false);
  const {
    "0": { data: saleData, status: saleStatus, error: saleError },
  } = useReviewCard(token, true);
  const {
    "0": { data: earningsData, status: earningsStatus, error: earningsError },
    "1": { data: daysData, status: daysStatus, error: daysError },
    "2": {
      data: customersData,
      status: customersStatus,
      error: customersError,
    },
    "3": { data: revenueData, status: revenueStatus, error: revenueError },
  } = useHomeCard(token, false);
  const {
    "0": { data: earningData, status: earningStatus, error: earningError },
    "2": { data: customerData, status: customerStatus, error: customerError },
  } = useHomeCard(token, true);

  const total = useMemo(() => {
    return (ordersData as Record<string, any>)?.getSellerOrders.objects.reduce(
      (a, b) => a + b.profit,
      0
    );
  }, [ordersData]);

  const thisMonthTotal = useMemo(() => {
    return (ordData as Record<string, any>)?.getSellerOrders.objects.reduce(
      (a, b) => a + b.profit,
      0
    );
  }, [ordData]);

  return (
    <section className="tw-grid tw-grid-cols-1 md:tw-grid-cols-[5fr,2fr] tw-gap-3 tw-my-4">
      <section className="">
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-3">
          <Fragment>
            {ordersStatus === "loading" && <Load />}
            {ordersStatus === "error" && (
              <ErrorInfo error={(ordersError as { message: string }).message} />
            )}
            {ordersStatus === "success" &&
            ordersData !== undefined &&
            (ordersData as Record<string, any>).getSellerOrders.objects.length >
              0 ? (
              <Card
                name="order sales"
                content={`NGN ${thisMonthTotal}`}
                num={`NGN ${total}`}
                imgSrc={"/svg/bag.svg"}
                imgAlt={"order"}
              />
            ) : (
              <Card
                name="order sales"
                content="NGN 0"
                num={"NGN 0"}
                imgSrc={"/svg/bag.svg"}
                imgAlt={"order"}
              />
            )}
          </Fragment>

          <Fragment>
            {earningsStatus === "loading" && <Load />}
            {earningsStatus === "error" && (
              <ErrorInfo
                error={(earningsError as { message: string }).message}
              />
            )}
            {earningsStatus === "success" && earningsData !== undefined && (
              <Card
                name="sales earnings"
                content={`NGN ${
                  (earningData as Record<string, any>)?.getSellerSalesEarnings
                }`}
                num={`NGN ${
                  (earningsData as Record<string, any>)?.getSellerSalesEarnings
                }`}
                imgSrc={"/svg/profits.svg"}
                imgAlt={"earnings"}
              />
            )}
          </Fragment>

          {/* <Fragment>
            {customersStatus === "loading" && <Load />}
            {customersStatus === "error" && (
              <ErrorInfo
                error={(customersError as { message: string }).message}
              />
            )}
            {customersStatus === "success" && customersData !== undefined && (
              <Card
                name="customers"
                content={`${customerData.getSellerCustomers ?? 0}`}
                num={customersData.getSellerCustomers ?? 0}
                imgSrc={"/svg/customer-review.svg"}
                imgAlt={"customers"}
              />
            )}
          </Fragment> */}
        </div>
      </section>
      <aside>
        <div className="tw-mb-4">
          <ProgressText
            text={"product quality"}
            val={
              qualityData !== undefined &&
              (qualityData as Record<string, any>)?.getSellerProductQuality
            }
          />
          <ProgressText
            text={"delivery rate"}
            val={
              rateData !== undefined &&
              (rateData as Record<string, any>)?.getSellerDeliveryRate
            }
          />
        </div>
      </aside>
      <Revenue
        revenue={revenueData}
        status={revenueStatus}
        err={revenueError}
      />
      <div className="tw-grid tw-grid-cols-1 tw-gap-3 tw-mt-3">
        <Fragment>
          {salesStatus === "loading" && <Load />}
          {salesStatus === "error" && (
            <ErrorInfo error={(salesError as { message: string }).message} />
          )}
          {salesStatus === "success" && salesData !== undefined && (
            <Card
              name="successful sales"
              content={
                (saleData as Record<string, any>)?.getSellerSuccessfulSales ?? 0
              }
              num={
                (salesData as Record<string, any>)?.getSellerSuccessfulSales ??
                0
              }
              imgSrc={"/svg/sale.svg"}
              imgAlt={"sales"}
            />
          )}
        </Fragment>
        <Fragment>
          {daysStatus === "loading" && <Load />}
          {daysStatus === "error" && (
            <ErrorInfo error={(daysError as { message: string }).message} />
          )}
          {daysStatus === "success" && daysData !== undefined && (
            <Card
              name="Days selling on Kwek"
              num={(daysData as Record<string, any>)?.getSellerDaysSelling}
              content={`NGN ${
                (daysData as Record<string, any>)?.getSellerDaysSelling
              }`}
              imgSrc={"/svg/calendar.svg"}
              imgAlt={"days-selling"}
            />
          )}
        </Fragment>
        <Fragment>
          {productStatus === "loading" && <Load />}
          {productStatus === "error" && (
            <ErrorInfo error={(productError as { message: string }).message} />
          )}
          {productStatus === "success" &&
          productData !== undefined &&
          (productData as Record<string, any>)?.getSellerProducts.objects
            .length > 0 ? (
            <Card
              name="products"
              content={
                (prodData as Record<string, any>)?.getSellerProducts.objects
                  .length
              }
              num={
                (productData as Record<string, any>)?.getSellerProducts.objects
                  .length
              }
              imgSrc={"/svg/received.svg"}
              imgAlt={"products"}
            />
          ) : (
            <Card
              name="products"
              content={0}
              num={0}
              imgSrc={"/svg/received.svg"}
              imgAlt={"products"}
            />
          )}
        </Fragment>
      </div>
    </section>
  );
}
