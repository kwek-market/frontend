import { RootState } from "@/store/rootReducer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function index() {
  const dispatch = useDispatch();
  const seller = useSelector((state: RootState) => state.seller);
  return <div></div>;
}

export default index;
