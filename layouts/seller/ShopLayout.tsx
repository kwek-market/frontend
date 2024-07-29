import React, { useEffect } from "react";
import { Header } from "@/shared/shop";
import sellerAuth from "@/hooks/sellerAuth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { getCartFunc } from "@/store/cart/cart.actions";
import { getSellerData } from "@/store/seller/seller.action";
import { getUserData } from "@/store/user/user.actions";

function ShopLayout({ children }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state);

  useEffect(() => {
    user.token && getUserData(user.token)(dispatch);
    user.token && user.user.isSeller && getSellerData(user.token)(dispatch);
    user.token && getCartFunc(user.token)(dispatch);
  }, []);

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default sellerAuth(ShopLayout);
