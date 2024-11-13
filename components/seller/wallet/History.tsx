import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import { userFetcher } from "@/helpers";
import { even } from "@/helpers/helper";
import useWalletTransaction from "@/hooks/useWalletTransaction";
import { WalletHistory } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import { GET_SELLER_TRANSACTIONS } from "@/store/seller/seller.queries";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";

export default function History() {
  const token = useSelector((state: RootState) => state.user?.token);
  const queryClient = useQueryClient();
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<WalletHistory[]>([] as WalletHistory[]);
  //TODO: add  sortBy: "-date_created"
  const payload = { token, page: currentPage, pageSize: 20, orderBy: "-date" };
  const { status, error, data } = useWalletTransaction(payload);
  console.log("🚀 ~~ History ~~ data:", data?.getSellerWalletTransactions, currentPage);

  useEffect(() => {
    if (data?.getSellerWalletTransactions.hasNext) {
      queryClient.prefetchQuery("wallet-transaction", () =>
        userFetcher(GET_SELLER_TRANSACTIONS, payload)
      );
    }
    if (data === undefined) return;
    setPageCount(data.getSellerWalletTransactions.pages);
    setCurrentItems(data.getSellerWalletTransactions.objects);
    // console.log(`current page: ${currentPage}`);
    return () => {
      queryClient.cancelQueries("wallet-transaction");
    };
  }, [queryClient, currentPage, data]);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <section className=''>
      {/* <Top history={history} setHistory={setHistory}   /> */}
      <div className='tw-mt-4 tw-overflow-x-scroll'>
        {status === "loading" && <Load />}
        {status === "error" && <ErrorInfo error={"An error occurred"} />}
        <table className='tw-table-auto tw-w-full'>
          <thead>
            <tr className='tw-border-b tw-border-gray-kwek700'>
              <td className='tw-uppercase tw-text-gray-kwek900 tw-font-semibold'>remarks</td>
              <td className='tw-uppercase tw-text-gray-kwek900 tw-font-semibold'>date</td>
              <td className='tw-uppercase tw-text-gray-kwek900 tw-font-semibold'>amount</td>
              <td className='tw-uppercase tw-text-gray-kwek900 tw-font-semibold'>status</td>
              <td className='tw-uppercase tw-text-gray-kwek900 tw-font-semibold'>balance</td>
            </tr>
          </thead>
          <tbody>
            {status === "success" && currentItems.length > 0
              ? currentItems.map((item, index: number) => (
                  <tr key={item.id} className={`${even(index)} tw-bg-opacity-10`}>
                    <td className='tw-p-3'>{item.remark}</td>
                    <td className='tw-p-3'>{dayjs(item.date).format("DD/MM/YYYY")}</td>
                    <td className='tw-p-3'>NGN {item.amount}</td>
                    <td className='tw-p-3'>
                      {item.status ? (
                        <span className='tw-border tw-border-green-success tw-rounded-md tw-text-green-success'>
                          Successful
                        </span>
                      ) : (
                        <span className='tw-border tw-border-error tw-rounded-md tw-text-error tw-px-3 tw-py-1'>
                          Failed
                        </span>
                      )}
                    </td>
                    <td className='tw-p-3'>NGN {item.wallet.balance}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
        <div className='tw-mt-4'>
          <ReactPaginate
            nextLabel='next >'
            onPageChange={e => handlePageClick(e)}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel='< previous'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            breakLabel='...'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            containerClassName='pagination'
            activeClassName='active'
            renderOnZeroPageCount={undefined}
          />
        </div>
      </div>
    </section>
  );
}
