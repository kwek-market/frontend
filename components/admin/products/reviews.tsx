import { useGetReviews } from "@/hooks/admin/review";
import { RootState } from "@/store/rootReducer";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const Reviews = ({ reviews }) => {
  const { user: { token }} = useSelector((state: RootState) => state);
  const { data, isFetching } = useGetReviews({
    page: 1,
    pageSize: 10,
    token: token,
    sortBy: "",
  });

  console.log("data reviews: ", reviews);

  return (
    <div className=" tw-font-poppins">
      {reviews.map(() => (
          <div className=" tw-flex tw-gap-x-[10px] tw-pb-4 tw-border-b tw-border-b-review last:tw-border-none tw-pt-4 first:tw-pt-0">
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
              <p className="tw-mb-0 tw-font-semibold ">James Afuye</p>
              <p className="tw-mb-0 tw-pt-[6px] tw-text-[#BFA5A3] tw-text-xs">
                November 9, 2020 at 3:20 pm
              </p>
              <p className=" tw-pt-3 tw-text-[#574240] tw-font-light">
                Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
                sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
                justo. Suspendisse potenti. Sed egestas, ante et vulputate
                volutpat, eros pede semper est, vitae luctus metus libero eu
                augue. Morbi purus libero, faucibus adipiscing, commodo quis,
                avida id, est. Sed lectus. Praesent elementum hendrerit tortor.
                Sed semper lorem at felis. Vestibulum volutpat.
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Reviews;
