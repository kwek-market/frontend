import React from 'react';
import Details from './Details';
import Payment from './Payment';

const OpenOrderDetails = function ({ setActiveBtn }) {
  return (
    <div className="tw-p-2 md:tw-p-5 tw-bg-white-100">
      <div className="tw-border-b tw-border-gray-500 tw-border-opacity-50">
        <h4 className="tw-text-black-stock tw-font-semibold tw-text-base md:tw-text-xl lg:tw-text-3xl tw-capitalize">
          <i className="fas fa-arrow-left tw-mr-2" onClick={() => setActiveBtn('My Orders')} />
          order details
        </h4>
      </div>
      <table className="tw-table-fixed tw-w-full">
        <tbody>
          <tr className="">
            <td className="tw-text-left tw-font-semibold tw-text-base lg:tw-text-xl tw-text-black-stock tw-w-2/4">
              Order No. KWK 12089473284
            </td>
            <td className="tw-text-right tw-font-normal tw-text-sm md:tw-text-base tw-text-black-stock tw-w-2/4">
              4 items
            </td>
          </tr>
          <tr>
            <td className="tw-text-left tw-font-medium tw-text-base tw-text-black-stock tw-w-2/4">Placed on:</td>
            <td className="tw-text-right tw-font-normal tw-text-sm md:tw-text-base tw-text-black-stock tw-w-2/4">
              12-09-2021
            </td>
          </tr>
          <tr>
            <td className="tw-text-left tw-font-medium tw-text-base tw-text-black-stock tw-w-2/4">Total:</td>
            <td className="tw-text-right tw-font-normal tw-text-sm md:tw-text-base tw-text-black-stock tw-w-2/4">
              NGN 13,209
            </td>
          </tr>
        </tbody>
      </table>
      <div className="tw-mt-4">
        <div className="">
          <span className="tw-border-b tw-border-red-kwek100 tw-text-red-kwek100 tw-uppercase tw-pb-3">items (3)</span>
        </div>
        <div className="tw-mt-3">
          <Details show />
        </div>
      </div>
      <div className="tw-mt-6 tw-flex md:tw-flex-row tw-flex-col tw-gap-2">
        <Payment />
      </div>
    </div>
  );
};

export default OpenOrderDetails;
