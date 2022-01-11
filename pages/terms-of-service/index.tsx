import React from "react";
import Head from "next/head";

import  TermsOfService  from'@/components/termsOfService/TermsOfService'

import { MainLayout } from '@/layouts';


const Page = function () {
    return (
        <MainLayout title= 'Terms Of Service'>
            <TermsOfService />
        </MainLayout>
    );
};

export default Page;