import React from "react";
import Head from "next/head";

import  PrivacyPolicy  from'@/components/privacyPolicy/PrivacyPolicy'

import { MainLayout } from '@/layouts';


const Page = function () {
    return (
        <MainLayout title= 'Privacy Policy'>
            <PrivacyPolicy />
        </MainLayout>
    );
};

export default Page;