import React from 'react';
import Head from 'next/head';

import ExtraInfo from '@/shared/extraInfo/ExtraInfo';

import Header from '@/shared/sellerHeader/Header';
import { FilterCategory } from '@/components/seller';

import { MainLayout } from '@/layouts';

const Page = function () {
  return (
    <MainLayout>
      <Header />
      <FilterCategory sidebar />
      <ExtraInfo />
    </MainLayout>
  );
};

export default Page;
