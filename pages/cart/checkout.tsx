import React from 'react'
import Head from "next/head";


import { CheckGrid } from '@/components/cart'

import ExtraInfo from '@/shared/extraInfo/ExtraInfo'
import { MainLayout } from "@/layouts";

const Page = () => {
  return (
    <MainLayout title="Cart">
      <CheckGrid />
      <ExtraInfo />
    </MainLayout>
  )
}

export default Page