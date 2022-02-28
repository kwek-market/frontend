import React from "react";
import { RootState } from "@/store/rootReducer";
import { useSelector } from "react-redux";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import Total from "./Total";

export type InvoiceProps = {
  element: React.MutableRefObject<any>;
};

export default function Invoice({ element }) {
  const { user } = useSelector((state: RootState) => state);

  return (
    <main
      ref={element}
      className="tw-p-9 md:tw-px-14 lg:tw-px-20 tw-bg-red-300 tw-bg-opacity-10 "
    >
      <section className="tw-px-4 tw-bg-white-100 tw-border tw-border-gray-kwek700 tw-rounded-md tw-py-14 tw-mb-20">
        <BillFrom />
        <BillTo />
        <Total />
      </section>
    </main>
  );
}
