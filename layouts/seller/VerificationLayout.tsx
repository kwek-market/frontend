import React, { useEffect } from "react";
import { Header } from "@/shared/verification";
import sellerAuth from "@/hooks/sellerAuth";
import { getCartFunc } from "@/store/cart/cart.actions";
import { RootState } from "@/store/rootReducer";
import { getSellerData } from "@/store/seller/seller.action";
import { getUserData } from "@/store/user/user.actions";
import { useDispatch, useSelector } from "react-redux";

function VerificationLayout({ children }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state);

  useEffect(() => {
    user.token && getUserData(user.token)(dispatch);
    user.token && user.user.isSeller && getSellerData(user.token)(dispatch);
    user.token && getCartFunc(user.token)(dispatch);
  }, []);

  return (
    <div className="tw-bg-primary tw-h-screen">
      <Header />
      <div className="tw-px-5 md:tw-px-14 tw-py-5">{children}</div>
    </div>
  );
}

export default sellerAuth(VerificationLayout);
