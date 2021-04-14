import React from 'react';
import {MainLayout} from '../../layouts';
import { HeroSection, FeatureSection } from '../../components/sellerLanding'

function index() {
  return (
    <MainLayout>
     <HeroSection /> 
     <FeatureSection />
    </MainLayout>
  )
}

export default index
