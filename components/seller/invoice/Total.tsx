import React from "react";

export default function Total({ data }) {
  return (
    <div className="tw-mt-12 tw-flex md:tw-flex-row tw-flex-col tw-justify-between">
      <div className="tw-w-full">
        <p className="tw-mb-0 tw-uppercase tw-text-xl tw-font-semibold tw-text-gray-kwek200">
          note
        </p>
        <p>7-day return policy</p>
      </div>
      <div className="tw-w-full tw-py-3">
        <table className="tw-table-auto tw-w-full">
          <tbody>
            <tr>
              <td className="tw-p-3 tw-uppercase tw-text-left tw-font-semibold tw-text-gray-kwek200">
                subtotal:
              </td>
              <td className="tw-text-right tw-p-3">{data.subtotal}</td>
            </tr>
            <tr>
              <td className="tw-p-3 tw-uppercase tw-text-left tw-font-semibold tw-text-gray-kwek200">
                delivery:
              </td>
              <td className="tw-text-right tw-p-3">{data.deliveryFee}</td>
            </tr>
            <tr className="tw-bg-opacity-20 tw-bg-gray-kwek100 ">
              <td className="tw-p-3 tw-uppercase tw-text-left tw-font-semibold tw-text-gray-kwek200">
                total
              </td>
              <td className="tw-text-right tw-p-3">NGN {data.total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
