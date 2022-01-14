import React from "react";
import Head from "next/head";

import { CartEmpty, CartGrid } from "@/components/cart";

import ExtraInfo from "@/shared/extraInfo/ExtraInfo";
import { MainLayout } from "@/layouts";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";

const Page = function () {
  const { user, cart } = useSelector((state: RootState) => state);

  const isLoading = cart.loading && (
    <div className="text-center">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  const hasError = cart.error && (
    <div className="text-center">
      <p className="text-danger">{cart.error}</p>
    </div>
  );

  const hasCart =
    cart.cart && cart.cart.length > 0 ? <CartGrid /> : <CartEmpty />;

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
