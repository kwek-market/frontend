import React from "react";
import {
  HeroSection,
  FeatureSection,
  Use,
  Stats,
} from "@/components/sellerLanding";
import { Footer } from "@/shared";
import Link from "next/dist/client/link";
import SellerLandingHead from "@/components/sellerLanding/head";
import SellerLandingBody from "@/components/sellerLanding/body";

function index() {
  return (
    <>
      {/* <HeroSection />
      <Stats />
      <FeatureSection />
      <Use /> */}

      <SellerLandingHead />
      <SellerLandingBody />
      <Footer />
    </>
  );
}

export default index;
