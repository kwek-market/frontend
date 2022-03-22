import { Input, Select } from "antd";
import React from "react";

const { Option } = Select;

type TopProps = {
  history: {
    search: string;
    sort: string;
    filter: string;
  };
  setHistory: React.Dispatch<
    React.SetStateAction<{
      search: string;
      sort: string;
      filter: string;
    }>
  >;
};

export function Top({ history, setHistory }: TopProps) {
  return (
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
  );
}
