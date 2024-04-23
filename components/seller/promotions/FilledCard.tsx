import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import usePromotions from "@/hooks/usePromotions";
import { RootState } from "@/store/rootReducer";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../home/Card";

export default function FilledCard() {
  const { user } = useSelector((state: RootState) => state);
  const { status, data, error } = usePromotions(user.token);
  return (
    <div className="tw-border tw-border-gray-kwek700 tw-rounded-sm tw-p-3 tw-mt-5">
      <div className="tw-flex tw-justify-between tw-items-center tw-border-b tw-border-gray-kwek700 tw-pb-2 tw-bg-[#fcfafa]">
        <p className="tw-font-semibold tw-text-lg tw-text-gray-kwek900 tw-capitalize">
          Analytics
        </p>
        <label>
          {" "}
          showing{" "}
          <select className="" value="" onChange={() => null}>
            <option>all time</option>
          </select>
        </label>
      </div>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-5 tw-mt-4">
        {status === "loading" && <Load />}
        {status === "error" && (
          <ErrorInfo error={(error as { message: string }).message} />
        )}
        {status === "success" && data !== undefined && (
          <Fragment>
            <Card
              name={"reach"}
              num={
                (data as Record<string, any>)?.getSellerPromotedProducts[0]
                  .promo[0].reach
              }
              content={
                (data as Record<string, any>)?.getSellerPromotedProducts[0]
                  .promo[0].reach
              }
              imgSrc="/svg/team.svg"
              imgAlt="team"
            />
            <Card
              name={"link clicks"}
              num={
                (data as Record<string, any>)?.getSellerPromotedProducts[0]
                  .promo[0].linkClicks
              }
              content={
                (data as Record<string, any>)?.getSellerPromotedProducts[0]
                  .promo[0].linkClicks
              }
              imgSrc="/svg/click.svg"
              imgAlt="clicks"
            />
            <Card
              name={"amount"}
              num={
                (data as Record<string, any>)?.getSellerPromotedProducts[0]
                  .promo[0].amount
              }
              content={
                (data as Record<string, any>)?.getSellerPromotedProducts[0]
                  .promo[0].amount
              }
              imgSrc="/svg/money-bag.svg"
              imgAlt="money-bag"
            />
          </Fragment>
        )}
      </div>
    </div>
  );
}
