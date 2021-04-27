import React from 'react'
import Head from "next/head";

import CategoryDesc from '@/shared/categoryDesc/CategoryDesc'

import { CartEmpty } from '@/components/cart'

import ExtraInfo from '@/shared/extraInfo/ExtraInfo'
import { MainLayout } from "@/layouts";

const Page = () => {
  return (
    <MainLayout>
      <CategoryDesc title="Cart" />
      <CartEmpty />
      <ExtraInfo />
    </MainLayout>
  )
}

export default Page