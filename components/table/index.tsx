import React from "react";
import { Table } from "antd";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { generatePagesArray } from "@/helpers/helper";
import TableNav from "./table-nav";

interface AdminTableProps {
  columns: any[];
  data: any[];
  select?: boolean;
  numberOfPages?: number;
  page?: number;
  goToPage?: (page: number) => void;
  goToPrev?: () => void;
  goToNext?: () => void;
}
const AdminTable = ({
  columns,
  data,
  select,
  numberOfPages,
  page,
  goToPage,
  goToPrev,
  goToNext,
}: AdminTableProps) => {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
  };

  const getPage = (event) => {
    goToPage(event.target.textContent as number);
  };

  const getPrev = (event) => {
    // console.log("selected prev");
    goToPrev();
  };
  const getNext = (event) => {
    // console.log(`selected Next; ${page} ${numberOfPages}`);
    goToNext();
  };

  return (
    <div className="tw-full tw-overflow-x-scroll admin-table">
      <Table
        rowSelection={select ? rowSelection : null}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      {data?.length > 0 && (
        <TableNav
          page={page}
          numberOfPages={numberOfPages}
          dataLength={data?.length}
          getNext={getNext}
          getPrev={getPrev}
          getPage={getPage}
        />
      )}
    </div>
  );
};

export default AdminTable;

//  pages?: number[];
