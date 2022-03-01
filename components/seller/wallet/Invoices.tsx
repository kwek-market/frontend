import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import useInvoice from "@/hooks/useInvoice";
import { RootState } from "@/store/rootReducer";
import { Input, Select } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { even } from "@/helpers/helper";

const { Option } = Select;

export default function Invoices() {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const {
    data: invoiceData,
    error: invoiceError,
    status: invoiceStatus,
  } = useInvoice(token);
  const [invoice, setInvoice] = useState({
    search: "",
    sort: "",
    filter: "",
  });

  return (
    <section className="">
      <div className="tw-flex md:tw-flex-row tw-flex-col tw-justify-between">
        <div className="tw-flex-[3]">
          <Input.Search
            placeholder="Search transaction history"
            size="large"
            className="tw-rounded-md"
            value={invoice.search}
            onChange={(e) =>
              setInvoice((prev) => ({ ...prev, search: e.target.value }))
            }
          />
        </div>
        <div className="tw-flex-[2] tw-flex tw-gap-2 tw-ml-2">
          <Select
            value={invoice.sort}
            placeholder="Sort:Most Recent"
            onChange={(e) => setInvoice((prev) => ({ ...prev, sort: e }))}
            size="large"
            className="tw-rounded-md tw-w-full"
          >
            <Option value="most recent">Most Recent</Option>
          </Select>
          <Select
            value={invoice.filter}
            placeholder="Filter:None"
            onChange={(e) => setInvoice((prev) => ({ ...prev, filter: e }))}
            size="large"
            className="tw-w-full tw-ml-2"
          >
            <Option value="successful">Successful</Option>
          </Select>
        </div>
      </div>
      <div className="tw-mt-4">
        {invoiceStatus === "loading" && <Load />}
        {invoiceStatus === "error" && <ErrorInfo error={"An error occurred"} />}
        <table className="tw-table-auto tw-w-full">
          <thead>
            <tr className="tw-border-b tw-border-gray-kwek700">
              <td className="tw-uppercase tw-text-gray-kwek900 tw-font-semibold">
                issued to
              </td>
              <td className="tw-uppercase tw-text-gray-kwek900 tw-font-semibold">
                email
              </td>
              <td className="tw-uppercase tw-text-gray-kwek900 tw-font-semibold">
                invoice no.
              </td>
              <td className="tw-uppercase tw-text-gray-kwek900 tw-font-semibold">
                date issued
              </td>
            </tr>
          </thead>
          <tbody>
            {invoiceStatus === "success" &&
            invoiceData !== undefined &&
            invoiceData.getSellerInvoices.length > 0
              ? invoiceData.getSellerInvoices.map((item, index: number) => (
                  <tr
                    key={item.id}
                    className={`${even(index)} tw-bg-opacity-10`}
                  >
                    <td className="tw-p-3">{item.customerName}</td>
                    <td>{item.customerEmail}</td>
                    <td>{item.invoiceNumber}</td>
                    <td>{dayjs(item.issueDate).format("DD/MM/YYYY")}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </section>
  );
}
