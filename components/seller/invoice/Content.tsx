import React, { useState } from "react";
import CustomerDetails from "./CustomerDetails";
import PurchasedItems from "./PurchasedItems";
import StoreDetails from "./StoreDetails";

export default function Content() {
  const [invoice, setInvoice]  = useState({
    
  })
  function submitDetails() {

  }
  return (
    <main className="tw-p-5 md:tw-px-14 lg:tw-px-20 tw-bg-red-300 tw-bg-opacity-10 ">
      <StoreDetails />
      <CustomerDetails />
      <PurchasedItems />
      <div className="tw-flex tw-justify-end tw-mt-8">
        <button className="tw-bg-red-kwek100 tw-text-white-100 tw-capitalize tw-rounded-md tw-p-3" onClick={() => submitDetails()}>
          issue invoice
        </button>
      </div>
    </main>
  );
}
