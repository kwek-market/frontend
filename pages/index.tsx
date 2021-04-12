import Head from "next/head";

import { MainLayout } from "../layouts";
import { Hero } from '../components/home'

const Home = () => {
  return (
    <MainLayout>
      <Hero />
    </MainLayout>
  );
};

export default Home;
