import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import { userFetcher } from "@/helpers";
import { even } from "@/helpers/helper";
import useInvoice, { Payload } from "@/hooks/useInvoice";
import { InvoiceResult } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import { GET_SELLER_INVOICE } from "@/store/seller/seller.queries";
import dayjs from "dayjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";

export default function Invoices() {
  const token = useSelector((state: RootState) => state.user?.token);
  const queryClient = useQueryClient();
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<InvoiceResult[]>([] as InvoiceResult[]);
  const payload: Payload = { token, page: currentPage, pageSize: 20 };
  const { data: invoiceData, error: invoiceError, status: invoiceStatus } = useInvoice(payload);

  useEffect(() => {
    if (invoiceData?.getSellerInvoices.hasNext) {
      queryClient.prefetchQuery("invoice", () => userFetcher(GET_SELLER_INVOICE, payload));
    }
    if (invoiceData === undefined) return;
    setPageCount(invoiceData.getSellerInvoices.pages);
    setCurrentItems(invoiceData.getSellerInvoices.objects);
    // console.log(`current page: ${currentPage}`);
    return () => {
      queryClient.cancelQueries("invoice");
    };
  }, [queryClient, currentPage, invoiceData]);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <section className=''>
      <div className='tw-mt-4'>
        {invoiceStatus === "loading" && <Load />}
        {invoiceStatus === "error" && (
          <ErrorInfo error={(invoiceError as { message: string }).message} />
        )}
        <table className='tw-table-auto tw-w-full'>
          <thead>
            <tr className='tw-border-b tw-border-gray-kwek700'>
              <td className='tw-uppercase tw-text-gray-kwek900 tw-font-semibold'>issued to</td>
              <td className='tw-uppercase tw-text-gray-kwek900 tw-font-semibold'>email</td>
              <td className='tw-uppercase tw-text-gray-kwek900 tw-font-semibold'>invoice no.</td>
              <td className='tw-uppercase tw-text-gray-kwek900 tw-font-semibold'>date issued</td>
            </tr>
          </thead>
          <tbody>
            {invoiceStatus === "success" && currentItems.length > 0
              ? currentItems.map((item, index: number) => (
                  <tr key={item.id} className={`${even(index)} tw-bg-opacity-10`}>
                    <td className='tw-p-3'>{item.customerName}</td>
                    <td>{item.customerEmail}</td>
                    <td>
                      <Link
                        href={`invoice/${item.id}`}
                        className='tw-underline tw-font-semibold tw-text-gray-kwek900'
                      >
                        {item.invoiceNumber}
                      </Link>
                    </td>
                    <td>{dayjs(item.issueDate).format("DD/MM/YYYY")}</td>
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
