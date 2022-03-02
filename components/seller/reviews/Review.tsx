import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import useReviewCard from "@/hooks/useReviewCards";
import useReviews from "@/hooks/useReviews";
import { RootState } from "@/store/rootReducer";
import dayjs from "dayjs";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../home/Card";
import ReviewItem from "./ReviewItem";

export default function Review() {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const {
    status: reviewStatus,
    data: reviewData,
    error: reviewError,
  } = useReviews(token);
  const {
    "0": { data: salesData, status: salesStatus, error: salesError },
    "1": { data: qualityData, status: qualityStatus, error: qualityError },
    "2": { data: rateData, status: rateStatus, error: rateError },
  } = useReviewCard(token);
  console.log(salesData, qualityData, rateData);

  return (
    <section className="tw-mt-4 tw-p-4 tw-bg-white-100 tw-shadow-md tw-border tw-border-gray-kwek700 tw-rounded-md">
      <div className="tw-border-b tw-border-gray-kwek700 tw-pb-1.5">
        <h1 className="tw-font-semibold tw-text-lg tw-text-gray-kwek900 tw-capitalize">
          Reviews
        </h1>
        <h4 className="tw-font-medium tw-text-base tw-text-gray-kwek900 tw-uppercase">
          store performance
        </h4>
      </div>
      <div className="tw-mt-3 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-3">
        <Fragment>
          {salesStatus === "loading" && <Load />}
          {salesStatus === "error" && (
            <ErrorInfo error={(salesError as { message: string }).message} />
          )}
          {salesStatus === "success" && salesData !== undefined && (
            <Card name={"successful sales"} num={"0"} content="NGN 0" />
          )}
        </Fragment>
        <Fragment>
          {qualityStatus === "loading" && <Load />}
          {qualityStatus === "error" && (
            <ErrorInfo error={(qualityError as { message: string }).message} />
          )}
          {qualityStatus === "success" && qualityData !== undefined && (
            <Card
              name={"product quality"}
              num={`${qualityData.getSellerProductQuality}%`}
              content="0%"
            />
          )}
        </Fragment>
        <Fragment>
          {rateStatus === "loading" && <Load />}
          {rateStatus === "error" && (
            <ErrorInfo error={(rateError as { message: string }).message} />
          )}
          {rateStatus === "success" && rateData !== undefined && (
            <Card
              name={"delivery rate"}
              num={`${rateData.getSellerDeliveryRate}%`}
              content="NGN 0"
            />
          )}
        </Fragment>
        <Card name={"communication"} num={"0"} content="NGN 0" />
      </div>
      <div className="tw-mt-4">
        <div className="tw-flex tw-justify-between tw-items-center tw-border-b tw-border-gray-kwek700 tw-pb-2">
          <p className="tw-font-medium tw-text-base tw-text-gray-kwek900 tw-uppercase">
            product reviews
          </p>
          <label>
            {" "}
            sort by{" "}
            <select
              placeholder="All time"
              className=""
              value=""
              onChange={() => null}
            >
              <option>Recent</option>
            </select>
          </label>
        </div>
        <div>
          {reviewStatus === "loading" && <Load />}
          {reviewStatus === "error" && (
            <ErrorInfo error={(reviewError as { message: string }).message} />
          )}
          {reviewStatus === "success" &&
          reviewData !== undefined &&
          reviewData.getSellerReview.length > 0 ? (
            reviewData.getSellerReview.map((review) => (
              <ReviewItem
                key={review.id}
                name={review.user.firstName + " " + review.user.lastName}
                date={dayjs(review.ratedAt).format("DD/MM/YYYY")}
                reviewBody={review.review}
                rating={review.rating}
                sellerPic={undefined}
              />
            ))
          ) : (
            <div className="tw-flex tw-justify-center tw-items-center tw-p-3 tw-h-52">
              <h1 className="tw-font-semibold tw-text-lg tw-text-gray-kwek900">
                You currently have no reviews
              </h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
