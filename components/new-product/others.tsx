import React from "react";

function Others() {
  return (
    <>
      <div className="tw-pt-3 tw-px-5 tw-pb-20 tw-mb-5 tw-bg-white-100 tw-rounded-md">
        <div className="tw-p-3 tw-border-b tw-border-grey-kwek700">
          <p className="tw-font-semibold tw-capitalize tw-text-lg tw-mb-0">
            other options
          </p>
        </div>
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-3 tw-mt-3">
          <label className="tw-text-base tw-font-medium tw-capitalize">
            {" "}
            return policy <br />
            <select className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2">
              <option defaultValue="">no return policy</option>
            </select>
          </label>

          <label className="tw-text-base tw-font-medium tw-capitalize">
            {" "}
            warranty <br />
            <select className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2">
              <option defaultValue="">No warranty</option>
            </select>
          </label>
        </div>
      </div>

      <div className="tw-pt-3 tw-px-5 tw-pb-20 tw-bg-white-100 tw-rounded-md">
        <div className="tw-p-3 tw-border-b tw-border-grey-kwek700">
          <p className="tw-font-semibold tw-capitalize tw-text-lg tw-mb-0">
            search engine optimization
          </p>
        </div>
        <div className="tw-gap-3 tw-mt-3">
          <label className="tw-text-base tw-font-medium tw-capitalize">
            {" "}
            Keywords (SEO meta tags describes your store to search engine.
            Separate each tag with comma (,)) <br />
            <input
              type="text"
              className="tw-w-full tw-rounded-md tw-border-gray-kwek100 tw-border-1 tw-mt-2"
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default Others;
