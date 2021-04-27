import React from 'react'
import Head from "next/head";

import CategoryDesc from '@/shared/categoryDesc/CategoryDesc'
import ExtraInfo from '@/shared/extraInfo/ExtraInfo'
import { ProductHead, ExtraGrid, ProductDesc, MoreCard } from '@/components/product'

import { MainLayout } from "@/layouts";

const Page = () => {
  return (
    <MainLayout>
      <CategoryDesc title="Fashion" />
      <ProductHead />
      <ExtraGrid />
      <ProductDesc />
      <MoreCard title="Similar Items you might Like" />
      <ExtraInfo />
    </MainLayout>
  )
}

export default Page