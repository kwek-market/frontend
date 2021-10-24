import React from "react";
import {
  HeroSection,
  FeatureSection,
  Use,
  Stats
} from "@/components/sellerLanding";

function index() {
  return (
    <React.Fragment>
      <HeroSection />
      <Stats />
      <FeatureSection />
      <Use />
    </React.Fragment>
  );
}

export default index;
