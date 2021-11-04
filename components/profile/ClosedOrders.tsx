import React from "react";
import { ClosedOrder } from "./index";

function ClosedOrders({setActiveBtn}) {
  return (
    <>
      <ClosedOrder setActiveBtn={setActiveBtn} />
    </>
  );
}

export default ClosedOrders;
