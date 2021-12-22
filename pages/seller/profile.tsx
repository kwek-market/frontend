import React, { useEffect } from "react";

import ExtraInfo from "@/shared/extraInfo/ExtraInfo";

import Header from "@/shared/sellerHeader/Header";
import { CategoryGrid } from "@/components/seller";

import { RootState } from "@/store/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { getSellerData } from "@/store/seller/seller.action";
import ShopLayout from "@/layouts/seller/ShopLayout";
import { Modal } from "@/components/verification";
import sellerAuth from "@/hooks/sellerAuth";

const Page = function () {
  const dispatch = useDispatch();
  const { user, seller } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getSellerData(user.token));
  }, []);

  return (
    <ShopLayout>
      <Header />
      <>
        {seller.seller.sellerIsVerified ? (
          <>
            <CategoryGrid />
            <ExtraInfo />
          </>
        ) : (
          <>
            <Modal />
          </>
        )}
      </>
    </ShopLayout>
  );
};

export default Page;
