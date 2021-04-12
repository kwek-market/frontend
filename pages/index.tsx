import Head from "next/head";

import { MainLayout } from "../layouts";
import { Hero, Features } from '../components/home'

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
    </MainLayout>
  );
};

export default Home;
