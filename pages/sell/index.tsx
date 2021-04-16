import React from 'react';
import {MainLayout} from '../../layouts';
import { HeroSection, FeatureSection, Use } from '../../components/sellerLanding'

function index() {
  return (
    <MainLayout>
     <HeroSection /> 
     <FeatureSection />
     <Use />
    </MainLayout>
  )
}

export default index
