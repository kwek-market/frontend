import React from 'react'
import Head from "next/head";

import CategoryDesc from '@/shared/categoryDesc/CategoryDesc'

import { CartGrid } from '@/components/cart'

import ExtraInfo from '@/shared/extraInfo/ExtraInfo'
import { MainLayout } from "@/layouts";

const Page = () => {
  return (
    <MainLayout>
      <CategoryDesc title="Cart" />
      <CartGrid />
      <ExtraInfo />
    </MainLayout>
  )
}

export default Page