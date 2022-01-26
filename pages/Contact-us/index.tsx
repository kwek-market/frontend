import React from "react";
import Head from "next/head";

import  ContactUs  from '@/components/contactUs/ContactUs'

import { MainLayout } from '@/layouts';


const Page = function () {
    return (
        <MainLayout title= 'Privacy Policy'>
            <ContactUs />
        </MainLayout>
    );
};

export default Page;