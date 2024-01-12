import Load from "@/components/Loader/Loader";
import moment from "moment";
import Image from "next/image";
import React from "react";

const Reviews = ({ getProductReviews }: { getProductReviews: any }) => {
  return (
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
                  "MMMM D, YYYY [at] h:mm a",
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
  );
};

export default Reviews;
