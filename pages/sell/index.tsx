import React from "react";
import {
  HeroSection,
  FeatureSection,
  Use,
  Stats
} from "@/components/sellerLanding";
import { Footer } from "@/shared";

function index() {
  return (
    <React.Fragment>
      <HeroSection />
      <Stats />
      <FeatureSection />
      <Use />
      <Footer />
    </React.Fragment>
  );
}

export default index;
