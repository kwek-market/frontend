import useCreateInvoice from "@/hooks/useCreateInvoice";
import { InvoiceDetails } from "@/interfaces/commonTypes";
import { RootState } from "@/store/rootReducer";
import { message } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { QueryClient } from "react-query";
import { useSelector } from "react-redux";
import CustomerDetails from "./CustomerDetails";
import PurchasedItems from "./PurchasedItems";
import StoreDetails from "./StoreDetails";

export default function Content() {
  const router = useRouter();
  const {
    user: { token },
  } = useSelector((state: RootState) => state);
  const { mutate, isLoading } = useCreateInvoice();
  const queryClient = new QueryClient();
  const [invoice, setInvoice] = useState<InvoiceDetails>({
    customerAddress: "",
    customerEmail: "",
    customerName: "",
    deliveryFee: 200,
    note: "",
    purchasedItem: [],
    subtotal: 400,
    token,
    total: 500,
  });

  function submitDetails() {
    const {
      customerAddress,
      customerEmail,
      customerName,
      deliveryFee,
      note,
      purchasedItem,
      subtotal,
      token,
      total,
    } = invoice;
    if (customerAddress === "")
      return message.error("Please enter the customer address");
    if (customerName === "")
      return message.error("Please enter the customer name");
    if (customerEmail === "")
      return message.error("Please enter the customer email");
    if (purchasedItem.length === 0)
      return message.error("Please enter the purchased items");
    const payload = {
      customerAddress,
      customerEmail,
      customerName,
      deliveryFee,
      note,
      purchasedItem,
      subtotal,
      token,
      total,
    };
    mutate(payload, {
      onSuccess: (data) => {
        message.success(data.createInvoice.message);
        queryClient.invalidateQueries(["invoice"]);
        router.push(`/seller/invoice/${data.createInvoice.invoice.id}`);
      },
      onError: (err: { message: string }) => {
        message.error(err.message);
      },
    });
  }

  return (
    <main className="tw-p-5 md:tw-px-14 lg:tw-px-20 tw-bg-red-300 tw-bg-opacity-10 ">
      <StoreDetails />
      <CustomerDetails invoice={invoice} setInvoice={setInvoice} />
      <PurchasedItems invoice={invoice} setInvoice={setInvoice} />
      <div className="tw-flex tw-justify-end tw-mt-8">
        <button
          className="tw-bg-red-kwek100 tw-text-white-100 tw-capitalize tw-rounded-md tw-p-3"
          onClick={() => submitDetails()}
        >
          issue invoice
        </button>
      </div>
    </main>
  );
}
