import React from 'react'
import Head from "next/head";

import Header from '@/shared/categoryHead/Header'
import ExtraInfo from '@/shared/extraInfo/ExtraInfo'

import { CategoryGrid } from '@/components/categories'
import { MainLayout } from "@/layouts";

const Page = () => {
  return (
    <MainLayout>
      <Header />
      <CategoryGrid />
      <ExtraInfo />
    </MainLayout>
  )
}

export default Page