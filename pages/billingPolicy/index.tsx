import React from "react";
import Head from "next/head";

import  BillingPolicy  from'@/components/billingPolicy/BillingPolicy'

import { MainLayout } from '@/layouts';


const Page = function () {
    return (
        <MainLayout title= 'Billing Policy'>
            <BillingPolicy />
        </MainLayout>
    );
};

export default Page;