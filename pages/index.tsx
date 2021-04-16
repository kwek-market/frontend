import Head from "next/head";

import { MainLayout } from "layouts";
import { Hero, Features, CategoryGrid } from 'components/home'

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <CategoryGrid />
    </MainLayout>
  );
};

export default Home;
