import React from 'react';
import Head from 'next/head';

import { CartEmpty } from '@/components/cart';

import ExtraInfo from '@/shared/extraInfo/ExtraInfo';
import { MainLayout } from '@/layouts';

const Page = function () {
  return (
    <MainLayout title="Cart">
      <CartEmpty />
      <ExtraInfo />
    </MainLayout>
  );
};

export default Page;
