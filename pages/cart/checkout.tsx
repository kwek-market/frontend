import React from "react";

import { CheckGrid } from "@/components/cart";

import ExtraInfo from "@/shared/extraInfo/ExtraInfo";
import { MainLayout } from "@/layouts";

const Page = function () {
  return (
    <MainLayout title="Cart">
      <CheckGrid />
      <ExtraInfo />
    </MainLayout>
  );
};

export default Page;
