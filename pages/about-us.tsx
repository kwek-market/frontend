import React from "react";
import Head from "next/head";

import  AboutUs  from'@/components/aboutUs/AboutUs'

import { MainLayout } from '@/layouts';


const Page = function () {
    return (
        <MainLayout title= 'About Us'>
            <AboutUs />
        </MainLayout>
    );
};

export default Page;