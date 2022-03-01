import { InvoiceProps } from "@/interfaces/commonTypes";
import { Input } from "antd";
import React from "react";

export default function CustomerDetails({ invoice, setInvoice }: InvoiceProps) {
  return (
    <section className="tw-mt-5 tw-p-5 tw-bg-white-100 tw-rounded-md tw-border tw-border-gray-kwek700 tw-shadow-sm">
      <div className="tw-flex tw-justify-between tw-border-b tw-border-gray-kwek700">
        <p className="tw-mb-0 tw-text-gray-kwek200 tw-capitalize tw-font-semibold md:tw-text-2xl tw-text-base">
          Customer Details
        </p>
      </div>
      <div className="">
        <div className="tw-flex tw-gap-3 tw-justify-between tw-items-end tw-mt-3">
          <label className="tw-font-medium tw-text-base tw-text-gray-kwek200 tw-capitalize tw-w-full">
            customer name <br />
            <Input
              type="text"
              placeholder="Coco’s Store"
              size="large"
              className="tw-w-full tw-mt-2"
              value={invoice.customerName}
              onChange={(e) =>
                setInvoice((prev) => ({
                  ...prev,
                  customerName: e.target.value,
                }))
              }
            />
          </label>
          <label className="tw-font-medium tw-text-base tw-text-gray-kwek200 tw-capitalize tw-w-full">
            email address <br />
            <Input
              type="text"
              placeholder="cocostore@example.com"
              size="large"
              className="tw-w-full"
              value={invoice.customerEmail}
              onChange={(e) =>
                setInvoice((prev) => ({
                  ...prev,
                  customerEmail: e.target.value,
                }))
              }
            />
          </label>
        </div>
        <div className="tw-mt-3">
          <label className="tw-font-medium tw-text-base tw-text-gray-kwek200 tw-capitalize">
            Customer address <br />
            <Input
              type="text"
              placeholder="150 Elgin Street, Ottawa, Iyana Ipaja, Lagos, Nigeria."
              size="large"
              value={invoice.customerAddress}
              onChange={(e) =>
                setInvoice((prev) => ({
                  ...prev,
                  customerAddress: e.target.value,
                }))
              }
            />
          </label>
        </div>
      </div>
    </section>
  );
}
