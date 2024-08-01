import React, { Fragment } from "react";

import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import useSellerInvoice from "@/hooks/useSellerInvoice";
import { RootState } from "@/store/rootReducer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import Total from "./Total";

export type InvoiceProps = {
  element: React.MutableRefObject<any>;
};

export default function Invoice({ element }) {
  const token = useSelector((state: RootState) => state?.user.token);
  const router = useRouter();
  const { invoice } = router.query;

  const { status, data, error } = useSellerInvoice(invoice as string, token);

  return (
    <main id='invoice' className='tw-p-9 md:tw-px-14 lg:tw-px-20 tw-bg-red-300 tw-bg-opacity-10 '>
      <section
        ref={element}
        className='tw-px-4 tw-bg-white-100 tw-border tw-border-gray-kwek700 tw-rounded-md tw-py-14 tw-mb-20'
      >
        {status === "loading" && <Load />}
        {status === "error" && <ErrorInfo error={(error as any).message} />}
        {status === "success" && data !== undefined && (
          <Fragment>
            <BillFrom data={data.getSellerInvoice} />
            <BillTo data={data.getSellerInvoice} />
            <Total data={data.getSellerInvoice} />
          </Fragment>
        )}
      </section>
    </main>
  );
}
