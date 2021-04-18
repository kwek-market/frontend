import Head from "next/head";

import { MainLayout } from "@/layouts";
import { Hero, Features, CategoryGrid, Brands } from '@/components/home'

const Home = () => {
  const cards = [1, 2, 3];
  const banners = [1, 2];

  return (
    <MainLayout>
      <Hero />
      <Features />
      <CategoryGrid title="Deals Of The day" timer={true} cards={cards} />
      <CategoryGrid title="Computer & Electronics" sidebar={true} banners={banners} />
      <CategoryGrid title="Clothing & Apparel" sidebar={true} banners={banners} />
      <Brands />
    </MainLayout>
  );
};

export default Home;
