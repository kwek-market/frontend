import Header from "@/components/seller/invoice/Header";
import Invoice from "@/components/seller/invoice/Invoice";
import React, { Fragment, useRef } from "react";

export default function invoice() {
  const invoicePdf = useRef(null);

  return (
    <Fragment>
      <Header title={"invoice"} btn={true} element={invoicePdf} />
      <Invoice element={invoicePdf} />
    </Fragment>
  );
}
