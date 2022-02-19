import React from "react";
import { CartEmpty, CartGrid } from "@/components/cart";
import ExtraInfo from "@/shared/extraInfo/ExtraInfo";
import { MainLayout } from "@/layouts";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import Load from "@/components/Loader/Loader";
import ErrorInfo from "@/components/Loader/ErrorInfo";

const Page = function () {
  const { cart } = useSelector((state: RootState) => state);

  const isLoading = cart.loading && <Load />;

  const hasError = cart.error && <ErrorInfo error={cart.error} />;

  const hasCart =
    Array.isArray(cart.cart) && cart.cart.length ? <CartGrid /> : <CartEmpty />;

  return (
    <MainLayout title="Cart">
      {isLoading}
      {hasError}
      {hasCart}
      <ExtraInfo />
    </MainLayout>
  );
};

export default Page;
