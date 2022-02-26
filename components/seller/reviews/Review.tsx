import React from "react";
import Card from "../home/Card";
import ReviewItem from "./ReviewItem";

export default function Review({ data }) {
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
        <Card name={"successful sales"} num={"0"} content="NGN 0" />
        <Card name={"product quality"} num={"0"} content="0%" />
        <Card name={"delivery rate"} num={"0"} content="NGN 0" />
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
          {data !== undefined && data.length === 0 ? (
            <ReviewItem
              name={"James Afuye"}
              date={"22/09/2022"}
              reviewBody={"Some very long note"}
              sellerPic={undefined}
            />
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
