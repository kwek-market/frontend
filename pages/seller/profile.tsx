import { Content } from "@/components/seller";
import { Modal } from "@/components/verification";
import sellerAuth from "@/hooks/sellerAuth";
import ShopLayout from "@/layouts/seller/ShopLayout";
import Header from "@/shared/sellerHeader/Header";
import { RootState } from "@/store/rootReducer";
import { getSellerData } from "@/store/seller/seller.action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = function () {
  const dispatch = useDispatch();
  const { user, seller } = useSelector((state: RootState) => state);

  useEffect(() => {
    user.token && getSellerData(user.token);
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
