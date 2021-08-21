import React from "react";
import { useRouter } from "next/router";
import ExtraInfo from "@/shared/extraInfo/ExtraInfo";
import {
  ProductHead,
  ExtraGrid,
  ProductDesc,
  MoreCard,
} from "@/components/product";
import { MainLayout } from "@/layouts";

const Page = () => {
  const router = useRouter();

  const { product } = router.query;

  return (
    <MainLayout title={product}>
      <ProductHead />
      <ExtraGrid />
      <ProductDesc />
      <MoreCard title="Similar Items you might Like" />
      <ExtraInfo />
    </MainLayout>
  );
};

export default Page;
