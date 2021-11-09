import React from "react";

function AddressCard({}) {
  return (
    <div className="tw-bg-white-100 tw-rounded-lg tw-p-3 tw-shadow-lg">
      <div className="tw-flex tw-flex-row tw-justify-between">
        <h4 className="tw-font-semibold tw-text-base tw-text-black-stock">
          Address
        </h4>
        <span>
          <i className="fas fa-pen tw-text-black-stock tw-pr-5 tw-cursor-pointer" />
          <i className="fas fa-trash tw-text-error tw-cursor-pointer" />
        </span>
      </div>
      <div className="tw-text-base tw-text-gray-kwek200 tw-font-normal tw-opacity-70">
        <h6 className="tw-text-base tw-text-gray-kwek200 tw-font-normal tw-opacity-70">
          Alison Eyo
        </h6>
        <h6 className="tw-text-base tw-text-gray-kwek200 tw-font-normal tw-opacity-70">
          Suite 5, OGB Plaza, Obafemi Awolowo Way, Utako, Abuja.
        </h6>
        <h6 className="tw-text-base tw-text-gray-kwek200 tw-font-normal tw-opacity-70">
          +234 812 345 6789
        </h6>
      </div>
    </div>
  );
}

export default AddressCard;
