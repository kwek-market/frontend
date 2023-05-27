import React from "react";
import { Table } from "antd";
interface AdminTableProps {
  columns: any[];
  data: any[];
  select?: boolean;
  noPagination?: boolean;
}
const AdminTable = ({
  columns,
  data,
  select,
  noPagination,
}: AdminTableProps) => {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
  };

  return (
    <div className=" tw-full tw-overflow-x-scroll admin-table">
      <Table
        rowSelection={select ? rowSelection : null}
        columns={columns}
        dataSource={data}
        pagination={noPagination ? false : { position: ["bottomRight"] }}
      />
    </div>
  );
};

export default AdminTable;
