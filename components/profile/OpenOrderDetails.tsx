import React from "react";
import Details from "./Details";

function OpenOrderDetails() {
  return (
    <div className="tw-p-2 md:tw-p-5 tw-absolute tw-top-0 tw-right-0 tw-left-0 tw-bottom-0 tw-z-20 tw-bg-white-100">
      <div className="tw-border-b tw-border-gray-500 tw-border-opacity-50">
        <h4 className="tw-text-black-stock tw-font-semibold tw-text-base md:tw-text-xl lg:tw-text-3xl">
          <i className="fas fa-arrow-left" />
          order details
        </h4>
      </div>
      <div className="tw-flex tw-flex-row tw-justify-between">
        <div>
          <p>Order No. KWK 12089473284</p>
          <p>Placed on: </p>
          <p>Total:</p>
        </div>
        <div>
          <p>4 items</p>
          <p>12-09-2021</p>
          <p>NGN 13,209</p>
        </div>
      </div>
      <div>
        <div>
          <p className="tw-underline tw-border-b tw-text-red-kwek100 tw-uppercase">
            items (3)
          </p>
        </div>
        <div>
          <Details />
        </div>
      </div>
    </div>
  );
}

export default OpenOrderDetails;
