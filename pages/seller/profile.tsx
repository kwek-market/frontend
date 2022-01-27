import React, { useEffect } from "react";
import Header from "@/shared/sellerHeader/Header";
import StoreOptions from '@/shared/StoreOptions/StoreOptions';
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
    <div>
    <ShopLayout />
      <Header />
      <StoreOptions >
      <>
        {seller.seller.sellerIsVerified ? (
          <>
            {/* <Content /> */}
            
          </>
        ) : (
          <>
            <Modal />
          </>
        )}
      </>
     </StoreOptions> 
    {/* </ShopLayout> */}
    </div>
  );
};

export default sellerAuth(Page);
