import React from "react";
import Head from "next/head";

import  SellerPolicy  from'@/components/sellerPolicy/SellerPolicy'

import { MainLayout } from '@/layouts';


const Page = function () {
    return (
        <MainLayout title= 'Seller Policy'>
            <SellerPolicy />
        </MainLayout>
    );
};

export default Page;