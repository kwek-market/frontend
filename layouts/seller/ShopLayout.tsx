import React, { useEffect } from "react";
import { Header } from "@/shared/shop";
import sellerAuth from "@/hooks/sellerAuth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { getCartFunc } from "@/store/cart/cart.actions";
import { getSellerData } from "@/store/seller/seller.action";
import { getUserData } from "@/store/user/user.actions";
import { useAppDispatch } from "../../store";

function ShopLayout({ children }) {
  const dispatch = useAppDispatch();
  const { user } = useSelector((state: RootState) => state);

  useEffect(() => {
    user.token && dispatch(getUserData(user.token));
    user.token && user.user.isSeller && dispatch(getSellerData(user.token));
    user.token && dispatch(getCartFunc(user.token));
  }, []);

  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default sellerAuth(ShopLayout);
