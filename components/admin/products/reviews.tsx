import Load from "@/components/Loader/Loader";
import TableNav from "@/components/table/table-nav";
import { useGetProductReviews } from "@/hooks/admin/products";
import moment from "moment";
import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";

interface Prop {
  productId: string;
  setReviewsCount: React.Dispatch<React.SetStateAction<number>>;
}

const Reviews = ({ productId, setReviewsCount }: Prop) => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const getProductReviews = useGetProductReviews({
    page: page,
    pageSize: pageSize,
    productId: productId,
    sortBy: "id",
  });

  useEffect(() => {
    setReviewsCount(getProductReviews?.data?.reviews?.objects?.length);
  }, [getProductReviews.isFetching]);

  const getPage = (event) => {
    setPage(event.target.textContent as number);
  };

  const getPrev = (event) => {
    setPage(page - 1);
  };
  const getNext = (event) => {
    setPage(page + 1);
  };
  return (
    <>
      <div className=" tw-font-poppins">
        {getProductReviews?.isFetching ? (
          <Load />
        ) : (
          getProductReviews?.data?.reviews?.objects?.map((review: any) => (
            <div
              key={review.id}
              className=" tw-flex tw-gap-x-[10px] tw-pb-4 tw-border-b tw-border-b-review last:tw-border-none tw-pt-4 first:tw-pt-0"
            >
              <div className=" tw-flex-shrink-0">
                <Image
                  src={"/images/pp.png"}
                  alt="reviwp"
                  className="  tw-rounded-full tw-overflow-hidden "
                  height={40}
                  width={40}
                />
              </div>
              <div>
                <p className="tw-mb-0 tw-font-semibold ">
                  {review?.user?.fullName}
                </p>
                <p className="tw-mb-0 tw-pt-[6px] tw-text-[#BFA5A3] tw-text-xs">
                  {moment(new Date(review?.ratedAt)).format(
                    "MMMM D, YYYY [at] h:mm a"
                  )}
                </p>
                <p className=" tw-pt-3 tw-text-[#574240] tw-font-light">
                  {review.review}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      {(getProductReviews?.data?.reviews?.hasNext as boolean) && (
        <TableNav
          page={getProductReviews?.data?.reviews?.page}
          numberOfPages={getProductReviews?.data?.reviews?.pages}
          dataLength={getProductReviews?.data?.reviews?.objects?.length}
          getNext={getNext}
          getPrev={getPrev}
          getPage={getPage}
        />
      )}
    </>
  );
};

export default Reviews;
