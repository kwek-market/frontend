import Content from "@/components/seller/invoice/Content";
import Header from "@/components/seller/invoice/Header";
import React, { Fragment } from "react";

export default function invoice() {
  return (
    <Fragment>
      <Header title={"new invoice"} btn={false} />
      <Content />
    </Fragment>
  );
}
