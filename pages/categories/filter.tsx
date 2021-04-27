import React from 'react'
import Head from "next/head";

import Header from '@/shared/categoryHead/Header'
import ExtraInfo from '@/shared/extraInfo/ExtraInfo'

import { FilterCategory } from '@/components/categories'
import { MainLayout } from "@/layouts";

const Page = () => {
  return (
    <MainLayout>
      <Header />
      <FilterCategory sidebar={true} />
      <ExtraInfo />
    </MainLayout>
  )
}

export default Page