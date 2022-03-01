import { RootState } from "@/store/rootReducer";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Review from "./Review";

export default function Reviews() {
  return (
    <Fragment>
      <Review />
    </Fragment>
  );
}
