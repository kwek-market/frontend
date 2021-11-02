import React from "react";
import Badge from "../badge/Badge";
import Button from "../buttons/Button";

function Details() {
  function cancelItem() {}

  function trackItem() {}

  return (
    <div className="tw-border tw-border-gray-kwek700 tw-rounded-sm tw-p-2 tw-flex tw-flex-row tw-justify-between">
      <div className="tw-flex tw-flex-row">
        <div>
          <img src="/images/order.png" alt="order" />
        </div>
        <div className="tw-ml-2">
          <h5 className="tw-capitalize">Men’s Winter Wool Jackets - Brown</h5>
          <span>Delivered between 04 June and 06 June</span>
          <div>
            <Button
              buttonStyle={
                "tw-p-2 tw-bg-red-kwek100 tw-text-white-100 tw-rounded-sm tw-border tw-border-red-kwek100"
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
          </div>
        </div>
      </div>
      <div className="">
        <div>
          <Badge
            badgeStyle={"tw-p-1 tw-bg-yellow-filled"}
            text={"order in progress"}
          />
          <Badge badgeStyle={"tw-p-1 tw-bg-green-success"} text={"delivered"} />
        </div>
        <div>
          <span className="tw-uppercase">qty:1</span>
          <span className="tw-uppercase">NGN 3000</span>
        </div>
      </div>
    </div>
  );
}

export default Details;
