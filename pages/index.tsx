import Head from "next/head";
import { useEffect, memo } from "react";
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";
import { MainLayout } from "@/layouts";
import { Hero, Features, CategoryGrid, Brands } from "@/components/home";
// import { userFetcherWithAuth } from '@/helpers'

import MobileSearchBar from "@/shared/header/MobileSearchBar";
import { useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { Spin } from "antd";
import { v4 as uuid } from "uuid";
// import { GET_USER } from '@/store/user/user.queries'

const Home = function ({ cookies }) {
  const { product } = useSelector((state: RootState) => state);
  const cards = [1, 2, 3];
  const banners = [1, 2];

  useEffect(() => {
    console.log(cookies);
  }, []);

  return (
    <MainLayout>
      <MobileSearchBar />
      <Hero />
      <Features />
      {/* <CategoryGrid title="Deals Of The day" timer cards={cards} /> */}
      <CategoryGrid
        title="Computer Electronics and Accessories"
        sidebar
        banners={banners}
      />
      <CategoryGrid title="Kwek Fashion and Style" sidebar banners={banners} />
      <Brands />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);

  return {
    props: {
      cookies,
    },
  };
};

export default memo(Home);
