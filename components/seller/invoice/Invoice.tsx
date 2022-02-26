import React from "react";

export type InvoiceProps = {
  element: React.MutableRefObject<any>;
};

export default function Invoice({ element }) {
  return (
    <main
      ref={element}
      className="tw-p-5 md:tw-px-14 lg:tw-px-20 tw-bg-red-300 tw-bg-opacity-10 "
    >
      Invoice
    </main>
  );
}
