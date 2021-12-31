import React, { useEffect } from "react";
import Header from "@/shared/sellerHeader/Header";

import { RootState } from "@/store/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { getSellerData } from "@/store/seller/seller.action";
import ShopLayout from "@/layouts/seller/ShopLayout";
import { Modal } from "@/components/verification";
import sellerAuth from "@/hooks/sellerAuth";
import { Content } from "@/components/seller";

const Page = function () {
  const dispatch = useDispatch();
  const { user, seller } = useSelector((state: RootState) => state);

  useEffect(() => {
    user.token && dispatch(getSellerData(user.token));
  }, []);

  return (
    <ShopLayout>
      <Header />
      <>
        {seller.seller.sellerIsVerified ? (
          <>
            <Content />
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

export default sellerAuth(Page);
