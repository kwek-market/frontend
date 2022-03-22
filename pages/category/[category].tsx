import React from "react";

import { useRouter } from "next/router";
import Header from "@/shared/categoryHead/Header";
import ExtraInfo from "@/shared/extraInfo/ExtraInfo";

import { GridContainer } from "@/components/category";
import { MainLayout } from "@/layouts";

const Page = function () {
  const router = useRouter();
  const { category } = router.query;

  return (
    <MainLayout title={category}>
      {/* <Header /> */}
      {category && <GridContainer category={category} />}
      <ExtraInfo />
    </MainLayout>
  );
};

export default Page;


