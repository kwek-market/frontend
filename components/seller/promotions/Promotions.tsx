import EmptyInfo from "@/components/Loader/EmptyInfo";
import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import usePromotions from "@/hooks/usePromotions";
import { RootState } from "@/store/rootReducer";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Filled from "./Filled";

export default function Promotions() {
  const { user } = useSelector((state: RootState) => state);
  const { status, data, error } = usePromotions(user.token);

  return (
    <Fragment>
      {status === "loading" && <Load />}
      {status === "error" && (
        <ErrorInfo error={(error as { message: string }).message} />
      )}
      {status === "success" &&
      data !== undefined &&
      data.getSellerPromotedProducts.length === 0 ? (
        <EmptyInfo
          title={"promotions"}
          desc={"you currently have no promotions"}
          link={"Go to products tab to promote products"}
        />
      ) : (
        <Filled />
      )}
    </Fragment>
  );
}
