import React from "react";

function ProductCategory() {
  return (
    <div className="tw-pt-3 tw-px-5 tw-pb-20 tw-mb-5 tw-bg-white-100 tw-rounded-md">
      <div className="tw-flex tw-justify-between tw-p-3 tw-border-b tw-border-grey-kwek700">
        <p className="tw-font-semibold tw-capitalize tw-text-lg tw-mb-0">
          product category
        </p>
        <p className="tw-mb-0">click here to see category tree</p>
      </div>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-3 tw-mt-3">
        <label className="tw-text-base tw-font-medium tw-capitalize">
          {" "}
          Main Category <br />
          <select className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2">
            <option defaultValue="">select main category</option>
          </select>
        </label>

        <label className="tw-text-base tw-font-medium tw-capitalize">
          {" "}
          sub Category <br />
          <select className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2">
            <option defaultValue="">select sub category</option>
          </select>
        </label>

        <label className="tw-text-base tw-font-medium tw-capitalize">
          {" "}
          Main Category <br />
          <select className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2">
            <option defaultValue="">select main category</option>
          </select>
        </label>

        <label className="tw-text-base tw-font-medium tw-capitalize">
          {" "}
          sub Category <br />
          <select className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2">
            <option defaultValue="">select sub category</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default ProductCategory;
