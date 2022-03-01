import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import useWalletTransaction from "@/hooks/useWalletTransaction";
import { RootState } from "@/store/rootReducer";
import { Input, Select } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { even } from "@/helpers/helper";

const { Option } = Select;

export default function History() {
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const { status, error, data } = useWalletTransaction(token);
  const [history, setHistory] = useState({
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
            value={history.search}
            onChange={(e) =>
              setHistory((prev) => ({ ...prev, search: e.target.value }))
            }
          />
        </div>
        <div className="tw-flex-[2] tw-flex tw-gap-2 tw-ml-2">
          <Select
            value={history.sort}
            placeholder="Sort:Most Recent"
            onChange={(e) => setHistory((prev) => ({ ...prev, sort: e }))}
            size="large"
            className="tw-rounded-md tw-w-full"
          >
            <Option value="most recent">Most Recent</Option>
          </Select>
          <Select
            value={history.filter}
            placeholder="Filter:None"
            onChange={(e) => setHistory((prev) => ({ ...prev, filter: e }))}
            size="large"
            className="tw-w-full tw-ml-2"
          >
            <Option value="successful">Successful</Option>
          </Select>
        </div>
      </div>
      <div className="tw-mt-4">
        {status === "loading" && <Load />}
        {status === "error" && <ErrorInfo error={"An error occurred"} />}
        <table className="tw-table-auto tw-w-full">
          <thead>
            <tr className="tw-border-b tw-border-gray-kwek700">
              <td className="tw-uppercase tw-text-gray-kwek900 tw-font-semibold">
                remarks
              </td>
              <td className="tw-uppercase tw-text-gray-kwek900 tw-font-semibold">
                date
              </td>
              <td className="tw-uppercase tw-text-gray-kwek900 tw-font-semibold">
                amount
              </td>
              <td className="tw-uppercase tw-text-gray-kwek900 tw-font-semibold">
                status
              </td>
              <td className="tw-uppercase tw-text-gray-kwek900 tw-font-semibold">
                balance
              </td>
            </tr>
          </thead>
          <tbody>
            {status === "success" &&
            data !== undefined &&
            data.getSellerWalletTransactions.length > 0
              ? data.getSellerWalletTransactions.map((item, index: number) => (
                  <tr
                    key={item.id}
                    className={`${even(index)} tw-bg-opacity-10`}
                  >
                    <td className="tw-p-3">{item.remark}</td>
                    <td>{dayjs(item.date).format('DD/MM/YYYY')}</td>
                    <td>{item.amount}</td>
                    <td>{item.status}</td>
                    <td>{item.wallet.balance}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </section>
  );
}
