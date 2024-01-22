import React from "react";
import { Table } from "antd";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { generatePagesArray } from "@/helpers/helper";

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

  const pagesArr = generatePagesArray(5, page, numberOfPages);

  return (
    <div className="tw-full tw-overflow-x-scroll admin-table">
      <Table
        rowSelection={select ? rowSelection : null}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      {data?.length > 0 && (
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-m-2">
          <p className="tw-order-2 md:tw-order-1 tw-m-3">
            Showing results: {page != null ? page : 1} - {data?.length} of{" "}
            {numberOfPages}
          </p>

          <div className="tw-order-1 md:tw-order-2 tw-flex tw-justify-between tw-items-center tw-gap-1">
            <ArrowLeftIcon
              onClick={page > 1 ? getPrev : null}
              width={25}
              height={25}
              className="tw-p-0.5 hover:tw-opacity-50 focus:tw-opacity-50"
            />
            <div className="tw-flex tw-justify-between tw-align-center tw-gap-1">
              {(pagesArr?.length > 0 ? pagesArr : [1]).map((aPage, index) => (
                <button
                  key={index}
                  className={
                    aPage == page
                      ? `tw-px-4 tw-py-2 tw-border-[1px] tw-border-transparent tw-rounded-[0.625rem] tw-bg-[#AF1328] tw-text-white-400`
                      : `tw-px-4 tw-py-2 tw-border-[1px] tw-border-transparent tw-rounded-[0.625rem] tw-bg-white-100 tw-text-black-kwek100`
                  }
                  disabled={aPage == page}
                  onClick={getPage}
                >
                  {aPage}
                </button>
              ))}
            </div>
            <ArrowRightIcon
              onClick={page < numberOfPages ? getNext : null}
              width={25}
              height={25}
              className="tw-p-0.5 hover:tw-opacity-50 focus:tw-opacity-50"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTable;

//  pages?: number[];
