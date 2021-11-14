import React from 'react';
import Head from 'next/head';

import { CartGrid } from '@/components/cart';

import ExtraInfo from '@/shared/extraInfo/ExtraInfo';
import { MainLayout } from '@/layouts';

const Page = function () {
  return (
    <MainLayout title="Cart">
      <CartGrid />
      <ExtraInfo />
    </MainLayout>
  );
};

export default Page;
