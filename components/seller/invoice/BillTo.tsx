import dayjs from "dayjs";
import React, { Fragment } from "react";
import { v4 } from "uuid";

export default function BillTo({ data }) {
  return (
    <Fragment>
      <div className="tw-flex md:tw-flex-row tw-flex-col tw-justify-between tw-items-center tw-my-4">
        <article className="tw-w-full">
          <h2 className="tw-font-semibold tw-uppercase tw-text-gray-kwek200 md:tw-text-2xl tw-text-lg tw-mb-0">
            bill to:
          </h2>
          <p className="tw-font-normal tw-text-lg tw-text-opacity-70 tw-text-gray-kwek200 tw-mb-0">
            {data.customerName}
          </p>
          <p className="tw-font-normal tw-text-lg tw-text-opacity-70 tw-text-gray-kwek200 tw-mb-0">
            {data.customerAddress}
          </p>
          <p className="tw-font-normal tw-text-lg tw-text-opacity-70 tw-text-gray-kwek200 tw-mb-0">
            {data.customerEmail}
          </p>
        </article>
        <div className="tw-w-full tw-py-3">
          <table className="tw-table-auto tw-w-full">
            <tbody>
              <tr>
                <td className="tw-p-3 tw-uppercase tw-text-left tw-font-semibold tw-text-gray-kwek200">
                  invoice no:
                </td>
                <td className="tw-text-right">{data.invoiceNumber}</td>
              </tr>
              <tr>
                <td className="tw-p-3 tw-uppercase tw-text-left tw-font-semibold tw-text-gray-kwek200">
                  issue date:
                </td>
                <td className="tw-text-right">
                  {dayjs(data.issueDate).format("DD/MM/YYYY")}
                </td>
              </tr>
              <tr className="tw-bg-opacity-20 tw-bg-gray-kwek100 ">
                <td className="tw-p-3 tw-uppercase tw-text-left tw-font-semibold tw-text-gray-kwek200">
                  amount due
                </td>
                <td className="tw-text-right">NGN {data.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="tw-mt-12 tw-mb-12 tw-overflow-auto">
        <table className="tw-table-auto tw-w-full">
          <thead>
            <tr className="tw-bg-opacity-20 tw-bg-gray-kwek100">
              <td className="tw-p-2 tw-capitalize tw-font-semibold tw-text-gray-kwek200 tw-text-xl">
                item
              </td>
              <td className="tw-p-2 tw-capitalize tw-font-semibold tw-text-gray-kwek200 tw-text-xl">
                description
              </td>
              <td className="tw-p-2 tw-capitalize tw-font-semibold tw-text-gray-kwek200 tw-text-xl">
                quantity
              </td>
              <td className="tw-p-2 tw-capitalize tw-font-semibold tw-text-gray-kwek200 tw-text-xl">
                unit cost
              </td>
              <td className="tw-p-2 tw-capitalize tw-font-semibold tw-text-gray-kwek200 tw-text-xl">
                total
              </td>
            </tr>
          </thead>
          <tbody>
            {data.purchasedItem.map((item) => (
              <tr key={v4()} className="tw-border-b tw-border-gray-kwek700">
                <td className="tw-p-3 tw-capitalize">{item.item}</td>
                <td className="tw-p-3 tw-capitalize">{item.description}</td>
                <td className="tw-p-3">{item.quantity}</td>
                <td className="tw-p-3">{item.unitCost}</td>
                <td className="tw-p-3">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
