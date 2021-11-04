import React from "react";
import Badge from "../badge/Badge";
import Button from "../buttons/Button";

function Details({ show }) {
  function cancelItem() {}

  function trackItem() {}

  function statusHistory() {}

  return (
    <div className="tw-border tw-border-gray-kwek700 tw-bg-opacity-50 tw-rounded-lg tw-p-2 tw-flex tw-flex-row tw-justify-between">
      <div className="tw-flex md:tw-flex-row tw-flex-col">
        <div>
          <img src="/images/order.png" alt="order" className="tw-rounded-md" />
        </div>
        <div className="tw-ml-0 md:tw-ml-2 tw-flex tw-flex-col tw-justify-between">
          <h5 className="tw-capitalize tw-font-medium tw-text-base md:tw-text-lg tw-text-gray-kwek200">
            Men’s Winter Wool Jackets - Brown
          </h5>
          {show && (
            <span className="tw-opacity-90 tw-font-medium tw-text-black-stock tw-text-sm">
              Delivered between 04 June and 06 June
            </span>
          )}
          {show && (
            <div className="tw-flex tw-flex-row tw-justify-between">
              <Button
                buttonStyle={
                  "tw-p-2 tw-bg-red-kwek100 tw-text-white-100 tw-rounded-sm tw-border tw-border-red-kwek100 hover:tw-opacity-50"
                }
                text={"Cancel Item"}
                cmd={cancelItem}
              />
              <Button
                buttonStyle={
                  "tw-p-2 tw-text-red-kwek100 tw-border tw-border-red-kwek100 tw-rounded-sm"
                }
                text={"Track Item"}
                cmd={trackItem}
              />
              {/* <Button
              buttonStyle={
                "tw-p-2 tw-text-red-kwek100 tw-border tw-border-red-kwek100 tw-rounded-sm"
              }
              text={"See Status History"}
              cmd={statusHistory}
            /> */}
            </div>
          )}
        </div>
      </div>
      <div className="tw-flex tw-flex-col md:tw-justify-between tw-items-end tw-p-0 md:tw-p-3">
        {show && (
          <div className="tw-flex tw-justify-between">
            {/* <Badge
            badgeStyle={"tw-p-1 tw-bg-yellow-filled tw-center tw-uppercase tw-text-white-100 tw-text-xs tw-font-semibold"}
            text={"order in progress"}
          /> */}
            <Badge
              badgeStyle={
                "tw-p-1 tw-bg-green-success tw-center tw-uppercase tw-text-white-100 tw-text-xs tw-font-semibold"
              }
              text={"delivered"}
            />
          </div>
        )}
        <div className="tw-flex tw-flex-col tw-justify-between tw-items-end">
          <span className="tw-uppercase tw-opacity-60 tw-text-black-stock tw-text-base tw-font-normal">
            qty:1
          </span>
          <span className="tw-uppercase tw-text-black-stock tw-font-medium tw-text-lg">
            NGN 3000
          </span>
        </div>
      </div>
    </div>
  );
}

export default Details;
