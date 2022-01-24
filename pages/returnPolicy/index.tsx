import React from "react";
import Head from "next/head";

import  ReturnPolicy  from'@/components/returnPolicy/ReturnPolicy'

import { MainLayout } from '@/layouts';


const Page = function () {
    return (
        <MainLayout title= 'Return Policy'>
            <ReturnPolicy />
        </MainLayout>
    );
};

export default Page;