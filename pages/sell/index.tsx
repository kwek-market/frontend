import React from 'react';
import { HeroSection, FeatureSection, Use, Stats } from '@/components/sellerLanding';
import { Footer } from '@/shared';

function index() {
  return (
    <>
      <HeroSection />
      <Stats />
      <FeatureSection />
      <Use />
      <Footer />
    </>
  );
}

export default index;
