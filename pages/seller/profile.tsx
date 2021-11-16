import React, { useEffect } from "react";
import Head from "next/head";

import ExtraInfo from "@/shared/extraInfo/ExtraInfo";

import Header from "@/shared/sellerHeader/Header";
import { CategoryGrid } from "@/components/seller";

import { MainLayout } from "@/layouts";
import { RootState } from "@/store/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { getSellerData } from "@/store/seller/seller.action";

const Page = function () {
  const dispatch = useDispatch();
  const { user, seller } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getSellerData(user.token));
  }, []);

  return (
    <MainLayout>
      <Header />
      <CategoryGrid />
      <ExtraInfo />
    </MainLayout>
  );
};

export default Page;
