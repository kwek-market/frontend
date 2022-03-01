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
  } = useSellerProducts(token);
  const {
    status: ordersStatus,
    data: ordersData,
    error: ordersError,
  } = useSellerOrders(token);
  const {
    "0": { data: salesData, status: salesStatus, error: salesError },
    "1": { data: qualityData, status: qualityStatus, error: qualityError },
    "2": { data: rateData, status: rateStatus, error: rateError },
  } = useReviewCard(token);
  const {
    "0": { data: earningsData, status: earningsStatus, error: earningsError },
    "1": { data: daysData, status: daysStatus, error: daysError },
    "2": {
      data: customersData,
      status: customersStatus,
      error: customersError,
    },
    "3": { data: revenueData, status: revenueStatus, error: revenueError },
  } = useHomeCard(token);
  console.log({
    ordersData,
    productData,
    earningsData,
    daysData,
    customersData,
    salesData,
    rateData,
    revenueData,
  });

  const total = useMemo(() => {
    return ordersData?.getSellerOrders.reduce((a, b) => a + b.profit, 0);
  }, [ordersData]);

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
            ordersData.getSellerOrders.length > 0 ? (
              <Card
                name="order sales"
                content={`NGN ${total}`}
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
                content={`NGN ${earningsData.getSellerSalesEarnings}`}
                num={`NGN ${earningsData.getSellerSalesEarnings}`}
                imgSrc={"/svg/profits.svg"}
                imgAlt={"earnings"}
              />
            )}
          </Fragment>

          <Fragment>
            {customersStatus === "loading" && <Load />}
            {customersStatus === "error" && (
              <ErrorInfo
                error={(customersError as { message: string }).message}
              />
            )}
            {customersStatus === "success" && customersData !== undefined && (
              <Card
                name="customers"
                content={`${customersData.getSellerCustomers ?? 0}`}
                num={customersData.getSellerCustomers ?? 0}
                imgSrc={"/svg/customer-review.svg"}
                imgAlt={"customers"}
              />
            )}
          </Fragment>
        </div>
        <section className="tw-p-2 tw-bg-white-100 tw-mt-3 tw-border tw-border-gray-kwek700 tw-rounded-md">
          <div className="tw-flex tw-justify-between tw-items-center tw-p-3">
            <p className="tw-uppercase tw-text-sm tw-text-gray-kwek900 tw-font-semibold tw-mb-0 tw-flex">
              revenue
              <img
                src="/svg/rise.svg"
                alt="vector"
                className="tw-w-5 tw-h-5 tw-ml-2"
              />
            </p>
            <select className="tw-border-0 tw-py-0 tw-outline-none">
              <option value="this year">This year</option>
            </select>
          </div>
        </section>
      </section>
      <aside>
        <div className="tw-mb-4">
          <ProgressText
            text={"product quality"}
            val={
              qualityData !== undefined && qualityData.getSellerProductQuality
            }
          />
          <ProgressText
            text={"delivery rate"}
            val={rateData !== undefined && rateData.getSellerDeliveryRate}
          />
        </div>
        <div className="tw-grid tw-grid-cols-1 tw-gap-3 tw-mt-4">
          <Fragment>
            {salesStatus === "loading" && <Load />}
            {salesStatus === "error" && (
              <ErrorInfo error={(salesError as { message: string }).message} />
            )}
            {salesStatus === "success" && salesData !== undefined && (
              <Card
                name="successful sales"
                content={salesData.getSellerSuccessfulSales ?? 0}
                num={salesData.getSellerSuccessfulSales ?? 0}
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
                num={daysData.getSellerDaysSelling}
                content={`NGN ${daysData.getSellerDaysSelling}`}
                imgSrc={"/svg/calendar.svg"}
                imgAlt={"days-selling"}
              />
            )}
          </Fragment>
          <Fragment>
            {productStatus === "loading" && <Load />}
            {productStatus === "error" && (
              <ErrorInfo
                error={(productError as { message: string }).message}
              />
            )}
            {productStatus === "success" &&
            productData !== undefined &&
            productData.getSellerProducts.length > 0 ? (
              <Card
                name="products"
                content={productData.getSellerProducts.length}
                num={productData.getSellerProducts.length}
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
      </aside>
    </section>
  );
}
