import React from 'react'
// import Head from "next/head";

import Header from '@/shared/categoryHead/Header'
import ExtraInfo from '@/shared/extraInfo/ExtraInfo'

import { GridContainer } from '@/components/category'
import { MainLayout } from "@/layouts";

import { useRouter } from 'next/router'

const Page = () => {

  const router = useRouter();

  const { category } = router.query

  return (
    <MainLayout title={category}>
      <Header />
      <GridContainer />
      <ExtraInfo />
    </MainLayout>
  )
}

export default Page