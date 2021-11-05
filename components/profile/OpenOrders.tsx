import React from "react";
import { OpenOrder } from "./index";

function OpenOrders({setActiveBtn}) {
  return (
    <>
      <OpenOrder setActiveBtn={setActiveBtn} />
      <OpenOrder setActiveBtn={setActiveBtn} />
    </>
  );
}

export default OpenOrders;
