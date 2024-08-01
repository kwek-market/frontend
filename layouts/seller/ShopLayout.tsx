import sellerAuth from "@/hooks/sellerAuth";
import { Header } from "@/shared/shop";
import { getCartFunc } from "@/store/cart/cart.actions";
import { RootState } from "@/store/rootReducer";
import { getSellerData } from "@/store/seller/seller.action";
import { getUserData } from "@/store/user/user.actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ShopLayout({ children }) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

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
