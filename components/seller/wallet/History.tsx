import { Input, Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;

export default function History() {
  const [history, setHistory] = useState({
    search: "",
    sort: "",
    filter: "",
  });

  return (
    <section className="">
      <div className="tw-flex tw-flex-row sm:tw-flex-col tw-justify-between">
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
            <tr className=" tw-bg-gray-kwek700 tw-bg-opacity-10">
              <td className="tw-p-3">remarks</td>
              <td>date</td>
              <td>amount</td>
              <td>status</td>
              <td>balance</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
