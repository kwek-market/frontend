import { UploadProductProps } from "@/interfaces/commonTypes";
import React from "react";

function ProductDetails({
  submitDetails,
  setSubmitDetails,
}: UploadProductProps) {
  return (
    <div className="tw-pt-3 tw-px-5 tw-pb-20 tw-mb-5 tw-bg-white-100 tw-rounded-md">
      <div className="tw-p-3 tw-border-b tw-border-grey-kwek700">
        <p className="tw-font-semibold tw-capitalize tw-text-lg tw-mb-0">
          product details
        </p>
      </div>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-3 tw-mt-3">
        <label className="tw-text-base tw-font-medium tw-capitalize tw-self-end">
          {" "}
          Brand{" "}
          <span className="tw-text-red-kwek100 tw-text-sm tw-italic tw-font-normal">
            (For unbranded items, use the hyphen - sign)
          </span>{" "}
          <br />
          <input
            type="text"
            placeholder="e.g promasidor, gucci"
            required
            className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
            value={submitDetails.brand}
            onChange={(e) =>
              setSubmitDetails({
                ...submitDetails,
                brand: e.target.value,
              })
            }
          />
        </label>

        <label className="tw-text-base tw-font-medium tw-capitalize tw-self-end">
          {" "}
          Product weight (kg) <br />
          <input
            type="text"
            placeholder="e.g 70"
            required
            className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
            value={submitDetails.productWeight}
            onChange={(e) =>
              setSubmitDetails({
                ...submitDetails,
                productWeight: e.target.value,
              })
            }
          />
        </label>
      </div>
      <div className="tw-mt-3">
        <label className="tw-text-base tw-font-medium tw-capitalize">
          {" "}
          Product title{" "}
          <span className="tw-text-red-kwek100 tw-text-sm tw-italic tw-font-normal tw-pt-1">
            (Do not add the brand name here)
          </span>{" "}
          <br />
          <input
            type="text"
            placeholder="what is the name of this item?"
            className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
            value={submitDetails.productTitle}
            onChange={(e) =>
              setSubmitDetails({
                ...submitDetails,
                productTitle: e.target.value,
              })
            }
          />
        </label>

        <label className="tw-text-base tw-font-medium tw-capitalize tw-pt-3">
          {" "}
          short description <br />
          <textarea
            rows={4}
            required
            placeholder="Hint: Input product Highlights/Features in bullets. Not more than 200 Characters"
            className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
            value={submitDetails.shortDescription}
            onChange={(e) =>
              setSubmitDetails({
                ...submitDetails,
                shortDescription: e.target.value,
              })
            }
          ></textarea>
        </label>
      </div>
    </div>
  );
}

export default ProductDetails;
