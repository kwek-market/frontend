import { UploadProductProps } from "@/interfaces/commonTypes";
import React, { useState } from "react";

function ProductPricing({
  submitDetails,
  setSubmitDetails,
}: UploadProductProps) {
  const [tax, setTax] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setTax(e.target.value);
    setSubmitDetails({
      ...submitDetails,
      chargeFivePercentVat: (() => {
        if (e.target.value.toLowerCase().trim() === "yes") {
          return true;
        } else if (e.target.value.toLowerCase().trim() === "no") {
          return false;
        } else {
          return true;
        }
      })(),
    });
  }

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
          charge 5%<span className="tw-uppercase">VAT</span> on this item <br />
          <select
            placeholder="charge 5% VAT?"
            required
            className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
            value={tax}
            onChange={(e) => handleChange(e)}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        {/* <div className="tw-flex tw-justify-between tw-items-end">
          <p className="tw-font-medium tw-text-base tw-text-gray-kwek200 tw-mb-0">
            Total price (VAT inclusive){" "}
          </p>
          <p className="tw-font-semibold tw-text-lg md:tw-text-[1.9rem] tw-text-gray-kwek200 tw-mb-0">
            NGN 3,120
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default ProductPricing;
