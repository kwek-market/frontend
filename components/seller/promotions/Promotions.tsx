import EmptyInfo from "@/components/Loader/EmptyInfo";
import ErrorInfo from "@/components/Loader/ErrorInfo";
import Load from "@/components/Loader/Loader";
import usePromotions from "@/hooks/usePromotions";
import { RootState } from "@/store/rootReducer";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Filled from "./Filled";
import FilledHeader from "./FilledHeader";

export default function Promotions() {
  const user = useSelector((state: RootState) => state.user);
  const { status, data, error } = usePromotions(user?.token);

  return (
    <Fragment>
      <div className='tw-mt-4 tw-p-4 tw-bg-white-100 tw-shadow-md tw-border tw-border-gray-kwek700 tw-rounded-md'>
        <FilledHeader />
        {status === "loading" && <Load />}
        {status === "error" && <ErrorInfo error={(error as { message: string }).message} />}
        {status === "success" &&
        data !== undefined &&
        data.getSellerPromotedProducts.length === 0 ? (
          <EmptyInfo
            title={""}
            desc={"you currently have no promotions"}
            link={"Go to products tab to promote products"}
          />
        ) : (
          <Filled />
        )}
      </div>
    </Fragment>
  );
}
