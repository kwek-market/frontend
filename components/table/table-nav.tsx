import { generatePagesArray } from "@/helpers/helper";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

interface Prop {
  page: number;
  dataLength: number;
  numberOfPages: number;
  getPage: (event) => void;
  getPrev: (event) => void;
  getNext: (event) => void;
}
const TableNav = ({
  page,
  numberOfPages,
  dataLength,
  getPage,
  getPrev,
  getNext,
}: Prop) => {
  const pagesArr = generatePagesArray(5, page, numberOfPages);

  return (
    <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-m-2">
      <p className="tw-order-2 md:tw-order-1 tw-m-3">
        Showing results: {page != null ? page : 1} - {dataLength} of{" "}
        {numberOfPages}
      </p>

      <div className="tw-order-1 md:tw-order-2 tw-flex tw-justify-between tw-items-center tw-gap-1">
        <ArrowLeftIcon
          onClick={page > 1 ? getPrev : null}
          width={45}
          height={25}
          className="tw-p-0.5 hover:tw-opacity-50 focus:tw-opacity-50 tw-cursor-pointer"
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
          width={45}
          height={25}
          className="tw-p-0.5 hover:tw-opacity-50 focus:tw-opacity-50 tw-cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TableNav;
