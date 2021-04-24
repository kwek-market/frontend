import React from 'react'
import Head from "next/head";

import CategoryDesc from '@/shared/categoryDesc/CategoryDesc'
import ExtraInfo from '@/shared/extraInfo/ExtraInfo'
import List from '@/components/wishlist/List'

import { MainLayout } from "@/layouts";

const Page = () => {
  return (
    <MainLayout>
      <CategoryDesc title="Wishlist" />
      <List />
      <ExtraInfo />
    </MainLayout>
  )
}

export default Page