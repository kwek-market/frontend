import React from "react";
import {
  HeroSection,
  FeatureSection,
  Use,
  Stats,
} from "@/components/sellerLanding";
import { Footer } from "@/shared";
import SellerLandingHead from "@/components/sellerLanding/head";
import SellerLandingBody from "@/components/sellerLanding/body";

function index() {
  return (
    <>
      <SellerLandingHead />
      <SellerLandingBody />
      {/* <HeroSection />
      <Stats />
      <FeatureSection />
      <Use /> */}
      <Footer />
    </>
  );
}

export default index;
