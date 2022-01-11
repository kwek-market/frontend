import React from "react";
import Head from "next/head";

import  BuyerPolicy  from'@/components/buyerPolicy/BuyerPolicy'

import { MainLayout } from '@/layouts';


const Page = function () {
    return (
        <MainLayout title= 'Buyer Policy'>
            <BuyerPolicy />
        </MainLayout>
    );
};

export default Page;