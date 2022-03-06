import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import { userFetcher } from "@/helpers";
import useReviewCard from "@/hooks/useReviewCards";
import useReviews from "@/hooks/useReviews";
import { PagePayload, SellerReview } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import { GET_SELLER_REVIEW } from "@/store/seller/seller.queries";
import dayjs from "dayjs";
import React, { Fragment, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import Card from "../home/Card";
import ReactPaginate from "react-paginate";
import ReviewItem from "./ReviewItem";

export default function Review() {
  const queryClient = useQueryClient();
  const [sort, setSort] = useState("recent");
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<SellerReview[]>(
    [] as SellerReview[]
  );
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const payload = {
    token,
    page: currentPage,
    pageSize: 20,
    sortBy: sort,
  };
  const {
    status: reviewStatus,
    data: reviewData,
    error: reviewError,
  } = useReviews(payload);
  const {
    "0": { data: salesData, status: salesStatus, error: salesError },
    "1": { data: qualityData, status: qualityStatus, error: qualityError },
    "2": { data: rateData, status: rateStatus, error: rateError },
  } = useReviewCard(token, false);
  const {
    "0": { data: saleData, status: saleStatus, error: saleError },
  } = useReviewCard(token, true);

  useEffect(() => {
    queryClient.fetchQuery(["reviews", payload]);
  }, [sort]);

  useEffect(() => {
    if (reviewData?.getSellerReview.hasNext) {
      queryClient.prefetchQuery(["reviews", payload], () =>
        userFetcher(GET_SELLER_REVIEW, payload)
      );
    }
    if (reviewData === undefined) return;
    setPageCount(reviewData.getSellerReview.pages);
    setCurrentItems(reviewData.getSellerReview.objects);
    // console.log(`current page: ${currentPage}`);
    return () => {
      queryClient.cancelQueries(["reviews", payload]);
    };
  }, [queryClient, currentPage, reviewData]);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

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
            <Card
              name={"successful sales"}
              num={salesData.getSellerSuccessfulSales}
              content={`NGN ${saleData.getSellerSuccessfulSales}`}
            />
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
              content={`${qualityData.getSellerProductQuality}%`}
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
              content={`NGN ${rateData.getSellerDeliveryRate}%`}
            />
          )}
        </Fragment>
        {/* <Card name={"communication"} num={"0"} content="NGN 0" /> */}
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
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="-date_created">recent</option>
              <option value="date_created">oldest</option>
              <option value="rating">raing:low to high</option>
              <option value="-rating">rating:high to low</option>
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
          currentItems.length > 0 ? (
            currentItems.map((review) => (
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
    </section>
  );
}
