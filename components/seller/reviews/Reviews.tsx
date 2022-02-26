import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import useReviews from "@/hooks/useReviews";
import { RootState } from "@/store/rootReducer";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Review from "./Review";

export default function Reviews() {
  const { user } = useSelector((state: RootState) => state);
  const { status, data, error } = useReviews(user.token);
  console.log(data);

  return (
    <Fragment>
      {status === "loading" && <Load />}
      {status === "error" && (
        <ErrorInfo error={(error as { message: string }).message} />
      )}
      {data !==undefined && <Review data={data.getSellerReview} />}
    </Fragment>
  );
}
