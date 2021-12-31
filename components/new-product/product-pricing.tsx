import React from "react";

function ProductPricing() {
  return (
    <div className="tw-pt-3 tw-px-5 tw-pb-20 tw-mb-5 tw-bg-white-100 tw-rounded-md">
      <div className="tw-p-3 tw-border-b tw-border-grey-kwek700">
        <p className="tw-font-semibold tw-capitalize tw-text-lg tw-mb-0">
          product pricing & tax
        </p>
      </div>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-3 tw-mt-3">
        <label className="tw-text-base tw-font-medium tw-capitalize">
          {" "}
          Price{""}
          <span className="tw-text-red-kwek100 tw-text-sm tw-italic tw-font-normal">
            (Minimum commission charged per item is NGN200)
          </span>{" "}
          <br />
          <input
            type="number"
            placeholder="0"
            className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
          />
        </label>

        <label className="tw-text-base tw-font-medium tw-capitalize">
          {" "}
          Discounted Price{""}
          <span className="tw-text-red-kwek100 tw-text-sm tw-italic tw-font-normal">
            (Optional)
          </span>{" "}
          <br />
          <input
            type="number"
            placeholder="0"
            className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
          />
        </label>

        <label className="tw-text-base tw-font-medium tw-capitalize">
          {" "}
          charge 5%<span className="tw-uppercase">VAT</span> on this item <br />
          <select className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2">
            <option defaultValue="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        <label className="tw-text-base tw-font-medium tw-capitalize">
          {" "}
          Available Quantity
          <br />
          <input
            type="number"
            placeholder="How many units of this item are available?"
            className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
          />
        </label>
      </div>
      <div className="tw-flex">
        <p>Total price (VAT inclusive) </p>
        <p>NGN 3,120</p>
      </div>
    </div>
  );
}

export default ProductPricing;
