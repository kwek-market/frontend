import useOrders from "@/hooks/useOrders";
import { RootState } from "@/store/rootReducer";
import React from "react";
import { useSelector } from "react-redux";
import { OpenOrder } from "./index";

const OpenOrders = function ({ setActiveBtn }) {
  const { user } = useSelector((state: RootState) => state);
  const { status, data } = useOrders(user.token);
  console.log(data);
  return (
    <>
      <OpenOrder setActiveBtn={setActiveBtn} />
      <OpenOrder setActiveBtn={setActiveBtn} />
    </>
  );
};

export default OpenOrders;
