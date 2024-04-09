import { Table } from "antd";
import { useRouter } from "next/router";
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
  const router = useRouter();

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
  };

  const getPage = event => {
    if (goToPage) goToPage(Number(event.target.textContent));
  };

  return (
    <div className='tw-full tw-overflow-x-scroll admin-table'>
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
          getNext={() => goToNext()}
          getPrev={() => goToPrev()}
          getPage={getPage}
        />
      )}
    </div>
  );
};

export default AdminTable;

//  pages?: number[];
