import React from 'react'
import Head from "next/head";

import ExtraInfo from '@/shared/extraInfo/ExtraInfo'
import { ProductHead, ExtraGrid, ProductDesc, MoreCard } from '@/components/product'

import { MainLayout } from "@/layouts";

import { useRouter } from 'next/router'
const Page = () => {

  const router = useRouter();

  const { product } = router.query

  return (
    <MainLayout title={product}>
      <ProductHead />
      <ExtraGrid />
      <ProductDesc />
      <MoreCard title="Similar Items you might Like" />
      <ExtraInfo />
    </MainLayout>
  )
}

export default Page